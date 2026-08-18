import type { MetadataRoute } from "next";

import { siteUrl } from "./seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // نقطة النهاية الوحيدة غير المخصّصة للفهرسة
      disallow: "/api/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
