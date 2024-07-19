import Greeting from "@/features/user/components/Greeting";
import { useTranslation } from "@/i18n";

type HomePageProps = {};

export default async function HomePage(props: HomePageProps) {
  const { t } = await useTranslation("common");

  return (
    <div>
      <Greeting />
      {t("hello", { name: "Lazintellone" })}
    </div>
  );
}
