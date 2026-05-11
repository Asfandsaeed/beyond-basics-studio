import React, { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import vertexImg from "@/assets/images/vertex.png";


const approaches = [
  {
    num: "1",
    title: "A holistic brand",
    desc: "We build complete brand systems — visual identity, voice, positioning — that hold together across every touchpoint.",
  },
  {
    num: "2",
    title: "Digital-first thinking",
    desc: "Every brand decision is made with digital performance in mind. Strategy and aesthetics serve growth.",
  },
  {
    num: "3",
    title: "Performance marketing",
    desc: "We connect brand to revenue. Creative that looks good and converts.",
  },
  {
    num: "4",
    title: "Long-term partnership",
    desc: "We embed ourselves in your team. Not a vendor — a partner with skin in the game.",
  },
];

export default function OurApproach() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    getGsap().then(({ gsap }) => {
      if (cancelled || !sectionRef.current) return;
      ctx = gsap.context(() => {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        });

        gsap.from(".approach-row", {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".approach-list", start: "top 80%" },
        });

        gsap.from(".approach-card", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".approach-card", start: "top 85%" },
        });
      }, sectionRef);
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-8 bg-background text-foreground border-t border-border/40"
      data-testid="our-approach"
    >
      <div className="max-w-[1400px] mx-auto">
        <h2
          ref={headingRef}
          className="font-sans font-light tracking-[-0.025em] leading-[1.05] mb-16 md:mb-20"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)" }}
        >
          Our approach.
        </h2>

        <div className="grid md:grid-cols-[1fr_320px] gap-12 md:gap-16 items-start">
          <div className="approach-list flex flex-col divide-y divide-border/40">
            {approaches.map((item) => (
              <div
                key={item.num}
                className="approach-row group flex gap-6 md:gap-10 py-7 md:py-8 items-start"
                data-testid={`approach-${item.num}`}
              >
                <span className="font-sans text-xs text-foreground/30 pt-1 w-4 shrink-0">
                  {item.num}
                </span>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10 flex-1">
                  <h3 className="font-sans text-lg md:text-xl font-medium w-full md:w-52 shrink-0 group-hover:opacity-60 transition-opacity duration-200">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-foreground/50 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="approach-card hidden md:block sticky top-24">
            <div className="relative w-full aspect-[3/4] bg-[#111] overflow-hidden">
              <img
                src={vertexImg}
                alt="Featured work"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="font-sans text-[11px] text-white/60 uppercase tracking-[0.18em]">
                  Featured
                </span>
                <div>
                  <p className="font-sans text-[11px] text-white/60 uppercase tracking-[0.18em] mb-1">
                    Brand Identity
                  </p>
                  <p className="font-sans text-2xl font-light tracking-[-0.02em] text-white">
                    Vertex
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
