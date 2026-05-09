import { notFound } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { projectsData } from "@/data/projects";
import Link from "next/link";

export default async function InfoProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const resolvedParams = await searchParams;
  const projectId = resolvedParams.id || "1"; // Default a ID 1 si no se pasa por URL
  const project = projectsData.find((p) => p.id.toString() === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] bg-black flex items-center justify-center">
        <img 
          src={project.image} 
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        
        {/* Botón de volver */}
        <div className="absolute top-32 left-6 md:left-12 z-20">
          <Link href="/projects" className="text-white/80 hover:text-white transition-all flex items-center uppercase tracking-[0.2em] text-xs font-bold group">
            <span className="bg-white/10 group-hover:bg-primary p-2 rounded-full mr-3 transition-colors backdrop-blur-sm border border-white/20 group-hover:border-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            Proyectos
          </Link>
        </div>

        {/* Contenido Centrado */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pt-16">
          {project.logo && (
            <img 
              src={project.logo} 
              alt={`${project.name} logo`} 
              className="w-32 md:w-40 h-auto object-contain mb-8 animate-fade-in drop-shadow-2xl"
            />
          )}
          
          <h1 className="text-3xl md:text-5xl text-white font-display font-black leading-tight animate-slide-up tracking-widest drop-shadow-lg">
            {project.name.toUpperCase()}
          </h1>
          
          <div className="flex items-center justify-center gap-3 mt-6 text-white/90 animate-fade-in delay-200">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase">{project.location}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
                Acerca de la Experiencia
              </span>
              <h2 className="text-3xl md:text-5xl text-dark font-display font-black leading-tight mb-8">
                AVENTURA SIN <span className="text-primary">LÍMITES.</span>
              </h2>
              <p className="text-dark/70 text-xl leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="bg-gray-50 p-12 relative overflow-hidden clip-notched">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-dark border-b-2 border-primary pb-4 inline-block">
                  ¿Qué Incluye?
                </h3>
                <ul className="space-y-6 text-dark/80 text-lg">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                Galería Visual
              </span>
              <h2 className="text-3xl md:text-5xl text-dark font-display font-black leading-tight">
                CONOCE MÁS DEL <span className="text-primary">PROYECTO</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, index) => (
                <div key={index} className="aspect-square relative overflow-hidden group rounded-sm shadow-md">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={img} 
                    alt={`${project.name} gallery ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-dark py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl text-white font-display font-black mb-8 max-w-4xl mx-auto leading-none">
            VIVE LA EXPERIENCIA <span className="text-primary">{project.name.toUpperCase()}</span>
          </h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
            Únete a cientos de aventureros que ya descubrieron la magia de Cancún y la Riviera Maya con nosotros.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}