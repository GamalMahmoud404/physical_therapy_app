import Link from "next/link";

import type { Dictionary } from "../i18n/getDictionary";

export default function Footer({ dict }: { dict: Dictionary }) {
  const quickLinks = [
    { href: "#home", label: dict.nav.home },
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <footer className="bg-neutral-800 text-white dark:bg-neutral-900">

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

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-sky-400"
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

            <div className="mt-5 flex gap-5">

              <a
                href="#facebook"
                className="transition-colors duration-300 hover:text-sky-400"
              >
                Facebook
              </a>

              <a
                href="#instagram"
                className="transition-colors duration-300 hover:text-sky-400"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-10
            border-t
            border-neutral-700
            pt-6
            text-center
            text-sm
            text-neutral-400
            dark:border-neutral-800
          "
        >
          <p>
            © {new Date().getFullYear()} {dict.footer.rights}
          </p>
        </div>

      </div>

    </footer>
  );
}
