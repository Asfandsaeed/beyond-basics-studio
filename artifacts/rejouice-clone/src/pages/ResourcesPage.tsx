import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { resources } from "@/data/resources";

gsap.registerPlugin(ScrollTrigger);

const BURO = "https://www.burocratik.com/_nuxt/image";

const categoryColors: Record<string, string> = {
  Strategy: "bg-[#0A0A0A]/6 text-[#0A0A0A]/55",
  Identity: "bg-[#F5F4F0] text-[#0A0A0A]/55",
  Digital: "bg-[#0A0A0A]/8 text-[#0A0A0A]/55",
  Process: "bg-[#F5F4F0] text-[#0A0A0A]/55",
};

export default function ResourcesPage() {
  useSeoMeta({
    title: "Resources & Guides | Beyond®",
    description: "Free brand strategy and design guides from Beyond® — rebranding checklists, brand brief templates, how to choose an agency, and more.",
    path: "/resources",
  });

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-h", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out", delay: 0.1 });
      gsap.utils.toArray<Element>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
      gsap.from(".resource-card", {
        opacity: 0, y: 36, duration: 0.9, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".resources-grid", start: "top 80%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const featured = resources[0];
  const rest = resources.slice(1);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">Resources & Guides</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Free guides<br />from the studio.
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed">
          Practical guides to brand strategy, identity, and the design process — written by the team that has built {resources.length > 1 ? "17+ category-leading brands" : "award-winning brands"} and earned 50+ international design awards.
        </p>
      </section>

      {/* ── Featured guide ────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Link
            href={`/resources/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-sm overflow-hidden hover:shadow-sm transition-shadow duration-300"
          >
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={featured.heroImage}
                alt={featured.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`font-sans text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${categoryColors[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="font-sans text-[11px] text-[#0A0A0A]/30">{featured.readTime}</span>
                </div>
                <h2
                  className="font-sans font-light text-[#0A0A0A] leading-snug tracking-tight mb-4 group-hover:opacity-70 transition-opacity"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}
                >
                  {featured.title}
                </h2>
                <p className="font-sans text-sm text-[#0A0A0A]/50 leading-relaxed max-w-sm">{featured.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/40 group-hover:text-[#0A0A0A] transition-colors duration-200 mt-8">
                <span>Read guide</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">↗</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Resources grid ────────────────────────────────────────────────────── */}
      <section className="resources-grid py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-12 reveal">All guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="resource-card group flex flex-col bg-[#F5F4F0] rounded-sm overflow-hidden hover:bg-[#EEEDE9] transition-colors duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={resource.heroImage}
                    alt={resource.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`font-sans text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${categoryColors[resource.category]}`}>
                      {resource.category}
                    </span>
                    <span className="font-sans text-[11px] text-[#0A0A0A]/30">{resource.readTime}</span>
                  </div>
                  <h3
                    className="font-sans font-light text-[#0A0A0A] leading-snug flex-1 group-hover:opacity-70 transition-opacity"
                    style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
                  >
                    {resource.title}
                  </h3>
                  <p className="font-sans text-xs text-[#0A0A0A]/40 leading-relaxed">{resource.subtitle.slice(0, 80)}…</p>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/35 group-hover:text-[#0A0A0A] transition-colors duration-200 flex items-center gap-1">
                    Read guide <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Glossary crosslink ────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-6">Also useful</p>
            <h2
              className="font-sans font-light tracking-[-0.025em] leading-[1.07] text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", maxWidth: "24ch" }}
            >
              Looking for definitions?
            </h2>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-sm mb-8">
              Our brand and design glossary explains 25 key terms — from brand equity to WebGL — in the depth they deserve.
            </p>
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-sans text-[11px] uppercase tracking-widest px-6 py-3.5 hover:bg-white/80 transition-colors"
            >
              Explore the glossary ↗
            </Link>
          </div>
          <div className="reveal aspect-[4/3] overflow-hidden rounded-sm">
            <img src={`${BURO}/665f58.auto`} alt="Brand strategy thinking" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

    </div>
  );
}
