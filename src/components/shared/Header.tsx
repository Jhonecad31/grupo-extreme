"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image"
import logo from "@/icon/logo/Grupo extreme-02.svg"
=======
>>>>>>> 77866f4 (feat:componentes y base del proyecto)

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const [language, setLanguage] = useState<"ES" | "EN">("ES");
=======
>>>>>>> 77866f4 (feat:componentes y base del proyecto)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
<<<<<<< HEAD
    { name: "Proyectos", href: "/projects" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
=======
    { name: "Aventuras", href: "/aventuras" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
>>>>>>> 77866f4 (feat:componentes y base del proyecto)
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
<<<<<<< HEAD
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-20 h-15 transition-transform duration-300 group-hover:scale-110">
            <Image 
              src={logo} 
              alt="Grupo Extreme Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
=======
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-display font-extrabold text-xl">X</span>
          </div>
          <span className={`text-2xl font-display font-extrabold tracking-tighter ${isScrolled ? "text-dark" : "text-white"}`}>
            EXTREME<span className={isScrolled ? "text-primary" : "text-white"}>.</span>
          </span>
>>>>>>> 77866f4 (feat:componentes y base del proyecto)
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${
                isScrolled ? "text-dark hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
<<<<<<< HEAD
          <button
            onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
            className={`px-4 py-2 rounded-full text-sm font-bold tracking-widest transition-all duration-300 flex items-center space-x-2 border-2 ${
              isScrolled
                ? "border-dark text-dark hover:bg-dark hover:text-white"
                : "border-white/50 text-white hover:border-white hover:bg-white/10"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{language}</span>
          </button>
=======
          <Link
            href="/contacto"
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              isScrolled
                ? "bg-dark text-white hover:bg-primary"
                : "bg-white text-dark hover:bg-primary hover:text-white"
            }`}
          >
            Reservar
          </Link>
>>>>>>> 77866f4 (feat:componentes y base del proyecto)
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 transition-all ${isScrolled ? "bg-dark" : "bg-white"}`}></span>
          <span className={`w-6 h-0.5 transition-all ${isScrolled ? "bg-dark" : "bg-white"}`}></span>
          <span className={`w-4 h-0.5 self-end transition-all ${isScrolled ? "bg-dark" : "bg-white"}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-dark z-[60] transition-transform duration-700 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8">
          <button
            className="absolute top-8 right-8 text-white text-4xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-3xl font-display font-bold uppercase tracking-widest hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
