import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HubCell {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  dark?: boolean;
}

const cells: HubCell[] = [
  {
    num: "01",
    eyebrow: "Selected Work",
    title: "Work",
    desc: "24 brand stories. Projects that reshaped categories.",
    cta: "View all projects",
    href: "/work",
    dark: true,
  },
  {
    num: "02",
    eyebrow: "What We Do",
    title: "Services",
    desc: "End-to-end brand, digital, and performance craft.",
    cta: "See all services",
    href: "/services",
  },
  {
    num: "03",
    eyebrow: "Who We Serve",
    title: "Industries",
    desc: "Eight verticals. From B2B SaaS to luxury consumer.",
    cta: "Browse industries",
    href: "/industries",
    dark: true,
  },
  {
    num: "04",
    eyebrow: "Ideas & Process",
    title: "Journal",
    desc: "Essays on growth, brand strategy, and the creative life.",
    cta: "Read the journal",
    href: "/journal",
  },
  {
    num: "05",
    eyebrow: "Our Story",
    title: "About",
    desc: "31 people. One obsession: doing it right.",
    cta: "Get to know us",
    href: "/about",
    dark: true,
  },
  {
    num: "06",
    eyebrow: "Let's Talk",
    title: "Contact",
    desc: "Ready to build tomorrow's brand? Start here.",
    cta: "Start a project",
    href: "/contact",
  },
];

export default function HomeHub() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".hub-cell").forEach((cell, i) => {
        gsap.fromTo(
          cell,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cell,
              start: "top 88%",
            },
            delay: (i % 3) * 0.08,
          }
        );
      });

      gsap.fromTo(
        ".hub-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground border-t border-border/40"
      data-testid="home-hub"
    >
      {/* Header */}
      <div className="hub-header px-6 md:px-10 py-10 md:py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-border/40">
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-3">
            Explore Beyond
          </p>
          <h2
            className="font-sans font-light tracking-[-0.025em] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Everything we do, in one place.
          </h2>
        </div>
        <p className="font-sans text-base text-foreground/45 font-light max-w-xs leading-relaxed">
          A full-service creative growth agency for the world's most ambitious brands.
        </p>
      </div>

      {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y divide-border/40 sm:[&>*:nth-child(2n+1)]:border-r sm:[&>*:nth-child(2n+1)]:border-border/40 md:[&>*]:border-r md:[&>*:nth-child(3n)]:border-r-0 sm:[&>*:nth-child(2n)]:border-r-0">
        {cells.map((cell) => (
          <Link
            key={cell.href}
            href={cell.href}
            className={`hub-cell group relative flex flex-col justify-between gap-10 px-6 md:px-10 py-10 md:py-14 transition-colors duration-300 ${
              cell.dark
                ? "bg-[#0A0A0A] text-white hover:bg-[#141414]"
                : "bg-background text-foreground hover:bg-foreground/[0.03]"
            }`}
            data-cursor-hover
          >
            {/* Top: number + eyebrow */}
            <div className="flex items-start justify-between">
              <span
                className={`font-sans text-[11px] uppercase tracking-[0.18em] ${
                  cell.dark ? "text-white/35" : "text-foreground/35"
                }`}
              >
                {cell.num}
              </span>
              <span
                className={`font-sans text-[11px] uppercase tracking-[0.18em] ${
                  cell.dark ? "text-white/35" : "text-foreground/35"
                }`}
              >
                {cell.eyebrow}
              </span>
            </div>

            {/* Bottom: content */}
            <div className="flex flex-col gap-5">
              <h3
                className={`font-sans font-light tracking-[-0.025em] leading-none ${
                  cell.dark ? "text-white" : "text-foreground"
                }`}
                style={{ fontSize: "clamp(2.75rem, 5vw, 5rem)" }}
              >
                {cell.title}
              </h3>
              <p
                className={`font-sans text-base font-light leading-relaxed ${
                  cell.dark ? "text-white/50" : "text-foreground/50"
                }`}
              >
                {cell.desc}
              </p>
              <div
                className={`flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] transition-gap duration-300 ${
                  cell.dark ? "text-white/60 group-hover:text-white" : "text-foreground/50 group-hover:text-foreground"
                }`}
              >
                <span>{cell.cta}</span>
                <span className="translate-x-0 group-hover:translate-x-1 -translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
