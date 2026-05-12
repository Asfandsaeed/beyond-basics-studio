import React, { useRef, useState, useEffect } from "react";
import { getGsap } from "@/lib/gsap-loader";


export default function Showreel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    getGsap().then(({ gsap }) => {
      if (cancelled || !sectionRef.current) return;
      ctx = gsap.context(() => {
        gsap.from(sectionRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        });
      });
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] overflow-hidden cursor-pointer"
      style={{ aspectRatio: "16/9" }}
      onClick={togglePlay}
      data-testid="showreel-section"
      data-cursor-hover
    >
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}reel.mp4`}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-90"
        data-testid="showreel-video"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 pointer-events-none"
      >
        <div className="flex justify-between items-start">
          <span className="font-sans text-xs uppercase tracking-[0.15em] text-white/60">
            Showreel
          </span>
          <span className="font-sans text-xs uppercase tracking-[0.15em] text-white/60">
            2024
          </span>
        </div>

        <div className="flex justify-between items-end">
          <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center pointer-events-auto cursor-pointer" onClick={togglePlay}>
            {playing ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                <rect x="1" y="1" width="3" height="8" />
                <rect x="6" y="1" width="3" height="8" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                <polygon points="2,1 9,5 2,9" />
              </svg>
            )}
          </div>
          <span className="font-sans text-xs uppercase tracking-[0.15em] text-white/60">
            ↗ Full screen
          </span>
        </div>
      </div>
    </section>
  );
}
