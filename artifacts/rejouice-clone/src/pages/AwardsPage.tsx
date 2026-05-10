import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

type AwardEntry = { award: string; project: string; projectId: string; year: string; img: string };

const awardsData: AwardEntry[] = projects
  .filter((p) => p.awards && p.awards.length > 0)
  .flatMap((p) =>
    p.awards!.map((award) => ({
      award,
      project: p.title,
      projectId: p.id,
      year: p.year,
      img: p.coverImage,
    }))
  )
  .sort((a, b) => {
    const order = ["Site of the Day", "Developer Award", "FWA of the Day", "Website of the Day", "Special Kudos", "Honorable Mention", "Mobile Excellence"];
    const scoreA = order.findIndex((o) => a.award.includes(o));
    const scoreB = order.findIndex((o) => b.award.includes(o));
    return (scoreA < 0 ? 99 : scoreA) - (scoreB < 0 ? 99 : scoreB);
  });

const bodies = [
  {
    name: "Awwwards",
    desc: "The global benchmark for web design excellence — judged by an international jury of leading designers and developers.",
    count: awardsData.filter((a) => a.award.startsWith("Awwwards")).length,
    img: "https://cdn.sanity.io/images/zksivtxz/production/a5b674fefa860f0864baaf56bfbc2bb526b263fb-1180x720.jpg",
  },
  {
    name: "The FWA",
    desc: "Founded in 2000, The FWA recognises innovation in interactive design and development across the globe.",
    count: awardsData.filter((a) => a.award.startsWith("The FWA")).length,
    img: "https://cdn.sanity.io/images/zksivtxz/production/195dabd5e5757919b90b5d5102a477117981912e-1180x720.jpg",
  },
  {
    name: "CSS Design Awards",
    desc: "International recognition for exceptional web design, UX, and UI craft — awarded daily by a global panel.",
    count: awardsData.filter((a) => a.award.startsWith("CSS Design Awards")).length,
    img: "https://cdn.sanity.io/images/zksivtxz/production/43d9fe391c3de48c4f41dee41fd3a8c97f6540fa-1180x720.jpg",
  },
  {
    name: "LogoLounge",
    desc: "The world's most respected logo design research publication — featuring the most significant logo design trends annually.",
    count: awardsData.filter((a) => a.award.startsWith("LogoLounge")).length,
    img: "https://cdn.sanity.io/images/zksivtxz/production/a2cdc528da6a57c2b6bbefdd87d628763e338bcc-1180x720.jpg",
  },
];

const awardTiers: Record<string, string> = {
  "Site of the Day": "SOTD",
  "Developer Award": "Dev Award",
  "FWA of the Day": "FOTD",
  "Website of the Day": "WOTD",
  "Special Kudos": "Special Kudos",
  "Honorable Mention": "HM",
  "Mobile Excellence": "Mobile",
  "Trends 2021 Feature": "Featured",
};

function getShortAward(award: string): string {
  for (const [key, val] of Object.entries(awardTiers)) {
    if (award.includes(key)) return val;
  }
  return award.split(":")[1]?.trim() ?? award;
}

function getAwardBody(award: string): string {
  if (award.startsWith("Awwwards")) return "Awwwards";
  if (award.startsWith("The FWA")) return "The FWA";
  if (award.startsWith("CSS Design Awards")) return "CSS";
  if (award.startsWith("LogoLounge")) return "LogoLounge";
  return award.split(":")[0] ?? award;
}

export default function AwardsPage() {
  useSeoMeta({
    title: "Awards & Recognition | Beyond®",
    description: "50+ international design awards from Awwwards, The FWA, CSS Design Awards, and LogoLounge. Consistently recognised as one of the world's leading creative studios.",
    path: "/awards",
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
      gsap.from(".body-card", {
        opacity: 0, y: 32, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".bodies-section", start: "top 80%" },
      });
      gsap.from(".award-row", {
        opacity: 0, y: 12, duration: 0.6, stagger: 0.04, ease: "power3.out",
        scrollTrigger: { trigger: ".awards-list-section", start: "top 80%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">Awards & Recognition</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          {awardsData.length}+ awards.<br />All earned.
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed">
          Recognised by the world's most respected design institutions across five continents. Not collected for the sake of it — earned on work that set a new standard in its category.
        </p>
      </section>

      {/* ── Awarding bodies ───────────────────────────────────────────────────── */}
      <section className="bodies-section bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-12">Awarding bodies</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {bodies.map((b) => (
              <div key={b.name} className="body-card bg-white rounded-sm overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={b.img} alt={b.name} className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <p className="font-sans font-light text-[#0A0A0A] text-lg">{b.name}</p>
                    <span
                      className="font-sans font-light text-[#0A0A0A] leading-none shrink-0 ml-2"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                    >
                      {b.count}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#0A0A0A]/45 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full award list ───────────────────────────────────────────────────── */}
      <section className="awards-list-section py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-12 reveal">Complete record</p>
          <div>
            {awardsData.map((a, i) => (
              <Link
                key={i}
                href={`/work/${a.projectId}`}
                className="award-row group grid grid-cols-[auto_1fr_auto_auto] md:grid-cols-[auto_1fr_1fr_auto_auto] items-center gap-4 md:gap-6 py-5 border-t border-[#0A0A0A]/8 last:border-b hover:bg-[#F5F4F0] transition-colors duration-200 px-2 -mx-2 rounded-sm"
              >
                <span className="font-sans text-[11px] text-[#0A0A0A]/25 w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-sans font-light text-[#0A0A0A] text-sm md:text-base leading-snug group-hover:text-[#0A0A0A]/70 transition-colors">{a.project}</span>
                <span className="hidden md:block font-sans text-sm text-[#0A0A0A]/40 leading-snug">{getAwardBody(a.award)}</span>
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/40 bg-[#F5F4F0] group-hover:bg-white px-2.5 py-1 transition-colors duration-200 shrink-0">{getShortAward(a.award)}</span>
                <span className="font-sans text-xs text-[#0A0A0A]/30 shrink-0">{a.year}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-8 reveal">See the work</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-white mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", maxWidth: "18ch" }}
          >
            Every award came from a great project.
          </h2>
          <div className="reveal flex flex-col sm:flex-row gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] font-sans text-sm uppercase tracking-widest px-8 py-4 hover:bg-white/80 transition-colors duration-300"
            >
              <span>View all work</span>
              <span>↗</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/20 text-white font-sans text-sm uppercase tracking-widest px-8 py-4 hover:border-white/60 transition-colors duration-300"
            >
              <span>Start a project</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
