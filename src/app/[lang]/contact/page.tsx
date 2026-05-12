import { getDictionary } from "@/lib/get-dictionary";

export default async function ContactoPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as "en" | "es");

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Información de Contacto */}
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                {dict.contact.subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl text-dark font-display font-black leading-tight mb-8">
                {dict.contact.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-lg">
                {dict.contact.description}
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-dark mb-2">{dict.contact.info.office_title}</h4>
                  <p className="text-gray-500 whitespace-pre-line">{dict.contact.info.office_address}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-dark mb-2">{dict.contact.info.contact_title}</h4>
                  <p className="text-gray-500 whitespace-pre-line">{dict.contact.info.contact_details}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-dark mb-2">{dict.contact.info.hours_title}</h4>
                  <p className="text-gray-500 whitespace-pre-line">{dict.contact.info.hours_details}</p>
                </div>
              </div>
            </div>

            {/* Formulario Premium */}
            <div className="bg-dark p-10 md:p-14 relative overflow-hidden rounded-sm shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none" />

              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">{dict.contact.form.name}</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none" placeholder={dict.contact.form.placeholder_name} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">{dict.contact.form.phone}</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none" placeholder={dict.contact.form.placeholder_phone} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">{dict.contact.form.email}</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none" placeholder={dict.contact.form.placeholder_email} />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">{dict.contact.form.interest}</label>
                  <select className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none appearance-none">
                    {dict.contact.form.options.map((option: string) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold block">{dict.contact.form.message}</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none resize-none" placeholder={dict.contact.form.placeholder_message}></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 mt-4 hover:bg-primary/90 transition-colors">
                  {dict.contact.form.submit}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
