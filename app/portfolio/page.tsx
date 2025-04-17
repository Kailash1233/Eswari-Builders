import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PortfolioGallery from "@/components/portfolio-gallery";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/slider/4_slide.jpg"
          alt="Our Portfolio"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore our completed projects and see the quality of our work.
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              All Projects
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              OnGoing Project
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              Completed Project
            </Button>
          </div>

          <PortfolioGallery />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-white/20 p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-6">
                  "Eswari Builders exceeded our expectations in every way. Their
                  attention to detail, quality of work, and professionalism made
                  our dream home a reality. We couldn't be happier with the
                  results."
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt={`Client ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Client Name</h4>
                    <p className="text-white/60 text-sm">
                      Project Type, Location
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Dream Space?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and join our list of
            satisfied clients.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-black/90"
          >
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
