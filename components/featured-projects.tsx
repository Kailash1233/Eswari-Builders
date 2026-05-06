// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, ExternalLink } from "lucide-react";

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   image: string;
//   location: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Modern Residence",
//     category: "Residential",
//     image: "/projects/1.webp",
//     location: "Pondicherry",
//   },
//   {
//     id: 2,
//     title: "Commercial Complex",
//     category: "Commercial",
//     image: "/projects/2.webp",
//     location: "Chennai",
//   },
//   {
//     id: 3,
//     title: "Luxury Villa",
//     category: "Residential",
//     image: "/projects/3.webp",
//     location: "Pondicherry",
//   },
//   {
//     id: 4,
//     title: "Office Renovation",
//     category: "Commercial",
//     image: "/projects/4.webp",
//     location: "Bengaluru",
//   },
// ];

// export default function FeaturedProjects() {
//   // type the active state so TypeScript knows it can be a Project or null
//   const [active, setActive] = useState<Project | null>(null);

//   return (
//     <section className="relative py-12 bg-gradient-to-b from-white to-slate-50">
//       <div className="container mx-auto px-6 lg:px-8">
//         <header className="max-w-3xl mx-auto text-center mb-10">
//           <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-indigo-600 tracking-wide mb-2">
//             <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
//               Portfolio
//             </span>
//             <span className="text-slate-400">Selected works</span>
//           </p>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
//             Featured projects - craft, detail & impact
//           </h2>
//           <p className="mt-4 text-slate-600">
//             A curated selection of our recent architecture and interior
//             projects. Clean execution, human-centred design and finish that
//             lasts.
//           </p>
//         </header>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {projects.map((project) => (
//             <article
//               key={project.id}
//               className="group bg-white rounded-2xl shadow-md overflow-hidden ring-1 ring-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col"
//             >
//               {/* Image */}
//               <div className="relative h-64 w-full bg-slate-100 flex-shrink-0">
//                 <Image
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                   className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
//                   priority={project.id === 1}
//                 />

//                 {/* Overlay */}
//                 <div className="absolute left-4 bottom-4 flex items-center gap-3">
//                   <span className="bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur">
//                     {project.category}
//                   </span>
//                 </div>
//               </div>

//               {/* Content - make this area flexible so all cards equal height */}
//               <div className="p-6 flex-1 flex flex-col justify-between">
//                 <div>
//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <h3 className="text-lg font-semibold text-slate-900">
//                         {project.title}
//                       </h3>
//                       <p className="mt-1 text-sm text-slate-500">
//                         {project.location}
//                       </p>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Button
//                         asChild
//                         variant="ghost"
//                         className="px-3 py-2 rounded-md border border-slate-100 shadow-sm"
//                       >
//                         <button
//                           aria-label={`Open ${project.title}`}
//                           onClick={() => setActive(project)}
//                           className="inline-flex items-center gap-2 text-sm"
//                         >
//                           Preview
//                           <ExternalLink className="h-4 w-4" />
//                         </button>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Footer - moved to bottom to keep consistent placement across cards */}
//                 <div className="mt-6 flex items-center justify-between">
//                   <p className="text-sm text-slate-600">
//                     High-quality finishes • 1,200 sqft+
//                   </p>
//                   <Link
//                     href="/portfolio"
//                     className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
//                     aria-label={`View ${project.title} in portfolio`}
//                   >
//                     View Project
//                     <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-10 flex items-center justify-center">
//           <Button asChild variant="outline" className="rounded-full px-6 py-3">
//             <Link href="/portfolio" className="inline-flex items-center gap-3">
//               See all projects <ArrowRight className="h-4 w-4" />
//             </Link>
//           </Button>
//         </div>

//         {/* Light decorative footer line */}
//         <div className="mt-2 pt-8 text-center text-sm text-slate-500">
//           Curious about a project you saw?{" "}
//           <Link
//             href="/contact"
//             className="text-indigo-600 font-medium hover:underline"
//           >
//             Get in touch
//           </Link>
//         </div>
//       </div>

//       {/* Simple modal / preview (rendered in place) */}
//       {active && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-10"
//         >
//           <div
//             className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setActive(null)}
//           />

