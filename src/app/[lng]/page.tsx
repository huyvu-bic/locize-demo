import { Metadata } from "next";
import AuthSignUp from "@/features/user/components/auth/AuthSignUp";

type HomePageProps = {};

export const metadata: Metadata = {
  title: "BIC - Sign up",
};

export default async function HomePage(props: HomePageProps) {
  return <AuthSignUp />;
}
