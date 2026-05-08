import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [location] = useLocation();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#0A0A0A] text-white overflow-hidden min-h-screen flex flex-col justify-between">

      {/* Main content — fills screen height, pushes wordmark to bottom */}
      <div className="flex-1 px-6 md:px-10 pt-16 pb-12 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-16 md:gap-0">

        {/* Left column: tagline + contact + newsletter */}
        <div className="flex flex-col justify-between gap-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-sm">
            Do it once.<br />Do it right.
          </h2>

          <div className="flex flex-col gap-10">
            <div>
              <p className="font-sans text-xs text-white/40 mb-2 uppercase tracking-widest">
                New Business
              </p>
              <a
                href="mailto:hello@rejouice.com"
                className="font-sans text-base text-white hover:text-white/60 transition-colors duration-200"
                data-testid="footer-email"
              >
                hello@rejouice.com
              </a>
            </div>

            <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
              <label className="font-sans text-xs text-white/40">
                Sign up for our newsletter (No spam)
              </label>
              <div className="flex items-center gap-4 border-b border-white/20 pb-3 w-72">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 bg-transparent font-sans text-sm text-white placeholder:text-white/30 outline-none"
                  data-testid="footer-newsletter-input"
                />
                <button
                  type="submit"
                  className="text-white/50 hover:text-white transition-colors duration-200 shrink-0 text-base"
                  data-testid="footer-newsletter-submit"
                >
                  →
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Center column: nav links */}
        <div className="hidden md:flex flex-col gap-4 md:px-28 pt-2">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`footer-link-${link.label.toLowerCase()}`}
                className={`font-sans text-base transition-opacity duration-200 ${
                  isActive ? "text-white" : "text-white/40 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right column: socials */}
        <div className="flex flex-col gap-4 pt-2">
          <Link
            href="/contact"
            className="flex items-center gap-1 font-sans text-base text-white hover:text-white/60 transition-colors duration-200"
            data-testid="footer-link-lets-talk"
          >
            <span>Let's talk</span>
            <span className="text-xs">↗</span>
          </Link>
          <a
            href="https://instagram.com/rejouice"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-sans text-base text-white/40 hover:text-white transition-colors duration-200"
            data-testid="footer-link-instagram"
          >
            <span>Instagram</span>
            <span className="text-xs">↗</span>
          </a>
          <a
            href="https://linkedin.com/company/rejouice"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-sans text-base text-white/40 hover:text-white transition-colors duration-200"
            data-testid="footer-link-linkedin"
          >
            <span>LinkedIn</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-white/10">
        <div className="flex flex-col gap-0.5">
          <span className="font-sans text-xs text-white/30">San Diego—USA</span>
          <span className="font-sans text-xs text-white/30">Paris—France</span>
        </div>
        <div className="flex gap-8 items-center">
          <a href="#" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors">
            Terms of use
          </a>
          <span className="font-sans text-xs text-white/30">©13–26</span>
        </div>
      </div>

      {/* Giant edge-to-edge wordmark */}
      <div className="overflow-hidden leading-none select-none w-full">
        <span
          className="font-display font-bold lowercase text-white block w-full"
          style={{
            fontSize: "clamp(80px, 20.8vw, 380px)",
            lineHeight: 0.82,
            letterSpacing: "-0.03em",
          }}
          aria-hidden="true"
          data-testid="footer-wordmark-large"
        >
          rejouice
        </span>
      </div>

    </footer>
  );
}
