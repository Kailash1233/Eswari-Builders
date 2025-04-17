export default function WhyChooseUs() {
  return (
    <section className="pb-16 md:py-24 px-4 md:px-8 mx-auto container">
      <div className="mb-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-0.5 bg-black"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-merriweather-sans">
            Why Us?
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Lighting Design */}
        <div className="space-y-4">
          <div className="h-16 w-16">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Lighting Design</h3>
          <p className="text-gray-700 leading-relaxed">
            Achieve the perfect balance of ambient, task, and accent lighting
            for a functional atmosphere
          </p>
        </div>

        {/* Interior Design */}
        <div className="space-y-4">
          <div className="h-16 w-16">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Interior Design</h3>
          <p className="text-gray-700 leading-relaxed">
            From concept to completion, we oversee every detail to bring your
            vision to life efficiently
          </p>
        </div>

        {/* Outdoor Design */}
        <div className="space-y-4">
          <div className="h-16 w-16">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <path d="M12 22c4.97 0 9-2.24 9-5s-4.03-5-9-5-9 2.24-9 5 4.03 5 9 5z" />
              <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path d="M7 15.64C7 13.5 9.24 12 12 12s5 1.5 5 3.64" />
              <path d="M5 5v14" />
              <path d="M19 5v14" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Outdoor Design</h3>
          <p className="text-gray-700 leading-relaxed">
            Celebrate the changing seasons with our seasonal outdoor decor
            services
          </p>
        </div>
      </div>
    </section>
  );
}
