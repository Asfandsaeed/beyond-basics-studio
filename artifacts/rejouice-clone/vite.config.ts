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
    title: "Beyond® | Brand Strategy, Identity & Growth Agency",
    desc: "Beyond® partners with ambitious companies to become category leaders. Brand strategy, identity, web design, motion, 3D & WebGL. Tomorrow's brands, today.",
    h1: "Tomorrow's brands, today.",
  },
  "/work/": {
    title: "Our Work — 24 Brand Case Studies | Beyond® Creative",
    desc: "Case studies across 24 brands we've built, rebuilt, and grown. Brand strategy, visual identity, and digital experience delivered by Beyond®.",
    h1: "Work that defines categories.",
  },
  "/services/": {
    title: "Services — Brand Strategy, Identity & Growth | Beyond®",
    desc: "Brand strategy, visual identity, digital experience, and growth marketing — end-to-end brand building for ambitious companies from Beyond®.",
    h1: "What we do.",
  },
  "/industries/": {
    title: "Industries We Serve — Branding for 50+ Sectors | Beyond®",
    desc: "We've built brands across 50+ industries — from SaaS and fintech to fashion, healthcare, and hospitality. Your sector is our expertise.",
    h1: "Your industry. Our expertise.",
  },
  "/contact/": {
    title: "Get in Touch with Beyond® — Start Your Brand Project",
    desc: "Start a brand project with Beyond®. We partner with ambitious companies globally — tell us what you're building and we'll be in touch.",
    h1: "Start a project.",
  },
  // ── Company ───────────────────────────────────────────────────────────────
  "/about/": {
    title: "About Beyond® — Creative Growth Agency & Brand Studio",
    desc: "Beyond® is a creative growth agency. We partner with ambitious companies to help them lead their categories through brand strategy and great design.",
    h1: "We exist to build tomorrow's brands.",
  },
  "/careers/": {
    title: "Careers at Beyond® — Join Our Creative Brand Agency",
    desc: "Join the team at Beyond®. We're always looking for exceptional creative and strategic talent to help ambitious brands lead their categories globally.",
    h1: "Join Beyond®.",
  },
  "/design-for-good/": {
    title: "Design for Good — Pro Bono Brand Work | Beyond® Agency",
    desc: "Beyond® partners with non-profits and social enterprises to deliver brand work that drives real change. Applications accepted on a rolling basis.",
    h1: "Brand for those who do good.",
  },
  "/accreditations/": {
    title: "Accreditations — Industry Credentials | Beyond® Agency",
    desc: "Beyond® holds accreditations across branding, digital, and marketing from the industry's leading organisations. Verified expertise you can trust.",
    h1: "Industry-recognized credentials.",
  },
  "/press/": {
    title: "Press & Media — Beyond® Creative Brand Agency Coverage",
    desc: "Beyond® in the press — coverage, features, and mentions across design, branding, and digital media publications. Media enquiries always welcome.",
    h1: "Beyond® in the press.",
  },
  "/partners/": {
    title: "Partners — Our Technology & Service Network | Beyond®",
    desc: "Our network of trusted technology and service partners who help us deliver exceptional brand work for ambitious companies around the world.",
    h1: "Our partner network.",
  },
  // ── Content & Resources ───────────────────────────────────────────────────
  "/journal/": {
    title: "Journal — Brand Strategy & Design Insights | Beyond®",
    desc: "Brand strategy, identity, digital experience, and growth marketing insights from the Beyond® team. New articles and case studies published regularly.",
    h1: "The Beyond® Journal.",
  },
  "/process/": {
    title: "Our Process — How Beyond® Delivers Exceptional Brand Work",
    desc: "How we work at Beyond® — from first brief to final launch. A rigorous, collaborative process built for ambitious brands that demand excellence.",
    h1: "How we work.",
  },
  "/faq/": {
    title: "Frequently Asked Questions — Working with Beyond® Agency",
    desc: "Answers to the most common questions about working with Beyond® — pricing, timelines, process, and what makes us different from other agencies.",
    h1: "Frequently asked questions.",
  },
  "/pricing/": {
    title: "Pricing — Brand Strategy & Identity Packages | Beyond®",
    desc: "Transparent pricing for brand strategy, identity, and digital experience. No hourly rates, no surprises — fixed scope, fixed investment.",
    h1: "Transparent pricing.",
  },
  "/testimonials/": {
    title: "Client Testimonials — What Our Clients Say | Beyond®",
    desc: "What our clients say about working with Beyond® — from startup founders to global marketing leaders across every industry we serve.",
    h1: "What our clients say.",
  },
  "/awards/": {
    title: "Awards — 90+ Industry Accolades Won by Beyond® Agency",
    desc: "Beyond® has won 90+ industry awards from Awwwards, FWA, CSSDA, and more — recognising exceptional brand design and digital experience work.",
    h1: "90+ industry awards.",
  },
  "/newsletter/": {
    title: "Newsletter — Weekly Brand Insights from Beyond® Agency",
    desc: "Subscribe to the Beyond® newsletter for weekly insights on brand strategy, identity, digital experience, and growth marketing from our team.",
    h1: "The Beyond® newsletter.",
  },
  "/glossary/": {
    title: "Brand & Design Glossary — Definitions by Beyond® Agency",
    desc: "Plain-English definitions of brand strategy, design, and marketing terms — from brand identity to WebGL, explained clearly by the Beyond® team.",
    h1: "Brand & design glossary.",
  },
  "/resources/": {
    title: "Free Brand Resources — Guides & Templates | Beyond®",
    desc: "Free brand resources — guides, templates, and checklists for founders and marketers building category-defining brands from the ground up.",
    h1: "Free brand resources.",
  },
  // ── Legal ─────────────────────────────────────────────────────────────────
  "/privacy-policy/": {
    title: "Privacy Policy — How Beyond® Collects & Uses Your Data",
    desc: "Beyond® privacy policy — how we collect, use, protect, and process your personal data when you visit our website or engage with our services.",
    h1: "Privacy Policy.",
  },
  "/terms/": {
    title: "Terms & Conditions — Beyond® Creative Growth Agency",
    desc: "Beyond® terms and conditions governing the use of our services and website. Read carefully before starting any project engagement with us.",
    h1: "Terms & Conditions.",
  },
  "/refunds/": {
    title: "Refund Policy — Beyond® Project Cancellation Terms",
    desc: "Beyond® refund policy covering project cancellations, milestone payments, and our approach to resolving disputes fairly and transparently.",
    h1: "Refund Policy.",
  },
  "/sitemap/": {
    title: "Sitemap — All Pages on the Beyond® Creative Agency Site",
    desc: "A complete list of all pages on the Beyond® website, organised by section so you can quickly find what you're looking for without searching.",
    h1: "Sitemap.",
  },
  // ── Work ──────────────────────────────────────────────────────────────────
  "/work/clear-street/": {
    title: "Clear Street — Financial Infrastructure Brand | Beyond®",
    desc: "Brand identity and digital experience for Clear Street — financial infrastructure designed for the future of capital markets and institutional clearing.",
    h1: "Clear Street — Designed for the Future.",
  },
  "/work/remote/": {
    title: "Remote — Global HR Platform Brand Identity | Beyond®",
    desc: "Brand strategy and identity for Remote — the global HR platform making international hiring, payroll, and compliance genuinely stress-free.",
    h1: "Remote — Stress-free global hiring.",
  },
  "/work/multiversx/": {
    title: "MultiversX — Blockchain Brand Identity | Beyond® Agency",
    desc: "Brand identity for MultiversX — the blockchain ecosystem built to scale across the multiverse. Renamed and fully rebranded in under 90 days.",
    h1: "MultiversX — Scale across the Multiverse.",
  },
  "/work/phive/": {
    title: "Phive — Fitness Brand Expansion Strategy | Beyond®",
    desc: "Brand expansion strategy for Phive — helping a fitness brand scale consistently across multiple locations in Portugal without losing what makes it special.",
    h1: "Phive — Activate your senses.",
  },
  "/work/floema/": {
    title: "Floema — Natural Skincare Brand Identity | Beyond®",
    desc: "Brand and digital experience for Floema — natural skincare made for life. An identity as pure and considered as the products themselves.",
    h1: "Floema — Made for Life.",
  },
  "/work/tuu/": {
    title: "TUU — Everyday Lifestyle Brand Identity | Beyond® Agency",
    desc: "Brand identity for TUU — everyday lifestyle products shaped for modern living. A complete brand system built for warmth, simplicity, and longevity.",
    h1: "TUU — Shaping Everyday Life.",
  },
  "/work/redacted/": {
    title: "Redacted RnD — Stealth-Mode Innovation Brand | Beyond®",
    desc: "Brand identity for Redacted RnD — stealth-mode innovation, hidden in plain sight. A brand engineered to intrigue before it ever reveals itself.",
    h1: "Redacted RnD — Hidden in plain sight.",
  },
  "/work/grabgo/": {
    title: "Grab&Go — Convenience Retail Brand Identity | Beyond®",
    desc: "Brand identity for Grab&Go — the convenience retail brand open 24 hours every day. Built to work at every hour and across every customer touchpoint.",
    h1: "Grab&Go — Open 24 hours every day.",
  },
  "/work/flowcase/": {
    title: "Flowcase — Portfolio Software Brand Identity | Beyond®",
    desc: "Brand and digital experience for Flowcase — portfolio software helping agencies win more bids with stellar case studies and beautifully presented resumes.",
    h1: "Flowcase — Win bids with stellar resumes.",
  },
  "/work/jeton/": {
    title: "Jeton — Modern Fintech Brand Identity | Beyond® Agency",
    desc: "Brand identity and digital experience for Jeton — modern fintech built for tomorrow. A brand that communicates trust, speed, and financial innovation.",
    h1: "Jeton — Modern fintech.",
  },
  "/work/keikku/": {
    title: "Keikku — Medical Device Brand Identity | Beyond® Agency",
    desc: "Brand identity for Keikku — medical device branding built around the human, not the clinical. Simplicity as strategy in a category defined by complexity.",
    h1: "Keikku — Simplicity as strategy.",
  },
  "/work/kozowood/": {
    title: "Kōzōwood — Sustainable Timber Brand | Beyond® Agency",
    desc: "Brand identity for Kōzōwood — the engineered timber company leading the building revolution. A brand built with the precision the product deserves.",
    h1: "Kōzōwood — Building the revolution.",
  },
  "/work/talent-protocol/": {
    title: "Talent Protocol — Web3 Professional Reputation | Beyond®",
    desc: "Brand identity for Talent Protocol — the professional reputation layer for Web3. Built to attract builders and signal credibility on the blockchain.",
    h1: "Talent Protocol — Your on-chain reputation.",
  },
  "/work/flecto/": {
    title: "Flecto — Flexible Workspace Brand Identity | Beyond®",
    desc: "Brand identity for Flecto — flexible workspace solutions for the modern workforce. A brand as adaptable as the spaces and distributed teams it serves.",
    h1: "Flecto — Flexible workspace, redefined.",
  },
  "/work/hematogenix/": {
    title: "Hematogenix — Clinical Diagnostics Brand | Beyond®",
    desc: "Brand identity for Hematogenix — specialist diagnostics built on clinical precision. A brand that communicates authority in the highest-stakes category.",
    h1: "Hematogenix — Clinical precision.",
  },
  "/work/speedy/": {
    title: "Speedy — Logistics & Delivery Brand Identity | Beyond®",
    desc: "Brand identity for Speedy — fast, reliable logistics for the modern supply chain. A brand that makes reliability tangible before the first delivery.",
    h1: "Speedy — Fast, reliable logistics.",
  },
  "/work/care-to-beauty/": {
    title: "Care to Beauty — Pharmacy & Beauty Brand | Beyond®",
    desc: "Brand and digital experience for Care to Beauty — Europe's leading pharmacy and beauty destination. A brand that brings care and beauty together seamlessly.",
    h1: "Care to Beauty — Beauty with purpose.",
  },
  // ── Services ──────────────────────────────────────────────────────────────
  "/services/brand-strategy/": {
    title: "Brand Strategy Services — Clarity Before Creation | Beyond®",
    desc: "Clarity before creation. Brand strategy for ambitious companies — positioning, messaging, and competitive differentiation that makes you the obvious choice.",
    h1: "Brand Strategy — Clarity before creation.",
  },
  "/services/brand-identity/": {
    title: "Brand Identity Design — Visual Systems That Earn Attention",
    desc: "Identity that earns attention. Visual identity systems — logo, typography, colour, motion, and brand guidelines built to last and scale with your business.",
    h1: "Brand Identity — Identity that earns attention.",
  },
  "/services/digital-experience/": {
    title: "Digital Experience — Award-Winning Web Design | Beyond®",
    desc: "Websites that convert and inspire. Award-winning web design and development from Beyond® — built for brand-led businesses that refuse to compromise.",
    h1: "Digital Experience — Websites that convert and inspire.",
  },
  "/services/growth-marketing/": {
    title: "Growth Marketing — Brand-Led Growth That Compounds | Beyond®",
    desc: "Brand-led growth that compounds. Strategy, paid creative, SEO, and email marketing from Beyond® — for ambitious brands that are ready to scale fast.",
    h1: "Growth Marketing — Brand-led growth that compounds.",
  },
  "/services/content-creative/": {
    title: "Content & Creative Production — Brand Storytelling | Beyond®",
    desc: "Content that earns its place. Photography, film, and creative production from Beyond® — brand-consistent content built for every channel and format.",
    h1: "Content & Creative — Content that earns its place.",
  },
  "/services/brand-strategy-for-fintech/": {
    title: "Brand Strategy for Fintech Companies | Beyond® Agency",
    desc: "Brand strategy built for the complexity of financial services — positioning fintech companies for trust, regulatory confidence, and long-term growth.",
    h1: "Brand Strategy for Fintech.",
  },
  "/services/brand-strategy-for-startups/": {
    title: "Brand Strategy for Startups — Raise, Hire & Grow | Beyond®",
    desc: "Brand strategy for startups — built to raise faster, hire better, and grow harder. We work with founders from pre-seed through Series B and beyond.",
    h1: "Brand Strategy for Startups.",
  },
  "/services/brand-identity-for-fintech/": {
    title: "Brand Identity for Fintech — Financial Credibility | Beyond®",
    desc: "Visual systems built for financial credibility — brand identity for banks, fintechs, and payment companies that need to earn trust at first glance.",
    h1: "Brand Identity for Fintech.",
  },
  "/services/brand-identity-for-saas/": {
    title: "Brand Identity for SaaS Companies — Beyond® Agency",
    desc: "Identity systems built to scale with your product — brand identity for SaaS companies from seed to IPO, built for product-led and enterprise sales.",
    h1: "Brand Identity for SaaS.",
  },
  "/services/brand-identity-for-web3/": {
    title: "Brand Identity for Web3 — Decentralised Brands | Beyond®",
    desc: "Ownable identity for decentralized brands — brand identity for NFT projects, DAOs, and Web3 platforms that attract believers and hold communities.",
    h1: "Brand Identity for Web3.",
  },
  "/services/brand-identity-for-startups/": {
    title: "Brand Identity for Startups — From Seed to Scale | Beyond®",
    desc: "Brand identity for startups — from seed-stage to Series B and beyond. We build startup identities that grow with the business and attract capital.",
    h1: "Brand Identity for Startups.",
  },
  "/services/brand-identity-for-healthcare/": {
    title: "Brand Identity for Healthcare Brands | Beyond® Agency",
    desc: "Brand identity for healthcare providers, medtech, and pharma — built on trust, clinical authority, and the warmth patients need to feel confident.",
    h1: "Brand Identity for Healthcare.",
  },
  "/services/brand-identity-for-ecommerce/": {
    title: "Brand Identity for E-commerce Brands | Beyond® Agency",
    desc: "Visual identity for DTC and e-commerce brands — built to win on the shelf, the feed, and the homepage. Identity that turns scrollers into loyal buyers.",
    h1: "Brand Identity for E-commerce.",
  },
  "/services/digital-experience-for-fintech/": {
    title: "Digital Experience for Fintech Companies | Beyond®",
    desc: "Web design and development for fintech companies — converting visitors into customers with clarity, trust, and conversion-focused digital experience.",
    h1: "Digital Experience for Fintech.",
  },
  "/services/digital-experience-for-saas/": {
    title: "Digital Experience for SaaS Products | Beyond® Agency",
    desc: "High-converting websites for SaaS products — designed to reduce churn and accelerate trial-to-paid conversion through brand-consistent digital experience.",
    h1: "Digital Experience for SaaS.",
  },
  "/services/digital-experience-for-ecommerce/": {
    title: "Digital Experience for E-commerce Brands | Beyond®",
    desc: "Conversion-focused web design for e-commerce brands — reducing CAC and increasing LTV through brand-led UX and high-performance digital storefronts.",
    h1: "Digital Experience for E-commerce.",
  },
  "/services/digital-experience-for-web3/": {
    title: "Digital Experience for Web3 Platforms | Beyond® Agency",
    desc: "Web3-native digital experiences for protocols, platforms, and decentralized applications — built to attract communities and communicate credibility.",
    h1: "Digital Experience for Web3.",
  },
  "/services/growth-marketing-for-saas/": {
    title: "Growth Marketing for SaaS Companies | Beyond® Agency",
    desc: "Brand-led growth marketing for SaaS products — strategy, paid creative, and content that compounds. We help SaaS companies reduce churn and grow ARR.",
    h1: "Growth Marketing for SaaS.",
  },
  "/services/growth-marketing-for-fintech/": {
    title: "Growth Marketing for Fintech — Brand-Led Acquisition | Beyond®",
    desc: "Growth marketing for fintech companies — brand-consistent creative and performance strategy that builds trust and drives sustainable customer acquisition.",
    h1: "Growth Marketing for Fintech.",
  },
  // ── Industries ────────────────────────────────────────────────────────────
  "/industries/saas/": {
    title: "SaaS Branding Agency — Brand That Drives Growth | Beyond®",
    desc: "Brand strategy and identity for SaaS companies. We build brand systems that reduce churn, accelerate trial-to-paid conversion, and compound ARR.",
    h1: "SaaS — Brand that converts trial users into loyal subscribers.",
  },
  "/industries/tech-companies/": {
    title: "Tech Company Branding — Enterprise Identity | Beyond®",
    desc: "Brand identity for technology companies — enterprise credibility with startup energy. We help tech brands win deals and attract world-class talent.",
    h1: "Tech Companies — Enterprise credibility with startup energy.",
  },
  "/industries/ai-startups/": {
    title: "AI Startup Branding — Brand That Earns Trust | Beyond®",
    desc: "Brand strategy for AI startups — cut through the noise with clarity, credibility, and conviction. We help AI companies earn trust before the demo.",
    h1: "AI Startups — Brand that earns trust before the demo.",
  },
  "/industries/crypto-projects/": {
    title: "Crypto Branding Agency — Legitimacy Beyond the Hype",
    desc: "Brand identity for crypto projects, exchanges, and protocols — legitimacy in a market built on hype. We build crypto brands that outlast the cycle.",
    h1: "Crypto Projects — Legitimacy in a market built on hype.",
  },
  "/industries/web3-brands/": {
    title: "Web3 Branding Agency — Ownable Identity Worldwide | Beyond®",
    desc: "Brand identity for NFT projects, DAOs, and decentralized platforms — ownable identity for a decentralized world that attracts believers and holds them.",
    h1: "Web3 Brands — Ownable identity for a decentralized world.",
  },
  "/industries/mobile-apps/": {
    title: "Mobile App Branding — App Store Presence | Beyond® Agency",
    desc: "Brand strategy for mobile apps — App Store presence that converts browsers to downloaders. We build app brands that create loyal daily habits and referrals.",
    h1: "Mobile Apps — App store presence that converts browsers to downloaders.",
  },
  "/industries/software-companies/": {
    title: "Software Company Branding — Sell Before the Sales Call",
    desc: "Brand identity for software companies — brand that sells your product before the sales call. We help software brands command premium pricing consistently.",
    h1: "Software Companies — Brand that sells software before the sales call.",
  },
  "/industries/startups/": {
    title: "Startup Branding Agency — Raise, Hire & Grow | Beyond®",
    desc: "Brand strategy for startups — raise faster, hire better, and grow harder with a brand built to scale from seed through Series B and beyond.",
    h1: "Startups — Startup brand that raises faster, hires better, and grows harder.",
  },
  "/industries/ecommerce/": {
    title: "E-commerce Branding Agency — Drive Add-to-Cart | Beyond®",
    desc: "Brand strategy and identity for e-commerce businesses — brand that drives add-to-cart before the price check. We reduce CAC and increase LTV.",
    h1: "E-commerce — Brand that drives add-to-cart before the price check.",
  },
  "/industries/dtc-brands/": {
    title: "DTC Brand Agency — Direct-to-Consumer Branding | Beyond®",
    desc: "Brand identity for direct-to-consumer brands — brand that earns loyalty at first touch. We build DTC brands that turn one-time buyers into lifelong customers.",
    h1: "DTC Brands — Direct-to-consumer brand that earns loyalty at first touch.",
  },
  "/industries/ecommerce-fashion/": {
    title: "Fashion E-commerce Branding — Stop Scrollers | Beyond®",
    desc: "Brand identity for fashion e-commerce — brand that makes scrollers stop and shoppers buy. Aesthetic precision combined with conversion science.",
    h1: "E-commerce Fashion — Brand that makes scrollers stop and shoppers buy.",
  },
  "/industries/subscription-businesses/": {
    title: "Subscription Business Branding — Loyalty Built In | Beyond®",
    desc: "Brand strategy for subscriptions — brand that makes subscribers excited to be charged. We build emotional loyalty that makes cancelling feel wrong.",
    h1: "Subscription Businesses — Brand that makes subscribers excited to be charged.",
  },
  "/industries/healthcare/": {
    title: "Healthcare Branding Agency — Trust-First Identity | Beyond®",
    desc: "Brand identity for healthcare organizations — brand that earns patient trust before the first appointment. Built for compliance, warmth, and clinical authority.",
    h1: "Healthcare — Brand that makes patients trust before the first appointment.",
  },
  "/industries/dentists/": {
    title: "Dental Practice Branding — Patients Proud to Refer | Beyond®",
    desc: "Brand identity for dental practices — a brand patients are proud to refer. We help dentists reduce anxiety, increase referrals, and command premium fees.",
    h1: "Dentists — A practice brand that patients are proud to refer.",
  },
  "/industries/doctors/": {
    title: "Doctor & Physician Personal Branding Agency | Beyond®",
    desc: "Personal brand for physicians — positioning you as the authority in your specialty. Attract better patients and command higher fees in your market.",
    h1: "Doctors — Personal brand that positions you as the authority in your specialty.",
  },
  "/industries/fitness-brands/": {
    title: "Fitness Brand Agency — Motivate Before the First Workout",
    desc: "Brand strategy for fitness brands — brand that motivates before the first workout. We build fitness identities that make people feel what they're capable of.",
    h1: "Fitness Brands — Brand that motivates before the first workout.",
  },
  "/industries/gyms/": {
    title: "Gym Branding Agency — Sell Memberships Before the Tour",
    desc: "Brand identity for gyms — a gym brand that sells memberships before the tour. We build gym brands that communicate the one thing no app can: community.",
    h1: "Gyms — A gym brand that sells memberships before the tour.",
  },
  "/industries/local-businesses/": {
    title: "Local Business Branding — The Most Trusted Name | Beyond®",
    desc: "Brand identity for local businesses — the most trusted name in your neighborhood. We help local brands beat national chains by earning genuine community trust.",
    h1: "Local Businesses — The most trusted name in your neighborhood.",
  },
  "/industries/hvac-companies/": {
    title: "HVAC Company Branding — Brand Homeowners Trust | Beyond®",
    desc: "Brand identity for HVAC companies — the brand homeowners trust before they need you. We help HVAC businesses command premium fees and generate more referrals.",
    h1: "HVAC Companies — The HVAC brand homeowners trust before they need you.",
  },
  "/industries/roofers/": {
    title: "Roofing Company Branding — Skip the Three Quotes | Beyond®",
    desc: "Brand identity for roofing companies — the brand homeowners call without getting three quotes. Trust-first branding for high-ticket roofing businesses.",
    h1: "Roofers — The roofing company homeowners call without getting three quotes.",
  },
  "/industries/construction-companies/": {
    title: "Construction Company Branding — Win the Clients You Want",
    desc: "Brand identity for construction companies — the brand that clients are proud to recommend. We help construction firms attract premium projects and referrals.",
    h1: "Construction Companies — The construction brand that clients are proud to recommend.",
  },
  "/industries/automotive-businesses/": {
    title: "Automotive Business Branding — Earn Loyalty | Beyond®",
    desc: "Brand identity for automotive businesses — brand that earns loyalty in the most trust-sensitive purchase of a customer's life. Trust built at every touchpoint.",
    h1: "Automotive Businesses — Brand that earns loyalty in the most trust-sensitive purchase.",
  },
  "/industries/franchises/": {
    title: "Franchise Branding Agency — Every Location, One Brand",
    desc: "Brand systems for franchises — consistency that makes every location feel like the flagship. We help franchise brands scale without compromising the experience.",
    h1: "Franchises — Brand consistency that makes every location feel like the flagship.",
  },
  "/industries/logistics-companies/": {
    title: "Logistics Company Branding — Reliability Made Visible",
    desc: "Brand identity for logistics companies — reliability you can see before the first delivery. We help logistics brands command trust and premium contracts.",
    h1: "Logistics Companies — Reliability you can see before the first delivery.",
  },
  "/industries/manufacturing-companies/": {
    title: "Manufacturing Company Branding — Command Premium Pricing",
    desc: "Brand identity for manufacturing companies — industrial brand that commands premium pricing in any market. Capturing the value your products truly deserve.",
    h1: "Manufacturing Companies — Industrial brand that commands premium pricing in any market.",
  },
  "/industries/lawyers/": {
    title: "Law Firm Branding Agency — Win Clients Before the Call",
    desc: "Brand identity for lawyers and law firms — legal brand that wins clients before the consultation. Trust, expertise, and authority made immediately visible.",
    h1: "Lawyers — Legal brand that wins clients before the consultation.",
  },
  "/industries/realtors/": {
    title: "Realtor Personal Branding — Win Listings Before They List",
    desc: "Brand identity for realtors — the real estate brand that sellers choose before they list. We build realtor brands that attract listings and command referrals.",
    h1: "Realtors — The real estate brand that sellers choose before they list.",
  },
  "/industries/coaches/": {
    title: "Coaching Business Branding — Fill Your Calendar | Beyond®",
    desc: "Personal brand for coaches — fills your calendar without cold outreach. We build coaching brands that attract ideal clients and make you the obvious choice.",
    h1: "Coaches — Personal brand that fills your calendar without cold outreach.",
  },
  "/industries/consultants/": {
    title: "Consulting Brand Agency — Command Retainer Relationships",
    desc: "Brand identity for consultants — consulting brand that commands retainer relationships. We help consultants attract premium clients without ever chasing them.",
    h1: "Consultants — Consulting brand that commands retainer relationships.",
  },
  "/industries/agencies/": {
    title: "Agency Branding — The Brand Other Agencies Aspire To",
    desc: "Brand identity for agencies — the agency brand that other agencies aspire to. We build agency identities that attract better clients and command higher fees.",
    h1: "Agencies — The agency brand that other agencies aspire to.",
  },
  "/industries/influencers/": {
    title: "Influencer Branding Agency — Build Audience You Own | Beyond®",
    desc: "Creator brand for influencers — builds audience you own, not just followers you borrow. We help influencers build brand equity that outlasts any algorithm.",
    h1: "Influencers — Creator brand that builds audience you own.",
  },
  "/industries/creators/": {
    title: "Creator Branding Agency — Brand as Good as Your Work",
    desc: "Brand identity for creators — your creative work deserves a brand as good as the work itself. We help creators build identities that attract the right audience.",
    h1: "Creators — Your creative work deserves a brand as good as the work itself.",
  },
  "/industries/personal-brands/": {
    title: "Personal Branding Agency — Your Authentic Self, Made Visible",
    desc: "Personal brand development — the most authentic version of you, made visible. We help individuals build brands that open doors and create lasting opportunities.",
    h1: "Personal Brands — The most authentic version of you, made visible.",
  },
  "/industries/photographers/": {
    title: "Photography Brand Agency — Brand as Strong as Your Best Shot",
    desc: "Brand identity for photographers — portfolio brand as strong as your best shot. We build photographer brands that attract the commissions and clients you want.",
    h1: "Photographers — Portfolio brand as strong as your best shot.",
  },
  "/industries/event-companies/": {
    title: "Event Company Branding — Book Out Before Announcing | Beyond®",
    desc: "Brand identity for event companies — a brand that books out before the venue is announced. Built to generate anticipation and turn community into ticket sales.",
    h1: "Event Companies — Event brand that books out before the venue is announced.",
  },
  "/industries/restaurants/": {
    title: "Restaurant Branding Agency — Fill Tables Before Reviews",
    desc: "Brand identity for restaurants — brand that fills tables before the first review. We build restaurant brands that create loyal regulars and earn word-of-mouth.",
    h1: "Restaurants — Restaurant brand that fills tables before the first review.",
  },
  "/industries/hotels/": {
    title: "Hotel Branding Agency — Book Direct, Build Loyalty | Beyond®",
    desc: "Brand identity for hotels — hospitality brand that books direct and builds loyalty. We help hotels reduce OTA dependence and create guests who return and refer.",
    h1: "Hotels — Hospitality brand that books direct and builds loyalty.",
  },
  "/industries/hospitality-businesses/": {
    title: "Hospitality Business Branding — Earn the 5-Star Review",
    desc: "Brand identity for hospitality businesses — guest experience brand that earns the five-star review before checkout. Built for loyalty and repeat visits.",
    h1: "Hospitality Businesses — Guest experience brand that earns the five-star review.",
  },
  "/industries/travel-agencies/": {
    title: "Travel Agency Branding — Earn Trust for Life's Best Trips",
    desc: "Brand identity for travel agencies — brand that makes clients trust you with the trips that matter most. We build travel brands that earn loyalty and referrals.",
    h1: "Travel Agencies — Travel brand that makes clients trust you with the trips that matter.",
  },
  "/industries/fashion-brands/": {
    title: "Fashion Brand Agency — Set Trends, Don't Follow Them",
    desc: "Brand identity for fashion brands — cultural gravity to set trends, not follow them. We build fashion brands with the precision and aesthetic authority to lead.",
    h1: "Fashion Brands — Fashion brand with the cultural gravity to set trends.",
  },
  "/industries/beauty-brands/": {
    title: "Beauty Brand Agency — Built for Sephora & the Algorithm",
    desc: "Brand identity for beauty brands — built for the Sephora shelf and the algorithm simultaneously. We combine retail strategy with social-native creative systems.",
    h1: "Beauty Brands — Built for the Sephora shelf and the algorithm.",
  },
  "/industries/skincare-brands/": {
    title: "Skincare Brand Agency — Earn Trust in a Skeptical Market",
    desc: "Brand identity for skincare brands — brand that earns trust in beauty's most skeptical category. Built on science, honest communication, and clean design.",
    h1: "Skincare Brands — Brand that earns trust in the most skeptical category in beauty.",
  },
  "/industries/food-brands/": {
    title: "Food Brand Agency — Win Shelf Space with Story | Beyond®",
    desc: "Brand identity for food brands — food brand that wins shelf space with story, not just spec. We build food brands that earn loyalty in the aisle and online.",
    h1: "Food Brands — Food brand that wins shelf space with story, not just spec.",
  },
  "/industries/salons/": {
    title: "Salon Branding Agency — Book Chairs Before Opening Day",
    desc: "Brand identity for salons — brand that books your chairs before you open the door. We build salon identities that attract loyal, high-value clients every time.",
    h1: "Salons — Salon brand that books your chairs before you open the door.",
  },
  "/industries/real-estate-companies/": {
    title: "Real Estate Company Branding — Attract Premium Listings",
    desc: "Brand identity for real estate companies — real estate brand that attracts premium listings and top producers. Built for markets where reputation is everything.",
    h1: "Real Estate Companies — Real estate brand that attracts premium listings.",
  },
  "/industries/interior-designers/": {
    title: "Interior Design Studio Branding — Worthy of Your Spaces",
    desc: "Brand identity for interior designers — studio brand worthy of the spaces you create. Attract premium residential, commercial, and hospitality commissions.",
    h1: "Interior Designers — Design studio brand worthy of the spaces you create.",
  },
  "/industries/architects/": {
    title: "Architecture Practice Branding — Win Before the Jury Meets",
    desc: "Brand identity for architects — architecture practice brand that wins the design competition before the jury meets. Built for firms that lead, not follow.",
    h1: "Architects — Architecture practice brand that wins the design competition.",
  },
  "/industries/financial-services/": {
    title: "Financial Services Branding — Trust as Strategy | Beyond®",
    desc: "Brand identity for financial services firms — financial brand built on trust, the only thing that matters in your industry. We make trust visible and ownable.",
    h1: "Financial Services — Financial brand built on trust.",
  },
  "/industries/educational-institutions/": {
    title: "Education Branding Agency — Attract Students & Funding",
    desc: "Brand identity for educational institutions — institution brand that attracts students, faculty, and funding simultaneously. Built for long-term reputation.",
    h1: "Educational Institutions — Institution brand that attracts students, faculty, and funding.",
  },
  "/industries/nonprofits/": {
    title: "Non-profit Branding Agency — Mission Made Visible | Beyond®",
    desc: "Brand identity for non-profits — mission brand that turns passive supporters into active advocates. We help non-profits communicate impact and inspire action.",
    h1: "Nonprofits — Mission brand that turns passive supporters into active advocates.",
  },
  // ── Journal ───────────────────────────────────────────────────────────────
  "/journal/tensor-brand-90-days/": {
    title: "How We Built a Brand in 90 Days — The Beyond® Journal",
    desc: "A first-person account of renaming and rebuilding a blockchain ecosystem brand in under three months — and what the sprint taught us about conviction and speed.",
    h1: "How We Built a Brand in 90 Days.",
  },
  "/journal/brand-led-growth/": {
    title: "Brand-Led Growth: Why the Best Companies Lead with Brand",
    desc: "Performance marketing has become a commodity. The companies that win long-term are the ones that treat brand as their most important growth lever.",
    h1: "Brand-Led Growth: Why the Best Companies Lead with Brand.",
  },
  "/journal/oura-simplicity-strategy/": {
    title: "Simplicity as Strategy — Branding Insight | Beyond® Journal",
    desc: "In a complex medical device category, a brand needed to put the human at the centre. Here's how stripping back the noise revealed the truth of the product.",
    h1: "Simplicity as Strategy.",
  },
  "/journal/art-of-naming/": {
    title: "The Art of Naming: What Makes a Brand Name Great | Beyond®",
    desc: "We've named dozens of companies and products. Here's our framework — and why so many 'safe' names end up costing more than a bold choice would have.",
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
    title: "Photography as Brand Language — The Beyond® Journal",
    desc: "The images a brand chooses communicate everything it believes. Most companies treat photography as decoration — the ones that win treat it as argument.",
    h1: "Photography as Brand Language.",
  },
  "/journal/pre-launch-brand-building/": {
    title: "Pre-Launch Brand Building: Invest in Brand Before Launch",
    desc: "Building your brand before launch is the highest-leverage investment a founder can make. Here's the framework we use and how to do it right.",
    h1: "Pre-Launch Brand Building.",
  },
  // ── Glossary ──────────────────────────────────────────────────────────────
  "/glossary/brand-identity/": {
    title: "What Is Brand Identity? Definition & Guide | Beyond®",
    desc: "Brand identity is the visual and verbal system that makes a brand recognisable — logo, typography, colour, and the rules that govern how they're used.",
    h1: "Brand Identity — Defined.",
  },
  "/glossary/brand-strategy/": {
    title: "What Is Brand Strategy? Definition & Guide | Beyond®",
    desc: "Brand strategy is the long-term plan for how a brand positions itself, communicates, and creates competitive advantage in its market.",
    h1: "Brand Strategy — Defined.",
  },
  "/glossary/visual-identity/": {
    title: "What Is Visual Identity? Definition & Guide | Beyond®",
    desc: "Visual identity is the collection of visual elements — logo, colour palette, typography, imagery — that represent a brand across all touchpoints.",
    h1: "Visual Identity — Defined.",
  },
  "/glossary/logo-design/": {
    title: "What Is Logo Design? Definition & Examples | Beyond®",
    desc: "Logo design is the process of creating a distinctive mark that identifies a brand — balancing recognition, meaning, versatility, and timeless appeal.",
    h1: "Logo Design — Defined.",
  },
  "/glossary/design-system/": {
    title: "What Is a Design System? Definition & Guide | Beyond®",
    desc: "A design system is a collection of reusable components and guidelines that enable teams to build consistent products and experiences at scale.",
    h1: "Design System — Defined.",
  },
  "/glossary/brand-guidelines/": {
    title: "What Are Brand Guidelines? Definition & Guide | Beyond®",
    desc: "Brand guidelines are the documented rules for how a brand's visual and verbal identity should be applied across all contexts and channels consistently.",
    h1: "Brand Guidelines — Defined.",
  },
  "/glossary/typography-system/": {
    title: "What Is a Typography System? Definition | Beyond® Glossary",
    desc: "A typography system defines the typefaces, sizes, weights, and hierarchy used across a brand — creating visual consistency and readability at every scale.",
    h1: "Typography System — Defined.",
  },
  "/glossary/color-system/": {
    title: "What Is a Colour System? Definition & Guide | Beyond®",
    desc: "A colour system defines the palette, usage rules, and accessible combinations that form the colour architecture of a brand across all touchpoints.",
    h1: "Colour System — Defined.",
  },
  "/glossary/motion-identity/": {
    title: "What Is Motion Identity? Definition & Guide | Beyond®",
    desc: "Motion identity defines how a brand moves — animation principles, transition styles, and behaviour that create a consistent kinetic signature across media.",
    h1: "Motion Identity — Defined.",
  },
  "/glossary/verbal-identity/": {
    title: "What Is Verbal Identity? Definition & Guide | Beyond®",
    desc: "Verbal identity covers the words, tone of voice, and personality of a brand — how it speaks, not just how it looks, across every piece of communication.",
    h1: "Verbal Identity — Defined.",
  },
  "/glossary/brand-architecture/": {
    title: "What Is Brand Architecture? Definition & Guide | Beyond®",
    desc: "Brand architecture is the structural relationship between a company's brands, products, and sub-brands — defining hierarchy and naming conventions clearly.",
    h1: "Brand Architecture — Defined.",
  },
  "/glossary/brand-positioning/": {
    title: "What Is Brand Positioning? Definition & Guide | Beyond®",
    desc: "Brand positioning is the specific place a brand occupies in the minds of its target audience — distinct, relevant, credible, and strategically defensible.",
    h1: "Brand Positioning — Defined.",
  },
  "/glossary/brand-audit/": {
    title: "What Is a Brand Audit? Definition & Guide | Beyond®",
    desc: "A brand audit is a structured review of a brand's current state — assets, perception, consistency, and competitive position — before deciding what to change.",
    h1: "Brand Audit — Defined.",
  },
  "/glossary/naming-strategy/": {
    title: "What Is Naming Strategy? Definition & Guide | Beyond®",
    desc: "Naming strategy is the process of developing a brand name that is distinctive, ownable, and built to grow — from concept through to trademark clearance.",
    h1: "Naming Strategy — Defined.",
  },
  "/glossary/art-direction/": {
    title: "What Is Art Direction? Definition & Guide | Beyond®",
    desc: "Art direction is the creative leadership of visual production — defining the visual language, mood, and aesthetic of photography, film, and design work.",
    h1: "Art Direction — Defined.",
  },
  "/glossary/design-sprint/": {
    title: "What Is a Design Sprint? Definition & Guide | Beyond®",
    desc: "A design sprint is an intensive, time-boxed process for solving design challenges quickly — typically five days from problem to a tested prototype.",
    h1: "Design Sprint — Defined.",
  },
  "/glossary/brand-equity/": {
    title: "What Is Brand Equity? Definition & Guide | Beyond®",
    desc: "Brand equity is the commercial value a brand adds to a product or company — driven by awareness, loyalty, perceived quality, and strong brand associations.",
    h1: "Brand Equity — Defined.",
  },
  "/glossary/webgl/": {
    title: "What Is WebGL? Definition & Examples | Beyond® Glossary",
    desc: "WebGL is a JavaScript API for rendering interactive 2D and 3D graphics in the browser without plugins — the foundation of award-winning web experiences.",
    h1: "WebGL — Defined.",
  },
  "/glossary/ui-ux-design/": {
    title: "What Is UI/UX Design? Definition & Guide | Beyond®",
    desc: "UI/UX design encompasses the visual interface design (UI) and the overall user experience strategy (UX) of digital products, apps, and websites.",
    h1: "UI/UX Design — Defined.",
  },
  "/glossary/creative-direction/": {
    title: "What Is Creative Direction? Definition & Guide | Beyond®",
    desc: "Creative direction is the strategic leadership of a brand's visual and conceptual output — defining the overall creative vision and maintaining its integrity.",
    h1: "Creative Direction — Defined.",
  },
  "/glossary/brand-refresh/": {
    title: "What Is a Brand Refresh? Definition & Guide | Beyond®",
    desc: "A brand refresh is a selective update to an existing brand — modernising without losing equity — distinct from a full rebrand in scope and approach.",
    h1: "Brand Refresh — Defined.",
  },
  "/glossary/rebranding/": {
    title: "What Is Rebranding? Definition & Guide | Beyond® Glossary",
    desc: "Rebranding is the process of creating a new identity for a company or product — new name, new visual system, and repositioned brand strategy.",
    h1: "Rebranding — Defined.",
  },
  "/glossary/growth-marketing/": {
    title: "What Is Growth Marketing? Definition & Guide | Beyond®",
    desc: "Growth marketing is a data-driven approach to acquisition, activation, retention, and referral — aligned with brand strategy for compounding long-term results.",
    h1: "Growth Marketing — Defined.",
  },
  "/glossary/go-to-market/": {
    title: "What Is a Go-to-Market Strategy? Definition | Beyond®",
    desc: "A go-to-market strategy is the plan for launching a product or brand — defining target audience, positioning, channels, and messaging for maximum impact.",
    h1: "Go-to-Market Strategy — Defined.",
  },
  "/glossary/digital-experience/": {
    title: "What Is Digital Experience? Definition & Guide | Beyond®",
    desc: "Digital experience encompasses every interaction a user has with a brand online — websites, apps, and digital touchpoints designed to convert and inspire.",
    h1: "Digital Experience — Defined.",
  },
  // ── Resources ─────────────────────────────────────────────────────────────
  "/resources/rebranding-checklist/": {
    title: "Rebranding Checklist — Free Download | Beyond® Agency",
    desc: "Everything a company needs to navigate a rebrand — from the first internal conversation to launch day. Free download from the Beyond® team.",
    h1: "Your Complete Rebranding Checklist.",
  },
  "/resources/brand-brief-template/": {
    title: "Brand Brief Template — Free Download | Beyond® Agency",
    desc: "A structured template for briefing a brand agency — the document that separates projects that run well from projects that don't. Free from Beyond®.",
    h1: "How to Write a Brand Brief.",
  },
  "/resources/how-to-choose-a-brand-agency/": {
    title: "How to Choose the Right Brand Agency | Beyond® Guide",
    desc: "The questions to ask, the signals to look for, and the mistakes to avoid when selecting a brand partner. Free guide from the Beyond® team.",
    h1: "How to Choose the Right Brand Agency.",
  },
  "/resources/brand-audit-guide/": {
    title: "How to Run a Brand Audit — Free Guide | Beyond® Agency",
    desc: "A practical framework for assessing where your brand currently stands — before deciding what needs to change. Free brand audit guide from Beyond®.",
    h1: "How to Run a Brand Audit.",
  },
  "/resources/naming-guide/": {
    title: "The Brand Naming Guide — Free Download | Beyond® Agency",
    desc: "How to develop a brand name that is distinctive, ownable, and built to grow — and how to evaluate name candidates without defaulting to personal preference.",
    h1: "The Brand Naming Process Explained.",
  },
  "/resources/website-brief-template/": {
    title: "Website Design Brief Template — Free | Beyond® Agency",
    desc: "The brief that gives a web design agency what they actually need to produce work that's right for your business. Free website brief template from Beyond®.",
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
