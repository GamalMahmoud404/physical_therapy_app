import { NextResponse } from "next/server";

import { isLocale, defaultLocale } from "../../i18n/config";
import { getDictionary } from "../../i18n/getDictionary";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

const isDev = process.env.NODE_ENV !== "production";

// =========================
// HELPERS
// =========================

// حماية من حقن HTML داخل الإيميل
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const asText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

// منع حقن ترويسات في الـ subject
const singleLine = (value: string) =>
  value.replace(/[\r\n]+/g, " ").slice(0, 120);

// =========================
// TRANSPORTER
// =========================

// يُعاد استخدامه بين الطلبات بدل إنشاء اتصال جديد كل مرة
let cached: { key: string; transporter: Transporter } | null = null;

function getTransporter(user: string, pass: string) {
  const key = `${user}:${pass}`;

  if (cached?.key !== key) {
    cached = {
      key,

      transporter: nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,

        auth: {
          user,
          pass,
        },

        pool: true,
        connectionTimeout: 10_000,
        greetingTimeout: 10_000,
      }),
    };
  }

  return cached.transporter;
}

// =========================
// MESSAGES
// =========================

// الرسائل الموجّهة للمستخدم تأتي من قاموس اللغة المرسلة مع الطلب

const AUTH_ERROR_HINT =
  "Gmail رفض بيانات الدخول (535 BadCredentials). قيمة GMAIL_APP_PASSWORD يجب أن تكون App Password مكوّنًا من 16 حرفًا إنجليزيًا صغيرًا، وليس كلمة مرور الحساب. أنشئه من https://myaccount.google.com/apppasswords ثم أعد تشغيل السيرفر.";

export async function POST(req: Request) {

  // =========================
  // PARSE BODY
  // =========================

  let body: unknown;

  // اللغة تصل من العميل؛ نرجع للافتراضية إن غابت
  let t = getDictionary(defaultLocale).contact;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: t.apiBadRequest,
      },
      { status: 400 }
    );
  }

  const {
    name,
    phone,
    email,
    message,
    locale,
  } = (body ?? {}) as Record<string, unknown>;

  if (typeof locale === "string" && isLocale(locale)) {
    t = getDictionary(locale).contact;
  }

  const cleanName = asText(name);
  const cleanPhone = asText(phone);
  const cleanEmail = asText(email);
  const cleanMessage = asText(message);

  // =========================
  // VALIDATION
  // =========================

  if (!cleanName || !cleanPhone || !cleanMessage) {
    return NextResponse.json(
      {
        success: false,
        message: t.validationError,
      },
      { status: 400 }
    );
  }

  if (cleanMessage.length > 5000) {
    return NextResponse.json(
      {
        success: false,
        message: t.apiTooLong,
      },
      { status: 400 }
    );
  }

  // البريد اختياري، ويُستخدم في replyTo فقط إذا كان صالحًا
  const replyToEmail =
    cleanEmail && isValidEmail(cleanEmail) ? cleanEmail : undefined;

  // =========================
  // CHECK ENV
  // =========================

  const gmailUser = process.env.GMAIL_USER?.trim();

  // إزالة المسافات لأن Google يعرض الـ App Password على شكل 4 مجموعات
  const gmailPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

  if (!gmailUser || !gmailPassword) {
    console.error(
      "CONTACT CONFIG ERROR: GMAIL_USER أو GMAIL_APP_PASSWORD غير موجود في .env"
    );

    return NextResponse.json(
      {
        success: false,
        message: isDev
          ? "إعدادات البريد الإلكتروني غير موجودة في .env"
          : t.apiUnavailable,
      },
      { status: 500 }
    );
  }

  // تحذير مبكر إذا كانت القيمة لا تشبه App Password
  if (!/^[a-z]{16}$/.test(gmailPassword)) {
    console.warn(
      `CONTACT CONFIG WARNING: GMAIL_APP_PASSWORD طوله ${gmailPassword.length} خانة. ${AUTH_ERROR_HINT}`
    );
  }

  // =========================
  // SEND EMAIL
  // =========================

  try {
    await getTransporter(gmailUser, gmailPassword).sendMail({
      from: `"موقع العلاج الطبيعي" <${gmailUser}>`,

      to: gmailUser,

      replyTo: replyToEmail,

      subject: `رسالة جديدة من ${singleLine(cleanName)}`,

      text: [
        "رسالة جديدة من موقع العلاج الطبيعي",
        "",
        `الاسم: ${cleanName}`,
        `رقم الهاتف: ${cleanPhone}`,
        `البريد الإلكتروني: ${cleanEmail || "غير متوفر"}`,
        "",
        "الرسالة:",
        cleanMessage,
      ].join("\n"),

      html: `
        <div
          dir="rtl"
          style="
            font-family: Arial;
            line-height: 1.8;
            padding: 20px;
          "
        >

          <h2>
            رسالة جديدة من موقع العلاج الطبيعي
          </h2>

          <hr />

          <p>
            <strong>الاسم:</strong>
            ${escapeHtml(cleanName)}
          </p>

          <p>
            <strong>رقم الهاتف:</strong>
            ${escapeHtml(cleanPhone)}
          </p>

          <p>
            <strong>البريد الإلكتروني:</strong>
            ${escapeHtml(cleanEmail) || "غير متوفر"}
          </p>

          <h3>
            الرسالة:
          </h3>

          <div
            style="
              background: #f5f5f5;
              padding: 20px;
              border-radius: 10px;
            "
          >
            ${escapeHtml(cleanMessage).replace(/\n/g, "<br />")}
          </div>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "تم إرسال الرسالة بنجاح",
    });

  } catch (error) {

    // =========================
    // ERROR HANDLING
    // =========================

    const { code, responseCode } = (error ?? {}) as {
      code?: string;
      responseCode?: number;
    };

    const detail =
      error instanceof Error ? error.message : String(error);

    console.error("CONTACT EMAIL ERROR:", code, responseCode, detail);

    const isAuthError = code === "EAUTH" || responseCode === 535;

    if (isAuthError) {
      console.error(`CONTACT AUTH ERROR: ${AUTH_ERROR_HINT}`);
    }

    // في الإنتاج لا نُرجع تفاصيل الخطأ للمتصفح
    return NextResponse.json(
      {
        success: false,

        message: isDev
          ? isAuthError
            ? AUTH_ERROR_HINT
            : `${t.apiUnavailable} (${detail})`
          : t.apiUnavailable,
      },
      { status: 500 }
    );
  }
}
