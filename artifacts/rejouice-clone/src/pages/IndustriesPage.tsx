import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { industries, industryCategories, getIndustriesByCategory } from "@/data/industries";
import { useSeoMeta } from "@/hooks/useSeoMeta";

gsap.registerPlugin(ScrollTrigger);

function IndustryCard({ industry }: { industry: typeof industries[0] }) {
  return (
    <Link
      href={`/industries/${industry.id}`}
      className="group relative flex flex-col bg-white border border-[#0A0A0A]/8 hover:border-[#0A0A0A]/25 transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="aspect-[3/2] overflow-hidden bg-[#0A0A0A]/5">
        <img
          src={industry.coverImage}
          alt={industry.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-sans font-light text-[#0A0A0A] text-lg leading-[1.2] tracking-[-0.015em] group-hover:opacity-60 transition-opacity duration-300">
            {industry.name}
          </h3>
          <span className="font-sans text-[18px] text-[#0A0A0A]/25 group-hover:text-[#0A0A0A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-0.5">
            ↗
          </span>
        </div>
        <p className="font-sans text-xs text-[#0A0A0A]/45 leading-relaxed">
          {industry.tagline}
        </p>
      </div>
    </Link>
  );
}

export default function IndustriesPage() {
  useSeoMeta({
    title: "Industries We Serve | Beyond®",
    description: "Beyond® delivers brand strategy, identity, and web design across 49 industries — from SaaS and fintech to hospitality, healthcare, and e-commerce. Find your sector.",
    path: "/industries",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
    ],
  });
  const pageRef  = useRef<HTMLDivElement>(null);
  const heroRef  = useRef<HTMLDivElement>(null);
  const grouped  = getIndustriesByCategory();

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll(".hero-anim"), {
          opacity: 0, y: 40, duration: 1.1, stagger: 0.1, ease: "power4.out",
        });
      }
      gsap.from(".category-section", {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".industries-body", start: "top 85%", toggleActions: "play none none none" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A]">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="min-h-[65vh] flex flex-col justify-end px-6 md:px-10 pt-36 pb-16">
        <p className="hero-anim font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-8">
          Industries
        </p>
        <div className="float-left h-[1.2em]" style={{ width: "clamp(4rem, 16%, 12rem)" }} />
        <h1
          className="hero-anim font-sans font-light leading-[1.08] tracking-[-0.025em] text-[#0A0A0A]"
          style={{ fontSize: "clamp(2.8rem, 6.5vw, 8rem)" }}
        >
          Built for every<br className="hidden md:block" /> industry that grows.
        </h1>
        <div className="hero-anim clear-both flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8">
          <p className="font-sans text-sm text-[#0A0A0A]/45 leading-relaxed max-w-lg">
            From AI startups to local HVAC companies — every industry has a brand problem we've solved. Here's how we think about each one.
          </p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="font-sans font-light text-[#0A0A0A] leading-none" style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
                {industries.length}+
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/35 mt-1">Industries</p>
            </div>
            <div className="w-px h-10 bg-[#0A0A0A]/15" />
            <div className="text-center">
              <p className="font-sans font-light text-[#0A0A0A] leading-none" style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
                100+
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/35 mt-1">Brands built</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ── 2. QUICK JUMP ───────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-8 flex flex-wrap gap-2">
        {industryCategories.map((cat) => (
          <a
            key={cat}
            href={`#${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
            className="font-sans text-[11px] uppercase tracking-widest px-4 py-2 border border-[#0A0A0A]/15 text-[#0A0A0A]/50 hover:border-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-all duration-200"
          >
            {cat}
          </a>
        ))}
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ── 3. CATEGORY GRIDS ───────────────────────────────────────────────── */}
      <div className="industries-body">
        {industryCategories.map((cat, ci) => {
          const list = grouped[cat];
          if (!list || list.length === 0) return null;
          const slug = cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
          return (
            <section
              key={cat}
              id={slug}
              className="category-section px-6 md:px-10 py-16 border-b border-[#0A0A0A]/10 last:border-b-0"
            >
              {/* Category header */}
              <div className="flex items-baseline justify-between mb-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/30">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-sans font-light text-[#0A0A0A] leading-[1.1] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)" }}>
                    {cat}
                  </h2>
                </div>
                <span className="font-sans text-[11px] text-[#0A0A0A]/30 uppercase tracking-widest">
                  {list.length} {list.length === 1 ? "industry" : "industries"}
                </span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {list.map((ind) => (
                  <IndustryCard key={ind.id} industry={ind} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* ── 4. DARK CTA ─────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-24 bg-[#0A0A0A]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-6">
              Don't see your industry?
            </p>
            <h2
              className="font-sans font-light text-white leading-[1.08] tracking-[-0.025em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 5.5rem)" }}
            >
              Every brand problem<br className="hidden md:block" /> has a solution.
            </h2>
            <p className="font-sans text-sm text-white/40 leading-relaxed mt-5 max-w-md">
              We've worked across virtually every vertical. If your industry isn't listed, we'd love to hear about your specific challenge.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-10 py-5 font-sans text-[11px] uppercase tracking-widest hover:bg-white/90 transition-colors"
            >
              <span>Start a conversation</span>
              <span>↗</span>
            </Link>
            <p className="font-sans text-[11px] text-white/25 text-center">
              No commitment. We'll reply within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
