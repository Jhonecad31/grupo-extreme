import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Evitar procesar archivos estáticos o internos
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // Imágenes, favicons, etc.
  ) {
    return NextResponse.next();
  }

  // 2. Si el usuario intenta entrar con un prefijo manual (ej: /en/about), 
  // lo redirigimos a la versión limpia (/about) pero guardando su preferencia en la cookie
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

  // 3. Obtener el idioma de la cookie o usar el defecto
  const locale = request.cookies.get("NEXT_LOCALE")?.value || defaultLocale;

  // 4. REWRITE interno: el usuario ve /about, pero cargamos /[lang]/about
  return NextResponse.rewrite(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon|images|GrupoExtreme-web).*)"],
};
