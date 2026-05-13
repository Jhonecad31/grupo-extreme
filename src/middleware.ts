import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") 
  ) {
    return NextResponse.next();
  }

  const foundLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (foundLocale) {
    const newPathname = pathname === `/${foundLocale}` 
      ? "/" 
      : pathname.replace(`/${foundLocale}/`, "/");
    
    const response = NextResponse.redirect(new URL(newPathname, request.url));
    response.cookies.set("NEXT_LOCALE", foundLocale, { path: "/" });
    return response;
  }
  const locale = request.cookies.get("NEXT_LOCALE")?.value || defaultLocale;

  return NextResponse.rewrite(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon|images|GrupoExtreme-web).*)"],
};
