import React, { useEffect, useRef } from "react";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function ContactPage() {
  useSeoMeta({
    title: "Contact | Beyond®",
    description: "Start a conversation about your brand. Reach us at hello@beyondbasics.studio or fill in the brief — we respond within 24 hours.",
    path: "/contact",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Beyond®",
      description: "Get in touch with Beyond® Creative Growth Agency. We respond within 24 hours.",
      url: "https://beyondbasics.studio/contact",
      mainEntity: {
        "@type": "Organization",
        name: "Beyond®",
        email: "hello@beyondbasics.studio",
        url: "https://beyondbasics.studio",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "hello@beyondbasics.studio",
          availableLanguage: "English",
          areaServed: "Worldwide",
        },
      },
    },
  });
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const split = new SplitType(headlineRef.current, { types: "lines" });
        gsap.from(split.lines, {
          y: "100%",
          opacity: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.2,
        });
      }

      if (infoRef.current) {
        gsap.from(infoRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.8,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col justify-end px-6 md:px-10 pt-32 pb-16 min-h-screen">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="overflow-hidden mb-24">
            <h1
              ref={headlineRef}
              className="font-sans font-light leading-[1.08] tracking-[-0.025em] max-w-6xl text-white"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 6.5rem)" }}
            >
              Partnering with global brands, founders, startups, and VCs to build tomorrow's brands, today.
            </h1>
          </div>

          <div className="w-full h-px bg-white/10 mb-16" />

          <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div data-testid="contact-general">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/60 mb-4">
                Get in touch
              </p>
              <a
                href="mailto:hello@beyondbasics.studio"
                className="font-sans text-lg font-light text-white/80 hover:text-white transition-colors duration-200"
                data-testid="link-email-general"
              >
                hello@beyondbasics.studio
              </a>
            </div>

            <div data-testid="contact-business">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/60 mb-4">
                New Business.
              </p>
              <a
                href="mailto:hello@beyondbasics.studio"
                className="font-sans text-lg font-light text-white/80 hover:text-white transition-colors duration-200"
                data-testid="link-email-business"
              >
                hello@beyondbasics.studio
              </a>
            </div>

            <div data-testid="contact-careers">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/60 mb-4">
                Join the Team.
              </p>
              <a
                href="mailto:jobs@beyondbasics.studio"
                className="font-sans text-lg font-light text-white/80 hover:text-white transition-colors duration-200"
                data-testid="link-email-jobs"
              >
                jobs@beyondbasics.studio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/60 mb-6">
              Find us
            </p>
            <div className="flex flex-col gap-2">
              {["San Francisco", "New York", "London"].map((city) => (
                <span key={city} className="font-sans text-base text-white/60">
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/60 mb-6">
              Follow us
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Twitter / X", href: "#" },
                { label: "Instagram", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="font-sans text-base text-white/60 hover:text-white transition-colors duration-200"
                  data-testid={`link-social-${social.label.toLowerCase().replace(/\s\/\s/, "-")}`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <span className="font-sans text-[11px] text-white/55 uppercase tracking-[0.18em]">
              Tomorrow's Brands, Today.™
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
