"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExtremePartners({ dict }: { dict: any }) {
  return (
    <section className="pt-12 pb-12 md:pt-20 md:pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-16">
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1">
                  <div className="relative w-[200px] h-24 md:w-[230px] md:h-32">
                    <Image
                      src="/icon/logos/logo-extreme-partners.svg"
                      alt="Extreme Partners Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="hidden md:block w-px h-10 bg-gray-200 mx-4" />
                  <span className="text-[#d35400] font-black tracking-[0.25em] uppercase text-[10px] md:text-[11px] md:pt-1">
                    {dict.subtitle}
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight mb-6 uppercase tracking-tight">
                  {dict.title}
                </h2>

                <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
                  {dict.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-base font-black text-dark mb-8 uppercase tracking-widest">
                    {dict.benefits_title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                    {dict.items.map((item: string, i: number) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-2 h-2 bg-[#d35400] rounded-full" />
                        <span className="text-gray-600 text-[15px] font-medium leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={dict.app_store_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-3 transition-all hover:bg-black/90 border border-white/10"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.24-1.99 1.11-3.14-1.01.04-2.24.67-2.96 1.49-.65.73-1.21 1.91-1.05 3.03 1.12.08 2.26-.64 2.9-1.38z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] uppercase leading-none opacity-60 font-bold">Download on the</div>
                      <div className="text-base font-bold leading-tight">App Store</div>
                    </div>
                  </a>
                  <a
                    href={dict.google_play_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-3 transition-all hover:bg-black/90 border border-white/10"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12l-10.183 10.186c-.156-.143-.243-.342-.243-.551V2.365c0-.209.087-.408.243-.551zM14.5 12.707l2.84 2.84L5.343 21.944l9.157-9.237zm4.357-1.12l3.143 1.779c.4.227.4.597 0 .823l-3.143 1.779-3.237-3.237 3.237-3.237-3.143 1.779.001-.001-.001.001zM14.5 11.293L5.343 2.056l11.997 6.397-2.84 2.84z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] uppercase leading-none opacity-60 font-bold">GET IT ON</div>
                      <div className="text-base font-bold leading-tight">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-2/5 relative min-h-[400px] md:min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[480px] md:h-[630px] overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr rounded-full" />
              <div className="relative mx-auto w-full max-w-[300px] md:max-w-[340px] h-[800px] bg-black rounded-t-[3.5rem] border-t-[10px] border-x-[10px] border-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden translate-y-14">
                <div className="h-full w-full bg-black flex flex-col p-5">
                  <div className="flex justify-between items-center mb-6 text-[11px] text-white/30 font-bold px-3">
                    <span>10:29</span>
                    <div className="flex space-x-2 items-center">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z" /></svg>
                      <div className="w-6 h-3 rounded-[3px] border border-white/20 relative">
                        <div className="absolute left-0.5 top-0.5 bottom-0.5 bg-white/40 w-[70%]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-10 px-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-600 border border-white/10 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />
                      </div>
                      <span className="text-[11px] text-white font-black uppercase tracking-wider">
                        EXTREME PARTNERS
                      </span>
                    </div>
                    <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>

                  {/* Earnings Card */}
                  <div className="bg-[#0c0c0c] p-6 rounded-[2.5rem] border border-white/5 mb-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] text-white/30 uppercase font-black block mb-3 tracking-widest">
                          Ganancias (USD)
                        </span>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-white text-base font-bold">$</span>
                          <span className="text-white text-4xl font-black">0</span>
                          <span className="text-white/30 text-sm font-bold">.00</span>
                        </div>
                        <span className="text-[9px] text-white/20 uppercase font-black mt-3 block tracking-widest">
                          Hoy
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-white/30 uppercase font-black block mb-3 tracking-widest">
                          Noviembre 2025
                        </span>
                        <div className="flex items-baseline justify-end space-x-1">
                          <span className="text-white text-base font-bold">$</span>
                          <span className="text-white text-4xl font-black">0</span>
                          <span className="text-white/30 text-sm font-bold">.00</span>
                        </div>
                        <div className="w-5 h-5 bg-white/5 rounded-full flex items-center justify-center ml-auto mt-3">
                          <svg className="w-2.5 h-2.5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="4" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      {
                        title: "Promocionar en Instagram",
                        color: "bg-[#3498db]",
                        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
                      },
                      {
                        title: "Reservar",
                        color: "bg-[#3498db]",
                        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>,
                      },
                      {
                        title: "QR",
                        color: "bg-[#3498db]",
                        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
                      },
                      {
                        title: "Enlace de pago",
                        color: "bg-[#3498db]",
                        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`${item.color} p-5 rounded-[2rem] flex flex-col justify-between aspect-square relative overflow-hidden cursor-pointer active:scale-95 transition-all duration-300 hover:brightness-105`}
                      >
                        {item.icon}
                        <svg className="absolute top-5 right-5 w-3.5 h-3.5 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                        <span className="text-[11px] text-black font-black leading-tight uppercase pr-4">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mis Reservas Section */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-6 px-1">
                      <span className="text-[12px] text-white font-black uppercase tracking-widest">
                        Mis reservas
                      </span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-white/40 rounded-full" />
                        <div className="w-2 h-2 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    <div className="flex space-x-3 mb-8">
                      <div className="bg-white/10 px-5 py-2.5 rounded-full text-[9px] font-black text-white/60 uppercase">Para hoy</div>
                      <div className="bg-white px-5 py-2.5 rounded-full text-[9px] font-black text-black uppercase">Más recientes</div>
                    </div>
                    <div className="space-y-8 px-1 opacity-40">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex justify-between items-center">
                          <div className="flex items-center space-x-5">
                            <div className="w-10 h-10 rounded-2xl bg-white/5" />
                            <div className="space-y-2">
                              <div className="w-32 h-2.5 bg-white/10 rounded-full" />
                              <div className="w-20 h-2 bg-white/5 rounded-full" />
                            </div>
                          </div>
                          <div className="w-12 h-2.5 bg-white/10 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-[1.5rem] z-20" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-30" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
