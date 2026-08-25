import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "../i18n/getDictionary";

// صور الطبيب — ثابتة، النصوص تأتي من القاموس
const doctorImages = ["/31-s.jpg"];

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
      className="w-full pt-20 pb-20"
    >

      {/* ================= SECTION 1 - DOCTOR ================= */}

      <section
        className="
          relative
          mx-auto
          mt-16
          w-[calc(100%-2rem)]
          overflow-hidden
          rounded-[2rem]
          bg-gradient-to-b
          from-sky-50/70
          via-white
          to-white
          px-6
          py-14
          shadow-[1px_1px_20px_-4px_rgb(196,196,196)]
          md:w-[91.666667%]
          md:px-12
          dark:bg-gradient-to-br
          dark:from-neutral-800/80
          dark:via-neutral-800/60
          dark:to-neutral-900/80
          dark:shadow-[1px_1px_24px_-4px_rgb(0,0,0)]
          dark:border
          dark:border-neutral-700/50
        "
      >

        {/* ================= TOP ACCENT ================= */}

        <span
          aria-hidden="true"
          className="
            absolute
            inset-x-0
            top-0
            h-1
            bg-gradient-to-l
            from-sky-400
            via-sky-500
            to-cyan-500
          "
        />


        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          {/* ================================================= */}
          {/* PHOTO SIDE */}
          {/* ================================================= */}

          <div
            data-aos="fade-left"
            data-aos-duration="1100"
            data-aos-delay="200"
            data-aos-once="true"
            className="w-full lg:w-2/5"
          >

            {/* ================= MAIN PHOTO ================= */}

            {doctor.images.length > 0 && (
            <div
              className="
                group
                relative
                mx-auto
                aspect-[3/4]
                w-full
                max-w-sm
                lg:max-w-none
                overflow-hidden
                rounded-[1.75rem]
                shadow-[0_25px_55px_-28px_rgba(15,23,42,0.55)]
                ring-1
                ring-slate-900/5
                dark:ring-white/10
              "
            >
              <Image
                src={doctor.images[0].src}
                alt={doctor.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-neutral-900/85
                  via-neutral-900/15
                  to-transparent
                "
              />

              {/* NAME PLATE */}

              <div className="absolute inset-x-5 bottom-5">

                <p className="text-lg font-extrabold text-white md:text-xl">
                  {doctor.name}
                </p>

                <p className="mt-1.5 text-xs font-semibold text-sky-300 md:text-[13px]">
                  {doctor.title}
                </p>

              </div>
            </div>
            )}


            {/* ================= EXTRA PHOTOS ================= */}

            {doctor.images.length > 1 && (
              <div className="mx-auto mt-4 grid max-w-sm grid-cols-3 gap-3">
                {doctor.images.slice(1, 4).map((image) => (
                  <div
                    key={image.src}
                    className="
                      group
                      relative
                      aspect-square
                      overflow-hidden
                      rounded-xl
                      ring-1
                      ring-slate-900/5
                    "
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="12vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>
                ))}
              </div>
            )}

          </div>


          {/* ================================================= */}
          {/* INFO SIDE */}
          {/* ================================================= */}

          <div
            data-aos="fade-right"
            data-aos-duration="1100"
            data-aos-delay="300"
            data-aos-once="true"
            className="w-full text-start lg:w-3/5"
          >

            {/* ================= LABEL ================= */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-sky-300 dark:bg-sky-500" />

              <span className="text-sm font-bold tracking-wide text-sky-600 dark:text-sky-400">
                {t.doctorLabel}
              </span>
            </div>


            {/* ================= TITLE ================= */}

            <h2
              className="
                text-2xl
                font-extrabold
                leading-tight
                text-gray-800
                md:text-4xl
                dark:text-neutral-100
              "
            >
              {t.doctorHeading}
            </h2>


            {/* ================= BIO ================= */}

            <div className="mt-6 space-y-4">
              {doctor.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="
                    text-[16px]
                    font-normal
                    leading-9
                    text-gray-500
                    md:text-[17px]
                    dark:text-neutral-400
                  "
                >
                  {paragraph}
                </p>
              ))}
            </div>


            {/* ================= CREDENTIALS ================= */}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {doctor.credentials.map((credential) => (
                <li
                  key={credential}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    sm:last:odd:col-span-2
                    border
                    border-gray-200/60
                    bg-gradient-to-r
                    from-white
                    to-sky-50/30
                    px-4
                    py-3.5
                    transition-all
                    duration-300
                    hover:border-sky-300/60
                    hover:bg-gradient-to-r
                    hover:from-white
                    hover:to-sky-100/50
                    hover:shadow-md
                    hover:shadow-sky-200/30
                    dark:border-neutral-700/60
                    dark:bg-gradient-to-r
                    dark:from-neutral-800/50
                    dark:to-neutral-800/20
                    dark:hover:border-sky-500/60
                    dark:hover:bg-gradient-to-r
                    dark:hover:from-neutral-700/80
                    dark:hover:to-sky-900/30
                    dark:hover:shadow-md
                    dark:hover:shadow-sky-500/20
                  "
                >
                  <span
                    aria-hidden="true"
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
                      text-[11px]
                      font-black
                      text-white
                      shadow-md
                      shadow-sky-500/30
                      dark:shadow-sky-500/40
                      group-hover:scale-110
                      transition-transform
                      duration-300
                    "
                  >
                    ✓
                  </span>

                  <span className="text-[15px] font-medium leading-7 text-gray-600 dark:text-neutral-300">
                    {credential}
                  </span>
                </li>
              ))}
            </ul>


            {/* ================= BUTTON ================= */}

            <Link
              href="#contact"
              className="
                group
                relative
                mt-9
                inline-flex
                overflow-hidden
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-sky-600
                to-cyan-600
                px-8
                py-3.5
                font-bold
                text-white
                shadow-lg
                shadow-sky-600/40
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-sky-600/60
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
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  rtl:rotate-180
                  ltr:group-hover:translate-x-1
                  rtl:group-hover:-translate-x-1
                "
              >
                →
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= SECTION 2 - WELCOME ================= */}

      <section
        className="
          mx-auto
          mt-10
          w-[calc(100%-2rem)]
          rounded-[2rem]
          bg-gradient-to-b
          from-[#f7f2ee]
          to-[#f3ece8]
          p-4
          ring-1
          ring-slate-900/5
          shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]
          md:w-[91.666667%]
          md:p-6
          dark:bg-gradient-to-br
          dark:from-neutral-800/80
          dark:via-neutral-800/60
          dark:to-neutral-900/70
          dark:ring-neutral-700/50
          dark:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.5)]
        "
      >

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-evenly
            gap-6
            p-0
            lg:flex-row
          "
        >

          {/* ================================================= */}
          {/* IMAGE SIDE */}
          {/* ================================================= */}

          <div
            className="
              relative
              mb-3
              aspect-[1/0.83]
              w-full
              lg:-translate-y-6
              lg:mt-5
              lg:aspect-auto
              lg:h-[450px]
              lg:w-1/2
            "
          >

            {/* ================= ROTATING IMAGE ================= */}

            <div
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="true"
              className="
                absolute
                left-[15%]
                top-[9%]
                z-[1]
                w-1/2
                lg:-translate-y-4
                animate-[spin_20s_linear_infinite]
                lg:top-10
              "
            >
              <Image
                src="/27.png"
                alt={t.welcome.rotatingImageAlt}
                width={500}
                height={500}
                sizes="(max-width: 1024px) 45vw, 280px"
                className="w-full"
                draggable={false}
              />
            </div>


            {/* ================= MAIN IMAGE ================= */}

            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="600"
              data-aos-once="true"
              className="
                absolute
                left-[35%]
                top-[27%]
                z-[2]
                w-1/2
                lg:-translate-y-4
                lg:top-35
              "
            >
              <Image
                src="/26.png"
                alt={t.welcome.mainImageAlt}
                width={500}
                height={500}
                sizes="(max-width: 1024px) 45vw, 280px"
                className="w-full"
                draggable={false}
              />
            </div>

          </div>


          {/* ================================================= */}
          {/* CONTENT SIDE */}
          {/* ================================================= */}

          <div
            className="
              mb-3
              w-full
              rounded-3xl
              p-0
              text-start
              sm:p-3
              lg:w-1/2
            "
          >

            <div
              className="
                h-full
                w-full
                rounded-[1.75rem]
                bg-white/70
                px-5
                py-8
                ring-1
                ring-slate-900/5
                backdrop-blur-sm
                shadow-[0_18px_45px_-28px_rgba(15,23,42,0.4)]
                sm:px-6
                sm:py-10
                md:px-10
                md:py-12
                dark:bg-neutral-950/60
                dark:ring-white/10
              "
            >

              {/* ================= TITLE ================= */}

              <p
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="500"
                data-aos-once="true"
                className="
                  mb-5
                  inline-block
                  bg-gradient-to-r
                  from-[rgb(121,13,13)]
                  via-[rgba(10,198,204,0.701)]
                  to-[rgb(184,13,241)]
                  bg-clip-text
                  pb-1
                  text-3xl
                  font-extrabold
                  leading-[1.4]
                  text-transparent
                  md:text-4xl
                "
              >
                {t.welcome.heading}
              </p>


              {/* ================= DESCRIPTION ================= */}

              <p
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="600"
                data-aos-once="true"
                className="
                  max-w-[62ch]
                  text-[16px]
                  font-normal
                  leading-[1.85]
                  text-slate-600
                  dark:text-neutral-400
                  sm:text-[17px]
                  sm:leading-[2.1]
                  md:text-[18px]
                "
              >

                <span className="font-extrabold text-slate-900 dark:text-neutral-100">
                  {t.welcome.lead}
                </span>{" "}

                {t.welcome.body}

              </p>


              {/* ================= BUTTON ================= */}

              <Link
                href="#services"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="800"
                data-aos-once="true"
                className="
                  group
                  relative
                  mt-8
                  inline-flex
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-sky-600
                  to-cyan-600
                  px-7
                  py-3
                  font-bold
                  text-white
                  shadow-lg
                  shadow-sky-600/40
                  transition-all
                  duration-300
                  hover:shadow-xl
                  hover:shadow-sky-600/60
                  hover:scale-105
                  active:scale-95
                  dark:from-sky-500
                  dark:to-cyan-500
                  dark:shadow-sky-900/50
                  dark:hover:shadow-sky-900/70
                "
              >

                {/* Button Text */}

                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-2
                    transition-all
                    duration-300
                  "
                >
                  {t.welcome.cta}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>

              </Link>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
}
