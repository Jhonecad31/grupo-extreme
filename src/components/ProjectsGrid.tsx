"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function ProjectsGrid({ projects, dict }: { projects: any[], dict: any }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: false, 
        align: "start",
        breakpoints: { '(min-width: 768px)': { active: false } }
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <div className="w-full">
            <div className="overflow-hidden md:overflow-visible cursor-grab active:cursor-grabbing md:cursor-auto" ref={emblaRef}>
                <div className="flex -mx-4 md:mx-0 md:flex-wrap md:justify-center md:gap-8">
                    {projects.map((project: any) => (
                        <div key={project.id} className="flex-none px-4 md:px-0 min-w-0 w-[85vw] md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group/link h-full"
                            >
                                <div className="flex flex-col group relative h-full animate-fade-in select-none transition-transform duration-300 hover:-translate-y-2">
                                    <div
                                        className="absolute inset-0 bg-black duration-500"
                                        style={{ clipPath: "polygon(0 0, 55% 0, 100% 25%, 100% 100%, 0 100%)" }}
                                    />
                                    <div className="relative z-10 p-5 md:p-6 pb-8 flex flex-col h-full">
                                        <div className="relative aspect-square w-full mb-6 shadow-xl bg-black overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                draggable={false}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover h-full animate-fade-in select-none transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                            />

                                            {project.logo && (
                                                <>
                                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,transparent_65%)] pointer-events-none z-[5] transition-opacity duration-700 group-hover:opacity-80" />
                                                    <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-10">
                                                        <Image
                                                            src={project.logo}
                                                            alt={`${project.name} logo`}
                                                            draggable={false}
                                                            width={300}
                                                            height={200}
                                                            className="w-3/4 h-auto max-h-[60%] object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(0,0,0,1)]"
                                                        />
                                                    </div>
                                                </>
                                            )}

                                            {project.status && (
                                                <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-10">
                                                    <span className="text-white text-2xl md:text-3xl font-bold tracking-tight uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center">
                                                        {project.status}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="text-center mt-auto space-y-3">
                                            <h3 className="text-white text-2xl font-bold tracking-tight">
                                                {project.name}
                                            </h3>
                                            {project.description && (
                                                <p className="text-white/70 text-sm font-light leading-relaxed line-clamp-3 px-2">
                                                    {project.description}
                                                </p>
                                            )}
                                            <div className="pt-2">
                                                <span className="text-white font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {dict.projects.view_details}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            
            {scrollSnaps.length > 1 && (
                <div className="flex justify-center items-center gap-3 mt-8 md:hidden">
                    {scrollSnaps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollTo(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${selectedIndex === idx ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
                            aria-label={`Slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
