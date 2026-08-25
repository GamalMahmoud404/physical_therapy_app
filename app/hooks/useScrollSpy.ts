"use client";

import { useState, useEffect } from "react";

export interface ScrollSpyItem {
  id: string;
  label: string;
}

export function useScrollSpy(
  items: ScrollSpyItem[],
  options?: {
    offset?: number;
    threshold?: number;
  }
) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const offset = options?.offset ?? 80;
    const threshold = options?.threshold ?? 0.5;

    const observers = new Map<string, IntersectionObserver>();

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          threshold,
          rootMargin: `-${offset}px 0px -66.66% 0px`,
        }
      );

      observer.observe(element);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [items, options?.offset, options?.threshold]);

  return activeId;
}
