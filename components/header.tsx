// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   {
//     name: "Our Services",
//     href: "/services",
//     dropdown: true,
//     subItems: [
//       { name: "Residential Services", href: "/services" },
//       { name: "Commercial Services", href: "/commercialService" },
//       { name: "Renovation Services", href: "/renovationService" },
//       { name: "Interior Design Services", href: "/interiorService" },
//       { name: "Architectural Service", href: "/architecturalService" },
//     ],
//   },
//   { name: "Our Portfolio", href: "/portfolio" },
//   { name: "Contact Us", href: "/contact" },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropDown, setActiveDropDown] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const mobileRef = useRef<HTMLDivElement | null>(null);
//   const pathname = usePathname();

//   const whatsappNumber = "919092097190";
//   const whatsappLink = `https://wa.me/${whatsappNumber}`;
//   const instagramLink = "https://www.instagram.com/eswaribuilderspy";
//   const facebookLink = "https://www.facebook.com/EswariBuilders2018";
//   const youtubeLink =
//     "https://youtube.com/@eswaribuilders-q4e?si=r_J-QJMNdl-IdNO8";

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // close mobile menu automatically on navigation change
//   useEffect(() => {
//     setMobileOpen(false);
//     setActiveDropDown(null);
//   }, [pathname]);

//   // click outside to close menus
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       const target = e.target as Node;
//       if (
//         mobileRef.current &&
//         !mobileRef.current.contains(target) &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(target)
//       ) {
//         setMobileOpen(false);
//         setActiveDropDown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleDropDown = (name: string) => {
//     setActiveDropDown((prev) => (prev === name ? null : name));
//   };

