import Header from "@/components/shared/Header";
import Footer from "@/components/global/Footer";
import AboutSection from "@/components/AboutSections";

import { getDictionary } from "@/lib/get-dictionary";
 
export default async function NosotrosPage() {
  const dict = await getDictionary("es");
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 md:pt-32">
        <AboutSection />
      </div>
      <Footer dict={dict} lang="es" />
    </main>
  );
}
