import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Angebote from "@/components/Angebote";
import UeberMichKurz from "@/components/UeberMichKurz";
import Testimonials from "@/components/Testimonials";
import UeberMichLang from "@/components/UeberMichLang";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Angebote />
        <UeberMichKurz />
        <Testimonials />
        <UeberMichLang />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
