import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import StatsGrid from "@/components/StatsGrid";
import ProjectCard from "@/components/ProjectCard";
import Adventures from "@/components/Adventures"

export default function Home() {
  const featuredAdventures = [
    {
      title: "Extreme Adventuring",
      location: "Ruta de los cenotes",
      image: "/images/hero_bg.jpg",
    },
    {
      title: "Snorkel Adventure",
      location: "Perto Morelos",
      image: "/images/project_1.jpg",
    },
    {
      title: "Beach Taco Tour",
      location: "Perto Morelos",
      image: "/images/project_2.jpg",
    },
    {
      title: "Cenote Adventuring",
      location: "Ruta de los cenotes",
      image: "/images/project_2.jpg"
    },
    {
      title: "Horse ride",
      location: "Ruta de los cenotes",
      image: "/images/project_3.jpg"

    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
                Nuestra Historia
              </span>
              <h2 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight mb-8">
                MÁS QUE AVENTURA, UN <span className="text-primary">LEGADO EN LA SELVA.</span>
              </h2>
              <div className="space-y-6 text-dark/70 text-lg leading-relaxed">
                <p>
                  Extreme Adventuring Cancún se fundó con un único propósito: ofrecer a los visitantes una aventura segura, natural e inolvidable inspirada en la selva maya.
                </p>
                <p>
                  Durante casi dos décadas, hemos diseñado experiencias que combinan ecoturismo, entretenimiento, cultura y aventura familiar, siempre priorizando la seguridad, el respeto medioambiental y la preservación de la Selva Maya.
                </p>
              </div>
            </div>
            <div className="bg-dark p-12 text-white relative overflow-hidden clip-notched">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">Lo que nos define:</h3>
                <ul className="space-y-4 text-white/80">
                  {[
                    "Circuitos de ATV Profesionales",
                    "Múltiples torres de tirolina",
                    "Cenotes abiertos naturales",
                    "Esnórquel en áreas marinas protegidas",
                    "Senderos para montar a caballo",
                    "Experiencias culturales y gastronómicas",
                    "Cata de tequila artesanal"
                  ].map((item, i) => (
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
      <StatsGrid />

      {/* Adventures Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in">
              Nuestros proyectos
            </span>
            <h2 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight animate-slide-up">
              LA EMOCIÓN QUE <span className="text-primary">BUSCAS.</span>
            </h2>
          </div>
          <button className="group flex items-center text-dark font-bold uppercase tracking-widest text-sm border-b-2 border-dark pb-2 hover:border-primary hover:text-primary transition-all duration-300">
            Ver Todas
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
       <Adventures/>
      </section>

      {/* CTA Section */}
      <section className="bg-dark py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl text-white font-display font-black mb-12 max-w-4xl mx-auto leading-none">
            ¿LISTO PARA TU <span className="border-b-4 border-white">PRÓXIMA AVENTURA?</span>
          </h2>
          <p className="text-white/60 text-xl mb-16 max-w-2xl mx-auto">
            Reserva hoy tu lugar en el ecoparque más emocionante de Cancún.
          </p>
          <button className="bg-white text-dark hover:bg-primary hover:text-white px-12 py-5 rounded-sm font-black uppercase tracking-[0.2em] transition-all duration-500 scale-100 hover:scale-105">
            Reservar Ahora
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
