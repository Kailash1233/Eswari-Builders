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

const ImageCard = ({ item, index }: any) => (
  <motion.div
    variants={fadeInBottom}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="relative group h-[250px] w-full overflow-hidden rounded-xl"
  >
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-sm">{item.description}</p>
    </div>
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/slider/6_slide.webp"
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
                Founded in 2002, Eswari Builders began as a small construction
                company with a big vision: to transform the architectural
                landscape of Pondicherry with innovative, high-quality
                construction solutions.
              </p>
              <p className="text-black mb-4">
                Over the years, we've grown into a premier construction company,
                completing over 100000 sq. ft. of residential and commercial
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
                src="/slider/7_slide.webp"
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
                src="/team/Founder.webp"
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

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Sathya",
                role: "Managing Director",
                desc: "Leads operations and ensures quality and client satisfaction.",
                image: "/team/MD2.webp",
              },
              {
                name: "Prabhu Ram N",
                role: "CEO, Operations Head",
                desc: "Oversees project management, timelines, and quality control.",
                image: "/team/Prabhu.webp",
              },
              {
                name: "Raam",
                role: "Strategic Partner in Interior",
                desc: "Brings innovative interior solutions to each project.",
                image: "/team/Raam.webp",
              },
              {
                name: "Rajendran",
                role: "Site Engineer",
                desc: "Ensures on-site operations are smooth and precise.",
                image: "/team/Rajendran.webp",
              },
              {
                name: "Hema",
                role: "Architect",
                desc: "Plans, designs, and oversees the construction of buildings.",
                image: "/team/Hema.webp",
              },
              {
                name: "Siddique",
                role: "Designing Partner (BODMAS DESIGNS)",
                desc: "Designs and implements the building's exterior and interior.",
                image: "/team/Siddique.webp",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-1/2 lg:w-1/4 bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="relative h-[300px] w-full mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-md object-top md:object-center"
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

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-20">
          {/* Section 1: Cherished Moments */}
          <div>
            <motion.h2
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Cherished Moments with{" "}
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Eswari Builders!
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "/gallery/1.webp",
                  title: "Giving Back",
                  description: "Good Memories with Employees",
                },
                {
                  image: "/gallery/2.webp",
                  title: "Ayudha Pooja",
                  description: "Ayudha Pooja Celebration with Employees",
                },
                {
                  image: "/gallery/5.webp",
                  title: "Giving Back",
                  description: "A meaningful contribution to society.",
                },
                {
                  image: "/gallery/11.webp",
                  title: "Strong Team",
                  description:
                    "A team of dedicated and hardworking individuals.",
                },
                {
                  image: "/gallery/12.webp",
                  title: "Group Picture",
                  description: "Prabhu and Raam with their Team/Family",
                },
                {
                  image: "/gallery/15.webp",
                  title: "Partners",
                  description: "Collaborative and supportive relationships.",
                },
                {
                  image: "/gallery/10.webp",
                  title: "Diwali Celebration",
                  description:
                    "Celebrating the festival of lights with employees.",
                },
                {
                  image: "/gallery/13.webp",
                  title: "Ayudha Pooja Celebration",
                  description: "Fresh and new beginnings.",
                },
                {
                  image: "/gallery/14.webp",
                  title: "Ayudha Pooja",
                  description: "Celebration during Ayudha Pooja.",
                },
              ].map((item, index) => (
                <ImageCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Section 2: Birthday Celebrations */}
          <div>
            <motion.h2
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-12 text-center text-yellow-600"
            >
              Birthday Celebrations
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "/gallery/9.webp",
                  title: "Birthday Celebration",
                  description: "CEO's birthday celebration.",
                },
                {
                  image: "/gallery/16.webp",
                  title: "Birthday Celebration",
                  description: "Staff's birthday celebration.",
                },
                {
                  image: "/gallery/17.webp",
                  title: "Birthday Celebration",
                  description: "Staff's birthday celebration.",
                },
              ].map((item, index) => (
                <ImageCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Section 3: Mana Poojas & Land Poojas */}
          <div>
            <motion.h2
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-12 text-center text-orange-600"
            >
              Mana Poojas
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "/gallery/3.webp",
                  title: "Land Pooja 1",
                  description: "A celebration of nature and community.",
                },
                {
                  image: "/gallery/4.webp",
                  title: "Land Pooja 2",
                  description: "A celebration of nature and community.",
                },
                {
                  image: "/gallery/7.webp",
                  title: "Land Pooja 3",
                  description: "A celebration of nature and community.",
                },
                {
                  image: "/gallery/8.webp",
                  title: "Land Pooja 4",
                  description: "A celebration of nature and community.",
                },
                {
                  image: "/gallery/6.webp",
                  title: "Land Pooja 5",
                  description: "Site Pooja Celebration.",
                },
              ].map((item, index) => (
                <ImageCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[ #1b1b1b] text-white">
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
