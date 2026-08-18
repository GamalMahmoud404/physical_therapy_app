import { notFound } from "next/navigation";

import Main from "../(main)/Main";
import About from "../(about)/About";
import Services from "../(services)/Services";
import Articles from "../(articles)/Articles";
import Contact from "../(contact)/Contact";

import { isLocale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import JsonLd from "../seo/JsonLd";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <div id="home" className="w-full">
      <JsonLd locale={locale} dict={dict} />

      {/* مكوّنات العميل تستقبل الجزء الذي تحتاجه فقط من القاموس —
          تمرير القاموس كاملًا يضاعف حجم حمولة RSC وزمن تحليلها */}
      <Main dict={dict.hero} />
      <About dict={dict} />
      <Services dict={dict} />
      <Articles dict={dict.articles} />
      <Contact dict={dict.contact} locale={locale} />
    </div>
  );
}
