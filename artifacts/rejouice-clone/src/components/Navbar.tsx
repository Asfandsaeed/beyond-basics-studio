import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const primaryLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Journal", href: "/journal" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Design for Good", href: "/design-for-good" },
  { label: "Accreditations", href: "/accreditations" },
  { label: "Press", href: "/press" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Partners", href: "/partners" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  const isHomePage = location === "/";

  // Pages with dark hero backgrounds — navbar needs white text + dark bg
  const isDarkPage =
    location === "/work" ||
    location.startsWith("/work/") ||
    location === "/about" ||
    location === "/contact";

  useEffect(() => {
    // Animate in once on mount — no delay on non-home pages
    const delay = isHomePage ? 1.6 : 0.1;
    gsap.fromTo(
      navRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay, ease: "power3.out" }
    );
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) { setScrolled(false); return; }
    setScrolled(false);
    const raf = requestAnimationFrame(() => {
      const showreel = document.querySelector('[data-testid="showreel-section"]');
      if (!showreel) {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
      }
      const st = ScrollTrigger.create({
        trigger: showreel,
        start: "top top",
        onEnter: () => setScrolled(true),
        onLeaveBack: () => setScrolled(false),
      });
      return () => st.kill();
    });
    return () => cancelAnimationFrame(raf);
  }, [isHomePage]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown on route change
  useEffect(() => { setDropOpen(false); setMenuOpen(false); }, [location]);

  // On dark pages: always white text, dark blurred background
  // On home page before scroll: white text, transparent background
  // On home page after scroll / other light pages: dark text, light background
  const isLight = (isHomePage && !scrolled) || (isDarkPage && !scrolled);
  const textColor = isLight ? "text-white" : "text-[#0A0A0A]";
  const mutedColor = isLight ? "text-white/50" : "text-[#0A0A0A]/40";
  const hoverColor = isLight ? "hover:text-white" : "hover:text-[#0A0A0A]";

  let bgClass: string;
  if (isDarkPage) {
    // Dark pages: always a dark semi-transparent bar so text is always legible
    bgClass = "bg-[#0A0A0A]/60 backdrop-blur-md border-b border-white/8";
  } else if (scrolled) {
    bgClass = "bg-white/90 backdrop-blur-md border-b border-[#0A0A0A]/8";
  } else {
    bgClass = "bg-transparent";
  }

  const isCompanyActive = companyLinks.some((l) => location === l.href);

  return (
    <>
      <header
        ref={navRef}
        style={{ opacity: 0 }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-10 md:py-7 transition-all duration-300 ${bgClass}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`font-sans text-sm font-medium tracking-tight transition-colors duration-300 ${textColor}`}
          data-testid="link-home"
        >
          beyond
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9" data-testid="nav-links">
          {primaryLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-${link.label.toLowerCase()}`}
                className={`font-sans text-sm transition-all duration-200 ${textColor} ${
                  isActive ? "opacity-100" : `${mutedColor} ${hoverColor}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Company dropdown */}
          <div ref={dropRef} className="relative">
            <button
              onClick={() => setDropOpen((v) => !v)}
              className={`flex items-center gap-1.5 font-sans text-sm transition-all duration-200 ${textColor} ${
                isCompanyActive ? "opacity-100" : `${mutedColor} ${hoverColor}`
              }`}
              data-testid="nav-company-dropdown"
            >
              Company
              <ChevronDown
                size={13}
                strokeWidth={1.5}
                className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 bg-white border border-[#0A0A0A]/8 rounded-sm shadow-lg overflow-hidden z-50">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-5 py-3.5 font-sans text-sm transition-colors duration-150 hover:bg-[#F5F4F0] ${
                      location === link.href ? "text-[#0A0A0A]" : "text-[#0A0A0A]/55"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          data-testid="btn-contact"
          className={`hidden md:flex items-center gap-1 font-sans text-sm font-medium transition-all duration-200 ${textColor} hover:opacity-70`}
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
        <div className="fixed inset-0 z-40 bg-background overflow-y-auto flex flex-col px-8 pt-24 pb-12 gap-0 md:hidden">
          <div className="flex flex-col gap-1">
            {[...primaryLinks, ...companyLinks, { label: "Contact", href: "/contact" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`font-sans font-light py-3.5 border-b border-[#0A0A0A]/6 transition-colors duration-150 hover:text-[#0A0A0A]/50 ${
                  location === link.href ? "text-[#0A0A0A]" : "text-[#0A0A0A]"
                }`}
                style={{ fontSize: "clamp(1.5rem, 5vw, 2.25rem)", letterSpacing: "-0.02em" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-2">
            <a href="mailto:hello@beyondbasics.studio" className="font-sans text-sm text-[#0A0A0A]/40">hello@beyondbasics.studio</a>
            <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/25">beyondbasics.studio</span>
          </div>
        </div>
      )}
    </>
  );
}
