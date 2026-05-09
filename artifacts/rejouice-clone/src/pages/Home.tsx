import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import {
  Target,
  Gem,
  Monitor,
  TrendingUp,
  Calendar,
  Users,
  Briefcase,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { projects } from "@/data/projects";
import { posts } from "@/data/journal";
import { industries } from "@/data/industries";
import Loader from "@/components/Loader";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ──────────────────────────────────────────────────────────────────
const featuredProjects = projects.slice(0, 3);
const featuredPosts    = posts.slice(0, 3);
const sliderIndustries = industries.filter((_,i) => [0,2,4,5,7,9,11,14].includes(i));

const ABOUT_IMG =
  "https://images.prismic.io/rejouice-2024/Z2GNNpbqstJ98mqU_6384a19b-fa1c-4ad1-aae0-e29e127ebeef_san-diego-office.jpg.jpg?auto=format,compress&w=1600";

const TEAM_IMG =
  "https://images.prismic.io/rejouice-2024/Z0csi5bqstJ970gh_-1x-11.jpg?auto=format,compress&w=1400";

const services = [
  {
    Icon: Target,
    name: "Brand Strategy",
    tagline: "Clarity before creation.",
    deliverables: ["Positioning", "Naming", "Brand Architecture", "Messaging"],
  },
  {
    Icon: Gem,
    name: "Brand Identity",
    tagline: "Identity that earns attention.",
    deliverables: ["Visual Identity", "Logo Design", "Motion Identity", "Guidelines"],
  },
  {
    Icon: Monitor,
    name: "Digital Experience",
    tagline: "Websites that convert and inspire.",
    deliverables: ["Web Design", "Web Development", "UX Strategy", "3D & Motion"],
  },
  {
    Icon: TrendingUp,
    name: "Growth Marketing",
    tagline: "Brand-led growth that compounds.",
    deliverables: ["Content Strategy", "Paid Creative", "SEO", "Email"],
  },
];

const stats = [
  { Icon: Calendar, value: "2019",  label: "Founded" },
  { Icon: Users,    value: "31",    label: "People on the team" },
  { Icon: Briefcase,value: "90+",   label: "Brand projects" },
  { Icon: MapPin,   value: "3",     label: "Global offices" },
];

// ─── Sub-components ────────────────────────────────────────────────────────

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`font-sans text-[11px] uppercase tracking-[0.18em] mb-7 ${light ? "text-white/40" : "text-foreground/40"}`}>
      {children}
    </p>
  );
}

function SectionHeading({ children, light = false, style }: { children: React.ReactNode; light?: boolean; style?: React.CSSProperties }) {
  return (
    <h2
      className={`font-sans font-light tracking-[-0.025em] leading-[1.07] ${light ? "text-white" : "text-foreground"}`}
      style={{ fontSize: "clamp(2rem, 4.5vw, 4.75rem)", ...style }}
    >
      {children}
    </h2>
  );
}

function CtaLink({ href, children, light = false, testId }: { href: string; children: React.ReactNode; light?: boolean; testId?: string }) {
  return (
    <Link
      href={href}
      data-testid={testId}
      className={`shrink-0 inline-flex items-center gap-2.5 font-sans text-[11px] uppercase tracking-[0.18em] border px-9 py-[17px] transition-colors duration-300 ${
        light
          ? "text-white border-white/25 hover:bg-white hover:text-[#0A0A0A]"
          : "text-foreground border-foreground/20 hover:bg-foreground hover:text-background"
      }`}
    >
      {children}
      <ArrowUpRight size={13} strokeWidth={1.5} />
    </Link>
  );
}

// ─── Industries Slider ─────────────────────────────────────────────────────

function IndustriesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      {/* Nav row */}
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/35">
          Drag or use arrows
        </p>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="w-10 h-10 flex items-center justify-center border border-foreground/15 text-foreground/50 hover:border-foreground/50 hover:text-foreground transition-colors duration-200"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="w-10 h-10 flex items-center justify-center border border-foreground/15 text-foreground/50 hover:border-foreground/50 hover:text-foreground transition-colors duration-200"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3" style={{ touchAction: "pan-y pinch-zoom" }}>
          {sliderIndustries.map((industry) => (
            <Link
              key={industry.id}
              href={`/industries/${industry.id}`}
              className="group relative shrink-0 overflow-hidden bg-[#0A0A0A] cursor-pointer"
              style={{ width: "clamp(260px, 28vw, 360px)", height: "clamp(340px, 42vw, 480px)" }}
            >
              <img
                src={industry.coverImage}
                alt={industry.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.04] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-between">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {industry.category}
                </span>
                <div>
                  <h3
                    className="font-sans font-light text-white tracking-[-0.02em] leading-[1.1] mb-2"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)" }}
                  >
                    {industry.name}
                  </h3>
                  <p className="font-sans text-xs text-white/50 leading-snug line-clamp-2 max-w-[22ch]">
                    {industry.tagline}
                  </p>
                </div>
              </div>
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={18} className="text-white" strokeWidth={1.5} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
      // Hero
      gsap.from(".hero-word", {
        y: 100, opacity: 0, duration: 1.6, ease: "power4.out", delay: 0.15,
      });
      gsap.from(".hero-sub > *", {
        opacity: 0, y: 14, stagger: 0.1, duration: 1, ease: "power3.out", delay: 1.1,
      });
    }, pageRef);
    return () => ctx.revert();
  }, [loaded]);

  return (
    <div ref={pageRef} className="bg-background text-foreground">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <div className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>

        {/* ═══════════════════════════════════════════════════════════════════
            1 · HERO  — dark, brand statement
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="relative w-full min-h-screen flex flex-col bg-[#0A0A0A] text-white overflow-hidden"
          data-testid="hero-section"
        >
          {/* Wordmark */}
          <div className="flex-1 flex flex-col justify-center overflow-hidden px-5 md:px-8">
            <h1
              className="hero-word font-display font-bold lowercase text-white select-none leading-none"
              style={{ fontSize: "clamp(80px, 25vw, 440px)", letterSpacing: "-0.03em", lineHeight: 0.85 }}
              data-testid="hero-wordmark"
            >
              beyond
            </h1>
          </div>

          {/* Bottom strip */}
          <div className="hero-sub border-t border-white/8 px-6 md:px-10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="font-sans text-base md:text-lg font-light text-white/55 max-w-sm leading-snug">
              Creative growth agency for tomorrow's most ambitious brands.
            </p>
            <div className="flex gap-8 md:gap-12">
              {[["90+","Projects"],["31","People"],["2019","Founded"]].map(([v,l]) => (
                <div key={l} className="flex flex-col gap-0.5">
                  <span className="font-sans text-xl font-light text-white leading-none">{v}</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/30">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            2 · SELECTED WORK — warm off-white, image-forward project cards
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F5F4F0] py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <SectionLabel>Selected Work</SectionLabel>
                <SectionHeading style={{ maxWidth: "20ch" }}>
                  Brands that lead their categories.
                </SectionHeading>
              </div>
              <CtaLink href="/work" testId="home-cta-work">View all 24 projects</CtaLink>
            </div>

            <div className="flex flex-col gap-2">
              {featuredProjects.map((p, i) => (
                <Link
                  key={p.id}
                  href={`/work/${p.id}`}
                  className="reveal group relative overflow-hidden block"
                  style={{ height: "min(65vh, 560px)" }}
                  data-testid={`home-project-${p.id}`}
                >
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/55">
                      {p.category} · {p.year}
                    </span>
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <h3
                          className="font-sans font-light text-white leading-none tracking-[-0.025em] mb-2"
                          style={{ fontSize: "clamp(2rem, 6vw, 6.5rem)" }}
                        >
                          {p.title}
                        </h3>
                        <p className="font-sans text-white/50 text-sm md:text-base font-light">{p.tagline}</p>
                      </div>
                      <ArrowUpRight
                        size={28}
                        strokeWidth={1}
                        className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            3 · SERVICES — white, icon cards 2×2 grid
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <SectionLabel>Services</SectionLabel>
                <SectionHeading style={{ maxWidth: "22ch" }}>
                  Strategy, identity, web, and growth — all in one place.
                </SectionHeading>
              </div>
              <CtaLink href="/services" testId="home-cta-services">Explore all services</CtaLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/8">
              {services.map(({ Icon, name, tagline, deliverables }) => (
                <div
                  key={name}
                  className="reveal group bg-white hover:bg-[#F5F4F0] transition-colors duration-300 p-10 md:p-14 flex flex-col gap-8"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 flex items-center justify-center border border-foreground/10 text-foreground/50 group-hover:border-foreground/30 group-hover:text-foreground transition-all duration-300">
                    <Icon size={20} strokeWidth={1.25} />
                  </div>

                  {/* Name + tagline */}
                  <div>
                    <h3
                      className="font-sans font-light tracking-[-0.02em] leading-none mb-3"
                      style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.6rem)" }}
                    >
                      {name}
                    </h3>
                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/35">
                      {tagline}
                    </p>
                  </div>

                  {/* Deliverable chips */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {deliverables.map((d) => (
                      <span
                        key={d}
                        className="font-sans text-[10px] uppercase tracking-widest text-foreground/40 border border-foreground/12 px-3 py-1.5"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            4 · INDUSTRIES — off-white, horizontal image slider
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F5F4F0] py-24 md:py-32 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <SectionLabel>Industries</SectionLabel>
                <SectionHeading style={{ maxWidth: "20ch" }}>
                  Built for every industry that grows.
                </SectionHeading>
              </div>
              <CtaLink href="/industries" testId="home-cta-industries">Browse all industries</CtaLink>
            </div>

            <div className="reveal">
              <IndustriesSlider />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            5 · ABOUT — white, split: image left + stats right
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal mb-14">
              <SectionLabel>Who We Are</SectionLabel>
            </div>

            <div className="reveal grid md:grid-cols-[1fr_1fr] gap-6 md:gap-4 items-stretch">
              {/* Photo */}
              <div className="relative overflow-hidden bg-[#0A0A0A]" style={{ minHeight: "clamp(320px, 50vw, 600px)" }}>
                <img
                  src={ABOUT_IMG}
                  alt="Beyond office"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-7 left-7">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/60">
                    San Francisco HQ
                  </span>
                </div>
              </div>

              {/* Stats + manifesto */}
              <div className="flex flex-col justify-between gap-8 p-0 md:pl-10">
                <blockquote
                  className="font-sans font-light tracking-[-0.025em] leading-[1.1] text-foreground"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 3.25rem)", maxWidth: "16ch" }}
                >
                  Great brands are built with conviction, not consensus.
                </blockquote>

                {/* Stats */}
                <div className="flex flex-col divide-y divide-foreground/8">
                  {stats.map(({ Icon, value, label }) => (
                    <div key={label} className="flex items-center gap-5 py-5">
                      <div className="w-9 h-9 flex items-center justify-center border border-foreground/10 text-foreground/35 shrink-0">
                        <Icon size={15} strokeWidth={1.5} />
                      </div>
                      <span
                        className="font-sans font-light text-foreground leading-none tabular-nums"
                        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                      >
                        {value}
                      </span>
                      <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40 ml-1">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Team photo strip + CTA */}
                <div className="flex flex-col gap-6">
                  <div className="relative overflow-hidden" style={{ height: "100px" }}>
                    <img
                      src={TEAM_IMG}
                      alt="Beyond team"
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-foreground/20" />
                    <span className="absolute inset-0 flex items-center justify-center font-sans text-[10px] uppercase tracking-[0.2em] text-white/70">
                      The team · San Francisco, Paris, New York
                    </span>
                  </div>
                  <CtaLink href="/about" testId="home-cta-about">Get to know us</CtaLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            6 · JOURNAL — dark, image-forward cards
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#0A0A0A] text-white py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <SectionLabel light>Journal</SectionLabel>
                <SectionHeading light style={{ maxWidth: "20ch" }}>
                  Ideas from inside the work.
                </SectionHeading>
              </div>
              <CtaLink href="/journal" light testId="home-cta-journal">Read the journal</CtaLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {featuredPosts.map((post, i) => (
                <Link
                  key={post.id}
                  href={`/journal/${post.id}`}
                  className="reveal group flex flex-col overflow-hidden cursor-pointer"
                  data-cursor-hover
                >
                  {/* Cover image */}
                  <div className="relative overflow-hidden bg-white/5" style={{ height: "clamp(200px, 28vw, 320px)" }}>
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Card body */}
                  <div className="border border-white/8 border-t-0 p-7 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between">
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">
                        {post.category}
                      </span>
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="text-white/25 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                      />
                    </div>
                    <h3
                      className="font-sans font-light text-white tracking-[-0.015em] leading-[1.2] flex-1"
                      style={{ fontSize: "clamp(1rem, 1.4vw, 1.35rem)" }}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between pt-2 border-t border-white/8">
                      <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/25">
                        {post.date}
                      </span>
                      <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/25">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            7 · CONTACT CTA — dark, spare and confident
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#0A0A0A] text-white border-t border-white/8 py-32 md:py-44">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <SectionLabel light>Let's Talk</SectionLabel>

            <h2
              className="reveal font-sans font-light tracking-[-0.025em] leading-[1.05] text-white mb-16"
              style={{ fontSize: "clamp(2.5rem, 7vw, 8rem)", maxWidth: "14ch" }}
            >
              Ready to build something that lasts?
            </h2>

            <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x divide-white/10 mb-14">
              <div className="md:pr-14">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-3">New Business</p>
                <a href="mailto:hello@beyond.com" className="font-sans text-lg font-light text-white hover:text-white/50 transition-colors">
                  hello@beyond.com
                </a>
              </div>
              <div className="md:px-14">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-3">Careers</p>
                <a href="mailto:jobs@beyond.com" className="font-sans text-lg font-light text-white hover:text-white/50 transition-colors">
                  jobs@beyond.com
                </a>
              </div>
              <div className="md:pl-14">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30 mb-3">Offices</p>
                <p className="font-sans text-lg font-light text-white/55">San Francisco · Paris · New York</p>
              </div>
            </div>

            <div className="reveal">
              <CtaLink href="/contact" light testId="home-cta-contact">Start a project</CtaLink>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
