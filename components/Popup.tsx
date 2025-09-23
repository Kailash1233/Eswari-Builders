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
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

      {/* modal card */}
      <div
        ref={containerRef}
        className="relative w-full max-w-lg mx-auto transform transition-all duration-300 ease-out"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/90 to-slate-50/80 border border-white/20 backdrop-blur-lg">
          {/* header */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              {/* small logo placeholder */}
              <Image src={logo} alt="Logo" width={50} height={50} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-sm text-slate-500">
                  Quick chat - we usually reply within 24 hrs
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* WhatsApp quick link */}
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
                >
                  <Image
                    src={whatsappLogo}
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                  <span>WhatsApp</span>
                </a>
              )}

              {/* close button */}
              <button
                onClick={onClose}
                aria-label="Close contact form"
                className="p-2 rounded-md hover:bg-slate-100 transition"
              >
                <svg
                  className="w-5 h-5 text-slate-700"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* body */}
          <div className="px-6 pb-6 pt-2">
            {/* success / error banners */}
            {status === "success" && (
              <div className="mb-4 rounded-md bg-green-50 border border-green-100 px-4 py-3 text-sm text-green-800">
                ✅ Message sent - we will be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 rounded-md bg-rose-50 border border-rose-100 px-4 py-3 text-sm text-rose-800">
                ❌ Oops - something went wrong. Try again or message us on
                WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Full name
                  </label>
                  <input
                    ref={firstInputRef}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={`w-full rounded-lg border px-3 py-2 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.name ? "border-rose-400" : "border-white/10"
                    }`}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="abc@gmail.com"
                    className={`w-full rounded-lg border px-3 py-2 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.email ? "border-rose-400" : "border-white/10"
                    }`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className={`w-full rounded-lg border px-3 py-2 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.phone ? "border-rose-400" : "border-white/10"
                    }`}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Location
                  </label>
                  <input
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="City, State"
                    className="w-full rounded-lg border px-3 py-2 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 border-white/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question..."
                  required
                  rows={4}
                  className={`w-full rounded-lg border px-3 py-2 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    errors.message ? "border-rose-400" : "border-white/10"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-600">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <p>
                    By sending you agree to our team contacting you.{" "}
                    <span className="hidden sm:inline">
                      We never share your data.
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold px-4 py-2 rounded-lg shadow-md transition disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray="60"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData(initialState);
                      setErrors({});
                      setStatus(null);
                    }}
                    className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-100 transition"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>

            {/* social row (mobile friendly) */}
            <div className="mt-5 border-t pt-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <p className="text-sm text-slate-500">Prefer social?</p>
                <div className="flex items-center gap-2">
                  <a
                    href={whatsappLinks ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2"
                  >
                    <Image
                      src={whatsappLogo}
                      alt="WhatsApp"
                      width={40}
                      height={40}
                    />
                  </a>

                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2"
                  >
                    <Image
                      src={instagramLogo}
                      alt="Instagram"
                      width={34}
                      height={34}
                    />
                  </a>

                  <a
                    href={facebookLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2"
                  >
                    <Image
                      src={facebookLogo}
                      alt="Facebook"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>
              </div>

              <div className="text-xs text-slate-400">
                <span>Or call: </span>
                <a href="tel:+919092097190" className="hover:underline">
                  +91 90920 97190
                </a>
              </div>
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
