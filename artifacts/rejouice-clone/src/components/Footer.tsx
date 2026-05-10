import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const footerNav = {
  Work: [
    { label: "Selected Work", href: "/work" },
    { label: "Industries", href: "/industries" },
    { label: "Our Process", href: "/process" },
    { label: "Awards", href: "/awards" },
    { label: "Partners & Affiliates", href: "/partners" },
  ],
  Services: [
    { label: "All Services", href: "/services" },
    { label: "Brand Strategy", href: "/services/brand-strategy" },
    { label: "Brand Identity", href: "/services/brand-identity" },
    { label: "Digital Experience", href: "/services/digital-experience" },
    { label: "Growth Marketing", href: "/services/growth-marketing" },
    { label: "Content & Creative", href: "/services/content-creative" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Design for Good", href: "/design-for-good" },
    { label: "Accreditations", href: "/accreditations" },
    { label: "Press & Media", href: "/press" },
  ],
  Resources: [
    { label: "Journal", href: "/journal" },
    { label: "Resources & Guides", href: "/resources" },
    { label: "Brand Glossary", href: "/glossary" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "FAQ", href: "/faq" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refunds" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};

export default function Footer() {
  const [location] = useLocation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#0A0A0A] text-white overflow-hidden">

      {/* ── Top section ─────────────────────────────────────────────────── */}
      <div className="px-6 md:px-10 pt-20 pb-16">

        {/* Tagline + email */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-16 border-b border-white/8">
          <div>
            <h2
              className="font-sans font-light tracking-[-0.03em] text-white leading-[1.04] mb-6"
              style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}
            >
              Do it once.<br />Do it right.
            </h2>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/25">
              Tomorrow's Brands, Today.™ &nbsp;·&nbsp; beyondbasics.studio
            </p>
          </div>

          <div className="flex flex-col gap-5 shrink-0 md:max-w-xs w-full md:w-auto">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/35 mb-2">New Business</p>
              <a
                href="mailto:hello@beyondbasics.studio"
                className="font-sans text-sm text-white hover:text-white/60 transition-colors duration-200"
                data-testid="footer-email"
              >
                hello@beyondbasics.studio
              </a>
            </div>
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/35 mb-2">Careers</p>
              <a
                href="mailto:jobs@beyondbasics.studio"
                className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                jobs@beyondbasics.studio
              </a>
            </div>
            {subscribed ? (
              <p className="font-sans text-sm text-white/40">You're subscribed. ✓</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
                <label className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/35">
                  Newsletter — no spam
                </label>
                <div className="flex items-center gap-4 border-b border-white/15 pb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent font-sans text-sm text-white placeholder:text-white/25 outline-none"
                    data-testid="footer-newsletter-input"
                  />
                  <button
                    type="submit"
                    className="text-white/40 hover:text-white transition-colors duration-200 text-base shrink-0"
                    data-testid="footer-newsletter-submit"
                  >
                    →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ── Nav columns ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pt-14">

          {/* Nav link groups */}
          {Object.entries(footerNav).map(([group, links]) => (
            <div key={group}>
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-5">{group}</p>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s|&/g, "-")}`}
                    className={`font-sans text-sm transition-colors duration-200 ${
                      location === link.href ? "text-white" : "text-white/40 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Connect column */}
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Instagram", href: "https://instagram.com/beyondbasicsstudio" },
                { label: "LinkedIn", href: "https://linkedin.com/company/beyondbasicsstudio" },
                { label: "Twitter / X", href: "https://x.com/beyondbasics" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-sans text-sm text-white/40 hover:text-white transition-colors duration-200"
                >
                  <span>{label}</span>
                  <span className="text-[10px]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────── */}
      <div className="px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-white/8">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          {["San Francisco", "New York", "London"].map((city) => (
            <span key={city} className="font-sans text-xs text-white/25">{city}</span>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <span className="font-sans text-xs text-white/20">© 2019–2026 Beyond Creative Studio Ltd</span>
          <Link href="/privacy-policy" className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors">
            Terms
          </Link>
        </div>
      </div>

      {/* ── Giant wordmark ───────────────────────────────────────────────── */}
      <div className="w-full overflow-hidden leading-none select-none">
        <span
          className="font-display font-bold lowercase text-white block whitespace-nowrap"
          style={{ fontSize: "24.5vw", lineHeight: 0.85, letterSpacing: "-0.02em" }}
          aria-hidden="true"
          data-testid="footer-wordmark-large"
        >
          beyond
        </span>
      </div>

    </footer>
  );
}
