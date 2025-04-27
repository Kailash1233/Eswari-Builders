"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RenovationCategoryFilter() {
  const categories = [
    { id: "all", name: "All Services" },
    { id: "painting", name: "Painting" },
    { id: "electrical", name: "Electrical" },
    { id: "plumbing", name: "Plumbing" },
    { id: "vastu", name: "Vastu Complaints" },
    { id: "Demolishing", name: "Demolishing old buildings" },
    { id: "Tiles", name: "Tiles laying" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "Office Buildings",
      category: "Tiles",
      image: "/interiorImage/img 12.jpg",
      description:
        "<strong>Elevating Workspaces:</strong> Our office buildings are more than just spaces to work; they are the epicenter of corporate innovation. We design and construct modern offices that foster productivity, collaboration, and strategic thinking.",
      link: "/services/commercial/office-buildings",
    },
    {
      id: 2,
      title: "IT Offices",
      category: "commercial",
      image: "/interiorImage/img 11.jpg",
      description:
        "<strong>Tech-Ready Spaces:</strong> IT businesses demand cutting-edge infrastructure. We specialize in creating IT office spaces with the technological capabilities and telecommunication infrastructure required for the digital age.",
      link: "/services/commercial/it-offices",
    },
    
    {
      id: 3,
      title: "Medical Centers",
      category: "commercial",
      image: "/interiorImage/img 13.jpg",
      description:
        "<strong>Healthcare Spaces:</strong> From hospitals and clinics to testing laboratories, we support the establishment of medical enterprises by adhering to government regulations and accreditation standards, ensuring a safe and functional healthcare environment.",
      link: "/services/commercial/medical-centers",
    },
    {
      id: 4,
      title: "Sports Centers",
      category: "commercial",
      image: "/interiorImage/img 14.jpg",
      description:
        "<strong>Active Lifestyles:</strong> We contribute to the growing demand for sports and recreation centers by creating facilities such as indoor cricket venues, badminton courts, and multipurpose recreational activity centers—all under one roof.",
      link: "/services/commercial/sports-centers",
    },
    {
      id: 5,
      title: "Luxury Villas",
      category: "residential",
      image: "/interiorImage/residencial 1.jpg",
      description:
        "<strong>Premium Living:</strong> Our luxury villas represent the pinnacle of residential comfort and elegance. We create bespoke homes with attention to detail, premium materials, and innovative design elements.",
      link: "/services/residential/luxury-villas",
    },
    {
      id: 6,
      title: "Apartments",
      category: "residential",
      image: "/interiorImage/residencial 2.jpg",
      description:
        "<strong>Modern Living:</strong>Our apartment designs combine style and functionality, creating efficient, comfortable spaces that fit modern lifestyles. Thoughtfully laid out to maximize space and light, these homes offer the perfect balance of comfort and contemporary design.",
      link: "/services/residential/apartments",
    },
    {
      id: 7,
      title: "Independent Houses",
      category: "residential",
      image: "/interiorImage/residencial 3.jpg",
      description:
        "<strong>Your Dream Home:</strong> We build custom independent houses that reflect your personality and meet your unique needs, from foundations to finishing touches.",
      link: "/services/residential/independent-houses",
    },
    {
      id: 8,
      title: "Built for Your Life",
      category: "Turnkey Projects",
      image: "/interiorImage/turnkey 1.jpg",
      description:
        "<strong>Built for Your Life:</strong> Our turnkey services are designed to turn your vision into reality. We carefully craft every detail — from concept to completion — creating spaces that reflect your unique style and lifestyle. With us, your dream space is ready when you are.",
      link: "/services/industrial/warehouses",
    },
    
  ];

  type Service = {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    link: string;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const getFilteredServices = () => {
    if (activeCategory === "all") {
      const showcaseServices: Service[] = [];
      const serviceCategories = Array.from(
        new Set(services.map((service) => service.category))
      );

      serviceCategories.forEach((category) => {
        const serviceOfCategory = services.find(
          (service) => service.category === category
        );
        if (serviceOfCategory) {
          showcaseServices.push(serviceOfCategory);
        }
      });

      return showcaseServices;
    } else {
      return services.filter((service) => service.category === activeCategory);
    }
  };

  const filteredServices = getFilteredServices();

  return (
    <div>
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/slider/5_slide.jpg"
          alt="Our Services"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Renovaion Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Comprehensive construction and interior design services tailored to
            your needs.
          </motion.p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Renovation service
          </motion.h2>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category: any) => (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,  
                  delay: 0.2,    
                  ease: "easeOut"
                }}
              >
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-black text-white shadow-lg"
                      : "bg-white hover:text-white border border-gray-300 hover:bg-black"
                  }`}
                >
                  {category.name}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid gap-16">
            {filteredServices.map((service: any, index: number) => (
              <motion.div
                key={service.id}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } gap-10`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Image */}
                <div className="md:w-1/2 w-full">
                  <div className="overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-96 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 w-full">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                  {/* <Link href={service.link}>
                    <span className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                      Learn More
                    </span>
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E0E0E] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white/80 max-w-2xl mx-auto mb-8"
          >
            Contact us today to discuss your construction and interior design
            needs.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link href="/contact">
                Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
