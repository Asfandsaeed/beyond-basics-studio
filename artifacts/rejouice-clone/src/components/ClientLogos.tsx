import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const clients = [
  "NEXUS INC.", "VERTEX LABS", "AURORA SYS",
  "LUMIS CO.", "QUANTUM NET", "AETHER GROUP"
];

export default function ClientLogos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".client-logo",
        { opacity: 0, y: 20 },
        {
          opacity: 0.5, // They are placeholders, keep opacity low
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-10 bg-background text-foreground border-t border-border/50">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-sans text-xs tracking-[0.1em] uppercase font-semibold text-center mb-16 opacity-70">
          Trusted by ambitious companies
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 items-center justify-items-center">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="client-logo font-display text-2xl md:text-4xl font-bold uppercase tracking-tighter opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
