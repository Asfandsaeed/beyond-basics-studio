import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Leaf, Users, BookOpen, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    Icon: Leaf,
    title: "Climate Commitment",
    body: "We offset 120% of our carbon footprint annually, partner only with sustainable vendors, and publish a yearly impact report. Our studio operations are fully carbon neutral — and we're working toward a carbon negative supply chain by 2027.",
    stat: "120%",
    statLabel: "Carbon offset",
  },
  {
    Icon: Users,
    title: "Pro-Bono Work",
    body: "We reserve 10% of our annual capacity for nonprofits, social enterprises, and mission-driven organisations that can't afford agency rates. These projects get the same senior team and the same standard of work as any paying client.",
    stat: "10%",
    statLabel: "Capacity reserved",
  },
  {
    Icon: Globe,
    title: "Diversity & Inclusion",
    body: "Over 45% of our team come from underrepresented groups in the creative industry. We publish pay ranges on all job postings, conduct blind CV reviews, and run structured mentorship for junior creatives from underserved communities.",
    stat: "45%+",
    statLabel: "Underrepresented team",
  },
  {
    Icon: BookOpen,
    title: "Creative Education",
    body: "We run free quarterly design workshops open to anyone, sponsor 10 design scholarships per year in partnership with local schools, and publish all our process documentation publicly under a Creative Commons licence.",
    stat: "10",
    statLabel: "Scholarships per year",
  },
];

const initiatives = [
  {
    name: "Brands Without Borders",
    desc: "A rolling pro-bono programme that gives refugee-led and displaced-founder businesses a complete brand identity — strategy, visual system, and web presence — at no cost.",
    status: "Active · Cohort 4",
  },
  {
    name: "Creative Education Fund",
    desc: "We sponsor design education for students from low-income households who show exceptional creative potential. Scholarships cover tools, courses, and mentorship with our senior team.",
    status: "Active · 38 alumni",
  },
  {
    name: "Climate Brand Collective",
    desc: "Pro-bono creative strategy and campaign work for environmental advocacy organisations. We've helped 12 climate charities communicate more compellingly to broader audiences.",
    status: "Active · 12 partners",
  },
  {
    name: "Open Design Library",
    desc: "A publicly available library of brand templates, type systems, and design frameworks built by our team and released for free under Creative Commons. Over 14,000 downloads.",
    status: "Open source · CC-BY 4.0",
  },
];

const approachRows = [
  {
    label: "Social responsibility is not a side project.",
    body: "We build it into the fabric of how we operate — not as a marketing exercise, but as a genuine commitment to the industry, the planet, and the communities that don't always have access to world-class creative thinking.",
  },
  {
    label: "The best work can change the world.",
    body: "We believe great design has always been political. The brands we help build — how they communicate, what they stand for, who they serve — shape culture. We take that seriously.",
  },
  {
    label: "Accountability, not aspiration.",
    body: "We publish a Design for Good Impact Report every year, with full disclosure of our pro-bono hours, carbon data, pay equity statistics, and scholarship outcomes. No vague commitments — just numbers.",
  },
];

export default function DesignForGoodPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 87%" } }
        );
      });
      gsap.from(".page-hero-h", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out", delay: 0.1 });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">Social Responsibility</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Design for Good.
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed">
          We believe the agencies that will define the next decade are those that use their platform responsibly. This is how we use ours.
        </p>
      </section>

      {/* ── Approach rows ────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "22ch" }}
          >
            Our approach to responsibility.
          </h2>
          {approachRows.map(({ label, body }) => (
            <div
              key={label}
              className="reveal grid grid-cols-1 md:grid-cols-[1fr_1fr_1.4fr] py-10 md:py-12 border-t border-[#0A0A0A]/8"
            >
              <p className="font-sans font-light text-[#0A0A0A] text-base md:text-lg leading-snug mb-4 md:mb-0">{label}</p>
              <div className="hidden md:block" />
              <p className="font-sans text-sm md:text-[15px] font-light text-[#0A0A0A]/55 leading-[1.75] max-w-lg">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Four pillars ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-10 reveal">Four pillars</p>
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-3">
            {pillars.map(({ Icon, title, body, stat, statLabel }) => (
              <div key={title} className="group p-10 bg-[#F5F4F0] hover:bg-[#EEEDE9] transition-colors duration-250 rounded-sm flex flex-col gap-8">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 flex items-center justify-center text-[#0A0A0A]/35 group-hover:text-[#0A0A0A]/70 transition-colors duration-250">
                    <Icon size={20} strokeWidth={1.25} />
                  </div>
                  <div className="text-right">
                    <span className="font-sans font-light text-[#0A0A0A] leading-none block" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>{stat}</span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mt-1 block">{statLabel}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-light text-[#0A0A0A] tracking-[-0.02em] mb-3" style={{ fontSize: "clamp(1.3rem, 2vw, 1.75rem)" }}>{title}</h3>
                  <p className="font-sans text-[13px] font-light text-[#0A0A0A]/55 leading-[1.75]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Active initiatives ───────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-10 reveal">Active initiatives</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "20ch" }}
          >
            Where our energy goes.
          </h2>
          <div className="reveal flex flex-col gap-0">
            {initiatives.map(({ name, desc, status }) => (
              <div key={name} className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-t border-[#0A0A0A]/8">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="font-sans font-light text-[#0A0A0A] text-lg md:text-xl tracking-[-0.015em] mb-2">{name}</h3>
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#0A0A0A]/35">{status}</span>
                </div>
                <p className="font-sans text-sm md:text-[15px] font-light text-[#0A0A0A]/55 leading-[1.75] max-w-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact report CTA ────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/35 mb-8 reveal">Transparency</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.03em] leading-[1.02] text-white mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6.5rem)", maxWidth: "18ch" }}
          >
            Read our annual impact report.
          </h2>
          <p className="reveal font-sans text-base font-light text-white/45 max-w-lg leading-relaxed mb-10">
            Every number, every hour, every dollar — disclosed in full. Because accountability is only meaningful when it's legible.
          </p>
          <a
            href="mailto:hello@beyondbasics.studio?subject=Impact Report Request"
            className="reveal inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-white/65 border border-white/12 px-6 py-3.5 rounded-sm hover:bg-white/8 hover:text-white transition-all duration-250"
          >
            Request the 2025 report <ArrowUpRight size={12} strokeWidth={1.5} />
          </a>
        </div>
      </section>

    </div>
  );
}
