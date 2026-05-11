import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";

const siteLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(wordmarkRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.from(metaRef.current?.children ?? [], {
        opacity: 0,
        y: 16,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between bg-[#0A0A0A] text-white overflow-hidden"
      data-testid="hero-section"
    >
      {/* Wordmark — fills the upper portion, edge-to-edge, no padding */}
      <div className="flex-1 flex flex-col justify-center">
        <h1
          ref={wordmarkRef}
          className="font-display font-bold lowercase text-white select-none w-full leading-none"
          style={{
            fontSize: "clamp(72px, 24.5vw, 420px)",
            letterSpacing: "-0.03em",
            lineHeight: 0.85,
          }}
          data-testid="hero-wordmark"
        >
          beyond
        </h1>
      </div>

      {/* Bottom row */}
      <div
        ref={metaRef}
        className="flex items-end justify-between px-6 md:px-8 pb-8 gap-6"
      >
        {/* Left: descriptors */}
        <div className="flex gap-10 md:gap-16 items-start">
          <p className="font-sans text-xs md:text-sm text-white/60 leading-snug max-w-[120px]">
            Strategy, Design,<br />Performance.
          </p>
          <p className="font-sans text-xs md:text-sm text-white/60 leading-snug max-w-[140px] hidden md:block">
            Global Creative<br />&amp; Technology Agency.
          </p>
        </div>

        {/* Right: site index */}
        <nav className="flex flex-col items-end gap-1.5" aria-label="Site sections">
          {siteLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 hover:text-white transition-colors duration-200"
            >
              {link.label} ↗
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
