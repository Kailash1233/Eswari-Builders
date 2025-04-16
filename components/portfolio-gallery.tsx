"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Residence",
    location: "Pondicherry",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "A contemporary 3-bedroom residence with open floor plan and minimalist design.",
  },
  {
    id: 2,
    title: "Commercial Complex",
    location: "Chennai",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "A multi-story commercial complex with modern amenities and sustainable features.",
  },
  {
    id: 3,
    title: "Luxury Villa",
    location: "Pondicherry",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "A luxurious 5-bedroom villa with swimming pool and landscaped gardens.",
  },
  {
    id: 4,
    title: "Office Renovation",
    location: "Bangalore",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete renovation of a corporate office space with modern interiors.",
  },
  {
    id: 5,
    title: "Apartment Building",
    location: "Pondicherry",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "A 12-unit apartment building with contemporary design and community spaces.",
  },
  {
    id: 6,
    title: "Retail Store",
    location: "Chennai",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "A high-end retail store with custom interiors and display solutions.",
  },
  {
    id: 7,
    title: "Beach House",
    location: "Pondicherry",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "A modern beach house with panoramic ocean views and sustainable design.",
  },
  {
    id: 8,
    title: "Restaurant Design",
    location: "Pondicherry",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete interior design for a fine dining restaurant with custom furniture.",
  },
  {
    id: 9,
    title: "Duplex Home",
    location: "Chennai",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "A spacious duplex home with modern amenities and custom interiors.",
  },
]

export default function PortfolioGallery() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Dialog key={project.id}>
          <DialogTrigger asChild>
            <div className="bg-white group overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-700">{project.location}</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] p-0">
            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <button
                className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <div className="flex items-center mb-4">
                <span className="text-sm bg-black text-white px-3 py-1 mr-3">{project.category}</span>
                <span className="text-gray-700">{project.location}</span>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
