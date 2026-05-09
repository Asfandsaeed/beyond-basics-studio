import React, { useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getProjectById, getNextProject, type GalleryItem } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

// ─── Media item (image or video) ──────────────────────────────────────────────
function MediaItem({ item, className = "" }: { item: GalleryItem; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (item.type !== "video") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) videoRef.current?.play().catch(() => {});
        else { videoRef.current?.pause(); }
      },
      { threshold: 0.2 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [item.src]);

  if (item.type === "video") {
    return (
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        preload="none"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }
  return (
    <img
      src={item.src}
      alt={item.alt ?? ""}
      loading="lazy"
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

// ─── Gallery renderer ──────────────────────────────────────────────────────────
function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="flex flex-col gap-3 px-3 md:px-4 py-3 md:py-4">
      {items.map((item, i) => {
        if (item.layout === "pair" && item.pair) {
          return (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#e8e8e8]">
                <MediaItem item={item} />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#e8e8e8]">
                <MediaItem item={item.pair} />
              </div>
            </div>
          );
        }
        return (
          <div key={i} className="w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-sm bg-[#e8e8e8]">
            <MediaItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

// ─── Project Page ──────────────────────────────────────────────────────────────
export default function ProjectPage() {
  const [, params] = useRoute("/work/:id");
  const [, navigate] = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const id = params?.id ?? "";
  const project = getProjectById(id);
  const next = getNextProject(id);

  useEffect(() => {
    window.scrollTo(0, 0);
    heroVideoRef.current?.play().catch(() => {});
  }, [id]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in for sections as they scroll in
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="font-sans text-foreground/40 text-sm mb-4">Project not found</p>
          <button
            onClick={() => navigate("/work")}
            className="font-sans text-sm underline underline-offset-4"
          >
            ← Back to Work
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A]">

      {/* ── Hero ── */}
      <section className="relative w-full h-[58vh] md:h-screen overflow-hidden flex items-end">
        {/* Background media */}
        {project.heroVideo ? (
          <video
            ref={heroVideoRef}
            src={project.heroVideo}
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
          />
        ) : (
          <img
            src={project.heroImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
          />
        )}

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

        {/* Hero text */}
        <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-20">
          <p className="font-sans text-white/50 text-[11px] uppercase tracking-[0.18em] mb-4">
            {project.category} · {project.year}
          </p>
          <h1 className="font-sans font-light text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(2.75rem, 7vw, 7.5rem)" }}>
            {project.title}
          </h1>
          <p className="font-sans text-white/60 mt-4 text-lg md:text-2xl font-light tracking-[-0.01em] leading-snug max-w-2xl">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="reveal-up bg-[#F5F4F0] text-[#0A0A0A] px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16 md:gap-24">
          {/* Description */}
          <div>
            <p className="font-sans text-xs text-[#0A0A0A]/40 uppercase tracking-[0.18em] mb-8">
              Overview
            </p>
            <p className="font-sans text-[#0A0A0A] text-2xl md:text-3xl font-light leading-snug tracking-[-0.015em] max-w-2xl">
              {project.description}
            </p>
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-10 font-sans text-sm underline underline-offset-4 text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors"
              >
                Visit website ↗
              </a>
            )}
          </div>

          {/* Services */}
          <div>
            <p className="font-sans text-xs text-[#0A0A0A]/40 uppercase tracking-[0.18em] mb-8">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {project.services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#0A0A0A]/30 mt-2 shrink-0" />
                  <span className="font-sans text-[#0A0A0A]/80 text-sm leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <div>
        <Gallery items={project.gallery} />
      </div>

      {/* ── Testimonial ── */}
      {project.testimonial && (
        <section className="reveal-up bg-[#F5F4F0] text-[#0A0A0A] px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-[900px] mx-auto">
            <p className="font-sans text-xs text-[#0A0A0A]/40 uppercase tracking-[0.18em] mb-12">
              Testimonial
            </p>
            <blockquote className="font-sans text-2xl md:text-3xl lg:text-4xl font-light leading-snug tracking-[-0.02em] text-[#0A0A0A] mb-10">
              "{project.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#0A0A0A]/30" />
              <div>
                <p className="font-sans text-sm font-medium text-[#0A0A0A]">
                  {project.testimonial.name}
                </p>
                <p className="font-sans text-xs text-[#0A0A0A]/50 mt-0.5">
                  {project.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Awards ── */}
      {project.awards && project.awards.length > 0 && (
        <section className="reveal-up px-6 md:px-10 py-16 border-t border-[#0A0A0A]/10">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-sans text-xs text-[#0A0A0A]/40 uppercase tracking-[0.18em] mb-10">
              Awards & Recognitions
            </p>
            <div className="flex flex-wrap gap-3">
              {project.awards.map((award) => (
                <span
                  key={award}
                  className="font-sans text-xs text-[#0A0A0A]/70 border border-[#0A0A0A]/20 rounded-full px-4 py-2"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Next Project ── */}
      {next && (
        <section
          className="relative w-full h-[70vh] overflow-hidden cursor-pointer group"
          onClick={() => navigate(`/work/${next.id}`)}
          data-cursor-hover
        >
          <img
            src={next.coverImage}
            alt={next.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <p className="font-sans text-white/50 text-[11px] uppercase tracking-[0.18em] mb-4">
              Next project
            </p>
            <h2
              className="font-sans font-light text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 7rem)", textDecoration: "underline", textUnderlineOffset: "0.12em", textDecorationThickness: "1px" }}
            >
              {next.title}
            </h2>
            <p className="font-sans text-white/40 text-sm mt-4">See project ↗</p>
          </div>
        </section>
      )}
    </div>
  );
}
