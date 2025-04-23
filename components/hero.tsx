import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";



const slides = [
    {
      title: "Building Dreams with Strength and Style",
      subtitle: "Premium Residential and Commercial Construction in Pondicherry",
      image: "/slider/1_slide.jpg",
    },
    {
      title: "Crafting Luxury Homes with Precision",
      subtitle: "Where Design Meets Durability",
      image: "/slider/2_slide.jpg",
    },
    {
      title: "From Vision to Reality",
      subtitle: "Your Trusted Construction Partner for 15+ Years",
      image: "/slider/3_slide.jpg",
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
          className="relative h-screen w-full overflow-hidden bg-black"
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
                  className="absolute w-full h-full top-0 left-0 z-10"
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
                    // priority
                    priority={true}
                  />
                </motion.div>
              );
            })}
          </div>
  
          {/* Slide Navigation Arrows */}
          {/* Mobile Nav Arrows */}
          {/* <div className="sm:hidden absolute bottom-12 z-20 w-full flex justify-between px-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="bg-white/20 text-white hover:bg-white/40"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="bg-white/20 text-white hover:bg-white/40"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div> */}
  
          {/* Desktop Nav Arrows */}
          {/* <div className="hidden sm:block absolute top-1/2 left-4 z-20 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="bg-white/20 text-white hover:bg-white/40"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="hidden sm:block absolute top-1/2 right-4 z-20 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="bg-white/20 text-white hover:bg-white/40"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div> */}
  
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
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center pt-56 sm:pt-0">
            <div className="max-w-3xl">
              <motion.h1
                key={slides[current].title}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-headerforeground mb-2 sm:mb-4 font-merriweather-sans md:tracking-tighter"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {slides[current].title}
              </motion.h1>
  
              <motion.p
                key={slides[current].subtitle}
                className="text-lg sm:text-xl md:text-2xl text-headerforeground/90 mb-4 sm:mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {slides[current].subtitle}
              </motion.p>
  
              <Button
                asChild
                size="lg"
                className="bg-primary text-black hover:bg-primary/80 text-sm sm:text-base"
              >
                <Link href="/portfolio">
                  Explore Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
  
  
        {/* <section className="relative py-20 bg-[#121212] overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:40px_40px]" />
  
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Eswari Builders – Leading Construction Company in Pondicherry
                </h2>
                <p className="text-gray-300 mb-4">
                  With over 15 years of proven excellence,{" "}
                  <strong>Eswari Builders</strong> is one of the fastest-growing
                  construction companies in Pondicherry...
                </p>
                <p className="text-gray-300 mb-4">
                  Our portfolio includes{" "}
                  <strong>
                    apartments, individual houses, group houses, and row houses
                  </strong>
                  ...
                </p>
              </div>
  
              <div className="relative h-[450px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/about/1.jpg"
                  alt="Eswari Builders"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section> */}
  
        {/* Featured Projects Section */}
  
        {/* CTA Section */}
        
      </div>
    );
  }
  