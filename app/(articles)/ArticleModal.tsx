"use client";

import { useEffect, useRef, useState } from "react";

import type { Dictionary } from "../i18n/getDictionary";

// =========================================================
// نافذة المقال — تُحمَّل عند الطلب فقط (next/dynamic في Articles)
// فلا يدخل كودها في حزمة الصفحة الأولى ولا في زمن الترطيب.
// =========================================================

export type Article = Dictionary["articles"]["items"][number] & {
  id: number;
  number: string;
};

export default function ArticleModal({
  article,
  total,
  t,
  readingTime,
  hasPrevious,
  hasNext,
  onClose,
  onPrevious,
  onNext,
}: {
  article: Article;
  total: number;
  t: Dictionary["articles"];
  readingTime: (content: readonly string[]) => string;
  hasPrevious: boolean;
  hasNext: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const [progress, setProgress] = useState(0);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // منع تمرير الصفحة خلف النافذة وإرجاع التركيز عند الإغلاق

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, []);

  // إغلاق بـ Escape + التنقل بالأسهم + حصر التركيز داخل النافذة

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        onPrevious();
        return;
      }

      if (event.key === "ArrowLeft") {
        onNext();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])",
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  // إرجاع القراءة لأول المقال عند التنقل بين المقالات

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
    setProgress(0);
  }, [article.id]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const scrollable = scrollHeight - clientHeight;

    setProgress(scrollable <= 0 ? 100 : (scrollTop / scrollable) * 100);
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        animate-overlay-in
        items-center
        justify-center
        bg-gray-900/70
        p-3
        backdrop-blur-md
        md:p-6
      "
      onClick={onClose}
    >
      {/* POPUP */}

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-title"
        tabIndex={-1}
        className="
          relative
          flex
          max-h-[92vh]
          w-full
          max-w-3xl
          animate-modal-in
          flex-col
          overflow-hidden
          rounded-[2rem]
          border
          border-white/60
          bg-white
          dark:border-slate-700
          dark:bg-slate-900
          shadow-[0_30px_100px_-20px_rgba(15,23,42,0.6)]
          outline-none
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* ================= HEADER ================= */}

        <div
          className="
            relative
            shrink-0
            border-b
            border-gray-100
            bg-gradient-to-br
            from-sky-50
            via-white
            to-white
            dark:border-slate-800
            dark:from-sky-950/50
            dark:via-slate-900
            dark:to-slate-900
            px-6
            py-7
            md:px-10
            md:py-8
          "
        >
          {/* TOP ACCENT */}

          <span
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              top-0
              h-1.5
              bg-gradient-to-l
              from-sky-400
              via-sky-500
              to-sky-600
            "
          />

          {/* CLOSE */}

          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="
              absolute
              left-4
              top-5
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-2xl
              leading-none
              text-gray-500
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-400
              shadow-sm
              transition-all
              duration-300
              hover:rotate-90
              hover:border-sky-600
              hover:bg-sky-600
              hover:text-white
              md:left-6
              md:top-7
            "
          >
            ×
          </button>

          <div className="pl-12 md:pl-14">
            {/* CATEGORY */}

            <span
              className="
                inline-flex
                rounded-full
                border
                border-sky-100
                bg-sky-50
                px-4
                py-2
                text-xs
                font-bold
                text-sky-600
                dark:border-sky-800
                dark:bg-sky-950
                dark:text-sky-400
              "
            >
              {article.category}
            </span>

            {/* TITLE */}

            <h2
              id="article-title"
              className="
                mt-5
                text-2xl
                font-extrabold
                leading-[1.7]
                text-gray-900
                md:text-4xl
              "
            >
              {article.title}
            </h2>

            {/* META */}

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-400 dark:text-slate-400">
              <span>{article.date}</span>

              <span className="h-1 w-1 rounded-full bg-gray-300" />

              <span className="font-semibold text-sky-500">
                {readingTime(article.content)}
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-300" />

              <span>
                {t.counter
                  .replace("{current}", article.number)
                  .replace("{total}", String(total))}
              </span>
            </div>
          </div>

          {/* READING PROGRESS */}

          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-100">
            <div
              className="h-full bg-gradient-to-l from-sky-400 to-sky-600 transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="
            overflow-y-auto
            px-6
            py-8
            md:px-10
            md:py-9
          "
        >
          <div className="space-y-7">
            {article.content.map((paragraph, index) => (
              <div key={index} className="relative ps-10">
                {/* NUMBER */}

                <span
                  className="
                    absolute
                    start-0
                    top-1.5
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-sky-50
                    text-[11px]
                    font-bold
                    text-sky-600
                    ring-1
                    ring-sky-100
                    dark:bg-sky-950
                    dark:text-sky-400
                    dark:ring-sky-800
                  "
                >
                  {index + 1}
                </span>

                {/* TEXT */}

                <p
                  className={
                    index === 0
                      ? "text-lg font-medium leading-9 text-gray-800 md:text-xl md:leading-10 dark:text-slate-100"
                      : "text-base leading-9 text-gray-600 md:text-[17px] md:leading-10 dark:text-slate-300"
                  }
                >
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* DISCLAIMER */}

          <div
            className="
              mt-9
              rounded-2xl
              border
              border-amber-100
              bg-amber-50
              p-5
              text-sm
              leading-7
              text-amber-800
            "
          >
            <strong>{t.disclaimerLabel}</strong>{" "}
            {t.disclaimerText}
          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div
          className="
            shrink-0
            border-t
            border-gray-100
            bg-gray-50/70
            px-6
            py-5
            md:px-10
            dark:border-slate-800
            dark:bg-slate-950/70
          "
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* NAVIGATION */}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onPrevious}
                disabled={!hasPrevious}
                aria-label={t.previousArticle}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-gray-600
                  transition-all
                  duration-300
                  hover:border-sky-600
                  hover:text-sky-600
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  disabled:hover:border-gray-200
                  disabled:hover:text-gray-600
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-300
                  dark:hover:border-sky-500
                  dark:hover:text-sky-400
                  dark:disabled:hover:border-slate-700
                  dark:disabled:hover:text-slate-300
                "
              >
                <span aria-hidden="true">{t.previousArrow}</span>
                {t.previous}
              </button>

              <button
                type="button"
                onClick={onNext}
                disabled={!hasNext}
                aria-label={t.nextArticle}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-gray-600
                  transition-all
                  duration-300
                  hover:border-sky-600
                  hover:text-sky-600
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  disabled:hover:border-gray-200
                  disabled:hover:text-gray-600
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-300
                  dark:hover:border-sky-500
                  dark:hover:text-sky-400
                  dark:disabled:hover:border-slate-700
                  dark:disabled:hover:text-slate-300
                "
              >
                {t.next}
                <span aria-hidden="true">{t.nextArrow}</span>
              </button>
            </div>

            {/* CLOSE */}

            <button
              type="button"
              onClick={onClose}
              className="
                rounded-xl
                bg-gray-900
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-sky-600
              "
            >
              {t.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
