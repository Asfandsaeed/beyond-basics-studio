import React, { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setFading(true), 400);
    const done = setTimeout(onComplete, 700);
    return () => {
      clearTimeout(show);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-white text-[#0A0A0A]"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 300ms ease-in-out",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <p className="font-sans text-sm tracking-[0.1em] uppercase font-medium">
        Tomorrow's Brands, Today.™
      </p>
    </div>
  );
}
