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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function ServicesPage() {
  return (
    <div>
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
            Commercial Service
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

      <section className="py-20 by-[#0E0E0E]">
        <div className="container mx-auto px-4">
          <div className=" section-title text-center mb-10 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Our Commercial Constructions Service
            </h2>
            <p className="text-gray-600">
              Choose the perfect construction package for your dream home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">IT Offices</h3>
              <p className="text-gray-700">
                <strong>Tech-Ready Spaces:</strong> IT businesses demand
                cutting-edge infrastructure. We specialize in creating IT office
                spaces with the technological capabilities and telecommunication
                infrastructure required for the digital age.
              </p>
              <Link href="/services/commercial/it-offices">
                <span className="inline-block mt-4 px-6 py-2 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
                  Learn More
                </span>
              </Link>
            </div>
            <div className=" w-full">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/interiorImage/img 1.jpg"
                  alt="IT Office Space"
                  className="object-cover rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center place-item-center">
            <div className="order-2 md:order-1 overflow-hidden rounded-2xl shadow-md">
            <img
                  src="/interiorImage/img 2.jpg"
                  alt="IT Office Space"
                  className="object-cover rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md   order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">Banks</h3>
              <p className="text-gray-700 ">
                <strong>Financial Hubs:</strong> We understand the unique
                requirements of banks and financial institutions. Our designs
                and layouts cater to the essential functions of ATMs, deposits,
                cashier services, loan sections, and back-office operations.
              </p>
              <Link href="/services/commercial/banks">
                <span className="inline-block mt-4 px-6 py-2 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
                  Learn More
                </span>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Medical Centers</h3>
              <p className="text-gray-700">
                <strong>Healthcare Spaces:</strong> From hospitals and clinics
                to testing laboratories, we support the establishment of medical
                enterprises by adhering to government regulations and
                accreditation standards, ensuring a safe and functional
                healthcare environment.
              </p>
              <Link href="/services/commercial/medical-centers">
                <span className="inline-block mt-4 px-6 py-2 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
                  Learn More
                </span>
              </Link>
            </div>
            <div>
              <img
                // src="/api/placeholder/800/600"
                alt="Medical Center"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                // src="/api/placeholder/800/600"
                alt="Sports Center"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Sports and Recreation Centers
              </h3>
              <p className="text-gray-700">
                <strong>Active Lifestyles:</strong> We contribute to the growing
                demand for sports and recreation centers by creating facilities
                such as indoor cricket venues, badminton courts, and
                multipurpose recreational activity centers—all under one roof.
              </p>
              <Link href="/services/commercial/sports-centers">
                <span className="inline-block mt-4 px-6 py-2 bg-yellow-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
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
            variants={containerVariants}
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

      {/* CTA Section */}
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
