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

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-[#FFFFFF] font-bold mb-6">Send Us a Message</h2>
              <p className="text-text mb-8">
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
                    className="block text-sm font-medium text-text mb-1"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text mb-1"
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
                    className="bg-transparent border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text mb-1"
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
                    className=" bg-transparent border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text mb-1"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className=" bg-transparent min-h-[150px] border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className=" w-full bg-white hover:bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.4)]"
                >
                  {isSubmitting ? "Sending..." : "Get a Quote"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl text-[#FFFFFF] font-bold mb-6">Contact Information</h2>
              <p className="text-text mb-8">
                Feel free to reach out to us using any of the contact methods
                below.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-white" />
                  <div>
                    <h3 className="font-bold text-[#FFFFFF] mb-1">Address</h3>
                    <p className="text-text">
                      112, Kamatchi Amman Kovil St, <br />
                      Heritage Town, Puducherry, 605001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-white" />
                  <div>
                    <h3 className="font-bold mb-1 text-[#FFFFFF]">Phone</h3>
                    <p className="text-text">+91 90920 97190</p>
                    <p className="text-text">+91 87784 02742</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-white" />
                  <div>
                    <h3 className="font-bold mb-1 text-[#FFFFFF]">Email</h3>
                    <p className="text-text">
                      eswaribuilders2018@gmail.com
                    </p>
                    {/* <p className="text-gray-700">contact@eswaribuilders.com</p> */}
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1 text-white" />
                  <div>
                    <h3 className="font-bold mb-1 text-[#FFFFFF]">Working Hours</h3>
                    <p className="text-text">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-text">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-text">Sunday: Closed</p>
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
