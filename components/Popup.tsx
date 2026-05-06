// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image"; // keep if using Next Image, otherwise replace with <img />
// import type { FC } from "react";

// interface PopupProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title?: string;
//   whatsappLink?: string;
// }

// const initialState = {
//   name: "",
//   email: "",
//   phone: "",
//   location: "",
//   message: "",
// };

// const Popup: FC<PopupProps> = ({
//   isOpen,
//   onClose,
//   title = "Let's Talk",
//   whatsappLink,
// }) => {
//   // Hooks must be declared before any conditional returns
//   const [formData, setFormData] = useState(initialState);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<null | "success" | "error">(null);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const firstInputRef = useRef<HTMLInputElement | null>(null);

//   const logo = "/logo.png";
//   const whatsappLogo = "/WhatsApp_icon.png";
//   const instagramLogo = "/Instagram.png";
//   const facebookLogo = "/facebook.webp";
//   const whatsappLinks = "https://wa.me/919092097190";
//   const instagramLink = "https://www.instagram.com/eswaribuilderspy";
//   const facebookLink = "https://www.facebook.com/EswariBuilders2018";

//   // Close on Esc
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };
//     if (isOpen) document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [isOpen, onClose]);

//   // Focus first input when opened
//   useEffect(() => {
//     if (isOpen) {
//       setTimeout(() => firstInputRef.current?.focus(), 50);
//       setStatus(null);
//     }
//   }, [isOpen]);

//   // click outside to close
//   useEffect(() => {
//     const onClick = (e: MouseEvent) => {
//       if (
//         isOpen &&
//         containerRef.current &&
//         e.target instanceof Node &&
//         !containerRef.current.contains(e.target)
//       ) {
//         onClose();
//       }
//     };
//     document.addEventListener("mousedown", onClick);
//     return () => document.removeEventListener("mousedown", onClick);
//   }, [isOpen, onClose]);

//   // Validation
//   const validate = () => {
//     const err: Record<string, string> = {};
//     if (!formData.name.trim()) err.name = "Name is required";
//     if (!formData.email.trim()) err.email = "Email is required";
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email))
//       err.email = "Invalid email";
//     if (!formData.phone.trim()) err.phone = "Phone is required";
//     else if (!/^[0-9+\s()-]{7,20}$/.test(formData.phone))
//       err.phone = "Invalid phone";
//     if (!formData.location.trim()) err.location = "Location is required";
//     if (!formData.message.trim()) err.message = "Please enter a message";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
//     if (errors[e.target.name])
//       setErrors((s) => ({ ...s, [e.target.name]: "" }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;
//     setLoading(true);
//     setStatus(null);

//     try {
//       const form = new FormData();
//       form.append("name", formData.name);
//       form.append("email", formData.email);
//       form.append("phone", formData.phone);
//       form.append("location", formData.location);
//       form.append("message", formData.message);

//       const response = await fetch("https://formspree.io/f/mojrjnnj", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: form,
//       });

//       if (response.ok) {
//         setStatus("success");
//         setFormData(initialState);
//         // keep modal open briefly to show success, then close
//         setTimeout(() => {
//           setLoading(false);
//           onClose();
//         }, 1200);
//       } else {
//         setStatus("error");
//         setLoading(false);
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       aria-modal="true"
//       role="dialog"
//       aria-label={title}
//       className="fixed inset-0 z-50 flex items-center justify-center px-4"
//     >
//       {/* backdrop */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* modal */}
//       <div
//         ref={containerRef}
//         className="relative w-full max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2"
//       >
//         {/* LEFT - IMAGE */}
//         <div className="relative hidden md:block">
//           <Image
//             src="/projectStatus/Nilayadakshi.jpg"
//             alt="Residential house construction in Pondicherry by Eswari Builders"
//             fill
//             className="object-cover"
//           />

//           {/* subtle overlay */}
//           <div className="absolute inset-0 bg-black/20" />

//           {/* branding */}
//           <div className="absolute bottom-6 left-6 text-white">
//             <p className="text-sm opacity-80">Premium Construction</p>
//             <p className="text-xl font-semibold">Eswari Builders</p>
//           </div>
//         </div>

