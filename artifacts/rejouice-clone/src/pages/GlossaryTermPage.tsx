import React, { useEffect, useRef } from "react";
import { Link, useParams } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { getTermById, glossaryTerms } from "@/data/glossary";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function GlossaryTermPage() {
  const { id } = useParams<{ id: string }>();
  const term = getTermById(id ?? "");
  const pageRef = useRef<HTMLDivElement>(null);

  useSeoMeta({
    title: term ? `${term.term} — Definition | Beyond® Glossary` : "Glossary | Beyond®",
    description: term ? term.summary.slice(0, 160) : "Brand and design glossary from Beyond®.",
    path: `/glossary/${id}`,
    breadcrumbs: term ? [
      { name: "Home", path: "/" },
      { name: "Glossary", path: "/glossary" },
      { name: term.term, path: `/glossary/${term.id}` },
    ] : undefined,
    schema: term ? {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: term.term,
      description: term.summary,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Beyond® Brand & Design Glossary",
        url: "https://beyondbasics.studio/glossary",
      },
      url: `https://beyondbasics.studio/glossary/${term.id}`,
      termCode: term.id,
    } : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!term) return;
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
  }, [term]);

  if (!term) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="text-center">
          <p className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 mb-4">Not Found</p>
          <h1 className="font-sans font-light text-[#0A0A0A] text-4xl mb-6">Term not found</h1>
          <Link href="/glossary" className="font-sans text-sm text-[#0A0A0A]/50 underline underline-offset-4 hover:text-[#0A0A0A]">
            Back to Glossary
          </Link>
        </div>
      </div>
    );
  }

  const relatedTerms = term.related
    .map((id) => glossaryTerms.find((t) => t.id === id))
    .filter(Boolean);

  const relatedProjects = term.relatedProjects
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60">
          <Link href="/glossary" className="hover:text-[#0A0A0A] transition-colors">Glossary</Link>
          <span>/</span>
          <span className="text-[#0A0A0A]/60">{term.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
          <div>
            <span className="inline-block font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/60 border border-[#0A0A0A]/20 px-3 py-1.5 mb-6">
              {term.category}
            </span>
            <h1
              className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
              style={{ fontSize: "clamp(2.8rem, 6vw, 7rem)" }}
            >
              {term.term}
            </h1>
            <p className="font-sans text-base md:text-xl font-light text-[#0A0A0A]/60 leading-relaxed max-w-2xl">
              {term.summary}
            </p>
          </div>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-12">
            {term.body.map(({ heading, content }) => (
              <div key={heading} className="reveal">
                <h2 className="font-sans font-light text-[#0A0A0A] text-xl md:text-2xl tracking-tight mb-4">{heading}</h2>
                <p className="font-sans text-[15px] text-[#0A0A0A]/60 leading-[1.8]">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related projects ─────────────────────────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-12 reveal">
              See {term.term} in action
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {relatedProjects.map((p) => p && (
                <Link
                  key={p.id}
                  href={`/work/${p.id}`}
                  className="reveal group block relative overflow-hidden bg-[#111]"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-5 py-4 bg-[#0A0A0A]">
                    <div>
                      <p className="font-sans font-light text-white text-base">{p.title}</p>
                      <p className="font-sans text-xs text-white/60 mt-0.5">{p.category}</p>
                    </div>
                    <span className="text-white/55 text-lg group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">↗</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related terms ─────────────────────────────────────────────────────── */}
      {relatedTerms.length > 0 && (
        <section className="bg-[#F5F4F0] py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-10 reveal">Related terms</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedTerms.map((t) => t && (
                <Link
                  key={t.id}
                  href={`/glossary/${t.id}`}
                  className="reveal group bg-white p-6 hover:bg-[#EEEDE9] transition-colors duration-250 rounded-sm"
                >
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/55 block mb-2">{t.category}</span>
                  <p className="font-sans font-light text-[#0A0A0A] text-lg group-hover:opacity-60 transition-opacity mb-2">{t.term}</p>
                  <p className="font-sans text-xs text-[#0A0A0A]/60 leading-relaxed">{t.summary.slice(0, 80)}…</p>
                </Link>
              ))}
            </div>
            <div className="mt-10 reveal">
              <Link
                href="/glossary"
                className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 border-b border-[#0A0A0A]/20 pb-px hover:text-[#0A0A0A] hover:border-[#0A0A0A]/60 transition-colors"
              >
                View all {glossaryTerms.length} glossary terms ↗
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-8 reveal">Work with us</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-white mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", maxWidth: "18ch" }}
          >
            Ready to apply this to your brand?
          </h2>
          <Link
            href="/contact"
            className="reveal inline-flex items-center gap-3 bg-white text-[#0A0A0A] font-sans text-sm uppercase tracking-widest px-8 py-4 hover:bg-white/80 transition-colors duration-300"
          >
            <span>Start a conversation</span>
            <span>↗</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
