import Image from "next/image";

import type { Dictionary } from "../i18n/getDictionary";

// الأصول الثابتة للخدمات — النصوص تأتي من القاموس
const serviceAssets = [
  { icon: "🦴", image: "/4.jpg", tint: "from-sky-500 to-cyan-600" },
  { icon: "🏃", image: "/5.jpg", tint: "from-cyan-500 to-teal-600" },
  { icon: "💪", image: "/2.jpg", tint: "from-sky-500 to-indigo-600" },
  { icon: "🦵", image: "/1.jpg", tint: "from-teal-500 to-sky-600" },
  { icon: "⚖️", image: "/6.jpg", tint: "from-sky-600 to-blue-700" },
  { icon: "🏥", image: "/7.jpg", tint: "from-cyan-600 to-sky-700" },
];

// نقشة نقطية خفيفة تستخدم مع البطاقات التي لا تحتوي على صورة

const dotPattern = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
};

export default function Services({ dict }: { dict: Dictionary }) {
  const t = dict.services;
  const services = serviceAssets.map((asset, index) => ({
    ...asset,
    ...t.items[index],
  }));

  return (
    <section
      id="services"
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-24
      "
    >
      {/* ================= DECORATION ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-32
          start-[-8rem]
          h-96
          w-96
          rounded-full
          bg-slate-400/20
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-6rem]
          end-[-6rem]
          h-96
          w-96
          rounded-full
          bg-zinc-400/16
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
              data-aos-once="true"
              className="mx-auto mb-14 max-w-3xl text-center"
              style={{ transition: "all 0.3s ease" }}
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
            </span>{" "}

            {t.titleAfter}
          </h2>

          {/* DESCRIPTION */}

          <p className="mt-5 text-[17px] leading-9 text-gray-600 dark:text-neutral-400">
            {t.description}
          </p>

          {/* DIVIDER */}

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-px w-16 bg-gradient-to-l from-sky-400 to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="h-px w-16 bg-gradient-to-r from-sky-400 to-transparent" />
          </div>
        </div>

        {/* ================= SERVICES ================= */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              data-aos-once="true"
              className="
                glass
                glass-hover
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                text-start
              "
            >
              {/* ================= MEDIA ================= */}

              <div className="relative h-48 w-full shrink-0 bg-gray-100 dark:bg-neutral-800">
                <div className="absolute inset-0 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  ) : (
                    <div
                      className={`
                        relative
                        h-full
                        w-full
                        bg-gradient-to-br
                        ${service.tint}
                      `}
                    >
                      {/* PATTERN */}

                      <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={dotPattern}
                      />

                      {/* RINGS */}

                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          -bottom-16
                          -left-10
                          h-48
                          w-48
                          rounded-full
                          border
                          border-white/20
                        "
                      />

                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          -bottom-24
                          -left-20
                          h-64
                          w-64
                          rounded-full
                          border
                          border-white/15
                        "
                      />

                      {/* WATERMARK ICON */}

                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          text-7xl
                          opacity-25
                          transition-transform
                          duration-700
                          group-hover:scale-110
                        "
                      >
                        {service.icon}
                      </span>
                    </div>
                  )}

                  {/* OVERLAY */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-neutral-900/60
                      via-neutral-900/10
                      to-transparent
                    "
                  />
                </div>

                {/* ICON BADGE */}

                <div
                  className="
                    absolute
                    bottom-0
                    start-7
                    z-10
                    flex
                    h-14
                    w-14
                    translate-y-1/2
                    items-center
                    justify-center
                    glass-strong
                    rounded-2xl
                    text-2xl
                    shadow-[0_10px_25px_-10px_rgba(15,23,42,0.5)]
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                >
                  {service.icon}
                </div>
              </div>

              {/* ================= BODY ================= */}

              <div className="flex flex-1 flex-col px-7 pb-7 pt-12">
                {/* TITLE */}

                <h3
                  className="
                    mb-4
                    text-xl
                    font-bold
                    text-gray-800
                    transition-colors
                    duration-300
                    group-hover:text-sky-600
                    dark:text-neutral-100
                    dark:group-hover:text-sky-400
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="flex-1 text-[15px] leading-8 text-gray-600 dark:text-neutral-400">
                  {service.description}
                </p>

                {/* CTA BUTTON */}

                <a
                  href="#contact"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-sky-600
                    to-cyan-600
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-sky-500/30
                    transition-all
                    duration-300
                    hover:shadow-xl
                    hover:shadow-sky-500/40
                    hover:scale-105
                    active:scale-95
                    dark:from-sky-500
                    dark:to-cyan-500
                    dark:shadow-sky-900/30
                    dark:hover:shadow-sky-900/50
                  "
                >
                  {t.bookSession}

                  <span
                    aria-hidden="true"
                    className="
                      text-base
                      transition-transform
                      duration-300
                      rtl:rotate-180
                      group-hover:translate-x-1
                      rtl:group-hover:-translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
