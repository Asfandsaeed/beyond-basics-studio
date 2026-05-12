import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

// ─── Per-page metadata ────────────────────────────────────────────────────────
// Every path in this map gets a unique <title>, <meta name="description">,
// <link rel="canonical">, and a visually-hidden <h1> injected into the static
// HTML so non-JS crawlers see proper, indexable content on each page.
// NOTE: all paths must end with "/" so GitHub Pages canonical URLs match.
interface PageMeta { title: string; desc: string; h1: string }

const PAGE_META: Record<string, PageMeta> = {
  // ── Core ──────────────────────────────────────────────────────────────────
  "/": {
    title: "Beyond® — Creative Growth Agency",
    desc: "Beyond® partners with ambitious companies to become category leaders. Brand strategy, identity, web design, motion, 3D & WebGL. Tomorrow's brands, today.",
    h1: "Tomorrow's brands, today.",
  },
  "/work/": {
    title: "Our Work | Beyond®",
    desc: "Case studies across 24 brands we've built, rebuilt, and grown. Brand strategy, identity, and digital experience from Beyond®.",
    h1: "Work that defines categories.",
  },
  "/services/": {
    title: "Services | Beyond®",
    desc: "Brand strategy, visual identity, digital experience, and growth marketing — end-to-end brand building from Beyond®.",
    h1: "What we do.",
  },
  "/industries/": {
    title: "Industries | Beyond®",
    desc: "We've built brands across 50+ industries — from SaaS and fintech to fashion, healthcare, and hospitality.",
    h1: "Your industry. Our expertise.",
  },
  "/contact/": {
    title: "Contact | Beyond®",
    desc: "Start a brand project with Beyond®. Tell us what you're building and we'll be in touch.",
    h1: "Start a project.",
  },
  // ── Company ───────────────────────────────────────────────────────────────
  "/about/": {
    title: "About | Beyond®",
    desc: "Beyond® is a creative growth agency. We partner with ambitious companies to help them lead their categories through brand strategy and design.",
    h1: "We exist to build tomorrow's brands.",
  },
  "/careers/": {
    title: "Careers | Beyond®",
    desc: "Join the team at Beyond®. We're always looking for exceptional creative and strategic talent.",
    h1: "Join Beyond®.",
  },
  "/design-for-good/": {
    title: "Design for Good | Beyond®",
    desc: "Beyond® partners with non-profits and social enterprises to deliver brand work that drives real change.",
    h1: "Brand for those who do good.",
  },
  "/accreditations/": {
    title: "Accreditations | Beyond®",
    desc: "Beyond® holds accreditations across branding, digital, and marketing from the industry's leading organisations.",
    h1: "Industry-recognized credentials.",
  },
  "/press/": {
    title: "Press | Beyond®",
    desc: "Coverage, features, and mentions of Beyond® in the press. Media enquiries welcome.",
    h1: "Beyond® in the press.",
  },
  "/partners/": {
    title: "Partners | Beyond®",
    desc: "Our network of trusted technology and service partners who help us deliver exceptional brand work.",
    h1: "Our partner network.",
  },
  // ── Content & Resources ───────────────────────────────────────────────────
  "/journal/": {
    title: "Journal | Beyond®",
    desc: "Insights on brand strategy, identity, digital experience, and growth marketing from the Beyond® team.",
    h1: "The Beyond® Journal.",
  },
  "/process/": {
    title: "Our Process | Beyond®",
    desc: "How we work at Beyond® — from first brief to final launch. A rigorous, collaborative process built for ambitious brands.",
    h1: "How we work.",
  },
  "/faq/": {
    title: "FAQ | Beyond®",
    desc: "Answers to the most common questions about working with Beyond® — pricing, timelines, process, and more.",
    h1: "Frequently asked questions.",
  },
  "/pricing/": {
    title: "Pricing | Beyond®",
    desc: "Transparent pricing for brand strategy, identity, and digital experience. No hourly rates, no surprises.",
    h1: "Transparent pricing.",
  },
  "/testimonials/": {
    title: "Testimonials | Beyond®",
    desc: "What our clients say about working with Beyond® — from founders to marketing leaders.",
    h1: "What our clients say.",
  },
  "/awards/": {
    title: "Awards | Beyond®",
    desc: "Beyond® has won 90+ industry awards from Awwwards, FWA, CSSDA, and more.",
    h1: "90+ industry awards.",
  },
  "/newsletter/": {
    title: "Newsletter | Beyond®",
    desc: "Subscribe to the Beyond® newsletter for weekly insights on brand strategy, design, and growth.",
    h1: "The Beyond® newsletter.",
  },
  "/glossary/": {
    title: "Brand Glossary | Beyond®",
    desc: "Plain-English definitions of brand strategy, design, and marketing terms — from brand identity to WebGL.",
    h1: "Brand & design glossary.",
  },
  "/resources/": {
    title: "Resources | Beyond®",
    desc: "Free brand resources — guides, templates, and checklists for founders and marketers building category-defining brands.",
    h1: "Free brand resources.",
  },
  // ── Legal ─────────────────────────────────────────────────────────────────
  "/privacy-policy/": {
    title: "Privacy Policy | Beyond®",
    desc: "Beyond® privacy policy — how we collect, use, and protect your data.",
    h1: "Privacy Policy.",
  },
  "/terms/": {
    title: "Terms & Conditions | Beyond®",
    desc: "Beyond® terms and conditions governing the use of our services and website.",
    h1: "Terms & Conditions.",
  },
  "/refunds/": {
    title: "Refund Policy | Beyond®",
    desc: "Beyond® refund policy — our approach to refunds and project cancellations.",
    h1: "Refund Policy.",
  },
  "/sitemap/": {
    title: "Sitemap | Beyond®",
    desc: "A complete list of all pages on the Beyond® website.",
    h1: "Sitemap.",
  },
  // ── Work ──────────────────────────────────────────────────────────────────
  "/work/clear-street/": {
    title: "Clear Street | Beyond®",
    desc: "Brand identity and digital experience for Clear Street — financial infrastructure designed for the future.",
    h1: "Clear Street — Designed for the Future.",
  },
  "/work/remote/": {
    title: "Remote | Beyond®",
    desc: "Brand strategy and identity for Remote — the global HR platform making international hiring stress-free.",
    h1: "Remote — Stress-free global hiring.",
  },
  "/work/multiversx/": {
    title: "MultiversX | Beyond®",
    desc: "Brand identity for MultiversX — the blockchain ecosystem built to scale across the multiverse.",
    h1: "MultiversX — Scale across the Multiverse.",
  },
  "/work/phive/": {
    title: "Phive | Beyond®",
    desc: "Brand expansion strategy for Phive — helping a fitness brand scale consistently across Portugal.",
    h1: "Phive — Activate your senses.",
  },
  "/work/floema/": {
    title: "Floema | Beyond®",
    desc: "Brand and digital experience for Floema — natural skincare made for life.",
    h1: "Floema — Made for Life.",
  },
  "/work/tuu/": {
    title: "TUU | Beyond®",
    desc: "Brand identity for TUU — everyday lifestyle products shaped for modern living.",
    h1: "TUU — Shaping Everyday Life.",
  },
  "/work/redacted/": {
    title: "Redacted RnD | Beyond®",
    desc: "Brand identity for Redacted RnD — stealth-mode innovation, hidden in plain sight.",
    h1: "Redacted RnD — Hidden in plain sight.",
  },
  "/work/grabgo/": {
    title: "Grab&Go | Beyond®",
    desc: "Brand identity for Grab&Go — the convenience retail brand open 24 hours every day.",
    h1: "Grab&Go — Open 24 hours every day.",
  },
  "/work/flowcase/": {
    title: "Flowcase | Beyond®",
    desc: "Brand and digital experience for Flowcase — portfolio software that helps agencies win more bids.",
    h1: "Flowcase — Win bids with stellar resumes.",
  },
  "/work/jeton/": {
    title: "Jeton | Beyond®",
    desc: "Brand identity and digital experience for Jeton — modern fintech built for tomorrow.",
    h1: "Jeton — Modern fintech.",
  },
  "/work/keikku/": {
    title: "Keikku | Beyond®",
    desc: "Brand identity for Keikku — medical device branding built around the human, not the clinical.",
    h1: "Keikku — Simplicity as strategy.",
  },
  "/work/kozowood/": {
    title: "Kōzōwood | Beyond®",
    desc: "Brand identity for Kōzōwood — the engineered timber company leading the building revolution.",
    h1: "Kōzōwood — Building the revolution.",
  },
  "/work/talent-protocol/": {
    title: "Talent Protocol | Beyond®",
    desc: "Brand identity for Talent Protocol — the professional reputation layer for Web3.",
    h1: "Talent Protocol — Your on-chain reputation.",
  },
  "/work/flecto/": {
    title: "Flecto | Beyond®",
    desc: "Brand identity for Flecto — flexible workspace solutions for the modern workforce.",
    h1: "Flecto — Flexible workspace, redefined.",
  },
  "/work/hematogenix/": {
    title: "Hematogenix | Beyond®",
    desc: "Brand identity for Hematogenix — specialist diagnostics built on clinical precision.",
    h1: "Hematogenix — Clinical precision.",
  },
  "/work/speedy/": {
    title: "Speedy | Beyond®",
    desc: "Brand identity for Speedy — fast, reliable logistics for the modern supply chain.",
    h1: "Speedy — Fast, reliable logistics.",
  },
  "/work/care-to-beauty/": {
    title: "Care to Beauty | Beyond®",
    desc: "Brand and digital experience for Care to Beauty — Europe's leading pharmacy and beauty destination.",
    h1: "Care to Beauty — Beauty with purpose.",
  },
  // ── Services ──────────────────────────────────────────────────────────────
  "/services/brand-strategy/": {
    title: "Brand Strategy | Beyond®",
    desc: "Clarity before creation. Brand strategy for ambitious companies — positioning, messaging, and competitive differentiation.",
    h1: "Brand Strategy — Clarity before creation.",
  },
  "/services/brand-identity/": {
    title: "Brand Identity | Beyond®",
    desc: "Identity that earns attention. Visual identity systems — logo, typography, colour, motion, and brand guidelines.",
    h1: "Brand Identity — Identity that earns attention.",
  },
  "/services/digital-experience/": {
    title: "Digital Experience | Beyond®",
    desc: "Websites that convert and inspire. Award-winning web design and development from Beyond®.",
    h1: "Digital Experience — Websites that convert and inspire.",
  },
  "/services/growth-marketing/": {
    title: "Growth Marketing | Beyond®",
    desc: "Brand-led growth that compounds. Growth strategy, paid creative, SEO, and email marketing from Beyond®.",
    h1: "Growth Marketing — Brand-led growth that compounds.",
  },
  "/services/content-creative/": {
    title: "Content & Creative | Beyond®",
    desc: "Content that earns its place. Photography, film, and creative production from Beyond®.",
    h1: "Content & Creative — Content that earns its place.",
  },
  "/services/brand-strategy-for-fintech/": {
    title: "Brand Strategy for Fintech | Beyond®",
    desc: "Brand strategy built for the complexity of financial services — positioning fintech companies for trust and growth.",
    h1: "Brand Strategy for Fintech.",
  },
  "/services/brand-strategy-for-startups/": {
    title: "Brand Strategy for Startups | Beyond®",
    desc: "Brand strategy for startups — built to raise faster, hire better, and grow harder.",
    h1: "Brand Strategy for Startups.",
  },
  "/services/brand-identity-for-fintech/": {
    title: "Brand Identity for Fintech | Beyond®",
    desc: "Visual systems built for financial credibility — brand identity for banks, fintechs, and payment companies.",
    h1: "Brand Identity for Fintech.",
  },
  "/services/brand-identity-for-saas/": {
    title: "Brand Identity for SaaS | Beyond®",
    desc: "Identity systems built to scale with your product — brand identity for SaaS companies from seed to IPO.",
    h1: "Brand Identity for SaaS.",
  },
  "/services/brand-identity-for-web3/": {
    title: "Brand Identity for Web3 | Beyond®",
    desc: "Ownable identity for decentralized brands — brand identity for NFT projects, DAOs, and Web3 platforms.",
    h1: "Brand Identity for Web3.",
  },
  "/services/brand-identity-for-startups/": {
    title: "Brand Identity for Startups | Beyond®",
    desc: "Brand identity for startups — from seed-stage to Series B and beyond.",
    h1: "Brand Identity for Startups.",
  },
  "/services/brand-identity-for-healthcare/": {
    title: "Brand Identity for Healthcare | Beyond®",
    desc: "Brand identity for healthcare providers, medtech, and pharma — built on trust, warmth, and clinical authority.",
    h1: "Brand Identity for Healthcare.",
  },
  "/services/brand-identity-for-ecommerce/": {
    title: "Brand Identity for E-commerce | Beyond®",
    desc: "Visual identity for DTC and e-commerce brands — built to win on the shelf, the feed, and the homepage.",
    h1: "Brand Identity for E-commerce.",
  },
  "/services/digital-experience-for-fintech/": {
    title: "Digital Experience for Fintech | Beyond®",
    desc: "Web design and development for fintech companies — converting visitors into customers with clarity and trust.",
    h1: "Digital Experience for Fintech.",
  },
  "/services/digital-experience-for-saas/": {
    title: "Digital Experience for SaaS | Beyond®",
    desc: "High-converting websites for SaaS products — designed to reduce churn and accelerate trial-to-paid conversion.",
    h1: "Digital Experience for SaaS.",
  },
  "/services/digital-experience-for-ecommerce/": {
    title: "Digital Experience for E-commerce | Beyond®",
    desc: "Conversion-focused web design for e-commerce brands — reducing CAC and increasing LTV through brand-led UX.",
    h1: "Digital Experience for E-commerce.",
  },
  "/services/digital-experience-for-web3/": {
    title: "Digital Experience for Web3 | Beyond®",
    desc: "Web3-native digital experiences for protocols, platforms, and decentralized applications.",
    h1: "Digital Experience for Web3.",
  },
  "/services/growth-marketing-for-saas/": {
    title: "Growth Marketing for SaaS | Beyond®",
    desc: "Brand-led growth marketing for SaaS products — strategy, paid creative, and content that compounds.",
    h1: "Growth Marketing for SaaS.",
  },
  "/services/growth-marketing-for-fintech/": {
    title: "Growth Marketing for Fintech | Beyond®",
    desc: "Growth marketing for fintech companies — brand-consistent creative and performance strategy.",
    h1: "Growth Marketing for Fintech.",
  },
  // ── Industries ────────────────────────────────────────────────────────────
  "/industries/saas/": {
    title: "SaaS Branding Agency | Beyond®",
    desc: "Brand strategy and identity for SaaS companies. We build brand systems that reduce churn, accelerate trial-to-paid conversion, and compound ARR.",
    h1: "SaaS — Brand that converts trial users into loyal subscribers.",
  },
  "/industries/tech-companies/": {
    title: "Tech Company Branding | Beyond®",
    desc: "Brand identity for technology companies — enterprise credibility with startup energy.",
    h1: "Tech Companies — Enterprise credibility with startup energy.",
  },
  "/industries/ai-startups/": {
    title: "AI Startup Branding | Beyond®",
    desc: "Brand strategy for AI startups — cut through the noise with clarity, credibility, and conviction.",
    h1: "AI Startups — Brand that earns trust before the demo.",
  },
  "/industries/crypto-projects/": {
    title: "Crypto Branding Agency | Beyond®",
    desc: "Brand identity for crypto projects, exchanges, and protocols — legitimacy in a market built on hype.",
    h1: "Crypto Projects — Legitimacy in a market built on hype.",
  },
  "/industries/web3-brands/": {
    title: "Web3 Branding Agency | Beyond®",
    desc: "Brand identity for NFT projects, DAOs, and decentralized platforms — ownable identity for a decentralized world.",
    h1: "Web3 Brands — Ownable identity for a decentralized world.",
  },
  "/industries/mobile-apps/": {
    title: "Mobile App Branding | Beyond®",
    desc: "Brand strategy for mobile apps — App Store presence that converts browsers to downloaders.",
    h1: "Mobile Apps — App store presence that converts browsers to downloaders.",
  },
  "/industries/software-companies/": {
    title: "Software Company Branding | Beyond®",
    desc: "Brand identity for software companies — brand that sells software before the sales call.",
    h1: "Software Companies — Brand that sells software before the sales call.",
  },
  "/industries/startups/": {
    title: "Startup Branding Agency | Beyond®",
    desc: "Brand strategy for startups — raise faster, hire better, and grow harder with a brand built to scale.",
    h1: "Startups — Startup brand that raises faster, hires better, and grows harder.",
  },
  "/industries/ecommerce/": {
    title: "E-commerce Branding Agency | Beyond®",
    desc: "Brand strategy and identity for e-commerce businesses — brand that drives add-to-cart before the price check.",
    h1: "E-commerce — Brand that drives add-to-cart before the price check.",
  },
  "/industries/dtc-brands/": {
    title: "DTC Brand Agency | Beyond®",
    desc: "Brand identity for direct-to-consumer brands — brand that earns loyalty at first touch.",
    h1: "DTC Brands — Direct-to-consumer brand that earns loyalty at first touch.",
  },
  "/industries/ecommerce-fashion/": {
    title: "Fashion E-commerce Branding | Beyond®",
    desc: "Brand identity for fashion e-commerce — brand that makes scrollers stop and shoppers buy.",
    h1: "E-commerce Fashion — Brand that makes scrollers stop and shoppers buy.",
  },
  "/industries/subscription-businesses/": {
    title: "Subscription Business Branding | Beyond®",
    desc: "Brand strategy for subscription businesses — brand that makes subscribers excited to be charged.",
    h1: "Subscription Businesses — Brand that makes subscribers excited to be charged.",
  },
  "/industries/healthcare/": {
    title: "Healthcare Branding Agency | Beyond®",
    desc: "Brand identity for healthcare organizations — brand that makes patients trust before the first appointment.",
    h1: "Healthcare — Brand that makes patients trust before the first appointment.",
  },
  "/industries/dentists/": {
    title: "Dental Practice Branding | Beyond®",
    desc: "Brand identity for dental practices — a practice brand that patients are proud to refer.",
    h1: "Dentists — A practice brand that patients are proud to refer.",
  },
  "/industries/doctors/": {
    title: "Doctor Personal Branding | Beyond®",
    desc: "Personal brand for physicians — positioning you as the authority in your specialty.",
    h1: "Doctors — Personal brand that positions you as the authority in your specialty.",
  },
  "/industries/fitness-brands/": {
    title: "Fitness Brand Agency | Beyond®",
    desc: "Brand strategy for fitness brands — brand that motivates before the first workout.",
    h1: "Fitness Brands — Brand that motivates before the first workout.",
  },
  "/industries/gyms/": {
    title: "Gym Branding Agency | Beyond®",
    desc: "Brand identity for gyms — a gym brand that sells memberships before the tour.",
    h1: "Gyms — A gym brand that sells memberships before the tour.",
  },
  "/industries/local-businesses/": {
    title: "Local Business Branding | Beyond®",
    desc: "Brand identity for local businesses — become the most trusted name in your neighborhood.",
    h1: "Local Businesses — The most trusted name in your neighborhood.",
  },
  "/industries/hvac-companies/": {
    title: "HVAC Company Branding | Beyond®",
    desc: "Brand identity for HVAC companies — the HVAC brand homeowners trust before they need you.",
    h1: "HVAC Companies — The HVAC brand homeowners trust before they need you.",
  },
  "/industries/roofers/": {
    title: "Roofing Company Branding | Beyond®",
    desc: "Brand identity for roofing companies — the roofing company homeowners call without getting three quotes.",
    h1: "Roofers — The roofing company homeowners call without getting three quotes.",
  },
  "/industries/construction-companies/": {
    title: "Construction Company Branding | Beyond®",
    desc: "Brand identity for construction companies — the construction brand that clients are proud to recommend.",
    h1: "Construction Companies — The construction brand that clients are proud to recommend.",
  },
  "/industries/automotive-businesses/": {
    title: "Automotive Business Branding | Beyond®",
    desc: "Brand identity for automotive businesses — brand that earns loyalty in the most trust-sensitive purchase of a customer's life.",
    h1: "Automotive Businesses — Brand that earns loyalty in the most trust-sensitive purchase.",
  },
  "/industries/franchises/": {
    title: "Franchise Branding Agency | Beyond®",
    desc: "Brand systems for franchises — brand consistency that makes every location feel like the flagship.",
    h1: "Franchises — Brand consistency that makes every location feel like the flagship.",
  },
  "/industries/logistics-companies/": {
    title: "Logistics Company Branding | Beyond®",
    desc: "Brand identity for logistics companies — reliability you can see before the first delivery.",
    h1: "Logistics Companies — Reliability you can see before the first delivery.",
  },
  "/industries/manufacturing-companies/": {
    title: "Manufacturing Company Branding | Beyond®",
    desc: "Brand identity for manufacturing companies — industrial brand that commands premium pricing in any market.",
    h1: "Manufacturing Companies — Industrial brand that commands premium pricing in any market.",
  },
  "/industries/lawyers/": {
    title: "Law Firm Branding Agency | Beyond®",
    desc: "Brand identity for lawyers and law firms — legal brand that wins clients before the consultation.",
    h1: "Lawyers — Legal brand that wins clients before the consultation.",
  },
  "/industries/realtors/": {
    title: "Realtor Personal Branding | Beyond®",
    desc: "Brand identity for realtors — the real estate brand that sellers choose before they list.",
    h1: "Realtors — The real estate brand that sellers choose before they list.",
  },
  "/industries/coaches/": {
    title: "Coaching Business Branding | Beyond®",
    desc: "Personal brand for coaches — fills your calendar without cold outreach.",
    h1: "Coaches — Personal brand that fills your calendar without cold outreach.",
  },
  "/industries/consultants/": {
    title: "Consulting Brand Agency | Beyond®",
    desc: "Brand identity for consultants — consulting brand that commands retainer relationships.",
    h1: "Consultants — Consulting brand that commands retainer relationships.",
  },
  "/industries/agencies/": {
    title: "Agency Branding | Beyond®",
    desc: "Brand identity for agencies — the agency brand that other agencies aspire to.",
    h1: "Agencies — The agency brand that other agencies aspire to.",
  },
  "/industries/influencers/": {
    title: "Influencer Branding Agency | Beyond®",
    desc: "Creator brand for influencers — builds audience you own, not just followers you borrow.",
    h1: "Influencers — Creator brand that builds audience you own.",
  },
  "/industries/creators/": {
    title: "Creator Branding Agency | Beyond®",
    desc: "Brand identity for creators — your creative work deserves a brand as good as the work itself.",
    h1: "Creators — Your creative work deserves a brand as good as the work itself.",
  },
  "/industries/personal-brands/": {
    title: "Personal Branding Agency | Beyond®",
    desc: "Personal brand development — the most authentic version of you, made visible.",
    h1: "Personal Brands — The most authentic version of you, made visible.",
  },
  "/industries/photographers/": {
    title: "Photography Brand Agency | Beyond®",
    desc: "Brand identity for photographers — portfolio brand as strong as your best shot.",
    h1: "Photographers — Portfolio brand as strong as your best shot.",
  },
  "/industries/event-companies/": {
    title: "Event Company Branding | Beyond®",
    desc: "Brand identity for event companies — event brand that books out before the venue is announced.",
    h1: "Event Companies — Event brand that books out before the venue is announced.",
  },
  "/industries/restaurants/": {
    title: "Restaurant Branding Agency | Beyond®",
    desc: "Brand identity for restaurants — restaurant brand that fills tables before the first review.",
    h1: "Restaurants — Restaurant brand that fills tables before the first review.",
  },
  "/industries/hotels/": {
    title: "Hotel Branding Agency | Beyond®",
    desc: "Brand identity for hotels — hospitality brand that books direct and builds loyalty.",
    h1: "Hotels — Hospitality brand that books direct and builds loyalty.",
  },
  "/industries/hospitality-businesses/": {
    title: "Hospitality Business Branding | Beyond®",
    desc: "Brand identity for hospitality businesses — guest experience brand that earns the five-star review before checkout.",
    h1: "Hospitality Businesses — Guest experience brand that earns the five-star review.",
  },
  "/industries/travel-agencies/": {
    title: "Travel Agency Branding | Beyond®",
    desc: "Brand identity for travel agencies — travel brand that makes clients trust you with the trips that matter.",
    h1: "Travel Agencies — Travel brand that makes clients trust you with the trips that matter.",
  },
  "/industries/fashion-brands/": {
    title: "Fashion Brand Agency | Beyond®",
    desc: "Brand identity for fashion brands — fashion brand with the cultural gravity to set trends, not follow them.",
    h1: "Fashion Brands — Fashion brand with the cultural gravity to set trends.",
  },
  "/industries/beauty-brands/": {
    title: "Beauty Brand Agency | Beyond®",
    desc: "Brand identity for beauty brands — built for the Sephora shelf and the algorithm simultaneously.",
    h1: "Beauty Brands — Built for the Sephora shelf and the algorithm.",
  },
  "/industries/skincare-brands/": {
    title: "Skincare Brand Agency | Beyond®",
    desc: "Brand identity for skincare brands — brand that earns trust in the most skeptical category in beauty.",
    h1: "Skincare Brands — Brand that earns trust in the most skeptical category in beauty.",
  },
  "/industries/food-brands/": {
    title: "Food Brand Agency | Beyond®",
    desc: "Brand identity for food brands — food brand that wins shelf space with story, not just spec.",
    h1: "Food Brands — Food brand that wins shelf space with story, not just spec.",
  },
  "/industries/salons/": {
    title: "Salon Branding Agency | Beyond®",
    desc: "Brand identity for salons — salon brand that books your chairs before you open the door.",
    h1: "Salons — Salon brand that books your chairs before you open the door.",
  },
  "/industries/real-estate-companies/": {
    title: "Real Estate Company Branding | Beyond®",
    desc: "Brand identity for real estate companies — real estate brand that attracts premium listings and top producers.",
    h1: "Real Estate Companies — Real estate brand that attracts premium listings.",
  },
  "/industries/interior-designers/": {
    title: "Interior Design Studio Branding | Beyond®",
    desc: "Brand identity for interior designers — design studio brand worthy of the spaces you create.",
    h1: "Interior Designers — Design studio brand worthy of the spaces you create.",
  },
  "/industries/architects/": {
    title: "Architecture Practice Branding | Beyond®",
    desc: "Brand identity for architects — architecture practice brand that wins the design competition before the jury meets.",
    h1: "Architects — Architecture practice brand that wins the design competition.",
  },
  "/industries/financial-services/": {
    title: "Financial Services Branding | Beyond®",
    desc: "Brand identity for financial services firms — financial brand built on trust, the only thing that matters in your industry.",
    h1: "Financial Services — Financial brand built on trust.",
  },
  "/industries/educational-institutions/": {
    title: "Education Branding Agency | Beyond®",
    desc: "Brand identity for educational institutions — institution brand that attracts students, faculty, and funding simultaneously.",
    h1: "Educational Institutions — Institution brand that attracts students, faculty, and funding.",
  },
  "/industries/nonprofits/": {
    title: "Non-profit Branding Agency | Beyond®",
    desc: "Brand identity for non-profits — mission brand that turns passive supporters into active advocates.",
    h1: "Nonprofits — Mission brand that turns passive supporters into active advocates.",
  },
  // ── Journal ───────────────────────────────────────────────────────────────
  "/journal/tensor-brand-90-days/": {
    title: "How We Built a Brand in 90 Days | Beyond® Journal",
    desc: "A first-person account of renaming and completely rebuilding a blockchain ecosystem brand — in under three months. What the sprint taught us about conviction, speed, and great work.",
    h1: "How We Built a Brand in 90 Days.",
  },
  "/journal/brand-led-growth/": {
    title: "Brand-Led Growth | Beyond® Journal",
    desc: "Performance marketing has become a commodity. The companies that win long-term are the ones that treat brand as their most important growth lever.",
    h1: "Brand-Led Growth: Why the Best Companies Lead with Brand.",
  },
  "/journal/oura-simplicity-strategy/": {
    title: "Simplicity as Strategy | Beyond® Journal",
    desc: "In a category defined by clinical complexity, a brand needed to put the human at the centre. Here's how we stripped back the noise to find the truth of the product.",
    h1: "Simplicity as Strategy.",
  },
  "/journal/art-of-naming/": {
    title: "The Art of Naming | Beyond® Journal",
    desc: "We've named dozens of companies and products. Here's the framework we use — and why so many 'safe' names end up costing companies more than a bold one would have.",
    h1: "The Art of Naming: What Makes a Brand Name Great.",
  },
  "/journal/moxion-sustainable-brand/": {
    title: "Branding the Building Revolution | Beyond® Journal",
    desc: "How do you make engineered timber feel like an urgent, inevitable movement? The answer was to lead with precision, not green credentials.",
    h1: "Branding the Building Revolution.",
  },
  "/journal/award-worthy-digital-experience/": {
    title: "What Makes a Digital Experience Award-Worthy? | Beyond® Journal",
    desc: "We've won 90+ industry awards across Awwwards, FWA, and CSSDA. Here's what separates a beautiful website from a truly exceptional one.",
    h1: "What Makes a Digital Experience Award-Worthy?",
  },
  "/journal/photography-as-brand-language/": {
    title: "Photography as Brand Language | Beyond® Journal",
    desc: "The images a brand chooses communicate everything about what that brand believes. Most companies treat photography as decoration. The ones that win treat it as argument.",
    h1: "Photography as Brand Language.",
  },
  "/journal/pre-launch-brand-building/": {
    title: "Pre-Launch Brand Building | Beyond® Journal",
    desc: "Building your brand before launch is the highest-leverage investment a founder can make. Here's how to do it right.",
    h1: "Pre-Launch Brand Building.",
  },
  // ── Glossary ──────────────────────────────────────────────────────────────
  "/glossary/brand-identity/": {
    title: "What Is Brand Identity? | Beyond® Glossary",
    desc: "Brand identity is the visual and verbal system that makes a brand recognisable — logo, typography, colour, and the rules that govern how they're used.",
    h1: "Brand Identity — Defined.",
  },
  "/glossary/brand-strategy/": {
    title: "What Is Brand Strategy? | Beyond® Glossary",
    desc: "Brand strategy is the long-term plan for how a brand positions itself, communicates, and creates competitive advantage in its market.",
    h1: "Brand Strategy — Defined.",
  },
  "/glossary/visual-identity/": {
    title: "What Is Visual Identity? | Beyond® Glossary",
    desc: "Visual identity is the collection of visual elements — logo, colour palette, typography, imagery — that represent a brand across all touchpoints.",
    h1: "Visual Identity — Defined.",
  },
  "/glossary/logo-design/": {
    title: "What Is Logo Design? | Beyond® Glossary",
    desc: "Logo design is the process of creating a distinctive mark that identifies a brand — balancing recognition, meaning, and versatility.",
    h1: "Logo Design — Defined.",
  },
  "/glossary/design-system/": {
    title: "What Is a Design System? | Beyond® Glossary",
    desc: "A design system is a collection of reusable components and guidelines that enable teams to build consistent products at scale.",
    h1: "Design System — Defined.",
  },
  "/glossary/brand-guidelines/": {
    title: "What Are Brand Guidelines? | Beyond® Glossary",
    desc: "Brand guidelines are the documented rules for how a brand's visual and verbal identity should be applied across all contexts and channels.",
    h1: "Brand Guidelines — Defined.",
  },
  "/glossary/typography-system/": {
    title: "What Is a Typography System? | Beyond® Glossary",
    desc: "A typography system defines the typefaces, sizes, weights, and hierarchy used across a brand — creating visual consistency and readability.",
    h1: "Typography System — Defined.",
  },
  "/glossary/color-system/": {
    title: "What Is a Colour System? | Beyond® Glossary",
    desc: "A colour system defines the palette, usage rules, and accessible combinations that form the colour architecture of a brand.",
    h1: "Colour System — Defined.",
  },
  "/glossary/motion-identity/": {
    title: "What Is Motion Identity? | Beyond® Glossary",
    desc: "Motion identity defines how a brand moves — animation principles, transition styles, and behaviour that create a consistent kinetic signature.",
    h1: "Motion Identity — Defined.",
  },
  "/glossary/verbal-identity/": {
    title: "What Is Verbal Identity? | Beyond® Glossary",
    desc: "Verbal identity covers the words, tone, and personality of a brand — how it speaks, not just how it looks.",
    h1: "Verbal Identity — Defined.",
  },
  "/glossary/brand-architecture/": {
    title: "What Is Brand Architecture? | Beyond® Glossary",
    desc: "Brand architecture is the structural relationship between a company's brands, products, and sub-brands — defining hierarchy and naming conventions.",
    h1: "Brand Architecture — Defined.",
  },
  "/glossary/brand-positioning/": {
    title: "What Is Brand Positioning? | Beyond® Glossary",
    desc: "Brand positioning is the specific place a brand occupies in the minds of its target audience — distinct, relevant, and credible.",
    h1: "Brand Positioning — Defined.",
  },
  "/glossary/brand-audit/": {
    title: "What Is a Brand Audit? | Beyond® Glossary",
    desc: "A brand audit is a structured review of a brand's current state — assets, perception, consistency, and competitive position.",
    h1: "Brand Audit — Defined.",
  },
  "/glossary/naming-strategy/": {
    title: "What Is Naming Strategy? | Beyond® Glossary",
    desc: "Naming strategy is the process of developing a brand name that is distinctive, ownable, and built to grow — from concept to trademark clearance.",
    h1: "Naming Strategy — Defined.",
  },
  "/glossary/art-direction/": {
    title: "What Is Art Direction? | Beyond® Glossary",
    desc: "Art direction is the creative leadership of visual production — defining the visual language, mood, and aesthetic of photography, film, and design.",
    h1: "Art Direction — Defined.",
  },
  "/glossary/design-sprint/": {
    title: "What Is a Design Sprint? | Beyond® Glossary",
    desc: "A design sprint is an intensive, time-boxed process for solving design challenges quickly — typically five days from problem to tested prototype.",
    h1: "Design Sprint — Defined.",
  },
  "/glossary/brand-equity/": {
    title: "What Is Brand Equity? | Beyond® Glossary",
    desc: "Brand equity is the commercial value a brand adds to a product or company — driven by awareness, loyalty, perceived quality, and brand associations.",
    h1: "Brand Equity — Defined.",
  },
  "/glossary/webgl/": {
    title: "What Is WebGL? | Beyond® Glossary",
    desc: "WebGL is a JavaScript API for rendering interactive 2D and 3D graphics in the browser without plugins — the foundation of award-winning web experiences.",
    h1: "WebGL — Defined.",
  },
  "/glossary/ui-ux-design/": {
    title: "What Is UI/UX Design? | Beyond® Glossary",
    desc: "UI/UX design encompasses the visual interface design (UI) and the overall user experience strategy (UX) of digital products.",
    h1: "UI/UX Design — Defined.",
  },
  "/glossary/creative-direction/": {
    title: "What Is Creative Direction? | Beyond® Glossary",
    desc: "Creative direction is the strategic leadership of a brand's visual and conceptual output — defining the overall creative vision and maintaining its integrity.",
    h1: "Creative Direction — Defined.",
  },
  "/glossary/brand-refresh/": {
    title: "What Is a Brand Refresh? | Beyond® Glossary",
    desc: "A brand refresh is a selective update to an existing brand — modernising without losing equity — distinct from a full rebrand.",
    h1: "Brand Refresh — Defined.",
  },
  "/glossary/rebranding/": {
    title: "What Is Rebranding? | Beyond® Glossary",
    desc: "Rebranding is the process of creating a new identity for a company or product — new name, new visual system, and new positioning.",
    h1: "Rebranding — Defined.",
  },
  "/glossary/growth-marketing/": {
    title: "What Is Growth Marketing? | Beyond® Glossary",
    desc: "Growth marketing is a data-driven approach to customer acquisition, activation, retention, and referral — aligned with brand strategy for compounding results.",
    h1: "Growth Marketing — Defined.",
  },
  "/glossary/go-to-market/": {
    title: "What Is a Go-to-Market Strategy? | Beyond® Glossary",
    desc: "A go-to-market strategy is the plan for launching a product or brand — defining target audience, positioning, channels, and messaging.",
    h1: "Go-to-Market Strategy — Defined.",
  },
  "/glossary/digital-experience/": {
    title: "What Is Digital Experience? | Beyond® Glossary",
    desc: "Digital experience encompasses every interaction a user has with a brand online — websites, apps, and digital touchpoints designed to convert and inspire.",
    h1: "Digital Experience — Defined.",
  },
  // ── Resources ─────────────────────────────────────────────────────────────
  "/resources/rebranding-checklist/": {
    title: "Rebranding Checklist | Beyond®",
    desc: "Everything a company needs to navigate a rebrand — from the first internal conversation to launch day. Free download from Beyond®.",
    h1: "Your Complete Rebranding Checklist.",
  },
  "/resources/brand-brief-template/": {
    title: "Brand Brief Template | Beyond®",
    desc: "A structured template for briefing a brand agency — the document that separates projects that run well from projects that don't. Free from Beyond®.",
    h1: "How to Write a Brand Brief.",
  },
  "/resources/how-to-choose-a-brand-agency/": {
    title: "How to Choose a Brand Agency | Beyond®",
    desc: "The questions to ask, the signals to look for, and the mistakes to avoid when selecting a brand partner. Free guide from Beyond®.",
    h1: "How to Choose the Right Brand Agency.",
  },
  "/resources/brand-audit-guide/": {
    title: "Brand Audit Guide | Beyond®",
    desc: "A practical framework for assessing where your brand currently stands — before deciding what needs to change. Free from Beyond®.",
    h1: "How to Run a Brand Audit.",
  },
  "/resources/naming-guide/": {
    title: "Brand Naming Guide | Beyond®",
    desc: "How to develop a brand name that is distinctive, ownable, and built to grow — and how to evaluate candidates without defaulting to personal preference.",
    h1: "The Brand Naming Process Explained.",
  },
  "/resources/website-brief-template/": {
    title: "Website Brief Template | Beyond®",
    desc: "The brief that gives a web design agency what they actually need to produce work that's right for your business. Free from Beyond®.",
    h1: "How to Write a Website Design Brief.",
  },
};

