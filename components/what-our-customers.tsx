"use client";

import Image from "next/image";

export default function WhatOurCustomers() {
  return (
    <section className="md:pb-20 md:p-16 pb-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="md:text-5xl text-4xl font-bold mb-12 font-merriweather-sans">
          What Our Customers
          <br /> Say About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#121212] text-white border border-white/20 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 fill-current text-yellow-400"
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
  );
}
