import Link from "next/link";

import type { Dictionary } from "../i18n/getDictionary";

export default function Footer({ dict }: { dict: Dictionary }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: dict.nav.home },
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#articles", label: dict.nav.articles },
    { href: "#contact", label: dict.nav.contact },
  ];

  const socialLinks = [
    { href: "https://facebook.com", label: "Facebook", icon: "f" },
    { href: "https://instagram.com", label: "Instagram", icon: "📷" },
    { href: "https://whatsapp.com", label: "WhatsApp", icon: "💬" },
  ];

  return (
    <footer
      className="
        border-t
        border-white/10
        bg-slate-950/70
        text-white
        backdrop-blur-2xl
        backdrop-saturate-150
      "
    >

      <div className="mx-auto w-full max-w-7xl px-6 py-10">

        <div className="grid gap-10 md:grid-cols-3">

          {/* ================= BRAND ================= */}

          <div>
            <h2 className="text-2xl font-bold">
              {dict.footer.brandHeading}
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-300">
              {dict.footer.brandDescription}
            </p>
          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>
            <h3 className="mb-5 text-lg font-bold">
              {dict.footer.quickLinks}
            </h3>

            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      transition-colors
                      duration-300
                      hover:text-sky-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-sky-400
                      focus:rounded
                      px-2
                      py-1
                      inline-block
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="mb-5 text-lg font-bold">
              {dict.footer.contactHeading}
            </h3>

            <div className="space-y-3 text-sm text-neutral-300">

              <p>
                {dict.footer.emailLabel}
                <span className="ms-2 text-white" dir="ltr">
                  info@example.com
                </span>
              </p>

              <p>
                {dict.footer.phoneLabel}
                <span className="ms-2 text-white" dir="ltr">
                  +201024210064
                </span>
              </p>

            </div>


            {/* Social Links */}

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.label}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    glass-soft
                    rounded-full
                    hover:bg-sky-600
                    transition-all
                    duration-300
                    transform
                    hover:scale-110
                    focus:outline-none
                    focus:ring-2
                    focus:ring-sky-400
                  "
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="mt-10 flex items-center justify-center gap-2 pt-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-700" />
          <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-neutral-700" />
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-8
            text-center
            text-sm
            text-neutral-400
            dark:text-neutral-500
          "
        >
          <p className="mb-2">
            © {currentYear} {dict.footer.rights}
          </p>
        </div>

      </div>

    </footer>
  );
}
