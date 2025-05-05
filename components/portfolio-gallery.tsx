"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { projects as allProjects } from "@/components/portfolioData";

interface Project {
  id: number;
  title: string;
  image?: string;
  category: string;
  location: string;
  description: string;
  mapTitle: string;
}

interface PortfolioGalleryProps {
  projects: Project[];
}

export default function PortfolioGallery({ projects }: PortfolioGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Dialog key={project.id}>
          <DialogTrigger asChild>
            <div
              className="bg-white group overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-row justify-between items-center text-sm text-gray-500 mb-2">
                  <span>{project.category}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-white text-xs font-medium ${
                      project.mapTitle === "Completed"
                        ? "bg-green-600"
                        : project.mapTitle === "Ongoing"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {project.mapTitle}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-700">{project.location}</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] p-0">
            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
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
                <span className="text-sm bg-black text-white px-3 py-1 mr-3">
                  {project.category}
                </span>
                <span className="text-gray-700">{project.location}</span>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
