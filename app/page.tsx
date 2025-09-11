"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import BrandCarousel from "@/components/BrandCarousel";
import ProfileCard from "@/components/Profilecard";
import WhyChooseUs from "@/components/why-choose-us";
import FeaturedProjects from "@/components/featured-projects";
import ContactForm from "@/components/contactForm";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <BrandCarousel />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProfileCard />
      <ContactForm />
      <section className="relative py-20 bg-white text-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Intro tag */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium tracking-wide text-slate-600">
                Let's build together
              </span>
              <span className="text-sm text-slate-500">
                Trusted • Transparent • Timely
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Ready to start your dream project?
            </h2>

            {/* Subheading */}
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Tell us your idea — we&apos;ll handle the rest. Get a free
              consultation, transparent estimates, and a realistic timeline from
              our expert team.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="rounded-full flex items-center gap-3 bg-black text-white shadow-lg transform transition hover:text-black hover:bg-slate-50"
              >
                <Link
                  href="/contact"
                  aria-label="Contact Eswari Builders — Get a consultation"
                >
                  Start your consultation
                  <ArrowRight className="h-4 w-4 inline-block ml-1" />
                </Link>
              </Button>

              <Link
                href="/estimate"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-slate-200 hover:bg-slate-50 transition text-sm text-slate-700"
                aria-label="Get an estimate"
              >
                Get a free estimate
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust badges + microcopy */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-4">
                <Image
                  src="/branding/aashirvad.png"
                  alt="Trust badge 1"
                  width={48}
                  height={24}
                />
                <Image
                  src="/branding/europa.webp"
                  alt="Trust badge 2"
                  width={48}
                  height={24}
                />
                <Image
                  src="/branding/fino.png"
                  alt="Trust badge 3"
                  width={48}
                  height={24}
                />
              </div>

              <div className="text-center md:text-left">
                <span className="font-medium text-slate-700">
                  150+ projects
                </span>{" "}
                completed on time •{" "}
                <span className="font-medium text-slate-700">5-star</span>{" "}
                client rating
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
