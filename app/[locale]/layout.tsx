import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { locales, localeDirection, isLocale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import { THEME_COOKIE, isTheme } from "../components/theme";
import { siteUrl, ogImage } from "../seo/site";

// خط متغيّر (variable) — ملف واحد يغطي كل الأوزان بدل ملف لكل وزن
// subsets: عربي + لاتيني لأن الموقع صار ثنائي اللغة
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    // metadataBase يحوّل كل الروابط النسبية أدناه إلى مطلقة —
    // بدونه يخرج canonical كـ "/ar" وتتجاهله محركات البحث
    metadataBase: new URL(siteUrl),

    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.title}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: dict.meta.title,
    authors: [{ name: dict.about.doctor.name }],
    creator: dict.about.doctor.name,
    publisher: dict.meta.title,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
        "x-default": "/ar",
      },
    },

    openGraph: {
      type: "website",
      siteName: dict.meta.title,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: dict.meta.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage.url],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    formatDetection: { telephone: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const dir = localeDirection[locale];

  // الاختيار الصريح للثيم يصل من الكوكي فيُرسم على الخادم مباشرة.
  // لا كوكي => لا سمة => CSS يتبع تفضيل النظام.
  const themeCookie = (await cookies()).get(THEME_COOKIE)?.value;
  const theme = isTheme(themeCookie) ? themeCookie : undefined;

  return (
    <html
      lang={locale}
      dir={dir}
      className="h-full antialiased"
      data-theme={theme}
      suppressHydrationWarning
    >

      <body
        className={`
          ${cairo.variable}
          min-h-full
          flex
          flex-col
          bg-white
          font-cairo
          text-slate-900
          dark:bg-neutral-950
          dark:text-neutral-100
        `}
      >
        {/* رابط التخطي — يظهر عند التنقل بلوحة المفاتيح فقط */}
        <a
          href="#main-content"
          className="
            fixed
            -top-24
            end-3
            z-[100]
            rounded-lg
            bg-sky-600
            px-5
            py-3
            font-semibold
            text-white
            shadow-lg
            transition-[top]
            duration-200
            focus:top-3
          "
        >
          {dict.nav.skipToContent}
        </a>

        <Header locale={locale} dict={dict.nav} />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer dict={dict} />
      </body>
    </html>
  );
}
