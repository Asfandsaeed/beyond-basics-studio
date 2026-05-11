import React, { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { getGsap } from "@/lib/gsap";


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
    id: "clear-street",
    title: "Clear Street",
    category: "Rebranding & Website",
    image: "https://cdn.sanity.io/images/zksivtxz/production/a5b674fefa860f0864baaf56bfbc2bb526b263fb-1180x720.jpg",
    hoverVideo: `${VCDN}/Z2BZfpbqstJ98kkB_RJ-HIGHLIGHT-Work-01.mp4`,
    layout: "wide",
  },
  {
    id: "multiversx",
    title: "MultiversX",
    category: "Naming & Rebranding",
    image: "https://cdn.sanity.io/images/zksivtxz/production/195dabd5e5757919b90b5d5102a477117981912e-1180x720.jpg",
    hoverVideo: `${VCDN}/Z2BZoJbqstJ98kkL_RJ-HIGHLIGHT-Work-02.mp4`,
    layout: "portrait",
  },
  {
    id: "floema",
    title: "Floema",
    category: "Brand Identity",
    image: "https://cdn.sanity.io/images/zksivtxz/production/43d9fe391c3de48c4f41dee41fd3a8c97f6540fa-1180x720.jpg",
    hoverVideo: `${VCDN}/Z2BZvpbqstJ98kkM_RJ-HIGHLIGHT-Work-03.mp4`,
    layout: "portrait",
  },
  {
    id: "tuu",
    title: "Tuu",
    category: "Creative Direction",
    image: "https://cdn.sanity.io/images/zksivtxz/production/8ad019c917a5edd6577b9c79b9c5b928ca7523f4-1180x720.jpg",
    hoverVideo: `${VCDN}/Z2BbT5bqstJ98kk6_REJOUICE-PORTFOLIO-LOOP-PROJECTS.mp4`,
    layout: "wide",
  },
];

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
    <Link
      href={`/work/${project.id}`}
      className={`project-card relative overflow-hidden bg-[#0A0A0A] cursor-pointer block ${heightClass}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-testid={`project-${project.id}`}
      data-cursor-hover
    >
      <img
        src={project.image}
        alt={project.title}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
      />

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

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

      {project.logo && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img
            src={project.logo}
            alt={project.title}
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-8 py-6 z-10 flex justify-between items-end pointer-events-none">
        <div className="flex flex-col gap-0.5">
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/50">
            {project.category}
          </span>
          <h3 className="font-sans text-sm font-light tracking-[-0.01em] text-white">
            {project.title}
          </h3>
        </div>
        <span
          className={`font-sans text-white/60 text-sm transition-transform duration-300 ${
            hovered ? "translate-x-1 -translate-y-1" : ""
          }`}
        >
          ↗
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    getGsap().then(({ gsap }) => {
      if (cancelled || !sectionRef.current) return;
      ctx = gsap.context(() => {
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
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const wide = projects.filter((p) => p.layout === "wide");
  const portraits = projects.filter((p) => p.layout === "portrait");

  return (
    <section ref={sectionRef} className="bg-background border-t border-border/40">
      <div className="px-6 md:px-10 py-8 flex items-center justify-between border-b border-border/40">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40">
          Featured Work
        </p>
        <Link
          href="/work"
          className="font-sans text-[11px] uppercase tracking-[0.18em] text-foreground/40 hover:text-foreground transition-colors duration-200 flex items-center gap-1.5"
          data-testid="link-all-work"
        >
          All 24 projects ↗
        </Link>
      </div>

      <ProjectCard project={wide[0]} heightClass="w-full h-[60vh] md:h-[70vh] min-h-[420px]" />

      <div className="grid grid-cols-2">
        {portraits.map((p) => (
          <ProjectCard key={p.id} project={p} heightClass="h-[60vw] md:h-[80vh]" />
        ))}
      </div>

      {wide[1] && (
        <ProjectCard project={wide[1]} heightClass="w-full h-[60vh] md:h-[70vh] min-h-[420px]" />
      )}
    </section>
  );
}
