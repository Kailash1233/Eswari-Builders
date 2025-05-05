"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PortfolioGallery from "@/components/portfolio-gallery";
import { projects } from "@/components/portfolioData";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
            {["All", "ongoing", "completed", "proposed"].map((type) => (
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
                  {type === "ongoing"
                    ? "OnGoing Project"
                    : type === "completed"
                    ? "Completed Project"
                    : type === "All"
                    ? "All Project"
                    : type === "proposed"
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

          {/* <motion.div
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
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="border border-white/20 p-8"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-6">
                  "Eswari Builders exceeded our expectations in every way. Their
                  attention to detail, quality of work, and professionalism made
                  our dream home a reality. We couldn't be happier with the
                  results."
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt={`Client ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Client Name</h4>
                    <p className="text-white/60 text-sm">
                      Project Type, Location
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        
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
