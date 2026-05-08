import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

// ── Asset URLs ──────────────────────────────────────────────────────────────
const CDN = "https://images.prismic.io/rejouice-2024";
const VCDN = "https://rejouice-2024.cdn.prismic.io/rejouice-2024";

const ASSETS = {
  portfolioVideo: `${VCDN}/Z2BbT5bqstJ98kk6_REJOUICE-PORTFOLIO-LOOP-PROJECTS.mp4`,
  guillaume: `${CDN}/aFwilXfc4bHWiuKK_Z1xCSpbqstJ98euH_test-gui-1-.avif`,
  jack: `${CDN}/Z0dOD5bqstJ971U2_jack.jpg`,
  gabriel: `${CDN}/Z0dODpbqstJ971U1_gabriel.jpg`,
  jeffrey: `${CDN}/Z0dOEZbqstJ971U4_jeffrey.jpg`,
  clement: `${CDN}/Z0dODZbqstJ971U0_clement.jpg`,
  jeanmichel: `${CDN}/Z0dOEJbqstJ971U3_jeanmichel.jpg`,
  office: `${CDN}/Z2GNNpbqstJ98mqU_6384a19b-fa1c-4ad1-aae0-e29e127ebeef_san-diego-office.jpg.jpg`,
  mask1: `${CDN}/Z0eQrZbqstJ971-J_Maskgroup-1.jpg`,
  mask2: `${CDN}/Z0eQrpbqstJ971-K_Maskgroup-2.jpg`,
  mask3: `${CDN}/Z0eQr5bqstJ971-L_Maskgroup-3.jpg`,
  mask4: `${CDN}/Z0eQsJbqstJ971-M_Maskgroup-4.jpg`,
  mask5: `${CDN}/Z0eQsZbqstJ971-N_Maskgroup.jpg`,
};

const partners = [
  { name: "Jack Milburn",      role: "Partner & Brand Design Lead",    img: ASSETS.jack },
  { name: "Gabriel Stik",      role: "Partner & Technical Director",   img: ASSETS.gabriel },
  { name: "Jeffrey Blum",      role: "Partner & Business Development", img: ASSETS.jeffrey },
  { name: "Clément Brichon",   role: "Partner & Creative Director",    img: ASSETS.clement },
  { name: "Jean-Michel Boujon",role: "Partner & Growth Marketing",     img: ASSETS.jeanmichel },
  { name: "Henri Heymans",     role: "Partner & Lead Creative Developer", img: ASSETS.mask5 },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
function revealFrom(selector: string, trigger: string, opts = {}) {
  gsap.from(selector, {
    opacity: 0, y: 36, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger, start: "top 82%" },
    ...opts,
  });
}

