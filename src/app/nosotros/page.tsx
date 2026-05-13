import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AboutSection from "@/components/AboutSections";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 md:pt-32">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
