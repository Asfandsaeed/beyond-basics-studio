import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "wouter";

gsap.registerPlugin(ScrollTrigger);

const DOMAIN = "beyondbasics.studio";
const COMPANY = "Beyond Creative Studio Ltd";
const EMAIL = "legal@beyondbasics.studio";
const UPDATED = "9 May 2025";

// ─── Shared layout ─────────────────────────────────────────────────────────

function LegalLayout({ title, category, children }: { title: string; category: string; children: React.ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-h", { opacity: 0, y: 40, duration: 1, ease: "power3.out", delay: 0.1 });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">
      <section className="max-w-[820px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-24">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-6">{category}</p>
        <h1 className="page-hero-h font-sans font-light tracking-[-0.025em] leading-[1.07] text-[#0A0A0A] mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
          {title}
        </h1>
        <p className="font-sans text-sm text-[#0A0A0A]/35">Last updated: {UPDATED}</p>
      </section>
      <section className="max-w-[820px] mx-auto px-6 md:px-10 pb-28 md:pb-40">
        <div className="prose prose-sm max-w-none font-sans font-light leading-[1.8] text-[#0A0A0A]/65 [&_h2]:font-sans [&_h2]:font-light [&_h2]:text-[#0A0A0A] [&_h2]:text-xl [&_h2]:tracking-[-0.01em] [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:mb-5 [&_ul]:pl-5 [&_ul]:mb-5 [&_li]:mb-2 [&_a]:text-[#0A0A0A] [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
      </section>
    </div>
  );
}

// ─── Privacy Policy ─────────────────────────────────────────────────────────

export function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" category="Legal">
      <p>This Privacy Policy explains how {COMPANY} ("Beyond", "we", "us", or "our"), operating at {DOMAIN}, collects, uses, and protects your personal information. By using our website or services, you agree to the practices described below.</p>

      <h2>Information we collect</h2>
      <p>We may collect the following categories of personal information:</p>
      <ul>
        <li><strong>Contact information:</strong> name, email address, phone number, company name — collected when you contact us, complete a form, or sign up for our newsletter.</li>
        <li><strong>Usage data:</strong> IP address, browser type, pages visited, time on site — collected automatically via analytics tools.</li>
        <li><strong>Project information:</strong> details you share during discovery calls, briefing processes, or partnership discussions.</li>
        <li><strong>Payment information:</strong> processed securely through third-party providers (Stripe). We do not store card details.</li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use your personal information to:</p>
      <ul>
        <li>Respond to enquiries and deliver our services</li>
        <li>Send newsletters and marketing communications (only with your consent)</li>
        <li>Improve our website and understand how it is used</li>
        <li>Comply with legal obligations</li>
        <li>Manage partner and affiliate relationships</li>
      </ul>

      <h2>Legal basis for processing (GDPR)</h2>
      <p>Where applicable, we process your data under one of the following lawful bases: your consent; the performance of a contract; our legitimate interests; or compliance with a legal obligation.</p>

      <h2>Data retention</h2>
      <p>We retain personal data only as long as necessary for the purposes it was collected. Client project data is retained for seven years for contractual and tax compliance purposes. Marketing data is deleted upon unsubscribe or after 24 months of inactivity.</p>

      <h2>Third parties</h2>
      <p>We do not sell your personal data. We may share it with trusted service providers (hosting, analytics, payment processing, email delivery) who are contractually obligated to protect it. We may also share data where required by law.</p>

      <h2>Cookies</h2>
      <p>Our website uses essential cookies for functionality and optional analytics cookies to understand traffic. You can manage cookie preferences through your browser settings. We do not use advertising cookies.</p>

      <h2>Your rights</h2>
      <p>You have the right to access, correct, delete, or restrict processing of your personal data. You may also object to processing or request data portability. To exercise any of these rights, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

      <h2>International transfers</h2>
      <p>Your data may be transferred to and processed in countries outside the UK and EU. Where this occurs, we ensure appropriate safeguards are in place in accordance with applicable data protection law.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. Material changes will be communicated via email or a prominent notice on our website. Your continued use of our services after changes constitutes acceptance.</p>

      <h2>Contact</h2>
      <p>For privacy-related questions, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or write to {COMPANY}, San Francisco, CA, USA.</p>
    </LegalLayout>
  );
}

// ─── Terms & Conditions ─────────────────────────────────────────────────────

