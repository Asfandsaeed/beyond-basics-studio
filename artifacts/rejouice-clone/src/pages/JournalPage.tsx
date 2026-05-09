import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { posts, categories } from "@/data/journal";

gsap.registerPlugin(ScrollTrigger);

function PostCard({ post, large = false }: { post: typeof posts[0]; large?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link
      href={`/journal/${post.id}`}
      className={`post-card group block ${large ? "" : ""}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Image / Video */}
      <div className={`relative overflow-hidden bg-[#111] rounded-sm ${large ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {post.coverVideo && (
          <video
            ref={videoRef}
            src={post.coverVideo}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />
        )}
        {/* Category badge */}
        <span className="absolute top-4 left-4 font-sans text-[10px] uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-sm">
          {post.category}
        </span>
      </div>

      {/* Meta */}
      <div className={`mt-5 ${large ? "grid md:grid-cols-[1fr_auto] gap-4 items-start" : ""}`}>
        <div>
          <h2
            className={`font-sans font-light text-[#0A0A0A] leading-[1.15] tracking-[-0.02em] group-hover:opacity-60 transition-opacity duration-300 ${
              large ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
            }`}
          >
            {post.title}
          </h2>
          {large && (
            <p className="font-sans text-sm text-[#0A0A0A]/50 leading-relaxed mt-3 max-w-xl">
              {post.subtitle}
            </p>
          )}
        </div>
        <div className={`flex items-center gap-3 mt-3 ${large ? "md:mt-0 md:flex-col md:items-end md:gap-1.5" : ""}`}>
          <span className="font-sans text-[11px] text-[#0A0A0A]/35 tracking-wide">{post.date}</span>
          <span className="font-sans text-[11px] text-[#0A0A0A]/25">·</span>
          <span className="font-sans text-[11px] text-[#0A0A0A]/35 tracking-wide">{post.readTime}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/35 border border-[#0A0A0A]/10 px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function JournalPage() {
  const pageRef   = useRef<HTMLDivElement>(null);
  const heroRef   = useRef<HTMLHeadingElement>(null);
  const [activeCat, setActiveCat] = useState("All");

  const featured = posts.find((p) => p.featured)!;
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCat === "All" || p.category === activeCat);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current, {
          opacity: 0, y: 40, duration: 1.2, ease: "power4.out", delay: 0.15,
        });
      }
      gsap.from(".post-card", {
        opacity: 0, y: 28, duration: 0.75, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: ".posts-grid", start: "top 88%", toggleActions: "play none none none" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A]">

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className="min-h-[60vh] flex flex-col justify-end px-6 md:px-10 pt-36 pb-16 overflow-hidden">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-8">
          Journal
        </p>
        <div className="float-left h-[1.2em]" style={{ width: "clamp(4rem, 18%, 14rem)" }} />
        <h1
          ref={heroRef}
          className="font-sans font-light leading-[1.08] tracking-[-0.025em] text-[#0A0A0A]"
          style={{ fontSize: "clamp(2.8rem, 7vw, 8rem)" }}
        >
          Thinking out loud.
        </h1>
        <p className="font-sans text-sm text-[#0A0A0A]/45 leading-relaxed mt-6 max-w-lg clear-both">
          Brand strategy, craft thinking, and case studies from the Beyond team.
        </p>
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ══ 2. FEATURED POST ═════════════════════════════════════════════════ */}
      <section className="featured-post px-6 md:px-10 py-16">
        <div className="mb-4">
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/40">
            Featured
          </span>
        </div>
        <PostCard post={featured} large />
      </section>

      <div className="w-full h-px bg-[#0A0A0A]/10" />

      {/* ══ 3. CATEGORY FILTER ═══════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 pt-14 pb-6 flex items-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`font-sans text-[11px] uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
              activeCat === cat
                ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                : "bg-transparent text-[#0A0A0A]/50 border-[#0A0A0A]/15 hover:border-[#0A0A0A]/40 hover:text-[#0A0A0A]"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* ══ 4. POSTS GRID ════════════════════════════════════════════════════ */}
      <section className="posts-grid px-6 md:px-10 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {filtered.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      {/* ══ 5. NEWSLETTER CTA ════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-20 bg-[#0A0A0A]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/35 mb-6">
              Stay sharp
            </p>
            <h2
              className="font-sans font-light text-white leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 5rem)" }}
            >
              Strategy and craft<br />in your inbox.
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="font-sans text-sm text-white bg-transparent border border-white/20 px-5 py-4 w-64 placeholder:text-white/25 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A] bg-white px-6 py-4 hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="font-sans text-[11px] text-white/25">
              No spam. Monthly, at most.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
