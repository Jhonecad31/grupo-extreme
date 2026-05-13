"use client";
import Image from "next/image";
import { upcomingBrands } from "@/data/projects";

export default function UpcomingBrands({ dict }: { dict: any }) {

  if (!upcomingBrands || upcomingBrands.length === 0) return null;

  return (
    <div className="py-24 border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            {dict.brands_title}
          </span>
          <h2 className="text-4xl md:text-6xl text-dark font-display font-black mb-10 uppercase leading-tight">
            {dict.title}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {upcomingBrands.map((brand, i) => (
            brand.logo && (
              <div 
                key={i} 
                className="group relative bg-[#fcfcfc] border border-gray-100 rounded-[2.5rem] p-16 md:p-24 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] hover:border-gray-200"
              >
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                   <span className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-bold group-hover:text-primary transition-colors">
                     {dict.badge}
                   </span>
                </div>
                
                <div className="relative aspect-[3/2] flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    width={320}
                    height={200}
                    className="w-full h-auto max-h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
