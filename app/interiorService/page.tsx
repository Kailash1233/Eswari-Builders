"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesCategoryFilter() {
  const categories = [
    { id: "all", name: "All Services" },
    { id: "commercial", name: "Commercial Interior" },
    { id: "residential", name: "Residencial Interior" },
    { id: "Home Decors", name: "Home Decors Solutions" },
    { id: "Turnkey Projects", name: "Turnkey Projects" },
    { id: "Balcony ideas", name: "Balcony ideas" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "Office Buildings",
      category: "commercial",
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
      title: "Wardrobe",
      category: "residential",
      image: "/interiorImage/residential 1.jpg",
      description:
        "<strong>Your Dream Home:</strong> We design wardrobes that blend seamlessly with your space, offering modern, space-saving storage solutions with personalized finishes.",
      link: "/services/residential/wardrobe",
    },
    {
      id: 6,
      title: "TV Units & Paneling Works",
      category: "residential",
      image: "/interiorImage/residential 2.jpg",
      description:
        "<strong>Your Dream Home:</strong> Custom TV units and wall paneling enhance your living space with elegance and function, hiding cables and showcasing your entertainment area.",
      link: "/services/residential/tv-units-paneling",
    },
    {
      id: 7,
      title: "Built for Your Life",
      category: "Turnkey Projects",
      image: "/interiorImage/turnkey 1.jpg",
      description:
        "<strong>Built for Your Life:</strong> Our turnkey services are designed to turn your vision into reality. We carefully craft every detail — from concept to completion — creating spaces that reflect your unique style and lifestyle. With us, your dream space is ready when you are.",
      link: "/services/industrial/warehouses",
    },
    {
      id: 8,
      title: "Your Space, Your Story",
      category: "Turnkey Projects",
      image: "/interiorImage/turnkey 2.jpg",
      description:
        "<strong>Your Space, Your Story:</strong> Every space tells a unique story, and our turnkey services bring that vision to life. From design to final touches, we ensure your space reflects your personality and lifestyle, offering a seamless experience from start to finish.",
      link: "/services/industrial/manufacturing-plants",
    },
    {
      id: 9,
      title: "Effortless Turnkey Solutions",
      category: "Turnkey Projects",
      image: "/interiorImage/turnkey 3.jpg",
      description:
        "<strong>Effortless Turnkey Solutions:</strong> We manage every step of creating your ideal space, from design to final finishes. Enjoy a stress-free, move-in-ready space that reflects your vision, with no surprises or delays. Our attention to detail ensures your dream space is brought to life with quality and efficiency.",
      link: "/services/renovation/home-remodeling",
    },
    {
      id: 10,
      title: "Balcony Retreat",
      category: "Balcony ideas",
      image: "/interiorImage/Balcony 1.jpg",
      description:
        "<strong>Beauty of Home : </strong>  Create a peaceful outdoor sanctuary with cozy seating, lush plants, and soft lighting. A perfect space to unwind and enjoy fresh air.",
      link: "/services/renovation/commercial-retrofitting",
    },

    {
      id: 11,
      title: "Reimagine Your Home",
      category: "Home Decors",
      image: "/interiorImage/Home Decors 1.jpg",
      description:
        "<strong>Reimagine Your Home:</strong> Our decor solutions transform your interiors with fresh ideas, tasteful designs, and a focus on what makes a house truly feel like home.",
      link: "/services/renovation/commercial-retrofitting",
    },

    {
      id: 12,
      title: "Dream Home Realized",
      category: "Home Decors",
      image: "/interiorImage/Home Decors 2.jpg",
      description:
        "<strong>Transform Your Living Space:</strong> Our home decor solutions bring style, comfort, and personality to your interiors. From elegant furnishings to creative wall designs, we craft spaces that truly feel like home.",
      link: "/services/renovation/commercial-retrofitting",
    },
    {
      id: 13,
      title: "Urban Escape",
      category: "Balcony ideas",
      image: "/interiorImage/Balcony 2.jpg",
      description:
        "<strong>Stylish Spaces with Stunning City Views Transformation:</strong> Maximize your city views by adding modern furniture, lush greenery, and stylish decorative touches, transforming your balcony into a chic, cozy escape that feels like an extension of your home.",
      link: "/services/renovation/commercial-retrofitting",
    },
    {
      id: 14,
      title: "Garden Balcony",
      category: "Balcony ideas",
      image: "/interiorImage/Balcony 3.jpg",
      description:
        "<strong>Bring Nature to Your Home:</strong> Transform your balcony into a lush mini garden filled with vibrant plants and colorful flowers, creating a serene green space that brings the beauty of nature right to your doorstep.",
      link: "/services/renovation/commercial-retrofitting",
    },
    {
      id: 15,
      title: "Modern False Ceiling Works",
      category: "residential",
      image: "/interiorImage/residential 3.jpg",
      description:
        "<strong>Your Dream Home:</strong> False ceilings with cove lighting and geometric designs add depth, style, and insulation to your home interiors.",
      link: "/services/residential/false-ceiling",
    },
    {
      id: 16,
      title: "Modular Kitchen",
      category: "residential",
      image: "/interiorImage/residential 4.jpg",
      description:
        "<strong>Your Dream Home:</strong> Smart modular kitchens that maximize space with ergonomic layouts, premium finishes, and intelligent storage systems.",
      link: "/services/residential/modular-kitchen",
    },
    {
      id: 17,
      title: "Pooja Room",
      category: "residential",
      image: "/interiorImage/residential 5.webp",
      description:
        "<strong>Your Dream Home:</strong> We craft serene pooja units and rooms with traditional charm or modern minimalism, aligned with Vastu and aesthetics.",
      link: "/services/residential/pooja-room",
    },
    {
      id: 18,
      title: "Under Stair Closures",
      category: "residential",
      image: "/interiorImage/residential 6.jpg",
      description:
        "<strong>Your Dream Home:</strong> Transform unused stair space into functional storage with custom-built drawers, cabinets, or display units.",
      link: "/services/residential/under-stair-closures",
    },
    {
      id: 19,
      title: "Wall Partition",
      category: "residential",
      image: "/interiorImage/residential 7.jpg",
      description:
        "<strong>Your Dream Home:</strong> Elegant partitions add privacy and style to open spaces—choose from wood, glass, or CNC-cut panels.",
      link: "/services/residential/wall-partition",
    },
    {
      id: 20,
      title: "Vinely Flooring",
      category: "residential",
      image: "/interiorImage/residential 8.jpg",
      description:
        "<strong>Your Dream Home:</strong> Vinely flooring offers a modern look with wood-like finishes that are water-resistant, pet-friendly, and long-lasting.",
      link: "/services/residential/vinely-flooring",
    },
    {
      id: 21,
      title: "Curtains & Blinds",
      category: "residential",
      image: "/interiorImage/residential 9.jpg",
      description:
        "<strong>Your Dream Home:</strong> Custom curtains and blinds elevate your interiors with a balance of privacy, light control, and style.",
      link: "/services/residential/curtains-blinds",
    },
    {
      id: 22,
      title: "Furniture & Dining Table",
      category: "residential",
      image: "/interiorImage/residential 10.jpg",
      description:
        "<strong>Your Dream Home:</strong> From designer sofas to handcrafted dining tables, we create furniture that complements your interior themes.",
      link: "/services/residential/furniture-dining-table",
    },
    {
      id: 23,
      title: "Lighting Solutions",
      category: "residential",
      image: "/interiorImage/residential 11.jpg",
      description:
        "<strong>Your Dream Home:</strong> Ambient, task, and accent lighting designed to enhance every space with modern technology and elegant fixtures.",
      link: "/services/residential/lighting-solutions",
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
          src="/slider/8_slide.jpg"
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
            Interior Service
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
            Our Interior service
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
                  ease: "easeOut",
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