//         {/* RIGHT - FORM */}
//         <div className="p-6 md:p-8">
//           {/* header */}
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//               <p className="text-sm text-gray-500">
//                 We&apos;ll get back within 24 hours
//               </p>
//             </div>

//             <button
//               onClick={onClose}
//               className="p-2 rounded-md hover:bg-gray-100"
//             >
//               ✕
//             </button>
//           </div>

//           {/* status */}
//           {status === "success" && (
//             <div className="mb-4 text-sm text-green-700">
//               Message sent successfully.
//             </div>
//           )}
//           {status === "error" && (
//             <div className="mb-4 text-sm text-red-600">
//               Something went wrong. Try again.
//             </div>
//           )}

//           {/* form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               ref={firstInputRef}
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
//             />

//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email Address"
//               className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
//             />

//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
//             />

//             <input
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="Location"
//               className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
//             />

//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Tell us about your project"
//               rows={4}
//               className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
//             >
//               {loading ? "Sending..." : "Submit Enquiry"}
//             </button>
//           </form>

//           {/* CONTACT + SOCIAL */}
//           <div className="mt-6 border-t pt-4 flex items-center justify-between">
//             <a
//               href="tel:+919092097190"
//               className="text-sm text-gray-600 hover:underline"
//             >
//               +91 90920 97190
//             </a>

//             <div className="flex items-center gap-3">
//               <a href="https://wa.me/919092097190" target="_blank">
//                 <Image
//                   src="/Whatsapp.png"
//                   alt="WhatsApp"
//                   width={24}
//                   height={24}
//                 />
//               </a>

//               <a
//                 href="https://www.instagram.com/eswaribuilderspy"
//                 target="_blank"
//               >
//                 <Image
//                   src="/Instagram.png"
//                   alt="Instagram"
//                   width={22}
//                   height={22}
//                 />
//               </a>

//               <a
//                 href="https://www.facebook.com/EswariBuilders2018"
//                 target="_blank"
//               >
//                 <Image
//                   src="/facebook.webp"
//                   alt="Facebook"
//                   width={22}
//                   height={22}
//                 />
//               </a>

//               <a
//                 href="https://youtube.com/@eswaribuilders-q4e?si=r_J-QJMNdl-IdNO8"
//                 target="_blank"
//               >
//                 <Image
//                   src="/Youtube_logo.png"
//                   alt="YouTube"
//                   width={24}
//                   height={24}
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;

// // import React, { useState, useEffect } from "react";

// // interface PopupProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   title: string;
// // }

// // const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title }) => {
// //   console.log("Popup isOpen:", isOpen);

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center z-50">
// //       <div
// //         className="absolute inset-0 bg-black bg-opacity-50"
// //         onClick={onClose}
// //       ></div>
// //       <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md w-full">
// //         <h2 className="text-xl font-bold mb-4">Welcome to our website!</h2>
// //         <p className="mb-4">
// //           Thank you for visiting. Check out our special offers!
// //         </p>
// //         <button
// //           onClick={onClose}
// //           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
// //         >
// //           Close
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Popup;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { FC } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const initialState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
};

