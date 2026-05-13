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
                <div className="h-full w-full bg-[#121418] flex flex-col pt-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4 text-[10px] text-white/40 font-bold tracking-widest px-6">
                    <span>9:41</span>
                    <div className="flex space-x-1.5 items-center">
                      <div className="flex space-x-0.5">
                        <div className="w-0.5 h-1.5 bg-white/40 rounded-full" />
                        <div className="w-0.5 h-2 bg-white/40 rounded-full" />
                        <div className="w-0.5 h-2.5 bg-white/80 rounded-full" />
                      </div>
                      <svg className="w-3 h-3 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
                      <div className="w-5 h-2.5 rounded-sm border border-white/20 relative">
                        <div className="absolute left-0 top-0 h-full bg-white/80 w-3/4" />
                      </div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex justify-between items-center mb-6 px-6">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <span className="text-[11px] text-white font-bold tracking-tight">All</span>
                      <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      </svg>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="px-6 mb-6">
                    <div className="bg-white/5 rounded-2xl p-3 flex justify-between items-center border border-white/5">
                      <div className="flex items-center space-x-3">
                        <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        <span className="text-[11px] text-white/30 font-medium">Search</span>
                      </div>
                      <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Map</span>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex space-x-3 px-6 mb-6 overflow-x-auto no-scrollbar">
                    <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] text-white font-bold border border-white/10 whitespace-nowrap">All</div>
                    <div className="bg-white/5 px-4 py-2 rounded-xl text-[10px] text-white/60 font-bold border border-white/5 whitespace-nowrap">Adventure tours</div>
                  </div>

                  {/* Tour Grid */}
                  <div className="flex-grow px-6 overflow-y-auto no-scrollbar">
                    <div className="grid grid-cols-2 gap-4 mb-20">
                      {[
                        { name: "Cenote Adventuring", img: "/GrupoExtreme-web/cenote-fondo.webp" },
                        { name: "Beach Taco Tour", img: "/GrupoExtreme-web/taco-fondo.webp" },
                        { name: "Extreme Adventuring", img: "/GrupoExtreme-web/extreme-fondo.webp" },
                        { name: "Snorkeling Adventure", img: "/GrupoExtreme-web/snorkel-fondo-2.webp" },
                        { name: "Horse ride", img: "/GrupoExtreme-web/horse-fondo.webp" },
                        { name: "Sabor de la Selva", img: "/GrupoExtreme-web/extreme-fondo.webp" }
                      ].map((tour, i) => (
                        <div key={i} className="flex flex-col space-y-2">
                          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg group">
                            <Image
                              src={tour.img}
                              alt={tour.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>
                          <span className="text-[9px] text-white font-bold leading-tight px-1">{tour.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-[#121418]/80 backdrop-blur-md border-t border-white/5 flex justify-around items-center px-6 pb-2">
                    <div className="p-2 text-white/40"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></div>
                    <div className="p-2 text-white/40"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg></div>
                    <div className="p-2 text-primary border-b-2 border-primary"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>
                    <div className="p-2 text-white/40"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
                    <div className="p-2 text-white/40"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg></div>
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
