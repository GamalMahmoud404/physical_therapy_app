// =========================================================
// قسم المقالات — مكوّن خادم: البطاقات كلها ثابتة فلا يُرسَل
// كودها للمتصفح. التفاعل (فتح المقال) داخل غلاف عميل صغير.
// =========================================================

import type { Dictionary } from "../i18n/getDictionary";

import ArticlesInteractive from "./ArticlesInteractive";
import { buildArticles, buildReadingTime } from "./readingTime";

export default function ArticlesPage({ dict }: { dict: Dictionary["articles"] }) {
  const t = dict;

  const articles = buildArticles(t);
  const readingTime = buildReadingTime(t);

  return (
    <section
      id="articles"
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-sky-50/40
        to-white
        px-4
        py-24
        dark:from-neutral-950
        dark:via-neutral-900/25
        dark:to-neutral-950
      "
    >
      {/* ================================================= */}
      {/* DECORATION */}
      {/* ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-24
          end-[-6rem]
          h-80
          w-80
          rounded-full
          bg-sky-300/20
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-10
          start-[-8rem]
          h-96
          w-96
          rounded-full
          bg-purple-300/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="mb-14 text-center"
        >
          {/* BADGE */}

          <span
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-sky-100
              bg-white/80
              px-5
              py-2
              shadow-sm
              backdrop-blur-sm
              dark:border-neutral-800
              dark:bg-neutral-900/80
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-sky-400
                  opacity-75
                "
              />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
            </span>

            <span
              className="
                bg-gradient-to-r
                from-sky-600
                via-cyan-500
                to-teal-500
                bg-clip-text
                text-sm
                font-bold
                text-transparent
              "
            >
              {t.badge}
            </span>
          </span>

          {/* TITLE */}

          <h2
            className="
              mt-6
              text-3xl
              font-extrabold
              leading-tight
              text-gray-800
              md:text-5xl
              dark:text-neutral-100
            "
          >
            {t.titleBefore}{" "}

            <span className="relative inline-block">
              <span className="relative z-10 text-sky-600 dark:text-sky-400">
                {t.titleHighlight}
              </span>

              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-x-0
                  bottom-1
                  z-0
                  h-3
                  rounded-full
                  bg-sky-200/60
                "
              />
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[17px]
              leading-9
              text-gray-500
              dark:text-neutral-400
            "
          >
            {t.description}
          </p>

          {/* DIVIDER */}

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-px w-16 bg-gradient-to-l from-sky-400 to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="h-px w-16 bg-gradient-to-r from-sky-400 to-transparent" />
          </div>
        </div>

        {/* ================================================= */}
        {/* ARTICLES */}
        {/* ================================================= */}

        <ArticlesInteractive articles={articles} t={t}>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={article.id}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={index * 100}
                data-aos-once="true"
                data-article-id={article.id}
                className="
                  group
                  relative
                  flex
                  cursor-pointer
                  min-h-[360px]
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-100
                  bg-white
                  p-7
                  dark:border-neutral-800
                  dark:bg-neutral-900
                  shadow-[1px_1px_20px_-4px_rgb(212,212,212)]
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-sky-100
                  hover:shadow-[1px_12px_35px_-10px_rgba(2,132,199,0.35)]
                  dark:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.9)]
                  dark:hover:shadow-[0_22px_50px_-10px_rgba(0,0,0,0.95)]
                "
                 style={{ transition: "all 0.3s ease" }}
              >
                {/* TOP ACCENT */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    origin-right
                    scale-x-0
                    bg-gradient-to-l
                    from-sky-400
                    via-sky-500
                    to-sky-600
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* HOVER BACKGROUND */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-sky-500/10
                    transition-transform
                    duration-700
                    group-hover:scale-[2.6]
                  "
                />

                {/* TOP */}

                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="
                      text-4xl
                      font-black
                      tracking-tight
                      text-neutral-100
                      transition-colors
                      duration-500
                      group-hover:text-sky-100
                    "
                  >
                    {article.number}
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-gray-100
                      bg-gray-50
                      px-4
                      py-1.5
                      text-xs
                      font-bold
                      text-gray-500
                      transition
                      duration-300
                      group-hover:border-sky-200
                      group-hover:bg-sky-50
                      group-hover:text-sky-600
                      dark:border-neutral-700
                      dark:bg-neutral-800
                      dark:text-neutral-400
                      dark:group-hover:border-sky-800
                      dark:group-hover:bg-sky-950
                      dark:group-hover:text-sky-400
                    "
                  >
                    {article.category}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="relative z-10 flex flex-1 flex-col pt-6">
                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-9
                      text-gray-800
                      transition-colors
                      duration-300
                      group-hover:text-sky-600
                      dark:text-neutral-100
                      dark:group-hover:text-sky-400
                    "
                  >
                    {article.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-[15px] leading-8 text-gray-500 dark:text-neutral-400">
                    {article.description}
                  </p>
                </div>

                {/* BOTTOM */}

                <div
                  className="
                    relative
                    z-10
                    mt-7
                    flex
                    items-center
                    justify-between
                    gap-3
                    border-t
                    border-gray-100
                    pt-5
                    dark:border-neutral-800
                  "
                >
                  <div className="flex flex-col gap-1 text-xs text-gray-400 dark:text-neutral-400">
                    <span>{article.date}</span>

                    <span className="font-semibold text-sky-500">
                      {readingTime(article.content)}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      gap-2
                      rounded-full
                      bg-neutral-900
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      group-hover:bg-sky-600
                    "
                  >
                    {t.readMore}

                    <span
                      aria-hidden="true"
                      className="
                        text-base
                        transition-transform
                        duration-300
                        rtl:rotate-180
                        ltr:group-hover:translate-x-1
                        rtl:group-hover:-translate-x-1
                      "
                    >
                      →
                    </span>
                  </button>
                </div>
              </article>
              ))}
          </div>
        </ArticlesInteractive>

      </div>

    </section>
  );
}
