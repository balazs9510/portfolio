import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "../assets/locales/en.json";
import huJSON from "../assets/locales/hu.json";
import jpJSON from "../assets/locales/jp.json";
import deJson from "../assets/locales/de.json";
import frJson from "../assets/locales/fr.json";
import seJson from "../assets/locales/se.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJSON },
    hu: { translation: huJSON },
    jp: { translation: jpJSON },
    fr: { translation: frJson },
    de: { translation: deJson },
    se: { translation: seJson },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
