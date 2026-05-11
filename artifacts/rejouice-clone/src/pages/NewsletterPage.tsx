import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSeoMeta } from "@/hooks/useSeoMeta";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMG = "https://cdn.sanity.io/images/zksivtxz/production/28820f9c8e82e134dc7dd7d7e403da3559edcb62-1080x1080.jpg";

const issues = [
  {
    num: "012",
    title: "Why most rebrands fail before they launch",
    date: "April 2026",
    teaser: "The single most common reason a rebrand gets watered down, delayed, or quietly shelved — and how to structure the process to avoid it.",
    tag: "Strategy",
  },
  {
    num: "011",
    title: "The three things an awards-winning website actually has in common",
    date: "March 2026",
    teaser: "After 50+ international awards, we looked at what the projects had in common. The answer wasn't what we expected.",
    tag: "Craft",
  },
  {
    num: "010",
    title: "How to brief a design agency (most brands get this wrong)",
    date: "February 2026",
    teaser: "The brief is where great projects start and mediocre ones are predetermined. A practical guide to writing one that actually helps.",
    tag: "Process",
  },
  {
    num: "009",
    title: "Brand equity: the asset most CFOs don't know how to measure",
    date: "January 2026",
    teaser: "Brand equity shows up in pricing power, retention, and acquisition cost — but most finance teams can't point to it. Here's how to change that.",
    tag: "Strategy",
  },
  {
    num: "008",
    title: "The problem with 'minimalist' brand design",
    date: "December 2025",
    teaser: "Minimalism as a default is the most common form of creative cowardice in brand design today. A strong opinion on where the category is going wrong.",
    tag: "Craft",
  },
  {
    num: "007",
    title: "SaaS brand identity: why most product companies get it backwards",
    date: "November 2025",
    teaser: "Most SaaS brands design the marketing site first and the product UI second. This is the wrong order — and it shows.",
    tag: "Digital",
  },
];

const tagColors: Record<string, string> = {
  Strategy: "bg-[#0A0A0A]/8 text-[#0A0A0A]/60",
  Craft: "bg-[#F5F4F0] text-[#0A0A0A]/60",
  Process: "bg-[#0A0A0A]/6 text-[#0A0A0A]/60",
  Digital: "bg-[#F5F4F0] text-[#0A0A0A]/60",
};

const whatToExpect = [
  { label: "Frequency", value: "Once a month, reliably." },
  { label: "Length", value: "One focused piece of thinking — not a digest." },
  { label: "Tone", value: "Direct. Opinionated. No fluff." },
  { label: "Topics", value: "Brand strategy, visual identity, digital experience, and growth." },
  { label: "Promotions", value: "None. We don't sell ads or pitch our services in every issue." },
];

export default function NewsletterPage() {
  useSeoMeta({
    title: "Newsletter | Beyond®",
    description: "The Beyond® newsletter — one original piece of thinking on brand strategy, identity, and growth. Monthly. No spam. Unsubscribe anytime.",
    path: "/newsletter",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Newsletter", path: "/newsletter" },
    ],
  });

  const pageRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
      gsap.from(".issue-card", {
        opacity: 0, y: 32, duration: 0.9, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".issues-section", start: "top 80%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero + signup ─────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-0 md:pt-24">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">The Beyond Newsletter</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-24 md:pb-32">
          <div>
            <h1
              className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
              style={{ fontSize: "clamp(2.8rem, 6vw, 7rem)" }}
            >
              One idea.<br />Once a month.<br />No noise.
            </h1>
            <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-md leading-relaxed mb-10">
              A monthly essay on brand strategy, creative direction, and building companies that people genuinely choose. Written by the team that built 17 category-leading brands.
            </p>

            {subscribed ? (
              <div className="bg-[#F5F4F0] p-6 rounded-sm max-w-md">
                <p className="font-sans text-sm text-[#0A0A0A]">You're subscribed. First issue hits your inbox next month.</p>
                <p className="font-sans text-xs text-[#0A0A0A]/40 mt-2">Check your spam folder if you don't see it.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md">
                <label className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 block mb-4">
                  Subscribe — no spam, unsubscribe anytime
                </label>
                <div className="flex items-center gap-0 border border-[#0A0A0A]/15 focus-within:border-[#0A0A0A]/50 transition-colors duration-200">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-transparent font-sans text-sm text-[#0A0A0A] placeholder:text-[#0A0A0A]/25 outline-none px-4 py-3.5"
                  />
                  <button
                    type="submit"
                    className="bg-[#0A0A0A] text-white font-sans text-[11px] uppercase tracking-widest px-6 py-3.5 hover:bg-[#0A0A0A]/80 transition-colors duration-200 shrink-0"
                  >
                    Subscribe →
                  </button>
                </div>
                <p className="font-sans text-[11px] text-[#0A0A0A]/30 mt-3">
                  Joining {" "}
                  <span className="text-[#0A0A0A]/50">founders, CMOs, and designers</span>
                  {" "} who read it every month.
                </p>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-2">What to expect</p>
            {whatToExpect.map(({ label, value }) => (
              <div key={label} className="flex gap-6 py-4 border-t border-[#0A0A0A]/8 first:border-0 first:pt-0">
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-[#0A0A0A]/30 w-24 shrink-0 pt-0.5">{label}</span>
                <span className="font-sans text-sm text-[#0A0A0A]/70 leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-0">
        <div className="w-full aspect-[21/6] overflow-hidden rounded-sm bg-[#111]">
          <img
            src={HERO_IMG}
            alt="Beyond studio — brand thinking"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* ── Past issues ───────────────────────────────────────────────────────── */}
      <section className="issues-section py-24 md:py-32 bg-[#F5F4F0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-12">Past issues</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {issues.map((issue) => (
              <div key={issue.num} className="issue-card bg-white p-8 flex flex-col gap-5 rounded-sm group hover:bg-[#F5F4F0] transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/25">Issue {issue.num}</span>
                  <span className={`font-sans text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${tagColors[issue.tag] || tagColors["Strategy"]}`}>
                    {issue.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-light text-[#0A0A0A] leading-snug mb-3" style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}>
                    {issue.title}
                  </h3>
                  <p className="font-sans text-sm text-[#0A0A0A]/45 leading-relaxed">{issue.teaser}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#0A0A0A]/8">
                  <span className="font-sans text-xs text-[#0A0A0A]/30">{issue.date}</span>
                  <span className="font-sans text-xs text-[#0A0A0A]/30 group-hover:text-[#0A0A0A]/60 transition-colors">
                    Subscribers only ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-[#0A0A0A]/35 mt-6 text-center">
            Past issues are exclusive to subscribers. Subscribe above to get the archive link.
          </p>
        </div>
      </section>

      {/* ── Journal crosslink ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8 reveal">Also worth reading</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <h2
              className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A]"
              style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "22ch" }}
            >
              The journal — our longer-form brand thinking.
            </h2>
            <div className="reveal">
              <p className="font-sans text-sm text-[#0A0A0A]/50 leading-relaxed mb-6 max-w-sm">
                The Beyond Journal is where we publish longer essays, case study breakdowns, and deep thinking on brand strategy — all freely accessible.
              </p>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 border-b border-[#0A0A0A]/20 pb-px hover:text-[#0A0A0A] hover:border-[#0A0A0A]/60 transition-colors"
              >
                <span>Browse the journal</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
