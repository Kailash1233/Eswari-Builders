"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/slider/6_slide.jpg"
          alt="About Eswari Builders"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1
            variants={fadeInTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Eswari Builders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Building excellence through innovation, integrity, and exceptional
            craftsmanship since 2004.
          </motion.p>
        </div>
      </section>

      {/* History & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">Our History & Values</h2>
              <p className="text-black mb-4">
                Founded in 2004, Eswari Builders began as a small construction
                company with a big vision: to transform the architectural
                landscape of Pondicherry with innovative, high-quality
                construction solutions.
              </p>
              <p className="text-black mb-4">
                Over the years, we've grown into a premier construction company,
                completing over 1000+ sq. ft. of residential and commercial
                projects. Our success is built on our unwavering commitment to
                quality, transparency, and customer satisfaction.
              </p>
              <p className="text-black">
                We value integrity, excellence, innovation, and sustainability
                in every project we undertake.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] w-full order-1 md:order-2"
            >
              <Image
                src="/slider/7_slide.jpg"
                alt="Eswari Builders History"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0E0E0E] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 p-8 md:p-12 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/80">
                To deliver exceptional construction services that transform our
                clients' visions into reality.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 p-8 md:p-12 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/80">
                To be the most trusted and innovative construction company in
                Pondicherry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Meet the Founder
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] w-full"
            >
              <Image
                src="/team/Founder.jpg"
                alt="Founder of Eswari Builders"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-2">Mr. Balasubramaniam</h3>
              <p className="text-black mb-6">Founder</p>
              <p className="text-black mb-4">
                With profound expertise in design and business leadership,
                BalaSubramaniam has been the driving force behind Eswari
                Builders' growth and success.
              </p>
              <p className="text-black">
                Driven by innovation, he ensures every project reflects the
                highest standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Expert Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sathya",
                role: "Managing Director",
                desc: "Leads operations and ensures quality and client satisfaction.",
                image: "/team/Sathya.jpg",
              },
              {
                name: "Prabhu Ram N",
                role: "CEO, Operations Head",
                desc: "Oversees project management, timelines, and quality control.",
                image: "/team/Prabhu.jpg",
              },
              {
                name: "Raam",
                role: "Strategic Partner in Interior",
                desc: "Brings innovative interior solutions to each project.",
                image: "/team/Raam.jpg",
              },
              {
                name: "Rajendran",
                role: "Site Engineer",
                desc: "Ensures on-site operations are smooth and precise.",
                image: "/team/Rajendran.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFFFFF] rounded-2xl p-6 shadow-sm"
              >
                <div className="relative h-[300px] w-full mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0E0E0E] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Work with Our Expert Team?
          </motion.h2>
          <motion.p
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto mb-8"
          >
            Contact us today to discuss your construction needs and experience
            the Eswari Builders difference.
          </motion.p>
          <motion.div
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


// bg-[#121212]