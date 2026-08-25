"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { Dictionary } from "../i18n/getDictionary";
import {
  applyTheme,
  currentTheme,
  resolveTheme,
  systemTheme,
  userChoseTheme,
  type Theme,
} from "./theme";

// =========================================================
// زر تبديل الوضع الليلي / النهاري
//
// الثيم يُحفظ في localStorage ويُعاد التحقق منه باستمرار:
//  - سكربت ما قبل الرسم يطبّقه قبل أول رسم (بلا وميض)
//  - تأثير يعيد التحقق عند كل تنقّل بين الصفحات واللغات
//  - MutationObserver يعيده فورًا لو مسحه أي شيء آخر
// =========================================================

export default function ThemeToggle({ dict }: { dict: Dictionary["nav"] }) {
  // null = لم نقرأ الحالة بعد (أثناء SSR وقبل الترطيب)
  const [theme, setTheme] = useState<Theme | null>(null);
  const pathname = usePathname();

  // إعادة التحقق عند أول تحميل وعند كل تنقّل — تبديل اللغة يعيد رسم
  // الـ layout، وهذا ما كان يفقد الوضع الليلي سابقًا
  useEffect(() => {
    const expected = resolveTheme();

    if (currentTheme() !== expected) {
      applyTheme(expected, userChoseTheme() ? "user" : "system");
    }

    setTheme(expected);
  }, [pathname]);

  // شبكة أمان: لو أزال أي شيء السمة، نعيدها من المصدر المحفوظ
  useEffect(() => {
    const html = document.documentElement;

    const observer = new MutationObserver(() => {
      const expected = resolveTheme();

      if (currentTheme() !== expected) {
        html.setAttribute("data-theme", expected);
        setTheme(expected);
      }
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    return () => observer.disconnect();
  }, []);

  // متابعة تغيّر تفضيل النظام — فقط لمن لم يختر يدويًا
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = () => {
      if (userChoseTheme()) return;

      const next = systemTheme();
      applyTheme(next, "system");
      setTheme(next);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";

    applyTheme(next, "user");
    setTheme(next);
  };

  const isDark = theme === "dark";

  const label =
    theme === null
      ? dict.toggleTheme
      : isDark
        ? dict.toLightMode
        : dict.toDarkMode;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="
        group
        relative
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-lg
        text-gray-700
        transition-all
        duration-300
        hover:bg-gradient-to-br
        hover:from-amber-100
        hover:to-yellow-100
        hover:text-amber-600
        hover:shadow-md
        hover:shadow-amber-300/30
        dark:text-neutral-300
        dark:hover:bg-gradient-to-br
        dark:hover:from-sky-900/50
        dark:hover:to-cyan-900/50
        dark:hover:text-sky-300
        dark:hover:shadow-md
        dark:hover:shadow-sky-500/20
      "
    >
      {/* الشمس — تظهر في الوضع الليلي (أي الضغط يعيدك للنهاري) */}

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="
          hidden
          h-5
          w-5
          dark:block
          transition-transform
          duration-500
          group-hover:rotate-90
          group-active:scale-95
        "
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>

      {/* القمر — تظهر في الوضع النهاري */}

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="
          h-5
          w-5
          dark:hidden
          transition-transform
          duration-500
          group-hover:-rotate-12
          group-active:scale-95
        "
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
