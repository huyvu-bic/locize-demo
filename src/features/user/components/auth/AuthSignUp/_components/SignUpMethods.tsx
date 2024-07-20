"use client";

import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Trans } from "react-i18next";

type SignUpMethodsProps = {};

const SignUpMethods: FunctionComponent<SignUpMethodsProps> = () => {
  const { t } = useTranslation("user_auth");

  return (
    <ul className={"flex flex-col gap-y-3"}>
      <li>
        <button
          className={`
            text-sm w-full rounded-md border-[1px] border-solid 
            border-neutral-60 p-3 flex items-center justify-center gap-x-2
          `}
        >
          <Image
            width={24}
            height={24}
            className={"w-6 h-6"}
            alt={"BIC - Sign up with google"}
            src={"/images/icons/google-icon.png"}
          />

          <span>{t("sign_up_with_google")}</span>
        </button>
      </li>

      <li>
        <button
          className={`
            text-sm w-full rounded-md border-[1px] border-solid 
            border-neutral-60 p-3 flex items-center justify-center gap-x-2
          `}
        >
          <Image
            width={24}
            height={24}
            className={"w-6 h-6"}
            alt={"BIC - Sign up with google"}
            src={"/images/icons/facebook-icon.png"}
          />

          <span>{t("sign_up_with_facebook")}</span>
        </button>
      </li>

      <li>
        <button
          className={`
            text-sm w-full rounded-md border-[1px] border-solid 
            border-neutral-60 p-3 flex items-center justify-center gap-x-2
          `}
        >
          <Image
            width={24}
            height={24}
            className={"w-6 h-6"}
            alt={"BIC - Sign up with google"}
            src={"/images/icons/email-icon.png"}
          />

          <span>{t("sign_up_with_email")}</span>
        </button>
      </li>

      <li>
        <Trans
          t={t}
          parent={'div'}
          i18nKey={'privacy_term'}
          className={'text-xs text-center'}
          components={[<Link href="/" key={'privacy_term'} />]}
        />
      </li>
    </ul>
  );
};

export default SignUpMethods;
