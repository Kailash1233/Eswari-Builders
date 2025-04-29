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
          src="/slider/10_slide.jpg"
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

      <section className="py-16 by-[#0E0E0E]">
        <div className="container mx-auto px-4">
          <div className=" section-title text-center mb-10 p-6">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Our Commercial Constructions Service
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600"
            >
              Choose the perfect construction package for your dream home
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16 items-center place-item-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-[#0E0E0E]/80 p-8 rounded-lg  h-full flex flex-col justify-center shadow-md"
            >
              <h3 className="text-3xl text-white font-bold mb-4">IT Offices</h3>
              <p className="text-white ">
                <strong>Tech-Ready Spaces:</strong> IT offices are designed to
                inspire innovation and teamwork. We focus on creating modern,
                adaptable spaces that support technology-driven work and
                encourage collaboration, all while ensuring a comfortable and
                efficient environment for your team.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className=" w-full">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/interiorImage/img 1.jpg"
                  alt="IT Office Space"
                  className="object-cover rounded-lg shadow-lg w-full h-80 md:h-96 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16 items-center place-item-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="order-2 md:order-1 overflow-hidden rounded-2xl shadow-md"
              variants={fadeInUp}
            >
              <img
                src="/interiorImage/img 2.jpg"
                alt="IT Office Space"
                className="object-cover rounded-lg shadow-lg w-full h-96 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              className=" p-8 rounded-lg bg-gray-100  h-full flex flex-col justify-center shadow-md order-1 md:order-2"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold mb-4">Banks</h3>
              <p className="text-gray-600 ">
                <strong>Financial Hubs:</strong> We understand the unique
                requirements of banks and financial institutions. Our designs
                and layouts cater to the essential functions of ATMs, deposits,
                cashier services, loan sections, and back-office operations.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16 items-center place-item-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-[#0E0E0E]/80 p-8 rounded-lg h-full flex flex-col justify-center shadow-md"
            >
              <h3 className="text-3xl text-white font-bold mb-4">
                Medical Centers
              </h3>
              <p className="text-white ">
                <strong>Healthcare Spaces:</strong> From hospitals and clinics
                to testing laboratories, we support the establishment of medical
                enterprises by adhering to government regulations and
                accreditation standards, ensuring a safe and functional
                healthcare environment.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src="/interiorImage/img 3.jpg"
                alt="Medical Center"
                className="object-cover rounded-lg shadow-lg w-full h-96 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16 items-center place-item-center"
          >
            <motion.div
              variants={fadeInUp}
              className="order-2 md:order-1 overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src="/interiorImage/img 7.jpg"
                alt="Sports Center"
                className="object-cover rounded-lg shadow-lg w-full h-96 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-gray-100 p-8 rounded-lg h-full flex flex-col justify-center shadow-md order-1 md:order-2"
            >
              <h3 className="text-3xl font-bold mb-4">
                Sports and Recreation Centers
              </h3>
              <p className="text-gray-700">
                <strong>Active Lifestyles:</strong> From indoor gyms to
                expansive parks and wellness centers, we create spaces that
                support both athletic performance and community well-being. Our
                designs focus on safety, accessibility, and functionality,
                fostering environments that inspire health, fitness, and
                recreation.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16 items-center place-item-center"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-[#0E0E0E]/80 p-8 rounded-lg h-full flex flex-col justify-center shadow-md"
            >
              <h3 className="text-3xl text-white font-bold mb-4">
                Hotels / Resorts
              </h3>
              <p className="text-white">
                <strong>Premium Retreats : </strong> We specialize in designing
                hotels and resorts that turn every stay into a memorable
                experience. Whether it’s a lavish getaway or a cozy retreat, our
                spaces are crafted to offer comfort, style, and a warm,
                welcoming atmosphere for all types of travelers.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src="/interiorImage/img 9.jpg"
                alt="Medical Center"
                className="object-cover rounded-lg shadow-lg w-full h-96 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-16 items-center place-item-center"
          >
            <motion.div
              variants={fadeInUp}
              className="order-2 md:order-1 overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src="/interiorImage/img 6.jpg"
                alt="Sports Center"
                className="object-cover rounded-lg shadow-lg w-full h-96 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-gray-100 p-8 rounded-lg shadow-md h-full flex flex-col justify-center order-1 md:order-2"
            >
              <h3 className="text-3xl font-bold mb-4">
                Restaurants/Coffee Shops
              </h3>
              <p className="text-gray-700">
                <strong>Interactive Dining Spaces:</strong> Our designs bring
                conceptual restaurants and coffee shops to life, blending the
                latest trends with unique concepts. We focus on creating vibrant
                spaces that deliver memorable dining experiences, attracting
                customers and leaving a lasting impression.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16 items-center place-item-center"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-[#0E0E0E]/80 p-8 rounded-lg h-full flex flex-col justify-center shadow-md"
            >
              <h3 className="text-3xl text-white font-bold mb-4">
                Business Innovation Centers
              </h3>
              <p className="text-white">
                <strong>Innovation Hubs and Incubators:</strong> We specialize
                in designing spaces for educational institutions, government
                offices, NGOs, trusts, and religious organizations. Our designs
                are tailored to the unique needs of these institutions, creating
                functional and inspiring environments that foster learning,
                service, and community engagement.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src="/interiorImage/img 5.jpg"
                alt="Medical Center"
                className="object-cover rounded-lg shadow-lg w-full h-96 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
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
                className="border border-gray-200 p-8  transition-all hover:shadow-md"
              >
                <div className="mb-4 ite">{service.icon}</div>
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
