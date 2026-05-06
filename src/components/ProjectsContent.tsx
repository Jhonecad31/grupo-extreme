import Link from "next/link";
import { projectsData } from "@/data/projects";
import Image from "next/image";
import UpcomingBrands from "@/components/UpcomingBrands";

import { getDictionary } from "@/lib/get-dictionary";

export default async function ProyectosPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await props.params;
    const dict = await getDictionary(lang as "en" | "es");

    return (
        <main className="min-h-screen bg-white">
            <div className="pt-40 pb-24">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in">
                            {dict.projects.subtitle}
                        </span>
                        <h1 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight animate-slide-up mb-6">
                            {dict.projects.title}
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {dict.projects.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dict.projects_data.map((project: any) => (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={project.id}
                                className="w-full h-full block group/link"
                            >
                                <div className="flex flex-col group relative h-full animate-fade-in select-none transition-transform duration-300 hover:-translate-y-2">
                                    <div
                                        className="absolute inset-0 bg-black duration-500"
                                        style={{ clipPath: "polygon(0 0, 55% 0, 100% 25%, 100% 100%, 0 100%)" }}
                                    />
                                    <div className="relative z-10 p-5 md:p-6 pb-8 flex flex-col h-full">
                                        <div className="relative aspect-square w-full mb-6 shadow-xl bg-black">
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                draggable={false}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover h-full animate-fade-in select-none cursor-pointer transition-all duration-700 group-hover:scale-105"
                                            />

                                            {project.logo && (
                                                <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-10">
                                                    <Image
                                                        src={project.logo}
                                                        alt={`${project.name} logo`}
                                                        draggable={false}
                                                        width={300}
                                                        height={200}
                                                        className="w-3/4 h-auto max-h-[60%] object-contain drop-shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
                                                    />
                                                </div>
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
                                                    {lang === "es" ? "Ver Detalles →" : "View Details →"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="mt-32">
                        <UpcomingBrands lang={lang} />
                    </div>
                </div>
            </div>
        </main>
    );
}
