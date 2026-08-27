"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { locales, localeNames, type Locale } from "../i18n/config";
import type { Dictionary } from "../i18n/getDictionary";

const localeFlags: Record<Locale, string> = {
  ar: "🇸🇦",
  en: "🇺🇸",
  fr: "🇫🇷",
  es: "🇪🇸",
};

export default function LanguageSwitcher({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchTo = (target: Locale) => {
    document.cookie = `locale=${target};path=/;max-age=31536000;samesite=lax`;

    const segments = pathname.split("/");

    if (locales.includes(segments[1] as Locale)) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }

    router.push(segments.join("/") || `/${target}`);
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
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
          transition-all
          duration-300
          hover:bg-gray-100
          hover:text-blue-600
          dark:text-neutral-300
          dark:hover:bg-neutral-800
          dark:hover:text-sky-400
        "
      >
        {locale.toUpperCase()}
      </button>

      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-12
            mt-2
            rounded-lg
            bg-white
            shadow-lg
            dark:bg-neutral-800
            border
            border-gray-200/50
            dark:border-neutral-700/50
            overflow-hidden
            z-50
          "
        >
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => switchTo(lang)}
              className={`
                block
                w-full
                px-4
                py-3
                text-sm
                font-medium
                transition-colors
                text-left
                ${
                  locale === lang
                    ? "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
                    : "text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                }
              `}
            >
              {localeNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
