'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const brandLogos = [
  '/branding/ibm.png',
  '/branding/zoho.png',
  '/branding/saleforece.png',
  '/branding/tata.png',
  '/branding/infoyos.png',
  '/branding/tcs.png',
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
    <div
      className="relative w-[270px] md:w-[700px] h-[60px] p-20 mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade edges */}
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
            className="w-[80px] h-[80px] object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BrandCarousel;


