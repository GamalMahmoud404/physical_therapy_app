"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

// =========================================================
// تفعيل AOS — حركات الظهور عند التمرير
//
// عناصر الصفحة تحمل خصائص data-aos، لكنها لا تتحرك ما لم
// تُهيَّأ المكتبة على العميل.
//
// ⚠️ ملف aos.css يخفي كل عنصر يحمل data-aos (opacity: 0)
// حتى تضيف المكتبة صنف aos-animate، لذا لا يجوز حذف هذا
// المكوّن مع إبقاء الاستيراد وإلا اختفى المحتوى تمامًا.
//
// AOS.init يتكفّل بالحالة التي يكون فيها DOMContentLoaded قد
// وقع قبل تشغيل هذا الأثر — وهو الحال دائمًا في React — فيحسب
// المواضع فورًا بدل انتظار حدث لن يتكرر.
// =========================================================

export default function AosProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      offset: 80,
      once: true,

      // WCAG 2.3.3 — من يطلب تقليل الحركة تُلغى الحركة كلها.
      // AOS عندها يزيل خصائص data-aos فيظهر المحتوى كما هو
      // بلا أي إخفاء.
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    // مواضع العناصر تتغيّر بعد اكتمال تحميل الصور، فنعيد الحساب
    // كي لا تبقى حركة عالقة عند موضع قديم.
    const recalculate = () => AOS.refresh();

    window.addEventListener("load", recalculate);

    return () => window.removeEventListener("load", recalculate);
  }, []);

  return null;
}
