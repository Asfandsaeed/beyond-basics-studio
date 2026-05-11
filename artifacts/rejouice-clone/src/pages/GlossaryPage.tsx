import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { glossaryTerms, glossaryCategories } from "@/data/glossary";


const categoryColors: Record<string, string> = {
  "Brand Strategy": "bg-[#0A0A0A]/6 text-[#0A0A0A]/55",
  "Visual Design": "bg-[#F5F4F0] text-[#0A0A0A]/55",
  "Digital": "bg-[#0A0A0A]/8 text-[#0A0A0A]/55",
  "Growth": "bg-[#F5F4F0] text-[#0A0A0A]/55",
};

export default function GlossaryPage() {
  useSeoMeta({
    title: "Brand & Design Glossary | Beyond®",
    description: "25 brand strategy, visual identity, and digital design terms explained — from brand equity to WebGL, written by the team behind 17 category-leading brands.",
    path: "/glossary",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Glossary", path: "/glossary" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      name: "Beyond® Brand & Design Glossary",
      description: "25 authoritative definitions of brand strategy, visual identity, and digital design terms — written by Beyond Creative Growth Agency.",
      url: "https://beyondbasics.studio/glossary",
      publisher: {
        "@type": "Organization",
        name: "Beyond®",
        url: "https://beyondbasics.studio",
      },
      hasDefinedTerm: glossaryTerms.map((t) => ({
        "@type": "DefinedTerm",
        name: t.term,
        description: t.summary,
        url: `https://beyondbasics.studio/glossary/${t.id}`,
      })),
    },
  });

  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? glossaryTerms.filter((t) => t.category === activeCategory)
    : glossaryTerms;

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
    }, pageRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.from(".term-row", {
      opacity: 0, y: 12, duration: 0.5, stagger: 0.04, ease: "power3.out",
    });
  }, [activeCategory]);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-8">Glossary</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Brand & Design<br />Glossary
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed">
          {glossaryTerms.length} essential terms from brand strategy, visual identity, digital experience, and growth — explained with the depth they deserve.
        </p>
      </section>

      {/* ── Filter + Term list ────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12 reveal">
            <button
              onClick={() => setActiveCategory(null)}
              className={`font-sans text-[11px] uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
                activeCategory === null
                  ? "border-[#0A0A0A] bg-[#0A0A0A] text-white"
                  : "border-[#0A0A0A]/20 text-[#0A0A0A]/50 hover:border-[#0A0A0A]/50 hover:text-[#0A0A0A]"
              }`}
            >
              All ({glossaryTerms.length})
            </button>
            {glossaryCategories.map((cat) => {
              const count = glossaryTerms.filter((t) => t.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`font-sans text-[11px] uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
                    activeCategory === cat
                      ? "border-[#0A0A0A] bg-[#0A0A0A] text-white"
                      : "border-[#0A0A0A]/20 text-[#0A0A0A]/50 hover:border-[#0A0A0A]/50 hover:text-[#0A0A0A]"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Term list */}
          <div>
            {filtered.map((term) => (
              <Link
                key={term.id}
                href={`/glossary/${term.id}`}
                className="term-row group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-t border-[#0A0A0A]/8 last:border-b hover:bg-white transition-colors duration-200 px-4 -mx-4 rounded-sm"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <span className={`font-sans text-[10px] uppercase tracking-widest px-2 py-1 rounded-full shrink-0 ${categoryColors[term.category]}`}>
                    {term.category}
                  </span>
                  <div>
                    <p className="font-sans font-light text-[#0A0A0A] text-lg md:text-xl group-hover:opacity-60 transition-opacity">{term.term}</p>
                    <p className="font-sans text-sm text-[#0A0A0A]/65 leading-snug mt-1 max-w-xl hidden sm:block">{term.summary.slice(0, 90)}…</p>
                  </div>
                </div>
                <span className="font-sans text-[#0A0A0A]/55 text-lg group-hover:text-[#0A0A0A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-auto sm:ml-0">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services crosslink ────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-8 reveal">Put it into practice</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end reveal">
            <h2
              className="font-sans font-light tracking-[-0.025em] leading-[1.07] text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "22ch" }}
            >
              Ready to apply these ideas to your brand?
            </h2>
            <div>
              <p className="font-sans text-sm text-white/50 leading-relaxed mb-8 max-w-sm">
                We don't just define the terms — we do the work. See how brand strategy, identity, and digital experience come together in our client projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-sans text-[11px] uppercase tracking-widest px-6 py-3.5 hover:bg-white/80 transition-colors"
                >
                  See our work ↗
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-sans text-[11px] uppercase tracking-widest px-6 py-3.5 hover:border-white/60 transition-colors"
                >
                  Start a project ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
