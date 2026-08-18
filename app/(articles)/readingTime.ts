import type { Dictionary } from "../i18n/getDictionary";

// =========================
// READING TIME
// =========================
// دالة نصّية خالصة — يستخدمها مكوّن الخادم (البطاقات)
// ومكوّن العميل (نافذة المقال) دون تكرار الكود.

export const buildReadingTime =
  (t: Dictionary["articles"]) =>
  (content: readonly string[]) => {
    const words = content.join(" ").trim().split(/s+/).length;
    const minutes = Math.max(1, Math.round(words / 150));

    if (minutes === 1) return t.readingTimeOne;
    if (minutes === 2) return t.readingTimeTwo;

    return t.readingTimeMany.replace("{minutes}", String(minutes));
  };

export type Article = Dictionary["articles"]["items"][number] & {
  id: number;
  number: string;
};

// المعرّف والرقم مشتقّان من الترتيب — النصوص من القاموس
export function buildArticles(t: Dictionary["articles"]): Article[] {
  return t.items.map((item, index) => ({
    ...item,
    id: index + 1,
    number: String(index + 1).padStart(2, "0"),
  }));
}
