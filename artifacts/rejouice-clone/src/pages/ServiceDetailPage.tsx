import React, { useEffect, useRef } from "react";
import { Link, useParams } from "wouter";
import { gsap } from "gsap";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { getServicePage, coreServices, industryServices, getRelatedProjects } from "@/data/servicePages";
import { projects } from "@/data/projects";


function NotFoundService() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="text-center">
        <p className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 mb-4">Not Found</p>
        <h1 className="font-sans font-light text-[#0A0A0A] text-4xl mb-6">Service not found</h1>
        <Link href="/services" className="font-sans text-sm text-[#0A0A0A]/50 underline underline-offset-4 hover:text-[#0A0A0A]">
          Back to Services
        </Link>
      </div>
    </div>
  );
}

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = getServicePage(slug ?? "");
  const pageRef = useRef<HTMLDivElement>(null);

  useSeoMeta({
    title: page ? `${page.name} — ${page.tagline} | Beyond®` : "Service | Beyond®",
    description: page ? page.intro.slice(0, 160) : "Beyond® creative growth agency services.",
    path: `/services/${slug}`,
    breadcrumbs: page ? [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      ...(page.parentService ? [{ name: page.parentService, path: `/services/${page.parentService.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}` }] : []),
      { name: page.name, path: `/services/${page.slug}` },
    ] : undefined,
    schema: page ? {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.name,
      description: page.intro,
      provider: {
        "@type": "Organization",
        name: "Beyond®",
        url: "https://beyondbasics.studio",
      },
      areaServed: page.industryName ?? "Worldwide",
      serviceType: page.parentService ?? page.name,
      url: `https://beyondbasics.studio/services/${page.slug}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${page.name} deliverables`,
        itemListElement: page.deliverables.map((d) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: d },
        })),
      },
    } : undefined,
    faqs: page?.faqs,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!page) return;
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-h", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out", delay: 0.1 });
      gsap.utils.toArray<Element>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
      gsap.from(".process-step", {
        opacity: 0, y: 24, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".process-section", start: "top 80%" },
      });
      gsap.from(".project-card", {
        opacity: 0, y: 36, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".projects-section", start: "top 80%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, [page]);

  if (!page) return <NotFoundService />;

  const relatedProjects = getRelatedProjects(page);
  const isIndustryService = !!page.parentService;
  const parentPage = page.parentService ? getServicePage(page.parentService) : undefined;

  const siblingIndustry = industryServices.filter(
    (s) => s.parentService === page.parentService && s.slug !== page.slug
  ).slice(0, 3);

  const otherCoreServices = coreServices.filter((s) => s.slug !== page.slug).slice(0, 3);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-0 md:pt-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60">
          <Link href="/services" className="hover:text-[#0A0A0A] transition-colors">Services</Link>
          {isIndustryService && parentPage && (
            <>
              <span>/</span>
              <Link href={`/services/${parentPage.slug}`} className="hover:text-[#0A0A0A] transition-colors">{parentPage.name}</Link>
            </>
          )}
          <span>/</span>
          <span className="text-[#0A0A0A]/60">{page.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-16">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-6">{page.tagline}</p>
            <h1
              className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5.5rem)" }}
            >
              {page.heroHeadline}
            </h1>
          </div>
          <div className="md:pt-20">
            <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 leading-relaxed mb-6">{page.intro}</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full aspect-[21/7] overflow-hidden rounded-sm bg-[#111] mb-0">
          <img src={page.heroImage} alt={page.name} className="w-full h-full object-cover object-center" />
        </div>
      </section>

      {/* ── What + How ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="reveal">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-6">What we do</p>
            <p className="font-sans font-light text-[#0A0A0A] leading-[1.6]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}>
              {page.what}
            </p>
          </div>
          <div className="reveal">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-6">How we do it</p>
            <p className="font-sans font-light text-[#0A0A0A] leading-[1.6]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}>
              {page.how}
            </p>
          </div>
        </div>

        {/* Deliverables */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16 reveal">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-6">Deliverables</p>
          <div className="flex flex-wrap gap-2">
            {page.deliverables.map((d) => (
              <span
                key={d}
                className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 border border-[#0A0A0A]/15 px-3 py-1.5 bg-white"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────────────── */}
      <section className="process-section py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-12 reveal">Our process</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.process.map(({ step, title, body }) => (
              <div key={step} className="process-step border-t-2 border-[#0A0A0A]/10 pt-6">
                <p className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/55 mb-4">{step}</p>
                <p className="font-sans font-light text-[#0A0A0A] text-lg leading-snug mb-3">{title}</p>
                <p className="font-sans text-sm text-[#0A0A0A]/50 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured projects ─────────────────────────────────────────────────── */}
      <section className="projects-section bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-12">Related work</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedProjects.map((p) => p && (
              <Link
                key={p.id}
                href={`/work/${p.id}`}
                className="project-card group block relative overflow-hidden bg-[#111]"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="font-sans font-light text-white text-base">{p.title}</p>
                    <p className="font-sans text-xs text-white/60 mt-0.5">{p.category}</p>
                  </div>
                  <span className="text-white/55 text-lg group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">↗</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white/60 border border-white/20 px-8 py-3.5 hover:text-white hover:border-white/60 transition-colors duration-300"
            >
              <span>View all work</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      {page.faqs.length > 0 && (
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-12 reveal">Common questions</p>
            <div className="max-w-3xl">
              {page.faqs.map((faq) => (
                <div key={faq.q} className="reveal border-t border-[#0A0A0A]/10 last:border-b">
                  <button
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    onClick={(e) => {
                      const btn = e.currentTarget;
                      const body = btn.nextElementSibling as HTMLDivElement | null;
                      const icon = btn.querySelector("span:last-child") as HTMLElement | null;
                      if (!body) return;
                      const isOpen = body.style.height !== "0px" && body.style.height !== "";
                      gsap.to(body, { height: isOpen ? 0 : "auto", opacity: isOpen ? 0 : 1, duration: 0.4, ease: "power3.inOut" });
                      if (icon) icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(45deg)";
                    }}
                  >
                    <span className="font-sans font-light text-[#0A0A0A] text-base md:text-lg leading-snug">{faq.q}</span>
                    <span className="text-[#0A0A0A]/60 text-lg shrink-0 transition-transform duration-300">+</span>
                  </button>
                  <div style={{ height: 0, overflow: "hidden", opacity: 0 }}>
                    <p className="font-sans text-sm text-[#0A0A0A]/55 leading-relaxed pb-6 max-w-2xl">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related services ─────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-10 reveal">
            {isIndustryService ? "More industries" : "More services"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(isIndustryService ? siblingIndustry : otherCoreServices).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="reveal group block bg-white p-8 hover:bg-[#EEEDE9] transition-colors duration-250 rounded-sm"
              >
                <p className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/55 mb-3 group-hover:text-[#0A0A0A]/50 transition-colors">{s.industryName || "Service"}</p>
                <p className="font-sans font-light text-[#0A0A0A] text-xl md:text-2xl tracking-tight mb-2 group-hover:opacity-70 transition-opacity">{s.name}</p>
                <p className="font-sans text-xs text-[#0A0A0A]/60">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-8 reveal">Start your project</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-white mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", maxWidth: "18ch" }}
          >
            Ready to work together?
          </h2>
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
