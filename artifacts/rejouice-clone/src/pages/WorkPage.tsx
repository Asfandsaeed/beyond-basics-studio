import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CDN = "https://images.prismic.io/rejouice-2024";

const projects = [
  {
    id: "tensor",
    title: "Tensor",
    category: "Brand Identity · CGI",
    year: "2025",
    image: `${CDN}/abAKaVxvIZEnjhr7_Hero-CGI.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "duchateau",
    title: "DuChateau",
    category: "Digital Experience",
    year: "2025",
    image: `https://images.prismic.io/rejouice-2024/Z3xV4pbqstJ99GIi_Duchateau-Cover.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "rivian",
    title: "Rivian",
    category: "Brand Growth",
    year: "2024",
    image: `${CDN}/Z1r5Y5bqstJ98aaF_rivian.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "oura",
    title: "Oura",
    category: "Digital Experience",
    year: "2024",
    image: `${CDN}/Z1r5X5bqstJ98aZ9_oura.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "moxion",
    title: "Moxion Power",
    category: "Brand Identity",
    year: "2024",
    image: `${CDN}/Z1r5XZbqstJ98aZ6_moxion.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "noovo",
    title: "Noovo",
    category: "Creative Direction",
    year: "2024",
    image: `${CDN}/Z1r5XpbqstJ98aZ8_noovo.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "hyperframe",
    title: "Hyperframe",
    category: "Brand Strategy",
    year: "2023",
    image: `${CDN}/Z1r5WpbqstJ98aZ1_hyperframe.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "connect-homes",
    title: "Connect Homes",
    category: "Brand Identity",
    year: "2023",
    image: `${CDN}/Z1r5V5bqstJ98aZx_connect-homes.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "ov-loop",
    title: "OV Loop",
    category: "Product Launch",
    year: "2023",
    image: `${CDN}/Z1r5YJbqstJ98aaA_ov-loop.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "unspun",
    title: "Unspun",
    category: "Brand Growth",
    year: "2023",
    image: `${CDN}/Z1r5ZZbqstJ98aaI_unspun.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "pinch",
    title: "Pinch",
    category: "Digital Platform",
    year: "2022",
    image: `${CDN}/Z1r5YZbqstJ98aaB_pinch.jpg?auto=format,compress&w=2400`,
  },
  {
    id: "list-across",
    title: "List Across",
    category: "Brand Strategy",
    year: "2022",
    image: `${CDN}/Z1r5XJbqstJ98aZ4_list-across.jpg?auto=format,compress&w=2400`,
  },
];

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Parallax: each image scrolls at 60% of the scroll speed
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

      // Staggered title reveal on enter
      const titles = gsap.utils.toArray<HTMLElement>(".work-title");
      titles.forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 70%",
            },
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
        {/* Background: first project image as hero */}
        <div className="absolute inset-0 -z-0">
          <img
            src={projects[0].image}
            alt="Work hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-white/40 mb-6">
            Selected Work
          </p>
          <h1 className="font-display font-bold text-white text-[7vw] md:text-[4.5vw] leading-[1.05] tracking-tight max-w-4xl">
            Working to shape the future of your industry?
            <br />
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
          className="work-parallax-section relative w-full h-screen overflow-hidden flex items-center justify-center"
          data-testid={`work-project-${project.id}`}
        >
          {/* Parallax image — taller than container so it can shift */}
          <div
            className="parallax-img absolute inset-x-0 -top-[15%] -bottom-[15%] w-full"
            style={{ willChange: "transform" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading={i < 2 ? "eager" : "lazy"}
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Project number — top right */}
          <div className="absolute top-6 right-6 md:top-8 md:right-10 z-10">
            <span className="font-sans text-white/50 text-xs tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Centered title */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
            <h2
              className="work-title font-display font-bold text-white text-[8vw] md:text-[5.5vw] leading-none tracking-tight"
              style={{ textDecoration: "underline", textUnderlineOffset: "0.12em" }}
            >
              {project.title}
            </h2>
          </div>

          {/* Bottom left: view project cta */}
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

      {/* ── Footer gap ── */}
      <div className="h-24 bg-[#0A0A0A]" />
    </div>
  );
}
