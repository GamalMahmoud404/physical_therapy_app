// =========================================================
// قسم التواصل — مكوّن خادم: كل ما هنا ثابت ولا يُرسَل أي JS
// للمتصفح. الجزء التفاعلي الوحيد هو <ContactForm /> بالأسفل.
// =========================================================

import type { Locale } from "../i18n/config";
import type { Dictionary } from "../i18n/getDictionary";

import ContactForm from "./ContactForm";
import { PhoneIcon, MailIcon, WhatsappIcon, FacebookIcon } from "./icons";
import { clinic, whatsappUrl } from "../seo/site";

export default function Contact({
  dict,
  locale,
}: {
  dict: Dictionary["contact"];
  locale: Locale;
}) {
  const t = dict;

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-24
      "
    >

      {/* ========================= */}
      {/* DECORATION */}
      {/* ========================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-28
          start-[-6rem]
          h-80
          w-80
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
          bottom-0
          end-[-8rem]
          h-96
          w-96
          rounded-full
          bg-slate-400/14
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

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
              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-sky-500
                "
              />
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


        {/* ========================= */}
        {/* CONTENT */}
        {/* ========================= */}

        <div className="grid items-start gap-8 lg:grid-cols-5">

          {/* ========================= */}
          {/* INFO SIDE */}
          {/* ========================= */}

          <aside
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-once="true"
            className="space-y-6 lg:col-span-2"
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/25
                bg-gradient-to-br
                from-sky-600/85
                to-sky-800/85
                p-8
                text-white
                shadow-[0_12px_40px_rgba(2,132,199,0.35)]
                backdrop-blur-xl
                backdrop-saturate-150
              "
            >

              {/* CARD DECORATION */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -end-16
                  -top-16
                  h-44
                  w-44
                  rounded-full
                  bg-white/10
                "
              />

              <div className="relative">

                <h3 className="text-xl font-bold">
                  {t.infoHeading}
                </h3>

                <p className="mt-3 text-sm leading-7 text-sky-100">
                  {t.infoDescription}
                </p>


                {/* ========================= */}
                {/* PHONE */}
                {/* ========================= */}

                <a
                  href={`tel:${clinic.phone}`}
                  className="
                    mt-7
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-white/10
                    p-4
                    transition
                    duration-300
                    hover:bg-white/20
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/15
                    "
                  >
                    <PhoneIcon />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs text-sky-100">
                      {t.phoneLabel}
                    </span>

                    <span dir="ltr" className="block font-bold">
                      +201024210064
                    </span>
                  </span>
                </a>


                {/* ========================= */}
                {/* EMAIL */}
                {/* ========================= */}

                <a
                  href={`mailto:${clinic.email}`}
                  className="
                    mt-3
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-white/10
                    p-4
                    transition
                    duration-300
                    hover:bg-white/20
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/15
                    "
                  >
                    <MailIcon />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs text-sky-100">
                      {t.emailLabel}
                    </span>

                    <span
                      dir="ltr"
                      className="block truncate font-bold"
                    >
                      info@example.com
                    </span>
                  </span>
                </a>


                {/* ========================= */}
                {/* SOCIAL */}
                {/* ========================= */}

                <div className="mt-7 border-t border-white/20 pt-6">

                  <p className="mb-4 text-xs text-sky-100">
                    {t.followUs}
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        flex-1
                        items-center
                        justify-center
                        gap-2.5
                        rounded-xl
                        bg-green-700
                        px-5
                        py-3
                        text-sm
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-green-800
                        hover:shadow-lg
                      "
                    >
                      <WhatsappIcon />
                      WhatsApp
                    </a>

                    <a
                      href={clinic.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        flex-1
                        items-center
                        justify-center
                        gap-2.5
                        rounded-xl
                        bg-white
                        px-5
                        py-3
                        text-sm
                        font-bold
                        text-blue-600
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-blue-50
                        hover:shadow-lg
                      "
                    >
                      <FacebookIcon />
                      Facebook
                    </a>

                  </div>
                </div>

              </div>
            </div>

          </aside>


          {/* ========================= */}
          {/* FORM SIDE — مكوّن عميل */}
          {/* ========================= */}

          <ContactForm dict={dict} locale={locale} />

        </div>
      </div>
    </section>
  );
}
