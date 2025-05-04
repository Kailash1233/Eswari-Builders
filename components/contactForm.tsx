// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

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

//       // Reset success message after 5 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);
//     }, 1500);
//   };

//   return (
//     <div className="w-full bg-[#F7F7F7] py-12 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10">
//         <h2 className="text-3xl font-bold text-center mb-4">
//           Send Us a Message
//         </h2>
//         <p className="text-gray-600 text-center mb-8">
//           Fill out the form below and we'll get back to you as soon as possible.
//         </p>

//         {isSubmitted && (
//           <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
//             <h3 className="text-lg font-semibold mb-1">Thank You!</h3>
//             <p>
//               Your message has been sent successfully. We'll get back to you
//               shortly.
//             </p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Full Name <span className="text-red-500">*</span>
//             </label>
//             <Input
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Email Address <span className="text-red-500">*</span>
//             </label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Phone Number <span className="text-red-500">*</span>
//             </label>
//             <Input
//               id="phone"
//               name="phone"
//               type="tel"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Message <span className="text-red-500">*</span>
//             </label>
//             <Textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full min-h-[150px] border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
//             />
//           </div>

//           {/* Submit */}
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-black text-white py-3 text-lg font-medium rounded-md hover:bg-black/90 transition"
//           >
//             {isSubmitting ? "Sending..." : "Get a Quote"}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {isSubmitted && (
                <div className="bg-black text-white p-6 mb-6">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-black/90"
                >
                  {isSubmitting ? "Sending..." : "Get a Quote"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                Feel free to reach out to us using any of the contact methods
                below.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-700">
                      112, Kamatchi Amman Kovil St, <br />
                      Heritage Town, Puducherry, 605001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-700">+91 90920 97190</p>
                    <p className="text-gray-700">+91 87784 02742</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-700">
                      eswaribuilders2018@gmail.com
                    </p>
                    {/* <p className="text-gray-700">contact@eswaribuilders.com</p> */}
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Working Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
