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

  // Hero is black on home page; other pages are white
  const isHomePage = location === "/";

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.6, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home page: start white (on black hero), turn dark on scroll
  // On other pages: always dark text (white bg)
  const isLight = isHomePage && !scrolled;

  const textColor = isLight ? "text-white" : "text-foreground";
  const mutedColor = isLight ? "text-white/40" : "opacity-40";
  const hoverColor = isLight ? "hover:text-white" : "hover:opacity-100";
  const bgClass = scrolled
    ? "bg-background/90 backdrop-blur-md border-b border-border/20"
    : "bg-transparent";

  return (
    <>
      <header
        ref={navRef}
        style={{ opacity: 0 }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-10 transition-all duration-400 ${bgClass}`}
      >
        {/* Left: switches from tagline → brand name on scroll */}
        <Link
          href="/"
          className={`font-sans text-xs font-medium tracking-tight transition-colors duration-300 ${textColor} overflow-hidden`}
          data-testid="link-home"
        >
          <span className={`block transition-all duration-400 ease-in-out ${scrolled ? "opacity-0 -translate-y-3 absolute" : "opacity-100 translate-y-0"}`}>
            The Growth Accelerator
          </span>
          <span className={`block transition-all duration-400 ease-in-out ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 absolute"}`}>
            beyond
          </span>
        </Link>

        {/* Center: nav links */}
        <nav className="hidden md:flex items-center gap-8" data-testid="nav-links">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-${link.label.toLowerCase()}`}
                className={`font-sans text-xs transition-all duration-200 ${textColor} ${
                  isActive ? "opacity-100" : `${mutedColor} ${hoverColor}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA */}
        <Link
          href="/contact"
          data-testid="btn-contact"
          className={`hidden md:flex items-center gap-1 font-sans text-xs font-medium transition-all duration-200 ${textColor} hover:opacity-70`}
        >
          <span>Let's talk</span>
          <span>↗</span>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="btn-menu"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px transition-all duration-300 ${isLight ? "bg-white" : "bg-foreground"} ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${isLight ? "bg-white" : "bg-foreground"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${isLight ? "bg-white" : "bg-foreground"} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </header>

      {/* Mobile overlay */}
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
