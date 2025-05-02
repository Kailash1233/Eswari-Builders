"use client";

import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShowButton(scrolled);

      if (scrolled) {
        setShowText(false); 
        setTimeout(() => setShowText(true), 800); 
      } else {
        setShowText(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "YOUR_NUMBER";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://www.instagram.com/YOUR_USERNAME";

  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 flex flex-col md:flex-row items-center gap-2 md:gap-3">
      {/* WhatsApp Text */}
      <span
        className={`hidden md:block text-white bg-green-600 px-3 py-1 rounded-lg text-sm font-semibold shadow-lg transition-all duration-500 ${
          showButton && showText
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-5"
        }`}
      >
        Chat in WhatsApp
      </span>

      {/* WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-opacity duration-700 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/Whatsapp.png"
          alt="WhatsApp"
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 drop-shadow-lg hover:scale-110 transition-transform"
        />
      </a>

      {/* Instagram Icon */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-opacity duration-700 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/Instagram.png"
          alt="Instagram"
          className="w-12 h-12 lg:w-14 lg:h-14 drop-shadow-lg hover:scale-110 transition-transform"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
