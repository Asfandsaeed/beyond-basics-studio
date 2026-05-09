import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { posts } from "@/data/journal";
import { industryCategories, industries } from "@/data/industries";
import Loader from "@/components/Loader";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = projects.slice(0, 3);
const featuredPosts = posts.slice(0, 3);

const services = [
  {
    num: "01",
    name: "Brand Strategy",
    tagline: "Clarity before creation.",
    desc: "We diagnose where your brand stands and chart the path to where it needs to go — sharp positioning, differentiated narrative, and a roadmap to lead your category.",
  },
  {
    num: "02",
    name: "Brand Identity",
    tagline: "Identity that earns attention.",
    desc: "We design brands that stand apart. Visual identity, typography, motion, and tone — every element purpose-built to make your brand unmistakable.",
  },
  {
    num: "03",
    name: "Digital Experience",
    tagline: "Websites that convert and inspire.",
    desc: "We design and build digital products that feel as premium as the brands they represent — from landing pages to full product platforms.",
  },
  {
    num: "04",
    name: "Growth Marketing",
    tagline: "Brand-led growth that compounds.",
    desc: "We build systems that turn your brand into a growth engine. Strategy, creative, and distribution — aligned to drive results that last.",
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });

      gsap.utils.toArray<Element>(".reveal-fast").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            delay: (i % 4) * 0.07,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      // Hero entry
      gsap.from(".hero-wordmark", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from(".hero-meta > *", {
        opacity: 0,
        y: 16,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.1,
      });
    }, pageRef);

    return () => ctx.revert();
  }, [loaded]);

  return (
    <div ref={pageRef} className="bg-background text-foreground">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <div className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>

        {/* ─────────────────────────────────────────────────────────────────────
            HERO
            Dark full-screen. The "beyond" wordmark is the brand's north star.
        ───────────────────────────────────────────────────────────────────── */}
        <section
          className="relative w-full min-h-screen flex flex-col bg-[#0A0A0A] text-white overflow-hidden"
          data-testid="hero-section"
        >
          {/* Wordmark — fills the vertical space */}
          <div className="flex-1 flex flex-col justify-center overflow-hidden">
            <h1
              className="hero-wordmark font-display font-bold lowercase text-white select-none w-full leading-none"
              style={{
                fontSize: "clamp(72px, 24.5vw, 420px)",
                letterSpacing: "-0.03em",
                lineHeight: 0.85,
              }}
              data-testid="hero-wordmark"
            >
              beyond
            </h1>
          </div>

          {/* Tagline strip */}
          <div className="px-6 md:px-10 py-8 border-t border-white/10">
            <p className="font-sans text-base md:text-xl font-light text-white/60 max-w-xl leading-snug">
              Creative growth agency for the world's most ambitious brands.
            </p>
          </div>

          {/* Bottom meta bar */}
          <div className="hero-meta px-6 md:px-10 pb-10 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-5 md:gap-10">
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30">
                Est. 2019
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30">
                San Francisco
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 hidden md:inline">
                Strategy · Design · Performance
              </span>
            </div>
            <span className="font-sans text-white/25 text-base select-none" aria-hidden="true">↓</span>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            SELECTED WORK
            Three featured projects from our portfolio. Each one a case study
            in turning ambition into a brand that leads its category.
        ───────────────────────────────────────────────────────────────────── */}
        <section className="bg-[#F5F4F0] py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            {/* Section intro */}
            <div className="reveal mb-16 md:mb-28 grid md:grid-cols-[1fr_1fr] gap-10 md:gap-20 items-end">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-7">
                  Selected Work
                </p>
                <h2
                  className="font-sans font-light tracking-[-0.025em] leading-[1.05]"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}
                >
                  Brands that don't just look good — they change how categories compete.
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-sans text-base md:text-lg font-light text-foreground/50 leading-relaxed">
                  We've completed 90+ brand projects across every major industry. Below are three we're most proud of — each one built from zero, each one now leading its market.
                </p>
                <p className="font-sans text-sm text-foreground/35 font-light leading-relaxed">
                  We don't take on every brief. We take on the ones where we genuinely believe we can change the outcome.
                </p>
              </div>
            </div>

            {/* Featured project cards — full-bleed stacked */}
            <div className="flex flex-col gap-2">
              {featuredProjects.map((project, i) => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  className="reveal group relative overflow-hidden bg-[#0A0A0A] block"
                  style={{ height: "min(68vh, 580px)" }}
                  data-cursor-hover
                  data-testid={`home-project-${project.id}`}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-700"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                    <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/50">
                      {project.category} · {project.year}
                    </span>
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <h3
                          className="font-sans font-light text-white leading-[1.05] tracking-[-0.025em] mb-3"
                          style={{ fontSize: "clamp(2rem, 5.5vw, 6rem)" }}
                        >
                          {project.title}
                        </h3>
                        <p className="font-sans text-white/55 text-base md:text-lg font-light max-w-xl leading-snug">
                          {project.tagline}
                        </p>
                      </div>
                      <span
                        className="font-sans text-white/40 text-xl translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shrink-0"
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Work CTA */}
            <div className="reveal mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-10 border-t border-foreground/10">
              <p className="font-sans text-base text-foreground/40 font-light max-w-sm leading-relaxed">
                Twenty-four completed projects — every one built with the same obsessive attention to craft.
              </p>
              <Link
                href="/work"
                className="shrink-0 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.18em] text-foreground border border-foreground/25 px-10 py-5 hover:bg-foreground hover:text-background transition-colors duration-300"
                data-testid="home-cta-work"
              >
                <span>View all projects</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            SERVICES
            Four disciplines that live under one roof — so your strategy,
            identity, website, and growth marketing always speak the same language.
        ───────────────────────────────────────────────────────────────────── */}
        <section className="bg-[#0A0A0A] text-white py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            {/* Section intro */}
            <div className="reveal mb-16 md:mb-28 grid md:grid-cols-[1fr_1fr] gap-10 md:gap-20 items-end">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/40 mb-7">
                  Services
                </p>
                <h2
                  className="font-sans font-light tracking-[-0.025em] leading-[1.05] text-white"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}
                >
                  Four disciplines. One obsession: doing it right.
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-sans text-base md:text-lg font-light text-white/50 leading-relaxed">
                  Most agencies hand off to specialists after the strategy phase. We don't. Every discipline lives in-house, which means your brand, website, and growth engine are always aligned.
                </p>
                <p className="font-sans text-sm text-white/30 font-light leading-relaxed">
                  We built this way on purpose — because the best work happens when the people who write the strategy also design the identity and build the website.
                </p>
              </div>
            </div>

            {/* Service rows */}
            <div className="flex flex-col border-t border-white/10">
              {services.map((service) => (
                <div
                  key={service.num}
                  className="reveal flex flex-col md:flex-row md:items-start gap-4 md:gap-0 py-9 md:py-12 border-b border-white/10"
                >
                  <span className="font-sans text-[11px] tracking-[0.18em] text-white/20 md:w-20 shrink-0 pt-1">
                    {service.num}
                  </span>
                  <div className="flex-1 grid md:grid-cols-[1fr_1fr] gap-4 md:gap-16 items-start">
                    <div>
                      <h3
                        className="font-sans font-light text-white tracking-[-0.02em] leading-none mb-2"
                        style={{ fontSize: "clamp(1.6rem, 2.75vw, 3rem)" }}
                      >
                        {service.name}
                      </h3>
                      <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mt-3">
                        {service.tagline}
                      </p>
                    </div>
                    <p className="font-sans text-sm md:text-base font-light text-white/40 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Services CTA */}
            <div className="reveal mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-10">
              <p className="font-sans text-base text-white/30 font-light max-w-sm leading-relaxed">
                Each service includes the full team — strategists, designers, and developers working together on your project.
              </p>
              <Link
                href="/services"
                className="shrink-0 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.18em] text-white border border-white/20 px-10 py-5 hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300"
                data-testid="home-cta-services"
              >
                <span>Explore all services</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            INDUSTRIES
            We've built brands across eight verticals. The rules for winning
            are different in every one — and we know them all.
        ───────────────────────────────────────────────────────────────────── */}
        <section className="bg-white py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            {/* Section intro */}
            <div className="reveal mb-16 md:mb-28 grid md:grid-cols-[1fr_1fr] gap-10 md:gap-20 items-end">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-7">
                  Industries
                </p>
                <h2
                  className="font-sans font-light tracking-[-0.025em] leading-[1.05]"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}
                >
                  Eight verticals. One standard: lead your category.
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 leading-relaxed">
                  Whether you're a SaaS company scaling past $10M ARR or a luxury brand redefining its market — the work we do is tuned to what your industry actually demands.
                </p>
                <p className="font-sans text-sm text-[#0A0A0A]/30 font-light leading-relaxed">
                  Industry knowledge isn't a nice-to-have. It's the difference between brand strategy that feels generic and strategy that changes how a category competes.
                </p>
              </div>
            </div>

            {/* Industry category tags */}
            <div className="reveal mb-16 md:mb-20">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/30 mb-6">
                We work across
              </p>
              <div className="flex flex-wrap gap-2.5">
                {industryCategories.map((cat) => (
                  <Link
                    key={cat}
                    href="/industries"
                    className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/50 border border-[#0A0A0A]/12 px-5 py-3 hover:border-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-all duration-200"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Two featured industry deep-dives */}
            <div className="reveal grid md:grid-cols-2 gap-px bg-[#0A0A0A]/8 mb-14">
              {industries.slice(0, 2).map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.id}`}
                  className="group bg-white p-10 md:p-14 flex flex-col gap-7 hover:bg-[#F5F4F0] transition-colors duration-300"
                  data-cursor-hover
                >
                  <div className="flex items-start justify-between">
                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/30">
                      {industry.category}
                    </p>
                    <span className="font-sans text-[#0A0A0A]/20 group-hover:text-[#0A0A0A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-lg">
                      ↗
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-sans font-light tracking-[-0.02em] leading-[1.1] mb-3"
                      style={{ fontSize: "clamp(1.75rem, 2.5vw, 3rem)" }}
                    >
                      {industry.name}
                    </h3>
                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35">
                      {industry.tagline}
                    </p>
                  </div>
                  <p className="font-sans text-sm font-light text-[#0A0A0A]/40 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {industry.services.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/30 border border-[#0A0A0A]/10 px-2.5 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            {/* Industries CTA */}
            <div className="reveal flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-10 border-t border-[#0A0A0A]/10">
              <p className="font-sans text-base text-[#0A0A0A]/40 font-light max-w-sm leading-relaxed">
                Every industry has its own rules for winning. We know them — and we know how to break them correctly.
              </p>
              <Link
                href="/industries"
                className="shrink-0 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A] border border-[#0A0A0A]/20 px-10 py-5 hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300"
                data-testid="home-cta-industries"
              >
                <span>Browse all industries</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            ABOUT
            We are not a typical agency. We're a collective built around one
            conviction: that great brands change how companies grow.
        ───────────────────────────────────────────────────────────────────── */}
        <section className="bg-[#0A0A0A] text-white py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <p className="reveal font-sans text-[11px] uppercase tracking-[0.18em] text-white/40 mb-10">
              Who We Are
            </p>

            {/* Manifesto statement */}
            <p
              className="reveal font-sans font-light tracking-[-0.025em] leading-[1.1] text-white mb-16 md:mb-28"
              style={{ fontSize: "clamp(2rem, 5.5vw, 6rem)", maxWidth: "16ch" }}
            >
              Great brands are built with conviction, not consensus.
            </p>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-px bg-white/10 mb-16 md:mb-24">
              {[
                { value: "2019", label: "Year founded" },
                { value: "31", label: "People on the team" },
                { value: "90+", label: "Brand projects completed" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0A0A0A] px-6 py-10 md:p-14 flex flex-col gap-3">
                  <span
                    className="font-sans font-light tracking-[-0.025em] text-white leading-none"
                    style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="reveal mb-12 md:mb-16 grid md:grid-cols-2 gap-10 md:gap-20">
              <p className="font-sans text-base md:text-xl font-light text-white/50 leading-relaxed">
                We are a collective of seasoned creatives, strategists, growth marketers, and technologists. Based in San Francisco, working with brands across the globe.
              </p>
              <p className="font-sans text-base font-light text-white/30 leading-relaxed">
                Every project gets our best people — not a junior team with oversight. We keep our client list deliberately short so we can go deep on every brief we accept.
              </p>
            </div>

            {/* About CTA */}
            <div className="reveal">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.18em] text-white border border-white/20 px-10 py-5 hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300"
                data-testid="home-cta-about"
              >
                <span>Get to know us</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            JOURNAL
            We write about what we learn in the work — strategy, process, and
            the brand questions nobody else seems to be asking.
        ───────────────────────────────────────────────────────────────────── */}
        <section className="bg-[#F5F4F0] py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            {/* Section intro */}
            <div className="reveal mb-16 md:mb-24 grid md:grid-cols-[1fr_1fr] gap-10 md:gap-20 items-end">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40 mb-7">
                  Journal
                </p>
                <h2
                  className="font-sans font-light tracking-[-0.025em] leading-[1.05]"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}
                >
                  Ideas from inside the work.
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-sans text-base md:text-lg font-light text-foreground/50 leading-relaxed">
                  We write about what we learn on every project — brand strategy, process, and the questions nobody else is asking. No fluff, no thought-leadership theatre.
                </p>
                <p className="font-sans text-sm text-foreground/30 font-light leading-relaxed">
                  If it didn't come from a real project, we don't write about it.
                </p>
              </div>
            </div>

            {/* Journal post rows */}
            <div className="flex flex-col divide-y divide-foreground/10 border-t border-foreground/10 mb-14">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/journal/${post.id}`}
                  className="reveal group flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-9 md:py-12 hover:opacity-60 transition-opacity duration-300"
                  data-cursor-hover
                >
                  {/* Category */}
                  <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/35 md:w-40 shrink-0 pt-1">
                    {post.category}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="font-sans font-light tracking-[-0.02em] leading-[1.15] text-foreground mb-3"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.85rem)" }}
                    >
                      {post.title}
                    </h3>
                    <p className="font-sans text-sm font-light text-foreground/40 leading-relaxed line-clamp-2 max-w-2xl">
                      {post.subtitle}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-sans text-[10px] uppercase tracking-widest text-foreground/30 border border-foreground/10 px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Meta + arrow */}
                  <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 md:w-28 shrink-0">
                    <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/30">
                      {post.date}
                    </span>
                    <span className="font-sans text-[11px] text-foreground/25">
                      {post.readTime}
                    </span>
                    <span className="font-sans text-foreground/25 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-auto md:mt-2">
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Journal CTA */}
            <div className="reveal flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <p className="font-sans text-base text-foreground/40 font-light max-w-sm leading-relaxed">
                New ideas published regularly. Every article is free and always will be.
              </p>
              <Link
                href="/journal"
                className="shrink-0 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.18em] text-foreground border border-foreground/25 px-10 py-5 hover:bg-foreground hover:text-background transition-colors duration-300"
                data-testid="home-cta-journal"
              >
                <span>Read the journal</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            CONTACT CTA
            The work starts with a conversation. Tell us what you're building.
        ───────────────────────────────────────────────────────────────────── */}
        <section className="bg-[#0A0A0A] text-white py-32 md:py-48 min-h-[80vh] flex flex-col justify-center">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <p className="reveal font-sans text-[11px] uppercase tracking-[0.18em] text-white/40 mb-10">
              Let's Talk
            </p>

            <h2
              className="reveal font-sans font-light tracking-[-0.025em] leading-[1.05] text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 8rem)", maxWidth: "14ch" }}
            >
              Ready to build something that lasts?
            </h2>

            <p className="reveal font-sans text-base md:text-xl font-light text-white/45 leading-relaxed max-w-xl mb-20 md:mb-28">
              The work starts with a conversation. Tell us what you're building — we'll tell you if we're the right team for it.
            </p>

            {/* Contact columns */}
            <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-white/10 mb-20">
              <div className="md:pr-16">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-4">
                  New Business
                </p>
                <a
                  href="mailto:hello@beyond.com"
                  className="font-sans text-xl font-light text-white hover:text-white/50 transition-colors duration-200"
                >
                  hello@beyond.com
                </a>
              </div>
              <div className="md:px-16">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-4">
                  Join the Team
                </p>
                <a
                  href="mailto:jobs@beyond.com"
                  className="font-sans text-xl font-light text-white hover:text-white/50 transition-colors duration-200"
                >
                  jobs@beyond.com
                </a>
              </div>
              <div className="md:pl-16">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-4">
                  Find Us
                </p>
                <p className="font-sans text-xl font-light text-white/55 leading-snug">
                  San Francisco<br />Paris · New York
                </p>
              </div>
            </div>

            {/* Final CTA button */}
            <div className="reveal">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.18em] text-white border border-white/20 px-12 py-6 hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300"
                data-testid="home-cta-contact"
              >
                <span>Start a project</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
