"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import BrandCarousel from "@/components/BrandCarousel";
import ProfileCard from "@/components/Profilecard";
import WhyChooseUs from "@/components/why-choose-us";
import FeaturedProjects from "@/components/featured-projects";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <BrandCarousel />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProfileCard />
      <ContactForm />
      <section className="py-20 bg-[#1b1b1b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Dream Project?
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-8">
            Contact us today to discuss your construction needs and get a free
            consultation with our expert team.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
