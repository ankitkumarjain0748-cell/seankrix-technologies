"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineEnvelope as EnvelopeIcon } from "react-icons/hi2";
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
  { name: "Blog", href: "/blogs" },
  { name: "FAQ", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/app-development" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "SEO Services", href: "/services/seo-optimization" },
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
    icon: <FaFacebookF size={16} />,
    href: "https://www.facebook.com/profile.php?id=61589234190650",
  },
  {
    icon: <FaInstagram size={16} />,
    href: "https://www.instagram.com/seankrix_technologies_/",
  },
  {
    icon: <FaLinkedinIn size={16} />,
    href: "https://www.linkedin.com/in/seankrix-technologies-73b269407/",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#03050d] text-white border-t border-white/5">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Glow position="left" size={600} />
      </div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00BFFF]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Premium Integrated CTA Box Area */}
        <div className="pt-16 pb-6">
          <div className="rounded-[32px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 md:p-12 text-center relative overflow-hidden backdrop-blur-md shadow-2xl">
            {/* Inner Accent Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#00BFFF]/10 blur-[60px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
              Ready To Grow Your Business?
            </h2>
            <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              Let's engineer powerful, high-converting digital solutions together. Contact our experts today for a strategy blueprint session.
            </p>
            <Link
              href="/contact"
              className="inline-flex mt-8 bg-[#00BFFF] hover:bg-white text-black font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-[#00BFFF]/10 hover:shadow-white/5"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Main Informational Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-t border-white/5 mt-6">
          
          {/* Brand Directory Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block transition-transform duration-200 hover:scale-[1.02]">
              <Image
                src="/seankrix_technologieslogo.png"
                alt="Seankrix Technologies Logo"
                width={180}
                height={60}
                className="h-auto w-auto"
                priority
              />
            </Link>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
              Seankrix Technologies is an elite software ecosystem architect specializing in fast Web Architecture, Mobile Frameworks, UI/UX Systems, and Enterprise Growth Blueprints.
            </p>
            
            {/* Micro Contact Information Strip */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                <div className="text-[#00BFFF] group-hover:scale-110 transition-transform"><BsTelephone size={14} /></div>
                <span className="text-xs md:text-sm font-light">+91 88247 44976</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                <div className="text-[#00BFFF] group-hover:scale-110 transition-transform"><EnvelopeIcon size={14} /></div>
                <span className="text-xs md:text-sm font-light break-all">info@seankrixtechnologies.com</span>
              </div>
             <div className="flex items-start gap-3 text-gray-300">
  <div className="text-[#00BFFF] mt-1 shrink-0">
    <FaMapMarkerAlt size={14} />
  </div>
  <span className="text-xs md:text-sm font-light leading-relaxed">
    House No. 2, Jain Mohan Badi,<br />
    Near Surajpole Gate, Jaipur,<br />
    Rajasthan, India - 302003
  </span>
</div>
            </div>

            {/* Social Connection Badges */}
            <div className="flex gap-2.5 pt-2">
              {socialIcons?.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#00BFFF] hover:border-[#00BFFF] transition-all duration-300 shadow-md"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Directory Links Column 1 */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-5 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400 text-xs md:text-sm font-light">
              {quickLinks?.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="relative hover:text-[#00BFFF] transition-colors duration-200 group block py-0.5">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00BFFF] transition-all duration-300 group-hover:w-12"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Links Column 2 */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-5 text-white">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-400 text-xs md:text-sm font-light">
              {servicesLinks?.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="relative hover:text-[#00BFFF] transition-colors duration-200 group block py-0.5">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00BFFF] transition-all duration-300 group-hover:w-12"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Links Column 3 */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-5 text-white">
              Company
            </h3>
            <ul className="space-y-3 text-gray-400 text-xs md:text-sm font-light">
              {companyLinks?.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="relative hover:text-[#00BFFF] transition-colors duration-200 group block py-0.5">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00BFFF] transition-all duration-300 group-hover:w-12"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Meta Area */}
        <div className="py-8 border-t border-white/5 text-gray-500 text-xs font-light tracking-wide">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Seankrix Technologies. All Rights Reserved.
            </p>
            <p className="text-center sm:text-right hover:text-gray-400 transition-colors duration-200">
              Designed & Engineered at Seankrix Lab
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}