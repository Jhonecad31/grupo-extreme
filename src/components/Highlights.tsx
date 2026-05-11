"use client";
import { motion } from "framer-motion";

const highlightWords = [
  "AVENTURA SEGURA", "ECOTURISMO", "SELVA MAYA", "ADRENALINA", 
  "CULTURA VIVA", "CENOTES MÁGICOS", "RESERVA NATURAL", "EXPLORACIÓN"
];

const MarqueeContent = () => (
  <div className="flex items-center">
    {highlightWords.map((word, idx) => (
      <div key={idx} className="flex items-center">
        <span className="text-4xl md:text-6xl font-display font-black text-dark uppercase px-8 hover:text-white transition-colors duration-300 cursor-default">
          {word}
        </span>
        <span className="text-3xl text-dark/30">✦</span>
      </div>
    ))}
  </div>
);

export default function Highlights() {
  return (
    <section className="bg-primary py-6 overflow-hidden flex items-center">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="flex whitespace-nowrap w-max"
      >
        <MarqueeContent />
        <MarqueeContent />
      </motion.div>
    </section>
  );
}
