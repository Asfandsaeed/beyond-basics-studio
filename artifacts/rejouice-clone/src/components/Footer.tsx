import React from "react";
import { Link, useLocation } from "wouter";

export default function Footer() {
  const [location] = useLocation();
  const isContactPage = location === "/contact";

  const bg = isContactPage ? "bg-[#0A0A0A] text-white border-white/10" : "bg-background text-foreground border-border";
  const mutedColor = isContactPage ? "text-white/40" : "opacity-50";
  const linkColor = isContactPage
    ? "text-white/60 hover:text-white"
    : "opacity-60 hover:opacity-100";

  return (
    <footer className={`${bg} px-6 md:px-10 py-16 border-t`}>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-3">
          <Link href="/" data-testid="footer-link-home" className="font-sans text-sm font-medium lowercase">
            rejouice
          </Link>
          <span className={`font-sans text-xs ${mutedColor}`}>Tomorrow's Brands, Today.™</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-2">
            <span className={`font-sans text-xs uppercase tracking-widest mb-2 ${mutedColor}`}>Menu</span>
            {[
              { label: "Work", href: "/work" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`footer-link-${link.label.toLowerCase()}`}
                className={`font-sans text-sm transition-opacity duration-200 ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className={`font-sans text-xs uppercase tracking-widest mb-2 ${mutedColor}`}>Socials</span>
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Twitter / X", href: "#" },
              { label: "Instagram", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                data-testid={`footer-link-${social.label.toLowerCase().replace(/\s\/\s/, "-")}`}
                className={`font-sans text-sm transition-opacity duration-200 ${linkColor}`}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className={`font-sans text-xs uppercase tracking-wider ${mutedColor}`}>
          © 2024 REJOUICE®. All rights reserved.
        </span>
        <span className={`font-sans text-xs uppercase tracking-wider ${mutedColor}`}>
          San Francisco · London · Tokyo
        </span>
      </div>
    </footer>
  );
}
