"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "918824744976"; // 👉 country code + number
  const message = "Hello, I want to discuss a project 🚀";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
    >
      {/* Pulse Animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform">
        <FaWhatsapp className="text-white text-2xl" />
      </div>
    </div>
  );
}