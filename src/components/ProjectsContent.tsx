import Link from "next/link";
import Image from "next/image";
import UpcomingBrands from "@/components/UpcomingBrands";
import ProjectsGrid from "@/components/ProjectsGrid";

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
                        <h1 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight animate-slide-up mb-6 uppercase">
                            {dict.projects.title}
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {dict.projects.description}
                        </p>
                    </div>
                    {/* Grouped Projects */}
                    {Object.entries(dict.projects.groups).map(([groupKey, groupLabel]) => {
                        const filteredProjects = dict.projects_data.filter((p: any) => p.group === groupKey);
                        if (filteredProjects.length === 0) return null;

                        return (
                            <div key={groupKey} className="mb-24 last:mb-0">
                                <div className="flex items-center space-x-4 mb-12">
                                    <div className="h-px bg-gray-200 flex-grow" />
                                    <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-dark uppercase italic">
                                        {groupLabel as string}
                                    </h2>
                                    <div className="h-px bg-gray-200 flex-grow" />
                                </div>
                                <ProjectsGrid projects={filteredProjects} dict={dict} />
                            </div>
                        );
                    })}
                    <div className="mt-32">
                        <UpcomingBrands dict={dict.projects.upcoming_brands} content={dict.projects.upcoming_content} />
                    </div>
                </div>
            </div>
        </main>
    );
}
