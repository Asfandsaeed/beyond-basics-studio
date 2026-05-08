import React from "react";

export default function Marquee() {
  const content = "BRAND STRATEGY · DIGITAL PRODUCTS · GROWTH SYSTEMS · CREATIVE DIRECTION · ";
  
  return (
    <section className="py-12 md:py-20 overflow-hidden bg-foreground text-background border-y border-border/20">
      <div className="relative flex whitespace-nowrap font-display text-4xl md:text-6xl font-bold uppercase tracking-[-0.02em]">
        <div className="animate-marquee inline-flex">
          <span className="mx-4">{content}</span>
          <span className="mx-4">{content}</span>
        </div>
        <div className="animate-marquee inline-flex absolute top-0">
          <span className="mx-4">{content}</span>
          <span className="mx-4">{content}</span>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
