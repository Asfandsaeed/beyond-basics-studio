import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nexusImg from "@/assets/images/nexus.png";
import auroraImg from "@/assets/images/aurora.png";
import vertexImg from "@/assets/images/vertex.png";
import lumisImg from "@/assets/images/lumis.png";

const projects = [
  {
    id: "nexus",
    title: "NEXUS",
    category: "Brand Identity",
    image: nexusImg
  },
  {
    id: "aurora",
    title: "AURORA",
    category: "Digital Platform",
    image: auroraImg
  },
  {
    id: "vertex",
    title: "VERTEX",
    category: "Growth Strategy",
    image: vertexImg
  },
  {
    id: "lumis",
    title: "LUMIS",
    category: "Creative Direction",
    image: lumisImg
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      
      cards.forEach((card: any) => {
        gsap.fromTo(card, 
          { clipPath: "inset(100% 0 0 0)" },
          { 
            clipPath: "inset(0% 0 0 0)",
            ease: "power3.inOut",
            duration: 1.5,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-10 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto space-y-24">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="project-card group relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-black flex items-center justify-center cursor-pointer"
            data-testid={`project-${project.id}`}
            data-cursor-hover
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-background z-10 pointer-events-none">
              <div className="font-sans text-sm tracking-widest uppercase font-medium">
                {project.category}
              </div>
              <h3 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
