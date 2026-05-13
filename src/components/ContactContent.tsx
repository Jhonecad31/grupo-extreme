import { getDictionary } from "@/lib/get-dictionary";
import InteractiveMap from "@/components/sections/Maps";

export default async function ContactContent({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");

  const icons = {
    location: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    contact: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    hours: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div className="pt-40 bg-[#f8f8f8] flex flex-col">
      <div className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">

          <div className="lg:col-span-5">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              {dict.contact.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl text-dark font-display font-black leading-none mb-10 uppercase">
              {dict.contact.title}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-16 max-w-lg">
              {dict.contact.description}
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4 md:space-x-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <div className="scale-90 md:scale-100">
                    {icons.location}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-dark mb-1 md:mb-2">{dict.contact.info.office_title}</h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{dict.contact.info.office_address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <div className="scale-90 md:scale-100">
                    {icons.contact}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-dark mb-1 md:mb-2">{dict.contact.info.contact_title}</h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed whitespace-pre-line">{dict.contact.info.contact_details}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <div className="scale-90 md:scale-100">
                    {icons.hours}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-dark mb-1 md:mb-2">{dict.contact.info.hours_title}</h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed whitespace-pre-line">{dict.contact.info.hours_details}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

              <form className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block ml-1">{dict.contact.form.name}</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50/50 border border-gray-100 text-dark px-6 py-4 focus:outline-none focus:border-primary/50 focus:bg-white transition-all rounded-2xl placeholder:text-gray-300"
                      placeholder={dict.contact.form.placeholder_name}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block ml-1">{dict.contact.form.phone}</label>
                    <input
                      type="tel"
                      className="w-full bg-gray-50/50 border border-gray-100 text-dark px-6 py-4 focus:outline-none focus:border-primary/50 focus:bg-white transition-all rounded-2xl placeholder:text-gray-300"
                      placeholder={dict.contact.form.placeholder_phone}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block ml-1">{dict.contact.form.email}</label>
                  <input
                    type="email"
                    className="w-full bg-gray-50/50 border border-gray-100 text-dark px-6 py-4 focus:outline-none focus:border-primary/50 focus:bg-white transition-all rounded-2xl placeholder:text-gray-300"
                    placeholder={dict.contact.form.placeholder_email}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block ml-1">{dict.contact.form.interest}</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50/50 border border-gray-100 text-dark px-6 py-4 focus:outline-none focus:border-primary/50 focus:bg-white transition-all rounded-2xl appearance-none cursor-pointer">
                      {dict.contact.form.options.map((option: string) => (
                        <option key={option} className="text-dark">{option}</option>
                      ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block ml-1">{dict.contact.form.message}</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-50/50 border border-gray-100 text-dark px-6 py-4 focus:outline-none focus:border-primary/50 focus:bg-white transition-all rounded-2xl resize-none placeholder:text-gray-300"
                    placeholder={dict.contact.form.placeholder_message}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-dark text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] py-4 md:py-6 mt-2 md:mt-4 hover:bg-primary hover:text-white transition-all duration-500 rounded-2xl shadow-xl shadow-dark/10 hover:shadow-primary/20 hover:-translate-y-1"
                >
                  {dict.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <InteractiveMap />
    </div>
  );
}
