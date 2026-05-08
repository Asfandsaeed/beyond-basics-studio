import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Real assets pulled directly from rejouice.com's Prismic CDN
const CDN = "https://images.prismic.io/rejouice-2024";
const VCDN = "https://rejouice-2024.cdn.prismic.io/rejouice-2024";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  logo?: string;
  hoverVideo: string;
  layout: "wide" | "portrait";
}

const projects: Project[] = [
  {
    id: "rivian",
    title: "Rivian",
    category: "Brand Growth",
    image: `${CDN}/Z1r5Y5bqstJ98aaF_rivian.jpg?auto=format,compress&w=2400`,
    logo: `${VCDN}/Z0ck9pbqstJ970bM_rivian-white.svg`,
    hoverVideo: `${VCDN}/Z2BZfpbqstJ98kkB_RJ-HIGHLIGHT-Work-01.mp4`,
    layout: "wide",
  },
  {
    id: "oura",
    title: "Oura",
    category: "Digital Experience",
    image: `${CDN}/Z2AYnZbqstJ98i2G_oura-abdul-ovaice-photography-cd-21.png?auto=format,compress&w=1200`,
    logo: `${VCDN}/Z2Ae95bqstJ98i6i_oura-logo-white.svg`,
    hoverVideo: `${VCDN}/Z2BZoJbqstJ98kkL_RJ-HIGHLIGHT-Work-02.mp4`,
    layout: "portrait",
  },
  {
    id: "moxion",
    title: "Moxion Power",
    category: "Brand Identity",
    image: `${CDN}/Z2AYnJbqstJ98i2E_moxionpower.2023.04.onlocation-17821.png?auto=format,compress&w=1200`,
    logo: `${VCDN}/Z2Ae9pbqstJ98i6h_mixion-logo-white.svg`,
    hoverVideo: `${VCDN}/Z2BZvpbqstJ98kkM_RJ-HIGHLIGHT-Work-03.mp4`,
    layout: "portrait",
  },
  {
    id: "noovo",
    title: "Noovo",
    category: "Creative Direction",
    image: `${CDN}/Z1r5XpbqstJ98aZ8_noovo.jpg?auto=format,compress&w=2400`,
    hoverVideo: `${VCDN}/Z2BbT5bqstJ98kk6_REJOUICE-PORTFOLIO-LOOP-PROJECTS.mp4`,
    layout: "wide",
  },
];

// ─── Individual card ─────────────────────────────────────────────────────────
function ProjectCard({
  project,
  heightClass,
}: {
  project: Project;
  heightClass: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleLeave = () => {
    setHovered(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <div
      className={`project-card relative overflow-hidden bg-[#0A0A0A] cursor-pointer ${heightClass}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-testid={`project-${project.id}`}
      data-cursor-hover
    >
      {/* Static image */}
      <img
        src={project.image}
        alt={project.title}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
      />

      {/* Hover video — preload="none" keeps page load fast */}
      <video
        ref={videoRef}
        src={project.hoverVideo}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

      {/* Centered logo */}
      {project.logo && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img
            src={project.logo}
            alt={project.title}
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>
      )}

      {/* Bottom info row */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-8 py-6 z-10 flex justify-between items-end pointer-events-none">
        <div className="flex flex-col gap-0.5">
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/50">
            {project.category}
          </span>
          <h3 className="font-sans text-sm font-medium text-white">
            {project.title}
          </h3>
        </div>
        <span
          className={`font-sans text-white/40 text-sm transition-transform duration-300 ${
            hovered ? "translate-x-1 -translate-y-1" : ""
          }`}
        >
          ↗
        </span>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".project-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const wide = projects.filter((p) => p.layout === "wide");
  const portraits = projects.filter((p) => p.layout === "portrait");

  return (
    <section ref={sectionRef} className="bg-background">
      {/* Row 1 — full-width Rivian */}
      <ProjectCard project={wide[0]} heightClass="w-full h-[56vw] md:h-[52vh] min-h-[340px]" />

      {/* Row 2 — two portrait cards */}
      <div className="grid grid-cols-2">
        {portraits.map((p) => (
          <ProjectCard key={p.id} project={p} heightClass="h-[60vw] md:h-[80vh]" />
        ))}
      </div>

      {/* Row 3 — second full-width */}
      {wide[1] && (
        <ProjectCard project={wide[1]} heightClass="w-full h-[56vw] md:h-[52vh] min-h-[340px]" />
      )}
    </section>
  );
}
