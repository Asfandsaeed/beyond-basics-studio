import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { useSeoMeta } from "@/hooks/useSeoMeta";

export default function NotFound() {
  useSeoMeta({
    title: "Page Not Found | Beyond®",
    description: "The page you're looking for doesn't exist or has moved. Head back to beyondbasics.studio to explore our work, services, and journal.",
    path: "/404",
    robots: "noindex, follow",
  });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll(".anim"), {
          opacity: 0,
          y: 40,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.1,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <section
        ref={heroRef}
        className="flex-1 flex flex-col justify-end px-6 md:px-10 pt-36 pb-20"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="anim font-sans text-[11px] uppercase tracking-[0.18em] text-white/40 mb-10">
            Error 404
          </p>
          <div
            className="float-left h-[1.2em]"
            style={{ width: "clamp(4rem, 18%, 14rem)" }}
          />
          <h1
            className="anim font-sans font-light leading-[1.08] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 7.5rem)" }}
          >
            This page wandered off the map.
          </h1>

          <p className="anim clear-both font-sans text-base text-white/45 leading-relaxed mt-8 max-w-lg">
            The page you're looking for doesn't exist, has moved, or never made it past the strategy deck. Let's get you back to something useful.
          </p>

          <div className="anim flex flex-col sm:flex-row gap-4 mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-10 py-5 font-sans text-[11px] uppercase tracking-widest hover:bg-white/90 transition-colors"
              data-testid="link-home"
            >
              <span>← Back home</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-10 py-5 font-sans text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-colors"
              data-testid="link-work"
            >
              <span>See our work ↗</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="px-6 md:px-10 py-10 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-4">
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30">
            Tomorrow's Brands, Today.™
          </span>
          <a
            href="mailto:hello@beyondbasics.studio"
            className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors"
          >
            hello@beyondbasics.studio
          </a>
        </div>
      </div>
    </div>
  );
}
