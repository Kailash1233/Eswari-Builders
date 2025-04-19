// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Menu, X } from "lucide-react"

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Our Services", href: "/services" },
//   { name: "Our Portfolio", href: "/portfolio" },
//   { name: "Contact Us", href: "/contact" },
// ]

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="bg-white border-b border-gray-200">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="font-bold text-2xl">
//             ESWARI BUILDERS
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link key={item.name} href={item.href} className="text-gray-700 hover:text-black font-medium">
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <Button asChild className="bg-black text-white hover:bg-black/90">
//               <Link href="/contact">Get a Quote</Link>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//               <div className="flex flex-col h-full">
//                 <div className="flex items-center justify-between mb-8">
//                   <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
//                     ESWARI BUILDERS
//                   </Link>
//                   <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
//                     <X className="h-6 w-6" />
//                     <span className="sr-only">Close menu</span>
//                   </Button>
//                 </div>
//                 <nav className="flex flex-col space-y-6">
//                   {navigation.map((item) => (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       className="text-xl font-medium"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </nav>
//                 <div className="mt-auto pt-8">
//                   <Button asChild className="w-full bg-black text-white hover:bg-black/90">
//                     <Link href="/contact" onClick={() => setIsOpen(false)}>
//                       Get a Quote
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handletoggle = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-xl backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
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
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <Button asChild className="bg-white text-black hover:bg-white/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div> */}

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
              className="w-[300px] sm:w-[400px] bg-white/20 backdrop-blur-lg text-white font-merriweather-sans border-l border-white/10 shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
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
                    {/* <X className="h-6 w-6" /> */}
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navigation.map((item) => (
                    <Link
                      onClick={handletoggle}
                      href={item.href}
                      className="text-xl hover:text-yellow-600 font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
