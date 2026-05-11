import React, { useEffect, useRef } from "react";
import { Link, useParams } from "wouter";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { gsap } from "gsap";
import { industries } from "@/data/industries";
import { servicePages } from "@/data/servicePages";

const INDUSTRY_SERVICE_SUFFIX: Record<string, string> = {
  saas: "saas",
  "ai-startups": "saas",
  "software-companies": "saas",
  startups: "startups",
  "tech-startups": "startups",
  fintech: "fintech",
  "financial-services": "fintech",
  web3: "web3",
  "web3-brands": "web3",
  "crypto-projects": "web3",
  healthcare: "healthcare",
  ecommerce: "ecommerce",
  "ecommerce-fashion": "ecommerce",
  "dtc-brands": "ecommerce",
};


export default function IndustryPage() {
  const { id }  = useParams<{ id: string }>();
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const industry = industries.find((ind) => ind.id === id);
  const related  = industry
    ? industries
        .filter((i) => i.id !== industry.id && i.category === industry.category)
        .slice(0, 3)
    : [];

  useSeoMeta({
    title: industry ? `${industry.name} Branding & Web Design | Beyond®` : "Industries | Beyond®",
    description: industry
      ? `Beyond partners with ${industry.name.toLowerCase()} companies on brand strategy, identity, and web design. Award-winning work across the sector.`
      : "Beyond serves fintech, web3, SaaS, health, consumer, and lifestyle brands.",
    path: `/industries/${id}`,
    breadcrumbs: industry ? [
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: industry.name, path: `/industries/${industry.id}` },
    ] : undefined,
    schema: industry ? {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${industry.name} Branding & Web Design`,
      description: `Beyond® delivers brand strategy, visual identity, and web design for ${industry.name.toLowerCase()} companies. Award-winning creative work built for category leaders.`,
      url: `https://beyondbasics.studio/industries/${industry.id}`,
      provider: {
        "@type": "Organization",
        name: "Beyond®",
        url: "https://beyondbasics.studio",
      },
      areaServed: "Worldwide",
      serviceType: "Brand Strategy & Web Design",
      audience: {
        "@type": "Audience",
        audienceType: industry.name,
      },
    } : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!industry) return;
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll(".hero-anim"), {
          opacity: 0, y: 36, duration: 1.1, stagger: 0.1, ease: "power4.out",
        });
      }
      gsap.from(".stat-item", {
        opacity: 0, y: 20, duration: 0.7, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: ".stats-strip", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".expertise-card", {
        opacity: 0, y: 28, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".expertise-section", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".process-step", {
        opacity: 0, y: 24, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".process-section", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".service-pill", {
        opacity: 0, scale: 0.95, duration: 0.5, stagger: 0.04, ease: "power3.out",
        scrollTrigger: { trigger: ".services-section", start: "top 88%", toggleActions: "play none none none" },
      });
      gsap.from(".related-card", {
        opacity: 0, y: 28, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".related-section", start: "top 85%", toggleActions: "play none none none" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, [industry]);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-sans text-[#0A0A0A]/60 mb-4">Industry not found.</p>
          <Link href="/industries" className="font-sans text-sm underline">← Back to Industries</Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A]">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="px-6 md:px-10 pt-36 pb-16">
        {/* Breadcrumb */}
        <div className="hero-anim flex items-center gap-2 mb-10">
          <Link
            href="/industries"
            className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors"
          >
            Industries
          </Link>
          <span className="font-sans text-[11px] text-[#0A0A0A]/55">/</span>
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60">
            {industry.category}
          </span>
        </div>

        {/* Industry name */}
        <div className="float-left h-[1.2em]" style={{ width: "clamp(4rem, 16%, 12rem)" }} />
        <h1
          className="hero-anim font-sans font-light leading-[1.08] tracking-[-0.025em] text-[#0A0A0A]"
          style={{ fontSize: "clamp(2.6rem, 6vw, 8rem)" }}
        >
          {industry.name}
        </h1>

        <div className="clear-both mt-8 flex flex-col md:flex-row md:items-start gap-10">
          <p
            className="hero-anim font-sans font-light text-[#0A0A0A] leading-[1.3] tracking-[-0.015em] max-w-2xl"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
          >
            {industry.tagline}
          </p>
          <div className="hero-anim flex flex-col gap-3 md:ml-auto md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 font-sans text-[11px] uppercase tracking-widest hover:bg-[#0A0A0A]/85 transition-colors"
            >
              <span>Start a project</span>
              <span>↗</span>
            </Link>
            <p className="font-sans text-[11px] text-[#0A0A0A]/55">Free consultation included</p>
          </div>
        </div>
      </section>

      {/* ── 2. COVER IMAGE ──────────────────────────────────────────────────── */}
      <div className="w-full aspect-[21/8] overflow-hidden bg-[#0A0A0A]/5">
        <img
          src={industry.coverImage}
          alt={industry.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── 3. STATS STRIP ──────────────────────────────────────────────────── */}
      <section className="stats-strip px-6 md:px-10 py-14 border-b border-[#0A0A0A]/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industry.stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <p
                className="font-sans font-light text-[#0A0A0A] leading-none tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)" }}
              >
                {stat.value}
              </p>
              <p className="font-sans text-[11px] text-[#0A0A0A]/60 leading-snug mt-2 max-w-[160px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. DESCRIPTION ──────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60">
              The challenge
            </p>
          </div>
          <div className="space-y-5">
            <p
              className="font-sans font-light text-[#0A0A0A] leading-[1.4] tracking-[-0.01em]"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
            >
              {industry.description}
            </p>
            <p className="font-sans text-sm text-[#0A0A0A]/55 leading-[1.75]">
              {industry.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. EXPERTISE ────────────────────────────────────────────────────── */}
      <section className="expertise-section px-6 md:px-10 py-20 bg-[#F5F4F0]">
        <div className="mb-12">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-4">
            Our expertise
          </p>
          <h2
            className="font-sans font-light text-[#0A0A0A] leading-[1.1] tracking-[-0.02em] max-w-2xl"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.5rem)" }}
          >
            What we bring to {industry.name} brands.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industry.expertise.map((item, i) => (
            <div key={i} className="expertise-card bg-white p-8 flex flex-col gap-3">
              <div className="flex items-baseline gap-3">
                <span className="font-sans text-[11px] text-[#0A0A0A]/55 uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-sans text-[#0A0A0A] leading-snug tracking-[-0.01em]"
                  style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)" }}>
                  {item.title}
                </h3>
              </div>
              <p className="font-sans text-sm text-[#0A0A0A]/55 leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. PROCESS ──────────────────────────────────────────────────────── */}
      <section className="process-section px-6 md:px-10 py-20 border-t border-[#0A0A0A]/10">
        <div className="mb-12">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-4">
            How we work
          </p>
          <h2
            className="font-sans font-light text-[#0A0A0A] leading-[1.1] tracking-[-0.02em] max-w-xl"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.5rem)" }}
          >
            The process that gets results.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industry.process.map((step, i) => (
            <div key={i} className="process-step flex flex-col gap-4 pt-6 border-t-2 border-[#0A0A0A]/10">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/55">
                {step.step}
              </span>
              <h3 className="font-sans text-[#0A0A0A] leading-snug tracking-[-0.01em]"
                style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)" }}>
                {step.title}
              </h3>
              <p className="font-sans text-sm text-[#0A0A0A]/50 leading-[1.7]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. SERVICES ─────────────────────────────────────────────────────── */}
      <section className="services-section px-6 md:px-10 py-16 bg-[#0A0A0A]">
        <div className="mb-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-4">
            Services
          </p>
          <h2
            className="font-sans font-light text-white leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.5rem)" }}
          >
            What we deliver for {industry.name}.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2.5 mb-12">
          {industry.services.map((service, i) => (
            <span
              key={i}
              className="service-pill font-sans text-[11px] uppercase tracking-widest text-white/60 border border-white/15 px-4 py-2.5"
            >
              {service}
            </span>
          ))}
        </div>
        {(() => {
          const suffix = INDUSTRY_SERVICE_SUFFIX[industry.id];
          const specialistPages = suffix
            ? servicePages.filter((sp) => sp.slug.endsWith(`-for-${suffix}`))
            : [];
          if (!specialistPages.length) return null;
          return (
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-6">
                Specialist service pages for {industry.name}
              </p>
              <div className="flex flex-wrap gap-3">
                {specialistPages.map((sp) => (
                  <Link
                    key={sp.slug}
                    href={`/services/${sp.slug}`}
                    className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white border border-white/25 px-5 py-3 hover:bg-white hover:text-[#0A0A0A] transition-colors duration-200"
                  >
                    <span>{sp.name}</span>
                    <span>↗</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* ── 8. CASE STUDY LINK ──────────────────────────────────────────────── */}
      {industry.caseStudyId && (
        <section className="px-6 md:px-10 py-16 border-t border-[#0A0A0A]/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-3">
                Featured case study
              </p>
              <h3
                className="font-sans font-light text-[#0A0A0A] leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 3rem)" }}
              >
                {industry.caseStudyName}
              </h3>
              <p className="font-sans text-sm text-[#0A0A0A]/65 mt-2">
                See how we applied this expertise in a real project.
              </p>
            </div>
            <Link
              href={`/work/${industry.caseStudyId}`}
              className="inline-flex items-center gap-2 border border-[#0A0A0A]/20 text-[#0A0A0A] px-8 py-4 font-sans text-[11px] uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300 shrink-0"
            >
              <span>View case study</span>
              <span>↗</span>
            </Link>
          </div>
        </section>
      )}

      {/* ── 9. RELATED INDUSTRIES ───────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="related-section px-6 md:px-10 py-20 border-t border-[#0A0A0A]/10">
          <div className="flex items-baseline justify-between mb-10">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60">
              Related industries
            </p>
            <Link
              href="/industries"
              className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 border-b border-[#0A0A0A]/20 pb-px hover:text-[#0A0A0A] transition-colors"
            >
              All industries ↗
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((ind) => (
              <Link
                key={ind.id}
                href={`/industries/${ind.id}`}
                className="related-card group flex flex-col border border-[#0A0A0A]/8 hover:border-[#0A0A0A]/25 transition-colors duration-300 overflow-hidden"
              >
                <div className="aspect-[3/2] overflow-hidden bg-[#0A0A0A]/5">
                  <img
                    src={ind.coverImage}
                    alt={ind.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-sans font-light text-[#0A0A0A] text-base tracking-[-0.01em] group-hover:opacity-60 transition-opacity">
                    {ind.name}
                  </h3>
                  <p className="font-sans text-[11px] text-[#0A0A0A]/60 mt-1.5">{ind.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── 10. BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-24 bg-[#0A0A0A]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-6">
              Ready to grow your {industry.name.toLowerCase()} brand?
            </p>
            <h2
              className="font-sans font-light text-white leading-[1.08] tracking-[-0.025em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 5.5rem)" }}
            >
              Let's build something<br className="hidden md:block" /> undeniable together.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-10 py-5 font-sans text-[11px] uppercase tracking-widest hover:bg-white/90 transition-colors"
            >
              <span>Start a project</span>
              <span>↗</span>
            </Link>
            <p className="font-sans text-[11px] text-white/55 text-center">
              or email us at hello@beyondbasics.studio
            </p>
          </div>
        </div>
      </section>

      {/* ── Back nav ─────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-10 py-10 border-t border-[#0A0A0A]/10">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors"
        >
          <span>←</span>
          <span>All industries</span>
        </Link>
      </div>
    </div>
  );
}
