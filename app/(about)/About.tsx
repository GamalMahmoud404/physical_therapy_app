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

      <section className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mb-16 text-center"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-sky-100
              bg-white/50
              dark:bg-neutral-900/50
              px-4
              py-2
              text-sm
              font-bold
              text-sky-600
              dark:text-sky-400
              backdrop-blur-sm
            "
          >
            <span
              className="
                relative
                flex
                h-2
                w-2
              "
            >
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
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600" />
            </span>
            {t.doctorLabel}
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              font-extrabold
              leading-tight
              text-gray-900
              dark:text-white
            "
          >
            {t.doctorHeading}
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-lg
              text-gray-600
              dark:text-neutral-400
            "
          >
            متخصص في العلاج الطبيعي والتأهيل بخبرة طويلة وشهادات عالمية
          </p>
        </div>

        {/* MAIN CONTENT */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
            mb-20
          "
        >
          {/* PHOTO SIDE */}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="relative group"
          >
            {doctor.images.length > 0 && (
              <div
                className="
                  relative
                  aspect-[3/4]
                  w-full
                  max-w-sm
                  mx-auto
                  overflow-hidden
                  rounded-3xl
                  shadow-2xl
                  ring-1
                  ring-white/20
                  dark:ring-white/10
                "
              >
                {/* GLOWING BORDER */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl
                    p-1
                    bg-gradient-to-br
                    from-sky-400
                    via-cyan-400
                    to-teal-500
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)",
                  }}
                >
                  <div className="absolute inset-1 bg-white dark:bg-neutral-950 rounded-3xl" />
                </div>

                <Image
                  src={doctor.images[0].src}
                  alt={doctor.images[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:brightness-110
                  "
                  loading="lazy"
                />

                {/* OVERLAY WITH GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-neutral-950/60
                    via-transparent
                    to-transparent
                    group-hover:from-neutral-950/40
                    transition-all
                    duration-700
                  "
                />

                {/* NAME & TITLE BADGE */}

                <div
                  className="
                    absolute
                    inset-x-6
                    bottom-6
                    bg-white/95
                    dark:bg-neutral-900/95
                    backdrop-blur-md
                    rounded-2xl
                    p-5
                    shadow-xl
                    transform
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                >
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {doctor.name}
                  </p>
                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      bg-gradient-to-r
                      from-sky-600
                      to-cyan-600
                      dark:from-sky-400
                      dark:to-cyan-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {doctor.title}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* INFO SIDE */}

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* BIO */}

            <div className="space-y-5 mb-8">
              {doctor.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="
                    text-lg
                    leading-relaxed
                    text-gray-700
                    dark:text-neutral-300
                  "
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CREDENTIALS */}

            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                المؤهلات والشهادات
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctor.credentials.map((credential) => (
                  <li
                    key={credential}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      p-4
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-50
                      to-cyan-50
                      dark:from-neutral-800/50
                      dark:to-neutral-800/30
                      border
                      border-blue-200/50
                      dark:border-neutral-700/50
                      hover:border-sky-400
                      dark:hover:border-sky-500
                      transition-all
                      duration-300
                    "
                  >
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-sky-500
                        to-cyan-500
                        text-[10px]
                        font-bold
                        text-white
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
                      "
                    >
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA BUTTON */}

            <Link
              href="#contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-xl
                bg-gradient-to-r
                from-sky-600
                to-cyan-600
                text-white
                font-bold
                shadow-lg
                shadow-sky-500/30
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-sky-500/50
                hover:scale-105
                active:scale-95
                dark:from-sky-500
                dark:to-cyan-500
              "
            >
              {t.bookWithDoctor}
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* STATS SECTION */}

        <div
          data-aos="fade-up"
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
            mb-20
            p-8
            rounded-2xl
            bg-gradient-to-br
            from-sky-50
            to-cyan-50
            dark:from-neutral-800/50
            dark:to-neutral-800/30
            border
            border-sky-200/50
            dark:border-neutral-700/50
          "
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                text-center
                group
                cursor-default
              "
            >
              <p
                className="
                  text-3xl
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              >
                {stat.icon}
              </p>
              <p
                className="
                  mt-3
                  text-2xl
                  md:text-3xl
                  font-extrabold
                  bg-gradient-to-r
                  from-sky-600
                  to-cyan-600
                  dark:from-sky-400
                  dark:to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                {stat.value}
              </p>
              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-gray-600
                  dark:text-neutral-400
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* VALUES SECTION */}

        <div
          data-aos="fade-up"
          className="mb-20"
        >
          <h3
            className="
              text-3xl
              font-bold
              text-center
              text-gray-900
              dark:text-white
              mb-12
            "
          >
            القيم التي نعتمد عليها
          </h3>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            "
          >
            {[
              {
                icon: "💡",
                title: "الابتكار",
                desc: "استخدام أحدث التقنيات والطرق العلاجية",
              },
              {
                icon: "❤️",
                title: "الرعاية",
                desc: "التركيز على راحة واهتمام المريض الشخصي",
              },
              {
                icon: "🎯",
                title: "التميز",
                desc: "السعي المستمر لتحقيق أفضل النتائج العلاجية",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="
                  group
                  p-6
                  rounded-2xl
                  bg-white
                  dark:bg-neutral-800/50
                  border
                  border-gray-200
                  dark:border-neutral-700/50
                  hover:border-sky-400
                  dark:hover:border-sky-500
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                <p className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </p>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {value.title}
                </h4>
                <p className="mt-2 text-gray-600 dark:text-neutral-400 text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
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
