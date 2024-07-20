import { useTranslation } from "@/i18n";
import { FunctionComponent } from "react";
import PersonalInvitation from "@/features/common/components/invitation/PersonalInvitation";
import SignUpMethods from "./_components/SignUpMethods";

type AuthSignUpProps = {};

const AuthSignUp: FunctionComponent<AuthSignUpProps> = async () => {
  const { t } = await useTranslation("user_auth");

  return (
    <div className={"bg-white p-12 rounded-md flex flex-col gap-y-6"}>
      <div className={"flex flex-col gap-y-1"}>
        <h3 className={"text-center text-2xl font-bold"}>
          {t("sign_up_title")}
        </h3>
        <div className={"text-center text-sm"}>{t("sign_up_subtitle")}</div>
      </div>

      <PersonalInvitation />

      <SignUpMethods />
    </div>
  );
};

export default AuthSignUp;
