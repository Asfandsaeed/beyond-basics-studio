import React, { useEffect, useRef, useState } from "react";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPin, Clock, Zap, Globe, Heart, TrendingUp, BookOpen, Shield, Sun } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  { title: "Senior Brand Strategist",      location: "San Francisco / Remote", type: "Full-time", dept: "Strategy" },
  { title: "Creative Director",             location: "New York / Remote",       type: "Full-time", dept: "Creative" },
  { title: "Lead Creative Developer",       location: "London / Remote",         type: "Full-time", dept: "Technology" },
  { title: "Growth Marketing Lead",         location: "Remote",                  type: "Full-time", dept: "Growth" },
  { title: "Brand Identity Designer",       location: "San Francisco / Remote",  type: "Full-time", dept: "Design" },
  { title: "Content & Editorial Director",  location: "Remote",                  type: "Full-time", dept: "Content" },
  { title: "UX Strategy Lead",              location: "London / Remote",         type: "Full-time", dept: "Digital" },
];

const benefits = [
  { Icon: Globe,      label: "Remote-first",          body: "Work from anywhere. We operate across San Francisco, New York, and London — and everywhere in between." },
  { Icon: TrendingUp, label: "Equity + comp",         body: "Competitive salary benchmarked at the top 25% of the market, plus meaningful equity in the company." },
  { Icon: BookOpen,   label: "$2,500 learning budget", body: "Spend it on courses, conferences, books, or anything that makes you sharper at your craft." },
  { Icon: Heart,      label: "35 days PTO",           body: "We believe rest is a prerequisite for great work. Take the time you need, genuinely." },
  { Icon: Shield,     label: "Full health coverage",  body: "Comprehensive medical, dental, and vision for you and your dependants — 100% covered." },
  { Icon: Sun,        label: "Annual team retreats",  body: "Once a year, the whole team gathers somewhere inspiring. Past retreats: Lisbon, Tokyo, and Oaxaca." },
  { Icon: Zap,        label: "Top-tier gear",         body: "Latest MacBook, premium desk setup allowance ($1,200), and any software you need to do your best work." },
  { Icon: Clock,      label: "Async-first culture",   body: "Fewer meetings, more deep work. We default to written communication and protect your focus time." },
];

const whyRows = [
  {
    label: "Work that matters.",
    body: "Every project we take on is a category-defining brand — a startup that will become the next household name, a company rewriting its industry. The work you do here doesn't end up in a drawer.",
  },
  {
    label: "The best people, directly.",
    body: "No layers, no bureaucracy. You work directly alongside founders, senior designers, seasoned strategists, and world-class developers. There are no account teams sitting between you and the interesting problems.",
  },
  {
    label: "Career trajectory, not a job.",
    body: "Beyond is a place people come to grow fast. We invest heavily in each person's development — through mentorship, stretch assignments, learning budgets, and genuine ownership of work.",
  },
  {
    label: "A culture of honest excellence.",
    body: "We don't confuse activity with achievement. We hold each other to high standards because we respect each other enough to expect the best — and we celebrate when we get it right.",
  },
];

