import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import Atmosphere from "@/components/sections/Atmosphere";
import OurMenu from "@/components/sections/OurMenu";
import SanhaoStandard from "@/components/sections/SanhaoStandard";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OurStory />
      <Atmosphere />
      <OurMenu />
      <SanhaoStandard />
      <Contact />
      <Footer />
    </main>
  );
}
