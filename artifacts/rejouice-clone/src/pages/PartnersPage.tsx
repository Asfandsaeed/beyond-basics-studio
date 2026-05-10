import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check, DollarSign, Share2, Handshake, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const partnerTypes = [
  {
    Icon: Share2,
    type: "Referral Partner",
    audience: "Agencies, consultants, founders",
    commission: "20% of first project value",
    recurring: false,
    desc: "You refer a client to Beyond. We close the project. You earn a 20% commission on the full first engagement value — paid within 14 days of the project kick-off. No cap, no limit on referrals.",
    perks: ["Dedicated partner page listing", "Co-branded case studies", "Priority turnaround on referred projects", "Transparent tracking dashboard"],
  },
  {
    Icon: Star,
    type: "KOL / Influencer Affiliate",
    audience: "Content creators, thought leaders, educators",
    commission: "15–25% recurring commission",
    recurring: true,
    desc: "You share Beyond with your audience — through content, reviews, or recommendations. Every client you bring earns you 15–25% of their lifetime project value, recurring for as long as they work with us.",
    perks: ["Custom affiliate link + tracking", "Access to brand assets and briefings", "Co-creation opportunities", "Revenue share on retainers (25%)"],
  },
  {
    Icon: Handshake,
    type: "Agency Partner",
    audience: "Complementary agencies and studios",
    commission: "White-label rates + referral fees",
    recurring: false,
    desc: "If you're an agency that needs brand strategy, identity, or digital work for your clients — we can execute it under your banner. Or send overflow work our way and earn a referral fee on everything we produce.",
    perks: ["White-label execution available", "Shared pitch decks and credentials", "Cross-referral network access", "Joint award submissions"],
  },
  {
    Icon: DollarSign,
    type: "Technology Partner",
    audience: "SaaS tools, platforms, and software companies",
    commission: "Custom partnership agreement",
    recurring: true,
    desc: "We integrate your tool or platform into our workflow and recommend it to our 90+ client base. In return you get authentic endorsement from a credible agency, co-marketing opportunities, and a negotiated partnership structure.",
    perks: ["Integration and co-marketing", "Featured in our tech stack", "Access to our client network", "Co-authored content and events"],
  },
];

const whyRows = [
  {
    label: "Real money, fast.",
    body: "Our average first engagement is £45,000–£120,000. A single successful referral at 20% commission means £9,000–£24,000 in your pocket. We pay within 14 days of project kick-off — no invoice chasing.",
  },
  {
    label: "Built for creators.",
    body: "Our KOL programme is designed for people with real audiences who care about brand building. Whether you have 10,000 followers or 1 million, we value authentic reach over vanity metrics. Recurring commissions mean you earn as long as your referral stays with us.",
  },
  {
    label: "Credibility that transfers.",
    body: "Being a Beyond partner signals something to your own network. You're associated with 90-award-winning work, global brand projects, and one of the most recognised independent agencies in the industry.",
  },
  {
    label: "A team that actually delivers.",
    body: "The worst thing a referral partner can do is send their audience to an agency that disappoints. We have a 94% client satisfaction rate, a 73% repeat business rate, and a track record of delivering on time. Your reputation is safe with us.",
  },
];

const steps = [
  { num: "01", title: "Apply", desc: "Fill in the form below. Tell us about yourself, your audience, and the type of partnership you're interested in. We review every application personally." },
  { num: "02", title: "Discovery call", desc: "A 20-minute call with our partnerships team to understand your network, your goals, and how we can structure the arrangement for maximum mutual benefit." },
  { num: "03", title: "Agreement & onboarding", desc: "We send a simple partnership agreement — clear terms, fair commission structure, and no lock-in. Onboarding takes less than a day." },
  { num: "04", title: "Start earning", desc: "You get your tracking link, your partner dashboard, and access to our partner toolkit. From here, you refer — we deliver — you earn." },
];

const partnerTypeOptions = ["Referral Partner", "KOL / Influencer Affiliate", "Agency Partner", "Technology Partner", "Other"];

type FormData = {
  name: string; email: string; company: string; type: string;
  audience: string; message: string;
};

