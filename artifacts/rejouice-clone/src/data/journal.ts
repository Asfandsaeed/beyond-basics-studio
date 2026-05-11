const SANITY = "https://cdn.sanity.io/images/zksivtxz/production";

export interface JournalPost {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  coverVideo?: string;
  featured?: boolean;
  body: BodyBlock[];
  relatedProject?: string;
  relatedProjectName?: string;
  relatedPosts?: string[];
  tags: string[];
}

export type BodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[] }
  | { type: "internalLink"; href: string; label: string; context: string };

export const posts: JournalPost[] = [

  // ─── 1. MultiversX ────────────────────────────────────────────────────────
  {
    id: "multiversx-brand-90-days",
    title: "How We Built the MultiversX Brand in 90 Days",
    subtitle: "A first-person account of renaming and completely rebuilding the Elrond blockchain ecosystem — in under three months. What the sprint taught us about conviction, speed, and why great work doesn't require infinite time.",
    category: "Case Study",
    date: "March 2025",
    readTime: "9 min read",
    featured: true,
    coverImage: `${SANITY}/195dabd5e5757919b90b5d5102a477117981912e-1180x720.jpg`,
    relatedProject: "multiversx",
    relatedProjectName: "MultiversX",
    relatedPosts: ["art-of-naming", "award-worthy-digital-experience", "brand-led-growth"],
    tags: ["Brand Identity", "Naming", "Motion Design", "Strategy", "Web3"],
    body: [
      { type: "paragraph", text: "Three months. That's all we had to take Elrond from a powerful but underrecognised blockchain ecosystem to the fully-launched MultiversX brand. No visual language yet, no name, no identity — just a remarkable technology, a founding team with absolute conviction, and a timeline that would make most agencies decline the brief." },
      { type: "heading", text: "Starting from a name" },
      { type: "paragraph", text: "The brief was precise: rename Elrond and build a brand that could carry the weight of a next-generation blockchain ecosystem. We ran over 200 name candidates through our five-part filter: ownable, pronounceable, scalable, evocative, and legally available in key markets. 'MultiversX' emerged as the clear winner — capturing the infinite possibilities the platform unlocks, elevated to the power of X for technical authority." },
      { type: "internalLink", href: "/journal/art-of-naming", label: "The Art of Naming: What Makes a Brand Name Great", context: "Related Article" },
      { type: "image", src: `${SANITY}/195dabd5e5757919b90b5d5102a477117981912e-1180x720.jpg`, alt: "MultiversX brand system", caption: "The MultiversX visual system — precision meets infinite scale." },
      { type: "heading", text: "Identity for an ecosystem, not just a product" },
      { type: "paragraph", text: "Once the name was locked, we built outward. The visual identity spans three type families, a motion design system, a complete set of sub-brand rules, and a colour system anchored in M×Mint, black, and white. Every element had to work at the scale of a global ecosystem while remaining coherent across hundreds of individual applications — from token icons to conference keynotes." },
      { type: "quote", text: "A brand name isn't just a label. It's the first promise you make to every person who'll ever encounter your company.", author: "Guillaume Hamon, Founding Partner" },
      { type: "heading", text: "The website as brand proof" },
      { type: "paragraph", text: "The website had to do what no deck or pitch could: make the MultiversX vision feel inevitable. We built it in parallel with the identity — React, GSAP, WebGL — so the design system was being tested in production as it was being created. Awwwards Site of the Day and Developer Award on day one of launch was the market's verdict." },
      { type: "internalLink", href: "/glossary/naming-strategy", label: "Naming Strategy", context: "Glossary" },
      { type: "internalLink", href: "/services/brand-strategy", label: "Brand Strategy", context: "Service" },
      { type: "heading", text: "What 90 days taught us" },
      { type: "paragraph", text: "Speed doesn't require sacrifice. When everyone is aligned on the vision and decisions are made with conviction rather than consensus, it's possible to produce work of the highest calibre under extreme time pressure. The constraint itself sharpens the work — it forces clarity about what actually matters and ruthlessly eliminates the noise." },
      { type: "list", items: ["Naming complete in 3 weeks", "Full visual identity system in 6 weeks", "Motion & design system in 10 weeks", "Web design and development in parallel", "Global ecosystem launch on day 90"] },
      { type: "internalLink", href: "/work/multiversx", label: "View the MultiversX case study", context: "Case Study" },
    ],
  },

  // ─── 2. Brand-Led Growth ──────────────────────────────────────────────────
  {
    id: "brand-led-growth",
    title: "Brand-Led Growth: Why the Best Companies Lead with Brand",
    subtitle: "Performance marketing has become a commodity. The companies that win long-term are the ones that treat brand as their most important growth lever — not a line item they'll invest in 'when the time is right'.",
    category: "Strategy",
    date: "February 2025",
    readTime: "7 min read",
    featured: false,
    coverImage: `${SANITY}/a5b674fefa860f0864baaf56bfbc2bb526b263fb-1180x720.jpg`,
    relatedProject: "clear-street",
    relatedProjectName: "Clear Street",
    relatedPosts: ["multiversx-brand-90-days", "kozowood-sustainable-brand", "phive-expansion-brand"],
    tags: ["Brand Strategy", "Growth Marketing", "Performance", "Fintech"],
    body: [
      { type: "paragraph", text: "In the early days of digital advertising, performance marketing felt like a superpower. Precise targeting, measurable returns, infinitely scalable. It still works — but it's no longer a differentiator. Every company has access to the same platforms, the same targeting capabilities, the same creative playbook. CAC keeps climbing. ROAS keeps falling. The market has priced in performance." },
      { type: "heading", text: "The brand premium is real and compounding" },
      { type: "paragraph", text: "Companies with strong brands consistently outperform their sector peers on every metric that matters: lower customer acquisition costs, higher retention, better pricing power, faster hiring. Brand isn't a soft investment — it's a compounding asset that pays dividends for years and becomes exponentially harder for competitors to replicate." },
      { type: "image", src: `${SANITY}/a5b674fefa860f0864baaf56bfbc2bb526b263fb-1180x720.jpg`, alt: "Clear Street brand system", caption: "Clear Street established brand authority in capital markets before a single sales conversation began." },
      { type: "quote", text: "The best brands in any category generate demand before the sales team picks up the phone. That's the compounding return on brand investment." },
      { type: "heading", text: "The three brand investments that compound most" },
      { type: "paragraph", text: "Our work with category leaders has identified three brand investments that pay off disproportionately over time: a clear and ownable positioning, a visual identity with genuine craft, and a content strategy that teaches your audience rather than selling to them." },
      { type: "list", items: ["Ownable positioning: the market niche only you can credibly claim", "Visual craft: the aesthetic standard that makes everything feel expensive", "Educational content: the trust that accumulates before the transaction"] },
      { type: "internalLink", href: "/glossary/brand-positioning", label: "Brand Positioning", context: "Glossary" },
      { type: "heading", text: "The Clear Street proof point" },
      { type: "paragraph", text: "When we partnered with Clear Street on their rebrand, the challenge was to position a fintech disruptor as a trustworthy institutional player — simultaneously. Capital markets doesn't easily grant trust; it's earned through decades of relationships. The brand had to communicate credibility, ambition, and technical superiority before a single meeting took place." },
      { type: "paragraph", text: "The result: four top industry honours at launch — Awwwards SOTD + Developer Award, FWA of the Day, and CSS Design Awards. More importantly, a brand that opens doors in a category where those doors are made of institutional skepticism and billion-dollar relationships." },
      { type: "internalLink", href: "/work/clear-street", label: "View the Clear Street case study", context: "Case Study" },
      { type: "internalLink", href: "/services/brand-strategy", label: "Brand Strategy — our approach", context: "Service" },
    ],
  },

  // ─── 3. Keikku ───────────────────────────────────────────────────────────
  {
    id: "keikku-simplicity-strategy",
    title: "Simplicity as Strategy: The Keikku Brand",
    subtitle: "In a medical device category defined by clinical complexity, Keikku needed a brand that put the human at the centre. Here's how we stripped back the noise to find the truth of the product.",
    category: "Case Study",
    date: "January 2025",
    readTime: "8 min read",
    featured: false,
    coverImage: `${SANITY}/f51a7432999749c8d60de7d60a9212580451cc5d-1180x720.jpg`,
    relatedProject: "keikku",
    relatedProjectName: "Keikku",
    relatedPosts: ["photography-as-brand-language", "brand-led-growth", "award-worthy-digital-experience"],
    tags: ["Brand Identity", "Visual Identity", "Healthcare", "Digital Experience"],
    body: [
      { type: "paragraph", text: "Medical device technology is complex by nature — clinical dashboards, regulatory requirements, dense technical specifications. Every brand in the space seemed to compete on capability metrics. Keikku, building the world's first smart wireless stethoscope, came to us with a different challenge: a genuinely revolutionary product that needed to feel accessible to every healthcare professional who would use it." },
      { type: "heading", text: "The brief: make clinical feel human" },
      { type: "paragraph", text: "Keikku's device monitors cardiac and pulmonary health remotely — capturing the same data as traditional clinical equipment, but wirelessly and continuously. Their mission is fundamentally human: give clinicians better tools and give patients better outcomes. But the brand risk was defaulting to cold, technical, category-standard visual language that would make Keikku look like every other medical device on the market." },
      { type: "internalLink", href: "/services/brand-identity-for-healthcare", label: "Brand Identity for Healthcare", context: "Service" },
      { type: "image", src: `${SANITY}/f51a7432999749c8d60de7d60a9212580451cc5d-1180x720.jpg`, alt: "Keikku brand photography", caption: "Brand photography that put the human at the centre — not the device." },
      { type: "heading", text: "The insight: precision for people" },
      { type: "paragraph", text: "The unlock was a truth embedded in Keikku's product itself: clinical precision in a form factor that disappears into the care experience. 'Precision for people' became the creative foundation — and we built the visual identity around warmth, trust, and the quiet confidence of a device that simply works without demanding attention." },
      { type: "quote", text: "The best medical brands don't look like medical brands. They look like the future the patient is hoping for." },
      { type: "image", src: `${SANITY}/965438e608f103826800f3385f9a87b0afbee37e-520x520.png`, alt: "Keikku visual identity system", caption: "A visual system built for the intersection of clinical precision and human warmth." },
      { type: "heading", text: "Photography as the proof" },
      { type: "paragraph", text: "We art-directed all brand photography with the same principle: the device should appear in the context of care, not isolated in clinical white-space. Clinicians wearing it during rounds, monitoring patients remotely, making decisions with confidence. The photography is the evidence that the product belongs in real clinical environments." },
      { type: "internalLink", href: "/journal/photography-as-brand-language", label: "Photography as Brand Language", context: "Related Article" },
      { type: "heading", text: "The result" },
      { type: "list", items: ["Brand strategy grounded in clinical user research", "Visual identity for clinical and consumer audiences", "Motion system for onboarding and in-app experience", "Digital experience built for HCP and patient audiences"] },
      { type: "internalLink", href: "/work/keikku", label: "View the Keikku case study", context: "Case Study" },
      { type: "internalLink", href: "/glossary/brand-identity", label: "Brand Identity", context: "Glossary" },
    ],
  },

  // ─── 4. Art of Naming ────────────────────────────────────────────────────
  {
    id: "art-of-naming",
    title: "The Art of Naming: What Makes a Brand Name Great",
    subtitle: "We've named dozens of companies and products. Here's the framework we use — and why so many 'safe' names end up costing companies more in the long run than a bold one would have.",
    category: "Craft",
    date: "December 2024",
    readTime: "6 min read",
    featured: false,
    coverImage: `${SANITY}/43d9fe391c3de48c4f41dee41fd3a8c97f6540fa-1180x720.jpg`,
    relatedPosts: ["multiversx-brand-90-days", "brand-led-growth"],
    tags: ["Naming", "Brand Strategy", "Brand Identity", "Verbal Identity"],
    body: [
      { type: "paragraph", text: "A name is the shortest sentence your brand will ever write. In two syllables or three, it has to convey something true, evoke an emotion, and stake a claim in the mind of the person hearing it for the first time. Most companies don't treat naming with anywhere near the care it deserves — and they pay for it later." },
      { type: "heading", text: "The five filters we run every name through" },
      { type: "list", items: [
        "Ownable: Is there clear white space in the category?",
        "Pronounceable: Can it survive a phone call, a noisy bar, an international market?",
        "Scalable: Will it still make sense when the company is 10× its current size?",
        "Evocative: Does it create a feeling, an image, an association — or just a label?",
        "Legally available: Trademarkable in the key markets where you'll operate?",
      ]},
      { type: "paragraph", text: "Most names fail at least one of these. Truly great names clear all five — and then they do something more: they create a world. 'Apple' doesn't just name a computer company; it conjures simplicity, nature, and a rebellious creativity. 'Rivian' sounds like a river and an adventure and a direction all at once. Great names are inexhaustible." },
      { type: "internalLink", href: "/glossary/naming-strategy", label: "Naming Strategy", context: "Glossary" },
      { type: "heading", text: "The cost of a bad name" },
      { type: "paragraph", text: "We regularly get called in to help rebrand companies whose original names have become anchors rather than accelerants. The cost is enormous: new trademark registrations, updated marketing materials, SEO equity wiped out, customer confusion, internal culture disruption. A name that wasn't quite right at the start might cost seven figures to fix five years later." },
      { type: "quote", text: "Your name is the first brand asset you'll ever create and the last one you'll ever want to change. Get it right the first time." },
      { type: "heading", text: "How we named MultiversX" },
      { type: "paragraph", text: "When we started the Elrond naming project, the brief called for something expansive and technically precise — but not cold. Something that conveyed infinite possibility without feeling abstract. 'MultiversX' captures the multiverse of applications the ecosystem enables, elevated to the power of X for engineering authority. For a blockchain platform designed to host an entire universe of products, it was the most honest name we could give it." },
      { type: "internalLink", href: "/journal/multiversx-brand-90-days", label: "How We Built the MultiversX Brand in 90 Days", context: "Case Study" },
      { type: "paragraph", text: "We never start with a name shortlist. We start with a creative brief: what does this company need its name to do? What feeling should it create on first hearing? What should it absolutely not evoke? Once those parameters are set, we can generate hundreds of candidates against a clear standard — which is the only way to know, without doubt, that the name you've chosen is the right one." },
      { type: "internalLink", href: "/glossary/verbal-identity", label: "Verbal Identity", context: "Glossary" },
      { type: "internalLink", href: "/services/brand-strategy", label: "Brand Strategy — how we work", context: "Service" },
    ],
  },

  // ─── 5. Kōzōwood ─────────────────────────────────────────────────────────
  {
    id: "kozowood-sustainable-brand",
    title: "Branding the Building Revolution: Kōzōwood",
    subtitle: "How do you make engineered timber feel like an urgent, inevitable movement? For Kōzōwood — building next-generation CLT homes — the answer was to lead with precision, not green credentials.",
    category: "Case Study",
    date: "November 2024",
    readTime: "7 min read",
    featured: false,
    coverImage: `${SANITY}/29070cd07ab93fc72b20f8ebbc129c4e4d6b7bb6-1180x720.jpg`,
    relatedProject: "kozowood",
    relatedProjectName: "Kōzōwood",
    relatedPosts: ["award-worthy-digital-experience", "brand-led-growth", "photography-as-brand-language"],
    tags: ["Brand Identity", "Sustainability", "Architecture", "Digital Experience", "WebGL"],
    body: [
      { type: "paragraph", text: "Kōzōwood builds mass timber and CLT residential structures — homes that are structurally superior to conventional concrete construction, dramatically more sustainable, and deeply beautiful. Their technology is extraordinary. But in a construction market dominated by conventional materials and established players, 'extraordinary' wasn't sufficient." },
      { type: "heading", text: "The challenge: make sustainable feel inevitable" },
      { type: "paragraph", text: "Most companies in the sustainable building space lean on green imagery — leaves, forests, earth tones. It's visually legible but entirely undifferentiated. Kōzōwood needed to look like what it actually is: a precision technology company that has mastered a superior way to build. Bold, technical, and rooted in the natural world — simultaneously." },
      { type: "image", src: `${SANITY}/29070cd07ab93fc72b20f8ebbc129c4e4d6b7bb6-1180x720.jpg`, alt: "Kōzōwood construction", caption: "Where precision engineering meets natural material — the Kōzōwood brand world." },
      { type: "quote", text: "Beyond understood our mission immediately. They built a brand that makes our technology feel like the obvious future of construction.", author: "Kōzōwood Founding Team" },
      { type: "heading", text: "A digital experience that brings wood to life" },
      { type: "paragraph", text: "The website was the centrepiece of the brand launch. We used WebGL animations to simulate the structural properties of CLT in real time, commissioned marimba-led sound design with nature field recordings, and integrated drone footage from the Comporta, Portugal test site. A world map showing wood construction data globally made the case for mass timber at scale." },
      { type: "internalLink", href: "/services/digital-experience", label: "Digital Experience — our approach", context: "Service" },
      { type: "heading", text: "A brand system built for two worlds" },
      { type: "paragraph", text: "The Kōzōwood brand had to operate in two very different contexts simultaneously: the professional world of architects, developers, and investors, and the consumer world of homeowners discovering that wood can outperform concrete. Every element had to communicate quality and precision in both environments without compromise." },
      { type: "list", items: [
        "Brand strategy anchored in structural superiority and sustainability",
        "Visual identity built for professional and consumer audiences",
        "Website that makes mass timber feel like a design-led product",
        "WebGL motion system that brings the material to life digitally",
        "Awwwards SOTD, Developer Award, FWA of the Day, CSS Design Awards",
      ]},
      { type: "internalLink", href: "/journal/award-worthy-digital-experience", label: "What Makes a Digital Experience Award-Worthy?", context: "Related Article" },
      { type: "internalLink", href: "/work/kozowood", label: "View the Kōzōwood case study", context: "Case Study" },
    ],
  },

  // ─── 6. Award-worthy Digital ─────────────────────────────────────────────
  {
    id: "award-worthy-digital-experience",
    title: "What Makes a Digital Experience Award-Worthy?",
    subtitle: "We've won 90+ industry awards across Awwwards, FWA, and CSSDA. Here's what we've learned about the difference between a beautiful website and a truly exceptional one — and why most beautiful sites never win.",
    category: "Craft",
    date: "October 2024",
    readTime: "5 min read",
    featured: false,
    coverImage: `${SANITY}/a5b674fefa860f0864baaf56bfbc2bb526b263fb-1180x720.jpg`,
    relatedPosts: ["kozowood-sustainable-brand", "multiversx-brand-90-days", "photography-as-brand-language"],
    tags: ["Web Design", "Digital Experience", "Awards", "Craft", "WebGL"],
    body: [
      { type: "paragraph", text: "We've been recognized by Awwwards, FWA, and CSSDA more than 90 times. That's not a number we lead with — it's a byproduct of a way of working. But it has taught us something concrete about what separates the sites that receive awards from the sites that deserve to but don't." },
      { type: "heading", text: "Performance is not optional" },
      { type: "paragraph", text: "The most beautifully animated site in the world is worthless if it loads in 8 seconds. Performance and craft are not in opposition — they're both non-negotiable requirements. The best digital experiences we've built load instantly, animate at 60fps, and work flawlessly on a 4-year-old mobile device. Judges notice. Users definitely notice." },
      { type: "heading", text: "Animation should have meaning" },
      { type: "paragraph", text: "The sites that judges remember are the ones where every transition, every hover state, and every scroll-triggered animation serves a purpose. Animation should reveal hierarchy, guide attention, or create genuine delight — not just prove that the developer knows GSAP. Before any animation gets built, we ask: why does this exist? What does it add to the understanding of the content?" },
      { type: "quote", text: "If you can't explain why an animation exists, it probably shouldn't." },
      { type: "heading", text: "Typography is doing most of the work" },
      { type: "paragraph", text: "Exceptional web design is first and foremost exceptional typographic design. The typeface choice, the sizing scale, the line height, the tracking, the way type responds to viewport changes — this is where the real craft lives. Imagery can make a site look expensive; typography makes it feel considered and intentional. The best typographic websites could remove all the imagery and still communicate their brand precisely." },
      { type: "internalLink", href: "/glossary/typography-system", label: "Typography System", context: "Glossary" },
      { type: "heading", text: "The thing that actually wins" },
      { type: "paragraph", text: "The sites that consistently win are the ones with a genuine point of view. Not a trend followed, but a perspective expressed. The best sites we've built feel like a direct, inevitable extension of the brand they represent — so much so that you couldn't imagine the brand having a different kind of digital experience." },
      { type: "internalLink", href: "/work/clear-street", label: "Clear Street — awarded SOTD, Developer Award, FWA", context: "Case Study" },
      { type: "internalLink", href: "/work/multiversx", label: "MultiversX — awarded SOTD, Developer Award, FWA", context: "Case Study" },
      { type: "internalLink", href: "/services/digital-experience", label: "Digital Experience — how we build", context: "Service" },
    ],
  },

  // ─── 7. Photography as brand ─────────────────────────────────────────────
  {
    id: "photography-as-brand-language",
    title: "Photography as Brand Language",
    subtitle: "The images a brand chooses — and how they're made — communicate everything about what that brand believes. Most companies still treat photography as decoration. The ones that win treat it as argument.",
    category: "Craft",
    date: "September 2024",
    readTime: "5 min read",
    featured: false,
    coverImage: `${SANITY}/644ae8d8c5615611ab907c19e78900ba1ebf3da6-1180x720.jpg`,
    relatedPosts: ["award-worthy-digital-experience", "keikku-simplicity-strategy", "kozowood-sustainable-brand"],
    tags: ["Photography", "Art Direction", "Brand Identity", "Content"],
    body: [
      { type: "paragraph", text: "Stock photography is a tell. The moment you see a brand using posed stock imagery — the smiling person in a headset, the handshake, the team huddled over a laptop — you've learned something about how that brand thinks of itself. It thinks of itself as interchangeable. And that's exactly how it will be perceived." },
      { type: "heading", text: "What original photography communicates" },
      { type: "paragraph", text: "Original photography communicates specificity, which is the same thing as trust. It says: we are real people, making real things, for real reasons. It says we had the confidence to show you something true rather than something generic. That's enormously valuable — and shockingly underused, even by companies spending seven figures on performance marketing." },
      { type: "image", src: `${SANITY}/644ae8d8c5615611ab907c19e78900ba1ebf3da6-1180x720.jpg`, alt: "Brand portrait photography", caption: "Portrait photography from a Beyond campaign — the people behind the product." },
      { type: "heading", text: "Art direction is the work before the shoot" },
      { type: "paragraph", text: "The shoot is the execution. The art direction — the casting, the location scouting, the lighting reference, the shot list, the emotional brief for the photographer — that's the actual work. A well-art-directed shoot produces images that all look like they belong to the same world. A poorly art-directed shoot produces a collection of technically adequate photographs that feel unrelated." },
      { type: "quote", text: "The best brand photograph is the one that would be recognizable as belonging to that brand even without the logo in frame." },
      { type: "heading", text: "What we've learned from 100+ campaigns" },
      { type: "list", items: [
        "Brief the photographer on the brand, not just the shot list",
        "Cast people who actually use the product — or could plausibly",
        "Shoot more than you need; edit ruthlessly to the best 20%",
        "Consistency of light and palette matters more than any individual image",
        "Build a photography style guide alongside the visual identity",
      ]},
      { type: "internalLink", href: "/journal/keikku-simplicity-strategy", label: "Simplicity as Strategy: The Keikku Brand", context: "Related Article" },
      { type: "internalLink", href: "/services/content-creative", label: "Content & Creative — how we direct shoots", context: "Service" },
      { type: "internalLink", href: "/glossary/visual-identity", label: "Visual Identity", context: "Glossary" },
    ],
  },

  // ─── 8. Phive ─────────────────────────────────────────────────────────────
  {
    id: "phive-expansion-brand",
    title: "Brand as Expansion Engine: How Phive Scaled Across Portugal",
    subtitle: "Phive was opening new clubs across Portugal. Every new location had to feel like the flagship — and the founding team couldn't be in five places at once. Here's how brand solved that problem for them.",
    category: "Strategy",
    date: "August 2024",
    readTime: "8 min read",
    featured: false,
    coverImage: `${SANITY}/2405f85e088f3e9b8a28f8c364fa64a88c75bff5-1180x720.jpg`,
    relatedProject: "phive",
    relatedProjectName: "Phive",
    relatedPosts: ["brand-led-growth", "keikku-simplicity-strategy", "art-of-naming"],
    tags: ["Brand Strategy", "Brand Identity", "Fitness", "Expansion", "Portugal"],
    body: [
      { type: "paragraph", text: "Before Phive opened in a new city, the brand had already arrived. That's what a strong expansion brand does — it sets expectations before the team does, creates anticipation, and ensures that every new location feels like it has always belonged there. Brand doesn't just describe the business; in Phive's case, it made the business possible at scale." },
      { type: "heading", text: "Creating a brand that scales across locations" },
      { type: "paragraph", text: "When we started working with Phive, they had a flagship club and the ambition to expand rapidly across Portugal. The challenge wasn't the expansion itself — it was ensuring that the energy, quality, and community of the original location could be faithfully replicated in every new market without the founders being physically present at every moment." },
      { type: "image", src: `${SANITY}/2405f85e088f3e9b8a28f8c364fa64a88c75bff5-1180x720.jpg`, alt: "Phive brand system", caption: "Phive's visual world — precision fitness, community, and a clear sense of belonging." },
      { type: "heading", text: "The brand as the only constant" },
      { type: "paragraph", text: "In Phive's expansion phase, the brand system was the entire experience infrastructure. Different locations, different staff, different communities — but the same commitment, the same visual language, the same emotional promise. Every touchpoint, from membership cards to in-club signage to the digital experience, had to feel like the same business." },
      { type: "image", src: `${SANITY}/95444ec05bbb63713ebb2ad05b94df4e88fd247d-1360x1360.png`, alt: "Phive digital experience", caption: "The Phive digital experience — arriving in new markets before the doors open." },
      { type: "quote", text: "The best expansion brands feel like they were always meant to be in that city. Not imported — inevitable." },
      { type: "heading", text: "What expansion brands need to get right" },
      { type: "list", items: [
        "Define the brand experience, not just the visual identity",
        "Build systems that new teams can execute faithfully from day one",
        "Create the digital presence that arrives before the physical one",
        "Make every touchpoint feel like a deliberate brand decision",
        "Measure brand consistency across locations — not just performance metrics",
      ]},
      { type: "internalLink", href: "/journal/brand-led-growth", label: "Brand-Led Growth: Why the Best Companies Lead with Brand", context: "Related Article" },
      { type: "internalLink", href: "/work/phive", label: "View the Phive case study", context: "Case Study" },
      { type: "internalLink", href: "/services/brand-strategy", label: "Brand Strategy — our approach", context: "Service" },
      { type: "internalLink", href: "/glossary/brand-guidelines", label: "Brand Guidelines", context: "Glossary" },
    ],
  },
];

export const categories = ["All", "Case Study", "Strategy", "Craft"];
