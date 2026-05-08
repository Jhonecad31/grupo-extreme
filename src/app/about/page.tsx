"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LuxuryEditorialAbout() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgParallax = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative bg-[#f9f9f9] py-32 overflow-hidden">
      
      {/* 1. NÚMERO DE SECCIÓN DECORATIVO (Estilo Revista) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        className="absolute top-10 left-10 text-[20rem] font-serif font-bold leading-none select-none"
      >
        01
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* LADO IZQUIERDO: COLUMNA DE CONTENIDO (5 columnas) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div style={{ y: textParallax }}>
            <span className="text-accent text-xs uppercase tracking-[0.5em] font-semibold mb-4 block">
              Exploración Premium
            </span>
            
            <h2 className="text-6xl md:text-8xl font-serif text-neutral-900 leading-[0.9] mb-10">
              Más que <br /> <span className="italic italic-serif">Destinos.</span>
            </h2>

            {/* MANIFIESTO (Texto principal) */}
            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed border-l border-neutral-200 pl-8 ml-2">
              <p>
                En **Grupo Extreme**, entendemos que el lujo no es el destino, sino la forma en que interactuamos con el entorno. Cada expedición está curada para quienes buscan la conexión entre la adrenalina y el silencio.
              </p>
              <p className="font-light">
                Desde los abismos de los cenotes más vírgenes hasta la exclusividad de nuestras playas privadas en Cancún, nuestra misión es elevar el estándar del turismo de aventura.
              </p>

              
            </div>

            {/* STATS / DATOS DE INTERÉS (Grid de Información Extra) */}
            <div className="grid grid-cols-2 gap-8 mt-16 border-t border-neutral-100 pt-10">
              <div>
                <h4 className="text-3xl font-serif text-neutral-800">+15k</h4>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Viajeros Satisfechos</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-neutral-800">12</h4>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Locaciones Exclusivas</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* LADO DERECHO: COMPOSICIÓN VISUAL ASIMÉTRICA (7 columnas) */}
        <div className="lg:col-span-7 relative pt-20">
          
          {/* Imagen Principal con Revelado Vertical */}
          <motion.div 
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.4, ease: [0.45, 0, 0.55, 1] }}
            className="relative aspect-[3/4] w-full overflow-hidden shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.1)]"
          >
            <motion.img
              style={{ scale: 1.3, y: imgParallax }}
              src="/hero-extreme-adventure.jpg"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Segunda Imagen (Imagen de Detalle / Contexto) */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute -right-12 -bottom-16 w-1/2 aspect-square hidden md:block border-[12px] border-white overflow-hidden shadow-2xl"
          >
            <img 
              src="/detail-beach.jpg" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Etiqueta Flotante (Metadata del Proyecto) */}
          <div className="absolute top-0 right-0 p-6 bg-neutral-900 text-white translate-x-1/4 -translate-y-1/4">
            <p className="text-[10px] tracking-[0.3em] font-bold uppercase rotate-90 origin-left mt-8">
              Est. 2026
            </p>
          </div>
        </div>

      </div>

      {/* 3. CALL TO ACTION DISCRETO (Scroll Indicator o Link) */}
      <div className="mt-24 flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="group flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 group-hover:text-neutral-900 transition-colors">
            Descubre la experiencia
          </span>
          <div className="w-px h-20 bg-neutral-200 group-hover:bg-neutral-900 transition-all duration-500" />
        </motion.button>
      </div>
    </section>
  );
}