export default function PartnersPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", type: "", audience: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">Partners & Affiliates</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Grow with<br />Beyond.
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed">
          Whether you're a content creator, a complementary agency, or a business with an existing network — there's a Beyond partnership built for you. Refer clients, earn recurring income, and associate your name with work you're proud to recommend.
        </p>
      </section>

      {/* ── Why partner ──────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "22ch" }}
          >
            Why our partners stay.
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

      {/* ── Partner types ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-10 reveal">Partnership types</p>
          <h2
            className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "20ch" }}
          >
            Four ways to partner with us.
          </h2>
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-3">
            {partnerTypes.map(({ Icon, type, audience, commission, recurring, desc, perks }) => (
              <div key={type} className="group flex flex-col gap-7 p-10 bg-[#F5F4F0] hover:bg-[#EEEDE9] transition-colors duration-250 rounded-sm">
                <div className="flex flex-col gap-4">
                  <div className="w-9 h-9 flex items-center justify-center text-[#0A0A0A]/35 group-hover:text-[#0A0A0A]/70 transition-colors duration-250">
                    <Icon size={18} strokeWidth={1.25} />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-sans font-light text-[#0A0A0A] tracking-[-0.02em] mb-1" style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}>
                        {type}
                      </h3>
                      <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35">{audience}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 bg-white px-3 py-1.5 rounded-sm block max-w-[9rem] text-right leading-snug">
                        {commission}
                      </span>
                      {recurring && (
                        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-green-600/70 mt-1.5 block">Recurring</span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="font-sans text-[13px] font-light text-[#0A0A0A]/55 leading-[1.75]">{desc}</p>
                <div className="flex flex-col gap-2">
                  {perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2.5">
                      <Check size={12} strokeWidth={2} className="text-[#0A0A0A]/40 shrink-0" />
                      <span className="font-sans text-[12px] text-[#0A0A0A]/55">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-10 reveal">How it works</p>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col gap-5">
                <span className="font-sans text-[11px] text-[#0A0A0A]/30">{num}</span>
                <h3 className="font-sans font-light text-[#0A0A0A] text-xl md:text-2xl tracking-[-0.015em]">{title}</h3>
                <p className="font-sans text-[13px] font-light text-[#0A0A0A]/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application form ─────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32" id="apply">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left copy */}
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8 reveal">Apply now</p>
              <h2
                className="reveal font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", maxWidth: "18ch" }}
              >
                Let's build this together.
              </h2>
              <p className="reveal font-sans text-sm md:text-[15px] font-light text-[#0A0A0A]/50 leading-[1.75] max-w-sm mb-8">
                Applications are reviewed personally by our partnerships team. We respond to every application within 3 business days — no automated emails, no templates.
              </p>
              <div className="reveal flex flex-col gap-4 text-sm font-light text-[#0A0A0A]/50">
                <p>✓ &nbsp;No exclusivity required</p>
                <p>✓ &nbsp;No minimum referral commitment</p>
                <p>✓ &nbsp;Cancel any time — your earned commissions are always paid out</p>
              </div>
            </div>

            {/* Form */}
            <div className="reveal">
              {submitted ? (
                <div className="p-10 bg-[#F5F4F0] rounded-sm text-center flex flex-col gap-4 items-center">
                  <div className="w-12 h-12 bg-[#0A0A0A] rounded-full flex items-center justify-center">
                    <Check size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-sans font-light text-[#0A0A0A] text-2xl tracking-[-0.02em]">Application received.</h3>
                  <p className="font-sans text-sm text-[#0A0A0A]/50 max-w-xs leading-relaxed">
                    We'll review your application and reach out within 3 business days. Check your inbox — including spam.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {[
                    { id: "name", label: "Full name", type: "text", required: true, value: form.name, handler: set("name") },
                    { id: "email", label: "Email address", type: "email", required: true, value: form.email, handler: set("email") },
                    { id: "company", label: "Company / channel / handle", type: "text", required: false, value: form.company, handler: set("company") },
                    { id: "audience", label: "Audience size (if KOL/influencer)", type: "text", required: false, value: form.audience, handler: set("audience") },
                  ].map(({ id, label, type, required, value, handler }) => (
                    <div key={id} className="flex flex-col gap-2">
                      <label htmlFor={id} className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/45">
                        {label}{required && " *"}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required={required}
                        value={value}
                        onChange={handler as React.ChangeEventHandler<HTMLInputElement>}
                        className="font-sans text-sm text-[#0A0A0A] bg-transparent border-b border-[#0A0A0A]/15 pb-3 outline-none focus:border-[#0A0A0A]/40 transition-colors duration-200 placeholder:text-[#0A0A0A]/25"
                        placeholder={`Enter your ${label.toLowerCase()}`}
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-2">
                    <label htmlFor="type" className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/45">
                      Partnership type *
                    </label>
                    <select
                      id="type"
                      required
                      value={form.type}
                      onChange={set("type")}
                      className="font-sans text-sm text-[#0A0A0A] bg-transparent border-b border-[#0A0A0A]/15 pb-3 outline-none focus:border-[#0A0A0A]/40 transition-colors duration-200 cursor-pointer"
                    >
                      <option value="" disabled>Select a partnership type</option>
                      {partnerTypeOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/45">
                      Why do you want to partner with Beyond? *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      className="font-sans text-sm text-[#0A0A0A] bg-transparent border-b border-[#0A0A0A]/15 pb-3 outline-none focus:border-[#0A0A0A]/40 transition-colors duration-200 resize-none placeholder:text-[#0A0A0A]/25"
                      placeholder="Tell us about your audience, your network, and what you're hoping to build together..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/55 border border-[#0A0A0A]/10 px-6 py-3.5 rounded-sm hover:bg-[#EEEDE9] hover:text-[#0A0A0A] hover:border-[#0A0A0A]/18 transition-all duration-250 self-start"
                  >
                    Submit application <ArrowUpRight size={12} strokeWidth={1.5} />
                  </button>

                  <p className="font-sans text-[11px] text-[#0A0A0A]/30 leading-relaxed">
                    By submitting you agree to be contacted by the Beyond partnerships team. We do not share your data with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
