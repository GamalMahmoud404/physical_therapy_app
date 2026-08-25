"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export function Breadcrumb({
  items,
  locale,
}: {
  items: BreadcrumbItem[];
  locale: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-6 py-4"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="text-primary-600 hover:text-primary-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  item.current
                    ? "text-gray-900 font-semibold dark:text-neutral-200"
                    : "text-gray-600 dark:text-neutral-400"
                }
              >
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span
                className="text-gray-400 dark:text-neutral-600"
                aria-hidden="true"
              >
                {locale === "ar" ? "←" : "→"}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
