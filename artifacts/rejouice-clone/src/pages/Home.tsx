import React from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import HomeHub from "@/components/HomeHub";
import Glance from "@/components/Glance";
import OurApproach from "@/components/OurApproach";
import Contact from "@/components/Contact";

export default function Home() {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <div className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <main>
          <Hero />
          <Showreel />
          <About />
          <ClientLogos />
          <Projects />
          <Services />
          <HomeHub />
          <Glance />
          <OurApproach />
          <Contact />
        </main>
      </div>
    </div>
  );
}
