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
      <div className="contact-content text-center max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-display text-5xl md:text-8xl lg:text-[9vw] font-bold uppercase tracking-tighter leading-[0.9] mb-8">
          Ready to build tomorrow's brand?
        </h2>
        <p className="font-sans text-xl md:text-2xl font-medium mb-12 opacity-80">
          Let's create something extraordinary together.
        </p>
        <button 
          className="bg-background text-foreground px-8 py-4 rounded-full font-sans text-sm md:text-base uppercase tracking-wider font-bold hover:scale-105 transition-transform duration-300 flex items-center gap-3"
          data-testid="btn-start-project"
          data-cursor-hover
        >
          <span>Start a project</span>
          <span className="text-xl">↗</span>
        </button>
      </div>
    </section>
  );
}
