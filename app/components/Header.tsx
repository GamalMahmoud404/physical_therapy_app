"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

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
    { href: `/${locale}#home`, label: dict.home },
    { href: `/${locale}#about`, label: dict.about },
    { href: `/${locale}#services`, label: dict.services },
    { href: `/${locale}#articles`, label: dict.articles },
    { href: `/${locale}#contact`, label: dict.contact },
  ];

  return (
    <nav
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-gray-200
        bg-white
        shadow-sm
        dark:border-neutral-800
        dark:bg-neutral-900
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
            flex
            items-center
            gap-2
            text-xl
            font-bold
            text-blue-600
            transition
            hover:text-blue-700
            sm:text-2xl
            dark:text-sky-400
            dark:hover:text-sky-300
          "
        >

          {/* ================= LOGO ICON ================= */}

          <Image
            src="/logo.png"
            alt=""
            width={96}
            height={96}
            sizes="32px"
            priority
            aria-hidden="true"
            className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
          />

          {dict.brand}
        </Link>


        {/* ================= DESKTOP LINKS ================= */}

        <div className="hidden items-center gap-6 md:flex lg:gap-8">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                text-gray-700
                transition
                duration-300
                hover:text-blue-600
                dark:text-neutral-300
                dark:hover:text-sky-400
              "
            >
              {link.label}
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
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-2xl
              text-gray-700
              transition
              hover:bg-gray-100
              hover:text-blue-600
              md:hidden
              dark:text-neutral-300
              dark:hover:bg-neutral-800
              dark:hover:text-sky-400
            "
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
          border-gray-100
          bg-white
          transition-all
          duration-300
          md:hidden
          dark:border-neutral-800
          dark:bg-neutral-900
          ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            flex
            flex-col
            px-6
            py-4
          "
        >

          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`
                py-4
                text-gray-700
                transition
                duration-300
                hover:bg-gray-50
                hover:text-blue-600
                dark:text-neutral-300
                dark:hover:bg-neutral-800
                dark:hover:text-sky-400
                ${
                  index < links.length - 1
                    ? "border-b border-gray-100 dark:border-neutral-800"
                    : ""
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
