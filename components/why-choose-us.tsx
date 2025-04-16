import { Award, Clock, Palette, Users, CheckCircle } from "lucide-react"

const features = [
  {
    icon: <Clock className="h-10 w-10" />,
    title: "15+ Years of Experience",
    description: "Over a decade and a half of excellence in the construction industry.",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "1000+ sq. ft. of Completed Projects",
    description: "A vast portfolio of successful residential and commercial projects.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Custom-Made Design Solutions",
    description: "Tailored designs that reflect your unique style and requirements.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Professional & Transparent Service",
    description: "Clear communication and professional service throughout your project.",
  },
  {
    icon: <CheckCircle className="h-10 w-10" />,
    title: "On-Time & Budget Delivery",
    description: "We value your time and money, ensuring timely completion within budget.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            At Eswari Builders, we pride ourselves on delivering exceptional quality and service. Here's why our clients
            choose us for their construction needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-white/20 p-8 flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
