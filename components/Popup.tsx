import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // keep if using Next Image, otherwise replace with <img />
import type { FC } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  whatsappLink?: string;
}

const initialState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
};

const Popup: FC<PopupProps> = ({
  isOpen,
  onClose,
  title = "Let's Talk",
  whatsappLink,
}) => {
  // Hooks must be declared before any conditional returns
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const logo = "/logo.png";
  const whatsappLogo = "/WhatsApp_icon.png";
  const instagramLogo = "/Instagram.png";
  const facebookLogo = "/facebook.webp";
  const whatsappLinks = "https://wa.me/919092097190";
  const instagramLink = "https://www.instagram.com/eswaribuilderspy";
  const facebookLink = "https://www.facebook.com/EswariBuilders2018";

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Focus first input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
      setStatus(null);
    }
  }, [isOpen]);

  // click outside to close
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        e.target instanceof Node &&
        !containerRef.current.contains(e.target)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen, onClose]);

  // Validation
  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.email.trim()) err.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      err.email = "Invalid email";
    if (!formData.phone.trim()) err.phone = "Phone is required";
    else if (!/^[0-9+\s()-]{7,20}$/.test(formData.phone))
      err.phone = "Invalid phone";
    if (!formData.location.trim()) err.location = "Location is required";
    if (!formData.message.trim()) err.message = "Please enter a message";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
    if (errors[e.target.name])
      setErrors((s) => ({ ...s, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setStatus(null);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("location", formData.location);
      form.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/mayknzaq", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: form,
      });

      if (response.ok) {
        setStatus("success");
        setFormData(initialState);
        // keep modal open briefly to show success, then close
        setTimeout(() => {
          setLoading(false);
          onClose();
        }, 1200);
      } else {
        setStatus("error");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* modal */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2"
      >
        {/* LEFT - IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src="/projectStatus/Nilayadakshi.jpg"
            alt="Eswari Builders Project"
            fill
            className="object-cover"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* branding */}
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm opacity-80">Premium Construction</p>
            <p className="text-xl font-semibold">Eswari Builders</p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="p-6 md:p-8">
          {/* header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500">
                We&apos;ll get back within 24 hours
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* status */}
          {status === "success" && (
            <div className="mb-4 text-sm text-green-700">
              Message sent successfully.
            </div>
          )}
          {status === "error" && (
            <div className="mb-4 text-sm text-red-600">
              Something went wrong. Try again.
            </div>
          )}

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              ref={firstInputRef}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
            />

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows={4}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>

          {/* CONTACT + SOCIAL */}
          <div className="mt-6 border-t pt-4 flex items-center justify-between">
            <a
              href="tel:+919092097190"
              className="text-sm text-gray-600 hover:underline"
            >
              +91 90920 97190
            </a>

            <div className="flex items-center gap-3">
              <a href="https://wa.me/919092097190" target="_blank">
                <Image
                  src="/Whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://www.instagram.com/eswaribuilderspy"
                target="_blank"
              >
                <Image
                  src="/Instagram.png"
                  alt="Instagram"
                  width={22}
                  height={22}
                />
              </a>

              <a
                href="https://www.facebook.com/EswariBuilders2018"
                target="_blank"
              >
                <Image
                  src="/facebook.webp"
                  alt="Facebook"
                  width={22}
                  height={22}
                />
              </a>

              <a
                href="https://youtube.com/@eswaribuilders-q4e?si=r_J-QJMNdl-IdNO8"
                target="_blank"
              >
                <Image
                  src="/Youtube_logo.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

// import React, { useState, useEffect } from "react";

// interface PopupProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
// }

// const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title }) => {
//   console.log("Popup isOpen:", isOpen);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div
//         className="absolute inset-0 bg-black bg-opacity-50"
//         onClick={onClose}
//       ></div>
//       <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md w-full">
//         <h2 className="text-xl font-bold mb-4">Welcome to our website!</h2>
//         <p className="mb-4">
//           Thank you for visiting. Check out our special offers!
//         </p>
//         <button
//           onClick={onClose}
//           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Popup;
