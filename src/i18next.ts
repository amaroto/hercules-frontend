import I18next from "i18next";
import type { InitOptions } from "i18next";
import resources from "./locales/en";
import { initReactI18next } from "react-i18next";

const i18NextConfig: InitOptions = {
  debug: process.env.NODE_ENV === "development",
  defaultNS: "common",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  load: "languageOnly",
  resources,
};

const initializeI18next = () => {
  I18next.use(initReactI18next).init(i18NextConfig);

  return I18next;
};

export default initializeI18next;
