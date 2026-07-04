"use client";

import React, { useRef, useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const contactInfo = [
  {
    icon: <FiPhone size={20} />,
    title: "Phone Number",
    detail: "+91 88247 44976",
    to: "tel:+918824744976", // Added country code prefix for reliable click-to-call
  },
  {
    icon: <FiMail size={20} />,
    title: "Email Address",
    detail: "info@seankrixtechnologies.com",
    to: "mailto:info@seankrixtechnologies.com",
  },
  {
    icon: <FiMapPin size={20} />,
    title: "Our Studio Location",
    detail: "House No. 2, Jain Mohan Badi, Near Surajpole Gate, Jaipur, Rajasthan, India",
    to: "https://maps.google.com/?q=Jain+Mohan+Badi+Surajpole+Gate+Jaipur+Rajasthan+India", // Added placeholder dynamic map query link
  },
];

// Reusable SEO & Style Friendly Form Input Component
const FormInput = ({
  type = "text",
  placeholder,
  name,
  onChange,
  value,
  error,
}) => (
  <div className="w-full space-y-1">
    <input
      type={type}
      name={name} // Crucial for EmailJS mapping
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className={`w-full bg-white/[0.02] border ${
        error ? "border-red-500/50 focus:ring-red-500/20" : "border-white/5 focus:border-[#00BFFF]/40"
      } rounded-xl px-5 py-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#00BFFF]/5 transition-all duration-300`}
    />
    {error && <p className="text-red-400 text-xs pl-1 font-light tracking-wide">{error}</p>}
  </div>
);

export default function ContactForm() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name required";
    if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Enter valid 10-digit phone";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Enter valid email address";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please check connection configurations.");
    }
  };

  return (
    <section className="relative bg-black text-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Soft Cyber Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[#00BFFF]/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Informational Content Grid */}
  <div className="lg:col-span-5 space-y-8">
  <div className="space-y-4">
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
      Get in <span className="text-[#00BFFF] drop-shadow-[0_0_20px_rgba(0,191,255,0.15)]">touch</span>
    </h2>
    <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-md">
      Have a visionary project idea or a scaling business roadblock? Let's engineer an elite digital solution together.
    </p>
  </div>

  {/* Quick Connect Floating Grid */}
  <div className="grid sm:grid-cols-2 gap-4">
    {contactInfo.slice(0, 2).map((item) => (
      <Link
        key={item.title}
        href={item.to}
        className="bg-white/[0.01] border border-white/5 hover:border-[#00BFFF]/20 p-6 rounded-2xl transition-all duration-300 flex flex-col items-center text-center group"
      >
        <div className="w-12 h-12 rounded-xl bg-white/5 text-[#00BFFF] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#00BFFF] group-hover:text-black">
          {item.icon}
        </div>
        <h3 className="font-semibold text-sm tracking-wide mb-1 text-white">{item.title}</h3>
        <p className="text-gray-400 text-xs font-light break-all">{item.detail}</p>
      </Link>
    ))}
  </div>

  {/* Location Bar Layout - Optimized for detailed address */}
  <Link 
    href={contactInfo[2].to}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/[0.01] border border-white/5 hover:border-[#00BFFF]/20 p-5 rounded-2xl flex gap-4 items-start transition-all duration-300 group"
  >
    <div className="w-11 h-11 rounded-xl bg-white/5 text-[#00BFFF] flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-[#00BFFF] group-hover:text-black">
      {contactInfo[2].icon}
    </div>
    <div className="space-y-0.5">
      <h3 className="font-semibold text-sm tracking-wide text-white">{contactInfo[2].title}</h3>
      <p className="text-gray-400 text-xs font-light leading-relaxed">
        {contactInfo[2].detail}
      </p>
    </div>
  </Link>
</div>

        {/* Right High-Converting Glassmorphism Form Area */}
        <div className="lg:col-span-7 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 rounded-[32px] p-6 md:p-10 shadow-2xl backdrop-blur-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            
            <div className="grid sm:grid-cols-2 gap-4">
              <FormInput
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <FormInput
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>

            <FormInput
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <FormInput
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div className="w-full space-y-1">
              <textarea
                name="message"
                placeholder="Tell us about your project requirements..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00BFFF]/40 focus:ring-4 focus:ring-[#00BFFF]/5 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00BFFF] hover:bg-white text-black py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#00BFFF]/10 mt-2"
            >
              Send Secure Message
            </button>
          </form>
        </div>
      </div>

      {/* Production-Grade Premium Success Modal Overlay */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-black border border-white/10 max-w-sm w-full mx-4 p-8 rounded-[24px] text-center shadow-2xl relative">
            <div className="w-16 h-16 rounded-full bg-[#00BFFF]/10 text-[#00BFFF] flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-inner">
              ✓
            </div>
            <h3 className="text-white font-bold text-xl tracking-tight">
              Message Dispatched!
            </h3>
            <p className="text-gray-400 text-sm font-light mt-2 leading-relaxed">
              Thank you for reaching out. The Seankrix desk will review your roadmap blueprint and respond within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 w-full bg-white text-black hover:bg-[#00BFFF] py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            >
              Back to Studio
            </button>
          </div>
        </div>
      )}
    </section>
  );
}