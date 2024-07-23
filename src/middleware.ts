import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./i18n/settings";
import i18next from "i18next";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!images|api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  let lng;

  const cookieLng = req.cookies.get(cookieName);
  if (cookieLng) {
    lng = acceptLanguage.get(cookieLng.value);
  }

  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  }

  if (!lng) {
    lng = fallbackLng;
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") ?? "");

    const lngInReferer = languages.find((l) => {
      refererUrl.pathname.startsWith(`/${l}`);
    });

    const response = NextResponse.next();

    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);

    return response;
  }

  return NextResponse.next();
}
