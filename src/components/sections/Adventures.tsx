"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export default function Adventures({ dict, projects }: { dict: any, projects: any[] }) {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="w-full pb-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in">
            {dict.subtitle}
          </span>
          <h2 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight animate-slide-up">
            {dict.title}
          </h2>
        </div>
        <Link href="/projects" className="group flex items-center text-dark font-bold uppercase tracking-widest text-sm border-b-2 border-dark pb-2 hover:border-primary hover:text-primary transition-all duration-300">
          {dict.view_all}
          <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <p className="text-[#555] text-lg md:text-xl font-light leading-relaxed">
          {dict.description}
        </p>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -mx-4">
            {projects.map((project: any) => (
              <div
                key={project.id}
                className="flex-none px-4 min-w-0 w-[85vw] md:w-1/2 lg:w-1/4"
              >
                <Link href={project.url || "#"} className="flex flex-col group relative h-full animate-fade-in select-none">
                  {/* Fondo oscuro con el corte diagonal en la esquina superior derecha */}
                  <div
                    className="absolute inset-0 bg-black transition-colors duration-500"
                    style={{ clipPath: "polygon(0 0, 55% 0, 100% 25%, 100% 100%, 0 100%)" }}
                  />

                  {/* Contenido (Imagen y Textos) superpuesto al fondo */}
                  <div className="relative z-10 p-5 md:p-6 pb-8 flex flex-col h-full">
                    {/* Contenedor de la imagen sin overflow-hidden en el padre para que la esquina sobresalga del fondo */}
                    <div className="relative aspect-square w-full mb-6 shadow-xl bg-black">
                      {/* Imagen de fondo */}
                      <Image
                        src={project.image}
                        alt={project.name}
                        draggable={false}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                      />

                      {/* Logo superpuesto */}
                      {project.logo && (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,transparent_65%)] pointer-events-none z-[5] transition-opacity duration-700 group-hover:opacity-80" />
                          <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-10">
                            <Image
                              src={project.logo}
                              alt={`${project.name} logo`}
                              draggable={false}
                              width={300}
                              height={200}
                              className="w-3/4 h-auto max-h-[60%] object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(0,0,0,1)]"
                            />
                          </div>
                        </>
                      )}

                      {/* Texto de Status (Ej: PRÓXIMAMENTE) */}
                      {project.status && (
                        <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-10">
                          <span className="text-white text-2xl md:text-3xl font-bold tracking-tight uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center">
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="text-center mt-auto space-y-2">
                      <h3 className="text-white text-2xl font-bold tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mt-12">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${selectedIndex === idx ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 
