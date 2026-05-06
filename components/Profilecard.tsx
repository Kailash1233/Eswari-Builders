"use client";

import Image from "next/image";

export default function ProfileCard() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch min-h-[620px]">
          {/* LEFT - Portrait Image Panel */}
          <div className="relative">
            {/* Gold corner accent */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#c8a97e]/50 z-10" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#c8a97e]/50 z-10 lg:hidden" />

            <div className="relative h-[540px] lg:h-full w-full overflow-hidden">
              <Image
                src="/team/Prabhu.webp"
                alt="Prabhu Ram N - Managing Director, Eswari Builders Pondicherry"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Portrait gradient — fades bottom on mobile, right edge on desktop */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a0a0a]" /> */}
            </div>
          </div>

          {/* RIGHT - Content Panel */}
          <div className="relative flex flex-col justify-center px-4 py-12 lg:px-14">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c8a97e]" />
              <span
                className="text-[#c8a97e] tracking-[0.25em] text-xs uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Leadership
              </span>
            </div>

            {/* Name */}
            <h2
              className="text-5xl md:text-6xl font-light text-white mb-2 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Prabhu
              <br />
              <span className="italic text-[#c8a97e]">Ram N</span>
            </h2>

            {/* Title */}
            <p
              className="text-sm tracking-widest text-[#888] uppercase mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Managing Director & Operations Head
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-10" />

            {/* Bio */}
            <p
              className="text-[#aaa] leading-relaxed text-base mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Eswari Builders is a trusted name in premium residential and
              commercial construction in Pondicherry — built on integrity,
              craftsmanship, and deep community roots.
            </p>
            <p
              className="text-[#888] leading-relaxed text-sm mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              With over 22 years of experience across real estate, space
              selling, and customer-focused industries, we bring local insight,
              strong project management, and an unwavering commitment to quality
              in every build.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { value: "22+", label: "Years" },
                { value: "150+", label: "Projects" },
                { value: "500+", label: "Families" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center border border-white/10 rounded-sm py-4"
                >
                  <p
                    className="text-2xl font-light text-[#c8a97e] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase text-[#666]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href="/about"
                className="group inline-flex items-center gap-3 border border-[#c8a97e]/60 text-[#c8a97e] px-7 py-3 text-sm tracking-widest uppercase hover:bg-[#c8a97e] hover:text-[#0a0a0a] transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Read More
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />
    </section>
  );
}
