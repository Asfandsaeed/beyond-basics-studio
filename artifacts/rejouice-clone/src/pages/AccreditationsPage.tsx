import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { useSeoMeta } from "@/hooks/useSeoMeta";

gsap.registerPlugin(ScrollTrigger);

type Org = { name: string; url: string; desc: string };
type Category = { label: string; orgs: Org[] };

const categories: Category[] = [
  {
    label: "Marketing",
    orgs: [
      { name: "American Marketing Association", url: "ama.org", desc: "Professional certifications and research for marketing leaders." },
      { name: "Data and Marketing Association", url: "thedma.org", desc: "Best practices, compliance, and community for data-driven marketers." },
      { name: "Chartered Institute of Marketing", url: "cim.co.uk", desc: "Globally recognised qualifications and a world-class professional network." },
      { name: "Insights Association", url: "insightsassociation.org", desc: "Ethical standards and education for consumer research professionals." },
      { name: "Interactive Advertising Bureau", url: "iab.com", desc: "Standards, certifications, and advocacy for the digital advertising ecosystem." },
      { name: "Performance Marketing Association", url: "performancemarketingassociation.com", desc: "Industry body for affiliate and performance-based marketing." },
      { name: "Digital Analytics Association", url: "digitalanalyticsassociation.org", desc: "Community and certification for digital analytics and SEO professionals." },
    ],
  },
  {
    label: "Design",
    orgs: [
      { name: "AIGA", url: "aiga.org", desc: "The largest professional membership organisation for design in the United States." },
      { name: "Graphic Artists Guild", url: "graphicartistsguild.org", desc: "Championing the rights of visual creators with fair pricing and ethical guidance." },
      { name: "Society of Graphic Designers of Canada", url: "gdc.design", desc: "Canada's national association for graphic design professionals." },
      { name: "Design Management Institute", url: "dmi.org", desc: "The strategic and business dimension of design leadership." },
      { name: "Type Directors Club", url: "tdc.org", desc: "Global community dedicated to the art and craft of typography." },
      { name: "Society for Experiential Graphic Design", url: "segd.org", desc: "Professional body for environmental and experiential graphic designers." },
      { name: "Industrial Designers Society of America", url: "idsa.org", desc: "Bridging product design, UX, and user-centred thinking across disciplines." },
    ],
  },
  {
    label: "Brand & Advertising",
    orgs: [
      { name: "Association of National Advertisers", url: "ana.net", desc: "One of the most powerful marketing industry organisations in the US." },
      { name: "Brand Activation Association", url: "anabrands.com", desc: "Experiential marketing, brand promotions, and activation strategies." },
      { name: "D&AD", url: "dandad.org", desc: "Global champion of design and advertising excellence. A Pencil is the highest honour." },
      { name: "Cannes Lions", url: "canneslions.com", desc: "The world's most prestigious international advertising awards." },
    ],
  },
  {
    label: "Industry Recognition",
    orgs: [
      { name: "Awwwards", url: "awwwards.com", desc: "Globally recognised platform celebrating excellence in web design and development." },
      { name: "CSS Design Awards", url: "cssdesignawards.com", desc: "Prestigious recognition for outstanding web design and user experience." },
      { name: "Webby Awards", url: "webbyawards.com", desc: "The internet's most prestigious honours for digital work." },
      { name: "Communication Arts", url: "commarts.com", desc: "One of the most respected design and advertising publications in the world." },
      { name: "Fast Company Innovation by Design", url: "fastcompany.com", desc: "Recognising design that drives meaningful impact across business and society." },
      { name: "HOW Design", url: "howdesign.com", desc: "Long-running publication and community covering the craft and culture of design." },
    ],
  },
  {
    label: "Publications & Media",
    orgs: [
      { name: "The Drum", url: "thedrum.com", desc: "One of the world's largest marketing and media publications." },
      { name: "AdAge", url: "adage.com", desc: "Leading trade publication covering the advertising and marketing industry." },
      { name: "Campaign Magazine", url: "campaignlive.com", desc: "Global publication covering advertising, marketing, and communications." },
    ],
  },
  {
    label: "Agency Communities",
    orgs: [
      { name: "Agency Nation", url: "agencynation.com", desc: "Community built specifically for independent agency owners and operators." },
      { name: "Bureau of Digital", url: "bureauofdigital.com", desc: "Exclusive community for digital agency owners — candid, practical, real." },
      { name: "Indie Hackers", url: "indiehackers.com", desc: "Community of founders and consultants building outside the VC mainstream." },
      { name: "Communitech", url: "communitech.ca", desc: "Canadian hub supporting technology and creative businesses." },
    ],
  },
  {
    label: "Business & Leadership",
    orgs: [
      { name: "Entrepreneurs' Organization", url: "eonetwork.org", desc: "Global peer network for business owners at significant revenue milestones." },
      { name: "Young Presidents' Organization", url: "ypo.org", desc: "Exclusive global community for CEOs and company presidents." },
      { name: "BNI International", url: "bni.com", desc: "World's largest structured referral networking organisation." },
      { name: "Rotary International", url: "rotary.org", desc: "One of the world's oldest and most established community organisations." },
      { name: "Chamber of Commerce", url: "uschamber.com", desc: "Local and national chambers connecting businesses across industries." },
      { name: "Federation of Small Businesses", url: "fsb.org.uk", desc: "UK membership organisation advocating for small businesses." },
      { name: "Alignable", url: "alignable.com", desc: "Small business referral network — particularly strong in North America." },
    ],
  },
  {
    label: "Platform Partnerships & Certifications",
    orgs: [
      { name: "Google Partners", url: "google.com/partners", desc: "Premier Partner status — verified expertise and performance in Google Ads." },
      { name: "Meta Business Partners", url: "facebook.com/business/partners", desc: "Recognised expertise in advertising across Facebook and Instagram." },
      { name: "HubSpot Partner Program", url: "hubspot.com/partners", desc: "Tiered agency partnership with access to co-marketing and leads." },
      { name: "Semrush Agency Partners", url: "semrush.com/agency-partners", desc: "Certified partner for SEO and digital marketing agencies." },
      { name: "Adobe Partner Connection", url: "adobe.com/partnerships", desc: "Formalised partnership within the Adobe creative and marketing ecosystem." },
      { name: "Figma Community", url: "figma.com/community", desc: "Active contributor and publisher within the global Figma design community." },
      { name: "Salesforce Partner Community", url: "salesforce.com/partners", desc: "Certified for CRM strategy and Salesforce Marketing Cloud implementation." },
      { name: "Canva Certified Expert", url: "canva.com", desc: "Certified expertise in Canva for professional and enterprise design workflows." },
      { name: "Mailchimp and Co", url: "mailchimp.com/mailchimp-and-co", desc: "Registered agency partner for email marketing and automation." },
    ],
  },
];

