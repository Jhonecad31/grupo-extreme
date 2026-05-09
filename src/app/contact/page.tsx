import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Información de Contacto */}
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                Conecta con nosotros
              </span>
              <h1 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight mb-8">
                TU PRÓXIMA <br/><span className="text-primary italic">AVENTURA</span> COMIENZA AQUÍ
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-lg">
                ¿Listo para vivir la experiencia Extreme? Contáctanos para reservas personalizadas,eventos corporativos o cualquier duda que tengas.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-dark mb-2">Oficina Central</h4>
                  <p className="text-gray-500">Blvd. Kukulcan Km 10.5, Zona Hotelera<br/>77500 Cancún, Q.R., México</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-dark mb-2">Contacto Directo</h4>
                  <p className="text-gray-500">reservas@grupoextreme.com<br/>+52 (998) 123 4567</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-dark mb-2">Horario de Atención</h4>
                  <p className="text-gray-500">Lunes a Domingo<br/>8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Formulario Premium */}
            <div className="bg-dark p-10 md:p-14 relative overflow-hidden rounded-sm shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none" />
              
              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">Nombre Completo</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none" placeholder="Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">Teléfono</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none" placeholder="+52 998 000 0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">Correo Electrónico</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none" placeholder="tu@correo.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">Experiencia de Interés</label>
                  <select className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none appearance-none">
                    <option>Circuitos ATV</option>
                    <option>Tirolinas Extremas</option>
                    <option>Cenotes y Buceo</option>
                    <option>Paquete Corporativo</option>
                    <option>Otra Consulta</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">Mensaje Adicional</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none resize-none" placeholder="¿Cómo podemos ayudarte?"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 mt-4 hover:bg-primary/90 transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
