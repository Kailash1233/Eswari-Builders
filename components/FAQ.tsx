"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is the construction cost per sq ft in Pondicherry?",
    a: "Eswari Builders offers house construction in Pondicherry starting from ₹1999 per sq.ft. The final cost depends on factors like plot size, number of floors, design complexity, and material specifications.",
  },
  {
    q: "How long does it take to build a house in Pondicherry?",
    a: "A typical residential construction project in Pondicherry takes around 12 to 18 months. We provide a detailed project timeline and milestone schedule before starting the construction.",
  },
  {
    q: "Do you provide complete house construction services in Pondicherry?",
    a: "Yes. We offer end-to-end turnkey house construction in Pondicherry, including soil testing, architectural design, structural construction, electrical work, plumbing, interior finishing, and final handover.",
  },
  {
    q: "Which areas in Pondicherry do you serve?",
    a: "We provide house construction services across all major areas in Pondicherry, including White Town, Lawspet, Reddiarpalayam, Mudaliarpet, Muthialpet, Villianur, Ariyankuppam, and nearby regions.",
  },
  {
    q: "Is your construction pricing transparent with no hidden costs?",
    a: "Yes. We follow a transparent, milestone-based payment structure with a detailed Bill of Quantities (BOQ) shared before project initiation. This ensures complete clarity with zero hidden charges.",
  },
  {
    q: "Will I get regular updates during construction?",
    a: "Yes. We provide regular site updates, including photos, videos, and progress reports, so you can track your project in real-time even if you are not present at the site.",
  },
  {
    q: "Do you offer joint venture construction projects?",
    a: "Yes. We collaborate with architects, builders, and contractors through joint venture partnerships. We handle structural design, engineering analysis, and compliance while coordinating with your team for smooth execution.",
  },
  {
    q: "Do you assist with home loan approvals?",
    a: "Yes. We assist clients in securing home loans through leading banks such as HDFC, ICICI, Axis Bank, etc., ensuring a smooth financing process alongside construction.",
  },
  {
    q: "How can I get started with Eswari Builders?",
    a: "You can call us at +91 90920 97190 or fill out the free estimate form on this page. Our team will schedule a free site visit and provide a detailed construction estimate within 24 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c8a97e]" />
            <span
              className="text-[#c8a97e] tracking-[0.25em] text-xs uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              FAQ
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            House Construction
            <br />
            <span className="italic text-[#c8a97e]">in Pondicherry</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                    openIndex === i
                      ? "text-[#c8a97e]"
                      : "text-white/80 group-hover:text-white"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {faq.q}
                </span>

                {/* Plus / Minus */}
                <span
                  className={`flex-shrink-0 w-5 h-5 border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                    openIndex === i
                      ? "border-[#c8a97e] text-[#c8a97e]"
                      : "border-white/20 text-white/40 group-hover:border-white/40"
                  }`}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="transition-transform duration-300"
                  >
                    <line
                      x1="5"
                      y1="0"
                      x2="5"
                      y2="10"
                      stroke="currentColor"
                      strokeWidth="1"
                      className={`transition-opacity duration-300 ${
                        openIndex === i ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <line
                      x1="0"
                      y1="5"
                      x2="10"
                      y2="5"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className="text-[#888] text-sm leading-relaxed pb-6 pr-10"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />
    </section>
  );
}
