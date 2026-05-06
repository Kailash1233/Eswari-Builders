"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
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
      "Best builders I know. Affordability and quality is their mantra. I've been living in the house they built for over 5 years without any issues. They even offer post-handover service which is rare these days. Extremely happy with them.",
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

const services = [
  {
    icon: "/interiorImage/lighting.png",
    title: "Lighting Design",
    description:
      "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
  },
  {
    icon: "/interior-design.png",
    title: "Interior Design",
    description:
      "From concept to completion, we oversee every detail to bring your vision to life efficiently",
  },
  {
    icon: "/outdoor.png",
    title: "Outdoor Design",
    description:
      "Celebrate the changing seasons with our seasonal outdoor decor services",
  },
];

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 32 } },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

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
      {/* ✅ Why Us Section */}
      <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

        <div className="container mx-auto px-6 max-w-6xl">
          {/* Heading */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c8a97e]" />
              <span
                className="text-[#c8a97e] tracking-[0.25em] text-xs uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Expertise
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose <span className="italic text-[#c8a97e]">Us?</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {services.map((service, i) => (
              <div
                key={i}
                className="relative group flex flex-col gap-5 px-8 py-10 first:pl-0 last:pr-0 hover:bg-white/[0.02] transition-colors duration-300"
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#c8a97e]/0 group-hover:border-[#c8a97e]/60 transition-all duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-[#c8a97e]/40 transition-colors duration-300 p-2">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="text-lg text-white mb-3 font-light"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[#888] text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Bottom gold line on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-[#c8a97e]/0 group-hover:bg-[#c8a97e]/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" /> */}
      </section>

      <StatisticsBar />

      {/* Testimonials Section */}
      <section className="relative bg-[#0a0a0a] pb-20 pt-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c8a97e]" />
              <span
                className="text-[#c8a97e] tracking-[0.25em] text-xs uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Testimonials
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Customers
              <br />
              <span className="italic text-[#c8a97e]">Say About Us</span>
            </h2>
          </div>

          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((t, i) => (
              <div key={i} className="keen-slider__slide">
                <div className="relative h-full border border-white/10 p-6 flex flex-col gap-4 bg-[#111] hover:border-[#c8a97e]/40 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#c8a97e]/60" />
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} className="text-[#c8a97e] text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-[#888] text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    "{t.review}"
                  </p>
                  <div className="w-full h-px bg-white/10" />
                  <div>
                    <p
                      className="text-white text-sm font-medium"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[#666] text-xs tracking-wide mt-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {t.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({
                length: instanceRef.current.track.details.slides.length,
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => instanceRef.current?.moveToIdx(i)}
                  className={`h-px transition-all duration-300 ${
                    currentSlide === i ? "w-8 bg-[#c8a97e]" : "w-4 bg-white/20"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />
      </section>
    </>
  );
}
