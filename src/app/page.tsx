import { Preloader } from "@/components/ui/Preloader";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
