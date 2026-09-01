import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "../i18n/getDictionary";

// صور الطبيب — ثابتة، النصوص تأتي من القاموس
const doctorImages = ["/p.jpeg"];

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
          glass
          relative
          mx-auto
          mt-16
          w-[calc(100%-2rem)]
          overflow-hidden
          rounded-3xl
          px-6
          py-14
          md:w-[91.666667%]
          md:px-12
        "
      >



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
                rounded-3xl
                shadow-[0_25px_60px_rgba(15,23,42,0.35)]
                ring-1
                ring-white/30
                backdrop-blur-sm
                dark:ring-sky-400/20
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
              <span className="h-1 w-8 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />

              <span className="text-xs font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
                {t.doctorLabel}
              </span>
            </div>


            {/* ================= TITLE ================= */}

            <h2
              className="
                text-3xl
                font-bold
                leading-tight
                text-gray-900
                dark:text-neutral-50
                md:text-4xl
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
                    text-gray-600
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
                    glass-soft
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    sm:last:odd:col-span-2
                    px-4
                    py-3.5
                    transition-colors
                    duration-300
                    hover:border-sky-300/80
                    dark:hover:border-sky-500/60
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
                via-cyan-600
                to-cyan-600
                px-8
                py-3.5
                font-bold
                text-white
                shadow-lg
                shadow-sky-500/30
                transition-all
                duration-300
                hover:shadow-2xl
                hover:shadow-sky-500/50
                hover:-translate-y-0.5
                active:scale-95
                dark:from-sky-500
                dark:via-cyan-500
                dark:to-cyan-500
                dark:shadow-sky-600/40
                dark:hover:shadow-sky-600/60
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
          rounded-3xl
          bg-gradient-to-br
          from-blue-50
          via-white
          to-cyan-50
          p-4
          ring-1
          ring-sky-200/40
          shadow-[0_8px_32px_rgba(31,38,135,0.12)]
          md:w-[91.666667%]
          md:p-6
          dark:bg-gradient-to-br
          dark:from-neutral-900/50
          dark:via-neutral-900/30
          dark:to-sky-900/20
          dark:ring-sky-500/20
          dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
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
                glass
                h-full
                w-full
                rounded-2xl
                px-5
                py-8
                sm:px-6
                sm:py-10
                md:px-10
                md:py-12
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
                  pb-1
                  text-3xl
                  font-extrabold
                  leading-[1.4]
                  text-slate-900
                  dark:text-neutral-50
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
                  via-cyan-600
                  to-cyan-600
                  px-7
                  py-3
                  font-bold
                  text-white
                  shadow-lg
                  shadow-sky-500/30
                  transition-all
                  duration-300
                  hover:shadow-2xl
                  hover:shadow-sky-500/50
                  hover:-translate-y-0.5
                  active:scale-95
                  dark:from-sky-500
                  dark:via-cyan-500
                  dark:to-cyan-500
                  dark:shadow-sky-600/40
                  dark:hover:shadow-sky-600/60
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
                  <span className="transition-transform duration-300 rtl:rotate-180 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
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
