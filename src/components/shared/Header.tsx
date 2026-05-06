"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Aventuras", href: "/aventuras" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-display font-extrabold text-xl">X</span>
          </div>
          <span className={`text-2xl font-display font-extrabold tracking-tighter ${isScrolled ? "text-dark" : "text-white"}`}>
            EXTREME<span className={isScrolled ? "text-primary" : "text-white"}>.</span>
          </span>
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
