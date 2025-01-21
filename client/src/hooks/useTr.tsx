/* eslint-disable @typescript-eslint/no-explicit-any */
import EnTranslations from "../assets/locales/en.json";
import { useTranslation } from "react-i18next";

type NestedKeys<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? NestedKeys<T[K]>
    : string;
};

function createTranslationKeys<T extends Record<string, any>>(
  obj: T,
  prefix = ""
): NestedKeys<T> {
  return Object.keys(obj).reduce((acc, key) => {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];

    (acc as any)[key] =
      typeof value === "object" && value !== null
        ? createTranslationKeys(value, fullPath)
        : fullPath;

    return acc;
  }, {} as any);
}
const tr = createTranslationKeys(EnTranslations);
export type TranslationKeys = typeof tr; // Type-safe nested structure

const useTr = () => {
  const { t } = useTranslation();

  const createProxy = (obj: any): any =>
    new Proxy(obj, {
      get: (target, prop) => {
        const value = target[prop];
        if (typeof value === "object" && value !== null) {
          return createProxy(value); // Recursively proxy nested objects
        }
        if (typeof value === "string") {
          return t(value); // Translate string keys
        }
        return value;
      },
    });
  return {
    tr: createProxy(tr) as TranslationKeys,
  };
};
export default useTr;
