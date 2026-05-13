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
                <div className="h-full w-full bg-dark flex flex-col p-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-[10px] text-white/40 font-bold tracking-widest px-2">
                    <span>10:29</span>
                    <div className="flex space-x-1.5 items-center">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
                      <div className="w-5 h-2.5 rounded-sm border border-white/20 relative">
                        <div className="absolute left-0 top-0 h-full bg-white/40 w-3/4" />
                      </div>
                    </div>
                  </div>

                  {/* Profile Header */}
                  <div className="flex justify-between items-center mb-6 px-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-600 border border-white/10 overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />
                      </div>
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest">EXTREME PARTNERS</span>
                    </div>
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>

                  {/* Earnings Card */}
                  <div className="bg-[#151515] p-4 rounded-2xl border border-white/5 mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[9px] text-white/40 uppercase font-bold block mb-1">Ganancias (USD)</span>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-white text-xs font-bold">$</span>
                          <span className="text-white text-2xl font-black">0</span>
                          <span className="text-white/40 text-[10px] font-bold">00</span>
                        </div>
                        <span className="text-[8px] text-white/20 uppercase font-bold mt-1 block">Hoy</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] text-white/40 uppercase font-bold block mb-1">Noviembre 2025</span>
                        <div className="flex items-baseline justify-end space-x-1">
                          <span className="text-white text-xs font-bold">$</span>
                          <span className="text-white text-2xl font-black">0</span>
                          <span className="text-white/40 text-[10px] font-bold">00</span>
                        </div>
                        <svg className="w-3 h-3 text-white/20 ml-auto mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Action Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { title: "Promocionar en Instagram", color: "bg-[#3498db]", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
                      { title: "Reservar", color: "bg-[#3498db]", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" },
                      { title: "QR", color: "bg-[#3498db]", icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" },
                      { title: "Enlace de pago", color: "bg-[#3498db]", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }
                    ].map((item, i) => (
                      <div key={i} className={`${item.color} p-3 rounded-2xl flex flex-col justify-between aspect-square relative overflow-hidden group cursor-pointer`}>
                        <svg className="w-5 h-5 text-dark/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                        <svg className="absolute top-3 right-3 w-3 h-3 text-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                        <span className="text-[10px] text-dark font-black leading-tight uppercase pr-4">{item.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent Bookings */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-4 px-2">
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest">Mis reservas</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                      </div>
                    </div>
                    
                    {/* Filter Tabs */}
                    <div className="flex space-x-2 mb-6 px-1">
                      <div className="bg-white/10 px-3 py-1.5 rounded-lg text-[8px] text-white/60 font-bold uppercase tracking-tighter">Para hoy</div>
                      <div className="bg-white/20 px-3 py-1.5 rounded-lg text-[8px] text-white font-bold uppercase tracking-tighter">Más recientes</div>
                    </div>

                    {/* List */}
                    <div className="space-y-4 px-1">
                      {[
                        { date: "07 nov", time: "10:00", name: "Extreme Adventuring", price: "359.01" },
                        { date: "26 oct", time: "10:00", name: "Extreme Horseback Riding", price: "219.81" },
                        { date: "26 oct", time: "10:00", name: "Cenote Adventuring", price: "43.90" }
                      ].map((res, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="text-center min-w-[32px]">
                              <div className="text-[8px] text-white font-bold uppercase">{res.date}</div>
                              <div className="text-[7px] text-white/40">{res.time}</div>
                            </div>
                            <div>
                              <div className="text-[9px] text-white font-bold leading-none mb-0.5">{res.name}</div>
                              <div className="text-[7px] text-white/30 uppercase tracking-tighter">ATV, Zipline, Cenote...</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[9px] text-white font-bold">${res.price}</div>
                            <div className="text-[7px] text-primary/80 font-bold">$0.00</div>
                          </div>
                        </div>
                      ))}
                    </div>
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
