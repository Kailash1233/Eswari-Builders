import React from "react";

export default function StatisticsBar() {
  const stats = [
    {
      value: "22+",
      description: "Years of Experience",
    },
    {
      value: "300+",
      description: "Projects Completed",
    },
    {
      value: "10+",
      description: "On-going Projects",
    },
  ];

  return (
    <div className="w-full py-28 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:pt-6 md:flex-row justify-between items-center gap-8">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-2">
                {stat.value}
              </h2>
              <p className="text-[#999999] text-lg">{stat.description}</p>
            </div>

            {index < stats.length - 1 && (
              <div className="hidden md:block h-16 w-px bg-gray-300 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
