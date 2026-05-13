"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExtremePartners({ dict }: { dict: any }) {
  return (
    <section className="pt-8 pb-24 md:pt-12 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12">
                <div className="relative w-64 h-20 mb-6">
                  <Image
                    src="/icon/logos/logo-extreme-partners.svg"
                    alt="Extreme Partners Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-[#d35400] font-bold tracking-[0.2em] uppercase text-xs mb-8 block">
                  {dict.subtitle}
                </span>

                <h2 className="text-4xl md:text-5xl text-dark font-display font-black leading-tight mb-8 uppercase">
                  {dict.title}
                </h2>
                
                <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-xl">
                  {dict.description}
                </p>

                <div className="mb-12">
                  <h3 className="text-sm font-black text-dark mb-8 uppercase tracking-widest">
                    {dict.benefits_title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {dict.items.map((item: string, i: number) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#d35400] rounded-full" />
                        <span className="text-[#333] text-sm font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-3 cursor-pointer hover:bg-black/90 transition-all border border-white/10">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.24-1.99 1.11-3.14-1.01.04-2.24.67-2.96 1.49-.65.73-1.21 1.91-1.05 3.03 1.12.08 2.26-.64 2.9-1.38z"/>
                    </svg>
                    <div>
                      <div className="text-[9px] uppercase leading-none opacity-60">Download on the</div>
                      <div className="text-sm font-bold leading-tight">App Store</div>
                    </div>
                  </div>
                  <div className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-3 cursor-pointer hover:bg-black/90 transition-all border border-white/10">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12l-10.183 10.186c-.156-.143-.243-.342-.243-.551V2.365c0-.209.087-.408.243-.551zM14.5 12.707l2.84 2.84L5.343 21.944l9.157-9.237zm4.357-1.12l3.143 1.779c.4.227.4.597 0 .823l-3.143 1.779-3.237-3.237 3.237-3.237-3.143 1.779.001-.001-.001.001zM14.5 11.293L5.343 2.056l11.997 6.397-2.84 2.84z"/>
                    </svg>
                    <div>
                      <div className="text-[9px] uppercase leading-none opacity-60">GET IT ON</div>
                      <div className="text-sm font-bold leading-tight">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="w-full lg:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#d35400]/10 to-transparent rounded-full blur-3xl -z-10" />
              
              {/* Phone Container - Cropped at bottom */}
              <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px] h-[500px] md:h-[600px] bg-dark rounded-t-[3rem] border-t-[12px] border-x-[12px] border-dark shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
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
                  <div className="flex-grow overflow-hidden">
                    <div className="flex justify-between items-center mb-4 px-2">
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest">Mis reservas</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                      </div>
                    </div>
                    
                    {/* List */}
                    <div className="space-y-4 px-1">
                      {[
                        { date: "07 nov", time: "10:00", name: "Extreme Adventuring", price: "359.01" },
                        { date: "26 oct", time: "10:00", name: "Extreme Horseback Riding", price: "219.81" }
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
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark rounded-b-2xl z-20" />
                
                {/* Bottom Fade Mask */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent z-10" />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
