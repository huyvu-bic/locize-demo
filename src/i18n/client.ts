"use client";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { locizeEditorPlugin, locizePlugin } from "locize";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { cookieName, fallbackLng, getOptions, languages } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  );

if (process.env.NEXT_PUBLIC_LOCIZE_EDITOR === "true") {
  i18next.use(locizeEditorPlugin({ show: true }));
} else if (process.env.NEXT_PUBLIC_LOCIZE_PLUGIN === "true") {
  i18next.use(locizePlugin);
}

i18next.init({
  ...getOptions(),
  lng: undefined, // let detect the language on client side
  detection: {
    order: ["path", "htmlTag", "cookie", "navigator"],
  },
  preload: runsOnServerSide ? languages : [],
  react: {
    bindI18n: "languageChanged editorSaved",
  },
});

export function useTranslation(ns: string, options?: any) {
  const searchParams = useSearchParams();

  const params = useParams<{ lng: string }>();
  const lng = params.lng ?? fallbackLng;

  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, {
    ...options,
    ...(runsOnServerSide &&
      {
        // i18n: getServerI18next(searchParams.get('incontext') === 'true')
      }),
  });
  const { i18n } = ret;

  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies.i18next === lng) return;
      setCookie(cookieName, lng, { path: "/" });
    }, [lng, cookies.i18next, setCookie]);
  }

  return ret;
}
