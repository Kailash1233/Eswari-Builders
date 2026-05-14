"use client";

import Link from "next/link";
import Hero from "@/components/hero";
import BrandCarousel from "@/components/BrandCarousel";
import ProfileCard from "@/components/Profilecard";
import WhyChooseUs from "@/components/why-choose-us";
import FeaturedProjects from "@/components/featured-projects";
import ContactForm from "@/components/contactForm";
import Image from "next/image";
import FAQSection from "@/components/FAQ";

export default function Home() {
  const whatsappLink = `https://wa.me/919092097190`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://eswaribuilders.in",
    name: "Eswari Builders",
    image: "https://eswaribuilders.in/logo.png",
    description:
      "Premium residential and commercial construction company in Pondicherry since 2002. Specialising in house construction, villa construction, and turnkey projects.",
    url: "https://eswaribuilders.in",
    telephone: "+919092097190",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "112, First Floor, Kamatchi Amman Koil Street, Heritage Town",
      addressLocality: "Pondicherry",
      addressRegion: "Puducherry",
      postalCode: "605001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.9341,
      longitude: 79.8306,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "87",
    },
    sameAs: [
      "https://www.facebook.com/EswariBuilders2018",
      "https://www.instagram.com/eswaribuilderspy",
      "https://youtube.com/@eswaribuilders-q4e",
    ],
  };

  return (
    <div className="bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <BrandCarousel />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProfileCard />
      <ContactForm />

      {/* CTA Section */}
      <section className="relative bg-[#0a0a0a] py-28 overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

        {/* Subtle background text */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
          aria-hidden
        >
          <span
            className="text-[12vw] font-light text-white/[0.02] leading-none tracking-widest uppercase whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Build
          </span>
        </div>

        <div className="relative container mx-auto px-6 max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#c8a97e]" />
            <span
              className="text-[#c8a97e] tracking-[0.25em] text-xs uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Let&apos;s Build Together
            </span>
            <div className="h-px w-8 bg-[#c8a97e]" />
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Start Your
            <br />
            <span className="italic text-[#c8a97e]">Dream Project?</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-[#888] text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Tell us your idea — we&apos;ll handle the rest. Free consultation,
            transparent estimates, and a realistic timeline from our expert
            team.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#c8a97e] text-[#0a0a0a] px-8 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-[#b8996e] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Start Your Consultation
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>

            <Link
              href={whatsappLink}
              target="_blank"
              className="group inline-flex items-center gap-3 border border-white/20 text-white/70 px-8 py-3.5 text-xs tracking-widest uppercase hover:border-[#c8a97e]/40 hover:text-[#c8a97e] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {/* WhatsApp icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5 flex-shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-12" />

          {/* Trust row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Brand logos */}
            <div className="flex items-center gap-6 transition-opacity duration-300">
              <Image
                src="/branding/aashirvad.png"
                alt="Aashirvad"
                width={56}
                height={32}
                className=""
              />
              <Image
                src="/branding/europa.webp"
                alt="Europa"
                width={56}
                height={32}
                className=""
              />
              <Image
                src="/branding/fino.png"
                alt="Fino"
                width={56}
                height={32}
                className=""
              />
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10" />

            {/* Stats */}
            <div
              className="flex items-center gap-6 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <div className="text-center">
                <p
                  className="text-[#c8a97e] text-lg font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  150+
                </p>
                <p className="text-[#666] mt-0.5">Projects</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p
                  className="text-[#c8a97e] text-lg font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  5★
                </p>
                <p className="text-[#666] mt-0.5">Rating</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p
                  className="text-[#c8a97e] text-lg font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  24yr
                </p>
                <p className="text-[#666] mt-0.5">Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />
      </section>

      {/* Banking Partners Section */}
      <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

        {/* Background text */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
          aria-hidden
        >
          <span
            className="text-[10vw] font-light text-white/[0.02] leading-none tracking-widest uppercase whitespace-nowrap"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Finance Support
          </span>
        </div>

        <div className="relative container mx-auto px-6 max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#c8a97e]" />
              <span
                className="text-[#c8a97e] tracking-[0.25em] text-xs uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Loan Assistance
              </span>
              <div className="h-px w-10 bg-[#c8a97e]" />
            </div>

            <h2
              className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Trusted
              <span className="italic text-[#c8a97e]"> Banking Partners</span>
            </h2>

            <p
              className="text-[#888] text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Building your dream home should not be delayed because of
              financing. We assist our clients in securing smooth home loan
              approvals through trusted banking partners and NBFC housing
              finance providers with complete support throughout the process.
            </p>
          </div>

          {/* Bank Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                name: "ICICI Bank",
                subtitle: "Housing Loan",
                logo: "/banks/icici.webp",
              },
              {
                name: "HDFC Bank",
                subtitle: "Housing Loan",
                logo: "/banks/hdfc.webp",
              },
              {
                name: "State Bank of India",
                subtitle: "Housing Loan",
                logo: "/banks/sbi.webp",
              },
              {
                name: "Punjab National Bank",
                subtitle: "Housing Loan",
                logo: "/banks/pnb.webp",
              },
              {
                name: "IDFC First Bank",
                subtitle: "Housing Loan",
                logo: "/banks/idfc.webp",
              },
              {
                name: "IDBI Bank",
                subtitle: "Housing Loan",
                logo: "/banks/idbi.webp",
              },
              {
                name: "Canara Bank",
                subtitle: "Housing Loan",
                logo: "/banks/canara.webp",
              },
              {
                name: "Indian Bank",
                subtitle: "Housing Loan",
                logo: "/banks/indian.webp",
              },
            ].map((bank, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] border border-white/10 hover:border-[#c8a97e]/30 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[180px]"
              >
                <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={100}
                  height={50}
                  className="object-contain h-12 w-auto mb-5 opacity-90 group-hover:opacity-100 transition"
                />
                <h3
                  className="text-white text-sm md:text-base font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {bank.name}
                </h3>
                <p
                  className="text-[#888] text-xs mt-2 uppercase tracking-wider"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {bank.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Support Box */}
          <div className="max-w-5xl mx-auto">
            <div className="border border-[#c8a97e]/20 bg-gradient-to-r from-white/[0.03] to-white/[0.01] rounded-3xl p-8 md:p-12 text-center">
              <h3
                className="text-2xl md:text-3xl text-white font-light mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Need Flexible Financing Options?
              </h3>

              <p
                className="text-[#888] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Apart from traditional bank housing loans, we also support
                clients in getting approvals through trusted NBFC housing
                finance partners. Whether you are a salaried professional,
                self-employed business owner, or first-time home buyer, our team
                helps simplify the loan process.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />
      </section>

      <FAQSection />
    </div>
  );
}
