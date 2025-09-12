"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: number;
  location: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Residence",
    category: "Residential",
    image: "/projects/1.webp",
    year: 2024,
    location: "Pondicherry",
  },
  {
    id: 2,
    title: "Commercial Complex",
    category: "Commercial",
    image: "/projects/2.webp",
    year: 2023,
    location: "Chennai",
  },
  {
    id: 3,
    title: "Luxury Villa",
    category: "Residential",
    image: "/projects/3.webp",
    year: 2025,
    location: "Pondicherry",
  },
  {
    id: 4,
    title: "Office Renovation",
    category: "Commercial",
    image: "/projects/4.webp",
    year: 2022,
    location: "Bengaluru",
  },
];

export default function FeaturedProjects() {
  // type the active state so TypeScript knows it can be a Project or null
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="relative py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-10">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-indigo-600 tracking-wide mb-2">
            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
              Portfolio
            </span>
            <span className="text-slate-400">Selected works</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Featured projects - craft, detail & impact
          </h2>
          <p className="mt-4 text-slate-600">
            A curated selection of our recent architecture and interior
            projects. Clean execution, human-centred design and finish that
            lasts.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden ring-1 ring-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 w-full bg-slate-100 flex-shrink-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  priority={project.id === 1}
                />

                {/* Overlay */}
                <div className="absolute left-4 bottom-4 flex items-center gap-3">
                  <span className="bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur">
                    {project.category}
                  </span>
                  <span className="bg-white/90 text-slate-800 text-xs px-2 py-1 rounded-md font-medium">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content - make this area flexible so all cards equal height */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {project.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        asChild
                        variant="ghost"
                        className="px-3 py-2 rounded-md border border-slate-100 shadow-sm"
                      >
                        <button
                          aria-label={`Open ${project.title}`}
                          onClick={() => setActive(project)}
                          className="inline-flex items-center gap-2 text-sm"
                        >
                          Preview
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Footer - moved to bottom to keep consistent placement across cards */}
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm text-slate-600">
                    High-quality finishes • 1,200 sqft+
                  </p>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                    aria-label={`View ${project.title} in portfolio`}
                  >
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center">
          <Button asChild variant="outline" className="rounded-full px-6 py-3">
            <Link href="/portfolio" className="inline-flex items-center gap-3">
              See all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Light decorative footer line */}
        <div className="mt-2 pt-8 text-center text-sm text-slate-500">
          Curious about a project you saw?{" "}
          <Link
            href="/contact"
            className="text-indigo-600 font-medium hover:underline"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Simple modal / preview (rendered in place) */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-10"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />

          <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-96 w-full">
              {/* active is definitely non-null here because of the guard above */}
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{active.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {active.location} • {active.year}
                  </p>
                </div>

                <button
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => setActive(null)}
                  aria-label="Close preview"
                >
                  ✕
                </button>
              </div>

              <p className="mt-4 text-slate-600">
                A short project summary can go here. Mention client needs,
                materials used and any notable challenge solved.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <Button asChild>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center gap-2"
                  >
                    Open project <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Link
                  href="/contact"
                  className="text-sm text-slate-500 hover:underline"
                >
                  Request a consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
