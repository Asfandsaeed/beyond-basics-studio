const IMG = "https://images.prismic.io/rejouice-2024";
const VID = "https://rejouice-2024.cdn.prismic.io/rejouice-2024";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  layout?: "full" | "half-left" | "half-right" | "pair"; // pair = two items side-by-side
  pair?: GalleryItem; // for layout=pair, the second item
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
  // ─── Tensor ────────────────────────────────────────────────────────────────
  {
    id: "tensor",
    title: "Tensor",
    tagline: "Own Your Autonomy.",
    category: "Brand Identity · CGI",
    year: "2025",
    services: [
      "Brand Strategy",
      "Naming",
      "Brand Identity",
      "Art Direction",
      "Copywriting",
      "Content Creation",
      "Motion Design & 3D Visualization",
      "Web Design",
      "Go-To-Market Strategy",
    ],
    description:
      "Imagine an L4 autonomous vehicle you can actually own — the first Robocar ever launched. We partnered with Tensor to create a complete brand from the ground up in just three months: defining their brand and launch strategy, crafting their identity, naming the company and their first product, producing all CGI for the launch, designing their digital experience, and orchestrating a debut that positioned Tensor as a bold new force in the automotive and AI industry.",
    coverImage: `${IMG}/abAKaVxvIZEnjhr7_Hero-CGI.jpg?auto=format,compress&w=2400`,
    heroImage: `${IMG}/aJfcaaTt2nPbaHC6_Hero-CGI.png?auto=format,compress&w=2400`,
    heroVideo: `${VID}/aJfd1KTt2nPbaHC__TENSOR-CASESTUDY-01.mp4`,
    gallery: [
      { type: "video", src: `${VID}/aJfdPaTt2nPbaHC8_TENSOR-CASESTUDY-02.mp4`, layout: "full" },
      { type: "image", src: `${IMG}/aJfdrKTt2nPbaHC-_Brand-Hero.jpg?auto=format,compress&w=2400`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/aJffGqTt2nPbaHDP_Brand-CGI.jpg?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/aJfe3qTt2nPbaHDL_Diptychd.jpg?auto=format,compress&w=1400` },
      },
      { type: "video", src: `${VID}/aJffqKTt2nPbaHDa_TENSOR-CASESTUDY-03.mp4`, layout: "full" },
      { type: "image", src: `${IMG}/aKRHLqTt2nPbac9G_Brand-CGI3-gigapixel-standardv2-1x.jpg?auto=format,compress&w=2400`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/aJffGaTt2nPbaHDO_Web1.jpg?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/aKRNZ6Tt2nPbadDG_OOH.jpg?auto=format,compress&w=1400` },
      },
      { type: "video", src: `${VID}/aO4jD55xUNkB17eu_TENSOR-HOMEPAGE-TRANSITION-SCROLLANIMATION_1.mp4`, layout: "full" },
    ],
    nextProject: "rivian",
  },

  // ─── Rivian ─────────────────────────────────────────────────────────────────
  {
    id: "rivian",
    title: "Rivian",
    tagline: "The First Electric Adventure Vehicle.",
    category: "Brand Growth",
    year: "2024",
    services: [
      "Brand Strategy",
      "Art Direction",
      "Copywriting",
      "Web Design & Development",
      "Motion Design & 3D Visualization",
      "Content Creation",
    ],
    description:
      "We partnered with Rivian to launch their brand and establish the foundations of their digital presence. Working closely with the founding team, we helped build anticipation for the debut of their Electric Adventure Vehicles — driving ~71,000 pre-orders valued at approximately $5.68 billion. This collaboration set the stage for Rivian's success and revealed their brand to the world.",
    coverImage: `${IMG}/Z1r5Y5bqstJ98aaF_rivian.jpg?auto=format,compress&w=2400`,
    heroImage: `${IMG}/aFMaEbNJEFaPYFQr_Rivian-cover.jpg?auto=format,compress&w=2400`,
    heroVideo: `${VID}/aFMbCbNJEFaPYFQx_RIVIAN-CASESTUDY-01.mp4`,
    gallery: [
      { type: "image", src: `${IMG}/aFMcJLNJEFaPYFRB_Rivian-02.jpg?auto=format,compress&w=2400`, layout: "full" },
      { type: "video", src: `${VID}/aFMbI7NJEFaPYFQz_RIVIAN-CASESTUDY-02.mp4`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/aFMcJbNJEFaPYFRD_Rivian-04.jpg?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/aFMcJrNJEFaPYFRF_Rivian-05.jpg?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/aFMcJ7NJEFaPYFRG_Rivian-06.jpg?auto=format,compress&w=2400`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/aFMcKLNJEFaPYFRH_Rivian-07.jpg?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/aFMcKbNJEFaPYFRI_Rivian-09.jpg?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/aFMcKrNJEFaPYFRJ_Rivian-10.jpg?auto=format,compress&w=2400`, layout: "full" },
    ],
    awards: ["Awwwards: Honorable Mention", "Awwwards: Site Of The Day", "Awwwards: Developer Site", "CSSDA: Site of the Day"],
    nextProject: "oura-ring",
  },

  // ─── Oura Ring ──────────────────────────────────────────────────────────────
  {
    id: "oura-ring",
    title: "Oura Ring",
    tagline: "The Smart Ring.",
    category: "Digital Experience",
    year: "2024",
    services: [
      "Strategy",
      "Branding",
      "Visual Identity",
      "Art Direction",
      "Copywriting",
      "Web Design & Development",
      "Motion Design & 3D Visualization",
      "Content Creation",
    ],
    description:
      "Oura is the leading smart ring on the market. They have redefined the wearable health technology market — tracking sleep, activity, recovery, and more, delivering insights that empower millions to improve their health. We partnered with Oura to craft a vibrant visual identity that connects their technology with a deeply personal experience. Inspired by their mission to be 'built for everybody,' our work highlighted the universal journey toward wellbeing, solidifying Oura's position as the market leader.",
    coverImage: `${IMG}/Z2AYnZbqstJ98i2G_oura-abdul-ovaice-photography-cd-21.png?auto=format,compress&w=2400`,
    heroImage: `${IMG}/Z215hpbqstJ981qQ_Oura-01.png?auto=format,compress&w=2400`,
    heroVideo: `${VID}/Z3xbLZbqstJ99GKJ_01-OURA-Video2.mp4`,
    gallery: [
      { type: "image", src: `${IMG}/Z218g5bqstJ981rD_oura-abdul-ovaice-photography-cd-3.jpg?auto=format,compress&w=2400`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z2186pbqstJ981rQ_Group3919.png?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z218X5bqstJ981q6_Group3922.png?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/Z218opbqstJ981rL_Group3919.png?auto=format,compress&w=2400`, layout: "full" },
      { type: "image", src: `${IMG}/Z218yZbqstJ981rO_Frame21108s.png?auto=format,compress&w=2400`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z3fSX5bqstJ99A_s_Oura-3d-render-01.png?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z3fSYJbqstJ99A_t_Oura-3d-render-02.jpg?auto=format,compress&w=1400` },
      },
    ],
    testimonial: {
      quote:
        "The team executed OURA's creative direction and brand strategy with passion and tenacity. Typically, when you launch a new website, conversion numbers dip a little. For OURA, it was the exact opposite.",
      name: "Abdul Ovaice",
      role: "Creative Director at Oura",
    },
    awards: ["Awwwards: Honorable Mention", "Awwwards: Mobile Excellence", "CSSDA: Special Kudos"],
    nextProject: "moxion-power",
  },

  // ─── Moxion Power ───────────────────────────────────────────────────────────
  {
    id: "moxion-power",
    title: "Moxion Power",
    tagline: "Redefining Mobile Energy.",
    category: "Brand Identity",
    year: "2024",
    services: [
      "Strategy",
      "Branding",
      "Visual Identity",
      "Art Direction",
      "Copywriting",
      "Web Design & Development",
      "Motion Design & 3D Visualization",
      "Content Creation",
    ],
    description:
      "Moxion Power builds sustainable mobile battery systems to replace diesel generators. Their MP-75 delivers 75kW of power, stores over 600kWh of energy, and is designed for rapid deployment at events, construction sites, and other off-grid applications. The system can power a household for 20 days or charge 30 electric cars. We partnered with Moxion Power to birth their brand from the ground up and position them as leaders in the sustainable mobile energy space.",
    coverImage: `${IMG}/Z2AYnJbqstJ98i2E_moxionpower.2023.04.onlocation-17821.png?auto=format,compress&w=2400`,
    heroImage: `${IMG}/Z3FRGZbqstJ984Gt_MP-lastcover.png?auto=format,compress&w=2400`,
    heroVideo: `${VID}/Z22K2ZbqstJ981uv_RJ-CS-MP01.mp4`,
    gallery: [
      { type: "image", src: `${IMG}/Z22KFpbqstJ981ua_IMG_87781.png?auto=format,compress&w=2400`, layout: "full" },
      { type: "video", src: `${VID}/Z22LMZbqstJ981u1_RJ-CS-MP02.mp4`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z22LaZbqstJ981u4_Frame21196.png?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z22LBJbqstJ981uy_Maskgroup.png?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/Z22Lo5bqstJ981vL_Maskgroups.png?auto=format,compress&w=2400`, layout: "full" },
      { type: "video", src: `${VID}/Z22LxJbqstJ981vX_RJ-CS-MP05_1.mp4`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z22MLZbqstJ981vr_Rectangle2305.png?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z22NBZbqstJ981vz_Frame21197.png?auto=format,compress&w=1400` },
      },
      { type: "video", src: `${VID}/Z3FRtpbqstJ984Gy_MP-INDUSTRY.mp4`, layout: "full" },
    ],
    testimonial: {
      quote: "Moxion Power is thrilled with our partnership with REJOUICE. A heartfelt thank you for the exceptional work.",
      name: "Alex Meek",
      role: "Co-Founder & President at Moxion Power",
    },
    awards: [
      "Awwwards: Honorable Mention",
      "Awwwards: Site Of The Day",
      "Awwwards: Developer Site",
      "CSSDA: Site Of The Day",
      "The FWA: FWA of the Day",
    ],
    nextProject: "noovo",
  },

  // ─── Noovo ──────────────────────────────────────────────────────────────────
  {
    id: "noovo",
    title: "Noovo",
    tagline: "The Van People Actually Want to Live In.",
    category: "Creative Direction",
    year: "2024",
    services: [
      "Naming",
      "Strategy",
      "Branding",
      "Visual Identity",
      "Art Direction",
      "Copywriting",
      "Web Design & Development",
      "Motion Design & 3D Visualization",
      "Content Creation",
    ],
    description:
      "Van conversions are complex and arduous, and they rarely provide a viable alternative for full-time living. Noovo has changed that. Before kicking off the design project, our team took a few of their vans on a three-week road trip, and we returned with a deeper appreciation for the energy and drive behind their business. We built their brand from the ground up — developing their name, logo, website, and merchandising, as well as sourcing and facilitating strategic hires to support their growth.",
    coverImage: `${IMG}/Z1r5XpbqstJ98aZ8_noovo.jpg?auto=format,compress&w=2400`,
    heroImage: `${IMG}/Z3FzZZbqstJ984LF_SectionCover.jpg?auto=format,compress&w=2400`,
    heroVideo: `${VID}/Z3FryZbqstJ984J9_NOOVO-VIDEO-WEBSITE.mp4`,
    gallery: [
      { type: "image", src: `${IMG}/Z0hs25bqstJ973Q2_noovo3.jpg?auto=format,compress&w=2400`, layout: "full" },
      { type: "video", src: `${VID}/Z3FsipbqstJ984KC_REJOUICE-NOOVO_1.mp4`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z0htK5bqstJ973RF_noovo5.jpg?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z0htLJbqstJ973RG_noovo6.jpg?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/Z0htLpbqstJ973RI_noovo8.jpg?auto=format,compress&w=2400`, layout: "full" },
      { type: "video", src: `${VID}/Z3FyRJbqstJ984K6_REJOUICE-NOOVO2.mp4`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z0htL5bqstJ973RJ_noovo9.jpg?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z0hsuZbqstJ973Qw_Maskgroup.jpg?auto=format,compress&w=1400` },
      },
    ],
    testimonial: {
      quote:
        "They didn't just give us a gorgeous brand, they gave us a growth machine. It's rare to find a partner that can deliver both beauty and business impact.",
      name: "Benoit Lafond",
      role: "Co-founder & CEO at Noovo",
    },
    awards: ["CSSDA: Site of The Day", "Awwwards: Site of The Day"],
    nextProject: "hyperframe",
  },

  // ─── Hyperframe ─────────────────────────────────────────────────────────────
  {
    id: "hyperframe",
    title: "Hyperframe",
    tagline: "Steel Framing, Simplified.",
    category: "Brand Strategy",
    year: "2023",
    services: [
      "Strategy",
      "Branding",
      "Visual Identity",
      "Art Direction",
      "Copywriting",
      "Web Design & Development",
      "Motion Design & 3D Visualization",
      "Content Creation",
    ],
    description:
      "Traditional steel framing was labor-intensive and time-consuming. Hyperframe has revolutionized the process with pioneering software and custom components, enabling walls to be assembled in minutes using a VR headset. Our role was to simplify this complex system into a relatable product — developing a clear brand message, striking visuals, and an innovative digital experience that redefines the construction industry's standards.",
    coverImage: `${IMG}/Z1r5WpbqstJ98aZ1_hyperframe.jpg?auto=format,compress&w=2400`,
    heroImage: `${IMG}/Z22P2JbqstJ981wT_Hyp03-2588x18001.png?auto=format,compress&w=2400`,
    heroVideo: `${VID}/Z3G3BZbqstJ984QV_Hyperframe.mp4`,
    gallery: [
      { type: "video", src: `${VID}/Z22SkJbqstJ981wy_02_hyper_video.mp4-1080p-.mp4`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z22QqJbqstJ981we_Homepage-1.png?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z22R05bqstJ981wp_Frame21234.png?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/Z22StZbqstJ981w0_Group3901.png?auto=format,compress&w=2400`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z22TAJbqstJ981w3_Group3909.png?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z22TZJbqstJ981w9_Group3890.png?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/Z22Tr5bqstJ981xE_202.png?auto=format,compress&w=2400`, layout: "full" },
    ],
    awards: [
      "Awwwards: Honorable Mention",
      "Awwwards: Site Of The Day",
      "Awwwards: Developer Site",
      "Awwwards: Mobile Excellence",
      "CSSDA: Website Of The Day",
      "The FWA: FWA Of The Day",
    ],
    nextProject: "connect-homes",
  },

  // ─── Connect Homes ──────────────────────────────────────────────────────────
  {
    id: "connect-homes",
    title: "Connect Homes",
    tagline: "Rethinking how we build, buy, and live in our homes.",
    category: "Brand Identity",
    year: "2023",
    services: [
      "Strategy",
      "Branding",
      "Visual Identity",
      "Art Direction",
      "Copywriting",
      "Web Design & Development",
      "Motion Design & 3D Visualization",
      "Content Creation",
    ],
    description:
      "Connect Homes specializes in urban smart homes that blend aspiration with affordability. We partnered with Connect Homes to position them as leaders in the prefab industry, focusing on a brand identity that goes beyond architecture to emphasize connection and modern living. Our work included bright, vibrant digital design breaking from traditional architectural norms, along with custom 3D models and animations that let users visualize home configurations. Recently featured in Dwell as 'experts,' Connect Homes has solidified their place as innovators in the prefab space.",
    coverImage: `${IMG}/Z1r5V5bqstJ98aZx_connect-homes.jpg?auto=format,compress&w=2400`,
    heroImage: `${IMG}/Z23EApbqstJ9819L_4-2880x18003.jpg?auto=format,compress&w=2400`,
    heroVideo: `${VID}/Z23HKZbqstJ9819h_01_connect_homes-mp4-1080p-.mp4`,
    gallery: [
      { type: "image", src: `${IMG}/Z23HTZbqstJ9819j_ConnectHomes_PaloAlto-9-1-2609x1800.jpg?auto=format,compress&w=2400`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z23J9ZbqstJ9819y_f327fc4d-8e2c-4b3d-bf3a-f5ff03ad3478_ConnectHomes_CoolidgeAv_023-2880x1800.jpg?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z23J9pbqstJ9819z_Group3964.png?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/Z23J8ZbqstJ9819w_Group3965.jpg?auto=format,compress&w=2400`, layout: "full" },
      { type: "image", src: `${IMG}/Z23LGpbqstJ98193_014.jpg?auto=format,compress&w=2400`, layout: "full" },
    ],
    testimonial: {
      quote:
        "Our company is changing the home building industry by turning the home into a modern smart product. From the start, rejouice set out to design a website that productized our homes and was equally simple and accessible. And, like our homes — always with beautiful design first and foremost!",
      name: "Jared Levy",
      role: "CEO & Co-Founder at Connect Homes",
    },
    awards: [
      "Awwwards: Honorable Mention",
      "Awwwards: Site Of The Day",
      "Awwwards: Developer Site",
      "Awwwards: Mobile Excellence",
      "CSSDA: Website Of The Day",
      "The FWA: FWA Of The Day",
    ],
    nextProject: "unspun",
  },

  // ─── Unspun ─────────────────────────────────────────────────────────────────
  {
    id: "unspun",
    title: "Unspun",
    tagline: "Sustainable Style & Perfect Fits.",
    category: "Brand Growth",
    year: "2023",
    services: [
      "Strategy",
      "Branding",
      "Visual Identity",
      "Art Direction",
      "Copywriting",
      "Web Design & Development",
      "Motion Design & 3D Visualization",
      "Content Creation",
    ],
    description:
      "Unspun is revolutionizing the fashion industry with personalized denim, eliminating standardized sizes and reducing textile waste through on-demand production. With no inventory and a commitment to inclusivity, Unspun embraces all body types while driving sustainability in fashion. We partnered with Unspun to amplify their vision, creating a digital experience that seamlessly integrates their 3D body scanning technology. Users can customize jeans in real-time, combining innovation with a personalized shopping journey.",
    coverImage: `${IMG}/Z1r5ZZbqstJ98aaI_unspun.jpg?auto=format,compress&w=2400`,
    heroImage: `${IMG}/Z220B5bqstJ9815n_Group3931.png?auto=format,compress&w=2400`,
    heroVideo: `${VID}/Z22zqpbqstJ9815e_01_unspun.mp4-1080p-.mp4`,
    gallery: [
      { type: "image", src: `${IMG}/Z220S5bqstJ9815q_5-3-2880x1800.jpg?auto=format,compress&w=2400`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z222zpbqstJ9816a_3-4-2880x1800.jpg?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z222-JbqstJ9816b_Frame21141.jpg?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/Z223fZbqstJ9816y_Group3921.jpg?auto=format,compress&w=2400`, layout: "full" },
      {
        type: "image",
        src: `${IMG}/Z223K5bqstJ9816p_Group3935.jpg?auto=format,compress&w=1400`,
        layout: "pair",
        pair: { type: "image", src: `${IMG}/Z223YJbqstJ9816s_Group3933.jpg?auto=format,compress&w=1400` },
      },
      { type: "image", src: `${IMG}/Z22z7ZbqstJ9815l_Frame21139.jpg?auto=format,compress&w=2400`, layout: "full" },
    ],
    testimonial: {
      quote:
        "After our launch of the new brand and website, Unspun received $4.2 million in funding, lead investments from the National Science Foundation and SOSV, increased traffic and conversion rates.",
      name: "Beth Esponnette",
      role: "Co-Founder at Unspun™",
    },
    awards: ["Awwwards: Honorable Mention", "Awwwards: Site Of The Day", "Awwwards: Developer Site"],
    nextProject: "tensor",
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
