import { About } from "./components/About";
import { Brands } from "./components/Brands";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { WhyUs } from "./components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Brands />
      <About />
      <Contact />
      <Reviews />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
