"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

export default function AboutPage() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <Header />
      
      {/* Editorial Section */}
      <section ref={containerRef} className="relative py-32 mt-20 overflow-hidden flex-grow">
        {/* 1. NÚMERO DE SECCIÓN DECORATIVO */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.03, x: 0 }}
          className="absolute top-10 left-10 text-[15rem] md:text-[20rem] font-display font-black leading-none select-none text-dark pointer-events-none"
        >
          01
        </motion.div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* LADO IZQUIERDO: COLUMNA DE CONTENIDO (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div style={{ y: textParallax }}>
              <span className="text-primary text-xs uppercase tracking-[0.5em] font-black mb-4 block">
                Nuestra Historia
              </span>
              
              <h2 className="text-5xl md:text-7xl font-display font-black text-dark leading-[0.9] mb-10">
                18 AÑOS DE <br /> <span className="text-primary italic">LEGADO.</span>
              </h2>

              {/* MANIFIESTO */}
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed border-l-2 border-primary/20 pl-8 ml-2">
                <p className="font-medium text-dark/80">
                  <strong className="text-dark">Extreme Adventuring Cancun</strong> comenzó como un pequeño proyecto para apoyar a la comunidad local tras los cierres del puerto. Hoy, somos el parque ecológico de aventuras líder en la icónica Ruta de los Cenotes en Puerto Morelos.
                </p>
                <p className="font-light">
                  Somos una empresa 100% mexicana. Durante casi dos décadas, hemos diseñado experiencias que fusionan el ecoturismo, la cultura y la aventura familiar, priorizando siempre la seguridad y la preservación de la Selva Maya.
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-8 mt-16 border-t border-gray-200 pt-10">
                <div>
                  <h4 className="text-4xl font-display font-black text-dark">+18</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mt-2">Años de Experiencia</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-black text-dark leading-tight">NatGeo &<br/>TripAdvisor</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mt-2">Reconocimiento Global</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LADO DERECHO: COMPOSICIÓN BENTO BOX (7 columnas) */}
          <div className="lg:col-span-7 relative pt-10 md:pt-20">
            <div className="grid grid-cols-2 gap-4 h-full min-h-[500px]">
              {/* Imagen Principal (Ocupa 2 filas o la mayor parte) */}
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

              {/* Imagen Secundaria Arriba */}
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

              {/* Imagen Terciaria Abajo */}
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

      {/* Misión y Visión Section */}
      <section className="bg-white py-32 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl space-y-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary text-sm uppercase tracking-[0.4em] font-black mb-8 border-l-4 border-primary pl-4">
              Nuestra Misión
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-dark leading-[1.1]">
              Brindar a cada visitante una aventura segura, natural e inolvidable inspirada en la majestuosidad de la selva maya.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary text-sm uppercase tracking-[0.4em] font-black mb-8 border-l-4 border-primary pl-4">
              Nuestra Visión
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-dark leading-[1.1]">
              Ser el ecoparque líder a nivel global, fusionando ecoturismo, cultura y entretenimiento familiar, con un respeto absoluto por el medio ambiente.
            </h2>
          </motion.div>

        </div>
      </section>

      {/* Filosofía Section */}
      <section className="bg-dark py-32 relative overflow-hidden flex-grow">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Nuestra Evolución
            </span>
            <h2 className="text-4xl md:text-5xl text-white font-display font-black leading-tight">
              MÁS QUE UN <span className="border-b-4 border-primary">RECORRIDO</span>
            </h2>
            <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg">
              Lo que comenzó con un solo tour se ha transformado en un Ecoparque integral basado en la confianza, la innovación y una cálida hospitalidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white/5 p-10 rounded-sm backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Aventura Extrema</h3>
              <p className="text-white/60">Circuitos completos de cuatrimotos (ATV), múltiples torres de tirolesas y senderos ecuestres que atraviesan la inmensidad de la jungla.</p>
            </div>

            <div className="bg-white/5 p-10 rounded-sm backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Mundo Acuático</h3>
              <p className="text-white/60">Exploración de majestuosos cenotes abiertos y experiencias de snorkel guiado en las áreas marinas más protegidas.</p>
            </div>

            <div className="bg-white/5 p-10 rounded-sm backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Herencia Cultural</h3>
              <p className="text-white/60">Inmersión en las tradiciones con relatos mayas, gastronomía auténtica y degustación de tequila con herencia regional.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}