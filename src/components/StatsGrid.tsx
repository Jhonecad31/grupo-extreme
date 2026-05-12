import { getDictionary } from "@/lib/get-dictionary";

export default async function StatsGrid({ lang = "es" }: { lang?: string }) {
  const dict = await getDictionary(lang as "en" | "es");
  const stats = dict.home.stats;

  return (
    <section className="py-24 bg-gray-soft">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl md:text-6xl font-display font-black text-dark/20 mb-2 group-hover:text-dark transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-dark/50">
                {stat.label}
              </div>
              <div className="w-8 h-1 bg-primary mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
