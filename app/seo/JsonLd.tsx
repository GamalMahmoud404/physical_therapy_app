import type { Locale } from "../i18n/config";
import type { Dictionary } from "../i18n/getDictionary";
import { clinic, ogImage, siteUrl } from "./site";

// =========================================================
// البيانات المنظّمة (Schema.org)
//
// تُخرج JSON-LD يفهمه جوجل لعرض نتائج غنية: بطاقة نشاط طبي محلي،
// الطبيب، الخدمات المقدَّمة، والمقالات.
//
// ملاحظة: هذا وسم <script type="application/ld+json"> — وهو النوع
// الوحيد الذي يسمح React برسمه داخل مكوّن دون تحذير، لأنه بيانات
// لا كود قابل للتنفيذ.
// =========================================================

export default function JsonLd({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pageUrl = `${siteUrl}/${locale}`;
  const image = `${siteUrl}${ogImage.url}`;

  const clinicId = `${siteUrl}/#clinic`;
  const doctorId = `${siteUrl}/#doctor`;

  const graph = [
    {
      "@type": "MedicalBusiness",
      "@id": clinicId,
      name: dict.meta.title,
      description: dict.meta.description,
      url: pageUrl,
      image,
      telephone: clinic.phone,
      email: clinic.email,
      inLanguage: locale,
      medicalSpecialty: "PhysicalTherapy",
      address: {
        "@type": "PostalAddress",
        addressLocality: clinic.address.locality,
        addressRegion: clinic.address.region,
        addressCountry: clinic.address.country,
      },
      // الخدمات كما تظهر في الصفحة
      availableService: dict.services.items.map((service) => ({
        "@type": "MedicalTherapy",
        name: service.title,
        description: service.description,
      })),
    },

    {
      "@type": "Physician",
      "@id": doctorId,
      name: dict.about.doctor.name,
      jobTitle: dict.about.doctor.title,
      url: pageUrl,
      image,
      telephone: clinic.phone,
      medicalSpecialty: "PhysicalTherapy",
      worksFor: { "@id": clinicId },
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: pageUrl,
      name: dict.meta.title,
      description: dict.meta.description,
      inLanguage: locale,
      publisher: { "@id": clinicId },
    },

    // المقالات — تجعلها مؤهّلة للظهور كنتائج مقالات
    ...dict.articles.items.map((article, index) => ({
      "@type": "Article",
      "@id": `${pageUrl}#article-${index + 1}`,
      headline: article.title,
      description: article.description,
      articleSection: article.category,
      inLanguage: locale,
      image,
      author: { "@id": doctorId },
      publisher: { "@id": clinicId },
      mainEntityOfPage: pageUrl,
      articleBody: article.content.join(" "),
    })),
  ];

  const data = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify يهرّب المحتوى؛ نستبدل < كي لا يُغلق الوسم مبكرًا
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