const FILTER_ALL = "All";

export default function AccreditationsPage() {
  useSeoMeta({
    title: "Industry Accreditations & Memberships | Beyond®",
    description: "Beyond® is affiliated with leading bodies in marketing, design, digital, and business — including AIGA, AMA, IAB, and the Design Management Institute.",
    path: "/accreditations",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Accreditations", path: "/accreditations" },
    ],
  });
  const pageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(FILTER_ALL);
  const filters = [FILTER_ALL, ...categories.map((c) => c.label)];
  const visible = active === FILTER_ALL ? categories : categories.filter((c) => c.label === active);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-h", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out", delay: 0.1 });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const totalOrgs = categories.reduce((acc, c) => acc + c.orgs.length, 0);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A] pt-24">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-8">Memberships & Accreditations</p>
        <h1
          className="page-hero-h font-sans font-light tracking-[-0.03em] leading-[1.02] text-[#0A0A0A] mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Recognised<br />by the best.
        </h1>
        <p className="font-sans text-base md:text-lg font-light text-[#0A0A0A]/50 max-w-xl leading-relaxed mb-4">
          Beyond is an active member of {totalOrgs} of the world's most respected professional design, marketing, and business organisations — spanning eight categories and four continents.
        </p>
        <p className="font-sans text-sm font-light text-[#0A0A0A]/35">
          Membership is how we stay current, stay accountable, and stay connected to the industry we love.
        </p>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-14">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-wrap gap-10">
          {[
            { value: String(totalOrgs), label: "Member organisations" },
            { value: "8", label: "Categories covered" },
            { value: "4", label: "Continents represented" },
            { value: "90+", label: "Industry awards won" },
          ].map(({ value, label }) => (
            <div key={label}>
              <span className="font-sans font-light text-[#0A0A0A] leading-none block" style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>{value}</span>
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mt-2 block">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Filter + grid ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-sans text-[11px] uppercase tracking-[0.18em] px-4 py-2.5 rounded-sm transition-all duration-200 ${
                  active === f
                    ? "bg-[#0A0A0A] text-white"
                    : "bg-[#F5F4F0] text-[#0A0A0A]/50 hover:bg-[#EEEDE9] hover:text-[#0A0A0A]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Categories */}
          {visible.map((cat) => (
            <div key={cat.label} className="mb-16">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/35 mb-6 border-b border-[#0A0A0A]/8 pb-4">
                {cat.label}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.orgs.map((org) => (
                  <a
                    key={org.name}
                    href={`https://${org.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between gap-6 p-7 bg-[#F5F4F0] hover:bg-[#EEEDE9] transition-colors duration-250 rounded-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-sans font-light text-[#0A0A0A] tracking-[-0.01em] leading-snug" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}>
                        {org.name}
                      </h3>
                      <ExternalLink size={14} strokeWidth={1.5} className="text-[#0A0A0A]/25 group-hover:text-[#0A0A0A]/70 shrink-0 mt-0.5 transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="font-sans text-[13px] font-light text-[#0A0A0A]/50 leading-relaxed mb-3">{org.desc}</p>
                      <span className="font-sans text-[10px] text-[#0A0A0A]/30">{org.url}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
