import { useTranslation } from "@/i18n";
import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";

type AboutUsListProps = PropsWithChildren;

const AboutUsList: FunctionComponent<AboutUsListProps> = ({ children }) => {
  return <ul className={"flex flex-col gap-y-6"}>{children}</ul>;
};

type AboutUsItemProps = {
  text: string;
  title: string;
};

const AboutUsItem: FunctionComponent<AboutUsItemProps> = async ({
  text,
  title,
}) => {
  return (
    <li className={`flex flex-row gap-x-6 items-start`}>
      <Image
        priority
        width={24}
        height={24}
        alt={"BIC - Approve icon"}
        className={`max-w-6 max-h-6`}
        src={"/images/icons/approve-icon.png"}
      />

      <div className={`flex flex-col gap-y-1`}>
        <h3 className={"text-white stext-body font-semibold"}>{title}</h3>
        <div className={"text-sm text-white"}>{text}</div>
      </div>
    </li>
  );
};

type AboutUsProps = {};

const AboutUs: FunctionComponent<AboutUsProps> = async () => {
  const { t } = await useTranslation("user_about_us");

  const containerClassName = `flex flex-col gap-y-6`;

  return (
    <div className={containerClassName}>
      <Image
        priority
        width={175}
        height={56}
        alt={"Bic - Auth Logo"}
        src={"/images/auth_logo.png"}
      />

      <AboutUsList>
        <AboutUsItem
          title={t("social_community_platform")}
          text={t("social_community_platform_text")}
        />

        <AboutUsItem title={t("always_reach")} text={t("always_reach_text")} />

        <AboutUsItem
          title={t("quality_content")}
          text={t("quality_content_text")}
        />

        <AboutUsItem title={t("security")} text={t("security_text")} />
      </AboutUsList>
    </div>
  );
};

export default AboutUs;
