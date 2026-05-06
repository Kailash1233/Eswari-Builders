// "use client";

// import type React from "react";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({ name: "", email: "", phone: "", message: "" });

//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);
//     }, 1500);
//   };

//   return (
//     <section className="py-20 bg-white relative">
//       <div className="container mx-auto px-4">
//         {/* Two-Column Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
//             <h2 className="text-3xl font-bold mb-4 text-slate-900">
//               Send Us a Message
//             </h2>
//             <p className="text-slate-600 mb-8">
//               Fill out the form below and we&apos;ll get back to you as soon as
//               possible.
//             </p>

//             {isSubmitted && (
//               <div className="bg-green-50 border border-green-200 text-green-800 p-6 mb-6 rounded-lg">
//                 <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
//                 <p>
//                   Your message has been sent successfully. We&apos;ll get back
//                   to you shortly.
//                 </p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-slate-700 mb-1"
//                 >
//                   Full Name *
//                 </label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="bg-white border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-slate-700 mb-1"
//                 >
//                   Email Address *
//                 </label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="bg-white border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-slate-700 mb-1"
//                 >
//                   Phone Number *
//                 </label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="bg-white border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-slate-700 mb-1"
//                 >
//                   Message *
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="bg-white min-h-[150px] border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 />
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-black text-white border border-slate-300 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 hover:bg-black/90 hover:text-white/90"
//               >
//                 {isSubmitting ? "Sending..." : "Get a Quote"}
//               </Button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
//             <h2 className="text-3xl font-bold mb-4 text-slate-900">
//               Contact Information
//             </h2>
//             <p className="text-slate-600 mb-8">
//               Feel free to reach out to us using any of the contact methods
//               below.
//             </p>

//             <div className="space-y-6">
//               {/* Address */}
//               <div className="flex items-start">
//                 <MapPin className="h-6 w-6 mr-4 mt-1 text-indigo-600" />
//                 <div>
//                   <h3 className="font-bold text-slate-900 mb-1">Address</h3>
//                   <p className="text-slate-600">
//                     112, Kamatchi Amman Kovil St, <br />
//                     Heritage Town, Puducherry, 605001
//                     <br />
//                     India
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start">
//                 <Phone className="h-6 w-6 mr-4 mt-1 text-indigo-600" />
//                 <div>
//                   <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
//                   <p className="text-slate-600">+91 90920 97190</p>
//                   <p className="text-slate-600">+91 87784 02742</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start">
//                 <Mail className="h-6 w-6 mr-4 mt-1 text-indigo-600" />
//                 <div>
//                   <h3 className="font-bold text-slate-900 mb-1">Email</h3>
//                   <p className="text-slate-600">eswaribuilders2018@gmail.com</p>
//                 </div>
//               </div>

//               {/* Working Hours */}
//               <div className="flex items-start">
//                 <Clock className="h-6 w-6 mr-4 mt-1 text-indigo-600" />
//                 <div>
//                   <h3 className="font-bold text-slate-900 mb-1">
//                     Working Hours
//                   </h3>
//                   <p className="text-slate-600">
//                     Monday - Friday: 9:00 AM - 6:00 PM
//                   </p>
//                   <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM</p>
//                   <p className="text-slate-600">Sunday: Closed</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import type React from "react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("message", formData.message);

      const res = await fetch("https://formspree.io/f/xeenelpo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />

      {/* Success overlay */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setStatus(null)}
          />
          <div className="relative bg-[#111] border border-[#c8a97e]/40 p-10 max-w-md w-full text-center">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c8a97e]/60" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c8a97e]/60" />

            <div
              className="text-[#c8a97e] text-4xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ✦
            </div>
            <h3
              className="text-2xl font-light text-white mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Message Received
            </h3>
            <p
              className="text-[#888] text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Thank you for reaching out. Our team will get back to you within
              24 hours.
            </p>
            <button
              onClick={() => setStatus(null)}
              className="inline-flex items-center gap-2 border border-[#c8a97e]/60 text-[#c8a97e] px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-[#c8a97e] hover:text-[#0a0a0a] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c8a97e]" />
            <span
              className="text-[#c8a97e] tracking-[0.25em] text-xs uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get In Touch
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let&apos;s Build Your
            <br />
            <span className="italic text-[#c8a97e]">Dream Together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* LEFT — Form */}
          <div className="relative pr-0 lg:pr-14 pb-14 lg:pb-0">
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#c8a97e]/40" />

            {status === "error" && (
              <div
                className="mb-6 text-xs text-red-400 tracking-wide"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 pt-8">
              {[
                { id: "name", label: "Full Name", type: "text" },
                { id: "email", label: "Email Address", type: "email" },
                { id: "phone", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <label
                    htmlFor={field.id}
                    className="block text-[10px] tracking-[0.2em] uppercase text-[#666] mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#c8a97e] outline-none text-white text-sm py-2.5 transition-colors duration-300 placeholder:text-[#444]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[0.2em] uppercase text-[#666] mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#c8a97e] outline-none text-white text-sm py-2.5 resize-none transition-colors duration-300 placeholder:text-[#444]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-3 border border-[#c8a97e]/60 text-[#c8a97e] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#c8a97e] hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {isSubmitting ? "Sending..." : "Get a Quote"}
                  {!isSubmitting && (
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT — Contact Info */}
          <div className="relative pl-0 lg:pl-14 pt-14 lg:pt-0">
            <div className="space-y-10">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  lines: [
                    "112, Kamatchi Amman Kovil St,",
                    "Heritage Town, Puducherry 605001",
                    "India",
                  ],
                },
                {
                  icon: Phone,
                  label: "Phone",
                  lines: ["+91 90920 97190", "+91 87784 02742"],
                },
                {
                  icon: Mail,
                  label: "Email",
                  lines: ["eswaribuilders2018@gmail.com"],
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  lines: [
                    "Mon – Fri: 9:00 AM – 6:00 PM",
                    "Saturday: 9:00 AM – 1:00 PM",
                    "Sunday: Closed",
                  ],
                },
              ].map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex gap-5 group">
                  <div className="mt-0.5 w-8 h-8 border border-white/10 group-hover:border-[#c8a97e]/40 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon className="w-3.5 h-3.5 text-[#c8a97e]" />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase text-[#666] mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {label}
                    </p>
                    {lines.map((line, i) => (
                      <p
                        key={i}
                        className="text-[#888] text-sm leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent opacity-40" />
    </section>
  );
}
