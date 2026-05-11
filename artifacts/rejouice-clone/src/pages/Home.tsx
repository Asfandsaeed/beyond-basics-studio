import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "wouter";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { gsap } from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import {
  Target, Gem, Monitor, TrendingUp, PenTool,
  ChevronLeft, ChevronRight, ArrowUpRight,
} from "lucide-react";
import { projects } from "@/data/projects";
import { posts } from "@/data/journal";
import { industries } from "@/data/industries";
import Loader from "@/components/Loader";


// ─── Asset URLs ────────────────────────────────────────────────────────────

// ─── Static data ───────────────────────────────────────────────────────────
const featuredProjects = projects.slice(0, 3);
const featuredPosts    = posts.slice(0, 3);
const sliderIndustries = industries.filter((_, i) => [0,2,4,5,7,9,11,14].includes(i));

const awards = [
  { count: "29×", body: "Awwwards" },
  { count: "19×", body: "FWA" },
  { count: "34×", body: "CSS Design Awards" },
  { count: "2×",  body: "Webby Awards" },
];

const services = [
  { Icon: Target,    name: "Brand Strategy",    slug: "brand-strategy",    tagline: "Clarity before creation.",          deliverables: ["Positioning", "Naming", "Brand Architecture", "Messaging Framework"] },
  { Icon: Gem,       name: "Brand Identity",    slug: "brand-identity",    tagline: "Identity that earns attention.",    deliverables: ["Visual Identity", "Logo Design", "Typography System", "Motion Identity"] },
  { Icon: Monitor,   name: "Digital Experience",slug: "digital-experience",tagline: "Websites that convert and inspire.",deliverables: ["Web Design", "Web Development", "UX Strategy", "3D & Motion"] },
  { Icon: TrendingUp,name: "Growth Marketing",  slug: "growth-marketing",  tagline: "Brand-led growth that compounds.",  deliverables: ["Growth Strategy", "Paid Creative", "SEO & Content", "Email Marketing"] },
  { Icon: PenTool,   name: "Content & Creative",slug: "content-creative",  tagline: "Content that earns its place.",     deliverables: ["Brand Photography", "Video Production", "Copywriting", "CGI & 3D"] },
];

const models = [
  {
    num: "01",
    name: "Sprint",
    duration: "6 Weeks",
    desc: "A focused engagement to solve a specific brand or growth challenge. Fast momentum, no long-term commitment required.",
    deliverables: ["Brand Sprint", "Go-to-Market", "Growth Audit", "Identity Refresh"],
  },
  {
    num: "02",
    name: "Partnership",
    duration: "Ongoing",
    desc: "An ongoing strategic partnership where we become a true extension of your founding team — all disciplines, all in.",
    deliverables: ["Full Brand System", "Digital Products", "Growth Strategy", "Creative Direction"],
  },
];

const principles = [
  { num: "01", label: "Put people first" },
  { num: "02", label: "Pursue excellence" },
  { num: "03", label: "Embrace challenges" },
];

const philosophy = [
  {
    title: "One Team, Global Talent",
    body: "We curate the best talent from across the globe — diverse perspectives, deep expertise, all working on your brief.",
  },
  {
    title: "Strategic Simplicity",
    body: "Simplicity is the ultimate sophistication. Our best work emerges from distilling complexity into something clear and compelling.",
  },
  {
    title: "Direct Access",
    body: "No account managers between you and the work. You talk directly to the strategists and creatives building your brand.",
  },
];

const P = "https://images.prismic.io/rejouice-2024";

const partners = [
  { name: "Guillaume Hamon",    role: "Founding Partner",               img: `${P}/aFwilXfc4bHWiuKK_Z1xCSpbqstJ98euH_test-gui-1-.avif?auto=format,compress` },
  { name: "Jack Milburn",       role: "Partner, Brand Design",          img: `${P}/Z0dOD5bqstJ971U2_jack.jpg?auto=format,compress` },
  { name: "Gabriel Stik",       role: "Partner, Technical",             img: `${P}/Z0dODpbqstJ971U1_gabriel.jpg?auto=format,compress` },
  { name: "Jeffrey Blum",       role: "Partner, Business Development",  img: `${P}/Z0dOEZbqstJ971U4_jeffrey.jpg?auto=format,compress` },
  { name: "Clément Brichon",    role: "Partner, Creative Director",     img: `${P}/Z0dODZbqstJ971U0_clement.jpg?auto=format,compress` },
  { name: "Jean-Michel Boujon", role: "Partner, Growth Marketing",      img: `${P}/Z0dOEJbqstJ971U3_jeanmichel.jpg?auto=format,compress` },
];

