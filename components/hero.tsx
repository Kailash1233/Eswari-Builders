"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    title: "Best Builders in",
    titleAccent: "Pondicherry",
    subtitle: "Premium Residential & Commercial Construction Since 2002",
    image: "/slider/1_slide.webp",
  },
  {
    title: "Crafting Luxury Homes",
    titleAccent: "with Precision",
    subtitle: "Where Design Meets Durability",
    image: "/slider/2_slide.webp",
  },
  {
    title: "From Vision",
    titleAccent: "to Reality",
    subtitle: "Your Trusted Construction Partner for 22 Years",
    image: "/slider/3_slide.webp",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]"
      {...swipeHandlers}
    >
      {/* Background slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          className="absolute inset-0 z-0"
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-black/55 z-10" />
      {/* Bottom fade to match section below */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
      {/* Left vignette for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 max-w-6xl h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            key={`eyebrow-${current}`}
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-8 bg-[#c8a97e]" />
            <span
              className="text-[#c8a97e] tracking-[0.25em] text-xs uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Eswari Builders · Est. 2002
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            key={`title-${current}`}
            className="mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {slides[current].title}
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic text-[#c8a97e]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {slides[current].titleAccent}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`sub-${current}`}
            className="text-white/60 text-base md:text-lg mb-10 max-w-xl leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {slides[current].subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            key={`cta-${current}`}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 bg-[#c8a97e] text-[#0a0a0a] px-8 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-[#b8996e] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Explore Our Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-white/30 text-white/80 px-8 py-3.5 text-xs tracking-widest uppercase hover:border-[#c8a97e]/60 hover:text-[#c8a97e] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get a Free Quote
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide counter + dots — bottom right */}
      <div className="absolute bottom-12 right-6 md:right-10 z-20 flex flex-col items-end gap-4">
        {/* Slide number */}
        <div
          className="text-white/30 text-xs tracking-widest"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <span className="text-[#c8a97e]">0{current + 1}</span> / 0
          {slides.length}
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 h-px ${
                i === current ? "w-8 bg-[#c8a97e]" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div
          className="text-white/30 text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Scroll
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
