"use client";

import React, { useState } from "react";
import ServicePackage from "./ServicePackage";
import { motion } from "framer-motion";

const fadeInStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PackageDetails = ({ title, sections, activeSectionTitle, onToggleSection }) => {
  const toggleSection = (sectionTitle) => {
    onToggleSection(sectionTitle);
  };

  return (
    <div className="package-details">
      <h2 className="text-xl font-bold mb-2">{title.name}</h2>
      <h4 className="text-lg mb-4">₹{title.price} per sqft</h4>

      <ul className="accordion-box">
        {sections.map((section, index) => {
          const isActive = section.title === activeSectionTitle;
          return (
            <li
              key={index}
              className="accordion block border-b border-gray-300 pb-2 mb-2"
            >
              <div
                className={`acc-btn cursor-pointer font-medium py-2 flex justify-between items-center ${
                  isActive ? "text-blue-600" : ""
                }`}
                onClick={() => toggleSection(section.title)}
              >
                {section.title}
                <span className="ml-2">{isActive ? "−" : "+"}</span>
              </div>

              {isActive && (
                <div className="acc-content mt-2 pl-4">
                  <div className="content">
                    <div className="text">
                      {section.type === "list" ? (
                        <ul className="list-disc pl-5 space-y-1">
                          {section.items.map((item, i) => (
                            <li key={i} className="text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ConstructionPackages = () => {
  const [activeSectionTitle, setActiveSectionTitle] = useState(null);

  const handleToggleSection = (sectionTitle) => {
    setActiveSectionTitle(activeSectionTitle === sectionTitle ? null : sectionTitle);
  };

  return (
    <div className="construction-packages p-6 py-8 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-title text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">Our Residential Packages</h2>
          <p className="text-gray-600">
            Choose the perfect construction package for your dream home
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={fadeInStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            ServicePackage.PriceBudgetPackage,
            ServicePackage.standardPackage,
            ServicePackage.premiumPackage,
            ServicePackage.ElitePackage,
            ServicePackage.LuxuryPackage,
          ].map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <PackageDetails
                title={pkg.title}
                sections={pkg.sections}
                activeSectionTitle={activeSectionTitle}
                onToggleSection={handleToggleSection}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ConstructionPackages;
