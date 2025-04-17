"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
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
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/slider/3.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Get in touch with our team to discuss your construction needs.
          </p>
        </div>
      </section>

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
                      123 Construction Avenue, <br />
                      Pondicherry, 605001, <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-700">+91 98765 43210</p>
                    <p className="text-gray-700">+91 98765 43211</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-700">info@eswaribuilders.com</p>
                    <p className="text-gray-700">contact@eswaribuilders.com</p>
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

          <div className="mt-16 relative w-full h-[300px]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.508996069529!2d79.82641087482334!3d11.939219988289313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53613b8cfeabb5%3A0x8e1334839830a206!2sEswari%20Builders!5e0!3m2!1sen!2sin!4v1744910307470!5m2!1sen!2sin"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen={true}
            /> 
          </div>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-semibold mb-10">
                Visit Our Experience Center @
              </h2>

              <div className="grid grid-cols-1 text-white sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                {[
                  {
                    city: "Chennai",
                    location: "Chromepet & ECR",
                    // icon: "/icons/chennai.svg",
                  },
                  {
                    city: "Coimbatore",
                    location: "Peelamedu",
                    // icon: "/icons/coimbatore.svg",
                  },
                  {
                    city: "Villupuram",
                    location: "..",
                    // icon: "/icons/hyderabad.svg",
                  },
                  {
                    city: "Pondicherry",
                    location: "Anna Salai",
                    // icon: "/icons/pondicherry.svg",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#121212] rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 text-center"
                  >
                    {/* <img
                      src={item.icon}
                      alt={item.city}
                      className="mx-auto mb-3 h-10"
                    /> */}
                    <h3 className="text-lg font-semibold">{item.city}</h3>
                    <p className="text-sm">{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
