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

  const services = [
    {
      id: 1,
      title: " Plumbing Solutions",
      // category: "Tiles",
      image: "/interiorImage/plumbing 1.webp",
      description:
        "<strong>Expert Plumbing Services:</strong> From fixing leaks to installing new pipelines, we ensure your water systems work flawlessly. Our skilled plumbers use the latest techniques to deliver durable and efficient solutions. Trust us for seamless water flow and lasting reliability.",
      link: "/services/commercial/office-buildings",
    },
    {
      id: 2,
      title: "Professional Painting",
      // category: "Tiles",
      image: "/interiorImage/painting.webp",
      description:
        "<strong>Transform Your Space:</strong> Add new life to your walls with our expert painting services. We use premium materials and professional techniques to ensure a smooth, vibrant finish. Revitalize your environment with colors that inspire and energize.",
      link: "/services/commercial/it-offices",
    },

    {
      id: 3,
      title: "Electrical Services",
      // category: "painting",
      image: "/interiorImage/electrical 1.webp",
      description:
        "<strong>Powering Your Needs:</strong> Our certified electricians deliver safe and reliable electrical installations and repairs. We handle everything from switchboard setups to complete rewiring projects. Your safety and convenience are our top priorities. ",
      link: "/services/commercial/medical-centers",
    },
    {
      id: 4,
      title: "Vastu Compliance Solutions",
      // category: "painting",
      image: "/interiorImage/vastu complaints.webp",
      description:
        "<strong>Balancing Energy Flows:</strong> Correct your space’s energy with our expert Vastu solutions. We analyze, recommend, and implement adjustments that align with ancient wisdom and modern living. Create a harmonious environment for prosperity and well-being.",
      link: "/services/commercial/sports-centers",
    },
    {
      id: 5,
      title: "Demolition Services",
      // category: "painting",
      image: "/interiorImage/demolition 1.webp",
      description:
        "<strong>Clearing the Way for New Beginnings:</strong> Our demolition services are precise, safe, and efficient, paving the way for your next project. Whether it's a small wall removal or a complete site clearance, we handle it all with care. Start fresh with confidence and a clear space.",
      link: "/services/residential/luxury-villas",
    },
  ];

  // type Service = {
  //   id: number;
  //   title: string;
  //   category: string;
  //   image: string;
  //   description: string;
  //   link: string;
  // };

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

  // const getFilteredServices = () => {
  //   if (activeCategory === "all") {
  //     const showcaseServices: Service[] = [];
  //     const serviceCategories = Array.from(
  //       new Set(services.map((service) => service.category))
  //     );

  //     serviceCategories.forEach((category) => {
  //       const serviceOfCategory = services.find(
  //         (service) => service.category === category
  //       );
  //       if (serviceOfCategory) {
  //         showcaseServices.push(serviceOfCategory);
  //       }
  //     });

  //     return showcaseServices;
  //   } else {
  //     return services.filter((service) => service.category === activeCategory);
  //   }
  // };

  // const filteredServices = getFilteredServices();

  return (
    <div>
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/slider/9_slide.webp"
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
            Renovation Service
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
            className="text-4xl font-extrabold text-center mb-12 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Renovation service
          </motion.h2>

          {/* Category Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-16">
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
          </div> */}

          {/* Services Grid */}
          <div className="grid gap-16">
            {services.map((service: any, index: number) => (
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
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
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
