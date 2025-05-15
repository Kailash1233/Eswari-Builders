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
  const speed = 0.8;
  let animationId: number;


  useEffect(() => {
    let animationId:  number;

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
    <section className="pt-20 pb-20 md:p-20 bg-[#efefef]">
      <div className="text-center mb-12">
          <h3 className=" text-gray text-2xl font-bold mb-4">
            Our Branding partners
          </h3>
        </div>
      <div
        className="relative container w-full md:w-full mx-auto gap-4 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >        
        <div className="absolute left-0 top-0 h-full w-24  to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={containerRef}
          className="flex gap-8 w-max"
          style={{ x }}
        >
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="w-[90px] h-[90px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCarousel;
