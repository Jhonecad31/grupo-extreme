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

      <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-40 pb-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/GrupoExtreme-web/extreme-fondo.webp"
            alt="Adventure Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-2xl p-8 md:p-16 rounded-xl border border-white/10 shadow-2xl max-w-2xl"
            >
              <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.5em] font-black mb-6 block">
                {dict.about.editorial.subtitle}
              </span>

              <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-[0.9] mb-8 md:mb-10">
                {dict.about.editorial.title}
              </h2>

              <div className="space-y-6 md:space-y-8 text-white/80 text-base md:text-lg leading-relaxed border-l-2 border-primary/40 pl-6 md:pl-8">
                <p className="font-medium text-white">
                  {dict.about.editorial.p1}
                </p>
                <p className="font-light">
                  {dict.about.editorial.p2}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16 border-t border-white/10 pt-8 md:pt-10">
                {dict.about.editorial.stats.map((stat: any, i: number) => (
                  <div key={i}>
                    <h4 className="text-2xl md:text-4xl font-display font-black text-primary leading-tight">{stat.value}</h4>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mt-1 md:mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative h-full flex flex-col justify-center space-y-8 lg:pl-12">
              {dict.about.awards.items.map((award: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 100, rotate: 5 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 50 }}
                  whileHover={{ scale: 1.05, x: -10 }}
                  className={`relative p-8 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center gap-6 max-w-md ${i === 1 ? 'lg:translate-x-12' : i === 2 ? 'lg:translate-x-6' : ''
                    }`}
                >
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-2xl p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src={
                          i === 0 ? "/icon/logos-premios/Nat-geo-negro.svg" :
                          i === 1 ? "/icon/logos-premios/world.svg" :
                          "/icon/logos-premios/trip.svg"
                        }
                        alt={award.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight mb-2">
                      {award.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-xl blur-xl opacity-50" />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-32 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-start space-x-6 p-8 rounded-xl bg-[#fcfcfc] border border-gray-50 group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-dark mb-4">{dict.about.mission.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{dict.about.mission.text}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start space-x-6 p-8 rounded-xl bg-[#fcfcfc] border border-gray-50 group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-dark mb-4">{dict.about.vision.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{dict.about.vision.text}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-[#f9f9f9] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fcfcfc] -skew-x-12 transform translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
            >
              {dict.about.philosophy.subtitle}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl text-dark font-display font-black leading-tight uppercase"
            >
              {dict.about.philosophy.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mt-8 max-w-2xl mx-auto text-xl leading-relaxed font-light"
            >
              {dict.about.philosophy.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dict.about.philosophy.cards.map((card: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-6 group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  {i === 0 ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ) : i === 1 ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-dark mb-2 leading-tight">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-xs">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
