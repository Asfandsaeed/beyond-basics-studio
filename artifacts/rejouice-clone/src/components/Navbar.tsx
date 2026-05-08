import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.6, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        style={{ opacity: 0 }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-10 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/30"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-sans text-sm font-medium tracking-tight lowercase"
          data-testid="link-home"
        >
          rejouice
        </Link>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-links">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-${link.label.toLowerCase()}`}
                className={`font-sans text-sm transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          data-testid="btn-contact"
          className="hidden md:flex items-center gap-1.5 font-sans text-sm font-medium hover:opacity-70 transition-opacity duration-200"
        >
          <span>Let's talk</span>
          <span className="text-xs">↗</span>
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="btn-menu"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-start justify-center px-8 gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              data-testid={`mobile-link-${link.label.toLowerCase()}`}
              className="font-display text-4xl font-bold uppercase tracking-tight"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
