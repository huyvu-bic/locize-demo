import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import { dir } from "i18next";
import { cookieName, fallbackLng, languages } from "@/i18n/settings";

import "./globals.css";
import { cookies } from "next/headers";
import LanguageSwitcher from "@/features/common/components/LanguageSwitcher";

type RootLayoutProps = PropsWithChildren<{}>;

const inter = Inter({ subsets: ["latin"] });

export const getLng = () => {
  return cookies().get(cookieName)?.value ?? fallbackLng;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const lng = getLng()

  return (
    <html lang={lng} dir={"ltr"}>
      <body className={inter.className}>
        {children}

        <LanguageSwitcher />
      </body>
    </html>
  );
}

export async function generateStatisParams() {
  return languages.map((lng) => ({ lng }));
}
