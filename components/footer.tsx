import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[ #1b1b1b] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Tagline */}
          <div>
            <Link href="/" className="font-bold text-2xl">
              ESWARI BUILDERS
            </Link>
            <p className="mt-4 text-[#f7f7f7]">
              Building dreams with strength and style since 2004. Premium
              residential and commercial construction in Pondicherry.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-white hover:text-white/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:flex  md:justify-center">
            <div className="md:text-left">
              <h3 className="font-bold text-[#f7f7f7] text-lg mb-4">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-[#f7f7f7] hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-[#f7f7f7] hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-[#f7f7f7] hover:text-white"
                >
                  Our Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-[#f7f7f7] hover:text-white"
                >
                  Our Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="text-[#f7f7f7] hover:text-white"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-[#f7f7f7] text-lg mb-4">
              Contact Information
            </h3>
            <address className="not-italic text-[#f7f7f7] space-y-3">
              <p>
                112, Kamatchi Amman Kovil St, Heritage Town, Puducherry, 605001
                India
              </p>
              <p>Phone: +91 90920 97190</p>
              <p>Email: eswaribuilders2018@gmail.com</p>
              <p>Working Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Eswari Builders. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/60 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 text-sm hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