export function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" category="Legal">
      <p>These Terms and Conditions govern your use of the website at {DOMAIN} and any services provided by {COMPANY} ("Beyond"). By accessing our website or engaging our services, you agree to these terms in full.</p>

      <h2>Services</h2>
      <p>Beyond provides brand strategy, brand identity, digital experience, growth marketing, and content and creative services. The specific scope, deliverables, timeline, and fees for each engagement are set out in a separate Statement of Work or proposal document, which forms part of the contract between you and Beyond.</p>

      <h2>Intellectual property</h2>
      <p>Upon receipt of full payment, Beyond assigns all intellectual property rights in the final deliverables to the client. We retain the right to display work in our portfolio and award submissions unless explicitly agreed otherwise in writing. Preliminary concepts, rejected directions, and working files remain the property of Beyond unless separately agreed.</p>

      <h2>Confidentiality</h2>
      <p>Both parties agree to treat the other's confidential information with care and not to disclose it to third parties without prior written consent. This obligation survives termination of the engagement.</p>

      <h2>Payment</h2>
      <p>All fees are due according to the payment schedule in the relevant Statement of Work. Invoices are payable within 14 days of issue. Beyond reserves the right to pause work on overdue accounts. Late payments accrue interest at 8% per annum above the Bank of England base rate.</p>

      <h2>Revisions and approvals</h2>
      <p>Each project phase includes a defined number of revision rounds as specified in your proposal. Additional revisions beyond the agreed scope will be quoted separately. Client approval at each milestone constitutes acceptance and unlocks the next phase.</p>

      <h2>Cancellation</h2>
      <p>If a client wishes to cancel a project, any fees paid for completed phases are non-refundable. Beyond will invoice for work completed in the current phase on a pro-rata basis. See our Refund Policy for full details.</p>

      <h2>Limitation of liability</h2>
      <p>Beyond's liability in connection with any engagement shall not exceed the total fees paid by the client for that engagement. We are not liable for indirect, consequential, or incidental losses, including loss of profits or business opportunity.</p>

      <h2>Warranties</h2>
      <p>Beyond warrants that its work will be original and will not knowingly infringe any third-party intellectual property rights. The client warrants that all materials and information provided to Beyond are owned by or licensed to the client and do not infringe any third-party rights.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

      <h2>Changes to these terms</h2>
      <p>We reserve the right to update these terms at any time. Continued use of our website following any update constitutes acceptance of the revised terms.</p>

      <h2>Contact</h2>
      <p>Questions about these terms should be directed to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </LegalLayout>
  );
}

// ─── Refund Policy ──────────────────────────────────────────────────────────

export function RefundsPage() {
  return (
    <LegalLayout title="Refund Policy" category="Legal">
      <p>This Refund Policy applies to all services provided by {COMPANY} ("Beyond") and is incorporated into our Terms and Conditions. We are committed to fair and transparent commercial practices.</p>

      <h2>Project deposits</h2>
      <p>All projects require a 50% deposit upon project kick-off. This deposit is non-refundable. It covers discovery, team allocation, and the initial strategy and planning work that begins immediately upon signing.</p>

      <h2>Phase-based billing</h2>
      <p>For larger engagements billed in three milestones, each milestone payment covers the work delivered in that phase. Payments for completed and approved phases are non-refundable.</p>

      <h2>Client-initiated cancellations</h2>
      <p>If you cancel a project before it begins (before the agreed start date), your deposit will be refunded in full within 14 business days.</p>
      <p>If you cancel during an active phase, Beyond will invoice for the work completed in that phase on a pro-rata basis. Any amount paid in excess of work completed will be refunded within 14 business days of a final accounting.</p>

      <h2>Beyond-initiated termination</h2>
      <p>If Beyond terminates an engagement due to a material breach by the client (including non-payment), fees for completed phases are due in full. No refund will be issued for any completed and approved work.</p>
      <p>If Beyond terminates an engagement for reasons not attributable to the client, a full refund for the uncompleted portion of the project will be provided within 14 business days.</p>

      <h2>Monthly retainers</h2>
      <p>Partnership retainers may be cancelled with 30 days' written notice. The notice period begins on the first day of the following calendar month. Retainer fees for the notice period are non-refundable. There are no lock-in periods beyond the 30-day notice requirement.</p>

      <h2>Sprint engagements</h2>
      <p>Sprint engagements are fixed-price, fixed-scope, and fixed-timeline. Once a Sprint is underway, the full fee is due. Cancellations prior to kick-off are subject to a 25% cancellation fee.</p>

      <h2>Disputes</h2>
      <p>If you believe you are owed a refund that has not been processed, please contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within 3 business days and work to resolve the matter fairly and promptly.</p>

      <h2>Processing time</h2>
      <p>All approved refunds are processed within 14 business days and returned to the original payment method.</p>

      <h2>Contact</h2>
      <p>For refund enquiries, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </LegalLayout>
  );
}

// ─── Sitemap page ───────────────────────────────────────────────────────────

const sitemapSections = [
  {
    label: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Design for Good", href: "/design-for-good" },
      { label: "Accreditations", href: "/accreditations" },
    ],
  },
  {
    label: "Partners",
    links: [
      { label: "Become a Partner", href: "/partners" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Journal", href: "/journal" },
      { label: "Our Process", href: "/process" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refunds" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export function SitemapPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(".page-hero-h", { opacity: 0, y: 40, duration: 1, ease: "power3.out", delay: 0.1 });
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">Sitemap</p>
        <h1 className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-16" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>
          All pages.
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {sitemapSections.map((s) => (
            <div key={s.label}>
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-5">{s.label}</p>
              <div className="flex flex-col gap-3">
                {s.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="font-sans text-sm font-light text-[#0A0A0A] hover:text-[#0A0A0A]/50 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
