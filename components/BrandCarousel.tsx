"use client";
import React, { useEffect, useRef, useState } from "react";
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

const BrandCarousel = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const speed = 0.5;

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      if (!isHovered && containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        const newX = (x.get() - speed) % (scrollWidth / 2);
        x.set(newX);
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, x]);

  return (
    <section className="p-20">
      <div
        className="relative w-[270px] md:w-[700px] mx-auto overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max"
          style={{ x }}
        >
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              className="w-[90px] h-[90px] object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCarousel;
