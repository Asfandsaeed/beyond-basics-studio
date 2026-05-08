import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    num: "01",
    title: "Brand Strategy",
    desc: "We architect brand systems that compound over time."
  },
  {
    num: "02",
    title: "Digital Products",
    desc: "We build digital experiences that convert and retain."
  },
  {
    num: "03",
    title: "Growth Systems",
    desc: "We engineer the flywheel behind category-defining companies."
  },
  {
    num: "04",
    title: "Creative Direction",
    desc: "We translate vision into form that moves people."
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".service-row");
      
      rows.forEach((row: any) => {
        gsap.fromTo(row,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-10 bg-background text-foreground">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-sans text-xs tracking-[0.1em] uppercase mb-12 font-semibold">Approach</h2>
        
        <div className="flex flex-col border-t border-border">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="service-row py-8 md:py-12 border-b border-border flex flex-col md:flex-row md:items-baseline justify-between gap-6"
            >
              <div className="flex items-baseline gap-4 md:gap-12 w-full md:w-1/2">
                <span className="font-sans text-sm font-semibold opacity-50">{service.num}</span>
                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight">{service.title}</h3>
              </div>
              <div className="w-full md:w-1/3">
                <p className="font-sans text-lg md:text-xl font-medium">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
