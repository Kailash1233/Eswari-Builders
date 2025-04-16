"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl">
            ESWARI BUILDERS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-black font-medium">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-black text-white hover:bg-black/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
                    ESWARI BUILDERS
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-xl font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Button asChild className="w-full bg-black text-white hover:bg-black/90">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
