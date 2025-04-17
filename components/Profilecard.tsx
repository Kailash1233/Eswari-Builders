"use client";

import Image from "next/image";

export default function ProfileCard() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Radial grid pattern */}
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-black">
          {/* Image on the left */}
          <div className="relative w-full h-[450px] rounded-[30px] overflow-hidden">
            <Image
              src="/team/Prabhu.jpg"
              alt="Prabhu Ram N"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>

          {/* Content on the right */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Prabhu Ram N
            </h2>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              CEO, Eswari Builders
            </p>
            <p className="text-gray-800 mb-4">
              Eswari Builders is a trusted name in premium residential and
              commercial construction in Pondicherry.
            </p>
            <p className="text-gray-800 mb-6">
              With over 22 years of experience across real estate, space
              selling, and customer-focused industries, we bring deep local
              insight, strong project management, and a commitment to quality in
              every build.
            </p>
            <button className="inline-block px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
