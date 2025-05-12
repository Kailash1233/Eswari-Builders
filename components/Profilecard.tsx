"use client";

import Image from "next/image";

export default function ProfileCard() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-black">
          {/* Image on the left */}
          <div className="relative w-full h-[450px] rounded-[30px] overflow-hidden">
            <Image
              src="/team/Prabhu.webp"
              alt="Prabhu Ram N"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>

          {/* Content on the right */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
              Prabhu Ram N
            </h2>
            <p className="text-lg font-semibold text-[#999999] mb-4">
              CEO, Eswari Builders
            </p>
            <p className="text-[#999999] mb-4">
              Eswari Builders is a trusted name in premium residential and
              commercial construction in Pondicherry.
            </p>
            <p className="text-[#999999] mb-6">
              With over 22 years of experience across real estate, space
              selling, and customer-focused industries, we bring deep local
              insight, strong project management, and a commitment to quality in
              every build.
            </p>
            <button className="inline-block px-5 py-2 rounded-md bg-white hover:bg-white text-black rounded-xl font-semibold shadow-md transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.4)]">
              <a href="/about">Read more</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
