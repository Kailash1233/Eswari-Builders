"use client";

import type React from "react";
import { useState } from "react";
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
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Send Us a Message
            </h2>
            <p className="text-slate-600 mb-8">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 mb-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                <p>
                  Your message has been sent successfully. We&apos;ll get back
                  to you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
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
                  className="bg-white border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
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
                  className="bg-white border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white min-h-[150px] border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white border border-slate-300 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 hover:bg-black/90 hover:text-white/90"
              >
                {isSubmitting ? "Sending..." : "Get a Quote"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Contact Information
            </h2>
            <p className="text-slate-600 mb-8">
              Feel free to reach out to us using any of the contact methods
              below.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                  <p className="text-slate-600">
                    112, Kamatchi Amman Kovil St, <br />
                    Heritage Town, Puducherry, 605001
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-1 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-600">+91 90920 97190</p>
                  <p className="text-slate-600">+91 87784 02742</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-1 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600">eswaribuilders2018@gmail.com</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-4 mt-1 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Working Hours
                  </h3>
                  <p className="text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
