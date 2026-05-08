import React from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";

export default function Home() {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <div className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <main>
          <Hero />
          <Marquee />
          <Projects />
          <Services />
          <About />
          <ClientLogos />
          <Contact />
        </main>
      </div>
    </div>
  );
}
