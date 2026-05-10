
const SANITY = "https://cdn.sanity.io/images/zksivtxz/production";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  layout?: "full" | "half-left" | "half-right" | "pair";
  pair?: GalleryItem;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  services: string[];
  description: string;
  coverImage: string;
  heroImage: string;
  heroVideo?: string;
  gallery: GalleryItem[];
  testimonial?: { quote: string; name: string; role: string };
  awards?: string[];
  websiteUrl?: string;
  nextProject: string;
}

export const projects: Project[] = [

  // ─── Clear Street ────────────────────────────────────────────────────────────
  {
    id: "clear-street",
    title: "Clear Street",
    tagline: "Designed for the Future.",
    category: "Rebranding & Website",
    year: "2024",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Visual Identity System",
      "Motion Design",
      "3D & WebGL",
      "Web Design & Development",
      "Design System",
    ],
    description:
      "Clear Street is replacing the legacy infrastructure used across capital markets — bringing capital markets into the future. We designed the perfect fintech website: a seamless blend of sharp design and cutting-edge functionality, crafted for a highly discerning investment audience. The rebranding process was driven by a vision to create a vibrant and resilient tone of voice, with iconic RGB Klein blue at its core. A WebGL-rendered globe on the homepage reinforces the platform's global reach, while service sections feature bold, animated pictograms inspired by airline visuals. This sets the benchmark for fintech design — balancing innovation with functionality.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/a5b674fefa860f0864baaf56bfbc2bb526b263fb-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/a5b674fefa860f0864baaf56bfbc2bb526b263fb-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/a5b674fefa860f0864baaf56bfbc2bb526b263fb-1180x720.jpg`, alt: "Clear Street Studio hero", layout: "full" },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/5cd1d3d0873162cf78c2635bf6931034ff1ec45e-380x380.png`, alt: "Clear Street brand system", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/10c52b1af6f8ba8fabea132f1199bd7f28999608-660x370.png`,
        alt: "Clear Street branding",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/a5b674fefa860f0864baaf56bfbc2bb526b263fb-1180x720.jpg`, alt: "Clear Street website" },
      },
    ],
    awards: [
      "Awwwards: Site of the Day",
      "Awwwards: Developer Award",
      "CSS Design Awards: Website of the Day",
      "The FWA: FWA of the Day",
    ],
    websiteUrl: "https://clearstreet.io",
    nextProject: "remote",
  },

  // ─── Remote ──────────────────────────────────────────────────────────────────
  {
    id: "remote",
    title: "Remote",
    tagline: "Stress-free global hiring.",
    category: "Website",
    year: "2024",
    services: [
      "Web Design & Development",
      "WebGL & 3D",
      "Motion Design",
      "Design System",
      "Art Direction",
      "Illustration Direction",
    ],
    description:
      "Remote's vibrant visual language extends into the website experience through three core elements: a rich 3D pattern made of key shapes, expressive personality-filled illustrations, and photography masked by eight distinct key shapes. The globes — centerpiece of Remote's visual language — were built entirely in-browser using WebGL, integrating math directly into the experience. These aren't static assets or videos — they're crisp, interactive elements that elevate the narrative. Each globe dynamically reacts as users scroll, blending functionality with a clear presentation of Remote's global product features.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/51d9e034ae6b13b267034a18f3b0a3d8815d27ef-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/51d9e034ae6b13b267034a18f3b0a3d8815d27ef-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/51d9e034ae6b13b267034a18f3b0a3d8815d27ef-1180x720.jpg`, alt: "Remote homepage header", layout: "full" },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/28334bfa777827676ece88b2c5c58a73dc73e283-520x292.png`, alt: "Remote product", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/4bf53e6ab055e64c9498a87e248cde950f6deb28-660x660.png`,
        alt: "Remote responsive website",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/51d9e034ae6b13b267034a18f3b0a3d8815d27ef-1180x720.jpg`, alt: "Remote footer" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/28334bfa777827676ece88b2c5c58a73dc73e283-520x292.png`, alt: "Remote brand", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/4bf53e6ab055e64c9498a87e248cde950f6deb28-660x660.png`,
        alt: "Remote 404 mobile",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/51d9e034ae6b13b267034a18f3b0a3d8815d27ef-1180x720.jpg`, alt: "Remote partners" },
      },
    ],
    awards: [
      "Awwwards: Honorable Mention",
      "Awwwards: Site of the Day",
      "CSS Design Awards: Special Kudos",
    ],
    websiteUrl: "https://remote.com",
    nextProject: "multiversx",
  },

  // ─── MultiversX ──────────────────────────────────────────────────────────────
  {
    id: "multiversx",
    title: "MultiversX",
    tagline: "Scale across the Multiverse.",
    category: "Naming, Rebranding & Website",
    year: "2022",
    services: [
      "Naming",
      "Brand Strategy",
      "Brand Identity",
      "Design System",
      "Motion Design",
      "3D Visualization",
      "Web Design & Development",
      "UI/UX Design",
    ],
    description:
      "It all began with brainstorming sessions for a new name — exploring physical forces, cosmic terminology, mythology, and coined words — ultimately arriving at 'Multivers' elevated to the power of X. The X symbol needed to be distinctive, fresh, and resilient enough to function as an exponent while staying perfectly balanced as a standalone mark. The typography spans three font families: Roobert for all brand applications, Styrene A for brand and sub-brand wordmarks, and Inter for dashboards and apps. The vibrant color palette assigns specific hues to each sub-brand, with M×Mint, black, and white as the core combination. A fully scalable design system supports product UI/UX, social media collateral, and keynote presentations.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/195dabd5e5757919b90b5d5102a477117981912e-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/195dabd5e5757919b90b5d5102a477117981912e-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/195dabd5e5757919b90b5d5102a477117981912e-1180x720.jpg`, alt: "MultiversX stage", layout: "full" },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/261323172ce1c01c88247228ed88977edab345be-660x394.png`, alt: "MultiversX hero system", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/435d8d3b76bfd69ffbef0dac21b688e86af58eea-660x660.png`,
        alt: "MultiversX conference card",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/195dabd5e5757919b90b5d5102a477117981912e-1180x720.jpg`, alt: "MultiversX sweat" },
      },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/261323172ce1c01c88247228ed88977edab345be-660x394.png`,
        alt: "MultiversX bottle",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/435d8d3b76bfd69ffbef0dac21b688e86af58eea-660x660.png`, alt: "MultiversX brand overview" },
      },
    ],
    awards: [
      "Awwwards: Site of the Day",
      "Awwwards: Developer Award",
      "CSS Design Awards: Website of the Day",
      "The FWA: FWA of the Day",
    ],
    websiteUrl: "https://multiversx.com",
    nextProject: "phive",
  },

  // ─── Phive ───────────────────────────────────────────────────────────────────
  {
    id: "phive",
    title: "Phive",
    tagline: "Activate your senses.",
    category: "Rebrand & Website",
    year: "2025",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Motion Design",
      "Web Design & Development",
      "Photography Direction",
      "Video Production",
      "Typeface System",
    ],
    description:
      "Some clients ask us to tone it down. Phive asked us to turn it up. As Phive scaled rapidly and opened new clubs, the site needed to land each location with absolute clarity — while the updated brand needed to hold that narrative with full force. We built a typographic-first universe with street-smart font pairing powered by a flexing variable typeface. Content is king: custom video, strong photography, and bold timelapses set the tone. Each club opens with a 40-second visual punch. We paired type like a street poster — loud cuts, strong contrasts, unapologetically layered. From font to motion, one of our sharpest, most on-point builds yet.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/2405f85e088f3e9b8a28f8c364fa64a88c75bff5-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/2405f85e088f3e9b8a28f8c364fa64a88c75bff5-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/2405f85e088f3e9b8a28f8c364fa64a88c75bff5-1180x720.jpg`, alt: "Phive footer", layout: "full" },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/95444ec05bbb63713ebb2ad05b94df4e88fd247d-1360x1360.png`, alt: "Phive clubs badges", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/2405f85e088f3e9b8a28f8c364fa64a88c75bff5-1180x720.jpg`,
        alt: "Phive timetable",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/95444ec05bbb63713ebb2ad05b94df4e88fd247d-1360x1360.png`, alt: "Phive Leiria" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/2405f85e088f3e9b8a28f8c364fa64a88c75bff5-1180x720.jpg`, alt: "Phive tote bag", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/95444ec05bbb63713ebb2ad05b94df4e88fd247d-1360x1360.png`,
        alt: "Phive personal trainer shirt",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/2405f85e088f3e9b8a28f8c364fa64a88c75bff5-1180x720.jpg`, alt: "Phive pilates" },
      },
    ],
    awards: [
      "Awwwards: Site of the Day",
      "CSS Design Awards: Website of the Day",
    ],
    websiteUrl: "https://phive.pt",
    nextProject: "floema",
  },

  // ─── Floema ───────────────────────────────────────────────────────────────────
  {
    id: "floema",
    title: "Floema",
    tagline: "Made for Life.",
    category: "Rebrand & Website",
    year: "2026",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Custom Typography",
      "3D Visualization",
      "Web Design & Development",
      "Sound Design",
      "Motion Design",
      "CRM Integration",
    ],
    description:
      "Floema needed a brand rooted in its signage legacy. Direction became the guiding principle — the logo balances legibility with character, built around a twist in the F that feels intentionally directional. The website is product-first, structured into five collections: Urban, Golf, rePlastic, Nature, and Details. Each of the 230 products features a web-optimised 3D model, with customisation and direct CRM integration. Beyond product, the experience shifts into a calmer, brand-led layer — subtle motion and sound bring depth to the scroll, from WebGL foliage to field recordings and music fragments. The header evolves from snow to full greenery across the seasons.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/43d9fe391c3de48c4f41dee41fd3a8c97f6540fa-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/43d9fe391c3de48c4f41dee41fd3a8c97f6540fa-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/43d9fe391c3de48c4f41dee41fd3a8c97f6540fa-1180x720.jpg`, alt: "Floema website", layout: "full" },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/13943eb2fe220d369adafc51b50d6c7c11c6292b-760x760.png`, alt: "Floema brand", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/1ffef5d1449fd8bc8d42d689a868af772bbcdf8c-1880x1055.png`,
        alt: "Floema logo system",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/43d9fe391c3de48c4f41dee41fd3a8c97f6540fa-1180x720.jpg`, alt: "Floema overview" },
      },
    ],
    awards: [
      "Awwwards: Site of the Day",
      "CSS Design Awards: Website of the Day",
      "The FWA: FWA of the Day",
    ],
    websiteUrl: "https://floema.com",
    nextProject: "tuu",
  },

  // ─── TUU ─────────────────────────────────────────────────────────────────────
  {
    id: "tuu",
    title: "TUU",
    tagline: "Shaping Everyday Life.",
    category: "Rebrand",
    year: "2026",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Motion System",
      "Sonic Branding",
      "Typeface System",
      "Variable Identity Design",
    ],
    description:
      "The TUU identity builds on the elasticity of letterforms, reinforced by the clarity of having no margins. The TUU logo is never fixed — always anchored to the edges when static, it becomes a variable system of glyphs and media surfaces, continuously morphing into new configurations. By activating this key motif, the brand remains adaptable and responsive to any context, intentionally designed for movement and animation. The motion system expands TUU's expression across three compositional modes, with typography at the core and motion as the force. The full logo unfolds into a container that adapts to any aspect ratio — shifting from content-heavy layouts to pure visual presence, always marginless.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/8ad019c917a5edd6577b9c79b9c5b928ca7523f4-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/8ad019c917a5edd6577b9c79b9c5b928ca7523f4-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/8ad019c917a5edd6577b9c79b9c5b928ca7523f4-1180x720.jpg`, alt: "TUU identity", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/02d89555e703e4a39e0045361ef5d93ca2541168-1502x1116.png`,
        alt: "TUU logo system",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/bc27c769066d8167f51d1f6cee77faccf0a54113-660x394.png`, alt: "TUU applications" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/7b7425ae19ad99414e7b4c862964446d4b737a92-660x660.png`, alt: "TUU brand in use", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/8ad019c917a5edd6577b9c79b9c5b928ca7523f4-1180x720.jpg`,
        alt: "TUU motion",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/02d89555e703e4a39e0045361ef5d93ca2541168-1502x1116.png`, alt: "TUU variable system" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/bc27c769066d8167f51d1f6cee77faccf0a54113-660x394.png`, alt: "TUU brand overview", layout: "full" },
    ],
    awards: [
      "Awwwards: Honorable Mention",
      "CSS Design Awards: Special Kudos",
    ],
    nextProject: "redacted",
  },

  // ─── Redacted ─────────────────────────────────────────────────────────────────
  {
    id: "redacted",
    title: "Redacted RnD",
    tagline: "Hidden in plain sight.",
    category: "Brand Identity",
    year: "2026",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Pattern Design",
      "Visual System",
      "Art Direction",
    ],
    description:
      "Redacted RnD is built on a simple idea of concealment — where the visual language emerges from the balance between what is hidden and what is revealed. Inspired by redacted documents, its patterns turn absence into structure through repetition, variation, and fragmentation. Rectangular forms shift, break, and recombine into compositions that feel both precise and slightly unstable. Rather than decoration, the pattern works as a supporting layer — guiding attention, organising information, and adding depth without competing with core elements. Being vector-based, it scales across formats while staying clear and adaptable.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/f32caa7c38cf4a62ed8340649703d3157ec2dedd-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/f32caa7c38cf4a62ed8340649703d3157ec2dedd-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/f32caa7c38cf4a62ed8340649703d3157ec2dedd-1180x720.jpg`, alt: "Redacted brand system", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/0c7cdfd0a62b8337eef2a21db37d901292e469c7-660x726.png`,
        alt: "Redacted pattern",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/f32caa7c38cf4a62ed8340649703d3157ec2dedd-1180x720.jpg`, alt: "Redacted identity" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/0c7cdfd0a62b8337eef2a21db37d901292e469c7-660x726.png`, alt: "Redacted applications", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/f32caa7c38cf4a62ed8340649703d3157ec2dedd-1180x720.jpg`,
        alt: "Redacted collateral",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/0c7cdfd0a62b8337eef2a21db37d901292e469c7-660x726.png`, alt: "Redacted system" },
      },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/f32caa7c38cf4a62ed8340649703d3157ec2dedd-1180x720.jpg`,
        alt: "Redacted print",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/0c7cdfd0a62b8337eef2a21db37d901292e469c7-660x726.png`, alt: "Redacted overview" },
      },
    ],
    testimonial: {
      quote: "Working with Beyond was an exceptional experience from start to finish. Their ability to translate ideas into clean, original work made them feel like an extension of our team. The level of creativity, attention to detail, and overall execution was world-class.",
      name: "Brooklyn Earick",
      role: "Founder, Redacted RnD",
    },
    nextProject: "grabgo",
  },

  // ─── Grab&Go ─────────────────────────────────────────────────────────────────
  {
    id: "grabgo",
    title: "Grab&Go",
    tagline: "Open 24 hours every day.",
    category: "Website",
    year: "2024",
    services: [
      "Web Design & Development",
      "Illustration",
      "Motion Graphics",
      "WebGL",
      "Interactive Audio",
      "Art Direction",
    ],
    description:
      "Centered on a coffee cup as a key WebGL element, the scroll guides users through the journey from first contact to a fully operational vending shop in just one month. B2B first — but consumers are the real brand champions. The site's vibrant presence comes to life with dynamic illustrations, motion graphics, and animated blocks that enhance the scroll narrative. A quintessential Portuguese city illustrated in detail houses the store within its façade, with interactive audio elements — clicking the bicycle triggers a sound sample and city birds chirp in the distance. The footer features a movable star module in a playful beach setting, tied to the brand's 24-hour availability.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/7a93219d8ac5acd8c5751d81302f153f62499d84-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/7a93219d8ac5acd8c5751d81302f153f62499d84-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/7a93219d8ac5acd8c5751d81302f153f62499d84-1180x720.jpg`, alt: "Grab&Go website", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/18de48516cfaad5f994ec544236d1ad2e99b053f-520x520.png`,
        alt: "Grab&Go on mobile",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/f7aa214de49c6e9aadcd4e8a9b352137f747ca9a-1080x606.png`, alt: "Grab&Go brand" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/7a93219d8ac5acd8c5751d81302f153f62499d84-1180x720.jpg`, alt: "Grab&Go illustration", layout: "full" },
    ],
    awards: [
      "Awwwards: Honorable Mention",
      "CSS Design Awards: Special Kudos",
    ],
    websiteUrl: "https://grabandgo.pt",
    nextProject: "flowcase",
  },

  // ─── Flowcase ─────────────────────────────────────────────────────────────────
  {
    id: "flowcase",
    title: "Flowcase",
    tagline: "Win bids with stellar resumes.",
    category: "Rebranding",
    year: "2024",
    services: [
      "Naming Strategy",
      "Brand Strategy",
      "Brand Identity",
      "3D Visualization",
      "Motion Design",
      "Design System",
      "UI/UX Design",
    ],
    description:
      "Merging the concepts of 'flow of information' and 'case study' led to the exploration of stacks — the SaaS product itself revolves around stacks, whether resume stacks or modular UI represented as card stacks. The symbol merges an 'F' with a sleek, quirky design — standing out in a sea of 'F' logos — capturing the flow of information and embodying the product's core identity. The brand system evolves from simple 2D to a dynamic 3D visual language, with 3D elements integrated into motion graphics creating tangible connections on social platforms. From website headers to lanyard cards, the system presents content in diverse, impactful ways.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/9883cbd8d50401a2779a8fe4843e99ef8fef9f19-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/9883cbd8d50401a2779a8fe4843e99ef8fef9f19-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/9883cbd8d50401a2779a8fe4843e99ef8fef9f19-1180x720.jpg`, alt: "Flowcase ID cards", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/4b39a9cb16d3e40868304fe33bf11d0d6fe61e19-1360x1360.png`,
        alt: "Flowcase pin",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/9398ca50bd7f420b6f38ee8a866017148e2d505f-1080x605.png`, alt: "Flowcase cards" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/9883cbd8d50401a2779a8fe4843e99ef8fef9f19-1180x720.jpg`, alt: "Flowcase bag", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/4b39a9cb16d3e40868304fe33bf11d0d6fe61e19-1360x1360.png`,
        alt: "Flowcase header on mobile",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/9398ca50bd7f420b6f38ee8a866017148e2d505f-1080x605.png`, alt: "Flowcase overview" },
      },
    ],
    awards: ["Awwwards: Honorable Mention"],
    websiteUrl: "https://flowcase.com",
    nextProject: "jeton",
  },

  // ─── Jeton ─────────────────────────────────────────────────────────────────
  {
    id: "jeton",
    title: "Jeton",
    tagline: "One wallet for all needs.",
    category: "Rebrand & Website",
    year: "2024",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "3D Brand Universe",
      "Motion Design",
      "Web Design & Development",
      "UI/UX Design",
      "App Design",
    ],
    description:
      "With the 'O' naturally suggesting a coin shape, the rebranding was anchored by a sturdy wordmark with subtle typographic nuances — a blend of soft and clean geometric angles across all glyphs and icons. The brand symbol mimics the motion of coins within a single snapshot, merging form and function. Designed for high-impact minimal applications, the identity performs on everything from digital screens to sports uniforms — Jeton is the Official Partner of West Ham United F.C. and Legia Warsaw. The vibrant orange-and-white combination provides youthful appeal for a younger demographic. The 3D brand universe features coin-shaped metaphors abstractly representing money transactions alongside real-use-case store scenarios.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/d6d6c1faeb3ec1d1251a2061cd90af8e40b65b5f-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/d6d6c1faeb3ec1d1251a2061cd90af8e40b65b5f-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/d6d6c1faeb3ec1d1251a2061cd90af8e40b65b5f-1180x720.jpg`, alt: "Jeton cards", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/1b98efcee88deb80432d7bfdc467a94da1f9fc04-520x292.png`,
        alt: "Jeton with Alexis Mac Allister",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/e999690a92ffbea71a0a62a7b07aa3c421b6ab19-660x661.png`, alt: "Jeton tote bags" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/d6d6c1faeb3ec1d1251a2061cd90af8e40b65b5f-1180x720.jpg`, alt: "Jeton poster", layout: "full" },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/1b98efcee88deb80432d7bfdc467a94da1f9fc04-520x292.png`, alt: "Jeton pictograms", layout: "full" },
    ],
    awards: [
      "Awwwards: Honorable Mention",
      "CSS Design Awards: Website of the Day",
    ],
    websiteUrl: "https://jeton.com",
    nextProject: "keikku",
  },

  // ─── Keikku ─────────────────────────────────────────────────────────────────
  {
    id: "keikku",
    title: "Keikku",
    tagline: "Don't miss a beat.",
    category: "Branding & Website",
    year: "2024",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "WebGL",
      "3D Product Visualisation",
      "Web Design & Development",
      "Motion Design",
      "Sound Design",
    ],
    description:
      "Keikku is a next-generation smart, digital, and wireless stethoscope. The visual identity centres on sound waves, illustrated by a whale-shaped waveform that underscores the device's adaptability — connecting the brand to an iconic figure while echoing the device's rounded, orca-like bezel. Through an engaging on-scroll narrative, the website reveals the product's specifications and features while highlighting its compact size in context. A key feature is the WebGL-powered exploded view where users explore the device's components. The footer features waves that react to sound, set to become a recognisable element of the brand's visual language.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/f51a7432999749c8d60de7d60a9212580451cc5d-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/f51a7432999749c8d60de7d60a9212580451cc5d-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/f51a7432999749c8d60de7d60a9212580451cc5d-1180x720.jpg`, alt: "Keikku product", layout: "full" },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/965438e608f103826800f3385f9a87b0afbee37e-520x520.png`, alt: "Keikku brand poster", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/7b55b245712409e80c4bc7892eaebdd10f6f7f33-1220x1426.png`,
        alt: "Keikku features on mobile",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/f51a7432999749c8d60de7d60a9212580451cc5d-1180x720.jpg`, alt: "Keikku overview" },
      },
    ],
    awards: [
      "Awwwards: Honorable Mention",
      "CSS Design Awards: Special Kudos",
    ],
    websiteUrl: "https://keikku.com",
    nextProject: "kozowood",
  },

  // ─── Kōzōwood ─────────────────────────────────────────────────────────────────
  {
    id: "kozowood",
    title: "Kōzōwood",
    tagline: "Made of Nature.",
    category: "Website",
    year: "2023",
    services: [
      "Web Design & Development",
      "WebGL Animation",
      "Sound Design",
      "Video Production",
      "Illustration",
      "Art Direction",
      "3D Visualization",
    ],
    description:
      "The design aims for elegance and sophistication, offering a Zen-like experience as you scroll. Guided by the soft notes of a marimba — a wooden instrument — paired with nature and factory field recordings, it eases daily stress while encouraging deeper exploration through storytelling. Each header integrates elements of wooden house construction, with typography intertwined with nature-inspired illustrations and seamless WebGL animations. A world map infographic highlights wood construction data, while the concrete vs. CLT comparison showcases the advantages of wood beyond natural appeal. Minimal drone footage captured in Comporta, Portugal — lush rice fields, towering pine trees, and untouched sandy roads — offers a glimpse of the lifestyle these homes deliver.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/29070cd07ab93fc72b20f8ebbc129c4e4d6b7bb6-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/29070cd07ab93fc72b20f8ebbc129c4e4d6b7bb6-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/29070cd07ab93fc72b20f8ebbc129c4e4d6b7bb6-1180x720.jpg`, alt: "Kōzōwood about", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/f06acf7d3a87556eecb5ed022614bda6deaff82a-520x520.png`,
        alt: "Kōzōwood website",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/8dcdfd6dddee3062454f6c16cb51bd6f2286ef64-1360x1062.png`, alt: "Kōzōwood design" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/29070cd07ab93fc72b20f8ebbc129c4e4d6b7bb6-1180x720.jpg`, alt: "Kōzōwood brand", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/f06acf7d3a87556eecb5ed022614bda6deaff82a-520x520.png`,
        alt: "Kōzōwood exterior",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/8dcdfd6dddee3062454f6c16cb51bd6f2286ef64-1360x1062.png`, alt: "Kōzōwood detail" },
      },
    ],
    awards: [
      "Awwwards: Site of the Day",
      "Awwwards: Developer Award",
      "CSS Design Awards: Website of the Day",
      "The FWA: FWA of the Day",
    ],
    websiteUrl: "https://kozowood.com",
    nextProject: "talent-protocol",
  },

  // ─── Talent Protocol ─────────────────────────────────────────────────────────
  {
    id: "talent-protocol",
    title: "Talent Protocol",
    tagline: "The web3 professional network.",
    category: "Rebranding",
    year: "2023",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Design System",
      "Motion Design",
      "UI/UX Design",
      "Avatar System Design",
    ],
    description:
      "The concept centres on individual personas — the 'tp' connection hints at an ASCII-style figure, with a diverse range of emoticons allowing users to build their own avatar to reflect their online identity. Alongside each person's $token, users can choose their ID colour palette and customise an icon that shifts to represent their face. The design system uses interconnected shapes to create a seamless flow and sense of connection throughout the interface. Balancing the personal with the professional, the system integrates the user's name, token symbol, and photo into a cohesive layout — versatile and user-centric whether you're a designer, a crypto enthusiast, or an entrepreneur.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/644ae8d8c5615611ab907c19e78900ba1ebf3da6-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/644ae8d8c5615611ab907c19e78900ba1ebf3da6-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/644ae8d8c5615611ab907c19e78900ba1ebf3da6-1180x720.jpg`, alt: "Talent Protocol identity", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/0c4a97ac01d93417bd6b0a16d8e02e764dcf2880-1502x1116.png`,
        alt: "Talent Protocol user tags",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/e39d4b79288795ee9ea66ead9009292fc66ba4a2-660x394.png`, alt: "Talent Protocol merch" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/02fc1b14cacb8bf56b3e89f5de13357b44e678fd-660x660.png`, alt: "Talent Protocol system", layout: "full" },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/644ae8d8c5615611ab907c19e78900ba1ebf3da6-1180x720.jpg`, alt: "Talent Protocol overview", layout: "full" },
    ],
    awards: ["Awwwards: Honorable Mention"],
    websiteUrl: "https://talentprotocol.com",
    nextProject: "flecto",
  },

  // ─── Flecto ─────────────────────────────────────────────────────────────────
  {
    id: "flecto",
    title: "Flecto",
    tagline: "Unlock your rental business.",
    category: "Rebranding & Website",
    year: "2022",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Web Design & Development",
      "Custom GSAP Animation R&D",
      "UI/UX Design",
      "Design System",
      "Motion Design",
    ],
    description:
      "Flecto.io represents a rare breed of product website where the brand is intricately woven into the narrative, not merely scattered as users scroll. The brand language — built around flexible boxes — demanded technology that didn't exist, so we conducted our own R&D. The implementation: no masks involved. What appears on screen are complex paths generated at render time using a script tied to the GSAP onUpdate function. We animate simple rect elements and the script generates shapes dynamically based on their coordinates. Flecto pioneered this container technique. The design system seamlessly transitions from website product feature narrative to the full dashboard UI — a unified product design language from landing page to logged-in experience.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/a2cdc528da6a57c2b6bbefdd87d628763e338bcc-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/a2cdc528da6a57c2b6bbefdd87d628763e338bcc-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/a2cdc528da6a57c2b6bbefdd87d628763e338bcc-1180x720.jpg`, alt: "Flecto about", layout: "full" },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/a769bf8a05813f5ec9aba92d2ed84a278dcf0c3c-520x520.png`, alt: "Flecto homepage", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/4b7fddea66ce38f844a88efe7a0cc877be2a752c-1080x606.png`,
        alt: "Flecto website screens",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/a64281da1f326356e7551cf8b7dfbffef1eece73-1220x1426.png`, alt: "Flecto mobile" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/a2cdc528da6a57c2b6bbefdd87d628763e338bcc-1180x720.jpg`, alt: "Flecto dashboard", layout: "full" },
    ],
    awards: [
      "Awwwards: Site of the Day",
      "Awwwards: Developer Award",
      "CSS Design Awards: Website of the Day",
      "The FWA: FWA of the Day",
    ],
    websiteUrl: "https://flecto.io",
    nextProject: "hematogenix",
  },

  // ─── Hematogenix ─────────────────────────────────────────────────────────────
  {
    id: "hematogenix",
    title: "Hematogenix",
    tagline: "Health made simple.",
    category: "Rebrand & Website",
    year: "2022",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "3D Visualization",
      "Motion Design",
      "Web Design & Development",
      "Transparent Video Production",
      "Art Direction",
    ],
    description:
      "Hematogenix helps clients discover new and more effective methods to diagnose, treat, and prevent cancer. With an outdated brand and collateral, the intervention called for a rebranding as foundation for a full digital transformation — reshaping the Spiral DNA-H into a new form, which gained credibility after being featured in LogoLounge Trends 2021. The 3D visual universe, inspired by blood components like plasma, red cells, and white cells, serves as the foundation for the site headers. Transparent videos (up to 4K on Apple Silicon) form the hero experience — the only thing greater than the number of After Effects interactions was the love for the final result.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/bf43fd859de76fa539f0a5cb7b2ac9df7d5f9dfe-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/bf43fd859de76fa539f0a5cb7b2ac9df7d5f9dfe-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/bf43fd859de76fa539f0a5cb7b2ac9df7d5f9dfe-1180x720.jpg`, alt: "Hematogenix website on tablet", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/0e71892dea74c2f7f85a54ac5ea2b5f4cc1a6479-520x520.png`,
        alt: "Hematogenix clinical trials on mobile",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/59753c0a82a606c0271687b44b11446308640cdb-1360x1062.png`, alt: "Hematogenix boxes" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/2b9b403adfa641c5a2f961c38007acb2eee35501-660x371.png`, alt: "Hematogenix cover", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/bf43fd859de76fa539f0a5cb7b2ac9df7d5f9dfe-1180x720.jpg`,
        alt: "Hematogenix tote bag",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/0e71892dea74c2f7f85a54ac5ea2b5f4cc1a6479-520x520.png`, alt: "Hematogenix cards" },
      },
    ],
    awards: [
      "Awwwards: Honorable Mention",
      "CSS Design Awards: Website of the Day",
      "LogoLounge: Trends 2021 Feature",
    ],
    websiteUrl: "https://hematogenix.com",
    nextProject: "speedy",
  },

  // ─── Speedy ─────────────────────────────────────────────────────────────────
  {
    id: "speedy",
    title: "Speedy",
    tagline: "Just like a bank, but better.",
    category: "Branding & Website",
    year: "2021",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "3D Visualization",
      "Web Design & Development",
      "Motion Design",
      "UI/UX Design",
      "App Design",
    ],
    description:
      "The brief called for a minimal black Swiss-style website — no clutter or excess, just clean and straight to the point. The website concept centres around a black-and-white 3D globe — the standard visual metaphor for global reach — which dynamically changes colours based on the country it's serving. Black is used for the overall product presentation while white is reserved for the professional business account. The product is introduced through an on-scroll experience, enhanced with micro-animations and developed with a mobile-first approach. The abstract 3D globe plays a pivotal role in narrating the product's capabilities, reinforcing Speedy's position as a next-generation fintech solution.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/c230ec9587ae3f92e8fb26c36b1235e645f6bcc6-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/c230ec9587ae3f92e8fb26c36b1235e645f6bcc6-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/c230ec9587ae3f92e8fb26c36b1235e645f6bcc6-1180x720.jpg`, alt: "Speedy overview", layout: "full" },
    ],
    awards: [
      "Awwwards: Site of the Day",
      "CSS Design Awards: Website of the Day",
      "The FWA: FWA of the Day",
    ],
    websiteUrl: "https://speedy.com",
    nextProject: "care-to-beauty",
  },

  // ─── Care to Beauty ──────────────────────────────────────────────────────────
  {
    id: "care-to-beauty",
    title: "Care to Beauty",
    tagline: "All cosmetics at your Fingertips™.",
    category: "Rebrand & Website",
    year: "2021",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Web Design & Development",
      "E-commerce UX",
      "Design System",
      "Art Direction",
      "Photography Direction",
    ],
    description:
      "Building a mobile-first, blazing-fast website that Google loves while maintaining polished branding is no easy task — Google first, even at the expense of nice typefaces. The biggest challenge was designing a navigation system allowing both new and returning users to quickly find what they needed. The brand symbol was directly inspired by 'C' fingerprint outlines, creating a language that extended to essential website UI pictograms. Typography pairs the elegant Beatrice with playful New Kansas, avoiding monotony while adding character. Care to Beauty is all about people, so the colour palette reflects warmth — ranging from light to dark skin tones, with coral and moss green providing freshness.",
    coverImage: `https://cdn.sanity.io/images/zksivtxz/production/e6781ffbb08caf817e430e4f4c3105e4813dd2da-1180x720.jpg`,
    heroImage: `https://cdn.sanity.io/images/zksivtxz/production/e6781ffbb08caf817e430e4f4c3105e4813dd2da-1180x720.jpg`,
    gallery: [
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/e6781ffbb08caf817e430e4f4c3105e4813dd2da-1180x720.jpg`, alt: "Care to Beauty homepage", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/d8d871ddfb209eeae2d675bdcdc2dd51f0b8b30b-1500x1610.png`,
        alt: "Care to Beauty search",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/e6781ffbb08caf817e430e4f4c3105e4813dd2da-1180x720.jpg`, alt: "Care to Beauty product page" },
      },
      { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/d8d871ddfb209eeae2d675bdcdc2dd51f0b8b30b-1500x1610.png`, alt: "Care to Beauty team", layout: "full" },
      {
        type: "image",
        src: `https://cdn.sanity.io/images/zksivtxz/production/e6781ffbb08caf817e430e4f4c3105e4813dd2da-1180x720.jpg`,
        alt: "Care to Beauty brand",
        layout: "pair",
        pair: { type: "image", src: `https://cdn.sanity.io/images/zksivtxz/production/d8d871ddfb209eeae2d675bdcdc2dd51f0b8b30b-1500x1610.png`, alt: "Care to Beauty posters" },
      },
    ],
    awards: [
      "Awwwards: Honorable Mention",
      "Awwwards: Mobile Excellence",
      "CSS Design Awards: Website of the Day",
    ],
    websiteUrl: "https://caretobeauty.com",
    nextProject: "clear-street",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getNextProject(currentId: string): Project | undefined {
  const current = getProjectById(currentId);
  if (!current) return undefined;
  return getProjectById(current.nextProject);
}