const OFFICE_IMG = `${P}/Z2GNNpbqstJ98mqU_6384a19b-fa1c-4ad1-aae0-e29e127ebeef_san-diego-office.jpg.jpg?auto=format,compress`;
const FOUNDER_IMG = `${P}/aFwilXfc4bHWiuKK_Z1xCSpbqstJ98euH_test-gui-1-.avif?auto=format,compress`;

// ─── Shared primitives ─────────────────────────────────────────────────────

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`font-sans text-[11px] uppercase tracking-[0.18em] mb-6 ${light ? "text-white/60" : "text-[#0A0A0A]/60"}`}>
      {children}
    </p>
  );
}

function Heading({ children, light, style, as: Tag = "h2" }: {
  children: React.ReactNode; light?: boolean; style?: React.CSSProperties; as?: "h1"|"h2"|"h3";
}) {
  return (
    <Tag
      className={`font-sans font-light tracking-[-0.025em] leading-[1.07] ${light ? "text-white" : "text-[#0A0A0A]"}`}
      style={{ fontSize: "clamp(2rem, 4.5vw, 4.75rem)", ...style }}
    >
      {children}
    </Tag>
  );
}

/** Soft borderless CTA — just text + arrow, hover tints the background */
function Cta({ href, children, light, testId }: { href: string; children: React.ReactNode; light?: boolean; testId?: string }) {
  return (
    <Link
      href={href}
      data-testid={testId}
      className={`inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] px-6 py-3.5 rounded-sm transition-all duration-250 ${
        light
          ? "text-white/65 border border-white/12 hover:bg-white/8 hover:text-white"
          : "text-[#0A0A0A]/70 border border-[#0A0A0A]/10 hover:bg-[#EEEDE9] hover:text-[#0A0A0A] hover:border-[#0A0A0A]/18"
      }`}
    >
      {children}
      <ArrowUpRight size={12} strokeWidth={1.5} />
    </Link>
  );
}

// ─── Industries slider ─────────────────────────────────────────────────────

function IndustriesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/55">Drag to explore</p>
        <div className="flex gap-1.5">
          {[{ fn: prev, Icon: ChevronLeft, label: "Previous" }, { fn: next, Icon: ChevronRight, label: "Next" }].map(({ fn, Icon, label }) => (
            <button
              key={label}
              onClick={fn}
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center text-[#0A0A0A]/60 hover:text-[#0A0A0A] hover:bg-[#EEEDE9] rounded-sm transition-all duration-200"
            >
              <Icon size={15} strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2.5" style={{ touchAction: "pan-y pinch-zoom" }}>
          {sliderIndustries.map((ind) => (
            <Link
              key={ind.id}
              href={`/industries/${ind.id}`}
              className="group relative shrink-0 overflow-hidden"
              style={{ width: "clamp(240px, 26vw, 340px)", height: "clamp(320px, 40vw, 460px)" }}
            >
              <img
                src={ind.coverImage}
                alt={ind.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-[1.04] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/65">{ind.category}</span>
                <div>
                  <h3 className="font-sans font-light text-white tracking-[-0.02em] leading-[1.1] mb-1.5" style={{ fontSize: "clamp(1.3rem, 2vw, 1.85rem)" }}>
                    {ind.name}
                  </h3>
                  <p className="font-sans text-[11px] text-white/65 leading-snug line-clamp-2">{ind.tagline}</p>
                </div>
              </div>
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={16} className="text-white" strokeWidth={1.5} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────

export default function Home() {
  useSeoMeta({
    title: "Beyond® — Creative Growth Agency",
    description: "Beyond partners with ambitious companies to become category leaders. Brand strategy, identity, web design, motion, 3D & WebGL. Tomorrow's brands, today.",
    path: "/",
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://beyondbasics.studio/#business",
      name: "Beyond®",
      alternateName: "Beyond Creative Growth Agency",
      url: "https://beyondbasics.studio",
      logo: "https://beyondbasics.studio/favicon.svg",
      image: "https://beyondbasics.studio/opengraph.jpg",
      description: "Beyond® is a creative growth agency that partners with ambitious companies to become category leaders through brand strategy, identity, web design, motion, and 3D.",
      email: "hello@beyondbasics.studio",
      foundingDate: "2020",
      areaServed: "Worldwide",
      serviceType: ["Brand Strategy", "Brand Identity", "Web Design", "Growth Marketing", "Content & Creative"],
      knowsAbout: ["Brand Strategy", "Visual Identity", "Web Design", "Motion Design", "3D & WebGL", "Growth Marketing"],
      award: ["29x Awwwards", "19x FWA", "34x CSS Design Awards", "2x Webby Awards"],
      sameAs: ["https://www.linkedin.com/company/beyondbasics"],
    },
  });
  const [loaded, setLoaded] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
      gsap.from(".hero-word", { y: 100, opacity: 0, duration: 1.6, ease: "power4.out", delay: 0.1 });
      gsap.from(".hero-meta > *", { opacity: 0, y: 12, stagger: 0.1, duration: 1, ease: "power3.out", delay: 1.1 });
    }, pageRef);
    return () => ctx.revert();
  }, [loaded]);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A]">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <div className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>

        {/* ══════════════════════════════════════════════════════════════════
            § 1  HERO
            The brand's north star — "beyond" fills the screen.
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="relative w-full min-h-[100svh] flex flex-col bg-[#0A0A0A] text-white overflow-hidden"
          data-testid="hero-section"
        >
          <div className="flex-1 flex flex-col justify-center overflow-hidden px-6 md:px-10">
            <h1
              className="hero-word font-display font-bold lowercase text-white select-none leading-none"
              style={{ fontSize: "clamp(64px, 20vw, 440px)", letterSpacing: "-0.03em", lineHeight: 0.88 }}
              data-testid="hero-wordmark"
            >
              beyond
            </h1>
          </div>

          <div className="hero-meta px-6 md:px-10 py-6 md:py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between bg-white/[0.03] border-t border-white/[0.06]">
            <div>
              <p className="font-sans text-sm md:text-lg font-light text-white/80 max-w-md leading-snug">
                Creative growth agency for tomorrow's most ambitious brands.
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/55 mt-1.5">
                Tomorrow's Brands, Today.™
              </p>
            </div>
            <div className="flex gap-6 md:gap-12 shrink-0">
              {[["90+","Projects"],["31","People"],["2019","Founded"]].map(([v,l]) => (
                <div key={l} className="flex flex-col gap-0.5">
                  <span className="font-sans text-xl md:text-2xl font-light text-white leading-none">{v}</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/55">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            § 2  ABOUT US
            Editorial layout: big heading, then left-label / right-body rows
            with generous white space — matching the reference style.
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-28 md:py-40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            {/* Big heading */}
            <div className="reveal mb-16 md:mb-20">
              <h2
                className="font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A]"
                style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)" }}
              >
                About Beyond.
              </h2>
            </div>

            {/* Rows */}
            {[
              {
                label: "A creative growth agency.",
                body: "We are a collective of seasoned creatives, strategists, growth marketers, and technologists — dedicated to transforming ambitious visions into category leaders. Founded in San Francisco in 2019.",
              },
              {
                label: "Performance & brand.\nYou need both.",
                body: "We craft brands that become category leaders. These brands aren't built on products alone — emotional connection and sustainable growth are the two essentials. This is how you drive retention, advocacy, and long-term market leadership.",
              },
              {
                label: "Direct access.\nNo layers.",
                body: "We've streamlined the outdated agency model to give you direct access to the best global talent. No account managers between you and the work. No empty promises. Just strategists, designers, and developers working as a true extension of your founding team.",
              },
            ].map(({ label, body }) => (
              <div
                key={label}
                className="reveal grid grid-cols-1 md:grid-cols-[1fr_1fr_1.4fr] gap-6 md:gap-0 py-10 md:py-14 border-t border-[#0A0A0A]/8 first:border-t"
              >
                {/* Left: short punchy label */}
                <p
                  className="font-sans font-light text-[#0A0A0A] leading-snug tracking-[-0.01em]"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", whiteSpace: "pre-line" }}
                >
                  {label}
                </p>

                {/* Centre: empty breathing room (hidden on mobile) */}
                <div className="hidden md:block" />

                {/* Right: descriptive paragraph */}
                <p className="font-sans text-sm md:text-[15px] font-light text-[#0A0A0A]/55 leading-[1.75] max-w-lg">
                  {body}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            § 3  AWARDS BAR
            90+ industry awards — the fastest credibility signal on the page.
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-14 md:py-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="reveal flex flex-col md:flex-row md:items-center gap-8 md:gap-0 md:justify-between">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-2">
                  Industry Recognition
                </p>
                <p className="font-sans font-light text-[#0A0A0A] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
                  90+ awards won.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {awards.map(({ count, body }) => (
                  <div key={body} className="flex flex-col">
                    <span className="font-sans text-xl font-light text-[#0A0A0A] leading-none">{count}</span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mt-1">{body}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            § 3  SELECTED WORK
            Three featured brand projects — each one a category leader.
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F5F4F0] py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <Label>Selected Work</Label>
                <Heading style={{ maxWidth: "18ch" }}>
                  Brands that lead their categories.
                </Heading>
              </div>
              <Cta href="/work" testId="home-cta-work">View all 24 projects</Cta>
            </div>

            <div className="flex flex-col gap-2">
              {featuredProjects.map((p, i) => (
                <Link
                  key={p.id}
                  href={`/work/${p.id}`}
                  className="reveal group relative overflow-hidden block"
                  style={{ height: "min(64vh, 540px)" }}
                  data-testid={`home-project-${p.id}`}
                >
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-700"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50">
                      {p.category} · {p.year}
                    </span>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h2
                          className="font-sans font-light text-white leading-none tracking-[-0.025em] mb-2"
                          style={{ fontSize: "clamp(2rem, 6vw, 6.5rem)" }}
                        >
                          {p.title}
                        </h2>
                        <p className="font-sans text-white/50 text-sm md:text-base font-light">{p.tagline}</p>
                      </div>
                      <ArrowUpRight
                        size={26}
                        strokeWidth={1}
                        className="text-white/55 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            § 4  SERVICES
            Five disciplines, all in-house. Plus two engagement models.
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <Label>What We Do</Label>
                <Heading style={{ maxWidth: "22ch" }}>
                  Five disciplines. All under one roof.
                </Heading>
              </div>
              <Cta href="/services" testId="home-cta-services">Explore all services</Cta>
            </div>

            {/* Service cards — no hard borders, background differentiates */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
              {services.map(({ Icon, name, slug, tagline, deliverables }, idx) => (
                <Link
                  key={name}
                  href={`/services/${slug}`}
                  className={`group flex flex-col gap-7 p-9 md:p-10 hover:bg-[#F5F4F0] transition-colors duration-250 rounded-sm ${idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-[#0A0A0A]/60 group-hover:text-[#0A0A0A]/70 transition-colors duration-250">
                    <Icon size={20} strokeWidth={1.25} />
                  </div>
                  <div>
                    <h3
                      className="font-sans font-light tracking-[-0.02em] leading-none mb-2.5 text-[#0A0A0A]"
                      style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.4rem)" }}
                    >
                      {name}
                    </h3>
                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60">{tagline}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {deliverables.map((d) => (
                      <span key={d} className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/60 bg-[#0A0A0A]/[0.04] px-2.5 py-1.5 rounded-sm">
                        {d}
                      </span>
                    ))}
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/55 group-hover:text-[#0A0A0A]/80 transition-colors mt-auto">
                    Explore service ↗
                  </span>
                </Link>
              ))}
            </div>

            {/* Engagement models */}
            <div className="reveal pt-10 border-t border-[#0A0A0A]/8">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-8">
                How we work together
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                {models.map((m) => (
                  <div key={m.num} className="group w-full p-9 bg-[#F5F4F0] hover:bg-[#EEEDE9] transition-colors duration-250 rounded-sm flex flex-col gap-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/55 mb-1">{m.num}</p>
                        <h3 className="font-sans font-light text-[#0A0A0A] tracking-[-0.02em]" style={{ fontSize: "clamp(1.5rem, 2vw, 2.25rem)" }}>
                          {m.name}
                        </h3>
                      </div>
                      <span className="font-sans text-xs uppercase tracking-[0.15em] text-[#0A0A0A]/60 bg-white px-3 py-1.5 rounded-sm shrink-0 ml-4">
                        {m.duration}
                      </span>
                    </div>
                    <p className="font-sans text-sm font-light text-[#0A0A0A]/50 leading-relaxed">{m.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {m.deliverables.map((d) => (
                        <span key={d} className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/60 px-2.5 py-1.5 bg-white rounded-sm">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            § 5  PRINCIPLES & FOUNDER
            What we stand for — and the person who built it.
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F5F4F0] py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
              {/* Principles */}
              <div>
                <Label>How We Operate</Label>
                <Heading style={{ maxWidth: "16ch", marginBottom: "2.5rem" }}>
                  Three principles. No exceptions.
                </Heading>
                <div className="flex flex-col gap-0">
                  {principles.map(({ num, label }) => (
                    <div key={num} className="flex items-center gap-5 py-5 first:pt-0">
                      <span className="font-sans text-[11px] text-[#0A0A0A]/55 w-8 shrink-0">{num}</span>
                      <span className="font-sans text-xl md:text-2xl font-light tracking-[-0.015em] text-[#0A0A0A]">{label}</span>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-sm text-[#0A0A0A]/60 leading-relaxed mt-8 max-w-sm">
                  These principles have earned us 90 industry awards. We don't chase accolades — but we care deeply about impact, quality, and doing things right.
                </p>
              </div>

              {/* Philosophy */}
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <Label>Our Philosophy</Label>
                  <div className="flex flex-col gap-8">
                    {philosophy.map(({ title, body }) => (
                      <div key={title}>
                        <h3 className="font-sans text-base font-light text-[#0A0A0A] tracking-[-0.01em] mb-2">{title}</h3>
                        <p className="font-sans text-sm text-[#0A0A0A]/65 leading-relaxed">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Founder quote */}
            <div className="reveal grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start bg-[#0A0A0A] p-8 md:p-12 rounded-sm">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 bg-white/10">
                <img
                  src={FOUNDER_IMG}
                  alt="Guillaume Hamon — Founding Partner"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <blockquote className="font-sans font-light text-white leading-relaxed mb-5" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }}>
                  "We've streamlined the outdated and layered agency model to give you direct access to the best global talent. No wasted time, no empty promises. Just impactful results."
                </blockquote>
                <div>
                  <p className="font-sans text-sm font-light text-white">Guillaume Hamon</p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/60 mt-0.5">Founding Partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            § 6  INDUSTRIES
            Eight verticals. One standard: lead your category.
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <Label>Industries</Label>
                <Heading style={{ maxWidth: "20ch" }}>Built for every industry that grows.</Heading>
              </div>
              <Cta href="/industries" testId="home-cta-industries">Browse all industries</Cta>
            </div>

            <div className="reveal">
              <IndustriesSlider />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            § 7  ABOUT — company, team, stats
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F5F4F0] py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <Label>Who We Are</Label>
                <Heading style={{ maxWidth: "24ch" }}>
                  A collective of creatives, strategists, and technologists — built to build category leaders.
                </Heading>
              </div>
              <Cta href="/about" testId="home-cta-about">Get to know us</Cta>
            </div>

            {/* Office image + stats side by side */}
            <div className="reveal grid md:grid-cols-[1fr_1fr] gap-4 mb-12">
              <div className="relative overflow-hidden rounded-sm bg-[#AAAA99]" style={{ minHeight: "clamp(280px, 40vw, 500px)" }}>
                <img
                  src={OFFICE_IMG}
                  alt="Beyond agency office — San Francisco"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/60">Beyond HQ · San Francisco</span>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 p-8 md:p-10 bg-white rounded-sm">
                <p className="font-sans font-light text-[#0A0A0A] tracking-[-0.015em] leading-[1.25]" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}>
                  We are a team of <strong className="font-normal">31 people</strong> across San Francisco, New York, and London. Founded in 2019. Every project gets our best people — no junior teams, no account layers.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "90+", label: "Brand projects" },
                    { value: "2019", label: "Year founded" },
                    { value: "31", label: "Team members" },
                    { value: "3", label: "Global offices" },
                  ].map(({ value, label }) => (
                    <div key={label} className="p-5 bg-[#F5F4F0] rounded-sm">
                      <span className="font-sans font-light text-[#0A0A0A] leading-none block" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                        {value}
                      </span>
                      <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mt-1.5 block">{label}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-4">
                    Leadership
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {partners.map((p) => (
                      <div key={p.name} className="flex items-center gap-2.5 group">
                        <div className="w-7 h-7 rounded-full overflow-hidden bg-[#EEEDE9] shrink-0">
                          <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover object-top" />
                        </div>
                        <div>
                          <p className="font-sans text-xs font-light text-[#0A0A0A] leading-none">{p.name}</p>
                          <p className="font-sans text-[10px] text-[#0A0A0A]/60 leading-none mt-0.5">{p.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Manifesto pull-quote */}
            <div className="reveal">
              <p
                className="font-sans font-light text-[#0A0A0A] tracking-[-0.02em] leading-[1.15]"
                style={{ fontSize: "clamp(1.4rem, 3vw, 3.25rem)", maxWidth: "30ch" }}
              >
                "Attention is earned, not given. Great work only matters when it drives action. We build brands that turn attention into growth."
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            § 8  JOURNAL — dark, image cards
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#0A0A0A] text-white py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <Label light>Thinking</Label>
                <Heading light style={{ maxWidth: "20ch" }}>Ideas from inside the work.</Heading>
              </div>
              <Cta href="/journal" light testId="home-cta-journal">Read the journal</Cta>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {featuredPosts.map((post, i) => (
                <Link
                  key={post.id}
                  href={`/journal/${post.id}`}
                  className="reveal group flex flex-col overflow-hidden rounded-sm cursor-pointer"
                >
                  <div className="relative overflow-hidden" style={{ height: "clamp(190px, 26vw, 300px)" }}>
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                    />
                  </div>
                  <div className="bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-250 p-7 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/60">{post.category}</span>
                      <ArrowUpRight size={13} strokeWidth={1.5} className="text-white/55 group-hover:text-white/90 shrink-0 transition-colors duration-250" />
                    </div>
                    <h3 className="font-sans font-light text-white tracking-[-0.015em] leading-[1.2] flex-1" style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.25rem)" }}>
                      {post.title}
                    </h3>
                    <p className="font-sans text-[11px] text-white/60 leading-relaxed line-clamp-2">{post.subtitle}</p>
                    <div className="flex items-center justify-between pt-4 mt-auto">
                      <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/55">{post.date}</span>
                      <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/55">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            § 9  CONTACT CTA — all the info, no fluff
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#0A0A0A] text-white border-t border-white/8 py-24 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <Label light>Let's Talk</Label>

            <h2
              className="reveal font-sans font-light tracking-[-0.025em] leading-[1.05] text-white mb-4"
              style={{ fontSize: "clamp(2.25rem, 6vw, 7rem)", maxWidth: "16ch" }}
            >
              Partnering with global brands, founders, and VCs to build tomorrow's brands, today.
            </h2>

            <p className="reveal font-sans text-base font-light text-white/65 max-w-lg leading-relaxed mb-14">
              Tell us what you're building. We'll tell you if we're the right team for it — and if we are, we'll show you exactly how we'd approach it.
            </p>

            {/* Contact grid */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-3">New Business</p>
                <a href="mailto:hello@beyondbasics.studio" className="font-sans text-base font-light text-white/75 hover:text-white transition-colors duration-200">hello@beyondbasics.studio</a>
              </div>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-3">Careers</p>
                <a href="mailto:jobs@beyondbasics.studio" className="font-sans text-base font-light text-white/75 hover:text-white transition-colors duration-200">jobs@beyondbasics.studio</a>
              </div>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-3">Offices</p>
                <div className="flex flex-col gap-1">
                  {["San Francisco", "New York", "London"].map((city) => (
                    <span key={city} className="font-sans text-base font-light text-white/50">{city}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55 mb-3">Follow</p>
                <div className="flex flex-col gap-1">
                  {[
                    { label: "LinkedIn", href: "#" },
                    { label: "Twitter / X", href: "#" },
                    { label: "Instagram", href: "#" },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} className="font-sans text-base font-light text-white/50 hover:text-white transition-colors duration-200">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal flex items-center gap-4">
              <Cta href="/contact" light testId="home-cta-contact">Start a project</Cta>
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/55">
                Tomorrow's Brands, Today.™
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
