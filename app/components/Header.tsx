"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useScrollSpy } from "../hooks/useScrollSpy";

import type { Locale } from "../i18n/config";
import type { Dictionary } from "../i18n/getDictionary";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  // كل الروابط تحمل بادئة اللغة
  const links = [
    { id: "home", href: `/${locale}#home`, label: dict.home },
    { id: "about", href: `/${locale}#about`, label: dict.about },
    { id: "services", href: `/${locale}#services`, label: dict.services },
    { id: "articles", href: `/${locale}#articles`, label: dict.articles },
    { id: "contact", href: `/${locale}#contact`, label: dict.contact },
  ];

  const activeId = useScrollSpy(
    links.map(({ id, label }) => ({ id, label })),
    { offset: 100 }
  );

  return (
    <nav
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-gray-200/50
        bg-white/80
        backdrop-blur-lg
        shadow-lg
        shadow-gray-300/20
        transition-all
        duration-300
        dark:border-neutral-700/50
        dark:bg-neutral-900/80
        dark:shadow-black/40
      "
    >

      {/* ================= HEADER ================= */}

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >

        {/* ================= LOGO ================= */}

        <Link
          href={`/${locale}#home`}
          onClick={closeMenu}
          className="
            group
            flex
            items-center
            gap-3
            transition-all
            duration-300
            hover:scale-105
          "
        >

          {/* ================= LOGO ICON ================= */}

          <Image
            src="/logo.png"
            alt="Logo"
            width={96}
            height={96}
            sizes="32px"
            priority
            className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
          />

          {/* ================= BRAND NAME ================= */}

          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-bold text-gray-800 dark:text-neutral-100">
              {dict.brand}
            </span>
            <span className="text-xs text-gray-500 dark:text-neutral-400">
              {dict.brandSubtitle}
            </span>
          </div>

        </Link>


        {/* ================= DESKTOP LINKS ================= */}

        <div className="hidden items-center gap-1 md:flex lg:gap-2">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                group
                relative
                px-3
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300
                rounded-lg
                ${
                  activeId === link.id && link.id !== "home"
                    ? "bg-sky-100/60 text-sky-700 shadow-md shadow-sky-400/30 dark:bg-sky-900/30 dark:text-sky-300 dark:shadow-sky-500/30"
                    : "text-gray-600 dark:text-neutral-400 hover:bg-gray-100/50 dark:hover:bg-neutral-800/50 hover:text-sky-600 dark:hover:text-sky-300 hover:shadow-md hover:shadow-gray-400/20 dark:hover:shadow-gray-600/30"
                }
              `}
            >
              {link.label}
              {activeId === link.id && link.id !== "home" && (
                <span
                  className="
                    absolute
                    bottom-1
                    start-3
                    h-1
                    w-6
                    bg-gradient-to-r
                    from-sky-500
                    to-cyan-500
                    rounded-full
                    shadow-lg
                    shadow-sky-500/50
                    dark:shadow-sky-400/40
                  "
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}

        </div>


        {/* ================= ACTIONS ================= */}

        <div className="flex items-center gap-1">

          <LanguageSwitcher locale={locale} dict={dict} />

          <ThemeToggle dict={dict} />

          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? dict.closeMenu : dict.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-2xl
              font-bold
              transition-all
              duration-300
              md:hidden
              ${
                isOpen
                  ? "bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/30"
                  : "text-gray-700 hover:bg-gray-100/60 dark:text-neutral-300 dark:hover:bg-neutral-800/60"
              }
              dark:hover:text-sky-400
            `}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <div
        id="mobile-menu"
        inert={!isOpen}
        className={`
          overflow-hidden
          border-t
          border-gray-200/30
          bg-gradient-to-b
          from-white/90
          to-gray-50/80
          backdrop-blur-sm
          transition-all
          duration-300
          md:hidden
          dark:border-neutral-700/30
          dark:from-neutral-900/90
          dark:to-neutral-950/80
          ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            flex
            flex-col
            px-6
            py-6
            space-y-2
          "
        >

          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`
                block
                py-3.5
                px-4
                font-semibold
                text-sm
                transition-all
                duration-300
                rounded-lg
                ${
                  activeId === link.id && link.id !== "home"
                    ? "bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 shadow-md shadow-sky-200/50 dark:from-sky-900/40 dark:to-cyan-900/30 dark:text-sky-300 dark:shadow-sky-900/30"
                    : "text-gray-700 dark:text-neutral-300 hover:bg-gray-100/60 dark:hover:bg-neutral-800/60 hover:text-sky-600 dark:hover:text-sky-300 hover:shadow-md hover:shadow-gray-300/40 dark:hover:shadow-gray-700/30 transition-all"
                }
              `}
            >
              {link.label}
            </Link>
          ))}

        </div>

      </div>

    </nav>
  );
}