// ── Component ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const pageRef  = useRef<HTMLDivElement>(null);
  const heroRef  = useRef<HTMLHeadingElement>(null);
  const awardsNumRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {

      // Hero headline — fade + lift (no DOM restructuring so natural wrapping is preserved)
      if (heroRef.current) {
        gsap.from(heroRef.current, {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.1,
        });
      }

      // Awards counter animation
      if (awardsNumRef.current) {
        gsap.fromTo(
          awardsNumRef.current,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1, scale: 1, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: awardsNumRef.current, start: "top 80%" },
          }
        );
      }

      // Staggered reveals
      gsap.from(".principle-item", {
        opacity: 0, y: 24, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".principles-section", start: "top 80%" },
      });
      revealFrom(".awards-left", ".awards-section");
      revealFrom(".awards-right", ".awards-section", { delay: 0.15 });
      revealFrom(".tagline-quote", ".tagline-section");
      revealFrom(".founder-quote", ".founder-section");
      gsap.from(".partner-card", {
        opacity: 0, y: 40, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".partners-section", start: "top 78%" },
      });
      gsap.from(".philosophy-block", {
        opacity: 0, y: 32, duration: 1, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".philosophy-section", start: "top 78%" },
      });
      revealFrom(".office-text", ".office-section");
      revealFrom(".office-img", ".office-section", { delay: 0.2 });
      gsap.from(".mask-img", {
        opacity: 0, y: 40, scale: 0.97, duration: 1, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".culture-section", start: "top 80%" },
      });

    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A]">

      {/* ══ 1. HERO TAGLINE ═══════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16">
        <div className="w-full">
          <h1
            ref={heroRef}
            className="font-sans font-light leading-[1.12] tracking-[-0.025em] text-[#0A0A0A]"
            style={{ fontSize: "clamp(1.5rem, 3.4vw, 3.8rem)" }}
          >
            We are a collective of seasoned creatives, strategists, growth marketers, and technologists, dedicated to transforming ambitious visions into category leaders.
          </h1>
        </div>
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ══ 2. PRINCIPLES ════════════════════════════════════════════════ */}
      <section className="principles-section px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-24">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 leading-relaxed max-w-[220px]">
              We operate on simple principles
            </p>
          </div>
          <div>
            <ul className="flex flex-col">
              {[
                { num: "(01)", label: "Put people first" },
                { num: "(02)", label: "Pursue excellence" },
                { num: "(03)", label: "Embrace challenges" },
              ].map((p) => (
                <li
                  key={p.num}
                  className="principle-item flex items-baseline gap-6 py-5 border-b border-[#0A0A0A]/10 first:border-t"
                >
                  <span className="font-sans text-[11px] text-[#0A0A0A]/30 w-10 shrink-0">{p.num}</span>
                  <span className="font-sans text-2xl md:text-3xl font-light tracking-[-0.01em]">{p.label}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-sm text-[#0A0A0A]/40 leading-relaxed mt-8 max-w-xl">
              These three principles have earned us numerous awards. While we don't chase accolades, they are proof of our dedication to impact, quality, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 3. AWARDS ════════════════════════════════════════════════════ */}
      <section className="awards-section px-6 md:px-10 pb-24 border-t border-[#0A0A0A]/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between py-10 mb-12 border-b border-[#0A0A0A]/10">
            <h2
              ref={awardsNumRef}
              className="font-display font-bold text-[#0A0A0A] leading-none tracking-tight"
              style={{ fontSize: "clamp(5rem, 14vw, 14rem)" }}
            >
              Awards
            </h2>
            <span className="font-sans text-[#0A0A0A]/30 text-sm tracking-widest">(×90)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-24">
            <p className="awards-left font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40">
              Awards for digital innovation
            </p>
            <div className="awards-right font-sans text-lg md:text-xl font-light text-[#0A0A0A]/80 leading-relaxed">
              <p>29 × Awwwards</p>
              <p>19 × FWA</p>
              <p>34 × CSS Design</p>
              <p>02 × Webby</p>
              <p className="text-[#0A0A0A]/30 mt-2">...and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. PORTFOLIO VIDEO ════════════════════════════════════════════ */}
      <section className="w-full aspect-video overflow-hidden bg-[#e8e8e8]">
        <video
          src={ASSETS.portfolioVideo}
          autoPlay muted loop playsInline preload="auto"
          className="w-full h-full object-cover"
        />
      </section>

      {/* ══ 5. ATTENTION TAGLINE ══════════════════════════════════════════ */}
      <section className="tagline-section px-6 md:px-10 py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto">
          <p
            className="tagline-quote font-sans font-light leading-[1.2] tracking-[-0.01em] text-[#0A0A0A]/80"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)", maxWidth: "900px" }}
          >
            Attention is earned, not given. Great work only matters when it drives action. We build brands that turn attention into growth. It starts with the story you choose to tell.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ══ 6. FOUNDER ════════════════════════════════════════════════════ */}
      <section className="founder-section px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-12">
            One Founder
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-start">
            {/* Portrait */}
            <div className="overflow-hidden rounded-sm aspect-[4/5] bg-[#e8e8e8]">
              <img
                src={ASSETS.guillaume}
                alt="Guillaume Hamon — Founding Partner"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Quote + bio */}
            <div className="flex flex-col justify-between h-full gap-16 md:pt-6">
              <blockquote
                className="founder-quote font-sans font-light leading-[1.35] text-[#0A0A0A]/75 tracking-[-0.01em]"
                style={{ fontSize: "clamp(1.2rem, 2.2vw, 2rem)" }}
              >
                "We've streamlined the outdated and layered agency model to give you direct access to the best global talent. No wasted time, no empty promises. Just impactful results."
              </blockquote>

              <div>
                <p className="font-sans font-medium text-[#0A0A0A] text-base">Guillaume Hamon</p>
                <p className="font-sans text-sm text-[#0A0A0A]/40 mt-1">Founding Partner</p>
                <a
                  href="https://www.linkedin.com/in/guillaumehamon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 font-sans text-xs uppercase tracking-widest text-[#0A0A0A]/50 border-b border-[#0A0A0A]/20 pb-px hover:text-[#0A0A0A] hover:border-[#0A0A0A]/60 transition-colors"
                >
                  ↗ LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ══ 7. PARTNERS ═══════════════════════════════════════════════════ */}
      <section className="partners-section px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-14">
            +6 partners
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
            {partners.map((p) => (
              <div key={p.name} className="partner-card">
                <div className="overflow-hidden rounded-sm aspect-[4/5] bg-[#e8e8e8] mb-4">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans font-medium text-[#0A0A0A] text-sm">{p.name}</p>
                <p className="font-sans text-xs text-[#0A0A0A]/40 mt-1">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. PHILOSOPHY ════════════════════════════════════════════════ */}
      <section className="philosophy-section px-6 md:px-10 py-24 bg-[#F5F4F0] text-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-16">
            Designed to transform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
            <div className="philosophy-block">
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-4">
                One Team, Global Talent
              </h3>
              <p className="font-sans text-sm text-[#0A0A0A]/60 leading-relaxed max-w-md">
                We curate the best talent from all corners of the world. This enables us to leverage diverse perspectives, knowledge, and expertise to deliver fresh and tailored solutions for our clients.
              </p>
            </div>
            <div className="philosophy-block">
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-4">
                Strategic Simplicity
              </h3>
              <p className="font-sans text-sm text-[#0A0A0A]/60 leading-relaxed max-w-md">
                For us, simplicity is the ultimate sophistication. Our best work emerges from tackling complexity head-on and distilling it collaboratively with partners who value the time needed to build a high-performing brand.
              </p>
            </div>
          </div>

          <div className="philosophy-block border-t border-[#0A0A0A]/10 pt-12">
            <p
              className="font-sans font-light text-[#0A0A0A]/70 leading-[1.35] tracking-[-0.01em]"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.8rem)", maxWidth: "820px" }}
            >
              We partner like co-founders. Straight talk, no sugarcoating. This is how we exceed expectations, and deliver memorable brands.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 9. OFFICE / TALENT MATCHING ══════════════════════════════════ */}
      <section className="office-section px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p
              className="office-text font-sans font-light leading-[1.2] text-[#0A0A0A] tracking-[-0.01em]"
              style={{ fontSize: "clamp(1.6rem, 3vw, 3rem)", maxWidth: "480px" }}
            >
              We match your project with the right experts
            </p>
            <a
              href="mailto:jobs@rejouice.com"
              className="inline-flex items-center gap-2 mt-10 font-sans text-xs uppercase tracking-widest text-[#0A0A0A]/50 border-b border-[#0A0A0A]/20 pb-px hover:text-[#0A0A0A] hover:border-[#0A0A0A]/60 transition-colors"
            >
              jobs@rejouice.com — Join our team ↗
            </a>
          </div>
          <div className="office-img overflow-hidden rounded-sm aspect-[4/3] bg-[#e8e8e8]">
            <img
              src={ASSETS.office}
              alt="San Diego office"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ══ 10. CULTURE GALLERY ═══════════════════════════════════════════ */}
      <section className="culture-section px-3 md:px-4 pb-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 items-end">
          <div className="mask-img overflow-hidden rounded-sm aspect-[3/4] col-span-1">
            <img src={ASSETS.mask1} alt="Culture" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="mask-img overflow-hidden rounded-sm aspect-[3/5] col-span-1">
            <img src={ASSETS.mask2} alt="Culture" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="mask-img overflow-hidden rounded-sm aspect-[3/4] col-span-1">
            <img src={ASSETS.mask3} alt="Culture" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="mask-img overflow-hidden rounded-sm aspect-[3/4] col-span-1">
            <img src={ASSETS.mask4} alt="Culture" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="mask-img overflow-hidden rounded-sm aspect-[3/5] col-span-1">
            <img src={ASSETS.mask5} alt="Culture" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ══ 11. JOBS CTA ══════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-24 border-t border-[#0A0A0A]/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p
            className="font-sans font-light text-[#0A0A0A] leading-tight tracking-[-0.01em]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 4rem)" }}
          >
            We're always looking for<br />exceptional people.
          </p>
          <a
            href="mailto:jobs@rejouice.com"
            className="shrink-0 inline-flex items-center gap-3 font-sans text-sm uppercase tracking-widest text-[#0A0A0A] border border-[#0A0A0A]/20 rounded-full px-8 py-4 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
          >
            ↗ Join our Team
          </a>
        </div>
      </section>

    </div>
  );
}