//           <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
//             <div className="relative h-96 w-full">
//               {/* active is definitely non-null here because of the guard above */}
//               <Image
//                 src={active.image}
//                 alt={active.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div className="p-6">
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 className="text-2xl font-bold">{active.title}</h3>
//                   <p className="text-sm text-slate-500 mt-1">
//                     {active.location}
//                   </p>
//                 </div>

//                 <button
//                   className="text-slate-400 hover:text-slate-600"
//                   onClick={() => setActive(null)}
//                   aria-label="Close preview"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <p className="mt-4 text-slate-600">
//                 A short project summary can go here. Mention client needs,
//                 materials used and any notable challenge solved.
//               </p>

//               <div className="mt-6 flex items-center gap-3">
//                 <Button asChild>
//                   <a
//                     href="/portfolio"
//                     className="inline-flex items-center gap-2"
//                   >
//                     Open project <ArrowRight className="h-4 w-4" />
//                   </a>
//                 </Button>
//                 <Link
//                   href="/contact"
//                   className="text-sm text-slate-500 hover:underline"
//                 >
//                   Request a consultation
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  alt: string;
  category: string;
  image: string;
  location: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Residence",
    alt: "Modern Residence, Eswari Builders Pondicherry",
    category: "Residential",
    image: "/projects/1.webp",
    location: "Pondicherry",
  },
  {
    id: 2,
    title: "Commercial Complex",
    alt: "Commercial Complex, Eswari Builders Pondicherry",
    category: "Commercial",
    image: "/projects/2.webp",
    location: "Chennai",
  },
  {
    id: 3,
    title: "Luxury Villa",
    category: "Residential",
    alt: "Luxury Villa, Eswari Builders Pondicherry",
    image: "/projects/3.webp",
    location: "Pondicherry",
  },
  {
    id: 4,
    title: "Office Renovation",
    alt: "Office Renovation, Eswari Builders Pondicherry",
    category: "Commercial",
    image: "/projects/4.webp",
    location: "Bengaluru",
  },
];

export default function FeaturedProjects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c8a97e]" />
              <span
                className="text-[#c8a97e] tracking-[0.25em] text-xs uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Portfolio
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Featured
              <br />
              <span className="italic text-[#c8a97e]">Projects</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 border border-[#c8a97e]/60 text-[#c8a97e] px-7 py-3 text-xs tracking-widest uppercase hover:bg-[#c8a97e] hover:text-[#0a0a0a] transition-all duration-300 self-start md:self-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View All
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-[#0a0a0a] overflow-hidden cursor-pointer"
              onClick={() => setActive(project)}
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  priority={project.id === 1}
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

                {/* Category pill */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[#c8a97e] text-[10px] tracking-[0.2em] uppercase border border-[#c8a97e]/40 px-2.5 py-1 bg-black/40 backdrop-blur-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Preview icon — appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 border border-[#c8a97e] flex items-center justify-center text-[#c8a97e] text-lg">
                    +
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 border-t border-white/10 group-hover:border-[#c8a97e]/30 transition-colors duration-300">
                {/* Gold corner accent */}
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#c8a97e]/0 group-hover:border-[#c8a97e]/60 transition-all duration-300" />

                <h3
                  className="text-white text-base font-light mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-[#666] text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <p
            className="text-[#666] text-xs tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Craft · Detail · Impact
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

      {/* Modal */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setActive(null)}
          />

          <div className="relative max-w-3xl w-full bg-[#111] border border-white/10">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c8a97e]/60 z-10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c8a97e]/60 z-10" />

            {/* Image */}
            <div className="relative h-72 md:h-96 w-full">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase text-[#c8a97e] mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {active.category} · {active.location}
                  </p>
                  <h3
                    className="text-2xl font-light text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {active.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActive(null)}
                  className="text-[#666] hover:text-[#c8a97e] transition-colors duration-300 text-lg leading-none mt-1"
                >
                  ✕
                </button>
              </div>

              <div className="w-full h-px bg-white/10 mb-6" />

              <p
                className="text-[#888] text-sm leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                A thoughtfully designed space built with precision and quality
                materials. Every detail crafted to meet the client's vision
                while ensuring structural integrity and lasting finish.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-3 bg-[#c8a97e] text-[#0a0a0a] px-7 py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#b8996e] transition-all duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="text-xs tracking-widest uppercase text-[#666] hover:text-[#c8a97e] transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
