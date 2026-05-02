import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PromoModal from "@/components/PromoModal";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-[18rem] h-[32rem] bg-[radial-gradient(circle,_rgba(255,182,193,0.18),_transparent_65%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[15rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#0c6e70]/10 blur-3xl" />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <PromoModal />
    </>
  );
}
