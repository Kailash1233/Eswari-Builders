import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/slider/6_slide.jpg"
          alt="About Eswari Builders"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Eswari Builders
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Building excellence through innovation, integrity, and exceptional
            craftsmanship since 2008.
          </p>
        </div>
      </section>

      {/* History & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our History & Values</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2008, Eswari Builders began as a small construction
                company with a big vision: to transform the architectural
                landscape of Pondicherry with innovative, high-quality
                construction solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've grown into a premier construction company,
                completing over 1000+ sq. ft. of residential and commercial
                projects. Our success is built on our unwavering commitment to
                quality, transparency, and customer satisfaction.
              </p>
              <p className="text-gray-700">
                We value integrity, excellence, innovation, and sustainability
                in every project we undertake. Our team works with precision and
                passion to deliver spaces that exceed expectations and stand the
                test of time.
              </p>
            </div>
            <div className="relative h-[400px] w-full order-1 md:order-2">
              <Image
                src="/slider/7_slide.jpg"
                alt="Eswari Builders History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white/10 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/80">
                To deliver exceptional construction services that transform our
                clients' visions into reality, creating spaces that inspire,
                function perfectly, and exceed expectations in quality and
                design.
              </p>
            </div>
            <div className="bg-white/10 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/80">
                To be the most trusted and innovative construction company in
                Pondicherry, setting new standards in architectural excellence,
                sustainable building practices, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet the Founder
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] w-full">
              <Image
                src="/team/Founder.jpg"
                alt="Founder of Eswari Builders"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Mr. Balasubramaniam</h3>
              <p className="text-gray-500 mb-6">Founder</p>
              <p className="text-gray-700 mb-4">
                Founder of Eswari Builders, with a focus on visionary leadership
                and strategic planning in the construction sector.
              </p>
              <p className="text-gray-700 mb-4">
                With his profound expertise in architectural design,
                construction management, and business leadership,
                BalaSubramaniam has been the driving force behind Eswari
                Builders' growth and success. Under his leadership, the company
                has delivered several iconic projects, solidifying its
                reputation for quality and excellence.
              </p>
              <p className="text-gray-700">
                Driven by a commitment to innovation, BalaSubramaniam ensures
                that every project reflects the highest standards of quality and
                customer satisfaction — values that are at the heart of Eswari
                Builders' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Expert Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sathya - Managing Director */}
            <div className="bg-white p-6 shadow-sm">
              <div className="relative h-[300px] w-full mb-4">
                <Image
                  src="/team/Sathya.jpg"
                  alt="Sathya"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sathya</h3>
              <p className="text-gray-500 mb-4">Managing Director</p>
              <p className="text-gray-700 text-sm">
                Sathya leads operations and ensures the seamless execution of
                all projects, maintaining a high standard of quality and client
                satisfaction.
              </p>
            </div>

            {/* Prabhu Ram N - CEO, Operations Head */}
            <div className="bg-white p-6 shadow-sm">
              <div className="relative h-[300px] w-full mb-4">
                <Image
                  src="/team/Prabhu.jpg"
                  alt="Prabhu Ram N"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Prabhu Ram N</h3>
              <p className="text-gray-500 mb-4">CEO, Operations Head</p>
              <p className="text-gray-700 text-sm">
                Prabhu Ram is responsible for the smooth operations of Eswari
                Builders, overseeing project management, timelines, and quality
                control.
              </p>
            </div>

            {/* Raam - Strategic Partner in Interior */}
            <div className="bg-white p-6 shadow-sm">
              <div className="relative h-[300px] w-full mb-4">
                <Image
                  src="/team/Raam.jpg"
                  alt="Raam"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Raam</h3>
              <p className="text-gray-500 mb-4">
                Strategic Partner in Interior
              </p>
              <p className="text-gray-700 text-sm">
                Raam brings innovative interior design solutions to Eswari
                Builders, enhancing the aesthetic value and functionality of
                every project.
              </p>
            </div>

            {/* Rajendran - Site Engineer */}
            <div className="bg-white p-6 shadow-sm">
              <div className="relative h-[300px] w-full mb-4">
                <Image
                  src="/team/Rajendran.jpg"
                  alt="Rajendran"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Rajendran</h3>
              <p className="text-gray-500 mb-4">Site Engineer</p>
              <p className="text-gray-700 text-sm">
                Rajendran is responsible for overseeing on-site operations,
                ensuring that each project is completed on time and with
                precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your construction needs and experience
            the Eswari Builders difference.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
