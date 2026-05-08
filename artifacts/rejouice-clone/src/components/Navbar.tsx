import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <header 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-10"
    >
      <Link href="/" className="font-display text-2xl font-bold tracking-tight uppercase" data-testid="link-home">
        REJOUICE®
      </Link>

      <button 
        data-testid="btn-contact"
        className="bg-[#101010] text-[#FAFAFA] px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-300"
      >
        <span>Let's talk</span>
        <span className="text-sm">↗</span>
      </button>
    </header>
  );
}
