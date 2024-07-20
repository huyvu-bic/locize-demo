import AuthSignUp from "@/features/user/components/auth/AuthSignUp";
import Greeting from "@/features/user/components/Greeting";
import { useTranslation } from "@/i18n";
import { Metadata } from "next";

type HomePageProps = {};

export const metadata: Metadata = {
  title: "BIC - Sign up",
};

export default async function HomePage(props: HomePageProps) {
  const { t } = await useTranslation("common");

  return <AuthSignUp />;
}
