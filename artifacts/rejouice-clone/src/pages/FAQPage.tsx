import React, { useEffect, useRef, useState } from "react";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "wouter";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type FAQ = { q: string; a: string };
type Section = { label: string; faqs: FAQ[] };

const sections: Section[] = [
  {
    label: "Working with us",
    faqs: [
      {
        q: "How does a typical project begin?",
        a: "Every project starts with a 30-minute discovery call — no pitch, no deck. We want to understand your challenge, your timeline, and whether we're the right team for you. If we are, we'll send a proposal within 48 hours.",
      },
      {
        q: "How long does a brand project take?",
        a: "Our Sprint engagement runs 6 weeks from kick-off to delivery. Partnership projects are ongoing. Most comprehensive brand builds — strategy, identity, and web — take 8–12 weeks. We'll give you a precise timeline in your proposal.",
      },
      {
        q: "Do you work with early-stage startups?",
        a: "Yes — a significant portion of our work is with seed to Series B founders. We know how to move fast, make decisions under uncertainty, and build brand foundations that scale as the company grows.",
      },
      {
        q: "How involved do I need to be?",
        a: "You'll need to be available for three to four structured sessions across the project — discovery, strategy review, and design presentation. Between those, we work independently. We don't need daily hand-holding, and we don't deliver surprise work.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes, always. We sign mutual NDAs before any project discussion. All work product is assigned to you upon final payment.",
      },
    ],
  },
  {
    label: "Pricing & payment",
    faqs: [
      {
        q: "How much does a brand project cost?",
        a: "Brand strategy starts at £12,000. A complete brand identity system starts at £28,000. Combined strategy, identity, and digital projects typically range from £55,000 to £120,000. We'll be specific in your proposal — no vague day-rate estimates.",
      },
      {
        q: "Do you work on a fixed fee or day rate?",
        a: "Fixed fee, always. You know exactly what you're getting and what it costs before we start. No hourly overruns, no scope creep surprises.",
      },
      {
        q: "What are your payment terms?",
        a: "50% on project kick-off, 50% on final delivery. For larger Partnership engagements, we split into three milestones. We accept bank transfer and major cards.",
      },
      {
        q: "Is there a retainer option?",
        a: "Yes. Our Partnership model is a monthly retainer that covers all five disciplines — brand, identity, digital, growth, and content — for an agreed monthly fee. Retainers start at £8,500 per month.",
      },
    ],
  },
  {
    label: "The work itself",
    faqs: [
      {
        q: "How many design directions will I see?",
        a: "One. We present one fully realised direction per phase — not three underdeveloped options for you to pick from. We commit to a creative point of view based on your strategy and back it with reasoning. If the direction genuinely misses the brief, we iterate.",
      },
      {
        q: "Who actually does the work?",
        a: "The senior team you meet in the first call. No juniors, no outsourcing, no bait and switch. Every project has a named strategist, a named creative director, and a named developer (if applicable).",
      },
      {
        q: "Do you do web development as well as design?",
        a: "Yes — full-stack. We build in React, Next.js, Webflow, and Framer depending on your requirements. Our technical team handles everything from architecture to deployment.",
      },
      {
        q: "What file formats do I receive?",
        a: "Everything. Vector files (AI, SVG), print-ready PDFs, web-optimised assets, brand guidelines in PDF and Figma, and full source files. You own all assets outright — there are no licensing restrictions.",
      },
    ],
  },
  {
    label: "Partnerships & affiliates",
    faqs: [
      {
        q: "How does the affiliate programme work?",
        a: "You refer a client to Beyond. We close and deliver the project. You earn a commission — 20% for referral partners, 15–25% for KOL affiliates depending on volume. Commissions are paid within 14 days of project kick-off.",
      },
      {
        q: "Is there a minimum audience size to join the affiliate programme?",
        a: "No. We assess applications based on the quality and relevance of your audience, not the size. A newsletter with 2,000 highly relevant subscribers is more valuable to us than an account with 200,000 disengaged followers.",
      },
      {
        q: "Can I be an affiliate if I'm not in the creative industry?",
        a: "Yes. Some of our best-performing affiliates are startup advisors, VC associates, accelerator managers, and business coaches. If you advise businesses that need brand work, you're a great fit.",
      },
    ],
  },
];

function FAQItem({ q, a }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#0A0A0A]/8">
      <button
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans font-light text-[#0A0A0A] tracking-[-0.01em] leading-snug" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)" }}>
          {q}
        </span>
        <span className="shrink-0 mt-1 text-[#0A0A0A]/35 group-hover:text-[#0A0A0A] transition-colors duration-200">
          {open ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </button>
      {open && (
        <p className="font-sans text-sm md:text-[15px] font-light text-[#0A0A0A]/55 leading-[1.75] pb-7 max-w-2xl">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQPage() {
  const allFaqs = sections.flatMap((s) => s.faqs);
  useSeoMeta({
    title: "FAQ | Beyond®",
    description: "Common questions about working with Beyond — our process, pricing models, timelines, and what to expect from a Retainer or Project engagement.",
    path: "/faq",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq" },
    ],
    faqs: allFaqs,
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

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">Frequently Asked Questions</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Questions,<br />answered.
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed">
          Everything you need to know before starting a project with Beyond. If something's missing,{" "}
          <a href="mailto:hello@beyondbasics.studio" className="text-[#0A0A0A] underline underline-offset-4">just ask</a>.
        </p>
      </section>

      {/* ── FAQ sections ─────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col gap-16">
          {sections.map((section) => (
            <div key={section.label} className="reveal">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">{section.label}</p>
              <div>
                {section.faqs.map((faq) => (
                  <FAQItem key={faq.q} {...faq} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Still have questions ─────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/35 mb-8 reveal">Still unsure?</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.03em] leading-[1.02] text-white mb-8"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)", maxWidth: "20ch" }}
          >
            We're a real team of real people. Ask us anything.
          </h2>
          <div className="reveal flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-white/65 border border-white/12 px-6 py-3.5 rounded-sm hover:bg-white/8 hover:text-white transition-all duration-250"
            >
              Get in touch <ArrowUpRight size={12} strokeWidth={1.5} />
            </Link>
            <a
              href="mailto:hello@beyondbasics.studio"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-white/35 border border-white/6 px-6 py-3.5 rounded-sm hover:bg-white/4 hover:text-white/65 transition-all duration-250"
            >
              hello@beyondbasics.studio
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
