// import React from "react";

// export default function StatisticsBar() {
//   const stats = [
//     {
//       value: "24+",
//       description: "Years of Experience",
//     },
//     {
//       value: "300+",
//       description: "Projects Completed",
//     },
//     {
//       value: "100000+",
//       description: "Built-up Area",
//     },
//   ];

//   return (
//     <div className="w-full py-28 px-4">
//       <div className="max-w-7xl mx-auto flex flex-col md:pt-6 md:flex-row justify-between items-center gap-8">
//         {stats.map((stat, index) => (
//           <React.Fragment key={index}>
//             <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 px-4">
//               <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-2">
//                 {stat.value}
//               </h2>
//               <p className="text-[#999999] text-lg">{stat.description}</p>
//             </div>

//             {index < stats.length - 1 && (
//               <div className="hidden md:block h-16 w-px bg-gray-300 mx-4"></div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";

export default function StatisticsBar() {
  const stats = [
    { value: "24+", label: "Years", description: "of Experience" },
    { value: "300+", label: "Projects", description: "Completed" },
    { value: "100,000+", label: "Sq. ft.", description: "Built-up Area" },
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden">
      {/* Top accent line */}
      {/* <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" /> */}

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start text-center md:text-left px-8 py-10 md:py-6 first:pl-0 last:pr-0 group"
            >
              {/* Eyebrow line */}
              <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-px w-5 bg-[#c8a97e]" />
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="text-5xl md:text-6xl font-light text-[#c8a97e]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </span>
              </div>

              <p
                className="text-[10px] tracking-[0.25em] uppercase text-[#666] mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </p>
              <p
                className="text-sm text-[#888]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />
    </section>
  );
}
