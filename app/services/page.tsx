"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Building, Calculator, ClipboardList } from "lucide-react";
import ConstructionPackages from "@/components/ResidentialProjects";
import { motion } from "framer-motion";

const constructionServices = [
  {
    icon: <ClipboardList className="h-10 w-10" />,
    title: "Architecture",
    description:
      "Innovative and functional design solutions to shape the blueprint of your dream space.",
  },
  {
    icon: <Calculator className="h-10 w-10" />,
    title: "Interior",
    description:
      "Creative interior design services that blend aesthetics with functionality for modern living.",
  },
  {
    icon: <Building className="h-10 w-10" />,
    title: "construction",
    description:
      "Reliable and efficient construction services to bring your architectural visions to life.",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
            Our Services
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

      <ConstructionPackages />

      {/* Construction Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-center"
          >
            Construction Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 max-w-3xl mx-auto text-center mb-12"
          >
            From planning to execution, we offer a complete range of
            construction services to bring your vision to life.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {constructionServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-gray-200 p-8 transition-all hover:shadow-md"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Service Process
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We begin with a detailed consultation to understand your needs and vision.",
              },
              {
                number: "02",
                title: "Planning & Design",
                description:
                  "Our experts create a comprehensive plan and design for your project.",
              },
              {
                number: "03",
                title: "Execution",
                description:
                  "We execute the project with precision, keeping you informed at every step.",
              },
              {
                number: "04",
                title: "Delivery",
                description:
                  "We deliver the completed project on time and within budget.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-black text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#121212] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInDown}
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
