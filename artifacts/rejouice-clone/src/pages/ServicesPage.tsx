import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "wouter";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const BURO = "https://www.burocratik.com/_nuxt/image";

// ── Asset map — Beyond/burocratik imagery only ────────────────────────────────
const ASSETS = {
  // Engagement model thumbnails
  teamShot: `${BURO}/665f58.auto`,   // Floema — clean workspace feel
  portrait: `${BURO}/c40aba.auto`,   // Phive — bold portrait
};

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    num: "01",
    name: "Brand Strategy",
    tagline: "Clarity before creation.",
    desc: "We diagnose where your brand stands and chart the path to where it needs to go. Sharp positioning, a differentiated narrative, and a roadmap to lead your category.",
    items: ["Brand Audit", "Qualitative Research", "Quantitative Research", "Discovery Workshop", "Positioning", "Brand Architecture", "Naming", "Messaging Framework"],
    img: `${BURO}/482d5f.auto`,
    caseStudy: { name: "Clear Street", tag: "Rebranding & Website", id: "clear-street" },
  },
  {
    num: "02",
    name: "Brand Identity",
    tagline: "Identity that earns attention.",
    desc: "We design brands that stand apart. Visual identity, typography, motion, and tone — every element purpose-built to make your brand unmistakable and unforgettable.",
    items: ["Visual Identity", "Logo Design", "Typography System", "Color System", "Brand Guidelines", "Art Direction", "Motion Identity", "Verbal Identity"],
    img: `${BURO}/7ead07.auto`,
    caseStudy: { name: "MultiversX", tag: "Naming, Rebranding & Website", id: "multiversx" },
  },
  {
    num: "03",
    name: "Digital Experience",
    tagline: "Websites that convert and inspire.",
    desc: "We design and build digital products that feel as premium as the brands they represent. From landing pages to full product platforms — performance and craft in equal measure.",
    items: ["Web Design", "Web Development", "Product Design", "Motion Design & 3D", "Campaign Creative", "UX Strategy", "Interaction Design", "No-code Platforms"],
    img: `${BURO}/455aa5.auto`,
    caseStudy: { name: "Remote", tag: "Website", id: "remote" },
  },
  {
    num: "04",
    name: "Growth Marketing",
    tagline: "Brand-led growth that compounds.",
    desc: "We build the systems and content that turn your brand into a growth engine. Strategy, creative, and distribution — aligned to drive results that last beyond any single campaign.",
    items: ["Growth Strategy", "Performance Creative", "SEO & Content Strategy", "Analytics & Attribution", "Paid Media Creative", "Email Marketing", "Social Strategy", "Go-To-Market"],
    img: `${BURO}/278ec4.auto`,
    caseStudy: { name: "Phive", tag: "Rebrand & Website", id: "phive" },
  },
  {
    num: "05",
    name: "Content & Creative",
    tagline: "Content that earns its place.",
    desc: "We produce content that doesn't feel like content — photography, video, copy, and creative assets that carry your brand forward across every touchpoint and channel.",
    items: ["Brand Photography", "Video Production", "Copywriting", "Social Content", "Campaign Production", "CGI & 3D Visualization", "Editorial Design", "Podcast & Audio"],
    img: `${BURO}/dc758e.auto`,
    caseStudy: { name: "Floema", tag: "Rebrand & Website", id: "floema" },
  },
];

const models = [
  {
    num: "01",
    name: "Sprint",
    duration: "6 weeks",
    desc: "A focused 6-week engagement to solve a specific brand or growth challenge. Perfect for companies that need fast momentum without long-term commitment.",
    deliverables: ["Brand Sprint", "Go-to-Market", "Growth Audit", "Identity Refresh"],
    img: ASSETS.teamShot,
  },
  {
    num: "02",
    name: "Partnership",
    duration: "Ongoing",
    desc: "An ongoing strategic partnership for companies ready to go all-in on brand-led growth. We become a true extension of your founding team.",
    deliverables: ["Full Brand System", "Digital Products", "Growth Strategy", "Creative Direction"],
    img: ASSETS.portrait,
  },
];

