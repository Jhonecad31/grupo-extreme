"use client";
import Image from "next/image";
import { upcomingBrands } from "@/data/projects";

export default function UpcomingBrands() {
  if (!upcomingBrands || upcomingBrands.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-sm bg-dark p-8 md:p-16 text-center group">
      <div className="absolute inset-0 opacity-10 bg-[url('/GrupoExtreme-web/moto-hero.webp')] bg-cover bg-center grayscale transition-transform duration-1000 group-hover:scale-105" />
      <div className="absolute inset-0 bg-dark/80" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        <span className="inline-flex items-center justify-center space-x-3 text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,165,0,0.8)]" />
          <span>En Desarrollo</span>
        </span>
        <h3 className="text-3xl md:text-5xl text-white font-display font-black leading-tight mb-6">
          NUEVAS EXPERIENCIAS <br /> <span className="text-primary italic border-b-2 border-primary">MUY PRONTO</span>
        </h3>
        <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Nuestro equipo está explorando la selva maya para traerte aventuras aún más extremas e inmersivas. Prepárate para lo inesperado.
        </p>

        {/* Contenedor de Nuevos Logos */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-8 font-bold">
            Próximas Marcas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {upcomingBrands.map((brand, i) => (
              brand.logo && (
                <div key={i} className="w-32 h-24 relative flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group/logo">
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
