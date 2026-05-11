import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { useSeoMeta } from "@/hooks/useSeoMeta";


const factors = [
  {
    label: "Scope",
    body: "A naming and positioning project has a different scope than a full rebrand with identity, guidelines, website, and motion system. We price to the actual scope, not to a day rate.",
  },
  {
    label: "Complexity",
    body: "A single-market DTC brand has different complexity than a global fintech platform with regulatory constraints, multiple sub-brands, and a product UI to align. Complexity is priced accordingly.",
  },
  {
    label: "Timeline",
    body: "Compressed timelines require more parallel resource. A 4-week sprint and a 12-week full rebrand of equivalent scope carry different resource commitments.",
  },
  {
    label: "Engagement model",
    body: "A Sprint (6-week fixed scope) and a Partnership (ongoing embedded relationship) are structured and priced differently. Both are transparent about what's included.",
  },
];

const engagements = [
  {
    num: "01",
    name: "Sprint",
    duration: "6 weeks",
    desc: "A focused, fixed-scope engagement for companies that need a specific output: a brand identity, a positioning, a website, or a targeted growth system. Defined deliverables, defined timeline, defined price.",
    right: [
      "You have a specific, well-defined problem to solve",
      "You need momentum without an ongoing commitment",
      "You're at a growth inflection point (funding, launch, pivot)",
      "You want to validate the relationship before a longer engagement",
    ],
    img: "https://cdn.sanity.io/images/zksivtxz/production/28820f9c8e82e134dc7dd7d7e403da3559edcb62-1080x1080.jpg",
  },
  {
    num: "02",
    name: "Partnership",
    duration: "Ongoing",
    desc: "An embedded creative relationship for companies ready to invest in brand-led growth as an ongoing strategic commitment. We become a true extension of the founding team — not a vendor.",
    right: [
      "You want a creative partner, not just a supplier",
      "Your brand needs ongoing strategic and creative work",
      "You want direct access to senior creative leadership at all times",
      "You're building a category-leading brand over the long term",
    ],
    img: "https://cdn.sanity.io/images/zksivtxz/production/f81eb671f4ffc4eee3da98dfdbb7f8c8d895800b-1027x1027.jpg",
  },
];

