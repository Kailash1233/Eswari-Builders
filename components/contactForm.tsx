import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="w-full bg-[#F7F7F7] py-12 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10">
      <h2 className="text-3xl font-bold text-center mb-4">Send Us a Message</h2>
      <p className="text-gray-600 text-center mb-8">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
  
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-1">Thank You!</h3>
          <p>Your message has been sent successfully. We'll get back to you shortly.</p>
        </div>
      )}
  
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
          />
        </div>
  
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
          />
        </div>
  
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
          />
        </div>
  
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full min-h-[150px] border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
          />
        </div>
  
        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-3 text-lg font-medium rounded-md hover:bg-black/90 transition"
        >
          {isSubmitting ? "Sending..." : "Get a Quote"}
        </Button>
      </form>
    </div>
  </div>
  
  );
}
