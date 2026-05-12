"use client";
import { motion } from "framer-motion";

export default function Mentions({ lang = "es" }: { lang?: string }) {
  const dict = lang === "es" ? {
    subtitle: "Reconocimientos",
    title: "LO QUE DICEN DE NOSOTROS",
    mentions: [
      {
        text: "Una experiencia inmersiva en la selva que redefine la conexión con la naturaleza y la cultura local.",
        author: "National Geographic Explorer",
        rating: 5
      },
      {
        text: "El nivel de seguridad, las instalaciones y la atención del personal lo hacen el mejor parque de la zona.",
        author: "TripAdvisor Traveler's Choice",
        rating: 5
      },
      {
        text: "Adrenalina pura combinada con un profundo respeto por los cenotes sagrados. Inolvidable.",
        author: "Revista Aventurero",
        rating: 5
      }
    ]
  } : {
    subtitle: "Recognitions",
    title: "WHAT THEY SAY ABOUT US",
    mentions: [
      {
        text: "An immersive jungle experience that redefines the connection with nature and local culture.",
        author: "National Geographic Explorer",
        rating: 5
      },
      {
        text: "The level of safety, facilities, and staff attention make it the best park in the area.",
        author: "TripAdvisor Traveler's Choice",
        rating: 5
      },
      {
        text: "Pure adrenaline combined with a deep respect for sacred cenotes. Unforgettable.",
        author: "Aventurero Magazine",
        rating: 5
      }
    ]
  };

  return (
    <section className="bg-[#f9f9f9] py-32 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            {dict.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl text-dark font-display font-black leading-tight">
            {dict.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.mentions.map((mention, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
            >
              <div>
                <div className="flex space-x-1 mb-6 text-primary">
                  {[...Array(mention.rating)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-lg italic mb-8 leading-relaxed">
                  "{mention.text}"
                </p>
              </div>
              <div>
                <p className="font-bold text-dark uppercase tracking-widest text-sm border-l-2 border-primary pl-4">
                  {mention.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
