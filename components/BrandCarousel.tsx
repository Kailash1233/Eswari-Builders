"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

const brandLogos = [
  "/branding/tatasteel.png",
  "/branding/aashirvad.png",
  "/branding/fino.png",
  "/branding/jsw.png",
  "/branding/legrand.png",
  "/branding/kajaria.png",
  "/branding/europa.webp",
  "/branding/rak.svg",
  "/branding/parry.png",
  "/branding/jaguar.jpg",
  "/branding/godrej.png",
];

export default function BrandCarousel({ speed = 0.8 }: { speed?: number }) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState(0);

  // measure width of one set (we duplicate items for seamless loop)
  useEffect(() => {
    const resize = () => {
      if (trackRef.current) {
        // total width of the duplicated track / 2 => width of one set
        setWidth(trackRef.current.scrollWidth / 2 || 0);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // infinite animation loop
  useEffect(() => {
    let frame: number;

    const animate = () => {
      if (!isHovered && width > 0) {
        // move left continuously and wrap using modulo
        const next = (x.get() - speed) % width;
        x.set(next);
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isHovered, x, speed, width]);

  // keyboard pause/play for accessibility
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " ") {
        // space toggles
        setIsHovered((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h4 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              Trusted by
            </h4>
            <p className="mt-1 text-xl font-bold text-slate-900">
              Our Branding Partners
            </p>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl bg-slate-50/60 p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Brand carousel"
        >
          {/* fading edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white/90 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white/90 to-transparent" />

          <motion.div
            ref={trackRef}
            className="flex items-center gap-6 whitespace-nowrap"
            style={{ x }}
          >
            {/* duplicate logos for seamless loop */}
            {[...brandLogos, ...brandLogos].map((logo, idx) => (
              <div
                key={idx}
                className="inline-flex items-center justify-center min-w-[110px] min-h-[110px] px-3 py-2 rounded-lg bg-white/60 shadow-sm border border-slate-100"
                role="img"
                aria-label={`Brand logo ${idx + 1}`}
                tabIndex={0}
              >
                <Image
                  src={logo}
                  alt={`Brand ${idx + 1}`}
                  width={90}
                  height={90}
                  style={{ objectFit: "contain" }}
                  priority={idx < brandLogos.length}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
