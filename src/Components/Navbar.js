"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaTh,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="absolute w-full flex z-50 justify-between items-center px-4 sm:px-8 md:px-20 lg:px-40 py-4 bg-transparent border-b border-white/10 text-white">

        {/* Logo + Menu */}
        <div className="flex justify-center items-center gap-8 lg:gap-16">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={40}
              className="object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-[16px] font-medium">
            <Link href="/" className="text-[#BFF747]">Home</Link>
            <Link href="/about" className="hover:text-[#BFF747]">About Us</Link>

                  <Link href="/services" className="hover:text-[#BFF747]">Serivces</Link>


            <Link href="/faq" className="hover:text-[#BFF747]">Faq</Link>
            <Link href="/contact" className="hover:text-[#BFF747]">Contact</Link>
          </div>
        </div>

        {/* Social + Sidebar Button */}
        <div className="hidden xl:flex justify-center  items-center gap-4 text-xl">
          <Link href="/"><FaInstagram /></Link>
          <Link href="/"><FaFacebookF /></Link>
          <Link href="/"><FaLinkedinIn /></Link>

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#BFF747] hover:text-black"
          >
            <FaTh />
          </button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col p-5 gap-3 md:hidden">
            <Link href="/" className="px-3 py-2 hover:bg-[#BFF747]">Home</Link>
            <Link href="/about" className="px-3 py-2 hover:bg-[#BFF747]">About</Link>

                 <Link href="/services" className="px-3 py-2 hover:bg-[#BFF747]">Service</Link>


            

            <Link href="/faq" className="px-3 py-2 hover:bg-[#BFF747]">Faq</Link>
            <Link href="/contact" className="px-3 py-2 hover:bg-[#BFF747]">Contact</Link>
          </div>
        )}
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-[#171717] text-white z-50 transform transition ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="p-6 space-y-8 text-center">

          <div>
            <LuPhoneCall className="text-[#BFF747] text-4xl mx-auto" />
            <p className="font-bold">Phone</p>
            <p className="text-gray-300">+91 8824744976</p>
          </div>

          <div>
            <FaEnvelope className="text-[#BFF747] text-4xl mx-auto" />
            <p className="font-bold">Email</p>
            <p className="text-gray-300">ankitkumarjain0748@gmail.com</p>
          </div>

          <div>
            <FaMapMarkerAlt className="text-[#BFF747] text-4xl mx-auto" />
            <p className="font-bold">Address</p>
            <p className="text-gray-300">Jaipur, Rajasthan</p>
          </div>

          {/* Social */}
          <div>
            <p className="font-bold mb-3">Stay Connected</p>
            <div className="flex justify-center gap-5 text-2xl">
              <Link href="/"><FaInstagram /></Link>
              <Link href="/"><FaFacebookF /></Link>
              <Link href="/"><FaLinkedinIn /></Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}