//   const menuBg = "bg-[#2b2928]";
//   const accentGreen = "text-[#25D366]";
//   const itemHover = "hover:text-yellow-500";

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             <Link href="/" className="flex items-center space-x-2">
//               <span
//                 className={`font-bold text-2xl transition-colors duration-300 ${
//                   isScrolled ? "text-black" : "text-white"
//                 }`}
//               >
//                 ESWARI BUILDERS
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               {navigation.map((item) => (
//                 <div
//                   key={item.name}
//                   className="relative"
//                   ref={item.dropdown ? dropdownRef : null}
//                 >
//                   {item.dropdown ? (
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleDropDown(item.name);
//                       }}
//                       className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
//                         isScrolled ? "text-black" : "text-white"
//                       } ${itemHover}`}
//                       aria-expanded={activeDropDown === item.name}
//                     >
//                       <span>{item.name}</span>
//                       <ChevronDown
//                         className={`ml-1 transition-transform duration-300 ${
//                           activeDropDown === item.name
//                             ? "rotate-180"
//                             : "rotate-0"
//                         }`}
//                       />
//                     </button>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       className={`font-medium transition-colors duration-300 ${
//                         isScrolled ? "text-black" : "text-white"
//                       } ${itemHover}`}
//                     >
//                       {item.name}
//                     </Link>
//                   )}

//                   {item.dropdown && (
//                     <div
//                       className={`absolute top-full left-0 mt-2 w-60 p-4 rounded-md ${menuBg} text-white shadow-lg origin-top transform transition-all duration-300 ease-in-out z-50 ${
//                         activeDropDown === item.name
//                           ? "opacity-100 translate-y-0 scale-y-100"
//                           : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"
//                       }`}
//                     >
//                       {item.subItems?.map((sub) => (
//                         <Link
//                           key={sub.name}
//                           href={sub.href}
//                           className="py-2 px-2 rounded text-sm block border-b border-gray-200 pb-2 mb-2"
//                           onClick={() => setActiveDropDown(null)}
//                         >
//                           {sub.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setMobileOpen((s) => !s)}
//                 aria-expanded={mobileOpen}
//                 aria-controls="mobile-menu"
//                 className={`p-2 rounded-md ${
//                   isScrolled ? "bg-white/10" : "bg-black/10"
//                 } hover:bg-white/20 transition`}
//               >
//                 <span className="sr-only">Toggle mobile menu</span>
//                 {mobileOpen ? (
//                   <X
//                     className={`${
//                       isScrolled ? "text-black" : "text-white"
//                     } h-6 w-6`}
//                   />
//                 ) : (
//                   <Menu
//                     className={`${
//                       isScrolled ? "text-black" : "text-white"
//                     } h-6 w-6`}
//                   />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile dropdown panel (below header) */}
//           <div
//             id="mobile-menu"
//             ref={mobileRef}
//             className={`md:hidden w-full transition-all duration-300 origin-top z-40 ${
//               mobileOpen
//                 ? "max-h-[1200px] opacity-100"
//                 : "max-h-0 opacity-0 pointer-events-none"
//             }`}
//           >
//             <div
//               className={`mx-4 mt-2 rounded-xl shadow-lg overflow-hidden ${menuBg} text-white`}
//             >
//               {/* top area with brand + close */}
//               <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
//                 <Link
//                   href="/"
//                   className="font-bold text-lg"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   ESWARI BUILDERS
//                 </Link>
//                 <div className="flex items-center space-x-3">
//                   <button
//                     onClick={() => setMobileOpen(false)}
//                     className="p-2 rounded-md bg-white/5"
//                   >
//                     <X className="h-5 w-5" />
//                     <span className="sr-only">Close menu</span>
//                   </button>
//                 </div>
//               </div>

//               {/* menu items */}
//               <nav className="px-2 py-3">
//                 {navigation.map((item) => (
//                   <div key={item.name} className="border-b border-white/6">
//                     {item.dropdown ? (
//                       <>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toggleDropDown(item.name);
//                           }}
//                           className={`w-full text-left px-4 py-3 flex items-center justify-between font-medium ${
//                             activeDropDown === item.name
//                               ? "bg-white/6"
//                               : "bg-transparent"
//                           } transition`}
//                           aria-expanded={activeDropDown === item.name}
//                         >
//                           <span>{item.name}</span>
//                           <ChevronDown
//                             className={`ml-2 transition-transform duration-300 ${
//                               activeDropDown === item.name
//                                 ? "rotate-180"
//                                 : "rotate-0"
//                             }`}
//                           />
//                         </button>

//                         <div
//                           className={`overflow-hidden transition-all duration-300 ${
//                             activeDropDown === item.name
//                               ? "max-h-[600px] opacity-100"
//                               : "max-h-0 opacity-0"
//                           }`}
//                         >
//                           <div className="px-4 pb-3 pt-1 flex flex-col space-y-1">
//                             {item.subItems?.map((sub) => (
//                               <Link
//                                 key={sub.name}
//                                 href={sub.href}
//                                 onClick={() => {
//                                   setMobileOpen(false);
//                                   setActiveDropDown(null);
//                                 }}
//                                 className={`block px-3 py-2 rounded-md text-sm ${
//                                   pathname === sub.href
//                                     ? "font-semibold bg-white/8"
//                                     : "hover:bg-white/6"
//                                 }`}
//                               >
//                                 {sub.name}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </>
//                     ) : (
//                       <Link
//                         href={item.href}
//                         onClick={() => setMobileOpen(false)}
//                         className={`block px-4 py-3 text-md ${
//                           pathname === item.href
//                             ? "font-semibold bg-white/8"
//                             : "hover:bg-white/6"
//                         }`}
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//               </nav>

//               {/* bottom area - small footer / CTA */}
//               <div className="px-4 py-4 border-t border-white/10">
//                 <div>
//                   <p className="text-sm">
//                     Need help? <br className="md:hidden" /> Reach out on
//                     WhatsApp
//                   </p>
//                 </div>

//                 {/* WhatsApp */}
//                 <div className="mt-3 flex">
//                   <a
//                     href={whatsappLink}
//                     className="inline-flex items-center px-3 py-2 rounded-full bg-white/6 hover:bg-white/10"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <Image
//                       src="/WhatsApp_icon.png"
//                       alt="WhatsApp"
//                       width={20}
//                       height={20}
//                     />
//                     <span className="text-sm ml-2">Chat</span>
//                   </a>
//                 </div>

//                 {/* Instagram + Facebook below WhatsApp */}
//                 <div className="mt-4">
//                   <p className="text-sm mb-2">Follow us on Socials</p>
//                   <div className="flex items-center space-x-3">
//                     {/* Instagram */}
//                     <a
//                       href={instagramLink}
//                       className="p-2 rounded-full bg-white/6 hover:bg-white/10"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <Image
//                         src="/Instagram.png"
//                         alt="Instagram"
//                         width={20}
//                         height={20}
//                       />
//                     </a>

//                     {/* Facebook */}
//                     <a
//                       href={facebookLink}
//                       className="p-2 rounded-full bg-white/6 hover:bg-white/10"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <Image
//                         src="/facebook.webp"
//                         alt="Facebook"
//                         width={20}
//                         height={20}
//                       />
//                     </a>

//                     {/* Youtube */}
//                     <a
//                       href={youtubeLink}
//                       className="p-2 rounded-full bg-white/6 hover:bg-white/10"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <Image
//                         src="/Youtube_logo.png"
//                         alt="Youtube"
//                         width={20}
//                         height={20}
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Services",
    href: "/services",
    dropdown: true,
    subItems: [
      { name: "Residential Services", href: "/services" },
      { name: "Commercial Services", href: "/commercialService" },
      { name: "Renovation Services", href: "/renovationService" },
      { name: "Interior Design Services", href: "/interiorService" },
      { name: "Architectural Service", href: "/architecturalService" },
    ],
  },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

const whatsappLink = "https://wa.me/919092097190";
const instagramLink = "https://www.instagram.com/eswaribuilderspy";
const facebookLink = "https://www.facebook.com/EswariBuilders2018";
const youtubeLink =
  "https://youtube.com/@eswaribuilders-q4e?si=r_J-QJMNdl-IdNO8";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropDown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        mobileRef.current &&
        !mobileRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setMobileOpen(false);
        setActiveDropDown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropDown = (name: string) =>
    setActiveDropDown((prev) => (prev === name ? null : name));

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark */}
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className="text-xl font-light text-white tracking-widest uppercase group-hover:text-[#c8a97e] transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Eswari
            </span>
            <span
              className="text-[9px] tracking-[0.4em] uppercase text-[#c8a97e] mt-0.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Builders
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.dropdown ? dropdownRef : null}
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropDown(item.name);
                      }}
                      className="flex items-center gap-1 text-xs tracking-widest uppercase text-white/70 hover:text-[#c8a97e] transition-colors duration-300"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      aria-expanded={activeDropDown === item.name}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-300 ${
                          activeDropDown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-4 w-64 bg-[#111] border border-white/10 transition-all duration-300 origin-top z-50 ${
                        activeDropDown === item.name
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {/* Gold top accent */}
                      <div className="h-px w-full bg-gradient-to-r from-[#c8a97e]/60 to-transparent" />

                      <div className="p-2">
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setActiveDropDown(null)}
                            className="flex items-center gap-2 px-3 py-2.5 text-xs tracking-widest uppercase text-[#888] hover:text-[#c8a97e] hover:bg-white/5 transition-all duration-200 group"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            <span className="w-0 group-hover:w-3 h-px bg-[#c8a97e] transition-all duration-300 overflow-hidden flex-shrink-0" />
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-[#c8a97e]"
                        : "text-white/70 hover:text-[#c8a97e]"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border border-[#c8a97e]/60 text-[#c8a97e] px-5 py-2 text-[10px] tracking-widest uppercase hover:bg-[#c8a97e] hover:text-[#0a0a0a] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get a Quote
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                →
              </span>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden w-8 h-8 border border-white/20 hover:border-[#c8a97e]/60 flex items-center justify-center text-white hover:text-[#c8a97e] transition-all duration-300"
          >
            {mobileOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={mobileRef}
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen
            ? "max-h-[800px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#0d0d0d] border-t border-white/10">
          {/* Gold top line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

          <nav className="px-6 py-4 divide-y divide-white/10">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropDown(item.name)}
                      className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase text-white/70 hover:text-[#c8a97e] transition-colors duration-300"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-300 ${
                          activeDropDown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropDown === item.name
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-3 flex flex-col gap-1 pl-4 border-l border-[#c8a97e]/30">
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setActiveDropDown(null);
                            }}
                            className="py-2 text-xs tracking-widest uppercase text-[#666] hover:text-[#c8a97e] transition-colors duration-200"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-4 text-xs tracking-widest uppercase transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-[#c8a97e]"
                        : "text-white/70 hover:text-[#c8a97e]"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile bottom */}
          <div className="px-6 py-5 border-t border-white/10 flex items-center justify-between">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#c8a97e]/60 text-[#c8a97e] px-5 py-2.5 text-[10px] tracking-widest uppercase hover:bg-[#c8a97e] hover:text-[#0a0a0a] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get a Quote →
            </a>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {/* Social links */}

              {[
                { href: instagramLink, label: "IG", title: "Instagram" },
                { href: facebookLink, label: "FB", title: "Facebook" },
                { href: youtubeLink, label: "YT", title: "YouTube" },
              ].map(({ href, label, title }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={title}
                  className="w-8 h-8 border border-white/10 hover:border-[#c8a97e]/60 flex items-center justify-center text-[#666] hover:text-[#c8a97e] transition-all duration-300 text-[10px] tracking-widest"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
