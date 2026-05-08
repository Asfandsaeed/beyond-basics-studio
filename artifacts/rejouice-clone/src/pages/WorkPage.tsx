import React, { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Parallax: image scrolls slower than the viewport
      const sections = gsap.utils.toArray<HTMLElement>(".work-parallax-section");
      sections.forEach((section) => {
        const img = section.querySelector<HTMLElement>(".parallax-img");
        if (!img) return;
        gsap.fromTo(
          img,
          { y: "-15%" },
          {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Staggered title fade-in
      gsap.utils.toArray<HTMLElement>(".work-title").forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: title, start: "top 72%" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#0A0A0A]">

      {/* ── Hero ── */}
      <section className="relative w-full h-screen flex flex-col justify-end px-6 md:px-10 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <img
            src={projects[0].coverImage}
            alt="Work hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-white/40 mb-6">
            Selected Work
          </p>
          <h1 className="font-display font-bold text-white leading-[1.05] tracking-tight max-w-4xl"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
            Working to shape the future of your industry?{" "}
            <span className="text-white/40">We bring that ambition to life.</span>
          </h1>
          <div className="mt-10 flex items-center gap-3 text-white/30 text-xs font-sans">
            <span className="w-8 h-px bg-white/30 inline-block" />
            {projects.length} projects
          </div>
        </div>
      </section>

      {/* ── Parallax Project Sections ── */}
      {projects.map((project, i) => (
        <section
          key={project.id}
          className="work-parallax-section relative w-full h-screen overflow-hidden flex items-center justify-center cursor-pointer"
          data-testid={`work-project-${project.id}`}
          onClick={() => navigate(`/work/${project.id}`)}
          data-cursor-hover
        >
          {/* Parallax image */}
          <div
            className="parallax-img absolute inset-x-0 -top-[15%] -bottom-[15%] w-full"
            style={{ willChange: "transform" }}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
              loading={i < 2 ? "eager" : "lazy"}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors duration-500" />

          {/* Project number */}
          <div className="absolute top-6 right-6 md:top-8 md:right-10 z-10">
            <span className="font-sans text-white/50 text-xs tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Centered title */}
          <div className="relative z-10 flex flex-col items-center gap-2 text-center px-6">
            <h2
              className="work-title font-display font-bold text-white leading-none tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 8rem)",
                textDecoration: "underline",
                textUnderlineOffset: "0.12em",
              }}
            >
              {project.title}
            </h2>
          </div>

          {/* Bottom left: view project */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 z-10">
            <span className="font-sans text-white text-xs uppercase tracking-widest border-b border-white/60 pb-px">
              View project ↗
            </span>
          </div>

          {/* Bottom right: category + year */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-10 flex flex-col items-end gap-1">
            <span className="font-sans text-white text-xs uppercase tracking-widest">
              {project.category}
            </span>
            <span className="font-sans text-white/60 text-xs tracking-widest">
              {project.year}
            </span>
          </div>
        </section>
      ))}

      <div className="h-24 bg-[#0A0A0A]" />
    </div>
  );
}
