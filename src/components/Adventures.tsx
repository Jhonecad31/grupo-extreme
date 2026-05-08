"use client";

const tours = [
  {
    id: 1,
    name: "Extreme Adventuring",
    image: "/images/img-proyects/extreme-fondo.jpg",
    status: null,
    logo: "/icon/logos/extreme-eco.svg",
  },
  {
    id: 2,
    name: "Snorkeling Adventuring",
    image: "/images/img-proyects/snorkel-nado.jpg",
    status: null,
    logo: "/icon/logos/logo-snorkel.png",
  },
  {
    id: 3,
    name: "Cenote Adventuring",
    image: "/images/img-proyects/cenote-fondo.jpg",
    status: null,
    logo: "/icon/logos/cenote-adventuring.png",
  },
];

export default function Adventures() {
  return (
    <div className="w-full">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <p className="text-[#555] text-lg md:text-xl font-light leading-relaxed">
          Cada uno de nuestros desarrollos en Puerto Morelos, Ciudad de Mexico y Estado de Mexico ha sido
          diseñado para ofrecer una experiencia única, combinando confort, estilo y funcionalidad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex flex-col group relative h-full animate-fade-in"
          >
            {/* Fondo oscuro con el corte diagonal en la esquina superior derecha */}
            <div 
              className="absolute inset-0 bg-[#1a1a1a] transition-colors duration-500 group-hover:bg-[#222]"
              style={{ clipPath: "polygon(0 0, 55% 0, 100% 25%, 100% 100%, 0 100%)" }}
            />
            
            {/* Contenido (Imagen y Textos) superpuesto al fondo */}
            <div className="relative z-10 p-5 md:p-6 pb-8 flex flex-col h-full">
              {/* Contenedor de la imagen sin overflow-hidden en el padre para que la esquina sobresalga del fondo */}
              <div className="relative aspect-square w-full mb-6 shadow-xl bg-black">
                {/* Imagen de fondo */}
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                />
                
                {/* Logo superpuesto */}
                {tour.logo && (
                  <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-10">
                    <img 
                      src={tour.logo} 
                      alt={`${tour.name} logo`} 
                      className="w-3/4 h-auto max-h-[60%] object-contain drop-shadow-2xl grayscale brightness-90 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                  </div>
                )}

                {/* Texto de Status (Ej: PRÓXIMAMENTE) */}
                {tour.status && (
                  <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-10">
                    <span className="text-white text-2xl md:text-3xl font-bold tracking-tight uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center">
                      {tour.status}
                    </span>
                  </div>
                )}
              </div>

              <div className="text-center mt-auto space-y-2">
                <h3 className="text-white text-2xl font-bold tracking-tight">
                  {tour.name}
                </h3>
                <p className="text-white text-base font-bold">
                  {tour.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-12">
        <button className="w-2.5 h-2.5 rounded-full bg-black" aria-label="Slide 1" />
        <button className="w-2.5 h-2.5 rounded-full bg-gray-300" aria-label="Slide 2" />
        <button className="w-2.5 h-2.5 rounded-full bg-gray-300" aria-label="Slide 3" />
        <button className="w-2.5 h-2.5 rounded-full bg-gray-300" aria-label="Slide 4" />
      </div>
    </div>
  );
}