export default function CareersPage() {
  useSeoMeta({
    title: "Careers | Beyond®",
    description: "Join a collective of world-class creatives. Remote-first, senior-level, deeply collaborative. Open roles in design, strategy, and development.",
    path: "/careers",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "Senior Creative (Design / Strategy / Development)",
      description: "Join a collective of world-class creatives at Beyond®. Remote-first, senior-level, deeply collaborative work across brand strategy, identity, and web.",
      hiringOrganization: {
        "@type": "Organization",
        name: "Beyond®",
        sameAs: "https://beyondbasics.studio",
        logo: "https://beyondbasics.studio/favicon.svg",
      },
      jobLocation: {
        "@type": "Place",
        address: { "@type": "PostalAddress", addressCountry: "US" },
      },
      jobLocationType: "TELECOMMUTE",
      employmentType: "FULL_TIME",
      url: "https://beyondbasics.studio/careers",
      validThrough: "2027-01-01",
    },
  });
  const pageRef = useRef<HTMLDivElement>(null);
  const [applied, setApplied] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 87%" } }
        );
      });
      gsap.from(".page-hero-h", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out", delay: 0.1 });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-8">Careers at Beyond</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Build the future<br />of brand.
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed">
          We're a team of 31 — creatives, strategists, and technologists who believe great brands are the most powerful growth lever a company can have. Come build with us.
        </p>
      </section>

      {/* ── Why Beyond ───────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-10 reveal">Why Beyond</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "20ch" }}
          >
            The agency you'd design for yourself.
          </h2>

          {whyRows.map(({ label, body }) => (
            <div
              key={label}
              className="reveal grid grid-cols-1 md:grid-cols-[1fr_1fr_1.4fr] py-10 md:py-12 border-t border-[#0A0A0A]/8"
            >
              <p className="font-sans font-light text-[#0A0A0A] text-base md:text-lg leading-snug mb-4 md:mb-0">{label}</p>
              <div className="hidden md:block" />
              <p className="font-sans text-sm md:text-[15px] font-light text-[#0A0A0A]/55 leading-[1.75] max-w-lg">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-10 reveal">What you get</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "22ch" }}
          >
            Benefits built for real life.
          </h2>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {benefits.map(({ Icon, label, body }) => (
              <div key={label} className="group p-8 bg-[#F5F4F0] hover:bg-[#EEEDE9] transition-colors duration-250 rounded-sm flex flex-col gap-5">
                <div className="w-9 h-9 flex items-center justify-center text-[#0A0A0A]/60 group-hover:text-[#0A0A0A]/70 transition-colors duration-250">
                  <Icon size={18} strokeWidth={1.25} />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-[#0A0A0A] mb-2">{label}</p>
                  <p className="font-sans text-[13px] font-light text-[#0A0A0A]/50 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ───────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-10 reveal">Open Positions</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "22ch" }}
          >
            We hire for character. Skills can be learned.
          </h2>

          <div className="reveal flex flex-col gap-0">
            {roles.map((role) => (
              <div
                key={role.title}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-7 border-t border-[#0A0A0A]/8 hover:bg-[#EEEDE9] -mx-6 px-6 md:-mx-10 md:px-10 transition-colors duration-200 cursor-pointer"
                onClick={() => window.location.href = `mailto:jobs@beyondbasics.studio?subject=Application: ${role.title}`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                  <span
                    className="font-sans font-light text-[#0A0A0A] tracking-[-0.015em]"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
                  >
                    {role.title}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 bg-white px-3 py-1.5 rounded-sm w-fit">
                    {role.dept}
                  </span>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="flex items-center gap-1.5 font-sans text-xs text-[#0A0A0A]/60">
                    <MapPin size={12} strokeWidth={1.5} />{role.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-sans text-xs text-[#0A0A0A]/60">
                    <Clock size={12} strokeWidth={1.5} />{role.type}
                  </span>
                  <ArrowUpRight size={16} strokeWidth={1.5} className="text-[#0A0A0A]/55 group-hover:text-[#0A0A0A] transition-colors duration-200" />
                </div>
              </div>
            ))}
          </div>

          <p className="reveal mt-12 font-sans text-sm font-light text-[#0A0A0A]/60 max-w-lg leading-relaxed">
            Don't see your role? We're always interested in exceptional people.{" "}
            <a href="mailto:jobs@beyondbasics.studio" className="text-[#0A0A0A] underline underline-offset-4">
              Introduce yourself →
            </a>
          </p>
        </div>
      </section>

      {/* ── Hiring process ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-10 reveal">How we hire</p>
          <div className="reveal grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", step: "Apply", desc: "Send us your CV and a short note about what drives your best work. No cover letter templates." },
              { num: "02", step: "Intro call", desc: "A 30-minute conversation with a team lead — relaxed, honest, two-way. We answer your questions too." },
              { num: "03", step: "Craft review", desc: "A short paid task or portfolio review relevant to the role. We don't do unpaid test projects." },
              { num: "04", step: "Team meet", desc: "Meet two or three colleagues you'd work with closely. Then we make a decision — no prolonged waiting." },
            ].map(({ num, step, desc }) => (
              <div key={num} className="flex flex-col gap-4">
                <span className="font-sans text-[11px] text-[#0A0A0A]/55">{num}</span>
                <h3 className="font-sans text-xl font-light text-[#0A0A0A]">{step}</h3>
                <p className="font-sans text-sm font-light text-[#0A0A0A]/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-8 reveal">Ready to apply?</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.03em] leading-[1.02] text-white mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6.5rem)", maxWidth: "18ch" }}
          >
            Let's build something great together.
          </h2>
          <a
            href="mailto:jobs@beyondbasics.studio"
            className="reveal inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-white/65 border border-white/12 px-6 py-3.5 rounded-sm hover:bg-white/8 hover:text-white transition-all duration-250"
          >
            Send us your application <ArrowUpRight size={12} strokeWidth={1.5} />
          </a>
        </div>
      </section>

    </div>
  );
}
