const IMG  = "https://images.prismic.io/rejouice-2024";
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
  // ─── 1. Tensor ────────────────────────────────────────────────────────────
  {
    id: "tensor-brand-90-days",
    title: "How We Built the Tensor Brand in 90 Days",
    subtitle: "A first-person look at creating a full brand identity, launch strategy, and CGI campaign for the world's first consumer-owned L4 autonomous vehicle — in under three months.",
    category: "Case Study",
    date: "March 2025",
    readTime: "9 min read",
    featured: true,
    coverImage: `${IMG}/abAKaVxvIZEnjhr7_Hero-CGI.jpg?auto=format,compress&w=2400`,
    coverVideo: `${VCDN}/aJfd1KTt2nPbaHC__TENSOR-CASESTUDY-01.mp4`,
    relatedProject: "tensor",
    relatedProjectName: "Tensor",
    tags: ["Brand Identity", "Naming", "CGI", "Strategy"],
    body: [
      { type: "paragraph", text: "Three months. That's all we had to take Tensor from a blank page to a fully-launched brand. No existing identity, no name, no visual language — just a remarkable product and a founding team with the vision to reinvent personal mobility." },
      { type: "heading", text: "Starting from zero" },
      { type: "paragraph", text: "The brief was deceptively simple: create a brand for the world's first consumer-owned Level 4 autonomous vehicle. But the challenge was anything but. We were naming a company, defining its positioning, building its entire visual system, producing all CGI for a product that hadn't shipped yet, and designing the digital experience — simultaneously." },
      { type: "image", src: `${IMG}/aJfdrKTt2nPbaHC-_Brand-Hero.jpg?auto=format,compress&w=2400`, alt: "Tensor brand hero", caption: "The Tensor visual system — precision meets autonomy." },
      { type: "heading", text: "The name had to carry weight" },
      { type: "paragraph", text: "We ran over 200 name candidates through our filter: Is it ownable? Does it evoke the right emotion? Can it scale into a product family? 'Tensor' emerged as the clear winner — a term from physics and mathematics that describes transformation across multiple dimensions. For a vehicle that transforms how you move through the world, it was unmistakably right." },
      { type: "quote", text: "A brand name isn't just a label. It's the first promise you make to every person who'll ever encounter your company.", author: "Guillaume Hamon, Founding Partner" },
      { type: "paragraph", text: "Once the name was set, we worked outward — building the visual identity around the themes of precision, autonomy, and forward momentum. The logotype is geometric and controlled. The color palette is deliberately restrained: near-black, white, and a single electric accent that appears only at moments of ignition." },
      { type: "video", src: `${VCDN}/aJfdPaTt2nPbaHC8_TENSOR-CASESTUDY-02.mp4`, caption: "Tensor brand identity system in motion." },
      { type: "heading", text: "CGI when the product doesn't exist yet" },
      { type: "paragraph", text: "The vehicle existed only as engineering files when we began the CGI campaign. We worked directly with Tensor's engineering team to build photorealistic renders that had to function as the launch photography — because there was no launch photography yet. Every surface, every reflection, every lighting setup had to feel like it belonged in a premium automotive campaign from day one." },
      { type: "image", src: `${IMG}/aKRHLqTt2nPbac9G_Brand-CGI3-gigapixel-standardv2-1x.jpg?auto=format,compress&w=2400`, alt: "Tensor CGI campaign", caption: "CGI campaign built from engineering files — months before production." },
      { type: "heading", text: "What 90 days taught us" },
      { type: "paragraph", text: "Speed doesn't have to mean sacrifice. When everyone is aligned on the vision and decisions are made with conviction, it's possible to produce work of the highest calibre under extreme time pressure. The Tensor launch proved that." },
      { type: "list", items: ["Naming complete in 3 weeks", "Full visual identity system in 6 weeks", "CGI campaign delivered in 10 weeks", "Web design and development in parallel", "Global launch executed on day 90"] },
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
    coverImage: `${IMG}/Z1r5Y5bqstJ98aaF_rivian.jpg?auto=format,compress&w=2400`,
    relatedProject: "rivian",
    relatedProjectName: "Rivian",
    tags: ["Brand Strategy", "Growth Marketing", "Performance"],
    body: [
      { type: "paragraph", text: "In the early days of digital advertising, performance marketing felt like a superpower. Precise targeting, measurable returns, infinitely scalable. It still is powerful — but it's no longer a differentiator. Every company has access to the same platforms, the same targeting, the same creative playbook. The CAC keeps climbing. The ROAS keeps falling." },
      { type: "heading", text: "The brand premium is real" },
      { type: "paragraph", text: "Companies with strong brands consistently outperform their sector peers on every metric that matters: lower customer acquisition costs, higher retention, better pricing power, faster hiring. Brand isn't soft — it's a compounding asset that pays dividends for years." },
      { type: "image", src: `${IMG}/aFMcJLNJEFaPYFRB_Rivian-02.jpg?auto=format,compress&w=2400`, alt: "Rivian brand campaign", caption: "Rivian generated $5.68B in pre-orders before shipping a single vehicle — purely on brand." },
      { type: "quote", text: "Rivian drove 71,000 pre-orders worth approximately $5.68 billion before their first vehicle ever shipped. That's brand-led growth in its purest form." },
      { type: "heading", text: "The three brand investments that compound" },
      { type: "paragraph", text: "Our work with category leaders has taught us there are three brand investments that pay off disproportionately over time: a clear and ownable positioning, a visual identity with genuine craft, and a content strategy that teaches your audience rather than selling to them." },
      { type: "list", items: ["Ownable positioning: the market niche only you can credibly claim", "Visual craft: the aesthetic standard that makes everything feel expensive", "Educational content: the trust that accumulates before the transaction"] },
      { type: "heading", text: "The Rivian proof point" },
      { type: "paragraph", text: "When we partnered with Rivian in the early days, the electric adventure vehicle category didn't exist. There was no template to follow. We had to define what the brand stood for, what it sounded like, what it felt like — and then build a digital presence that made prospective owners feel something visceral before they ever sat in the driver's seat." },
      { type: "paragraph", text: "The result: a launch that generated nearly six billion dollars in pre-orders and established Rivian as one of the most anticipated vehicle brands in history. Not because of the media spend. Because of the brand." },
    ],
  },

  // ─── 3. Oura Ring ────────────────────────────────────────────────────────
  {
    id: "oura-simplicity-strategy",
    title: "Simplicity as Strategy: The Oura Ring Rebrand",
    subtitle: "In a category overcrowded with noise, Oura needed to stand for something simple and human. Here's how we helped them do it.",
    category: "Case Study",
    date: "January 2025",
    readTime: "8 min read",
    featured: false,
    coverImage: `${IMG}/Z2AYnZbqstJ98i2G_oura-abdul-ovaice-photography-cd-21.png?auto=format,compress&w=2400`,
    coverVideo: `${VCDN}/Z3xbLZbqstJ99GKJ_01-OURA-Video2.mp4`,
    relatedProject: "oura-ring",
    relatedProjectName: "Oura Ring",
    tags: ["Brand Identity", "Visual Identity", "Digital Experience"],
    body: [
      { type: "paragraph", text: "Wearable health technology is loud. Dashboards, data streams, alerts, notifications — every brand in the space seemed to compete on complexity. Oura, the market leader in smart rings, came to us with a different problem: they had the best product, but their brand didn't reflect their true ambition." },
      { type: "heading", text: "The brief: connect technology to humanity" },
      { type: "paragraph", text: "Oura tracks sleep, activity, recovery, and more — for millions of people around the world. Their mission is fundamentally human: help people understand their bodies and make better decisions. But the brand felt clinical, category-standard, and emotionally distant." },
      { type: "image", src: `${IMG}/Z218g5bqstJ981rD_oura-abdul-ovaice-photography-cd-3.jpg?auto=format,compress&w=2400`, alt: "Oura photography", caption: "Brand photography that put the human at the centre — not the device." },
      { type: "heading", text: "The insight: built for everybody" },
      { type: "paragraph", text: "The unlock was a simple truth buried in Oura's product: it's one of the only health devices that genuinely works for every body type, skin tone, lifestyle, and age group. 'Built for everybody' became the creative foundation — and we built the visual identity around radical inclusivity." },
      { type: "quote", text: "The team executed OURA's creative direction and brand strategy with passion and tenacity. When you launch a new website, conversion numbers typically dip. For Oura, it was the exact opposite.", author: "Abdul Ovaice, Creative Director at Oura" },
      { type: "image", src: `${IMG}/Z218opbqstJ981rL_Group3919.png?auto=format,compress&w=2400`, alt: "Oura visual identity", caption: "A vibrant, inclusive visual system built around real people." },
      { type: "heading", text: "When conversion goes up at launch" },
      { type: "paragraph", text: "Most website relaunches cause a temporary dip in conversion as users adjust to new navigation and layouts. The Oura relaunch was an exception — conversions increased from day one. This is what happens when brand and UX are genuinely aligned: users don't just navigate the site, they feel it." },
      { type: "list", items: ["Awwwards Honorable Mention", "Awwwards Mobile Excellence", "CSSDA Special Kudos", "Increased conversion from launch day"] },
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
    coverImage: `${IMG}/Z0csjZbqstJ970gj_abdul-wahid-ovaice-profile-picture3.jpg?auto=format,compress&w=2400`,
    tags: ["Naming", "Brand Strategy", "Brand Identity"],
    body: [
      { type: "paragraph", text: "A name is the shortest sentence your brand will ever write. In two syllables or three, it has to convey something true, evoke an emotion, and stake a claim in the mind of the person hearing it for the first time. Most companies don't treat naming with the care it deserves." },
      { type: "heading", text: "The five filters we run every name through" },
      { type: "list", items: ["Ownable: Is there clear white space in the category?", "Pronounceable: Can it survive a phone call, a noisy bar, an international market?", "Scalable: Will it still make sense when the company is 10x its current size?", "Evocative: Does it create a feeling, an image, an association — or just a label?", "Legally available: Trademarkable in the key markets where you'll operate?"] },
      { type: "paragraph", text: "Most names fail at least one of these. Truly great names clear all five — and then they do something more: they create a world. 'Apple' doesn't just name a computer company; it conjures simplicity, nature, and a certain rebellious creativity. 'Rivian' sounds like a river and an adventure and a direction all at once." },
      { type: "heading", text: "The cost of a bad name" },
      { type: "paragraph", text: "We often get called in to help rebrand companies whose original names have become anchors rather than accelerants. The cost is enormous: new trademark registrations, updated marketing materials, SEO equity wiped out, customer confusion, internal culture disruption. A name that wasn't quite right at the start might cost seven figures to fix later." },
      { type: "quote", text: "Your name is the first brand asset you'll ever create and the last one you'll ever want to change. Get it right the first time." },
      { type: "heading", text: "Why we named our Tensor project 'Tensor'" },
      { type: "paragraph", text: "When we started the Tensor naming project, the brief called for something that felt technical and precise — but not cold. Something that gestured toward the future without feeling like science fiction. A tensor, in mathematics and physics, is a quantity that describes the relationship between vectors and how they transform — it's about change across dimensions. For a vehicle that transforms how you experience the world, it was the most honest name we could give it." },
    ],
  },

  // ─── 5. Moxion ─────────────────────────────────────────────────────────
  {
    id: "moxion-sustainable-brand",
    title: "Branding the Energy Transition: Moxion Power",
    subtitle: "How do you make industrial equipment feel like a movement? For Moxion Power — building the battery systems replacing diesel generators — the answer was to lead with mission, not product.",
    category: "Case Study",
    date: "November 2024",
    readTime: "7 min read",
    featured: false,
    coverImage: `${IMG}/Z2AYnJbqstJ98i2E_moxionpower.2023.04.onlocation-17821.png?auto=format,compress&w=2400`,
    coverVideo: `${VCDN}/Z22K2ZbqstJ981uv_RJ-CS-MP01.mp4`,
    relatedProject: "moxion-power",
    relatedProjectName: "Moxion Power",
    tags: ["Brand Identity", "Sustainability", "Industrial Design"],
    body: [
      { type: "paragraph", text: "Moxion Power builds mobile battery systems that replace diesel generators on construction sites, film sets, and events. Their MP-75 stores over 600kWh, delivers 75kW of clean power, and can be deployed anywhere in under 20 minutes. The product is extraordinary. But in a market dominated by established industrial brands, extraordinary wasn't enough." },
      { type: "heading", text: "The challenge: make industrial feel inevitable" },
      { type: "paragraph", text: "Most companies in the sustainable energy space lean heavily on green imagery — leaves, solar panels, wind turbines. It's visually legible but entirely undifferentiated. Moxion needed to look like what it actually is: a technology company that happens to have figured out mobile energy. Bold, precise, built for scale." },
      { type: "image", src: `${IMG}/Z22KFpbqstJ981ua_IMG_87781.png?auto=format,compress&w=2400`, alt: "Moxion Power on location", caption: "The MP-75 in the field — powering a major film production in Los Angeles." },
      { type: "quote", text: "Moxion Power is thrilled with our partnership with REJOUICE. A heartfelt thank you for the exceptional work.", author: "Alex Meek, Co-Founder & President at Moxion Power" },
      { type: "heading", text: "A brand system built for the field" },
      { type: "paragraph", text: "The Moxion brand system had to work in two very different contexts simultaneously: the corporate world of investor decks and partner meetings, and the physical world of construction sites and film sets. Every element had to read clearly in both environments." },
      { type: "list", items: ["5 Awwwards wins including Site of the Day", "FWA Award of the Day", "CSSDA Site of the Day", "Deployed on 3 continents within 12 months of launch"] },
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
    coverImage: `${IMG}/Z0csjJbqstJ970gi_2_xezmQUHZZozH1L4Cv1VKvg-11.jpg?auto=format,compress&w=2400`,
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
    coverImage: `${IMG}/Z0csjpbqstJ970gk_moxionpower.2023.04.portraits-1291.jpg?auto=format,compress&w=2400`,
    tags: ["Photography", "Art Direction", "Brand Identity", "Content"],
    body: [
      { type: "paragraph", text: "Stock photography is a tell. The moment you see a brand using posed stock imagery — the smiling person in a headset, the handshake, the team huddled over a laptop — you've learned something about how that brand thinks of itself. It thinks of itself as interchangeable." },
      { type: "heading", text: "What original photography communicates" },
      { type: "paragraph", text: "Original photography communicates specificity, which is the same thing as trust. It says: we are real people, making real things, for real reasons. It says we had the confidence to show you something true rather than something generic. That's enormously valuable — and shockingly underused." },
      { type: "image", src: `${IMG}/Z0csjpbqstJ970gk_moxionpower.2023.04.portraits-1291.jpg?auto=format,compress&w=2400`, alt: "Moxion Power portrait photography", caption: "Portrait photography from the Moxion Power campaign — the people behind the product." },
      { type: "heading", text: "Art direction is the work before the shoot" },
      { type: "paragraph", text: "The shoot is the execution. The art direction — the casting, the location scouting, the lighting reference, the shot list, the emotional brief for the photographer — that's the work. A well-art-directed shoot produces images that all look like they belong to the same world. A poorly art-directed shoot produces a collection of technically adequate photographs that feel unrelated." },
      { type: "quote", text: "The best brand photograph is the one that would be recognizable as belonging to that brand even without the logo in frame." },
      { type: "heading", text: "What we've learned from 100+ campaigns" },
      { type: "list", items: ["Brief the photographer on the brand, not just the shot list", "Cast people who actually use the product — or could plausibly", "Shoot more than you need; edit to the best 20%", "Consistency of light and palette matters more than individual images", "Build a style guide for photography alongside the visual identity"] },
    ],
  },

  // ─── 8. Pre-launch Brand Building ────────────────────────────────────
  {
    id: "pre-launch-brand-building",
    title: "Pre-Launch Brand Building: The Rivian Story",
    subtitle: "Rivian hadn't shipped a vehicle when they generated $5.68 billion in pre-orders. This is the brand strategy that made it possible.",
    category: "Strategy",
    date: "August 2024",
    readTime: "8 min read",
    featured: false,
    coverImage: `${IMG}/aFMcJrNJEFaPYFRF_Rivian-05.jpg?auto=format,compress&w=2400`,
    coverVideo: `${VCDN}/aFMbCbNJEFaPYFQx_RIVIAN-CASESTUDY-01.mp4`,
    relatedProject: "rivian",
    relatedProjectName: "Rivian",
    tags: ["Brand Strategy", "Go-to-Market", "Automotive"],
    body: [
      { type: "paragraph", text: "Before a single vehicle left the factory, Rivian had 71,000 pre-orders worth approximately $5.68 billion. This wasn't driven by advertising spend or influencer campaigns. It was driven by a brand that made people feel something — something specific and powerful enough to commit real money before the product existed." },
      { type: "heading", text: "Creating a category, not just a brand" },
      { type: "paragraph", text: "When we started working with Rivian, there was no 'electric adventure vehicle' category. There were electric cars, and there were adventure vehicles. Rivian's position — the intersection of sustainability, capability, and spirit of adventure — had to be invented as much as discovered." },
      { type: "image", src: `${IMG}/aFMcJLNJEFaPYFRB_Rivian-02.jpg?auto=format,compress&w=2400`, alt: "Rivian campaign image", caption: "Rivian's visual world — adventure, capability, and a clear sense of where you're going." },
      { type: "heading", text: "The digital presence as the only presence" },
      { type: "paragraph", text: "In Rivian's pre-launch phase, the website was the entire brand experience. There were no dealerships, no test drives, no physical touchpoints. Every impression of what Rivian stood for had to come through a screen. The pressure on the digital experience was unlike anything most brands face." },
      { type: "image", src: `${IMG}/aFMcKrNJEFaPYFRJ_Rivian-10.jpg?auto=format,compress&w=2400`, alt: "Rivian digital experience", caption: "The Rivian digital experience — the only brand touchpoint before launch." },
      { type: "quote", text: "71,000 pre-orders before a single vehicle shipped. The brand did what the product couldn't yet do: make people believe." },
      { type: "heading", text: "What pre-launch brands should focus on" },
      { type: "list", items: ["Define the category you'll lead — don't describe the one you're entering", "Build emotional resonance before proof points exist", "Make the website do the job of a showroom, a test drive, and a customer service team", "Create content that teaches your future customers what to care about", "Be specific: vague aspiration loses to concrete vision every time"] },
    ],
  },
];

export const categories = ["All", "Case Study", "Strategy", "Craft"];
