import React, { useEffect, useRef } from "react";
import { Link, useParams } from "wouter";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { gsap } from "gsap";
import { posts } from "@/data/journal";


export default function JournalPostPage() {
  const { id } = useParams<{ id: string }>();
  const pageRef  = useRef<HTMLDivElement>(null);
  const heroRef  = useRef<HTMLDivElement>(null);

  const post = posts.find((p) => p.id === id);

  // Related: explicit list first, then fall back to tag-based similarity
  const related = post
    ? post.relatedPosts
      ? post.relatedPosts
          .map((rid) => posts.find((p) => p.id === rid))
          .filter((p): p is NonNullable<typeof p> => p !== undefined)
          .slice(0, 2)
      : posts
          .filter((p) => p.id !== post.id && p.tags.some((t) => post.tags.includes(t)))
          .slice(0, 2)
    : [];

  // Convert "March 2025" → ISO 8601 for schema date fields
  const isoDate = post ? (() => {
    const d = new Date(`${post.date} 1`);
    return isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
  })() : undefined;

  useSeoMeta({
    title: post ? `${post.title} | Beyond® Journal` : "Journal | Beyond®",
    description: post
      ? post.subtitle.slice(0, 155)
      : "Long-form thinking on brand strategy and design craft from Beyond Creative Growth Agency.",
    path: `/journal/${id}`,
    ogImage: post?.coverImage,
    ogType: post ? "article" : "website",
    datePublished: isoDate,
    dateModified: isoDate,
    breadcrumbs: post
      ? [
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: post.title, path: `/journal/${post.id}` },
        ]
      : undefined,
    schema: post
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.subtitle,
          image: post.coverImage,
          datePublished: isoDate,
          dateModified: isoDate,
          articleSection: post.category,
          keywords: post.tags.join(", "),
          author: {
            "@type": "Organization",
            name: "Beyond®",
            url: "https://beyondbasics.studio",
          },
          publisher: {
            "@type": "Organization",
            name: "Beyond®",
            logo: { "@type": "ImageObject", url: "https://beyondbasics.studio/favicon.svg" },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://beyondbasics.studio/journal/${post.id}`,
          },
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) return;
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll(".hero-anim"), {
          opacity: 0, y: 36, duration: 1.1, stagger: 0.1, ease: "power4.out", delay: 0.1,
        });
      }
      gsap.from(".body-block", {
        opacity: 0, y: 24, duration: 0.8, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: ".body-section", start: "top 82%" },
      });
      gsap.from(".related-card", {
        opacity: 0, y: 32, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".related-section", start: "top 82%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-sans text-[#0A0A0A]/60 mb-4">Post not found.</p>
          <Link href="/journal" className="font-sans text-sm underline">← Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="bg-white text-[#0A0A0A]">

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="px-6 md:px-10 pt-36 pb-16">
        {/* Breadcrumb */}
        <div className="hero-anim flex items-center gap-2 mb-10">
          <Link
            href="/journal"
            className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors"
          >
            Journal
          </Link>
          <span className="font-sans text-[11px] text-[#0A0A0A]/55">/</span>
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="hero-anim font-sans font-light leading-[1.08] tracking-[-0.025em] text-[#0A0A0A] max-w-5xl"
          style={{ fontSize: "clamp(2.4rem, 6vw, 7rem)" }}
        >
          {post.title}
        </h1>

        {/* Subtitle */}
        <p className="hero-anim font-sans text-base text-[#0A0A0A]/50 leading-relaxed mt-6 max-w-2xl">
          {post.subtitle}
        </p>

        {/* Meta row */}
        <div className="hero-anim flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-[#0A0A0A]/10">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60">By</span>
            <span className="font-sans text-[11px] text-[#0A0A0A]/60">Beyond Team</span>
          </div>
          <span className="font-sans text-[11px] text-[#0A0A0A]/55">·</span>
          <span className="font-sans text-[11px] text-[#0A0A0A]/60">{post.date}</span>
          <span className="font-sans text-[11px] text-[#0A0A0A]/55">·</span>
          <span className="font-sans text-[11px] text-[#0A0A0A]/60">{post.readTime}</span>
          {post.relatedProject && (
            <>
              <span className="font-sans text-[11px] text-[#0A0A0A]/55">·</span>
              <Link
                href={`/work/${post.relatedProject}`}
                className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 border-b border-[#0A0A0A]/20 pb-px hover:text-[#0A0A0A] hover:border-[#0A0A0A]/60 transition-colors"
              >
                See case study: {post.relatedProjectName} ↗
              </Link>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="hero-anim flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/60 border border-[#0A0A0A]/10 px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ══ 2. COVER IMAGE ════════════════════════════════════════════════════ */}
      <div className="w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-[#111]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ══ 3. BODY ══════════════════════════════════════════════════════════ */}
      <section className="body-section px-6 md:px-10 py-20">
        <div className="max-w-[680px] mx-auto flex flex-col gap-8">
          {post.body.map((block, i) => {
            switch (block.type) {

              case "paragraph":
                return (
                  <p key={i} className="body-block font-sans text-base text-[#0A0A0A]/70 leading-[1.75]">
                    {block.text}
                  </p>
                );

              case "heading":
                return (
                  <h2
                    key={i}
                    className="body-block font-sans font-light text-[#0A0A0A] leading-[1.15] tracking-[-0.02em] mt-6"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
                  >
                    {block.text}
                  </h2>
                );

              case "quote":
                return (
                  <blockquote key={i} className="body-block border-l-2 border-[#0A0A0A]/15 pl-6 py-2">
                    <p
                      className="font-sans font-light text-[#0A0A0A] leading-[1.4] tracking-[-0.01em]"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                    >
                      "{block.text}"
                    </p>
                    {block.author && (
                      <p className="font-sans text-[11px] text-[#0A0A0A]/60 uppercase tracking-widest mt-3">
                        — {block.author}
                      </p>
                    )}
                  </blockquote>
                );

              case "image":
                return (
                  <figure key={i} className="body-block -mx-6 md:-mx-24 xl:-mx-40">
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="font-sans text-[11px] text-[#0A0A0A]/60 mt-3 px-6 md:px-24 xl:px-40">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "list":
                return (
                  <ul key={i} className="body-block flex flex-col gap-3">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="font-sans text-[11px] text-[#0A0A0A]/55 mt-1 shrink-0">—</span>
                        <span className="font-sans text-base text-[#0A0A0A]/70 leading-[1.6]">{item}</span>
                      </li>
                    ))}
                  </ul>
                );

              case "internalLink": {
                const isExternal = block.href.startsWith("/work/");
                const contextColor = isExternal
                  ? "text-[#0A0A0A]/60"
                  : block.href.startsWith("/journal/")
                  ? "text-[#0A0A0A]/60"
                  : block.href.startsWith("/glossary/")
                  ? "text-[#0A0A0A]/55"
                  : "text-[#0A0A0A]/55";

                return (
                  <Link
                    key={i}
                    href={block.href}
                    className="body-block group flex items-center justify-between border border-[#0A0A0A]/10 px-6 py-5 rounded-sm hover:border-[#0A0A0A]/30 hover:bg-[#0A0A0A]/[0.02] transition-all duration-200"
                  >
                    <div className="min-w-0">
                      <p className={`font-sans text-[10px] uppercase tracking-[0.14em] ${contextColor} mb-1.5`}>
                        {block.context}
                      </p>
                      <p className="font-sans font-light text-[#0A0A0A] text-sm leading-snug group-hover:opacity-60 transition-opacity truncate">
                        {block.label}
                      </p>
                    </div>
                    <span className="font-sans text-[#0A0A0A]/55 group-hover:text-[#0A0A0A]/60 transition-colors text-base ml-4 shrink-0">
                      →
                    </span>
                  </Link>
                );
              }

              default:
                return null;
            }
          })}
        </div>
      </section>

      {/* ══ 4. RELATED CASE STUDY CTA ════════════════════════════════════════ */}
      {post.relatedProject && (
        <section className="px-6 md:px-10 py-16 bg-[#F5F4F0]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 mb-3">
                Featured case study
              </p>
              <h3
                className="font-sans font-light text-[#0A0A0A] leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.6rem, 3vw, 3rem)" }}
              >
                {post.relatedProjectName}
              </h3>
            </div>
            <Link
              href={`/work/${post.relatedProject}`}
              className="inline-flex items-center gap-2 border border-[#0A0A0A]/20 text-[#0A0A0A] px-8 py-4 font-sans text-[11px] uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300 shrink-0"
            >
              <span>View case study</span>
              <span>↗</span>
            </Link>
          </div>
        </section>
      )}

      {/* ══ 5. RELATED POSTS ════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="related-section px-6 md:px-10 py-20">
          <div className="flex items-baseline justify-between mb-12">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60">
              Keep reading
            </p>
            <Link
              href="/journal"
              className="font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 border-b border-[#0A0A0A]/20 pb-px hover:text-[#0A0A0A] transition-colors"
            >
              All posts ↗
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/journal/${p.id}`}
                className="related-card group block"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-sm bg-[#111]">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/60">
                    {p.category}
                  </span>
                  <h3 className="font-sans font-light text-[#0A0A0A] text-lg leading-[1.2] tracking-[-0.015em] mt-2 group-hover:opacity-60 transition-opacity">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[11px] text-[#0A0A0A]/60 mt-2">{p.date} · {p.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ══ 6. BACK NAV ══════════════════════════════════════════════════════ */}
      <div className="px-6 md:px-10 py-10 border-t border-[#0A0A0A]/10">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors"
        >
          <span>←</span>
          <span>Back to Journal</span>
        </Link>
      </div>
    </div>
  );
}
