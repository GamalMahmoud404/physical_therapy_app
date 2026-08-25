import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "../i18n/getDictionary";

const doctorImages = ["/31-s.jpg"];

const stats = [
  { icon: "👨‍⚕️", value: "15+", label: "سنة خبرة" },
  { icon: "🏥", value: "5000+", label: "مريض معالج" },
  { icon: "🎓", value: "10+", label: "شهادة احترافية" },
  { icon: "⭐", value: "4.9", label: "تقييم المرضى" },
];

export default function About({ dict }: { dict: Dictionary }) {
  const t = dict.about;
  const doctor = {
    ...t.doctor,
    images: doctorImages.map((src) => ({ src, alt: t.doctor.imageAlt })),
  };

  return (
    <section
      id="about"
      aria-label={t.sectionLabel}
      className="w-full py-24 px-4"
    >
      {/* ================= DECORATIVE ELEMENTS ================= */}

      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            -top-40
            -right-40
            w-80
            h-80
            bg-blue-400/10
            rounded-full
            blur-3xl
            dark:bg-blue-600/5
          "
        />
        <div
          className="
            absolute
            -bottom-40
            -left-40
            w-80
            h-80
            bg-cyan-400/10
            rounded-full
            blur-3xl
            dark:bg-cyan-600/5
          "
        />
      </div>

      {/* ================= SECTION 1 - DOCTOR INTRODUCTION ================= */}

      <section className="mx-auto max-w-7xl relative">
        {/* HERO CARD */}

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="
            relative
            rounded-3xl
            overflow-hidden
            bg-gradient-to-br
            from-sky-50
            via-cyan-50
            to-teal-50
            dark:from-neutral-800/40
            dark:via-neutral-800/20
            dark:to-neutral-900/40
            border
            border-sky-200/50
            dark:border-neutral-700/50
            backdrop-blur-sm
            p-8
            md:p-12
            lg:p-16
            shadow-2xl
            mb-20
          "
        >
          {/* ACCENT LINE */}
          <div
            className="
              absolute
              top-0
              inset-x-0
              h-1.5
              bg-gradient-to-r
              from-sky-400
              via-cyan-400
              to-teal-400
            "
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* PHOTO SIDE - LARGER */}

            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="200"
              className="lg:col-span-2 relative group"
            >
              {doctor.images.length > 0 && (
                <div className="relative">
                  {/* FLOATING ELEMENTS */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-400/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl" />

                  <div
                    className="
                      relative
                      aspect-[3/4]
                      overflow-hidden
                      rounded-2xl
                      shadow-2xl
                      ring-1
                      ring-white/30
                      dark:ring-white/10
                    "
                  >
                    <Image
                      src={doctor.images[0].src}
                      alt={doctor.images[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-105
                        group-hover:brightness-110
                      "
                      loading="lazy"
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/40
                        via-transparent
                        to-transparent
                        group-hover:from-black/20
                        transition-all
                        duration-700
                      "
                    />

                    {/* BADGE OVERLAY */}
                    <div
                      className="
                        absolute
                        bottom-0
                        inset-x-0
                        p-5
                        bg-gradient-to-t
                        from-black/60
                        to-transparent
                      "
                    >
                      <p className="text-xl font-bold text-white">
                        {doctor.name}
                      </p>
                      <p className="text-sm text-sky-300 font-semibold mt-1">
                        {doctor.title}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* INFO SIDE - EXPANDED */}

            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="300"
              className="lg:col-span-3"
            >
              {/* HEADER */}

              <div className="mb-8">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-sky-100/80
                    dark:bg-sky-900/40
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-sky-700
                    dark:text-sky-300
                  "
                >
                  <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                  {t.doctorLabel}
                </span>

                <h2
                  className="
                    mt-4
                    text-3xl
                    md:text-4xl
                    font-extrabold
                    text-gray-900
                    dark:text-white
                    leading-tight
                  "
                >
                  {t.doctorHeading}
                </h2>

                <p
                  className="
                    mt-3
                    text-lg
                    text-gray-600
                    dark:text-neutral-300
                  "
                >
                  متخصص في العلاج الطبيعي والتأهيل بخبرة طويلة وشهادات عالمية
                </p>
              </div>

              {/* BIO */}

              <div className="space-y-4 mb-8">
                {doctor.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="
                      text-base
                      leading-relaxed
                      text-gray-700
                      dark:text-neutral-300
                    "
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CREDENTIALS GRID */}

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎓</span> المؤهلات والشهادات
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.credentials.map((credential, idx) => (
                    <div
                      key={idx}
                      className="
                        group
                        flex
                        items-start
                        gap-3
                        p-4
                        rounded-xl
                        bg-white/60
                        dark:bg-neutral-700/40
                        border
                        border-sky-200/60
                        dark:border-neutral-600/50
                        hover:bg-sky-50
                        dark:hover:bg-neutral-700/60
                        hover:border-sky-400
                        dark:hover:border-sky-500
                        transition-all
                        duration-300
                      "
                    >
                      <span
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-gradient-to-br
                          from-sky-500
                          to-cyan-500
                          text-white
                          text-sm
                          font-bold
                          mt-0.5
                        "
                      >
                        ✓
                      </span>

                      <span
                        className="
                          text-sm
                          font-medium
                          text-gray-700
                          dark:text-neutral-300
                          leading-snug
                        "
                      >
                        {credential}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA BUTTON */}

              <Link
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  px-8
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-sky-600
                  to-cyan-600
                  text-white
                  font-bold
                  text-lg
                  shadow-xl
                  shadow-sky-500/40
                  transition-all
                  duration-300
                  hover:shadow-2xl
                  hover:shadow-sky-500/60
                  hover:scale-105
                  active:scale-95
                  dark:from-sky-500
                  dark:to-cyan-500
                  dark:shadow-sky-900/50
                  dark:hover:shadow-sky-900/70
                "
              >
                {t.bookWithDoctor}
                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    text-xl
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* VALUES SECTION */}

        <div
          data-aos="fade-up"
          className="mb-20"
        >

        </div>
      </section>

      {/* ================= SECTION 2 - WELCOME ================= */}

      <section
        data-aos="fade-up"
        className="
          mx-auto
          max-w-7xl
          mt-20
          rounded-3xl
          bg-gradient-to-br
          from-blue-50
          via-cyan-50
          to-teal-50
          dark:from-neutral-800
          dark:via-neutral-800/80
          dark:to-neutral-900
          p-8
          md:p-12
          border
          border-blue-200/50
          dark:border-neutral-700/50
          shadow-xl
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
          "
        >
          {/* IMAGE SIDE */}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="relative h-80 lg:h-96"
          >
            <div
              className="
                absolute
                left-[15%]
                top-[9%]
                w-1/2
                animate-[spin_20s_linear_infinite]
                opacity-70
                hover:opacity-100
                transition-opacity
              "
            >
              <Image
                src="/27.png"
                alt={t.welcome.rotatingImageAlt}
                width={300}
                height={300}
                sizes="(max-width: 1024px) 45vw, 280px"
                className="w-full"
                draggable={false}
              />
            </div>

            <div
              className="
                absolute
                left-[35%]
                top-[27%]
                w-1/2
                hover:scale-110
                transition-transform
                duration-500
              "
            >
              <Image
                src="/26.png"
                alt={t.welcome.mainImageAlt}
                width={300}
                height={300}
                sizes="(max-width: 1024px) 45vw, 280px"
                className="w-full"
                draggable={false}
              />
            </div>
          </div>

          {/* CONTENT SIDE */}

          <div data-aos="fade-left" data-aos-duration="1000">
            <h3
              className="
                text-3xl
                md:text-4xl
                font-extrabold
                bg-gradient-to-r
                from-sky-600
                via-cyan-500
                to-teal-600
                dark:from-sky-400
                dark:via-cyan-400
                dark:to-teal-400
                bg-clip-text
                text-transparent
                mb-6
              "
            >
              {t.welcome.heading}
            </h3>

            <p
              className="
                text-lg
                leading-relaxed
                text-gray-700
                dark:text-neutral-300
                mb-6
              "
            >
              <span className="font-bold text-gray-900 dark:text-white">
                {t.welcome.lead}
              </span>{" "}
              {t.welcome.body}
            </p>

            <Link
              href="#services"
              className="
                group
                inline-flex
                items-center
                gap-2
                px-7
                py-3.5
                rounded-xl
                bg-gradient-to-r
                from-sky-600
                to-cyan-600
                text-white
                font-bold
                shadow-lg
                shadow-sky-500/30
                hover:shadow-xl
                hover:shadow-sky-500/50
                transition-all
                duration-300
                hover:scale-105
                dark:from-sky-500
                dark:to-cyan-500
              "
            >
              {t.welcome.cta}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
