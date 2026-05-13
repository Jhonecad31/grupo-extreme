import Header from "@/components/shared/Header";
import Footer from "@/components/global/Footer";
import ProjectCard from "@/components/ProjectCard";

import { getDictionary } from "@/lib/get-dictionary";

export default async function ProyectosPage() {
  const dict = await getDictionary("es");
  const projects = [
    {
      title: "Circuito Selva Maya",
      location: "Ruta de Cenotes",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80",
    },
    {
      title: "Torres de Tirolina Extrema",
      location: "Dos Niveles",
      image: "https://images.unsplash.com/photo-1533240332313-0cb497471483?auto=format&fit=crop&q=80",
    },
    {
      title: "Cenote Sagrado X-Cajum",
      location: "Aguas Subterráneas",
      image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80",
    },
    {
      title: "Rally de ATVs 4x4",
      location: "Selva Profunda",
      image: "https://images.unsplash.com/photo-1596328608882-7227d8259508?auto=format&fit=crop&q=80",
    },
    {
      title: "Buceo en Arrecife",
      location: "Costa del Caribe",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
    },
    {
      title: "Expedición Nocturna",
      location: "Reserva Natural",
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in">
              Nuestro Portafolio
            </span>
            <h1 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight animate-slide-up mb-6">
              EXPERIENCIAS <span className="text-primary italic">INOLVIDABLES</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Descubre nuestra colección curada de aventuras. Cada experiencia está diseñada con los más altos estándares de seguridad y exclusividad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
      <Footer dict={dict} lang="es" />
    </main>
  );
}
