"use client"

import React, { useState } from 'react';

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
            <li key={index} className="accordion block border-b border-gray-300 pb-2 mb-2">
              <div 
                className={`acc-btn cursor-pointer font-medium py-2 flex justify-between items-center ${isActive ? 'text-blue-600' : ''}`}
                onClick={() => toggleSection(section.title)}
              >
                {section.title}
                <span className="ml-2">{isActive ? '−' : '+'}</span>
              </div>
              
              {isActive && (
                <div className="acc-content mt-2 pl-4">
                  <div className="content">
                    <div className="text">
                      {section.type === "list" ? (
                        <ul className="list-disc pl-5 space-y-1">
                          {section.items.map((item, i) => (
                            <li key={i} className="text-sm">{item}</li>
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
  // Use a single active section title state that will be applied to all columns
  const [activeSectionTitle, setActiveSectionTitle] = useState(null);
  
  // Handler to toggle sections by title
  const handleToggleSection = (sectionTitle) => {
    setActiveSectionTitle(activeSectionTitle === sectionTitle ? null : sectionTitle);
  };

  // The package data remains the same as before
  const standardPackage = {
    title: {
      name: "Budget Package",
      price: "2099"
    },
    sections: [
      {
        title: "Overview",
        type: "text",
        content: "Our Standard Package offers quality construction at an affordable price point, with essential features and finishes for your home building needs."
      },
      {
        title: "Design",
        type: "list",
        items: [
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
          "HALF LAYOUT : ALL FLOORS (3D)",
          "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
          "PLUMBING DRAWING : ALL FLOORS (2D)",
          "WORKING DRAWING : ALL FLOORS (2D)"
        ]
      },
      {
        title: "Project Management",
        type: "list",
        items: [
          "Site Engineer : Dedicated Full-Time Site Engineer",
          "Project Manager : Daily Site Visit",
          "Android/IOS App : Daily Photo Upload. Project Status Monitoring",
          "Architect : Support Till Design Completion"
        ]
      },
      {
        title: "Structure",
        type: "list",
        items: [
          "Basement Height : Upto 3 feet",
          "Steel : Suryadev TMT / Sumangala TMT or Equivalent",
          "Chamber Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
          "Cement : Ramco / Dalmia",
          "M Sand : Blockwork & All Masonry Works",
          "P Sand : Plastering Works",
          "Concrete Grade : M20 | RMC for Roof",
          "Ceiling Height : 10 Feet",
          "Steel Reinforcement : As per Standard",
          "Parapet Wall : 3' Feet Height | 6\" Thick (Only for Floor with Headroom)"
        ]
      },
      // Include other sections as needed
    ]
  };

  const premiumPackage = {
    title: {
      name: "Premium Package",
      price: "2499"
    },
    sections: [
      {
        title: "Overview",
        type: "text",
        content: "Our Premium Package offers enhanced quality and additional features for discerning homeowners who want superior finishes and more comprehensive services."
      },
      {
        title: "Design",
        type: "list",
        items: [
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
          "HALF LAYOUT : ALL FLOORS (3D)",
          "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
          "PLUMBING DRAWING : ALL FLOORS (2D)",
          "WORKING DRAWING : ALL FLOORS (2D)",
          "SOIL TEST REPORT",
          "STRUCTURAL DRAWINGS",
          "FURNITURE LAYOUT : ALL FLOORS (2D)",
          "ELEVATION DETAIL DRAWING : (2D)"
        ]
      },
      {
        title: "Project Management",
        type: "list",
        items: [
          "Site Engineer : Dedicated Full-Time Site Engineer",
          "Project Manager : Daily Site Visit",
          "Android/IOS App : Daily Photo Upload. Project Status Monitoring.",
          "Architect : Dedicated Architect through-out the Project. Stage wise Site Visit. Material Selection Support."
        ]
      },
      {
        title: "Structure",
        type: "list",
        items: [
          "Basement Height : Upto 3.5 feet",
          "Steel : Vizag / ARS or Equivalent",
          "Wire-Cut Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
          "Cement : Ramco / Dalmia",
          "M Sand : Blockwork & All Masonry Works",
          "River Sand : Plastering Works",
          "Concrete Grade : M20 | RMC for Roof",
          "Ceiling Height : 10 Feet (FFL to FFL)",
          "Steel Reinforcement : As per DEEJOS Structural Detailing.",
          "Parapet Wall : 3.5' Feet Height | 6\" Thick",
          "RCC Lift Pit : Included (If Required)",
          "Lift Pit & Shaft : Included (If Required)"
        ]
      },
      // Include other sections as needed
    ]
  };

  const LuxuryPackage = {
    title: {
      name: "Luxury Package",
      price: "2999"
    },
    sections: [
      {
        title: "Overview",
        type: "text",
        content: "Our Ultra Luxury Package represents the pinnacle of construction quality, featuring premium materials, top-tier brands, and comprehensive design services for the most discerning clients."
      },
      {
        title: "Design",
        type: "list",
        items: [
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
          "HALF LAYOUT : ALL FLOORS (3D)",
          "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
          "PLUMBING DRAWING : ALL FLOORS (2D)",
          "WORKING DRAWING : ALL FLOORS (2D)",
          "SOIL TEST REPORT",
          "STRUCTURAL DRAWINGS",
          "FURNITURE LAYOUT : ALL FLOORS (2D)",
          "ELEVATION DETAIL DRAWING : (2D)",
          "SITE ASSESSMENT & SITE PLAN",
          "INTERIOR VIEWS : ALL FLOORS (3D)",
          "INTERIOR DETAILING : ALL ROOMS (2D)",
          "INTERIOR 3D WALK-THROUGH",
          "APPROVAL DRAWING",
          "LANDSCAPING ARCHITECTURAL DESIGNS"
        ]
      },
      {
        title: "Project Management",
        type: "list",
        items: [
          "Site Engineer : Dedicated Full-Time Site Engineer",
          "Project Manager : Daily Site Visit",
          "Android/IOS App : Daily Photo Upload. Project Status Monitoring",
          "Architect : Dedicated Architect. Frequent Site Visit. Material & Brand Selection Support including Interiors and Home Decor."
        ]
      },
      {
        title: "Structure",
        type: "list",
        items: [
          "Basement Height : Upto 5 feet",
          "Steel : TATA Steel",
          "Wire-Cut Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
          "Cement : Ramco / Dalmia / Coramandel",
          "River Sand : Blockwork & All Masonry Works",
          "River Sand : Plastering Works",
          "Concrete Grade : M25 | RMC for Roof",
          "Ceiling Height : 11 Feet (FFL to FFL)",
          "Steel Reinforcement : 1.5times Strength all as per DEEJOS Structural Drawings and Detailing by DEEJOS Structural Engineer.",
          "Parapet Wall : 3.5' Feet Height | 6\" Thick (Or) Toughened Glass Railing if Required.",
          "RCC Lift Pit : Included (If Required)",
          "RCC Concrete Slab for Base",
          "Lift Pit & Shaft : Included (If Required)"
        ]
      },
      // Include other sections as needed
    ]
  };

  return (
    <div className="construction-packages p-6 py-8">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Residential Packages</h2>
          <p className="text-gray-600">Choose the perfect construction package for your dream home</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <PackageDetails 
              title={standardPackage.title} 
              sections={standardPackage.sections} 
              activeSectionTitle={activeSectionTitle}
              onToggleSection={handleToggleSection}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <PackageDetails 
              title={premiumPackage.title} 
              sections={premiumPackage.sections} 
              activeSectionTitle={activeSectionTitle}
              onToggleSection={handleToggleSection}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <PackageDetails 
              title={LuxuryPackage.title} 
              sections={LuxuryPackage.sections} 
              activeSectionTitle={activeSectionTitle}
              onToggleSection={handleToggleSection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPackages;