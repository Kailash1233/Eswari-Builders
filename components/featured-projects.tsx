import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Residence",
    // location: "Pondicherry",
    category: "Residential",
    image: "/projects/1.webp",
  },
  {
    id: 2,
    title: "Commercial Complex",
    // location: "Chennai",
    category: "Commercial",
    image: "/projects/2.webp",
  },
  {
    id: 3,
    title: "Luxury Villa",
    // location: "Pondicherry",
    category: "Residential",
    image: "/projects/3.webp",
  },
  {
    id: 4,
    title: "Office Renovation",
    // location: "Bangalore",
    category: "Commercial",
    image: "/projects/4.webp",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative py-4 pt-16 pb-16 mx-2 md:mx-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Explore some of our recent construction and interior design projects
            that showcase our expertise and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 rounded-md group overflow-hidden"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                {/* <p className="text-gray-700 mb-4">{project.location}</p> */}
                <Link
                  href="/portfolio"
                  className="text-black font-normal inline-flex items-center hover:underline"
                >
                  View Project <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.4)]"
          >
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
