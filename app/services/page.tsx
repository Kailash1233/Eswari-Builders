import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Building,
  Calculator,
  ClipboardList,
  Home,
  Factory,
  CreditCard,
  Building2,
  Flower2,
  Wifi,
  PenTool,
  Armchair,
} from "lucide-react"

const constructionServices = [
  {
    icon: <ClipboardList className="h-10 w-10" />,
    title: "Planning",
    description: "Comprehensive planning services to lay the foundation for your construction project.",
  },
  {
    icon: <Calculator className="h-10 w-10" />,
    title: "Estimation",
    description: "Accurate cost estimation to help you budget your construction project effectively.",
  },
  {
    icon: <Building className="h-10 w-10" />,
    title: "Contracting Work",
    description: "Professional contracting services for all types of construction projects.",
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Budget & Luxury Homes",
    description: "Custom home construction solutions for every budget and preference.",
  },
  {
    icon: <Factory className="h-10 w-10" />,
    title: "Residential / Industrial & Commercial Buildings",
    description: "Specialized construction services for residential, industrial, and commercial projects.",
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Home Loan Assistance",
    description: "Guidance and support in securing home loans for your construction project.",
  },
]

const interiorServices = [
  {
    icon: <Home className="h-10 w-10" />,
    title: "Residential Interiors",
    description: "Transform your home with our custom residential interior design services.",
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Commercial Interiors",
    description: "Create impressive commercial spaces that reflect your brand identity.",
  },
  {
    icon: <Flower2 className="h-10 w-10" />,
    title: "Balcony Ideas",
    description: "Innovative balcony design solutions to maximize your outdoor space.",
  },
  {
    icon: <Wifi className="h-10 w-10" />,
    title: "Home Automation",
    description: "Smart home automation solutions for modern, convenient living.",
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "Architectural Services",
    description: "Expert architectural services to bring your vision to life.",
  },
  {
    icon: <Armchair className="h-10 w-10" />,
    title: "Exquisite Furniture",
    description: "Custom furniture solutions to complement your interior design.",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image src="/placeholder.svg?height=800&width=1920" alt="Our Services" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprehensive construction and interior design services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Construction Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Construction Services</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-12">
            From planning to execution, we offer a complete range of construction services to bring your vision to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionServices.map((service, index) => (
              <div key={index} className="border border-gray-200 p-8 transition-all hover:shadow-md">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior & Design Services */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Interior & Design Services</h2>
          <h3 className="text-xl font-medium mb-12 text-center text-white/80">under 'Neela's Trend My Space'</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interiorServices.map((service, index) => (
              <div key={index} className="border border-white/20 p-8 transition-all hover:bg-white/5">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Service Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "We begin with a detailed consultation to understand your needs and vision.",
              },
              {
                number: "02",
                title: "Planning & Design",
                description: "Our experts create a comprehensive plan and design for your project.",
              },
              {
                number: "03",
                title: "Execution",
                description: "We execute the project with precision, keeping you informed at every step.",
              },
              {
                number: "04",
                title: "Delivery",
                description: "We deliver the completed project on time and within budget.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-black text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your construction and interior design needs.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/contact">
              Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
