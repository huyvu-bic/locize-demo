"use client";

import { Trans } from "react-i18next";
import { FunctionComponent } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "@/i18n/client";
import { fallbackLng, languages } from "@/i18n/settings";
import Link from "next/link";

type LanguageSwitcherProps = {};

const LanguageSwitcher: FunctionComponent<LanguageSwitcherProps> = () => {
  const params = useParams();

  const lng = params?.lng ?? fallbackLng;

  const { t } = useTranslation("common");

  return (
    <div
      className={`
        w-full flex items-center justify-center p-3
        text-sm text-white fixed z-50 left-0 bottom-0
      `}
    >
      <Trans
        t={t}
        parent={"span"}
        values={{ lng }}
        i18nKey={"language_switcher"}
        components={[<strong key={"language_switcher"} />]}
      />

      <ul className={"flex px-1 items-center gap-x-1"}>
        {languages
          .filter((lang) => lang !== lng)
          .map((lang) => (
            <li key={`language_${lang}`}>
              <Link href={`/${lang}`}>{lang}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
