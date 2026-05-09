import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in">
              Nuestros proyectos
            </span>
            <h1 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight animate-slide-up mb-6">
              EXPERIENCIAS <span className="text-primary italic">INOLVIDABLES</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Descubre nuestra colección curada de aventuras. Cada experiencia está diseñada con los más altos estándares de seguridad y exclusividad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className="w-full h-full block group/link"
              >
                <div className="flex flex-col group relative h-full animate-fade-in select-none cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  {/* Fondo oscuro con el corte diagonal en la esquina superior derecha */}
                  <div 
                    className="absolute inset-0 bg-[#1a1a1a] transition-colors duration-500 group-hover:bg-primary"
                    style={{ clipPath: "polygon(0 0, 55% 0, 100% 25%, 100% 100%, 0 100%)" }}
                  />
                  
                  {/* Contenido (Imagen y Textos) superpuesto al fondo */}
                  <div className="relative z-10 p-5 md:p-6 pb-8 flex flex-col h-full">
                    {/* Contenedor de la imagen sin overflow-hidden en el padre para que la esquina sobresalga del fondo */}
                    <div className="relative aspect-square w-full mb-6 shadow-xl bg-black">
                      {/* Imagen de fondo */}
                      <img
                        src={project.image}
                        alt={project.name}
                        draggable={false}
                        className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                      />
                      
                      {/* Logo superpuesto */}
                      {project.logo && (
                        <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-10">
                          <img 
                            src={project.logo} 
                            alt={`${project.name} logo`} 
                            draggable={false}
                            className="w-3/4 h-auto max-h-[60%] object-contain drop-shadow-2xl grayscale brightness-90 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                          />
                        </div>
                      )}

                      {/* Texto de Status (Ej: PRÓXIMAMENTE) */}
                      {project.status && (
                        <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-10">
                          <span className="text-white text-2xl md:text-3xl font-bold tracking-tight uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center">
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="text-center mt-auto space-y-2">
                      <h3 className="text-white text-2xl font-bold tracking-tight group-hover:text-white transition-colors duration-300">
                        {project.name}
                      </h3>
                      <span className="text-primary font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver Detalles →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
