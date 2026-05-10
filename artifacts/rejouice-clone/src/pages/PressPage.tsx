import React, { useEffect, useRef } from "react";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const coverage = [
  { pub: "Fast Company", title: "The 10 Most Innovative Agencies of 2024", date: "March 2024", url: "#" },
  { pub: "The Drum", title: "Beyond Named One of Europe's Fastest-Growing Independent Agencies", date: "January 2024", url: "#" },
  { pub: "Campaign Magazine", title: "Agency of the Year: Ones to Watch", date: "November 2023", url: "#" },
  { pub: "Forbes", title: "How Beyond Is Redefining Brand Strategy for the AI Era", date: "September 2023", url: "#" },
  { pub: "Awwwards", title: "Site of the Year — Rivian Brand Experience", date: "June 2023", url: "#" },
  { pub: "Communication Arts", title: "Excellence Award — Oura Ring Global Campaign", date: "April 2023", url: "#" },
];

const facts = [
  { value: "2019", label: "Founded" },
  { value: "31", label: "Team members" },
  { value: "90+", label: "Projects completed" },
  { value: "90", label: "Industry awards" },
  { value: "3", label: "Global offices" },
  { value: "94%", label: "Client satisfaction rate" },
];

const assetRows = [
  { name: "Beyond Logo Pack", detail: "SVG, PNG, PDF — light and dark variants", size: "4.2 MB", downloadUrl: "/downloads/press-logo-pack.pdf" },
  { name: "Brand Colour System", detail: "Primary, secondary, and neutral palette with hex, RGB, CMYK", size: "280 KB", downloadUrl: "/downloads/press-colour-system.pdf" },
  { name: "Typography Specimen", detail: "Brand typefaces with specimen sheets and licensing info", size: "1.1 MB", downloadUrl: "/downloads/press-typography-specimen.pdf" },
  { name: "Photography – Office", detail: "High-res images of our San Francisco and London spaces", size: "38 MB", downloadUrl: "/downloads/press-office-photography.pdf" },
  { name: "Team Photography", detail: "Headshots of all six partners in consistent studio style", size: "22 MB", downloadUrl: "/downloads/press-team-photography.pdf" },
  { name: "2024 Agency Profile", detail: "Two-page press-ready overview: stats, services, selected work", size: "3.8 MB", downloadUrl: "/downloads/press-agency-profile.pdf" },
];

export default function PressPage() {
  useSeoMeta({
    title: "Press | Beyond®",
    description: "Press resources, coverage, and media kit for Beyond Creative Growth Agency. Contact press@beyondbasics.studio for inquiries.",
    path: "/press",
  });
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
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">Press & Media</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          In the press.
        </h1>
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-lg leading-relaxed">
            For press inquiries, interview requests, or media partnerships, contact our communications team at{" "}
            <a href="mailto:press@beyondbasics.studio" className="text-[#0A0A0A] underline underline-offset-4">
              press@beyondbasics.studio
            </a>. We typically respond within one business day.
          </p>
        </div>
      </section>

      {/* ── Key facts ────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8 reveal">At a glance</p>
          <div className="reveal flex flex-wrap gap-x-16 gap-y-8">
            {facts.map(({ value, label }) => (
              <div key={label}>
                <span className="font-sans font-light text-[#0A0A0A] leading-none block" style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}>{value}</span>
                <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mt-1.5 block">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media coverage ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-10 reveal">Media coverage</p>
          <div className="reveal flex flex-col gap-0">
            {coverage.map(({ pub, title, date, url }) => (
              <a
                key={title}
                href={url}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-7 border-t border-[#0A0A0A]/8 hover:bg-[#F5F4F0] -mx-6 px-6 md:-mx-10 md:px-10 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 shrink-0 md:w-36">{pub}</span>
                  <span className="font-sans font-light text-[#0A0A0A] tracking-[-0.01em]" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)" }}>
                    {title}
                  </span>
                </div>
                <div className="flex items-center gap-5 shrink-0">
                  <span className="font-sans text-xs text-[#0A0A0A]/35">{date}</span>
                  <ArrowUpRight size={15} strokeWidth={1.5} className="text-[#0A0A0A]/25 group-hover:text-[#0A0A0A] transition-colors duration-200" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand assets ─────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-10 reveal">Press kit</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "22ch" }}
          >
            Brand assets for media use.
          </h2>
          <p className="reveal font-sans text-sm font-light text-[#0A0A0A]/45 mb-12 max-w-lg leading-relaxed">
            All assets below are approved for media use. Please do not alter logos, crop team photography, or use brand colours outside the provided system without written approval.
          </p>
          <div className="reveal flex flex-col gap-0">
            {assetRows.map(({ name, detail, size, downloadUrl }) => (
              <a
                key={name}
                href={downloadUrl}
                download
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-t border-[#0A0A0A]/8 hover:bg-[#EEEDE9] -mx-6 px-6 md:-mx-10 md:px-10 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <span className="font-sans font-light text-[#0A0A0A] text-base">{name}</span>
                  <span className="font-sans text-xs text-[#0A0A0A]/40">{detail}</span>
                </div>
                <div className="flex items-center gap-5 shrink-0">
                  <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/30">{size}</span>
                  <Download size={15} strokeWidth={1.5} className="text-[#0A0A0A]/25 group-hover:text-[#0A0A0A] transition-colors duration-200" />
                </div>
              </a>
            ))}
          </div>
          <p className="reveal mt-8 font-sans text-sm font-light text-[#0A0A0A]/40">
            For additional assets or custom requests:{" "}
            <a href="mailto:press@beyondbasics.studio" className="text-[#0A0A0A] underline underline-offset-4">press@beyondbasics.studio</a>
          </p>
        </div>
      </section>

    </div>
  );
}
