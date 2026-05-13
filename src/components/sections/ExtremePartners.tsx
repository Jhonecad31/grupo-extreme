"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExtremePartners({ dict }: { dict: any }) {
  return (
    <section className="pt-8 pb-24 md:pt-12 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative w-72 h-24">
                  <Image
                    src="/icon/logos/logo-extreme-partners.svg"
                    alt="Extreme Partners Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="h-8 w-px bg-gray-200 hidden md:block" />
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm hidden md:block">
                  {dict.subtitle}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl text-dark font-display font-black leading-tight mb-8 uppercase">
                {dict.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                {dict.description}
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-dark mb-6 uppercase tracking-wider">
                    {dict.benefits_title}
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed italic border-l-4 border-primary pl-6">
                    {dict.benefits_desc}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {dict.items.map((item: string, i: number) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="mt-1.5 flex-shrink-0 w-2 h-2 bg-primary rounded-full" />
                        <span className="text-gray-700 text-sm font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm italic">
                    {dict.contact_desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
              
              {/* Phone Container */}
              <div className="relative mx-auto w-full max-w-[320px] md:max-w-[380px] aspect-[9/18.5] bg-dark rounded-[3rem] border-[12px] border-dark shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* App UI Simulation */}
                <div className="h-full w-full bg-dark flex flex-col p-6">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-10 text-[10px] text-white/40 font-bold tracking-widest">
                    <span>10:29</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full border border-white/20" />
                      <div className="w-3 h-3 rounded-full border border-white/20" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex flex-col items-center mb-12">
                    <div className="relative w-32 h-12 mb-2">
                      <Image
                        src="/icon/logos/logo-extreme-partners.svg"
                        alt="Logo"
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    <span className="text-[10px] text-white/60 uppercase tracking-[0.3em] font-bold">
                      {dict.subtitle}
                    </span>
                  </div>

                  {/* Earnings Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <span className="text-[9px] text-white/40 uppercase font-bold block mb-1">Hoy</span>
                      <span className="text-xl font-bold text-white">$ 0.00</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <span className="text-[9px] text-white/40 uppercase font-bold block mb-1">Mes</span>
                      <span className="text-xl font-bold text-white">$ 1,250.00</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-4 mb-8 h-full">
                    <div className="bg-primary/20 p-5 rounded-2xl border border-primary/30 flex flex-col justify-between group">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest">Instagram</span>
                    </div>
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                      <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest">Reservar</span>
                    </div>
                  </div>

                  {/* App Description Overlay */}
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <span className="text-[8px] text-primary font-bold uppercase tracking-widest block mb-1">{dict.app_badge}</span>
                    <p className="text-[10px] text-white font-bold mb-1 leading-tight">{dict.app_title}</p>
                    <p className="text-[9px] text-white/40 leading-relaxed">{dict.app_desc}</p>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark rounded-b-2xl z-20" />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
