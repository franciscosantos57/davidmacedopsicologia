import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FirstSession from "@/components/sections/FirstSession";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Sessions from "@/components/sections/Sessions";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(id);
  if (!element) return;

  const isMobile = window.matchMedia("(max-width: 1024px)").matches;
  const headerOffset = isMobile ? 72 : 0;
  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - headerOffset);
  window.scrollTo({ top, behavior });
}

function App() {
  useScrollReveal();

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      requestAnimationFrame(() => {
        scrollToSection(id, "auto");
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <About />
        <Services />
        <FirstSession />
        <Sessions />
        <Contact />
      </main>
    </div>
  );
}

export default App;
