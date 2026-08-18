import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { locales, defaultLocale } from "./app/i18n/config";

// =========================================================
// توجيه اللغة — يحوّل / إلى /ar أو /en حسب تفضيل المتصفح
// ملاحظة: هذا الإصدار من Next سمّى الملف proxy بدل middleware
// =========================================================

function resolveLocale(request: NextRequest): string {
  // اختيار المستخدم السابق له الأولوية
  const saved = request.cookies.get("locale")?.value;
  if (saved && (locales as readonly string[]).includes(saved)) return saved;

  // ثم Accept-Language
  const header = request.headers.get("accept-language");
  if (header) {
    const preferred = header
      .split(",")
      .map((part) => {
        const [tag, q] = part.trim().split(";q=");
        return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { tag } of preferred) {
      const base = tag.split("-")[0];
      if ((locales as readonly string[]).includes(base)) return base;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return;

  const locale = resolveLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // تخطّي ملفات Next الداخلية والأصول الثابتة
  matcher: [
    "/((?!_next|api|favicon.ico|logo.png|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|txt|xml)$).*)",
  ],
};
