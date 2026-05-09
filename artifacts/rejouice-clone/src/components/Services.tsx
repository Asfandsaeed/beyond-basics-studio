import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
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
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-10 bg-background text-foreground">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-sans text-[11px] tracking-[0.18em] uppercase text-foreground/40">Approach</h2>
          <Link
            href="/services"
            className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40 hover:text-foreground transition-colors duration-200 flex items-center gap-1.5"
          >
            All services ↗
          </Link>
        </div>

        <div className="flex flex-col border-t border-border/40">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-row py-8 md:py-12 border-b border-border/40 flex flex-col md:flex-row md:items-baseline justify-between gap-6"
            >
              <div className="flex items-baseline gap-4 md:gap-12 w-full md:w-1/2">
                <span className="font-sans text-[11px] tracking-widest text-foreground/35 w-8 shrink-0">{service.num}</span>
                <h3
                  className="font-sans font-light tracking-[-0.025em] leading-none"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 4rem)" }}
                >
                  {service.title}
                </h3>
              </div>
              <div className="w-full md:w-1/3">
                <p className="font-sans text-base md:text-lg font-light text-foreground/55 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
