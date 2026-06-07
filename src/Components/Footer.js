"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Glow from "./Glow";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Training", href: "/training" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/app-development" },
  { name: "UI/UX Design", href: "/services/ui-ux" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "SEO Services", href: "/services/seo" },
  { name: "E-Commerce Development", href: "/services/ecommerce-development" },
];



const companyLinks = [
  { name: "Careers", href: "/careers" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Refund Policy", href: "/refund-policy" },
];

const socialIcons = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/profile.php?id=61589234190650",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/seankrix_technologies_/",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/seankrix-technologies-73b269407/",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <Glow position="left" size={500} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="">

            <Link href="/">
              <Image
                src="/seankrix_technologieslogo.png"
                alt="Seankrix Technologies"
                width={180}
                height={60}
                className="mb-6"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Seankrix Technologies is a leading software development company
              specializing in Web Development, Mobile App Development,
              UI/UX Design, Digital Marketing, SEO, and Professional IT
              Training Programs.
            </p>

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3">
                <BsTelephone className="text-[#00BFFF]" />
                <span className="text-sm">
                  +91 8824744976
                </span>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineEnvelope className="text-[#00BFFF]" />
                <span className="text-sm break-all">
                  info@seankrixtechnologies.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#00BFFF]" />
                <span className="text-sm">
                  Jaipur, Rajasthan, India
                </span>
              </div>

            </div>

            <div className="flex gap-3 mt-6">

              {socialIcons.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="
                    w-10 h-10
                    rounded-full
                    border border-white/10
                    bg-white/5
                    flex items-center justify-center
                    hover:bg-[#00BFFF]
                    hover:text-black
                    transition-all duration-300
                  "
                >
                  {item.icon}
                </Link>
              ))}

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#00BFFF] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#00BFFF] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
         

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#00BFFF] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 text-center">

          <h3 className="text-3xl font-bold">
            Ready To Grow Your Business?
          </h3>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Let's build powerful digital solutions together.
            Contact our team today and get a free consultation.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              mt-6
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              font-semibold
              text-white
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Get Free Consultation
          </Link>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Seankrix Technologies.
              All Rights Reserved.
            </p>

            <p className="text-gray-500 text-sm text-center md:text-right">
              Designed & Developed by Seankrix Technologies
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
