import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const split = new SplitType(headlineRef.current, { types: "lines,words" });
        
        gsap.from(split.words, {
          y: "110%",
          opacity: 0,
          rotationZ: 3,
          duration: 1.2,
          stagger: 0.04,
          ease: "power4.out",
          delay: 0.8
        });
      }

      if (textRef.current) {
        gsap.from(textRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 1.5,
          ease: "power2.out"
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] flex flex-col justify-end px-6 py-12 md:px-10 md:py-20 overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        <h1 
          ref={headlineRef}
          className="font-display text-[12vw] md:text-[10vw] leading-[0.85] font-bold uppercase tracking-[-0.04em] mb-6 clip-text"
        >
          We Build<br />Tomorrow's<br />Brands
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <p 
            ref={textRef}
            className="font-sans text-lg md:text-xl font-medium max-w-md opacity-0"
          >
            A growth accelerator for the world's most ambitious companies.
          </p>
          
          <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center animate-bounce">
            ↓
          </div>
        </div>
      </div>
    </section>
  );
}
