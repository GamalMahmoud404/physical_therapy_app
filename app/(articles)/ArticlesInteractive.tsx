"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";

import type { Dictionary } from "../i18n/getDictionary";
import { buildReadingTime, type Article } from "./readingTime";

// نافذة المقال تُجلب عند أول فتح فقط — خارج حزمة التحميل الأولى
const ArticleModal = dynamic(() => import("./ArticleModal"));

// =========================================================
// الغلاف التفاعلي لقسم المقالات
//
// البطاقات نفسها تُرسَم على الخادم وتصل كـ children، فلا يُرطَّب
// شيء من شفراتها في المتصفح. هنا مستمع نقر واحد فقط يلتقط
// النقر على أي بطاقة عبر data-article-id ويفتح النافذة.
// =========================================================

export default function ArticlesInteractive({
  articles,
  t,
  children,
}: {
  articles: Article[];
  t: Dictionary["articles"];
  children: React.ReactNode;
}) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const readingTime = buildReadingTime(t);

  const selectedIndex = articles.findIndex(
    (article) => article.id === selectedId,
  );

  const selectedArticle = selectedIndex === -1 ? null : articles[selectedIndex];

  const hasPrevious = selectedIndex > 0;
  const hasNext = selectedIndex > -1 && selectedIndex < articles.length - 1;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = (event.target as HTMLElement).closest<HTMLElement>(
      "[data-article-id]",
    );

    if (card) setSelectedId(Number(card.dataset.articleId));
  };

  const goToPrevious = () => {
    if (hasPrevious) setSelectedId(articles[selectedIndex - 1].id);
  };

  const goToNext = () => {
    if (hasNext) setSelectedId(articles[selectedIndex + 1].id);
  };

  const closeArticle = useCallback(() => setSelectedId(null), []);

  return (
    <>
      <div onClick={handleClick}>{children}</div>

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          total={articles.length}
          t={t}
          readingTime={readingTime}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          onClose={closeArticle}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  );
}
