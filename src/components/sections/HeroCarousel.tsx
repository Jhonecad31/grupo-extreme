"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroCarousel({ dict }: { dict: any }) {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % dict.slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [dict.slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark">
      {dict.slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
            } transition-transform duration-[10000ms]`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="80vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <div className="overflow-hidden mb-4">
          <span className="block text-white font-bold tracking-[0.3em] uppercase text-sm animate-slide-up">
            Extreme Adventuring Cancún
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl text-white font-display font-black tracking-tighter max-w-5xl leading-[0.9] mb-8 animate-fade-in">
          {dict.slides[current].title}
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 animate-fade-in delay-200">
          {dict.slides[current].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center animate-fade-in delay-500">
          <button className="bg-white hover:bg-white/90 text-dark px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all duration-300">
            {dict.explore}
          </button>
          <button className="border border-white/30 hover:border-white text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all duration-300">
            {dict.book}
          </button>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
        {dict.slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 transition-all duration-500 ${i === current ? "w-12 bg-primary" : "w-6 bg-white/30 hover:bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
