"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutContent({ lang, dict }: { lang: string; dict: any }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="min-h-screen bg-[#f9f9f9] flex flex-col">

      <section ref={containerRef} className="relative py-32 mt-32 overflow-hidden flex-grow">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.03, x: 0 }}
          className="absolute top-10 left-10 text-[15rem] md:text-[20rem] font-display font-black leading-none select-none text-dark pointer-events-none"
        >
          01
        </motion.div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div style={{ y: textParallax }}>
              <span className="text-primary text-xs uppercase tracking-[0.5em] font-black mb-4 block">
                {dict.about.editorial.subtitle}
              </span>

              <h2 className="text-5xl md:text-7xl font-display font-black text-dark leading-[0.9] mb-10">
                {dict.about.editorial.title}
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed border-l-2 border-primary/20 pl-8 ml-2">
                <p className="font-medium text-dark/80">
                  {dict.about.editorial.p1}
                </p>
                <p className="font-light">
                  {dict.about.editorial.p2}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-16 border-t border-gray-200 pt-10">
                {dict.about.editorial.stats.map((stat: any, i: number) => (
                  <div key={i}>
                    <h4 className="text-4xl font-display font-black text-dark">{stat.value}</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative pt-10 md:pt-20">
            <div className="grid grid-cols-2 gap-4 h-full min-h-[500px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="col-span-2 md:col-span-1 md:row-span-2 relative aspect-[4/3] md:aspect-auto md:h-full rounded-xl overflow-hidden shadow-2xl group border-[6px] border-white bg-[#1a1a1a]"
              >
                <Image
                  src="/GrupoExtreme-web/cenote-fondo.webp"
                  alt="Exploración en cenote"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-1 relative aspect-square rounded-xl overflow-hidden shadow-2xl group border border-white/10 bg-[#1a1a1a]"
              >
                <Image
                  src="/GrupoExtreme-web/extreme-fondo.webp"
                  alt="Aventura ATV"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="col-span-1 relative aspect-square rounded-xl overflow-hidden shadow-2xl group border-[6px] border-white bg-[#1a1a1a]"
              >
                <Image
                  src="/GrupoExtreme-web/snorkel-fondo-2.webp"
                  alt="Snorkel"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-32 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl space-y-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary text-sm uppercase tracking-[0.4em] font-black mb-8 border-l-4 border-primary p-4">
              {dict.about.mission.title}
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-dark leading-[1.1]">
              {dict.about.mission.text}
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary text-sm uppercase tracking-[0.4em] font-black mb-8 border-l-4 border-primary p-4">
              {dict.about.vision.title}
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-dark leading-[1.1]">
              {dict.about.vision.text}
            </h2>
          </motion.div>

        </div>
      </section> */}

      <section className="bg-white py-32 relative overflow-hidden flex-grow">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white -skew-x-12 transform translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-black/50 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              {dict.about.philosophy.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl text-black font-display font-black leading-tight">
              {dict.about.philosophy.title}
            </h2>
            <p className="text-black/60 mt-6 max-w-2xl mx-auto text-lg">
              {dict.about.philosophy.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {dict.about.philosophy.cards.map((card: any, i: number) => (
              <div key={i} className="bg-white/5 p-10 rounded-sm backdrop-blur-sm border border-black/10 hover:border-black/30 transition-colors group">
                <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">{card.title}</h3>
                <p className="text-black/60">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
