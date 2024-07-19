import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import { dir } from "i18next";
import { languages } from "@/i18n/settings";

import "./globals.css";

type RootLayoutProps = PropsWithChildren<{
  params: {
    lng: string
  }
}>;

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const lng = params.lng

  return (
    <html lang={lng} dir={'ltr'}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export async function generateStatisParams() {
  return languages.map((lng) => ({ lng }));
}
