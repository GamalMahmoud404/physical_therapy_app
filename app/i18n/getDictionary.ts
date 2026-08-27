import type { Locale } from "./config";
import { ar, type Dictionary } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";
import { es } from "./dictionaries/es";

const dictionaries: Record<Locale, Dictionary> = { ar, en, fr, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
