import React, { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";


const stats = [
  { value: "200+", label: "Brands built" },
  { value: "5", label: "Years operating" },
  { value: "31", label: "People" },
  { value: "20+", label: "Countries reached" },
];

const facts = [
  "Fully remote-first studio",
  "No middlemen, no account managers",
  "Strategy, design, and growth under one roof",
  "Average client relationship: 2.4 years",
  "Net Promoter Score: 91",
];

export default function Glance() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    getGsap().then(({ gsap }) => {
      if (cancelled || !sectionRef.current) return;
      ctx = gsap.context(() => {
        gsap.from(".glance-stat", {
          opacity: 0,
          y: 30,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        });

        gsap.from(".glance-fact", {
          opacity: 0,
          x: -12,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".glance-facts", start: "top 85%" },
        });
      }, sectionRef);
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-8 border-t border-border/40 bg-background text-foreground"
      data-testid="beyond-glance"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-baseline mb-16">
          <h2 className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40">
            Beyond at a glance
          </h2>
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/30">Est. 2019</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x divide-border/40 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glance-stat flex flex-col gap-2 md:px-10 first:pl-0 last:pr-0"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <span
                className="font-sans font-light tracking-[-0.025em] leading-none"
                style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)" }}
              >
                {stat.value}
              </span>
              <span className="font-sans text-[11px] text-foreground/40 uppercase tracking-[0.18em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="glance-facts flex flex-col md:flex-row md:items-start gap-8 md:gap-0 border-t border-border/40 pt-10">
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/30 md:w-48 shrink-0">
            What makes us different
          </span>
          <div className="flex flex-col gap-4">
            {facts.map((fact, idx) => (
              <div
                key={idx}
                className="glance-fact flex items-start gap-3"
                data-testid={`fact-${idx}`}
              >
                <span className="font-sans text-foreground/20 text-xs mt-0.5">—</span>
                <span className="font-sans text-sm md:text-base text-foreground/60">
                  {fact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
