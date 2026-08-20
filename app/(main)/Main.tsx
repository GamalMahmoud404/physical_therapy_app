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

      <section
        className="
          relative
          h-[100svh]
          w-full
          overflow-hidden
          bg-neutral-900
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
                h-[40%]
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
                py-8
                md:absolute
                md:inset-0
                md:pt-16
                md:pb-20
              "
            >

              {/* خلفية مصمتة خلف النص — الهاتف فقط */}

              <div
                className="
                  absolute
                  inset-0
                  bg-white
                  md:hidden
                  dark:bg-neutral-950
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

              <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-28">

                <div className="max-w-xl">

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
                      inline-flex
                      overflow-hidden
                      rounded-lg
                      border
                      border-sky-600
                      px-7
                      py-3
                      font-semibold
                      text-sky-600
                      transition
                      duration-500
                      hover:text-white
                      dark:border-sky-400
                      dark:text-sky-300
                      dark:hover:text-neutral-950
                    "
                  >

                    {/* BUTTON BACKGROUND */}

                    <span
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-sky-600
                        transition-transform
                        duration-500
                        group-hover:translate-x-0
                        dark:bg-sky-400
                      "
                    />

                    {/* BUTTON TEXT */}

                    <span
                      className="
                        relative
                        z-10
                        transition-colors
                        duration-500
                      "
                    >
                      {slide.button}
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
            bg-sky-600
            text-3xl
            font-bold
            leading-none
            text-white
            opacity-50
            shadow-[0_8px_24px_-6px_rgba(2,132,199,0.7)]
            ring-2
            ring-white/70
            transition
            hover:scale-110
            hover:bg-sky-700
            hover:opacity-100
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
            bg-sky-600
            text-3xl
            font-bold
            leading-none
            text-white
            opacity-50
            shadow-[0_8px_24px_-6px_rgba(2,132,199,0.7)]
            ring-2
            ring-white/70
            transition
            hover:scale-110
            hover:bg-sky-700
            hover:opacity-100
            md:right-8
            md:flex
          "
        >
          ›
        </button>

        {/* ========================= */}
        {/* INDICATORS */}
        {/* ========================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-[calc(60%+0.75rem)]
            z-20
            flex
            justify-center
            gap-0
            md:bottom-6
          "
        >
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`${dict.goToSlide} ${index + 1}`}
              aria-current={index === current}
              className="group flex h-9 items-center px-1"
            >
              <span
                className={`
                  block
                  h-2
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    index === current
                      ? "w-10 bg-sky-600"
                      : "w-2 bg-white/70 group-hover:bg-white"
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
              ms-2
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-sky-600
              text-xs
              text-white
              opacity-50
              ring-2
              ring-white/70
              transition
              hover:opacity-100
            "
          >
            <span aria-hidden="true">{isPaused ? "▶" : "❚❚"}</span>
          </button>
        </div>

      </section>
    </div>
  );
}