const faqItems = [
  {
    q: "Do you publish your prices?",
    a: "We don't list fixed prices because every project scope is different. What we do: provide a detailed proposal with a transparent breakdown within 3 working days of a discovery call. You'll know exactly what you're buying before committing.",
  },
  {
    q: "What's the minimum project size?",
    a: "We work with companies at inflection points — from well-funded startups to global enterprises. Our Sprint model is designed to be accessible for companies where the investment represents a meaningful commitment. We're transparent about this in our first conversation.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. For project engagements, we typically work with a 3-stage payment structure: a deposit at project kickoff, a milestone payment at concept approval, and a final payment at delivery. Partnership retainers are invoiced monthly.",
  },
  {
    q: "What's included in a Sprint?",
    a: "Scope varies by Sprint type, but every Sprint includes: a defined set of deliverables, a fixed timeline, one senior creative lead accountable for the output quality, and a delivery session where we present and walk through everything produced.",
  },
  {
    q: "How do you handle scope changes during a project?",
    a: "We document scope clearly at the outset and flag scope change requests immediately. Minor additions within the spirit of the project we absorb. Material scope changes are quoted separately and agreed before work begins — no surprise invoices.",
  },
  {
    q: "Can we start with a smaller engagement and expand?",
    a: "Yes, and this is often the right approach. A brand strategy sprint is a natural precursor to an identity project. A brand identity project is a natural precursor to a website build. Many long-term client relationships started with a single focused sprint.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    gsap.to(bodyRef.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.45,
      ease: "power3.inOut",
    });
  }, [open]);

  return (
    <div className="border-t border-[#0A0A0A]/10 last:border-b">
      <button
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        onClick={() => setOpen((p) => !p)}
      >
        <span className="font-sans font-light text-[#0A0A0A] text-base md:text-lg leading-snug">{q}</span>
        <span
          className="text-[#0A0A0A]/60 text-lg shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div ref={bodyRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <p className="font-sans text-sm text-[#0A0A0A]/55 leading-relaxed pb-6 max-w-2xl">{a}</p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  useSeoMeta({
    title: "Pricing | Beyond®",
    description: "How Beyond structures and prices creative engagements — two models (Sprint and Partnership), transparent process, no day rates. Request a proposal for your project.",
    path: "/pricing",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Pricing", path: "/pricing" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Brand Sprint",
        description: "A focused, fixed-scope brand transformation engagement delivered over a defined sprint period. Fixed price, no day rates.",
        provider: { "@type": "Organization", name: "Beyond®", url: "https://beyondbasics.studio" },
        url: "https://beyondbasics.studio/pricing",
        serviceType: "Creative Brand Sprint",
        areaServed: "Worldwide",
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Brand Partnership",
        description: "An ongoing retainer engagement — Beyond embedded as your creative growth partner. Monthly, cancel with 30 days notice.",
        provider: { "@type": "Organization", name: "Beyond®", url: "https://beyondbasics.studio" },
        url: "https://beyondbasics.studio/pricing",
        serviceType: "Creative Growth Retainer",
        areaServed: "Worldwide",
      },
    ],
  });

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-8">Pricing</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Transparent about<br />how we work.
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed">
          We don't publish fixed prices — every project scope is different. What we do publish is exactly how we think about pricing, what's included, and what to expect from the proposal process.
        </p>
      </section>

      {/* ── What drives the price ──────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-10 reveal">How pricing works</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "22ch" }}
          >
            Priced to scope. Never to a day rate.
          </h2>

          <div>
            {factors.map(({ label, body }) => (
              <div
                key={label}
                className="reveal grid grid-cols-1 md:grid-cols-[1fr_1fr_1.4fr] py-10 md:py-12 border-t border-[#0A0A0A]/8 last:border-b"
              >
                <p className="font-sans font-light text-[#0A0A0A] text-base md:text-lg leading-snug mb-4 md:mb-0">{label}</p>
                <div className="hidden md:block" />
                <p className="font-sans text-sm md:text-[15px] font-light text-[#0A0A0A]/55 leading-[1.75] max-w-lg">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement models ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-10 reveal">Engagement models</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "22ch" }}
          >
            Two ways to work with us.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engagements.map((e) => (
              <div key={e.name} className="reveal bg-[#F5F4F0] overflow-hidden rounded-sm">
                <div className="aspect-[16/7] overflow-hidden">
                  <img src={e.img} alt={e.name} className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 mb-1">{e.num}</p>
                      <h3 className="font-sans font-light text-[#0A0A0A] text-3xl md:text-4xl tracking-tight">{e.name}</h3>
                    </div>
                    <span className="font-sans text-xs text-[#0A0A0A]/60 uppercase tracking-widest mt-2">{e.duration}</span>
                  </div>
                  <p className="font-sans text-sm text-[#0A0A0A]/60 leading-relaxed mb-8 max-w-sm">{e.desc}</p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#0A0A0A]/60 mb-4">Right for you if</p>
                  <ul className="space-y-2">
                    {e.right.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span className="text-[#0A0A0A]/55 shrink-0 mt-0.5">—</span>
                        <span className="font-sans text-sm text-[#0A0A0A]/60 leading-snug">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-10 reveal">Common questions</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-white mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "24ch" }}
          >
            Questions about cost, scope, and process.
          </h2>
          <div className="max-w-3xl">
            {faqItems.map((item) => (
              <div key={item.q} className="border-t border-white/10 last:border-b">
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
                  <span className="font-sans font-light text-white text-base md:text-lg leading-snug">{item.q}</span>
                  <span className="text-white/60 text-lg shrink-0 transition-transform duration-300">+</span>
                </button>
                <div style={{ height: 0, overflow: "hidden", opacity: 0 }}>
                  <p className="font-sans text-sm text-white/50 leading-relaxed pb-6 max-w-2xl">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-8 reveal">Get a proposal</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", maxWidth: "18ch" }}
          >
            Ready to talk about your project?
          </h2>
          <p className="reveal font-sans text-base text-[#0A0A0A]/50 font-light leading-relaxed max-w-md mb-10">
            Share a brief outline of what you're working on. We'll get back within one business day with an initial response — and a detailed proposal within three.
          </p>
          <Link
            href="/contact"
            className="reveal inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-sans text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#0A0A0A]/80 transition-colors duration-300"
          >
            <span>Start a conversation</span>
            <span>↗</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
