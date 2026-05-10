const VCDN = "https://rejouice-2024.cdn.prismic.io/rejouice-2024";

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
  tags: string[];
}

export type BodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; caption?: string }
  | { type: "list"; items: string[] };

export const posts: JournalPost[] = [
  // ─── 1. MultiversX ────────────────────────────────────────────────────────
  {
    id: "tensor-brand-90-days",
    title: "How We Built the MultiversX Brand in 90 Days",
    subtitle: "A first-person look at renaming and completely rebuilding the Elrond blockchain ecosystem — in under three months.",
    category: "Case Study",
    date: "March 2025",
    readTime: "9 min read",
    featured: true,
    coverImage: "https://mir-s3-cdn-cf.behance.net/projects/404/5542c1244023205.Y3JvcCw4MDgsNjMyLDAsMA.png",
    coverVideo: `${VCDN}/aJfd1KTt2nPbaHC__TENSOR-CASESTUDY-01.mp4`,
    relatedProject: "multiversx",
    relatedProjectName: "MultiversX",
    tags: ["Brand Identity", "Naming", "Motion Design", "Strategy"],
    body: [
      { type: "paragraph", text: "Three months. That's all we had to take Elrond from a powerful but underrecognised blockchain ecosystem to the fully-launched MultiversX brand. No new visual language, no new identity, no name yet — just a remarkable technology and a founding team with the vision to redefine what a Layer 1 could be." },
      { type: "heading", text: "Starting from a name" },
      { type: "paragraph", text: "The brief was direct: rename Elrond and build a brand that could carry the weight of a next-generation blockchain ecosystem. We ran over 200 name candidates through our filter: Is it ownable? Does it evoke the right dimensions? Can it scale into a multi-product ecosystem? 'MultiversX' emerged as the clear choice — capturing the infinite possibilities the platform unlocks, elevated to the power of X for technical precision." },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/projects/404/5542c1244023205.Y3JvcCw4MDgsNjMyLDAsMA.png", alt: "MultiversX brand system", caption: "The MultiversX visual system — precision meets infinite scale." },
      { type: "heading", text: "Identity for an ecosystem, not just a product" },
      { type: "paragraph", text: "Once the name was set, we built outward — a visual identity spanning three type families, a motion design system, and a complete suite of sub-brand rules. Every element had to work at the scale of a global ecosystem while remaining coherent across hundreds of individual applications. M×Mint, black, and white anchored the core combination." },
      { type: "quote", text: "A brand name isn't just a label. It's the first promise you make to every person who'll ever encounter your company.", author: "Guillaume Hamon, Founding Partner" },
      { type: "video", src: `${VCDN}/aJfdPaTt2nPbaHC8_TENSOR-CASESTUDY-02.mp4`, caption: "MultiversX brand identity system in motion." },
      { type: "heading", text: "What 90 days taught us" },
      { type: "paragraph", text: "Speed doesn't have to mean sacrifice. When everyone is aligned on the vision and decisions are made with conviction, it's possible to produce work of the highest calibre under extreme time pressure. The MultiversX launch proved it — Awwwards Site of the Day from day one." },
      { type: "list", items: ["Naming complete in 3 weeks", "Full visual identity system in 6 weeks", "Motion & design system in 10 weeks", "Web design and development in parallel", "Global ecosystem launch on day 90"] },
    ],
  },

  // ─── 2. Brand-Led Growth ──────────────────────────────────────────────────
  {
    id: "brand-led-growth",
    title: "Brand-Led Growth: Why the Best Companies Lead with Brand",
    subtitle: "Performance marketing has become a commodity. The companies that win long-term are the ones that treat brand as their most important growth lever.",
    category: "Strategy",
    date: "February 2025",
    readTime: "7 min read",
    featured: false,
    coverImage: "https://mir-s3-cdn-cf.behance.net/projects/404/c5843a220845201.Y3JvcCwxNzA1LDEzMzQsMTQ3LDA.png",
    relatedProject: "clear-street",
    relatedProjectName: "Clear Street",
    tags: ["Brand Strategy", "Growth Marketing", "Performance"],
    body: [
      { type: "paragraph", text: "In the early days of digital advertising, performance marketing felt like a superpower. Precise targeting, measurable returns, infinitely scalable. It still is powerful — but it's no longer a differentiator. Every company has access to the same platforms, the same targeting, the same creative playbook. The CAC keeps climbing. The ROAS keeps falling." },
      { type: "heading", text: "The brand premium is real" },
      { type: "paragraph", text: "Companies with strong brands consistently outperform their sector peers on every metric that matters: lower customer acquisition costs, higher retention, better pricing power, faster hiring. Brand isn't soft — it's a compounding asset that pays dividends for years." },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/projects/404/c5843a220845201.Y3JvcCwxNzA1LDEzMzQsMTQ3LDA.png", alt: "Clear Street brand system", caption: "Clear Street established brand authority in capital markets before a single sales conversation began." },
      { type: "quote", text: "The best brands in any category generate demand before the sales team picks up the phone. That's the compounding return on brand investment." },
      { type: "heading", text: "The three brand investments that compound" },
      { type: "paragraph", text: "Our work with category leaders has taught us there are three brand investments that pay off disproportionately over time: a clear and ownable positioning, a visual identity with genuine craft, and a content strategy that teaches your audience rather than selling to them." },
      { type: "list", items: ["Ownable positioning: the market niche only you can credibly claim", "Visual craft: the aesthetic standard that makes everything feel expensive", "Educational content: the trust that accumulates before the transaction"] },
      { type: "heading", text: "The Clear Street proof point" },
      { type: "paragraph", text: "When we partnered with Clear Street on their rebrand, the challenge was to position a fintech disruptor as a trustworthy institutional player — simultaneously. Capital markets doesn't easily grant trust. The brand had to communicate credibility, ambition, and technical superiority before a single meeting took place." },
      { type: "paragraph", text: "The result: a brand that earned Awwwards Site of the Day, Developer Award, FWA of the Day, and CSS Design Awards Website of the Day — four top industry honours at launch. More importantly, a brand that opens doors in a category where those doors are made of institutional skepticism and billion-dollar relationships." },
    ],
  },

  // ─── 3. Keikku ───────────────────────────────────────────────────────────
  {
    id: "oura-simplicity-strategy",
    title: "Simplicity as Strategy: The Keikku Brand",
    subtitle: "In a medical device category defined by complexity, Keikku needed to stand for something fundamentally human. Here's how we helped them do it.",
    category: "Case Study",
    date: "January 2025",
    readTime: "8 min read",
    featured: false,
    coverImage: "https://mir-s3-cdn-cf.behance.net/projects/404/aeeb2894949381.Y3JvcCwzMDAwLDIzNDYsMCwyOQ.jpg",
    coverVideo: `${VCDN}/Z3xbLZbqstJ99GKJ_01-OURA-Video2.mp4`,
    relatedProject: "keikku",
    relatedProjectName: "Keikku",
    tags: ["Brand Identity", "Visual Identity", "Medical Device", "Digital Experience"],
    body: [
      { type: "paragraph", text: "Medical device technology is complex by nature — clinical dashboards, regulatory requirements, dense technical specifications. Every brand in the space seemed to compete on capability metrics. Keikku, building the world's first smart wireless stethoscope, came to us with a different challenge: they had a genuinely revolutionary product, but needed a brand that made it feel accessible to every healthcare professional who would use it." },
      { type: "heading", text: "The brief: make clinical feel human" },
      { type: "paragraph", text: "Keikku's device monitors cardiac and pulmonary health remotely — capturing the same data as traditional clinical equipment, but wirelessly and continuously. Their mission is fundamentally human: give clinicians better tools and give patients better outcomes. But the brand risk was defaulting to cold, technical, category-standard visual language." },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/projects/404/aeeb2894949381.Y3JvcCwzMDAwLDIzNDYsMCwyOQ.jpg", alt: "Keikku brand photography", caption: "Brand photography that put the human at the centre — not the device." },
      { type: "heading", text: "The insight: precision for people" },
      { type: "paragraph", text: "The unlock was a truth embedded in Keikku's product: clinical precision in a form factor that disappears into the care experience. 'Precision for people' became the creative foundation — and we built the visual identity around warmth, trust, and the quiet confidence of a device that just works." },
      { type: "quote", text: "The best medical brands don't look like medical brands. They look like the future the patient is hoping for." },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/projects/404/aeeb2894949381.Y3JvcCwzMDAwLDIzNDYsMCwyOQ.jpg", alt: "Keikku visual identity system", caption: "A visual system built for the intersection of clinical precision and human warmth." },
      { type: "heading", text: "The result" },
      { type: "paragraph", text: "A brand system that works in a hospital boardroom, a conference poster, a mobile app, and a care team's daily workflow — simultaneously. Keikku launched with a digital experience that communicated both clinical authority and the warmth that makes healthcare professionals actually want to use the product." },
      { type: "list", items: ["Brand strategy grounded in clinical user research", "Visual identity built for clinical and consumer contexts", "Motion system for onboarding and in-app experience", "Digital experience built for HCP and patient audiences"] },
    ],
  },

  // ─── 4. Art of Naming ────────────────────────────────────────────────────
  {
    id: "art-of-naming",
    title: "The Art of Naming: What Makes a Brand Name Great",
    subtitle: "We've named dozens of companies and products. Here's the framework we use — and why so many 'safe' names end up costing companies more in the long run.",
    category: "Craft",
    date: "December 2024",
    readTime: "6 min read",
    featured: false,
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/10190a217782349.6796a530a3cec.png",
    tags: ["Naming", "Brand Strategy", "Brand Identity"],
    body: [
      { type: "paragraph", text: "A name is the shortest sentence your brand will ever write. In two syllables or three, it has to convey something true, evoke an emotion, and stake a claim in the mind of the person hearing it for the first time. Most companies don't treat naming with the care it deserves." },
      { type: "heading", text: "The five filters we run every name through" },
      { type: "list", items: ["Ownable: Is there clear white space in the category?", "Pronounceable: Can it survive a phone call, a noisy bar, an international market?", "Scalable: Will it still make sense when the company is 10x its current size?", "Evocative: Does it create a feeling, an image, an association — or just a label?", "Legally available: Trademarkable in the key markets where you'll operate?"] },
      { type: "paragraph", text: "Most names fail at least one of these. Truly great names clear all five — and then they do something more: they create a world. 'Apple' doesn't just name a computer company; it conjures simplicity, nature, and a certain rebellious creativity. 'Rivian' sounds like a river and an adventure and a direction all at once." },
      { type: "heading", text: "The cost of a bad name" },
      { type: "paragraph", text: "We often get called in to help rebrand companies whose original names have become anchors rather than accelerants. The cost is enormous: new trademark registrations, updated marketing materials, SEO equity wiped out, customer confusion, internal culture disruption. A name that wasn't quite right at the start might cost seven figures to fix later." },
      { type: "quote", text: "Your name is the first brand asset you'll ever create and the last one you'll ever want to change. Get it right the first time." },
      { type: "heading", text: "Why we named our MultiversX project 'MultiversX'" },
      { type: "paragraph", text: "When we started the MultiversX naming project, the brief called for something that felt expansive and technically precise — but not cold. Something that conveyed infinite possibility without feeling abstract. 'MultiversX' captures the multiverse of applications the ecosystem enables, elevated to the power of X for engineering authority. For a blockchain platform designed to host an entire universe of products, it was the most honest name we could give it." },
    ],
  },

  // ─── 5. Kōzōwood ───────────────────────────────────────────────────────
  {
    id: "moxion-sustainable-brand",
    title: "Branding the Building Revolution: Kōzōwood",
    subtitle: "How do you make engineered timber feel like an urgent movement? For Kōzōwood — building next-generation wooden homes — the answer was to lead with nature and precision.",
    category: "Case Study",
    date: "November 2024",
    readTime: "7 min read",
    featured: false,
    coverImage: "https://mir-s3-cdn-cf.behance.net/projects/404/494a6a228812019.Y3JvcCwxNDM4LDExMjUsNDI3LDA.png",
    coverVideo: `${VCDN}/Z22K2ZbqstJ981uv_RJ-CS-MP01.mp4`,
    relatedProject: "kozowood",
    relatedProjectName: "Kōzōwood",
    tags: ["Brand Identity", "Sustainability", "Architecture", "Design"],
    body: [
      { type: "paragraph", text: "Kōzōwood builds mass timber and CLT residential structures — homes that are structurally superior to conventional concrete construction, dramatically more sustainable, and deeply beautiful. Their technology is extraordinary. But in a construction market dominated by conventional materials and established players, extraordinary wasn't enough." },
      { type: "heading", text: "The challenge: make sustainable feel inevitable" },
      { type: "paragraph", text: "Most companies in the sustainable building space lean on green imagery — leaves, forests, earth tones. It's visually legible but entirely undifferentiated. Kōzōwood needed to look like what it actually is: a precision technology company that has mastered a superior way to build. Bold, technical, and rooted in the natural world — simultaneously." },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/projects/404/494a6a228812019.Y3JvcCwxNDM4LDExMjUsNDI3LDA.png", alt: "Kōzōwood construction", caption: "Where precision engineering meets natural material — the Kōzōwood brand world." },
      { type: "quote", text: "Beyond understood our mission immediately. They built a brand that makes our technology feel like the obvious future of construction.", author: "Kōzōwood Founding Team" },
      { type: "heading", text: "A brand system built for two worlds" },
      { type: "paragraph", text: "The Kōzōwood brand had to work in two very different contexts simultaneously: the professional world of architects, developers, and investors, and the consumer world of homeowners discovering that wood can outperform concrete. Every element had to communicate quality and precision in both environments." },
      { type: "list", items: ["Brand strategy anchored in structural superiority and sustainability", "Visual identity built for professional and consumer audiences", "Website that makes mass timber feel like a design-led product", "Motion system that brings the material to life digitally"] },
    ],
  },

  // ─── 6. Award-worthy Digital ──────────────────────────────────────────
  {
    id: "award-worthy-digital-experience",
    title: "What Makes a Digital Experience Award-Worthy?",
    subtitle: "We've won 90+ industry awards across Awwwards, FWA, and CSSDA. Here's what we've learned about the difference between a beautiful website and a truly exceptional one.",
    category: "Craft",
    date: "October 2024",
    readTime: "5 min read",
    featured: false,
    coverImage: "https://mir-s3-cdn-cf.behance.net/projects/404/c5843a220845201.Y3JvcCwxNzA1LDEzMzQsMTQ3LDA.png",
    tags: ["Web Design", "Digital Experience", "Awards", "Craft"],
    body: [
      { type: "paragraph", text: "We've been recognized by Awwwards, FWA, and CSSDA more than 90 times. That's not a number we lead with — it's a byproduct of the way we work. But it has taught us something concrete about what separates the sites that receive awards from the sites that deserve to but don't." },
      { type: "heading", text: "Speed is not optional" },
      { type: "paragraph", text: "The most beautifully animated site in the world is worthless if it loads in 8 seconds. Performance and craft are not in opposition — they're both requirements. The best digital experiences we've built load instantly, animate at 60fps, and work flawlessly on a 4-year-old mobile device." },
      { type: "heading", text: "Animation should have meaning" },
      { type: "paragraph", text: "The sites that judges remember are the ones where every transition, every hover state, and every scroll-triggered animation serves a purpose. Animation should reveal hierarchy, guide attention, or create delight — not just prove that the developer knows GSAP." },
      { type: "quote", text: "If you can't explain why an animation exists, it probably shouldn't." },
      { type: "heading", text: "Typography is doing most of the work" },
      { type: "paragraph", text: "Exceptional web design is first and foremost exceptional typographic design. The typeface choice, the sizing scale, the line height, the tracking, the way type responds to viewport changes — this is where the real craft lives. Imagery can make a site look expensive; typography makes it feel considered." },
      { type: "heading", text: "The thing that actually wins awards" },
      { type: "paragraph", text: "The sites that consistently win are the ones with a genuine point of view. Not a trend followed, but a perspective expressed. The best sites we've built feel like a direct extension of the brand they represent — so much so that you couldn't imagine the brand having a different kind of site." },
    ],
  },

  // ─── 7. Photography as brand ──────────────────────────────────────────
  {
    id: "photography-as-brand-language",
    title: "Photography as Brand Language",
    subtitle: "The images a brand chooses — and how they're made — communicate everything about what that brand believes. Most companies still treat photography as decoration.",
    category: "Craft",
    date: "September 2024",
    readTime: "5 min read",
    featured: false,
    coverImage: "https://mir-s3-cdn-cf.behance.net/projects/404/3ac091217373107.Y3JvcCwyNDI0LDE4OTYsMCww.jpg",
    tags: ["Photography", "Art Direction", "Brand Identity", "Content"],
    body: [
      { type: "paragraph", text: "Stock photography is a tell. The moment you see a brand using posed stock imagery — the smiling person in a headset, the handshake, the team huddled over a laptop — you've learned something about how that brand thinks of itself. It thinks of itself as interchangeable." },
      { type: "heading", text: "What original photography communicates" },
      { type: "paragraph", text: "Original photography communicates specificity, which is the same thing as trust. It says: we are real people, making real things, for real reasons. It says we had the confidence to show you something true rather than something generic. That's enormously valuable — and shockingly underused." },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/projects/404/3ac091217373107.Y3JvcCwyNDI0LDE4OTYsMCww.jpg", alt: "Brand portrait photography", caption: "Portrait photography from a Beyond campaign — the people behind the product." },
      { type: "heading", text: "Art direction is the work before the shoot" },
      { type: "paragraph", text: "The shoot is the execution. The art direction — the casting, the location scouting, the lighting reference, the shot list, the emotional brief for the photographer — that's the work. A well-art-directed shoot produces images that all look like they belong to the same world. A poorly art-directed shoot produces a collection of technically adequate photographs that feel unrelated." },
      { type: "quote", text: "The best brand photograph is the one that would be recognizable as belonging to that brand even without the logo in frame." },
      { type: "heading", text: "What we've learned from 100+ campaigns" },
      { type: "list", items: ["Brief the photographer on the brand, not just the shot list", "Cast people who actually use the product — or could plausibly", "Shoot more than you need; edit to the best 20%", "Consistency of light and palette matters more than individual images", "Build a style guide for photography alongside the visual identity"] },
    ],
  },

  // ─── 8. Phive ─────────────────────────────────────────────────────────
  {
    id: "pre-launch-brand-building",
    title: "Brand as Expansion Engine: How Phive Built a Multi-Location Presence",
    subtitle: "Phive was opening new clubs across Portugal. Every new location had to feel like the flagship. Here's how brand — not operations — made that possible.",
    category: "Strategy",
    date: "August 2024",
    readTime: "8 min read",
    featured: false,
    coverImage: "https://mir-s3-cdn-cf.behance.net/projects/404/3877bf243467103.Y3JvcCwxMTkyLDkzMywxMDMsMA.png",
    coverVideo: `${VCDN}/aFMbCbNJEFaPYFQx_RIVIAN-CASESTUDY-01.mp4`,
    relatedProject: "phive",
    relatedProjectName: "Phive",
    tags: ["Brand Strategy", "Brand Identity", "Fitness", "Expansion"],
    body: [
      { type: "paragraph", text: "Before Phive opened in a new city, the brand had already arrived. That's what a strong expansion brand does — it sets expectations before the team does, creates anticipation, and ensures that every new location feels like it has always belonged there." },
      { type: "heading", text: "Creating a brand that scales across locations" },
      { type: "paragraph", text: "When we started working with Phive, they had a flagship club and ambitions to expand rapidly across Portugal. The challenge wasn't the expansion itself — it was ensuring that the energy, quality, and community of the original location could be faithfully replicated in every new market. Brand had to do the work that physical proximity couldn't." },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/projects/404/3877bf243467103.Y3JvcCwxMTkyLDkzMywxMDMsMA.png", alt: "Phive brand system", caption: "Phive's visual world — precision fitness, community, and a clear sense of where you belong." },
      { type: "heading", text: "The brand as the only constant" },
      { type: "paragraph", text: "In Phive's expansion phase, the brand system was the entire experience infrastructure. Different locations, different staff, different communities — but the same commitment, the same visual language, the same emotional promise. Every touchpoint, from membership cards to in-club signage to the digital experience, had to feel cohesive." },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/projects/404/3877bf243467103.Y3JvcCwxMTkyLDkzMywxMDMsMA.png", alt: "Phive digital experience", caption: "The Phive digital experience — arriving in new markets before the doors open." },
      { type: "quote", text: "The best expansion brands feel like they were always meant to be in that city. Not imported — inevitable." },
      { type: "heading", text: "What expansion brands need to get right" },
      { type: "list", items: ["Define the brand experience, not just the visual identity", "Build systems that new teams can execute faithfully from day one", "Create the digital presence that arrives before the physical one", "Make every touchpoint feel like a deliberate brand decision", "Measure brand consistency across locations — not just performance metrics"] },
    ],
  },
];

export const categories = ["All", "Case Study", "Strategy", "Craft"];
