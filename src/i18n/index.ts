import { cookies } from "next/headers";
import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions, cookieName, fallbackLng } from "./settings";
import { initReactI18next } from "react-i18next/initReactI18next";

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string, namespace: string) => {
        return import(`./locales/${language}/${namespace}.json`);
      })
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(ns: string, options = {}) {
  const _cookies = cookies();
  const lng = _cookies.get(cookieName)?.value ?? fallbackLng;

  const i18nextInstance = await initI18next(lng, ns);
  return {
    i18n: i18nextInstance,
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
  };
}
