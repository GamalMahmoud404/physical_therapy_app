"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { Dictionary } from "../i18n/getDictionary";

const slideAssets = [
  { image: "/hero-1.jpg", link: "#contact" },
  { image: "/1.jpg", link: "#services" },
  { image: "/4.jpg", link: "#about" },
  { image: "/2.jpg", link: "#contact" },
];

export default function Main({ dict }: { dict: Dictionary["hero"] }) {
  // دمج الصور (ثابتة) مع النصوص (من القاموس)
  const slides = slideAssets.map((asset, index) => ({
    ...asset,
    ...dict.slides[index],
  }));

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // =========================
  // AUTO SLIDE
  // =========================
  // متوقف عند: ضغط زر الإيقاف، أو تفضيل المستخدم تقليل الحركة
  // (WCAG 2.2.2 — يجب توفير وسيلة لإيقاف المحتوى المتحرك تلقائيًا)

  useEffect(() => {
    if (isPaused) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // =========================
  // NEXT
  // =========================

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // =========================
  // PREVIOUS
  // =========================

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full">

      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      {/*
        على هاتف بوضع أفقي (ارتفاع ≤ 520px) لا تتّسع الشاشة للصورة
        وبطاقة النص معًا. بدل ضغط الاثنين حتى يُقصّ الزر، نمنح القسم
        ارتفاعًا ثابتًا ويمرّر المستخدم قليلًا — وهو السلوك المعتاد
        للأقسام البطلة على الشاشات القصيرة.
      */}

      <section
        className="
          relative
          h-[100svh]
          w-full
          overflow-hidden
          bg-neutral-900
          max-md:[@media(max-height:520px)]:h-[34rem]
        "
      >

        {/* ========================= */}
        {/* SLIDES */}
        {/* ========================= */}

        {slides.map((slide, index) => (
          <div
            key={slide.image}
            aria-hidden={index !== current}
            className={`
              absolute
              inset-0
              flex
              flex-col
              md:block
              transition-all
              duration-1000
              ease-in-out
              ${
                index === current
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-8 opacity-0"
              }
            `}
          >

            {/* ========================= */}
            {/* IMAGE */}
            {/* ========================= */}

            {/*
              الصور مؤطَّرة للعربية: النص يمينًا والمشهد يسارًا.
              في الإنجليزية ينتقل النص لليسار، فنعكس الصورة أفقيًا
              كي يبقى المشهد في الجهة المقابلة للنص.
            */}

            <div
              className="
                relative
                h-[48%]
                w-full
                shrink-0
                md:absolute
                md:inset-0
                md:h-full
              "
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover ltr:-scale-x-100"
              />

              {/* ========================= */}
              {/* DARK OVERLAY */}
              {/* ========================= */}

              <div className="absolute inset-0 bg-black/30" />

              {/*
                على الهاتف الصورة تنتهي عند لوح النص بخط أفقي حاد.
                هذا التدرّج يذيب الحافة في لون الصفحة نفسه
                (‎--aurora-base‎ فيتبع الوضع الليلي تلقائيًا).
                لا نستخدم ‎--glass-bg‎ لأن قيمة .glass-strong محصورة
                داخل اللوح نفسه ولا تصل إلى هنا.
              */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-16
                  bg-gradient-to-t
                  from-[var(--aurora-base)]
                  to-transparent
                  md:hidden
                "
              />
            </div>

            {/* ========================= */}
            {/* CONTENT */}
            {/* ========================= */}

            {/*
              على الهاتف: لوح مستقل أسفل الصورة.
              من md: يعود ليغطي الصورة بتدرّج من جهة النص.
            */}

            <div
              className="
                relative
                flex
                min-h-0
                flex-1
                items-center
                pt-10
                pb-8
                md:absolute
                md:inset-0
                md:pt-16
                md:pb-20
              "
            >

              {/* خلفية مصمتة خلف النص — الهاتف فقط */}

              <div
                className="
                  glass-strong
                  absolute
                  inset-0
                  border-0
                  md:hidden
                "
              />

              {/* تدرّج فوق الصورة — من md فقط */}

              <div
                className="
                  absolute
                  inset-0
                  hidden
                  bg-gradient-to-r
                  from-white
                  via-white/90
                  to-transparent
                  rtl:bg-gradient-to-l
                  dark:from-neutral-950
                  dark:via-neutral-950/90
                  md:block
                  md:w-[70%]
                "
              />

              <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-28">

                {/*
                  على الهاتف: النص داخل بطاقة زجاجية مستقلة.
                  glass-soft لأن البطاقة تقع داخل لوح glass-strong،
                  وطبقتا ضبابية فوق بعضهما تُعتِمان الناتج.
                  من md تُلغى صفات البطاقة (خلفية وحد وحشو وحواف)
                  فيعود العنصر مجرّد حاوية عرض كما كان.
                */}

                <div
                  className="
                    glass-soft
                    max-w-xl
                    rounded-3xl
                    px-6
                    py-8
                    md:rounded-none
                    md:border-0
                    md:bg-transparent
                    md:p-0
                    md:shadow-none
                  "
                >

                  {/* SMALL TITLE */}

                  <p
                    className="
                      mb-3
                      text-xs
                      font-bold
                      tracking-[0.25em]
                      text-sky-600
                      sm:text-sm
                      md:text-base
                      dark:text-sky-400
                      [@media(max-height:520px)]:mb-1
                    "
                  >
                    {slide.smallTitle}
                  </p>

                  {/* TITLE */}
                  {/*
                    الشريحة النشطة فقط تحمل <h1>. الشرائح الأخرى موجودة في
                    الصفحة لكنها تصبح <p> — وإلا صار في الصفحة أربعة h1
                    وهو ما يربك محركات البحث.
                  */}

                  {(() => {
                    const TitleTag = index === current ? "h1" : "p";

                    return (
                      <TitleTag
                        className="
                          mb-4
                          text-balance
                          text-3xl
                          font-bold
                          leading-tight
                          text-gray-900
                          dark:text-white
                          sm:mb-5
                          sm:text-5xl
                          md:text-6xl
                          [@media(max-height:520px)]:mb-2
                          [@media(max-height:520px)]:text-3xl
                        "
                      >
                        {slide.title}
                      </TitleTag>
                    );
                  })()}

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mb-6
                      max-w-lg
                      text-[15px]
                      leading-7
                      text-gray-600
                      dark:text-neutral-300
                      sm:mb-8
                      sm:text-base
                      sm:leading-8
                      md:text-lg
                      [@media(max-height:520px)]:mb-4
                      [@media(max-height:520px)]:text-sm
                      [@media(max-height:520px)]:leading-6
                    "
                  >
                    {slide.description}
                  </p>

                  {/* ========================= */}
                  {/* BUTTON */}
                  {/* ========================= */}

                  <a
                    href={slide.link}
                    tabIndex={index === current ? 0 : -1}
                    className="
                      group
                      relative
                      flex
                      w-full
                      justify-center
                      overflow-hidden
                      rounded-xl
                      border
                      border-sky-600
                      px-8
                      py-3.5
                      sm:inline-flex
                      sm:w-auto
                      font-bold
                      text-sky-600
                      shadow-lg
                      shadow-sky-600/20
                      transition-all
                      duration-500
                      hover:shadow-2xl
                      hover:shadow-sky-600/40
                      hover:scale-105
                      active:scale-95
                      dark:border-sky-400
                      dark:text-sky-300
                      dark:hover:text-neutral-950
                      dark:shadow-sky-400/20
                      dark:hover:shadow-sky-400/40
                    "
                  >

                    {/* BUTTON BACKGROUND */}

                    <span
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-sky-600
                        to-cyan-600
                        transition-transform
                        duration-500
                        group-hover:translate-x-0
                        dark:from-sky-400
                        dark:to-cyan-400
                      "
                    />

                    {/* BUTTON TEXT */}

                    <span
                      className="
                        relative
                        z-10
                        transition-colors
                        duration-500
                        flex
                        items-center
                        gap-2
                        group-hover:text-white
                      "
                    >
                      {slide.button}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 rtl:rotate-180 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                      >
                        →
                      </span>
                    </span>

                  </a>

                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ========================= */}
        {/* PREVIOUS */}
        {/* ========================= */}

        <button
          type="button"
          onClick={prevSlide}
          aria-label={dict.previousSlide}
          className="
            absolute
            left-4
            top-1/2
            z-20
            hidden
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-sky-600
            to-blue-700
            text-3xl
            font-bold
            leading-none
            text-white
            opacity-60
            shadow-lg
            shadow-sky-600/40
            ring-2
            ring-white/40
            transition-all
            duration-300
            hover:scale-125
            hover:opacity-100
            hover:shadow-xl
            hover:shadow-sky-600/60
            hover:ring-white/70
            md:left-8
            md:flex
          "
        >
          ‹
        </button>

        {/* ========================= */}
        {/* NEXT */}
        {/* ========================= */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label={dict.nextSlide}
          className="
            absolute
            right-4
            top-1/2
            z-20
            hidden
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-sky-600
            to-blue-700
            text-3xl
            font-bold
            leading-none
            text-white
            opacity-60
            shadow-lg
            shadow-sky-600/40
            ring-2
            ring-white/40
            transition-all
            duration-300
            hover:scale-125
            hover:opacity-100
            hover:shadow-xl
            hover:shadow-sky-600/60
            hover:ring-white/70
            md:right-8
            md:flex
          "
        >
          ›
        </button>

        {/* ========================= */}
        {/* INDICATORS */}
        {/* ========================= */}

        {/*
          على الهاتف الشريط يطفو فوق أسفل الصورة، فالنقاط البيضاء قد
          تقع على منطقة فاتحة فتختفي. الحبّة الداكنة خلفها تضمن
          ظهورها مهما كانت الصورة، وتُلغى من md حيث الشريط أسفل الشاشة.
        */}

        <div
          className="
            absolute
            inset-x-0
            bottom-[calc(52%+0.5rem)]
            z-20
            mx-auto
            flex
            w-fit
            items-center
            justify-center
            gap-2
            rounded-full
            bg-black/45
            px-3
            py-1.5
            backdrop-blur-md
            md:bottom-6
            md:py-0
            md:w-full
            md:rounded-none
            md:bg-transparent
            md:px-0
            md:backdrop-blur-none
          "
        >
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`${dict.goToSlide} ${index + 1}`}
              aria-current={index === current}
              className="group flex h-10 items-center px-1 transition-transform hover:scale-110"
            >
              <span
                className={`
                  block
                  h-2.5
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    index === current
                      ? "w-12 bg-gradient-to-r from-sky-600 to-cyan-600 shadow-lg shadow-sky-600/40"
                      : "w-2.5 bg-white/60 group-hover:bg-white shadow-md"
                  }
                `}
              />
            </button>
          ))}

          {/* ================= PAUSE / PLAY ================= */}

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={
              isPaused ? dict.playAutoplay : dict.pauseAutoplay
            }
            className="
              ms-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              md:h-10
              md:w-10
              from-sky-600
              to-blue-700
              text-xs
              text-white
              opacity-70
              shadow-lg
              shadow-sky-600/30
              ring-2
              ring-white/40
              transition-all
              duration-300
              hover:opacity-100
              hover:scale-110
              hover:shadow-xl
              hover:ring-white/60
            "
          >
            <span aria-hidden="true">{isPaused ? "▶" : "❚❚"}</span>
          </button>
        </div>

      </section>
    </div>
  );
}