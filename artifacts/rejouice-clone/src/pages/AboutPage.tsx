import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  { num: "(01)", label: "Put people first" },
  { num: "(02)", label: "Pursue excellence" },
  { num: "(03)", label: "Embrace challenges" },
  { num: "(04)", label: "Move with urgency" },
  { num: "(05)", label: "Think long-term" },
];

const team = [
  { role: "Strategy", count: "08" },
  { role: "Design", count: "12" },
  { role: "Technology", count: "06" },
  { role: "Growth", count: "05" },
];

export default function AboutPage() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

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

      gsap.from(".principle-row", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".principles-section", start: "top 80%" },
      });

      gsap.from(".team-stat", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".team-section", start: "top 80%" },
      });

      gsap.from(".manifesto-text", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".manifesto-section", start: "top 70%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="w-full min-h-screen flex flex-col justify-end px-6 md:px-10 pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-8 opacity-50">
            About
          </p>
          <div className="overflow-hidden">
            <h1
              ref={headlineRef}
              className="font-sans text-[6vw] md:text-[4.5vw] leading-[1.1] font-light tracking-[-0.02em] max-w-6xl"
            >
              We are a collective of seasoned creatives, strategists, growth marketers, and technologists, dedicated to transforming ambitious visions into category leaders.
            </h1>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border" />

      <section className="principles-section px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-1/3">
            <p className="font-sans text-xs uppercase tracking-[0.15em] opacity-50">
              We operate on simple principles
            </p>
          </div>
          <div className="md:w-2/3 flex flex-col">
            {principles.map((p) => (
              <div
                key={p.num}
                className="principle-row flex items-baseline gap-6 py-5 border-b border-border first:border-t"
                data-testid={`principle-${p.num}`}
              >
                <span className="font-sans text-xs opacity-40 w-10 shrink-0">{p.num}</span>
                <span className="font-sans text-xl md:text-2xl font-light">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section px-6 md:px-10 py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-16">
            The Team
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {team.map((t) => (
              <div key={t.role} className="team-stat" data-testid={`team-${t.role.toLowerCase()}`}>
                <p className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-2">
                  {t.count}
                </p>
                <p className="font-sans text-sm text-white/50 uppercase tracking-widest">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto-section px-6 md:px-10 py-32">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/4">
            <p className="font-sans text-xs uppercase tracking-[0.15em] opacity-50">Our Manifesto</p>
          </div>
          <div className="md:w-3/4">
            <p className="manifesto-text font-sans text-3xl md:text-5xl font-light leading-[1.3] tracking-[-0.01em]">
              We believe the best brands are built at the intersection of strategy, craft, and velocity. We don't just design — we accelerate. Every brand we touch becomes a vehicle for transformation, not just an identity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
