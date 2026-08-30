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
        px-4
        py-24
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
          bg-slate-400/18
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
          bg-slate-400/12
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
              glass-soft
              inline-flex
              items-center
              gap-2.5
              rounded-full
              px-5
              py-2
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
                text-sm
                font-bold
                text-slate-700
                dark:text-neutral-200
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
              text-gray-600
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
                  glass
                  glass-hover
                  group
                  relative
                  flex
                  cursor-pointer
                  min-h-[360px]
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  p-7
                "
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
                      glass-soft
                      rounded-full
                      px-4
                      py-1.5
                      text-xs
                      font-bold
                      text-gray-600
                      dark:text-neutral-300
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

                  <p className="mt-4 line-clamp-3 text-[15px] leading-8 text-gray-600 dark:text-neutral-400">
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
                      bg-gradient-to-r
                      from-sky-600
                      to-cyan-600
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-sky-500/30
                      transition-all
                      duration-300
                      hover:shadow-xl
                      hover:shadow-sky-500/50
                      hover:-translate-y-0.5
                      active:scale-95
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
