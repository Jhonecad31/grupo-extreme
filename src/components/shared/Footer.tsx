import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
                <span className="text-white font-display font-extrabold text-xl">X</span>
              </div>
              <span className="text-2xl font-display font-extrabold tracking-tighter">
                EXTREME<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-white/50 max-w-sm mb-8">
              Ecoparque líder en aventura y ecoturismo en la Selva Maya. 
              Comprometidos con la seguridad y la preservación de nuestro entorno natural.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "linkedin", "x"].map((social) => (
                <Link key={social} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/50" /> {/* Placeholder for icons */}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navegación</h4>
            <ul className="space-y-4">
              {["Inicio", "Aventuras", "Nosotros", "Blog", "Contacto"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Legal</h4>
            <ul className="space-y-4">
              {["Términos y Condiciones", "Política de Privacidad", "Cookies"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">
              Suscríbete para recibir ofertas exclusivas y noticias de aventura.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-white/5 border-none px-4 py-3 w-full text-white focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <button className="bg-primary hover:bg-primary-dark px-6 py-3 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs tracking-widest uppercase font-bold">
          <p>© 2026 EXTREME ADVENTURING CANCÚN. TODOS LOS DERECHOS RESERVADOS.</p>
          <p>DISEÑADO POR ANTIGRAVITY</p>
        </div>
      </div>
    </footer>
  );
}
