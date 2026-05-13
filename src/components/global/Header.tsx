"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function Header({ dict, lang }: { dict: any; lang: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Solo el Home y el About tienen un hero oscuro de fondo (el carrusel o imagen inmersiva).
  const isDarkHeroPage = pathname === `/${lang}` || pathname === `/${lang}/` || pathname === "/" || pathname.includes('/about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear el scroll de la página cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Persistir el estado del menú al cambiar de idioma
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("menu") === "open") {
      setIsMenuOpen(true);
      // Limpiar el parámetro de la URL sin recargar
      const newRelativePathQuery = window.location.pathname;
      window.history.replaceState(null, "", newRelativePathQuery);
    }
  }, []);

  const navLinks = [
    { name: dict.home, href: `/${lang}` },
    { name: dict.projects, href: `/${lang}/projects` },
    { name: dict.about, href: `/${lang}/about` },
    { name: dict.contact, href: `/${lang}/contact` },
  ];

  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    
    // Set cookie for Next.js i18n middleware
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;
    
    // Recargar la página actual con un parámetro para reabrir el menú
    const url = new URL(window.location.href);
    url.searchParams.set("menu", "open");
    window.location.href = url.toString();
  };

  const logo = "/icon/logos/logo-grupo-extreme.svg";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled && !isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        } ${isScrolled ? "py-5" : "py-8"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 group relative z-[70]">
          <div className="relative w-28 h-12 md:w-32 md:h-14 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={isMenuOpen || (isDarkHeroPage && !isScrolled) ? "/icon/logos/logo-extreme-negativo.svg" : logo}
              alt="Grupo Extreme Logo"
              fill
              className="object-contain transition-all"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav & Mobile Controls */}
        <div className="flex items-center space-x-5 md:space-x-0">
          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${isScrolled || !isDarkHeroPage ? "text-dark hover:text-primary" : "text-white/80 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-full text-sm font-bold tracking-widest transition-all duration-300 flex items-center space-x-2 border-2 ${isScrolled || !isDarkHeroPage
                ? "border-dark text-dark hover:bg-dark hover:text-white"
                : "border-white/50 text-white hover:border-white hover:bg-white/10"
                }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{lang.toUpperCase()}</span>
            </button>
          </nav>

          {/* Mobile Language Button (Only visible when menu is open) */}
          <button
            onClick={toggleLanguage}
            className={`md:hidden px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all duration-500 flex items-center space-x-2 border-2 relative z-[70] ${isMenuOpen
              ? "opacity-100 translate-x-0 border-white/30 text-white"
              : "opacity-0 translate-x-4 pointer-events-none border-transparent"
              }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 relative z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2 bg-white" : isScrolled || !isDarkHeroPage ? "bg-dark" : "bg-white"}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : isScrolled || !isDarkHeroPage ? "bg-dark" : "bg-white"}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-white" : isScrolled || !isDarkHeroPage ? "bg-dark" : "bg-white"} ${!isMenuOpen && "w-4 self-end"}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-dark z-[60] transition-[opacity,visibility] duration-500 ease-in-out flex flex-col justify-center items-center ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <nav className="flex flex-col items-center space-y-8 w-full px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-white text-3xl md:text-4xl font-display font-black uppercase tracking-widest hover:text-primary transition-[opacity,transform,color] duration-500 transform will-change-transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Social Media Icons for Mobile Menu */}
          <div
            className={`pt-12 flex items-center space-x-8 transition-[opacity,transform] duration-500 transform will-change-transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            style={{ transitionDelay: "450ms" }}
          >
            <a
              href="https://www.facebook.com/extremegroupmx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/extremegroupmx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
