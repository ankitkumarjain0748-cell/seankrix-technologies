"use client";

import React from "react";
import { Check, Info, Rocket, Briefcase, Building2, Zap, Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";
import Layout from "@/Components/Layout";
import Head from "next/head";

const plans = [
  {
    name: "Standard",
    subtitle: "PROFESSIONAL WEBSITE",
    price: "25,000+",
    description: "Ideal for growing businesses & service providers",
    icon: <Briefcase className="w-8 h-8" />,
    color: "blue",
    suitable: ["Startups", "Local Businesses", "Freelancers", "Personal Brands"],
    features: [
      "Up to 10 Pages Website",
      "Responsive Mobile-Friendly Design",
      "Modern UI/UX Layout",
      "Contact Form Integration",
      "WhatsApp Chat Integration",
      "Basic SEO Setup",
      "Fast Loading Website",
      "Social Media Integration",
      "SSL Security Setup",
      "Google Map Integration",
      "Admin Panel Access",
      "1 Month Free Support",
    ],
  },
  {
    name: "Premium",
    subtitle: "BUSINESS WEBSITE",
    price: "40,000+",
    description: "Perfect for brands that need advanced features & performance",
    icon: <Zap className="w-8 h-8" />,
    color: "purple",
    recommended: true,
    suitable: ["Business Owners", "Agencies", "Consultants", "Service Companies"],
    features: [
      "Up to 20 Pages Website",
      "Fully Custom Premium Design",
      "Dynamic Website Development",
      "Advanced Animations & Effects",
      "Custom Contact & Inquiry Forms",
      "SEO Optimized Website",
      "Advanced Speed Optimization",
      "Blog & News Section",
      "Portfolio/Case Study Section",
      "CRM/API Integrations",
      "Booking/Appointment System",
      "Multi-Language Support",
      "Priority Support",
      "2 Months Free Support",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "CUSTOM WEB SOLUTION",
    price: "60,000+",
    description: "Best for enterprise businesses & custom web applications",
    icon: <Building2 className="w-8 h-8" />,
    color: "orange",
    suitable: ["Large Businesses", "Enterprises", "E-commerce Stores", "Growing Brands"],
    features: [
      "Unlimited Pages",
      "Fully Custom UI/UX Design",
      "Custom Web Application Development",
      "Advanced Admin Panel",
      "API Integrations",
      "CRM/ERP Integrations",
      "Payment Gateway Integration",
      "Advanced Security & Firewall",
      "Custom Database",
      "User Login & Membership System",
      "Multi-Vendor/Marketplace Features",
      "Scalable Cloud Hosting Setup",
      "SEO & Analytics Setup",
      "Dedicated Project Manager",
      "Ongoing Maintenance Support",
    ],
  },
];

export default function PricingPage() {
  return (
    <Layout>
      <Head>
        <title>Website Development Plans & Pricing | Seankrix Technologies</title>
        <meta name="description" content="Check out Seankrix Technologies' affordable website development plans starting from ₹25,000. We offer Standard, Premium, and Enterprise solutions for businesses." />
        <meta name="keywords" content="Website development pricing, web design cost India, Seankrix plans, custom website development cost, e-commerce website price" />
        <link rel="canonical" href="https://www.seankrixtechnologies.com/plans" />
        
        {/* Schema Markup for Google Ranking */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Website Development Plans",
              "brand": "Seankrix Technologies",
              "offers": plans.map(plan => ({
                "@type": "Offer",
                "name": plan.name,
                "price": plan.price.replace(",", "").replace("+", ""),
                "priceCurrency": "INR"
              }))
            }),
          }}
        />
      </Head>

      <section className="bg-black text-white py-20 px-4">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            Pricing & Plans
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold">
            Custom Website <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Development Plans
            </span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful Websites. Smart Solutions. Real Results. Choose a plan that fits your business needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-[#111] border ${
                plan.recommended ? "border-cyan-500" : "border-white/10"
              } rounded-3xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}

              {/* Card Header */}
              <div className="mb-8">
                <div className={`p-3 rounded-2xl inline-block bg-${plan.color}-500/10 text-${plan.color}-400 mb-4`}>
                  {plan.icon}
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight">{plan.name}</h2>
                <p className="text-xs text-gray-500 font-bold tracking-widest mt-1 uppercase italic">{plan.subtitle}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-white">₹{plan.price}</span>
                </div>
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">{plan.description}</p>
              </div>

              {/* Suitable For Section */}
              <div className="mb-8 p-4 bg-white/5 rounded-2xl">
                <p className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                  <Info size={14} /> Suitable For:
                </p>
                <div className="flex flex-wrap gap-2">
                  {plan.suitable.map((item, i) => (
                    <span key={i} className="text-[10px] bg-white/10 px-2 py-1 rounded-md text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="flex-grow mb-8">
                <p className="text-sm font-bold text-cyan-400 uppercase mb-4 tracking-widest">Included Features</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.recommended
                    ? "bg-cyan-500 text-black hover:bg-white"
                    : "bg-white/10 text-white hover:bg-white hover:text-black"
                }`}
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>

        {/* Contact Strip Section */}
        <div className="max-w-7xl mx-auto mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-cyan-500 p-4 rounded-2xl hidden md:block">
              <Rocket className="w-10 h-10 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-gray-400">Let's build something amazing together!</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
            <a href="tel:+918824744976" className="flex items-center gap-3 hover:text-cyan-400 transition">
              <Phone className="text-cyan-500" size={20} />
              <span className="text-sm">8824744976</span>
            </a>
            <a href="mailto:info@seankrix.com" className="flex items-center gap-3 hover:text-cyan-400 transition">
              <Mail className="text-cyan-500" size={20} />
              <span className="text-sm">info@seankrix.com</span>
            </a>
            <a href="https://www.seankrixtechnologies.com" className="flex items-center gap-3 hover:text-cyan-400 transition">
              <Globe className="text-cyan-500" size={20} />
              <span className="text-sm">seankrix.com</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}