// Pull 3 showcase projects from our real data
const caseStudyProjects = ["clear-street", "remote", "multiversx"].map((id) => {
  const p = projects.find((x) => x.id === id)!;
  return { id: p.id, name: p.title, tag: p.category, img: p.coverImage };
});

// ── Sub-components ────────────────────────────────────────────────────────────
function ServiceRow({
  s,
  isOpen,
  onToggle,
}: {
  s: typeof services[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (isOpen) {
      gsap.to(bodyRef.current, { height: "auto", opacity: 1, duration: 0.55, ease: "power3.inOut" });
    } else {
      gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.45, ease: "power3.inOut" });
    }
  }, [isOpen]);

  return (
    <div className="service-row border-t border-[#0A0A0A]/10 last:border-b last:border-[#0A0A0A]/10">
      <button
        className="w-full flex items-center justify-between gap-6 py-7 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-sans text-[11px] text-[#0A0A0A]/35 tracking-widest w-8 shrink-0">
          {s.num}
        </span>
        <span
          className="flex-1 font-sans font-light text-[#0A0A0A] leading-none tracking-[-0.02em] group-hover:opacity-60 transition-opacity duration-300"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 4rem)" }}
        >
          {s.name}
        </span>
        <span className="font-sans text-sm text-[#0A0A0A]/40 hidden md:block max-w-[240px] text-right leading-snug">
          {s.tagline}
        </span>
        <span
          className="text-[#0A0A0A]/40 text-lg transition-transform duration-300 shrink-0"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      {/* Collapsible body */}
      <div
        ref={bodyRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <div className="pb-10 pl-0 md:pl-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10">
          {/* Left: desc + tags */}
          <div>
            <p className="font-sans text-sm text-[#0A0A0A]/55 leading-relaxed max-w-lg mb-8">
              {s.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 border border-[#0A0A0A]/15 px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href={`/work/${s.caseStudy.id}`}
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 border-b border-[#0A0A0A]/20 pb-px hover:text-[#0A0A0A] hover:border-[#0A0A0A]/60 transition-colors"
            >
              <span>See case study: {s.caseStudy.name}</span>
              <span>↗</span>
            </Link>
          </div>

          {/* Right: case-study thumbnail */}
          <div className="hidden md:block w-48 h-32 overflow-hidden rounded-sm shrink-0">
            <img
              src={s.img}
              alt={s.caseStudy.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type CaseEntry = { id: string; name: string; tag: string; img: string };

function CaseCard({ c }: { c: CaseEntry }) {
  return (
    <Link
      href={`/work/${c.id}`}
      className="case-card group block relative overflow-hidden bg-[#111]"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={c.img}
          alt={c.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="font-sans font-light text-white text-base">{c.name}</p>
          <p className="font-sans text-xs text-white/40 mt-0.5">{c.tag}</p>
        </div>
        <span className="font-sans text-white/30 text-lg group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
          ↗
        </span>
      </div>
    </Link>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const pageRef    = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Hero headline
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          opacity: 0, y: 40, duration: 1.2, ease: "power4.out", delay: 0.15,
        });
      }

      // Service rows
      gsap.from(".service-row", {
        opacity: 0, y: 20, duration: 0.7, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: ".services-list", start: "top 82%" },
      });

      // Model cards
      gsap.from(".model-card", {
        opacity: 0, y: 36, duration: 0.9, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".models-section", start: "top 80%" },
      });

      // Case study cards
      gsap.from(".case-card", {
        opacity: 0, y: 40, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".cases-section", start: "top 78%" },
      });

      // CTA text
      gsap.from(".cta-text", {
        opacity: 0, y: 30, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A]">

      {/* ══ 1. HERO ═══════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-10 pt-32 pb-16 overflow-hidden">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-10">
          Services
        </p>
        {/* Float spacer — first-line indent */}
        <div className="float-left h-[1.2em]" style={{ width: "clamp(5rem, 22%, 18rem)" }} />
        <h1
          ref={headlineRef}
          className="font-sans font-light leading-[1.08] tracking-[-0.025em] text-[#0A0A0A]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 7rem)" }}
        >
          One mission. Two engagement models. Undeniable transformation and growth.
        </h1>

        {/* Hero image strip */}
        <div className="mt-16 w-full aspect-[21/6] overflow-hidden rounded-sm bg-[#111]">
          <img
            src={`${BURO}/508c65.auto`}
            alt="Beyond studio work"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ══ 2. SERVICES ACCORDION ════════════════════════════════════════════ */}
      <section className="services-list px-6 md:px-10 py-16">
        <div className="mb-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40">
            What we do
          </p>
        </div>

        <div>
          {services.map((s, i) => (
            <ServiceRow
              key={s.num}
              s={s}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ══ 3. ENGAGEMENT MODELS ════════════════════════════════════════════ */}
      <section className="models-section px-6 md:px-10 py-20">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-12">
          How we work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((m) => (
            <div
              key={m.num}
              className="model-card group border border-[#0A0A0A]/10 overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-sans text-[11px] text-[#0A0A0A]/35 tracking-widest">{m.num}</span>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/35 border border-[#0A0A0A]/15 px-2.5 py-1">
                    {m.duration}
                  </span>
                </div>
                <h2
                  className="font-sans font-light text-[#0A0A0A] leading-none tracking-[-0.02em] mb-6"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
                >
                  {m.name}
                </h2>
                <p className="font-sans text-sm text-[#0A0A0A]/55 leading-relaxed max-w-sm mb-8">
                  {m.desc}
                </p>
                <div className="border-t border-[#0A0A0A]/10 pt-6 flex flex-col gap-2.5">
                  {m.deliverables.map((d) => (
                    <span key={d} className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/40">
                      — {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ══ 4. SELECTED WORK ════════════════════════════════════════════════ */}
      <section className="cases-section px-6 md:px-10 py-20 bg-[#0A0A0A]">
        <div className="flex items-baseline justify-between mb-12">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/40">
            Selected work
          </p>
          <Link
            href="/work"
            className="font-sans text-[11px] uppercase tracking-widest text-white/40 border-b border-white/20 pb-px hover:text-white hover:border-white/60 transition-colors"
          >
            All projects ↗
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudyProjects.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>
      </section>

      {/* ══ 5. STAT STRIP ════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-16 bg-[#F5F4F0]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "90+", label: "Awards won" },
            { num: "$5B+", label: "Client value created" },
            { num: "8+", label: "Years experience" },
            { num: "100+", label: "Brands transformed" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <span
                className="font-sans font-light text-[#0A0A0A] leading-none tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)" }}
              >
                {s.num}
              </span>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/40">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 6. OFFICE IMAGE ════════════════════════════════════════════════ */}
      <div className="w-full aspect-[16/5] md:aspect-[16/5] aspect-[4/3] overflow-hidden">
        <img
          src={`${BURO}/508c65.auto`}
          alt="Beyond studio"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ══ 7. CTA ═══════════════════════════════════════════════════════════ */}
      <section className="cta-section px-6 md:px-10 py-28 bg-[#0A0A0A]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="cta-text">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/35 mb-8">
              Let's work together
            </p>
            <h2
              className="font-sans font-light text-white leading-[1.08] tracking-[-0.025em]"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 6.5rem)" }}
            >
              Ready to start your<br />transformation?
            </h2>
          </div>
          <div className="cta-text flex flex-col gap-4 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/20 text-white px-10 py-5 font-sans text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300"
            >
              <span>Start a project</span>
              <span>↗</span>
            </Link>
            <p className="font-sans text-[11px] text-white/30 tracking-wide">
              Or email us at{" "}
              <a href="mailto:hello@beyond.com" className="text-white/50 hover:text-white transition-colors underline underline-offset-4">
                hello@beyond.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
