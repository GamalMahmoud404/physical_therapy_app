// =========================================================
// ثوابت الموقع المستخدمة في الـ SEO
//
// عنوان الموقع يُقرأ بالترتيب التالي:
//   1. NEXT_PUBLIC_SITE_URL — اضبطه يدويًا عند استخدام نطاق خاص.
//   2. VERCEL_PROJECT_PRODUCTION_URL — نطاق الإنتاج الذي توفّره Vercel
//      تلقائيًا، فتخرج الروابط المطلقة صحيحة حتى بدون ضبط أي متغيّر.
//   3. localhost — للتطوير المحلي فقط.
//
// ⚠️ لو خرج canonical على localhost في الإنتاج فجوجل يرى رابطًا لا يصله،
// وهو ما يمنع فهرسة الموقع بالكامل.
// =========================================================

const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  vercelProductionUrl ??
  "http://localhost:3000"
).replace(/\/$/, "");

// ⚠️ قيم مؤقتة — استبدلها ببيانات العيادة الحقيقية
export const clinic = {
  phone: "+201024210064",
  whatsapp: "+201024210064",
  email: "info@example.com",
  // بلا ‎?locale=‎: الموقع بأربع لغات، وفيسبوك يعرض لغة الزائر تلقائيًا
  facebook: "https://www.facebook.com/dratef.mmdouhsabra",
  // العنوان اختياري في المخطط، لكن وجوده يحسّن ظهور النشاط محليًا
  address: {
    locality: "المنصورة",
    region: "الدقهلية",
    country: "EG",
  },
};

/** رابط واتساب — wa.me يقبل أرقامًا فقط بلا ‎+‎ أو مسافات */
export const whatsappUrl = `https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}`;

/** صورة المشاركة الاجتماعية — نستخدم صورة الهيرو الموجودة */
export const ogImage = {
  url: "/hero-1.jpg",
  width: 2400,
  height: 1600,
};
