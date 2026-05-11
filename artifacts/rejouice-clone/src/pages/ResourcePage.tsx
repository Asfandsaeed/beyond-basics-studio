import React, { useEffect, useRef } from "react";
import { Link, useParams } from "wouter";
import { gsap } from "gsap";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { getResourceBySlug, resources } from "@/data/resources";


const categoryColors: Record<string, string> = {
  Strategy: "bg-[#0A0A0A]/6 text-[#0A0A0A]/55",
  Identity: "bg-[#F5F4F0] text-[#0A0A0A]/55",
  Digital: "bg-[#0A0A0A]/8 text-[#0A0A0A]/55",
  Process: "bg-[#F5F4F0] text-[#0A0A0A]/55",
};

export default function ResourcePage() {
  const { slug } = useParams<{ slug: string }>();
  const resource = getResourceBySlug(slug ?? "");
  const pageRef = useRef<HTMLDivElement>(null);

  useSeoMeta({
    title: resource ? `${resource.title} | Beyond® Resources` : "Resources | Beyond®",
    description: resource ? resource.subtitle.slice(0, 160) : "Brand strategy guides from Beyond®.",
    path: `/resources/${slug}`,
    ogType: resource ? "article" : "website",
    datePublished: resource?.publishDate,
    dateModified: resource?.publishDate,
    breadcrumbs: resource ? [
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: resource.title, path: `/resources/${resource.slug}` },
    ] : undefined,
    schema: resource ? {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: resource.title,
      description: resource.subtitle,
      image: resource.heroImage,
      datePublished: resource.publishDate,
      dateModified: resource.publishDate,
      articleSection: resource.category,
      author: { "@type": "Organization", name: "Beyond®", url: "https://beyondbasics.studio" },
      publisher: {
        "@type": "Organization",
        name: "Beyond®",
        logo: { "@type": "ImageObject", url: "https://beyondbasics.studio/favicon.svg" },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://beyondbasics.studio/resources/${resource.slug}`,
      },
    } : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!resource) return;
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-h", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out", delay: 0.1 });
      gsap.utils.toArray<Element>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, [resource]);

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="text-center">
          <p className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 mb-4">Not Found</p>
          <h1 className="font-sans font-light text-[#0A0A0A] text-4xl mb-6">Guide not found</h1>
          <Link href="/resources" className="font-sans text-sm text-[#0A0A0A]/50 underline underline-offset-4 hover:text-[#0A0A0A]">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const relatedResources = resource.relatedSlugs
    .map((s) => resources.find((r) => r.slug === s))
    .filter(Boolean);

  const publishDateFormatted = new Date(resource.publishDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-16 md:pt-24 md:pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60">
          <Link href="/resources" className="hover:text-[#0A0A0A] transition-colors">Resources</Link>
          <span>/</span>
          <span className="text-[#0A0A0A]/60">{resource.category}</span>
        </div>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className={`font-sans text-[10px] uppercase tracking-widest px-2.5 py-1.5 rounded-full ${categoryColors[resource.category]}`}>
              {resource.category}
            </span>
            <span className="font-sans text-[11px] text-[#0A0A0A]/55">{resource.readTime}</span>
            <span className="font-sans text-[11px] text-[#0A0A0A]/55">{publishDateFormatted}</span>
          </div>
          <h1
            className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.06] text-[#0A0A0A] mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 5.5rem)" }}
          >
            {resource.title}
          </h1>
          <p className="font-sans text-base md:text-xl font-light text-[#0A0A0A]/50 leading-relaxed mb-8">
            {resource.subtitle}
          </p>
          <a
            href={resource.downloadUrl}
            download
            className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-sans text-[11px] uppercase tracking-widest px-7 py-3.5 hover:bg-[#0A0A0A]/80 transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Download PDF</span>
          </a>
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-0">
        <div className="w-full aspect-[21/7] overflow-hidden rounded-sm bg-[#111]">
          <img src={resource.heroImage} alt={resource.title} className="w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* ── Intro ────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-sans text-[15px] md:text-base text-[#0A0A0A]/65 leading-[1.85] reveal">
              {resource.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ── Content sections ─────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-16">
            {resource.sections.map(({ heading, content, items }, i) => (
              <div key={i} className="reveal">
                <h2 className="font-sans font-light text-[#0A0A0A] text-xl md:text-2xl tracking-tight mb-5 pb-4 border-b border-[#0A0A0A]/10">
                  {heading}
                </h2>
                {content && (
                  <p className="font-sans text-[15px] text-[#0A0A0A]/60 leading-[1.85] mb-6">{content}</p>
                )}
                {items && items.length > 0 && (
                  <ul className="space-y-3">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="font-sans text-[#0A0A0A]/55 shrink-0 mt-1 text-xs">✓</span>
                        <span className="font-sans text-[15px] text-[#0A0A0A]/60 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related guides ────────────────────────────────────────────────────── */}
      {relatedResources.length > 0 && (
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-10 reveal">Related guides</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedResources.map((r) => r && (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="reveal group bg-[#F5F4F0] p-6 hover:bg-[#EEEDE9] transition-colors duration-250 rounded-sm"
                >
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/55 block mb-3">{r.readTime}</span>
                  <p className="font-sans font-light text-[#0A0A0A] leading-snug mb-2 group-hover:opacity-70 transition-opacity" style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}>
                    {r.title}
                  </p>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/55 group-hover:text-[#0A0A0A]/60 transition-colors flex items-center gap-1">
                    Read ↗
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8 reveal">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 border-b border-[#0A0A0A]/20 pb-px hover:text-[#0A0A0A] hover:border-[#0A0A0A]/60 transition-colors"
              >
                All guides ↗
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-8 reveal">Work with us</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-white mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", maxWidth: "18ch" }}
          >
            Ready to put this into practice?
          </h2>
          <p className="reveal font-sans text-base text-white/60 font-light leading-relaxed max-w-md mb-10">
            We've helped 17+ companies apply exactly this thinking to build category-leading brands. Let's talk about yours.
          </p>
          <Link
            href="/contact"
            className="reveal inline-flex items-center gap-3 bg-white text-[#0A0A0A] font-sans text-sm uppercase tracking-widest px-8 py-4 hover:bg-white/80 transition-colors duration-300"
          >
            <span>Start a conversation</span>
            <span>↗</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
