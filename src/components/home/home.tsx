import HeroCarousel from "@/components/sections/HeroCarousel";
import StatsGrid from "@/components/StatsGrid";
import Adventures from "@/components/sections/Adventures";
import Mentions from "@/components/sections/Mentions";
import UpcomingBrands from "@/components/UpcomingBrands";

import { getDictionary } from "@/lib/get-dictionary";

export default async function Home(props: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await props.params;
    const dict = await getDictionary(lang as "en" | "es");

    return (
        <main className="min-h-screen bg-white">
            <HeroCarousel dict={dict.home.hero} />

            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
                                {dict.home.history.subtitle}
                            </span>
                            <h2 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight mb-8 uppercase">
                                {dict.home.history.title}
                            </h2>
                            <div className="space-y-6 text-dark/70 text-lg leading-relaxed">
                                <p>{dict.home.history.p1}</p>
                                <p>{dict.home.history.p2}</p>
                            </div>
                        </div>
                        <div className="bg-dark p-12 text-white relative overflow-hidden clip-notched">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">{dict.home.features.title}</h3>
                                <ul className="space-y-4 text-white/80">
                                    {dict.home.features.items.map((item: any, i: number) => (
                                        <li key={i} className="flex items-center space-x-3">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            <StatsGrid stats={dict.home.stats} />

            <section className="py-32 container mx-auto px-6">
                <Adventures dict={dict.home.projects_section} />
            </section>

            <section className="container mx-auto px-6 pb-32">
                <UpcomingBrands dict={dict.projects.upcoming_brands} />
            </section>
            
            <Mentions dict={dict.home.mentions} />
        </main>
    );
}
