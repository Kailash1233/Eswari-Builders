"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

export default function ArchitecturalPricingTable() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState(0);

  const packages = [
    {
      name: "Basic",
      price: "₹45 per sqft",
      description: "Concept Design",
      workingDays: "5 Working Days",
    },
    {
      name: "Standard",
      price: "₹95 per sqft",
      description: "Concept Design + Working Drawings",
      workingDays: "20 Working Days",
    },
    {
      name: "Premium",
      price: "₹165 per sqft",
      description: "Concept Design + Working Drawings + Interior",
      workingDays: "30 Working Days",
    },
    {
      name: "Ultra Premium",
      price: "₹240 per sqft",
      description:
        "Concept Design + Working Drawings + Interior + Material Selection",
      workingDays: "45 Working Days",
    },
  ];

  const featureRows = [
    {
      name: "SCHEME DRAWING : ALL FLOORS (2D)",
      included: [true, true, true, true],
    },
    {
      name: "FURNITURE LAYOUT : ALL FLOORS (2D)",
      included: [false, true, true, true],
    },
    {
      name: "ELEVATION DESIGN (3D)",
      included: [false, true, true, true],
    },
    {
      name: "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
      included: [false, true, true, true],
    },
    {
      name: "PLUMBING DRAWING : ALL FLOORS (2D)",
      included: [false, true, true, true],
    },
    {
      name: "WORKING DRAWING : ALL FLOORS (2D)",
      included: [false, true, true, true],
    },
    {
      name: "SOIL TESTING REPORT",
      included: [false, false, true, true],
    },
    {
      name: "STRUCTURAL DRAWINGS",
      included: [false, false, true, true],
    },
    {
      name: "SITE ASSESSMENT & SITE PLAN",
      included: [false, false, true, true],
    },
    {
      name: "ELEVATION DETAIL DRAWING (2D)",
      included: [false, false, false, true],
    },
    {
      name: "HALF LAYOUT : ALL FLOORS (3D)",
      included: [false, false, false, true],
    },
    {
      name: "INTERIOR VIEWS : ALL ROOMS (3D)",
      included: [false, false, false, true],
    },
    {
      name: "INTERIOR DETAILING : ALL ROOMS (2D)",
      included: [false, false, false, true],
    },
    {
      name: "MATERIAL & BRAND SELECTION",
      included: [false, true, true, true],
    },
    {
      name: "LANDSCAPING ARCHITECTURE DESIGNS",
      included: [
        false,
        false,
        { value: true, note: "MAX 4" },
        { value: true, note: "MAX 8" },
      ],
    },
    {
      name: "TOPOGRAPHICAL SURVEY",
      included: [false, false, false, true],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Added dependency array to avoid continuous re-renders

  const MobileTabView = () => {
    return (
      <div className="w-full">
        {/* Mobile Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {packages.map((pkg, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 ${
                activeMobileTab === idx
                  ? "bg-black text-white shadow-lg"
                  : "bg-white text-black hover:text-white border border-gray-300 hover:bg-black"
              }`}
              onClick={() => setActiveMobileTab(idx)}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Active Package Content */}
        <div className="px-4 py-4">
          <div className="text-center mb-8 bg-[#0E0E0E] rounded-lg px-4 py-6 shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold text-amber-400">
              {packages[activeMobileTab].name}
            </h3>
            <p className="text-2xl font-bold mt-2">
              {packages[activeMobileTab].price}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {packages[activeMobileTab].description}
            </p>
          </div>

          {/* Feature List for Active Package */}
          <div className="space-y-3">
            {featureRows.map((feature, idx) => {
              const isIncluded = feature.included[activeMobileTab];
              const isObject = typeof isIncluded === "object";

              return (
                <div
                  key={idx}
                  className={`flex items-center justify-between py-2 border-b border-gray-800 ${
                    idx === featureRows.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <span className="text-sm text-[#0E0E0E]">{feature.name}</span>
                  {isObject ? (
                    <div className="flex items-center">
                      <CheckCircle size={18} className="text-green-500" />
                      <span className="ml-1 text-xs text-gray-500">
                        {isIncluded.note}
                      </span>
                    </div>
                  ) : isIncluded ? (
                    <CheckCircle size={18} className="text-green-500" />
                  ) : (
                    <X size={18} className="text-red-500" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6 pt-4 text-sm text-gray-700">
            {packages[activeMobileTab].workingDays}
          </div>
        </div>
      </div>
    );
  };

  const DesktopTableView = () => {
    return (
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-1">
          <h2 className="text-2xl text-black font-semibold">
            Select Your Architectural Design Package
          </h2>
        </div>

        <div className="col-span-4 grid grid-cols-4 gap-6">
          {packages.map((pkg, indx) => (
            <div
              key={indx}
              className={
                "text-center pb-6 px-4 py-5 transition-all duration-300"
              }
              onClick={() => setSelectedPackage(indx)}
            >
              <h3 className="text-xl font-semibold text-black">{pkg.name}</h3>
              <p className="text-xl text-black font-bold mt-3">{pkg.price}</p>
              <p className="text-sm text-gray-700 mt-2">{pkg.description}</p>
            </div>
          ))}
        </div>

        {/* Features List and Checks */}
        {featureRows.map((feature, idx) => (
          <div
            key={idx}
            className={`col-span-5 grid grid-cols-5 gap-2 py-3 ${
              idx === featureRows.length - 1 ? "" : "border-b border-gray-800"
            }`}
          >
            {/* Feature Name */}
            <div className="text-sm font-light text-[#0E0E0E]">
              {feature.name}
            </div>

            {/* Icons per Package */}
            <div className="col-span-4 grid grid-cols-4 gap-2">
              {feature.included.map((isIncluded, i) => (
                <div key={i} className="flex justify-center">
                  {typeof isIncluded === "object" ? (
                    <div className="flex flex-col items-center">
                      <CheckCircle size={18} className="text-green-500" />
                      {isIncluded.note && (
                        <span className="text-xs text-gray-500">
                          {isIncluded.note}
                        </span>
                      )}
                    </div>
                  ) : isIncluded ? (
                    <CheckCircle size={18} className="text-green-500" />
                  ) : (
                    <X size={18} className="text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Working Days */}
        <div className="col-span-5 grid grid-cols-5 gap-2 py-2 mt-4">
          <div className="text-sm font-light text-gray-300"></div>
          <div className="col-span-4 grid grid-cols-4 gap-2">
            {packages.map((pkg, idx) => (
              <div key={idx} className="text-center text-xs text-[#0E0E0E]">
                {pkg.workingDays}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-200 min-h-screen">
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/slider/4_slide.jpg"
          alt="Our Portfolio"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Explore our completed projects and see the quality of our work.
          </motion.p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-20 py-12">
        {/* Render different views based on screen size */}
        <div className="hidden md:block">
          <DesktopTableView />
        </div>

        <div className="md:hidden">
          <MobileTabView />
        </div>
      </div>
    </div>
  );
}