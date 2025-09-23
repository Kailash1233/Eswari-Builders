"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const whatsappNumber = "919092097190";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://www.instagram.com/eswaribuilderspy";
  const facebookLink = "https://www.facebook.com/EswariBuilders2018";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu automatically on navigation change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropDown(null);
  }, [pathname]);

  // click outside to close menus
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

  const toggleDropDown = (name: string) => {
    setActiveDropDown((prev) => (prev === name ? null : name));
  };

  // colors (change these hex values if you want closer match)
  const menuBg = "bg-[#2b2928]"; // dark menu background (reference-like)
  const accentGreen = "text-[#25D366]"; // whatsapp green for icon/accents
  const itemHover = "hover:text-yellow-500"; // desktop hover (kept)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <span
                className={`font-bold text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                ESWARI BUILDERS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={item.dropdown ? dropdownRef : null}
                >
                  {item.dropdown ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropDown(item.name);
                      }}
                      className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                        isScrolled ? "text-black" : "text-white"
                      } ${itemHover}`}
                      aria-expanded={activeDropDown === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`ml-1 transition-transform duration-300 ${
                          activeDropDown === item.name
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors duration-300 ${
                        isScrolled ? "text-black" : "text-white"
                      } ${itemHover}`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-60 p-4 rounded-md bg-white shadow-lg origin-top transform transition-all duration-300 ease-in-out z-50 ${
                        activeDropDown === item.name
                          ? "opacity-100 translate-y-0 scale-y-100"
                          : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"
                      }`}
                    >
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="py-2 px-2 rounded hover:bg-gray-100 text-sm block border-b border-gray-200 pb-2 mb-2"
                          onClick={() => setActiveDropDown(null)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className={`p-2 rounded-md ${
                  isScrolled ? "bg-white/10" : "bg-black/10"
                } hover:bg-white/20 transition`}
              >
                <span className="sr-only">Toggle mobile menu</span>
                {mobileOpen ? (
                  <X
                    className={`${
                      isScrolled ? "text-black" : "text-white"
                    } h-6 w-6`}
                  />
                ) : (
                  <Menu
                    className={`${
                      isScrolled ? "text-black" : "text-white"
                    } h-6 w-6`}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown panel (below header) */}
          <div
            id="mobile-menu"
            ref={mobileRef}
            className={`md:hidden w-full transition-all duration-300 origin-top z-40 ${
              mobileOpen
                ? "max-h-[1200px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`mx-4 mt-2 rounded-xl shadow-lg overflow-hidden ${menuBg} text-white`}
            >
              {/* top area with brand + close */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                <Link
                  href="/"
                  className="font-bold text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  ESWARI BUILDERS
                </Link>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-md bg-white/5"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>
              </div>

              {/* menu items */}
              <nav className="px-2 py-3">
                {navigation.map((item) => (
                  <div key={item.name} className="border-b border-white/6">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropDown(item.name);
                          }}
                          className={`w-full text-left px-4 py-3 flex items-center justify-between font-medium ${
                            activeDropDown === item.name
                              ? "bg-white/6"
                              : "bg-transparent"
                          } transition`}
                          aria-expanded={activeDropDown === item.name}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`ml-2 transition-transform duration-300 ${
                              activeDropDown === item.name
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeDropDown === item.name
                              ? "max-h-[600px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-4 pb-3 pt-1 flex flex-col space-y-1">
                            {item.subItems?.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setActiveDropDown(null);
                                }}
                                className={`block px-3 py-2 rounded-md text-sm ${
                                  pathname === sub.href
                                    ? "font-semibold bg-white/8"
                                    : "hover:bg-white/6"
                                }`}
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
                        className={`block px-4 py-3 text-md ${
                          pathname === item.href
                            ? "font-semibold bg-white/8"
                            : "hover:bg-white/6"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* bottom area - small footer / CTA */}
              <div className="px-4 py-4 border-t border-white/10">
                <div>
                  <p className="text-sm">
                    Need help? <br className="md:hidden" /> Reach out on
                    WhatsApp
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="mt-3 flex">
                  <a
                    href={whatsappLink}
                    className="inline-flex items-center px-3 py-2 rounded-full bg-white/6 hover:bg-white/10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/WhatsApp_icon.png"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm ml-2">Chat</span>
                  </a>
                </div>

                {/* Instagram + Facebook below WhatsApp */}
                <div className="mt-4">
                  <p className="text-sm mb-2">Follow us on Socials</p>
                  <div className="flex items-center space-x-3">
                    {/* Instagram */}
                    <a
                      href={instagramLink}
                      className="p-2 rounded-full bg-white/6 hover:bg-white/10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/Instagram.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                      />
                    </a>

                    {/* Facebook */}
                    <a
                      href={facebookLink}
                      className="p-2 rounded-full bg-white/6 hover:bg-white/10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/facebook.webp"
                        alt="Facebook"
                        width={20}
                        height={20}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
