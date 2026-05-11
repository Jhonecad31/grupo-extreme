import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { projectsData, upcomingBrands } from "@/data/projects";
import Image from "next/image";

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
                <div className="flex flex-col group relative h-full animate-fade-in select-none transition-transform duration-300 hover:-translate-y-2">
                  {/* Fondo oscuro con el corte diagonal en la esquina superior derecha */}
                  <div
                    className="absolute inset-0 bg-black duration-500"
                    style={{ clipPath: "polygon(0 0, 55% 0, 100% 25%, 100% 100%, 0 100%)" }}
                  />

                  {/* Contenido (Imagen y Textos) superpuesto al fondo */}
                  <div className="relative z-10 p-5 md:p-6 pb-8 flex flex-col h-full">
                    {/* Contenedor de la imagen sin overflow-hidden en el padre para que la esquina sobresalga del fondo */}
                    <div className="relative aspect-square w-full mb-6 shadow-xl bg-black">
                      {/* Imagen de fondo */}
                      <Image
                        src={project.image}
                        alt={project.name}
                        draggable={false}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover  h-full animate-fade-in select-none cursor-pointer grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                      />

                      {/* Logo superpuesto */}
                      {project.logo && (
                        <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-10">
                          <Image
                            src={project.logo}
                            alt={`${project.name} logo`}
                            draggable={false}
                            width={300}
                            height={200}
                            className="w-3/4 h-auto max-h-[60%] object-contain drop-shadow-2xl  transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
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
                          Ver Detalles →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Sección Próximamente */}
          <div className="mt-32 relative overflow-hidden rounded-sm bg-dark p-12 text-center group">
            <div className="absolute inset-0 opacity-10 bg-[url('/GrupoExtreme-web/moto-hero.webp')] bg-cover bg-center grayscale transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-dark/80" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center space-x-3 text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,165,0,0.8)]" />
                <span>En Desarrollo</span>
              </span>
              <h3 className="text-3xl md:text-5xl text-white font-display font-black leading-tight mb-6">
                NUEVAS EXPERIENCIAS <br /> <span className="text-primary italic border-b-2 border-primary">MUY PRONTO</span>
              </h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Nuestro equipo está explorando la selva maya para traerte aventuras aún más extremas e inmersivas. Prepárate para lo inesperado.
              </p>

              {/* Contenedor de Nuevos Logos */}
              <div className="mt-16 pt-12 border-t border-white/10">
                <p className="text-white/40 text-sm uppercase tracking-widest mb-8 font-bold">
                  Próximas Marcas
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                  {upcomingBrands.map((brand, i) => (
                    brand.logo && (
                      <div key={i} className="w-32 h-24 relative flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group/logo">
                        <Image
                          src={brand.logo}
                          alt={`Logo ${brand.name}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
