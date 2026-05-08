import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Link } from "wouter";

gsap.registerPlugin(ScrollTrigger);

const engagementModels = [
  {
    num: "(01)",
    name: "Sprint",
    desc: "A focused 6-week engagement to solve a specific brand or growth challenge. Perfect for companies that need momentum fast.",
    deliverables: ["Brand Sprint", "Go-to-Market", "Growth Audit", "Identity Refresh"],
  },
  {
    num: "(02)",
    name: "Partnership",
    desc: "An ongoing strategic partnership for companies ready to go all-in on brand-led growth. We become an extension of your team.",
    deliverables: ["Full Brand System", "Digital Products", "Growth Strategy", "Creative Direction"],
  },
];

const serviceCategories = [
  {
    num: "(01)",
    name: "Strategy",
    items: ["Brand Audit", "Qualitative Research", "Quantitative Research", "Discovery Workshop"],
  },
  {
    num: "(02)",
    name: "Brand",
    items: ["Identity Design", "Verbal Identity", "Brand Guidelines", "Positioning"],
  },
  {
    num: "(03)",
    name: "Digital",
    items: ["Web Design", "Product Design", "Motion Design", "Campaign Creative"],
  },
  {
    num: "(04)",
    name: "Growth",
    items: ["Growth Strategy", "Performance Creative", "SEO & Content", "Analytics"],
  },
];

export default function ServicesPage() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

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

      gsap.from(".model-card", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".models-section", start: "top 80%" },
      });

      gsap.from(".service-cat-row", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".categories-section", start: "top 80%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="w-full min-h-screen flex flex-col justify-end px-6 md:px-10 pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-8 opacity-50">
            Services
          </p>
          <div className="overflow-hidden">
            <h1
              ref={headlineRef}
              className="font-sans text-[7vw] md:text-[5vw] leading-[1.1] font-light tracking-[-0.02em] max-w-5xl"
            >
              One mission. Two engagement models. Undeniable transformation and growth.
            </h1>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border" />

      <section className="models-section px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6">
          {engagementModels.map((model) => (
            <div
              key={model.num}
              className="model-card border border-border p-10 md:p-14 flex flex-col gap-8"
              data-testid={`model-${model.name.toLowerCase()}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-sans text-xs opacity-40">{model.num}</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
                {model.name}
              </h2>
              <p className="font-sans text-lg font-light leading-relaxed opacity-70 max-w-sm">
                {model.desc}
              </p>
              <div className="flex flex-col gap-3 mt-auto pt-8 border-t border-border">
                {model.deliverables.map((d) => (
                  <span key={d} className="font-sans text-sm opacity-50 uppercase tracking-wider">
                    — {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-section px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.15em] mb-16 opacity-50">
            What we do
          </p>
          <div className="grid md:grid-cols-4 gap-12">
            {serviceCategories.map((cat) => (
              <div key={cat.num} className="service-cat-row" data-testid={`cat-${cat.name.toLowerCase()}`}>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-sans text-xs opacity-40">{cat.num}</span>
                  <span className="font-sans text-sm font-medium uppercase tracking-widest">{cat.name}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <span key={item} className="font-sans text-base opacity-60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <h2 className="font-sans text-4xl md:text-6xl font-light tracking-tight max-w-xl">
            Ready to start your transformation?
          </h2>
          <Link
            href="/contact"
            data-testid="link-start-project"
            className="shrink-0 border border-white/30 text-white px-10 py-5 font-sans text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-3"
          >
            <span>Start a project</span>
            <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
