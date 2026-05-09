import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[90vh] bg-foreground text-background flex items-center justify-center px-6 md:px-10"
    >
      <div className="contact-content text-center max-w-5xl mx-auto flex flex-col items-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] opacity-40 mb-8">
          Let's work together
        </p>
        <h2
          className="font-sans font-light leading-[1.05] tracking-[-0.025em] mb-10"
          style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)" }}
        >
          Ready to build<br />tomorrow's brand?
        </h2>
        <p className="font-sans text-base md:text-lg font-light leading-relaxed mb-12 opacity-55 max-w-md">
          Let's create something extraordinary together.
        </p>
        <button
          className="border border-background/20 text-background px-10 py-5 font-sans text-[11px] uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors duration-300 flex items-center gap-3"
          data-testid="btn-start-project"
          data-cursor-hover
        >
          <span>Start a project</span>
          <span>↗</span>
        </button>
      </div>
    </section>
  );
}