// All sitemap paths — MUST end with trailing slash so they match GitHub Pages
// canonical URLs (GitHub Pages 301-redirects no-slash to slash automatically).
const SITEMAP_PATHS: string[] = Object.keys(PAGE_META);

// ─── Plugin: inject static SEO navigation ────────────────────────────────────
// Injects a visually-hidden <nav> of static <a> links into the built index.html
// so non-JS crawlers can discover all pages. Links use trailing-slash URLs so
// crawlers never hit a 301 redirect chain from our own internal links.
const injectSeoLinks: import("vite").Plugin = {
  name: "inject-seo-links",
  closeBundle() {
    const outDir = path.resolve(import.meta.dirname, "dist/public");
    const htmlPath = path.join(outDir, "index.html");
    if (!fs.existsSync(htmlPath)) return;

    const links = SITEMAP_PATHS.map(
      (p) => `<a href="${p}">${p}</a>`
    ).join("\n    ");

    const seoNav = `\n  <nav aria-hidden="true" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">\n    ${links}\n  </nav>`;

    let html = fs.readFileSync(htmlPath, "utf-8");
    html = html.replace("</body>", `${seoNav}\n</body>`);
    fs.writeFileSync(htmlPath, html, "utf-8");
  },
};

// ─── Plugin: generate static routes ──────────────────────────────────────────
// For GitHub Pages: creates a physical index.html inside every route directory
// so GitHub Pages returns HTTP 200 (not 404) for direct URL access.
// Each page gets its own unique <title>, <meta name="description">,
// <link rel="canonical">, and a visually-hidden <h1> for non-JS crawlers.
const generateStaticRoutes: import("vite").Plugin = {
  name: "generate-static-routes",
  closeBundle() {
    const outDir = path.resolve(import.meta.dirname, "dist/public");
    const src = path.join(outDir, "index.html");
    if (!fs.existsSync(src)) return;

    const baseHtml = fs.readFileSync(src, "utf-8");
    const BASE_URL = "https://beyondbasics.studio";

    function buildPageHtml(routePath: string): string {
      const meta = PAGE_META[routePath] ?? PAGE_META["/"];
      const canonicalUrl = `${BASE_URL}${routePath}`;

      let html = baseHtml;

      // 1. Unique <title>
      html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${meta.title}</title>`
      );

      // 2. Unique <meta name="description">
      html = html.replace(
        /<meta name="description" content="[^"]*"\s*\/>/,
        `<meta name="description" content="${meta.desc.replace(/"/g, "&quot;")}" />`
      );

      // 3. Unique <link rel="canonical"> pointing to trailing-slash URL
      html = html.replace(
        /<link rel="canonical" href="[^"]*"\s*\/>/,
        `<link rel="canonical" href="${canonicalUrl}" />`
      );

      // 4. Unique <meta property="og:url">
      html = html.replace(
        /<meta property="og:url" content="[^"]*"\s*\/>/,
        `<meta property="og:url" content="${canonicalUrl}" />`
      );

      // 5. Inject a visually-hidden <h1> so non-JS crawlers see a real heading.
      //    Placed right after <body> — invisible to sighted users, visible to bots.
      const hiddenH1 = `<h1 style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">${meta.h1}</h1>`;
      html = html.replace("<body>", `<body>\n  ${hiddenH1}`);

      return html;
    }

    // Write the root page (update index.html in place)
    fs.writeFileSync(src, buildPageHtml("/"), "utf-8");

    // Create a directory + index.html for every non-root path
    for (const routePath of SITEMAP_PATHS) {
      if (routePath === "/") continue;
      const dir = path.join(outDir, routePath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), buildPageHtml(routePath), "utf-8");
    }

    // 404.html catches anything not explicitly listed (GitHub Pages fallback)
    fs.writeFileSync(path.join(outDir, "404.html"), buildPageHtml("/"), "utf-8");
  },
};

const isBuild = process.argv.includes("build");

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    injectSeoLinks,
    generateStaticRoutes,
    ...(process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-runtime-error-modal").then(
            (m) => m.default(),
          ),
          ...(!isBuild
            ? [
                await import("@replit/vite-plugin-cartographer").then((m) =>
                  m.cartographer({
                    root: path.resolve(import.meta.dirname),
                  }),
                ),
                await import("@replit/vite-plugin-dev-banner").then((m) =>
                  m.devBanner(),
                ),
              ]
            : []),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-gsap": ["gsap", "lenis"],
          "vendor-ui": ["lucide-react", "embla-carousel-react"],
          "vendor-query": ["@tanstack/react-query"],
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-aspect-ratio",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-context-menu",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-hover-card",
            "@radix-ui/react-label",
            "@radix-ui/react-menubar",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-progress",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-toggle",
            "@radix-ui/react-toggle-group",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
    watch: {
      ignored: ["**/public/og/**", "**/dist/**", "**/.git/**"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
