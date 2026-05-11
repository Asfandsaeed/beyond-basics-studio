import React, { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { Link } from "wouter";


export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    Promise.all([getGsap(), import("split-type")]).then(([{ gsap }, { default: SplitType }]) => {
      if (cancelled || !containerRef.current) return;
      ctx = gsap.context(() => {
        if (textRef.current) {
          const split = new SplitType(textRef.current, { types: "lines" });
          gsap.from(split.lines, {
            opacity: 0,
            y: 24,
            duration: 1,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          });
        }

        gsap.from(".about-meta > *", {
          opacity: 0,
          y: 16,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        });
      }, containerRef);
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 px-6 md:px-8 bg-background text-foreground border-t border-border/40"
    >
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_2fr_1fr] gap-12 md:gap-16 items-start">
        <div className="about-meta flex flex-col gap-3">
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40">
            Tomorrow's brands, today
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40">
            San Francisco
          </span>
        </div>

        <p
          ref={textRef}
          className="font-sans text-xl md:text-2xl lg:text-3xl font-light leading-[1.45] tracking-[-0.01em]"
        >
          We turn founders' visions into remarkable brands by combining strategy, design, and performance marketing, all under one roof.{" "}
          <Link
            href="/services"
            className="underline underline-offset-4 opacity-50 hover:opacity-100 transition-opacity duration-200"
            data-testid="link-explore-services"
          >
            Explore our services.
          </Link>
        </p>

        <div className="about-meta flex flex-col gap-4 md:items-end">
          <div className="flex flex-col gap-1 md:items-end">
            <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40">
              Est. 2019
            </span>
            <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40">
              31 Employees
            </span>
          </div>
          <Link
            href="/about"
            className="font-sans text-sm underline underline-offset-4 opacity-50 hover:opacity-100 transition-opacity duration-200 mt-4"
            data-testid="link-get-to-know"
          >
            Get to know us
          </Link>
        </div>
      </div>
    </section>
  );
}
