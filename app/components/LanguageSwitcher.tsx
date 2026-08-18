"use client";

import { usePathname, useRouter } from "next/navigation";

import { locales, type Locale } from "../i18n/config";
import type { Dictionary } from "../i18n/getDictionary";

// =========================================================
// زر تبديل اللغة
// يبدّل الجزء الأول من المسار (/ar/... <-> /en/...) ويحفظ
// الاختيار في كوكي ليحترمه proxy في الزيارات القادمة.
// =========================================================

export default function LanguageSwitcher({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const pathname = usePathname();
  const router = useRouter();

  const target: Locale = locale === "ar" ? "en" : "ar";

  const switchTo = () => {
    // سنة واحدة
    document.cookie = `locale=${target};path=/;max-age=31536000;samesite=lax`;

    const segments = pathname.split("/");

    // segments[1] هو اللغة الحالية إن وُجدت
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }

    router.push(segments.join("/") || `/${target}`);
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={switchTo}
      aria-label={dict.switchLanguage}
      title={dict.switchLanguage}
      className="
        flex
        h-10
        min-w-10
        shrink-0
        items-center
        justify-center
        rounded-lg
        px-2
        text-sm
        font-bold
        text-gray-700
        transition
        hover:bg-gray-100
        hover:text-blue-600
        dark:text-neutral-300
        dark:hover:bg-neutral-800
        dark:hover:text-sky-400
      "
    >
      {dict.languageShort}
    </button>
  );
}
