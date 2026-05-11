"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"ES" | "EN">("ES");
  const pathname = usePathname();
  // Solo el Home tiene un hero oscuro de fondo (el carrusel).
  const isDarkHeroPage = pathname === "/";

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

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  const logo = "/icon/logos/logo-grupo-extreme.svg";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled && !isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        } ${isScrolled ? "py-4" : "py-6"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 group relative z-[70]">
          <div className="relative w-20 h-15 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={logo}
              alt="Grupo Extreme Logo"
              fill
              className={`object-contain transition-all ${isMenuOpen ? "brightness-0 invert" : ""}`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
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
            onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
            className={`px-4 py-2 rounded-full text-sm font-bold tracking-widest transition-all duration-300 flex items-center space-x-2 border-2 ${isScrolled || !isDarkHeroPage
              ? "border-dark text-dark hover:bg-dark hover:text-white"
              : "border-white/50 text-white hover:border-white hover:bg-white/10"
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{language}</span>
          </button>
        </nav>

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

          <div
            className={`pt-10 transition-[opacity,transform] duration-500 transform will-change-transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            <button
              onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
              className="px-6 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 flex items-center space-x-2 border-2 border-white/50 text-white hover:border-white hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{language}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
