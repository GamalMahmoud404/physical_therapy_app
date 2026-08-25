export const colorVariants = {
  primary: {
    bg: "bg-blue-600 dark:bg-sky-500",
    hover: "hover:bg-blue-700 dark:hover:bg-sky-400",
    text: "text-blue-600 dark:text-sky-400",
    border: "border-blue-600 dark:border-sky-400",
    ring: "ring-blue-600/50 dark:ring-sky-400/50",
  },
  secondary: {
    bg: "bg-purple-600 dark:bg-purple-500",
    hover: "hover:bg-purple-700 dark:hover:bg-purple-400",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-600 dark:border-purple-400",
    ring: "ring-purple-600/50 dark:ring-purple-400/50",
  },
  success: {
    bg: "bg-green-600 dark:bg-green-500",
    hover: "hover:bg-green-700 dark:hover:bg-green-400",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-600 dark:border-green-400",
    ring: "ring-green-600/50 dark:ring-green-400/50",
  },
  danger: {
    bg: "bg-red-600 dark:bg-red-500",
    hover: "hover:bg-red-700 dark:hover:bg-red-400",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-600 dark:border-red-400",
    ring: "ring-red-600/50 dark:ring-red-400/50",
  },
};

export const shadowVariants = {
  sm: "shadow-sm",
  base: "shadow-[0_10px_25px_rgba(0,0,0,0.1)]",
  md: "shadow-[0_12px_28px_rgba(0,0,0,0.12)]",
  lg: "shadow-[0_15px_40px_rgba(0,0,0,0.15)]",
  xl: "shadow-[0_20px_50px_rgba(0,0,0,0.2)]",
  "2xl": "shadow-[0_25px_60px_rgba(0,0,0,0.25)]",
  dark: {
    sm: "dark:shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
    base: "dark:shadow-[0_10px_25px_rgba(0,0,0,0.5)]",
    lg: "dark:shadow-[0_15px_40px_rgba(0,0,0,0.6)]",
  },
};

export const transitionPresets = {
  fast: "transition-all duration-150 ease-out",
  base: "transition-all duration-200 ease-out",
  slow: "transition-all duration-300 ease-out",
  slower: "transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)",
};

export const focusRing =
  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-sky-400 dark:focus:ring-offset-neutral-950";

export const truncateText =
  "overflow-hidden text-ellipsis whitespace-nowrap";

export const visibleToScreen =
  "sr-only focus:not-sr-only focus:absolute focus:top-0 focus:start-0 focus:z-50 focus:p-3 focus:bg-white focus:text-black dark:focus:bg-neutral-900 dark:focus:text-white";
