import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const testimonials = projects
  .filter((p) => p.testimonial)
  .map((p) => ({ ...p.testimonial!, project: p.title, category: p.category, projectId: p.id, img: p.coverImage }));

const pressQuotes = [
  {
    quote: "One of the most technically accomplished studios working in digital brand today.",
    source: "Awwwards",
    url: "https://www.awwwards.com",
  },
  {
    quote: "A studio that treats WebGL not as a gimmick but as a brand communication tool.",
    source: "The FWA",
    url: "https://thefwa.com",
  },
  {
    quote: "50+ international awards across five continents — a consistent record of category-leading work.",
    source: "CSS Design Awards",
    url: "https://www.cssdesignawards.com",
  },
];

const stats = [
  { value: "50+", label: "International awards" },
  { value: "17+", label: "Transformation projects" },
  { value: "9", label: "Countries reached" },
  { value: "100%", label: "Client return rate" },
];

export default function TestimonialsPage() {
  useSeoMeta({
    title: "Client Testimonials | Beyond®",
    description: "What clients say about working with Beyond® — real testimonials from brands we've helped transform, from fintech to Web3 to e-commerce.",
    path: "/testimonials",
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
      gsap.from(".stat-item", {
        opacity: 0, y: 20, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".stats-section", start: "top 80%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">Client testimonials</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          The proof is<br />in the work.
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed">
          Don't take our word for it. Here's what the founders, CMOs, and creative directors we've worked with say about the experience — and the results.
        </p>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────────── */}
      <section className="stats-section bg-[#0A0A0A] py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="stat-item text-center md:text-left">
                <p
                  className="font-sans font-light text-white leading-none tracking-tight mb-3"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                >
                  {value}
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-white/35">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client testimonials ───────────────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="py-24 md:py-32 bg-[#F5F4F0]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-12 reveal">From clients</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div key={t.project} className="reveal bg-white p-8 md:p-10 flex flex-col justify-between gap-10 rounded-sm">
                  <blockquote className="font-sans font-light text-[#0A0A0A] leading-[1.6]" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)" }}>
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-sans text-sm font-light text-[#0A0A0A]">{t.name}</p>
                      <p className="font-sans text-xs text-[#0A0A0A]/45 mt-0.5">{t.role}</p>
                    </div>
                    <Link
                      href={`/work/${t.projectId}`}
                      className="group flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/35 hover:text-[#0A0A0A] transition-colors duration-200 shrink-0"
                    >
                      <span>View project</span>
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Press recognition ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-12 reveal">Recognised by</p>
          <div className="space-y-0">
            {pressQuotes.map(({ quote, source }) => (
              <div key={source} className="reveal grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 py-10 border-t border-[#0A0A0A]/8 last:border-b items-center">
                <blockquote className="font-sans font-light text-[#0A0A0A] leading-[1.5] max-w-2xl" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>
                  "{quote}"
                </blockquote>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 md:text-right">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work showcase strip ───────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-12 reveal">The work behind the words</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: "clear-street", title: "Clear Street", img: "https://mir-s3-cdn-cf.behance.net/projects/404/c5843a220845201.Y3JvcCwxNzA1LDEzMzQsMTQ3LDA.png" },
              { id: "multiversx", title: "MultiversX", img: "https://mir-s3-cdn-cf.behance.net/projects/404/5542c1244023205.Y3JvcCw4MDgsNjMyLDAsMA.png" },
              { id: "floema", title: "Floema", img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/10190a217782349.6796a530a3cec.png" },
            ].map((p) => (
              <Link
                key={p.id}
                href={`/work/${p.id}`}
                className="reveal group relative overflow-hidden bg-[#111] aspect-[4/3] block"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/30 transition-colors duration-500 flex items-end p-5">
                  <p className="font-sans text-white font-light text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">{p.title} ↗</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center reveal">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white/40 border border-white/20 px-8 py-3.5 hover:text-white hover:border-white/60 transition-colors duration-300"
            >
              <span>View all 17 projects</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8 reveal">Start your project</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", maxWidth: "18ch" }}
          >
            Ready to be the next success story?
          </h2>
          <Link
            href="/contact"
            className="reveal inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-sans text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#0A0A0A]/80 transition-colors duration-300"
          >
            <span>Talk to us</span>
            <span>↗</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
