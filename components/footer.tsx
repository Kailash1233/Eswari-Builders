// import Link from "next/link";
// import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-[ #1b1b1b] text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Logo and Tagline */}
//           <div>
//             <Link href="/" className="font-bold text-2xl">
//               ESWARI BUILDERS
//             </Link>
//             <p className="mt-4 text-[#f7f7f7]">
//               Building dreams with strength and style since 2002. Premium
//               residential and commercial construction in Pondicherry.
//             </p>
//             <div className="flex space-x-4 mt-6">
//               <Link
//                 href="https://www.instagram.com/eswaribuilderspy"
//                 className="text-white hover:text-white/80"
//               >
//                 <Facebook className="h-5 w-5" />
//                 <span className="sr-only">Facebook</span>
//               </Link>
//               <Link
//                 href="https://www.instagram.com/eswaribuilderspy"
//                 className="text-white hover:text-white/80"
//               >
//                 <Instagram className="h-5 w-5" />
//                 <span className="sr-only">Instagram</span>
//               </Link>
//               <Link
//                 href="https://www.youtube.com/@eswaribuilders-q4e?si=r_J-QJMNdl-IdNO8"
//                 className="text-white hover:text-white/80"
//               >
//                 <Youtube className="h-5 w-5" />
//                 <span className="sr-only">Youtube</span>
//               </Link>
//               {/* <Link href="#" className="text-white hover:text-white/80">
//                 <Twitter className="h-5 w-5" />
//                 <span className="sr-only">Twitter</span>
//               </Link>
//               <Link href="#" className="text-white hover:text-white/80">
//                 <Linkedin className="h-5 w-5" />
//                 <span className="sr-only">LinkedIn</span>
//               </Link> */}
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div className="md:flex  md:justify-center">
//             <div className="md:text-left">
//               <h3 className="font-bold text-[#f7f7f7] text-lg mb-4">
//                 Quick Links
//               </h3>
//               <nav className="flex flex-col space-y-3">
//                 <Link href="/" className="text-[#f7f7f7] hover:text-white">
//                   Home
//                 </Link>
//                 <Link href="/about" className="text-[#f7f7f7] hover:text-white">
//                   About Us
//                 </Link>
//                 <Link
//                   href="/services"
//                   className="text-[#f7f7f7] hover:text-white"
//                 >
//                   Our Services
//                 </Link>
//                 <Link
//                   href="/portfolio"
//                   className="text-[#f7f7f7] hover:text-white"
//                 >
//                   Our Portfolio
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="text-[#f7f7f7] hover:text-white"
//                 >
//                   Contact Us
//                 </Link>
//               </nav>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="font-bold text-[#f7f7f7] text-lg mb-4">
//               Contact Information
//             </h3>
//             <address className="not-italic text-[#f7f7f7] space-y-3">
//               <p>
//                 112, Kamatchi Amman Kovil St, Heritage Town, Puducherry, 605001
//                 India
//               </p>
//               <p>Phone: +91 90920 97190</p>
//               <p>Email: eswaribuilders2018@gmail.com</p>
//               <p>Working Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
//             </address>
//           </div>
//         </div>

//         <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-white/60 text-sm">
//             &copy; {new Date().getFullYear()} Eswari Builders. All rights
//             reserved.
//           </p>

//           <p className="text-white/60 text-sm mt-4 md:mt-0">
//             Built with <span className="text-red-500">❤️</span> by{" "}
//             <Link
//               href="https://adszoo.in"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white font-medium"
//             >
//               Adszoo
//             </Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/portfolio", label: "Our Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

const socials = [
  {
    href: "https://www.facebook.com/EswariBuilders2018",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/eswaribuilderspy",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@eswaribuilders-q4e?si=r_J-QJMNdl-IdNO8",
    icon: Youtube,
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

      {/* Watermark */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 leading-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[18vw] font-light text-white/[0.02] whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Builders
        </span>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 max-w-6xl pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand column */}
          <div>
            {/* Logo / wordmark */}
            <Link href="/" className="inline-block mb-6 group">
              <span
                className="text-2xl font-light text-white tracking-widest uppercase group-hover:text-[#c8a97e] transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Eswari
              </span>
              <span
                className="block text-[10px] tracking-[0.4em] uppercase text-[#c8a97e] mt-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Builders
              </span>
            </Link>

            <p
              className="text-[#666] text-sm leading-relaxed mb-8 max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Building dreams with strength and style since 2002. Premium
              residential and commercial construction in Pondicherry.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-white/10 hover:border-[#c8a97e]/60 flex items-center justify-center text-[#666] hover:text-[#c8a97e] transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-5 bg-[#c8a97e]" />
              <span
                className="text-[#c8a97e] tracking-[0.25em] text-[10px] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Quick Links
              </span>
            </div>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex items-center gap-2 text-sm text-[#666] hover:text-[#c8a97e] transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="w-0 group-hover:w-4 h-px bg-[#c8a97e] transition-all duration-300 overflow-hidden" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-5 bg-[#c8a97e]" />
              <span
                className="text-[#c8a97e] tracking-[0.25em] text-[10px] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact
              </span>
            </div>

            <address
              className="not-italic space-y-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {[
                {
                  label: "Address",
                  value:
                    "112, First Floor, Kamatchi Amman Kovil St,\nHeritage Town, Pondicherry, 605001",
                },
                { label: "Phone", value: "+91 90920 97190\n+91 87784 02742" },
                { label: "Email", value: "eswaribuilders2018@gmail.com" },
                {
                  label: "Hours",
                  value: "Mon – Fri: 9 AM – 6 PM\nSat: 9 AM – 1 PM",
                },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-1">
                    {label}
                  </p>
                  {value.split("\n").map((line, i) => (
                    <p key={i} className="text-sm text-[#888]">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#444] text-xs tracking-wide"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Eswari Builders. All rights reserved.
          </p>

          <p
            className="text-[#444] text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Crafted by{" "}
            <Link
              href="https://adszoo.in"
              target="_blank"
              rel="noreferrer"
              className="text-[#666] hover:text-[#c8a97e] transition-colors duration-300"
            >
              Adszoo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
