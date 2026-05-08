import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(wordmarkRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.6,
      });

      gsap.from(metaRef.current?.children ?? [], {
        opacity: 0,
        y: 12,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 1.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between pt-20 pb-8 overflow-hidden"
    >
      {/* Edge-to-edge wordmark — no horizontal padding */}
      <h1
        ref={wordmarkRef}
        className="font-display font-bold lowercase leading-[0.85] select-none w-full"
        style={{
          fontSize: "clamp(60px, 19.2vw, 320px)",
          letterSpacing: "-0.03em",
          lineHeight: 0.85,
        }}
        data-testid="hero-wordmark"
      >
        beyond
      </h1>

      {/* Meta row — padded */}
      <div
        ref={metaRef}
        className="flex flex-col md:flex-row justify-between items-start gap-6 mt-8 px-6 md:px-8"
      >
        <div className="flex flex-col gap-1">
          <span className="font-sans text-xs text-foreground/50 uppercase tracking-[0.1em]">
            Tomorrow's brands, today
          </span>
          <span className="font-sans text-xs text-foreground/50 uppercase tracking-[0.1em]">
            The Growth Accelerator™
          </span>
        </div>

        <p className="font-sans text-sm md:text-base font-light text-foreground/70 max-w-xs text-right hidden md:block">
          Strategy · Design · Growth
        </p>
      </div>
    </section>
  );
}
