"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
      { name: "Residential Construction", href: "/services" },
      { name: "Commercial Projects", href: "/commercialService" },
      { name: "Renovation", href: "/renovationService" },
      { name: "Interior Design", href: "/interiorService" },
      { name: "Architectural Service", href: "/architecturalService" },
    ],
  },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const activeSection = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const sectionActive = (() => {
  //   setActiveSection(true)
  // })

  const toggleDropDown = (indx: string) => {
    if (activeDropDown === indx) {
      setActiveDropDown(null);
    } else {
      setActiveDropDown(indx);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropDown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAFAFAB2] shadow-xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            {/* <img
              src="/logo.png"
              alt="Eswari Builders Logo"
              className="h-10 w-10 md:h-20 md:w-20 bg-white rounded-full object-contain"
            /> */}
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
                      e.stopPropagation(); // prevent closing on body click
                      toggleDropDown(item.name);
                    }}
                    className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-yellow-600 ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`ml-1 transition-transform duration-300 ${
                        activeDropDown === item.name ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors duration-300 hover:text-yellow-600 ${
                      isScrolled ? "text-black" : "text-white"
                    } ${
                      activeSection === item.href
                        ? "bg-[#0E0E0E] text-white"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-60 p-6 rounded-md bg-white shadow-lg origin-top transform transition-all duration-300 ease-in-out z-50 ${
                      activeDropDown === item.name
                        ? "opacity-100 translate-y-0 scale-y-100"
                        : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"
                    }`}
                  >
                    {item.subItems?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-2 px-2 rounded  hover:bg-gray-100 text-sm"
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
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu
                  className={`h-6 w-6 transition-colors ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] p-2 bg-white rounded-tl-xl rounded-bl-xl text-black font-merriweather-sans border-l border-white/10 shadow-lg"
            >
              <div className="flex flex-col w-full h-full">
                <div className="flex items-center justify-between pt-6 px-4 mb-8">
                  <Link
                    href="/"
                    className="font-bold text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    ESWARI BUILDERS
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <nav className="flex flex-col space-y-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col w-full"
                      ref={item.dropdown ? dropdownRef : null}
                    >
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropDown(item.name);
                            }}
                            className={`text-xl font-medium flex items-center w-full px-4 py-3 justify-between hover:text-yellow-600 ${
                              activeSection === item.href
                                ? "bg-[#0E0E0E] text-white w-full"
                                : ""
                            }`}
                          >
                            {item.name}
                            <span className="ml-2">
                              <ChevronDown
                                className={`ml-2 transition-transform duration-300 ${
                                  activeDropDown === item.name
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
                              />
                            </span>
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              activeDropDown === item.name
                                ? "max-h-[500px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className=" w-full px-6 py-4 flex flex-col space-y-3 text-white">
                              {item.subItems?.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className={`text-base w-full px-4 py-2 hover:text-yellow-600 ${
                                    activeSection === sub.href
                                      ? "font-semibold bg-[#0E0E0E] text-white block w-full"
                                      : ""
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveDropDown(null);
                                    setIsOpen(false);
                                  }}
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
                          onClick={() => setIsOpen(false)}
                          className={`text-xl hover:text-yellow-600 w-full px-4 py-3 font-medium ${
                            activeSection === item.href
                              ? "bg-[#0E0E0E] text-white"
                              : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
    </header>
  );
}
