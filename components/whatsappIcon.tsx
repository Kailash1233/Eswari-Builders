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

  const whatsappNumber = "919092097190";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://www.instagram.com/eswaribuilderspy";
  const facebookLink = "https://www.facebook.com/EswariBuilders2018";

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
          src="/WhatsApp_icon.png"
          alt="WhatsApp"
          className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 drop-shadow-lg hover:scale-110 transition-transform"
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
          className="w-10 h-10 lg:w-12 lg:h-12 drop-shadow-lg hover:scale-110 transition-transform"
        />
      </a>

      {/* Facebook Icon */}
      <a
        href={facebookLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-opacity duration-700 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/facebook.webp"
          alt="Facebook"
          className="w-10 h-10 lg:w-12 lg:h-12 drop-shadow-lg hover:scale-110 transition-transform"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
