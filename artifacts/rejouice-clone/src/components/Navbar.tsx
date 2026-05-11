import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, X } from "lucide-react";

const primaryLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Journal", href: "/journal" },
];

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Brand Strategy", href: "/services/brand-strategy" },
  { label: "Brand Identity", href: "/services/brand-identity" },
  { label: "Digital Experience", href: "/services/digital-experience" },
  { label: "Growth Marketing", href: "/services/growth-marketing" },
  { label: "Content & Creative", href: "/services/content-creative" },
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

const mobileMenuSections = [
  {
    heading: "Work",
    links: [
      { label: "Selected Work", href: "/work" },
      { label: "Industries", href: "/industries" },
      { label: "Our Process", href: "/process" },
      { label: "Awards", href: "/awards" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Brand Strategy", href: "/services/brand-strategy" },
      { label: "Brand Identity", href: "/services/brand-identity" },
      { label: "Digital Experience", href: "/services/digital-experience" },
      { label: "Growth Marketing", href: "/services/growth-marketing" },
      { label: "Content & Creative", href: "/services/content-creative" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Design for Good", href: "/design-for-good" },
      { label: "Accreditations", href: "/accreditations" },
      { label: "Press & Media", href: "/press" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Journal", href: "/journal" },
      { label: "Resources & Guides", href: "/resources" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

const mobileBottomSections = [
  {
    heading: "Connect",
    links: [
      { label: "Instagram ↗", href: "https://instagram.com/beyondbasicsstudio", external: true },
      { label: "LinkedIn ↗", href: "https://linkedin.com/company/beyondbasicsstudio", external: true },
      { label: "Twitter / X ↗", href: "https://x.com/beyondbasics", external: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy", external: false },
      { label: "Terms & Conditions", href: "/terms", external: false },
      { label: "Refund Policy", href: "/refunds", external: false },
    ],
  },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [servDropOpen, setServDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const servDropRef = useRef<HTMLDivElement>(null);

  const textColor = "text-[#0A0A0A]";
  const mutedColor = "text-[#0A0A0A]/55";
  const hoverColor = "hover:text-[#0A0A0A]";
  const bgClass = "bg-white/95 backdrop-blur-sm border-b border-[#0A0A0A]/8";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
      if (servDropRef.current && !servDropRef.current.contains(e.target as Node)) setServDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setDropOpen(false);
    setServDropOpen(false);
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isServicesActive = serviceLinks.some((l) => location === l.href);
  const isCompanyActive = companyLinks.some((l) => location === l.href);

  return (
    <>
      <header
        ref={navRef}
        className={`nav-entrance fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-10 md:py-7 ${bgClass}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-1.5 font-sans text-sm font-medium tracking-tight ${textColor}`}
          data-testid="link-home"
        >
          <img src="/favicon.png" alt="" aria-hidden="true" className="w-[14px] h-[14px] object-cover rounded-[2px] flex-shrink-0" />
          beyond
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9" data-testid="nav-links">
          {primaryLinks.map((link) => {
            const isActive = location === link.href || (link.label === "Services" && isServicesActive);

            if (link.label === "Services") {
              return (
                <div key="services" ref={servDropRef} className="relative">
                  <button
                    onClick={() => setServDropOpen((v) => !v)}
                    data-testid="link-services"
                    className={`flex items-center gap-1.5 font-sans text-sm ${textColor} ${
                      isServicesActive ? "opacity-100" : `${mutedColor} ${hoverColor}`
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={13}
                      strokeWidth={1.5}
                      className={`transition-transform duration-200 ${servDropOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servDropOpen && (
                    <div className="absolute top-full left-0 mt-3 w-52 bg-white border border-[#0A0A0A]/8 rounded-sm shadow-lg overflow-hidden z-50">
                      {serviceLinks.map((sl) => (
                        <Link
                          key={sl.href}
                          href={sl.href}
                          className={`block px-5 py-3.5 font-sans text-sm transition-colors duration-150 hover:bg-[#F5F4F0] ${
                            location === sl.href ? "text-[#0A0A0A]" : "text-[#0A0A0A]/55"
                          }${sl.href === "/services" ? " border-b border-[#0A0A0A]/8 font-normal" : ""}`}
                        >
                          {sl.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-${link.label.toLowerCase()}`}
                className={`font-sans text-sm ${textColor} ${
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
              className={`flex items-center gap-1.5 font-sans text-sm ${textColor} ${
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
          className={`hidden md:flex items-center gap-1 font-sans text-sm font-medium ${textColor} hover:opacity-70`}
        >
          <span>Let's talk</span>
          <span>↗</span>
        </Link>

        {/* Mobile hamburger / close */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 -mr-1"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="btn-menu"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={18} strokeWidth={1.5} className="text-[#0A0A0A]" />
          ) : (
            <div className="flex flex-col gap-[5px]">
              <span className="block w-5 h-px bg-[#0A0A0A]" />
              <span className="block w-5 h-px bg-[#0A0A0A]" />
            </div>
          )}
        </button>
      </header>

      {/* ── Mobile full-screen menu ─────────────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white overflow-y-auto md:hidden"
          style={{ paddingTop: "72px" }}
        >
          {/* Main grid — 2 columns */}
          <div className="px-6 pt-8 pb-6 grid grid-cols-2 gap-x-5 gap-y-8 border-b border-[#0A0A0A]/8">
            {mobileMenuSections.map((section) => (
              <div key={section.heading}>
                <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#0A0A0A]/35 mb-3">
                  {section.heading}
                </p>
                <div className="flex flex-col gap-[10px]">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-sans text-[13px] leading-snug transition-colors duration-150 ${
                        location === link.href
                          ? "text-[#0A0A0A]"
                          : "text-[#0A0A0A]/50 hover:text-[#0A0A0A]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom grid — Connect + Legal */}
          <div className="px-6 pt-6 pb-6 grid grid-cols-2 gap-x-5 border-b border-[#0A0A0A]/8">
            {mobileBottomSections.map((section) => (
              <div key={section.heading}>
                <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#0A0A0A]/35 mb-3">
                  {section.heading}
                </p>
                <div className="flex flex-col gap-[10px]">
                  {section.links.map((link) =>
                    link.external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[13px] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-sans text-[13px] transition-colors duration-150 ${
                          location === link.href
                            ? "text-[#0A0A0A]"
                            : "text-[#0A0A0A]/50 hover:text-[#0A0A0A]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer strip */}
          <div className="px-6 py-5 flex flex-col gap-1">
            <a
              href="mailto:hello@beyondbasics.studio"
              className="font-sans text-[12px] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-150"
            >
              hello@beyondbasics.studio
            </a>
            <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-[#0A0A0A]/30">
              Tomorrow's Brands, Today.™
            </span>
          </div>
        </div>
      )}
    </>
  );
}
