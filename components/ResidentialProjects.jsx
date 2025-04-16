// PackageComponent.js
"use client"
import React, { useState } from 'react';

const PackageDetails = ({ title, sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="package-details">
      <h2 className="text-xl font-bold mb-2">{title.name}</h2>
      <h4 className="text-lg mb-4">₹{title.price} per sqft</h4>
      
      <ul className="accordion-box">
        {sections.map((section, index) => (
          <li key={index} className="accordion block border-b border-gray-300 pb-2 mb-2">
            <div 
              className={`acc-btn cursor-pointer font-medium py-2 flex justify-between items-center ${activeSection === index ? 'text-blue-600' : ''}`}
              onClick={() => toggleSection(index)}
            >
              {section.title}
              <span className="ml-2">{activeSection === index ? '−' : '+'}</span>
            </div>
            
            {activeSection === index && (
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
        ))}
      </ul>
    </div>
  );
};

const ConstructionPackages = () => {
  const standardPackage = {
    title: {
      name: "Standard Package",
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
      {
        title: "Bathroom & Plumbing",
        type: "list",
        items: [
          "Wall Tiles : Upto Ceiling (Full Height). Size 2'X2' Vitrified Tile. Upto ₹50/Sqft. 1 Colour for 2 Bathrooms",
          "Bath & CP Fittings : Parryware | Upto ₹17000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer.",
          "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brands: Any ISI Brand",
          "Overhead Tank : 2000 litres Sintex | 3 Layered | UV Protected | White Colour"
        ]
      },
      {
        title: "Flooring",
        type: "list",
        items: [
          "Living, Dining, Bedrooms & Kitchen : 4'X2' | Vitrified Tiles Upto ₹65/Sqft. 1 Model for Living, Dining and Kitchen. KAG / Sunheart or Equivalent",
          "Balcony & Utility : Size 2'X2' | Upto 50/Sqft | Antiskid",
          "Staircase : Full Body Tile : Upto ₹110/sqft",
          "Car Parking : 1'X1' Heavy Duty Tile | Upto ₹50/Sqft",
          "Terrace Flooring : Screed Concreting with Waterproofing"
        ]
      },
      {
        title: "Kitchen & Dining",
        type: "list",
        items: [
          "Wall Tile : Vitrified Tile (2'X2') | Upto ₹55/Sqft",
          "Sink Faucet : Upto ₹2000 / No",
          "Kitchen Sink : Stainless Steel sink with Drain Upto ₹4000",
          "Dining : Wall Mounted Wash Basin",
          "Kitchen Granite Top : Upto ₹140/Sqft"
        ]
      },
      {
        title: "Door, Windows and Railing",
        type: "list",
        items: [
          "Main Door : Malaysian Teak Door & Teak Frame - Readymade | 35mm Thickness | 5\"X3\" Thick Frame | 7' Height 3.5 Feet Width | Upto 22000/nos | 1 Nos only.",
          "Room Doors : Flush Door| Sal Wood Frame | 7'X3'",
          "Bathroom Door : WPC Door & Frame | 7'X2.5'",
          "Windows : UPVC Sliding White | Max 5' X 5' | One Window Per Room | 5mm Clear Glass",
          "Staircase Railing : SS 304 Grade Railing",
          "Balcony Railing : SS 304 Grade Railing with 8mm Toughened Glass with Posts"
        ]
      },
      {
        title: "Painting",
        type: "list",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Nippon",
          "Wall Painting : 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
          "Ceiling Painting : 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
          "Exterior Paint : 1 coat of Primer | 2 Coats of Sumo Xtra | Nippon",
          "Elevation Putty : 2 Coat of Putty for Front Elevation | Nippon Exterior Putty"
        ]
      },
      {
        title: "Electrical",
        type: "list",
        items: [
          "Wires – Orbit (FRLS)",
          "Switches – Legrand",
          "Bedroom : 3 Switch Box(8-Module)",
          "Bathroom : 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
          "Living Room : Upto 4 Switch Box (8 Module)",
          "Dining : 1 Switch (8-Module)",
          "Pooja : 1 Switch (3-Module)",
          "Kitchen : 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
          "Utility : 1 Switch Box (4-Module)",
          "AC Points : 1 for Each Bedroom. 1 for Living Room",
          "Entrance : 1 Switch Box (6-Module)",
          "Balconies : 1 Switch Box (3-Module)"
        ]
      },
      {
        title: "What's Not Included",
        type: "list",
        items: [
          "Compound Wall @ 425/Sqtft & Gate",
          "Sump & Septic Tank @ 24/Litre",
          "Lift, Lift Pit and Shaft",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials"
        ]
      }
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
      {
        title: "Bathroom & Plumbing",
        type: "list",
        items: [
          "Wall Tiles : Upto Ceiling (Full Height). 4'X2' Digital Vitrified Tile. Upto ₹85/Sqft",
          "Bath & CP Fittings : Jaquar | Upto ₹22000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
          "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brands: Ashirwad / Finolex",
          "Overhead Tank : 3000 litres Sintex | 5 Layered | UV Protected | White Colour. With Sensor.",
          "Solar Heater Plumbing Lines : Included (If Required)"
        ]
      },
      {
        title: "Flooring",
        type: "list",
        items: [
          "Living, Dining, Bedrooms & Kitchen : 4'X2' | Tiles Upto ₹80/Sqft. Somany / Kajaria / KAG / Sunheart",
          "Balcony & Utility : Size 2'X2' | Upto 60/Sqft",
          "Staircase : Granite Upto ₹160/sqft",
          "Car Parking : 2'X2' Heavy Stone| Upto ₹80/Sqft",
          "Terrace Flooring : White Cooling Tile Size 1'X1' | Anuj | with Waterproofing"
        ]
      },
      {
        title: "Kitchen & Dining",
        type: "list",
        items: [
          "Wall Tile : Vitrified Tile (4'X2') | Upto ₹65/Sqft",
          "Sink Faucet : Designer Brand | Upto ₹3500 /nos",
          "Kitchen Sink : Quartz Sink with Drain Upto ₹5000",
          "Dining : Wash Basin with Granite Counter",
          "Kitchen Granite Top : Upto ₹160/Sqft"
        ]
      },
      {
        title: "Door, Windows and Railing",
        type: "list",
        items: [
          "Main Door : Ghana Teak Door & Teak Frame | 35mm Thickness | 5\"X3\" Thick Frame | 8' Height 4 Feet Width.",
          "Room Doors : Flush Door with Laminate | Ghana Wood Frame | 7'X3'",
          "Bathroom Door : WPC Door & Frame | 7'X2.5'",
          "Windows : UPVC Sliding White - No Restriction on Size and Quantity | 5mm Clear Glass",
          "Staircase Railing : SS 304 Grade Railing",
          "Balcony Railing : 10mm Full Toughened Glass with 304 Grade Railing."
        ]
      },
      {
        title: "Painting",
        type: "list",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Birla",
          "Wall Painting : 1 coat of Primer | 2 coats of Pro Matex Gold Emulsion | Nippon",
          "Ceiling Painting : 1 coat of Primer | 2 coats of Pro Matex Gold Emulsion | Nippon",
          "Exterior Paint : 1 coat of Primer | 2 Coats of Weather bond PRO from Nippon",
          "Elevation Putty : 2 Coat of Putty for Two sides of Elevation | Birla Wallseal Waterproof"
        ]
      },
      {
        title: "Electrical",
        type: "list",
        items: [
          "Wires – Finolex / Havells (FRLS)",
          "Switches – GM",
          "No Restriction on Number of Points. Except for Lifts, DG, Curtain Motors, Swimming Pool, Ro Plant, Pressure Pump, Intercom, Surveillance System, Exterior Light Points, Gate Automation, lightening arrester, Hybrid Solar Heater, Water Fountain, HVAC Systems.",
          "Electricity Panel Board - Single Service with RLCB - Exterior Grade"
        ]
      },
      {
        title: "What's Not Included",
        type: "list",
        items: [
          "Compound Wall @ 425/Sqtft & Gate",
          "Sump & Septic Tank @ 24/Litre",
          "Lift",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials"
        ]
      }
    ]
  };

  const ultraLuxuryPackage = {
    title: {
      name: "Ultra Luxury Package",
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
      {
        title: "Bathroom & Plumbing",
        type: "list",
        items: [
          "Wall Tiles : Upto Ceiling (Full Height). 4'X2' Vitrified Tile. Upto ₹120/Sqft",
          "Bath & CP Fittings : Kohler | Upto ₹60000 Per Bathroom | Concealed EWC, Counter Top Wash Basin, Marble Counter Slab, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
          "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. HDPE flexible pipe. Brands: Ashirwad / Finolex / Jindal",
          "RCC Overhead Tank : Upto 6000 litres with Waterproofing.",
          "Solar Heater Plumbing Lines : Included (If Required)"
        ]
      },
      {
        title: "Flooring",
        type: "list",
        items: [
          "Living, Dining, Bedrooms & Kitchen : 6'X6' | Quarts Tiles Upto ₹200/Sqft",
          "Balcony & Utility : Size 2'X2' | Upto 60/Sqft",
          "Staircase : Marble Upto ₹350/sqft",
          "Car Parking : Granite| Upto ₹120/Sqft",
          "Terrace Flooring : 2'X2' Exterior Grade Vitrified Tile. (Any Grade) | with Waterproofing"
        ]
      },
      {
        title: "Kitchen & Dining",
        type: "list",
        items: [
          "Wall Tile : Vitrified Designer Tile (4'X2') | Upto ₹125/Sqft",
          "Sink Faucet : Floor Mounter Pull-Out | Upto ₹8000 / No",
          "Kitchen Sink : Multifunction Sink Upto ₹15000",
          "Dining : Premium Designer Collection Wash Basin with Marble Counter and Designer Tap.",
          "Kitchen Top : Quarts Stone Upto ₹350/Sqft"
        ]
      },
      {
        title: "Door, Windows and Railing",
        type: "list",
        items: [
          "Main Door : Designer Wood Door of Height upto 8Feet X 5Feet (or) Security Steel Door of Size (8'X4.5') Pure Stainless Steel with Digital Lock.",
          "Room Doors : Flush Door with Laminate | Ghana Wood Frame | 8'X3.5'",
          "Water Proof Flush Door with Designer Laminates | 8'X3'",
          "Windows : Openable Type | UPVC Coloured | No Restriction on Size and Quantity | Toughened Glass",
          "Staircase Railing : Toughened Glass with SS or Wood Railing or Aluminium",
          "Balcony Railing : 10mm Full Toughened Glass with Aluminium Railing."
        ]
      },
      {
        title: "Painting",
        type: "list",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Birla",
          "Wall Painting : 1 coat of Primer | 2 coats of Royal Shyne | Asian",
          "Ceiling Painting : 1 coat of Primer | 2 coats of Royal Shyne | Nippon",
          "Exterior Paint : 1 coat of Primer | 2 Coats of Apex Ultima ProteK | Asian",
          "Elevation Putty : 2 Coat of Putty for All sides of Elevation | Birla Wallseal Waterproofing"
        ]
      },
      {
        title: "Electrical",
        type: "list",
        items: [
          "Wires – Finolex / Havells (FRLS)",
          "Switches – Touch Switches with Glass Plates.",
          "No Restriction on Number of Points. Required power points will be provided for Lifts, DG, Curtain Motors, Swimming Pool, Ro Plant, Pressure Pump, Intercom, Surveillance System, Exterior Light Points, Gate Automation, lightening arrester, Hybrid Solar Heater, Water Fountain, HVAC Systems.",
          "Electricity Panel Board - Upto 2 Service Connection with RLCB Exterior Grade"
        ]
      },
      {
        title: "What's Not Included",
        type: "list",
        items: [
          "Compound Wall @ 425/Sqtft & Gate",
          "Sump & Septic Tank @ 24/Litre",
          "Lift",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials"
        ]
      }
    ]
  };

  return (
    <div className="construction-packages py-6">
      <div className="container mx-auto px-4">
        <div className="section-title text-center  py-6 mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Residential Packages</h2>
          <p className="text-gray-600">Choose the perfect construction package for your dream home</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <PackageDetails title={standardPackage.title} sections={standardPackage.sections} />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <PackageDetails title={premiumPackage.title} sections={premiumPackage.sections} />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <PackageDetails title={ultraLuxuryPackage.title} sections={ultraLuxuryPackage.sections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPackages;