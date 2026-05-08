import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  "Tula", "mobile", "beti", "Foot Locker", "Brightside",
  "Prudf", "Grove", "Highline", "Nexus", "Vertex",
];

export default function ClientLogos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-6 px-6 md:px-8 border-t border-b border-border/40 bg-background overflow-hidden"
      data-testid="client-logos"
    >
      <div className="flex items-center gap-12 md:gap-16 overflow-x-auto scrollbar-hide">
        {clients.map((client, idx) => (
          <span
            key={idx}
            className="font-sans text-sm whitespace-nowrap text-foreground/40 hover:text-foreground/80 transition-colors duration-200 shrink-0"
            data-testid={`logo-${client.toLowerCase().replace(/\s/g, "-")}`}
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}
