import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import nexusImg from "@/assets/images/nexus.png";
import auroraImg from "@/assets/images/aurora.png";
import vertexImg from "@/assets/images/vertex.png";
import lumisImg from "@/assets/images/lumis.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: "nexus", title: "NEXUS", category: "Brand Identity", year: "2024", image: nexusImg },
  { id: "aurora", title: "AURORA", category: "Digital Platform", year: "2024", image: auroraImg },
  { id: "vertex", title: "VERTEX", category: "Growth Strategy", year: "2023", image: vertexImg },
  { id: "lumis", title: "LUMIS", category: "Creative Direction", year: "2023", image: lumisImg },
];

export default function WorkPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const split = new SplitType(headlineRef.current, { types: "lines" });
        gsap.from(split.lines, {
          y: "100%",
          opacity: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.2,
        });
      }

      const cards = gsap.utils.toArray(".work-card");
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            ease: "power3.inOut",
            duration: 1.4,
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section
        ref={heroRef}
        className="w-full min-h-screen flex flex-col justify-end px-6 md:px-10 pt-32 pb-16"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-8 opacity-50">
            Our Work
          </p>
          <div className="overflow-hidden">
            <h1
              ref={headlineRef}
              className="font-sans text-[7vw] md:text-[5.5vw] leading-[1.1] font-light tracking-[-0.02em] max-w-5xl"
            >
              Working to shape the future of your industry? We create brands that bring that ambition to life.
            </h1>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border" />

      <section ref={gridRef} className="px-6 md:px-10 py-16">
        <div className="max-w-[1400px] mx-auto space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="work-card group relative w-full h-[55vh] md:h-[80vh] overflow-hidden bg-[#111] flex items-end cursor-pointer"
              data-testid={`work-card-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="relative z-10 w-full flex items-end justify-between p-8 md:p-12">
                <div>
                  <p className="font-sans text-xs text-white/60 uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h2 className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                    {project.title}
                  </h2>
                </div>
                <span className="font-sans text-sm text-white/60">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
