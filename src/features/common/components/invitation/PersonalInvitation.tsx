"use client";

import Image from "next/image";
import { Trans } from "react-i18next";
import { FunctionComponent, PropsWithChildren } from "react";
import { useTranslation } from "@/i18n/client";

type PersonalSummaryProps = PropsWithChildren;

const PersonalSummary: FunctionComponent<PersonalSummaryProps> = ({
  children,
}) => {
  return (
    <div className={"flex items-center gap-x-1"}>
      <span className={"font-semibold"}>{children}</span>

      <Image
        width={16}
        height={16}
        alt="BIC - Verified"
        className={'flex-1 w-4 h-4'}
        src={"/images/icons/verified-icon.png"}
      />
    </div>
  );
};

type PersonalInvitationProps = {};

const PersonalInvitation: FunctionComponent<PersonalInvitationProps> = () => {
  const { t } = useTranslation("common_invitation");

  const containerClassName =
    "flex flex-col p-4 items-center rounded-md bg-gray-100 gap-y-2";

  return (
    <div className={containerClassName}>
      <Image
        priority
        width={48}
        height={48}
        src={"/images/avatar.png"}
        alt={"BIC - Invitation avatar"}
      />

      <Trans
        t={t}
        parent={"div"}
        ns="common_invitation"
        values={{ fullName: "Lê Huy Vũ" }}
        i18nKey={"personal_invitation_summary"}
        className={"flex flex-col items-center text-sm"}
        components={[<PersonalSummary key={"personal_invitation_summary"} />]}
      />
    </div>
  );
};

export default PersonalInvitation;
