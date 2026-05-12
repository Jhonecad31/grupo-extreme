import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import HeroCarousel from "@/components/sections/HeroCarousel";
import StatsGrid from "@/components/StatsGrid";
import Adventures from "@/components/sections/Adventures";
import Mentions from "@/components/sections/Mentions";
import UpcomingBrands from "@/components/UpcomingBrands";
import Link from "next/link";

import { getDictionary } from "@/lib/get-dictionary";

export default async function Home(props: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await props.params;
    const dict = await getDictionary(lang as "en" | "es");

    return (
        <main className="min-h-screen bg-white">
            <Header />
            {/* Hero Section */}
            <HeroCarousel lang={lang} />

            {/* About Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
                                {dict.home.history.subtitle}
                            </span>
                            <h2 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight mb-8">
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
                                    {dict.home.features.items.map((item, i) => (
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

            {/* Stats Section */}
            <StatsGrid lang={lang} />

            {/* Adventures Section */}
            <section className="py-32 container mx-auto px-6">
                <Adventures lang={lang} />
            </section>

            {/* Upcoming Brands Section */}
            <section className="container mx-auto px-6 pb-32">
                <UpcomingBrands lang={lang} />
            </section>

            {/* Mentions / Testimonials Section */}
            <Mentions lang={lang} />

            {/* CTA Section */}
            <section className="bg-dark py-32 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-7xl text-white font-display font-black mb-12 max-w-4xl mx-auto leading-none">
                        {dict.home.cta.title}
                    </h2>
                    <p className="text-white/60 text-xl mb-16 max-w-2xl mx-auto">
                        {dict.home.cta.description}
                    </p>
                    <Link href={`/${lang}/contact`} className="inline-block bg-white text-dark hover:bg-primary hover:text-white px-12 py-5 rounded-sm font-black uppercase tracking-[0.2em] transition-all duration-500 scale-100 hover:scale-105">
                        {dict.home.cta.button}
                    </Link>
                </div>
            </section>
            <Footer lang={lang} />
        </main>
    );
}
