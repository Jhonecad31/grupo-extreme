import Image from "next/image";
import Link from "next/link"; 

export default function AboutSection() { 
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header de la sección */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6 font-semibold">
            Nuestra Esencia
          </h2>
          <p className="text-4xl md:text-6xl font-display font-light leading-tight text-dark italic">
            Elevando la aventura a una <span className="font-bold not-italic">experiencia de lujo</span> en el Caribe Mexicano.
          </p>
        </div>

        {/* Layout Asimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80" 
                alt="Aventura en Cancún"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority 
              />
            </div>
            
            <div className="absolute -bottom-10 -right-6 md:right-12 bg-dark p-8 md:p-12 text-white max-w-xs shadow-xl hidden sm:block">
              <p className="text-2xl font-display italic mb-2">15+</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">Años creando memorias inolvidables</p>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col space-y-8 md:pl-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-dark uppercase tracking-tighter">
                Más que un tour, un legado de exploración.
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                En <strong>Grupo Extreme</strong>, entendemos que el verdadero lujo reside en la autenticidad. Nos especializamos en curar experiencias que conectan la adrenalina de la selva con la serenidad de los cenotes sagrados.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestra misión es transformar el turismo convencional en una narrativa personal para cada viajero, manteniendo los más altos estándares de seguridad y exclusividad.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="/contacto" 
                className="inline-block border-b-2 border-dark pb-1 text-sm font-bold uppercase tracking-widest hover:text-primary hover:border-primary transition-all duration-300"
              >
                Descubre nuestra historia
              </Link>
            </div>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gray-100 pt-20">
          {[
            { title: "Seguridad", desc: "Protocolos internacionales en cada una de nuestras expediciones." },
            { title: "Exclusividad", desc: "Grupos reducidos para una conexión real con la naturaleza." },
            { title: "Sustentabilidad", desc: "Respeto profundo por el ecosistema local y la cultura Maya." }
          ].map((item, index) => (
            <div key={index} className="group space-y-4">
              <span className="text-primary font-display text-xl inline-block transition-transform group-hover:-translate-y-1">0{index + 1}</span>
              <h4 className="text-xl font-bold uppercase tracking-tighter">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
