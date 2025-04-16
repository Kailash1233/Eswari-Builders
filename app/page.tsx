"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import WhyChooseUs from "@/components/why-choose-us";
import FeaturedProjects from "@/components/featured-projects";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    title: "Building Dreams with Strength and Style",
    subtitle: "Premium Residential and Commercial Construction in Pondicherry",
    image: "/slider/1.jpg",
  },
  {
    title: "Crafting Luxury Homes with Precision",
    subtitle: "Where Design Meets Durability",
    image: "/slider/2.jpg",
  },
  {
    title: "From Vision to Reality",
    subtitle: "Your Trusted Construction Partner for 15+ Years",
    image: "/slider/3.jpg",
  },
];

export default function Home() {
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

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Swipe
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true, // This option allows mouse events for testing
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] w-full overflow-hidden bg-black"
        {...swipeHandlers}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Background Image Slider */}
        <div className="absolute inset-0 w-full h-full top-0 left-0 z-0 overflow-hidden">
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <motion.div
                key={slide.image}
                className="absolute w-full h-full top-0 left-0"
                initial={{
                  x: index === current ? (direction > 0 ? "100%" : "-100%") : 0,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: isActive ? 1 : 0,
                }}
                exit={{
                  x: direction > 0 ? "-100%" : "100%",
                  opacity: 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ zIndex: isActive ? 2 : 1 }}
              >
                <Image
                  src={slide.image}
                  alt="Hero Slide"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            );
          })}
        </div>

        {/* Slide Navigation Arrows */}
        <div className="absolute top-1/2 left-4 z-20 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="bg-white/20 text-white hover:bg-white/40"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>
        <div className="absolute top-1/2 right-4 z-20 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="bg-white/20 text-white hover:bg-white/40"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Slide Text Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <motion.h1
              key={slides[current].title}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              key={slides[current].subtitle}
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slides[current].subtitle}
            </motion.p>

            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link href="/portfolio">
                Explore Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Eswari Builders – Leading Construction Company in Pondicherry
              </h2>
              <p className="text-gray-700 mb-4">
                With over 15 years of proven excellence,{" "}
                <strong>Eswari Builders</strong> is one of the fastest-growing
                construction companies in Pondicherry. We have proudly turned
                the dreams and aspirations of hundreds of families into reality
                by delivering high-quality residential and commercial projects
                across the region.
              </p>
              <p className="text-gray-700 mb-4">
                Our portfolio includes{" "}
                <strong>
                  apartments, individual houses, group houses, and row houses
                </strong>{" "}
                in prime locations throughout Pondicherry. We have collaborated
                with some of the top architects and engineers in the area to
                ensure every project reflects innovation, durability, and
                aesthetic appeal.
              </p>
              <p className="text-gray-700 mb-4">
                At Eswari Builders, we go beyond just constructing buildings —
                we build <strong>lasting relationships</strong> with our clients
                by understanding their needs and offering
                <strong> tailored solutions</strong> that blend modern amenities
                with budget-friendly pricing.
              </p>

              {/* <h3 className="text-2xl font-semibold mt-6 mb-4">
                What Sets Us Apart:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>✅ 15+ years of industry experience</li>
                <li>✅ Projects in prime real estate locations</li>
                <li>✅ Collaborations with reputed architects & engineers</li>
                <li>✅ End-to-end project management</li>
                <li>
                  ✅ Use of latest construction techniques & quality materials
                </li>
                <li>✅ 24/7 client support and consultation</li>
              </ul> */}
            </div>

            <div className="relative h-[450px] w-full">
              <Image
                src="/about/1.jpg"
                alt="Eswari Builders"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Dream Project?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your construction needs and get a free
            consultation with our expert team.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
