"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StatisticsBar from "./stateDisplay";

const testimonials = [
  {
    name: "Thiyagu Raju",
    project: "Home Construction, Local Market",
    review:
      "When we first met builder MD Prabhu Ram Sir, he explained about the company and services clearly. His thorough knowledge of home construction and the local market impressed us. He guided us through multiple inspections and negotiations. In the end, we found the perfect builder and are loving it so far.",
  },
  {
    name: "Saranraj J",
    project: "House Construction, Krishna Nagar, Pondicherry",
    review:
      "Referred by a family friend, I met Mr. Prabhu Ram who was very humble and responsive. I constructed my house in Krishna Nagar. The quality and timely delivery were top-notch. Mr. Rajendran, the site engineer, explained everything patiently. Highly recommended!",
  },
  {
    name: "Raj Kumar",
    project: "Residential Project",
    review:
      "Best builders I know. Affordability and quality is their mantra. I’ve been living in the house they built for over 5 years without any issues. They even offer post-handover service which is rare these days. Extremely happy with them.",
  },
  {
    name: "Akalya Khalifa",
    project: "House Construction, Cuddalore",
    review:
      "My experience with Eswari Builders has been awesome. Constructed a house in Cuddalore. Their quality of work, materials used, and payment flexibility are great. The work is progressing well, and they support customers in every aspect.",
  },
  {
    name: "Kiran Balaji M",
    project: "Custom Residential Project",
    review:
      "I'm glad my search ended with Eswari Builders. You made my dream come true! My parents were so happy with your approach and energy. You're customer-oriented, organized, and committed to quality. Highly recommend!",
  },
  {
    name: "Mari Mari",
    project: "Full-Service Home Construction",
    review:
      "Very friendly approach. They explain everything in detail, no hidden charges. The builder helped us a lot with paperwork, approvals, and the loan process. I highly recommend them to anyone building a new house.",
  },
  {
    name: "Sammantham Sammantham",
    project: "Planning & Design",
    review:
      "We found them on Google and they exceeded our expectations. Mr. Prabhu Ram and team translated our thoughts into a great plan. Excellent work!",
  },
];

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Autoplay
  useEffect(() => {
    if (!instanceRef.current) return;

    intervalRef.current = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [instanceRef]);

  return (
    <>
      <section className="pb-16 pt-16  md:py-18 px-4 items-center md:px-8 mx-auto container">
        <div className="mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-merriweather-sans text-[#FFFFFF]">
              Why Us?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Lighting Design */}
          <div className="space-y-4">
            <div className="h-16 w-16">
              <img
                src="/interiorImage/lighting.webp"
                alt="Lighting design"
                className="w-18 h-18"
              />
            </div>
            <h3 className="text-xl text-[#FFFFFF] font-semibold">
              Lighting Design
            </h3>
            <p className="text-[#999999] leading-relaxed">
              Achieve the perfect balance of ambient, task, and accent lighting
              for a functional atmosphere
            </p>
          </div>

          {/* Interior Design */}
          <div className="space-y-4">
            <div className="h-16 w-16">
              <img
                src="/interior-design.png"
                alt="Lighting design"
                className="w-18 h-18"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#FFFFFF]">
              Interior Design
            </h3>
            <p className="text-[#999999] leading-relaxed">
              From concept to completion, we oversee every detail to bring your
              vision to life efficiently
            </p>
          </div>

          {/* Outdoor Design */}
          <div className="space-y-4">
            <div className="h-16 w-16">
              <img
                src="/outdoor.png"
                alt="Lighting design"
                className="w-18 h-18"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#FFFFFF]">
              Outdoor Design
            </h3>
            <p className="text-[#999999] leading-relaxed">
              Celebrate the changing seasons with our seasonal outdoor decor
              services
            </p>
          </div>
        </div>
      </section>
      <StatisticsBar />

      <section className="md:pb-20 md:p-16 pb-20 text-black relative">
        <div className="container mx-auto px-4">
          <h2 className="md:text-5xl text-4xl font-bold mb-12 text-white font-merriweather-sans">
            What Our Customers
            <br /> Say About Us
          </h2>

          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            className="elfsight-app-941731ae-9c03-4dd7-b90d-ca8397334f06"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
    </>
  );
}
