"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PortfolioGallery from "@/components/portfolio-gallery";
import { projects } from "@/components/portfolioData";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function PortfolioPage() {
  const [filteredProject, setFilterProject] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilter = (type: string) => {
    if (type === "All") {
      setFilterProject(projects);
    } else {
      const result = projects.filter((project) => project.mapTitle === type);
      setFilterProject(result);
    }
    setActiveFilter(type);
  };

  const testimonials = [
    {
      rating: 5,
      text: "I was referred by a family friend who is known to Mr. Prabhu ram of Eswari builders. He was a very responsive, humble and very down to earth person. I constructed a house in Krishna Nagar in Pondicherry with their design and floor plan.",
      name: "Saranraj J",
      project: "Villa Project, Chennai",
    },
    {
      rating: 5,
      text: "Best builders i know. affordability and quality is their mantra. i am staying in the house they build more than 5 years .I didn't have any issues with the quality in my house till date. they even give the best service whenever I ask for rework or alterations.",
      name: "Raj Kumar",
      project: "Apartment Renovation, Bangalore",
    },
    {
      rating: 5,
      text: "My experience with Eswari Builders is awesome, i constructed a house in Cuddalore , their quality of work till now which I experienced is very nice.",
      name: "Akalya Khalifa",
      project: "Commercial Complex, Hyderabad",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/slider/4_slide.webp"
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

      {/* Portfolio Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {["All", "Ongoing", "Completed", "Proposed"].map((type) => (
              <motion.div
                key={type}
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
                  ease: "easeOut",
                }}
              >
                <Button
                  onClick={() => handleFilter(type)}
                  variant="outline"
                  className={`rounded-full shadow-lg border-gray-30 text-gray-800 hover:bg-black hover:text-white ${
                    activeFilter === type ? "bg-black text-white" : ""
                  }`}
                >
                  {type === "Ongoing"
                    ? "OnGoing Project"
                    : type === "Completed"
                    ? "Completed Project"
                    : type === "All"
                    ? "All Project"
                    : type === "Proposed"
                    ? "Proposed Project"
                    : ""}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <PortfolioGallery projects={filteredProject} />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0E0E0E] text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="border border-white/20 p-8 flex flex-col justify-between h-full"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIdx) => (
                    <svg
                      key={starIdx}
                      className="h-5 w-5 fill-current text-gold"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-6 flex-grow">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-auto">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <User className="h-6 w-6 mr-4 mt-1 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Create Your Dream Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-700 max-w-2xl mx-auto mb-8"
          >
            Contact us today to discuss your project and join our list of
            satisfied clients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-black/90"
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
