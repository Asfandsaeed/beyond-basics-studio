import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const split = new SplitType(textRef.current, { types: "lines,words" });
        
        gsap.from(split.words, {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-10 bg-background text-foreground">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full md:w-1/4">
          <span className="font-sans text-xs tracking-[0.1em] uppercase font-semibold">Our Philosophy</span>
        </div>
        <div className="w-full md:w-3/4">
          <h2 
            ref={textRef}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.02em] leading-[1.1]"
          >
            We believe the best brands are built at the intersection of strategy, craft, and velocity. We don't just design — we accelerate.
          </h2>
        </div>
      </div>
    </section>
  );
}
