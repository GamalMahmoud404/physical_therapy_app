import type { MetadataRoute } from "next";

import { locales } from "./i18n/config";
import { siteUrl } from "./seo/site";

// كل لغة صفحة مستقلة، وكل واحدة تشير إلى الأخرى عبر alternates
// حتى يفهم محرك البحث أنهما نسختان من نفس المحتوى لا محتوى مكرر.

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteUrl}/${locale}`]),
  );

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: { languages },
  }));
}