const Popup: FC<PopupProps> = ({ isOpen, onClose, title = "Let's Talk" }) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
      setStatus(null);
    }
  }, [isOpen]);

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

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = "Required";
    if (!formData.email.trim()) err.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      err.email = "Invalid email";
    if (!formData.phone.trim()) err.phone = "Required";
    else if (!/^[0-9+\s()-]{7,20}$/.test(formData.phone))
      err.phone = "Invalid phone";
    if (!formData.location.trim()) err.location = "Required";
    if (!formData.message.trim()) err.message = "Required";
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

      const response = await fetch("https://formspree.io/f/mojrjnnj", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      if (response.ok) {
        setStatus("success");
        setFormData(initialState);
        setTimeout(() => {
          setLoading(false);
          onClose();
        }, 2000);
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

  const fields = [
    { name: "name", label: "Full Name", type: "text", ref: firstInputRef },
    { name: "email", label: "Email Address", type: "email", ref: null },
    { name: "phone", label: "Phone Number", type: "tel", ref: null },
    { name: "location", label: "Your Location", type: "text", ref: null },
  ];

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto bg-[#0d0d0d] border border-white/10 overflow-hidden grid md:grid-cols-2"
      >
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c8a97e]/60 z-10" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c8a97e]/60 z-10" />

        {/* LEFT — Image */}
        <div className="relative hidden md:block">
          <Image
            src="/projectStatus/Nilayadakshi.jpg"
            alt="Residential house construction in Pondicherry by Eswari Builders"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Branding overlay */}
          <div className="absolute bottom-8 left-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-5 bg-[#c8a97e]" />
              <span
                className="text-[#c8a97e] tracking-[0.25em] text-[10px] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Premium Construction
              </span>
            </div>
            <p
              className="text-2xl font-light text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Eswari
              <br />
              <span className="italic text-[#c8a97e]">Builders</span>
            </p>
            <p
              className="text-white/40 text-xs tracking-widest uppercase mt-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Est. 2002 · Pondicherry
            </p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="p-8 md:p-10 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-5 bg-[#c8a97e]" />
                <span
                  className="text-[#c8a97e] tracking-[0.25em] text-[10px] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Free Consultation
                </span>
              </div>
              <h3
                className="text-2xl font-light text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p
                className="text-[#666] text-xs mt-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                We&apos;ll get back within 24 hours
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-[#666] hover:text-[#c8a97e] transition-colors duration-300 text-lg leading-none mt-1"
            >
              ✕
            </button>
          </div>

          {/* Success state */}
          {status === "success" ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-8">
              <div
                className="text-[#c8a97e] text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ✦
              </div>
              <p
                className="text-white text-lg font-light"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Message Received
              </p>
              <p
                className="text-[#888] text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 flex-1"
            >
              {/* Text fields */}
              {fields.map((field) => (
                <div key={field.name} className="relative">
                  <label
                    htmlFor={field.name}
                    className="block text-[10px] tracking-[0.2em] uppercase text-[#555] mb-1.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {field.label}
                  </label>
                  <input
                    ref={field.ref as React.RefObject<HTMLInputElement>}
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/15 focus:border-[#c8a97e] outline-none text-white text-sm py-2 transition-colors duration-300 placeholder:text-[#333]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                  {errors[field.name] && (
                    <p
                      className="absolute right-0 top-0 text-[10px] text-red-400 tracking-wide"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[0.2em] uppercase text-[#555] mb-1.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-transparent border-b border-white/15 focus:border-[#c8a97e] outline-none text-white text-sm py-2 resize-none transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
                {errors.message && (
                  <p
                    className="absolute right-0 top-0 text-[10px] text-red-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p
                  className="text-red-400 text-xs tracking-wide"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group mt-auto inline-flex items-center justify-center gap-3 border border-[#c8a97e]/60 text-[#c8a97e] py-3 text-xs tracking-widest uppercase hover:bg-[#c8a97e] hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {loading ? "Sending..." : "Submit Enquiry"}
                {!loading && (
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                )}
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
            <a
              href="tel:+919092097190"
              className="text-[#666] text-xs hover:text-[#c8a97e] transition-colors duration-300 tracking-wide"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              +91 90920 97190
            </a>

            <div className="flex items-center gap-2">
              {[
                { href: "https://wa.me/919092097190", label: "/WhatsApp.png" },
                {
                  href: "https://www.instagram.com/eswaribuilderspy",
                  label: "/Instagram.png",
                },
                {
                  href: "https://www.facebook.com/EswariBuilders2018",
                  label: "/facebook.webp",
                },
                {
                  href: "https://youtube.com/@eswaribuilders-q4e",
                  label: "/Youtube_logo.png",
                },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 border border-white/10 hover:border-[#c8a97e]/60 flex items-center justify-center text-[#555] hover:text-[#c8a97e] transition-all duration-300 text-[10px] tracking-widest"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Image src={label} alt="Social icon" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
