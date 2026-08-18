// =========================================================
// منطق الثيم
//
// مصدر الحقيقة عند الخادم: كوكي `theme` (يُقرأ أثناء الرسم فيصل
// data-theme جاهزًا في HTML بلا وميض وبلا سكربت قبل الرسم).
// وعند العميل: localStorage للحفظ، والكوكي كي يراه الخادم.
// إن لم يوجد اختيار صريح، يتكفّل CSS بتفضيل النظام.
// =========================================================

export type Theme = "dark" | "light";

export const THEME_COOKIE = "theme";
export const THEME_KEY = "theme";
export const THEME_SOURCE_KEY = "theme-source";

export function isTheme(value: string | undefined): value is Theme {
  return value === "dark" || value === "light";
}

// ----------------------- العميل -----------------------

export function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/** هل اختار المستخدم الثيم يدويًا؟ */
export function userChoseTheme(): boolean {
  try {
    return localStorage.getItem(THEME_SOURCE_KEY) === "user";
  } catch {
    return false;
  }
}

/** الثيم الذي يجب أن يكون مطبَّقًا الآن: اختيار المستخدم إن وُجد، وإلا النظام. */
export function resolveTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY);

    if (userChoseTheme() && isTheme(stored ?? undefined)) return stored as Theme;
  } catch {
    // localStorage قد يكون محجوبًا — نرجع لتفضيل النظام
  }

  return systemTheme();
}

/** ما هو مطبَّق فعلًا الآن على <html>. */
export function currentTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");

  if (isTheme(attr ?? undefined)) return attr as Theme;

  // لا سمة => CSS يتبع النظام
  return systemTheme();
}

/**
 * يطبّق الثيم ويحفظه في localStorage والكوكي معًا.
 * الكوكي ضروري ليعرفه الخادم في الطلب التالي فيرسل HTML صحيحًا مباشرة.
 */
export function applyTheme(theme: Theme, source: "user" | "system") {
  document.documentElement.setAttribute("data-theme", theme);

  try {
    localStorage.setItem(THEME_KEY, theme);
    localStorage.setItem(THEME_SOURCE_KEY, source);
  } catch {
    // الحفظ ليس شرطًا لعمل التبديل
  }

  if (source === "user") {
    // سنة واحدة
    document.cookie = `${THEME_COOKIE}=${theme};path=/;max-age=31536000;samesite=lax`;
  }
}
