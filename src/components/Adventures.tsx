"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const tours = [
  {
    id: 1,
    name: "Extreme Adventuring",
    image: "/GrupoExtreme-web/extreme-fondo.webp",
    status: null,
    logo: "/icon/logos/logo-extreme.svg",
  },
  {
    id: 2,
    name: "Snorkeling Adventuring",
    image: "/GrupoExtreme-web/snorkel-fondo-2.webp",
    status: null,
    logo: "/icon/logos/logo-snorkel.svg",
  },
  {
    id: 3,
    name: "Cenote Adventuring",
    image: "/GrupoExtreme-web/cenote-fondo.webp",
    status: null,
    logo: "/icon/logos/logo-cenote.svg",
  },
  {
    id: 4,
    name: "Beach Taco Tour",
    image: "/GrupoExtreme-web/taco-fondo.webp",
    status: null,
    logo: "/icon/logos/logo-taco.svg",
  },
  {
    id: 5,
    name: "Horse Ride",
    image: "/GrupoExtreme-web/horse-fondo.webp",
    status: null,
    logo: "/icon/logos/logo-horse.svg",
  },
];

export default function Adventures() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full pb-4">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <p className="text-[#555] text-lg md:text-xl font-light leading-relaxed">
          Cada uno de nuestros desarrollos en Puerto Morelos, Ciudad de Mexico y Estado de Mexico ha sido
          diseñado para ofrecer una experiencia única, combinando confort, estilo y funcionalidad.
        </p>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -mx-4">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="flex-none px-4 min-w-0 w-full md:w-1/2 lg:w-1/3"
              >
                <div className="flex flex-col group relative h-full animate-fade-in select-none">
                  {/* Fondo oscuro con el corte diagonal en la esquina superior derecha */}
                  <div 
                    className="absolute inset-0 bg-[#1a1a1a] transition-colors duration-500 group-hover:bg-[#222]"
                    style={{ clipPath: "polygon(0 0, 55% 0, 100% 25%, 100% 100%, 0 100%)" }}
                  />
                  
                  {/* Contenido (Imagen y Textos) superpuesto al fondo */}
                  <div className="relative z-10 p-5 md:p-6 pb-8 flex flex-col h-full">
                    {/* Contenedor de la imagen sin overflow-hidden en el padre para que la esquina sobresalga del fondo */}
                    <div className="relative aspect-square w-full mb-6 shadow-xl bg-black">
                      {/* Imagen de fondo */}
                      <Image
                        src={tour.image}
                        alt={tour.name}
                        draggable={false}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover grayscale brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                      />
                      
                      {/* Logo superpuesto */}
                      {tour.logo && (
                        <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-10">
                          <Image 
                            src={tour.logo} 
                            alt={`${tour.name} logo`} 
                            draggable={false}
                            width={300}
                            height={200}
                            className="w-3/4 h-auto max-h-[60%] object-contain drop-shadow-2xl grayscale brightness-90 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                          />
                        </div>
                      )}

                      {/* Texto de Status (Ej: PRÓXIMAMENTE) */}
                      {tour.status && (
                        <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-10">
                          <span className="text-white text-2xl md:text-3xl font-bold tracking-tight uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center">
                            {tour.status}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="text-center mt-auto space-y-2">
                      <h3 className="text-white text-2xl font-bold tracking-tight">
                        {tour.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mt-12">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              (selectedIndex % 3) === idx ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 
