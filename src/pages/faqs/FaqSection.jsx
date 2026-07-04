"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      category: "General Information",
      questions: [
        {
          id: "general1",
          question: "What services do you provide?",
          answer:
            "We provide complete IT solutions including web development, mobile app development, UI/UX design, SEO, digital marketing, and cloud services.",
        },
        {
          id: "general2",
          question: "How can I start a project with you?",
          answer:
            "Simply contact us via our website or call. We'll discuss your requirements and provide a roadmap, timeline, and pricing.",
        },
        {
          id: "general3",
          question: "Do you provide free consultation?",
          answer:
            "Yes, we offer a free consultation to understand your business needs and suggest the best solution.",
        },
        {
          id: "general4",
          question: "Why should I choose Seankrix Technologies?",
          answer:
            "We focus on quality, timely delivery, transparent communication, and scalable technology solutions tailored to your business.",
        },
        {
          id: "general5",
          question: "Do you work with international clients?",
          answer:
            "Yes, we work with clients globally and provide remote consultation, development, and support services.",
        },
      ],
    },
    {
      category: "Web & App Development",
      questions: [
        {
          id: "dev1",
          question: "Do you build custom websites?",
          answer:
            "Yes, we build fully customized, fast, and responsive websites using React, Next.js, and Node.js.",
        },
        {
          id: "dev2",
          question: "Do you develop mobile apps?",
          answer:
            "We create high-performance Android and iOS apps with modern UI and smooth UX.",
        },
        {
          id: "dev3",
          question: "Which technologies do you use?",
          answer:
            "We work with React.js, Next.js, Node.js, Express.js, MongoDB, React Native, Laravel, and other modern technologies.",
        },
        {
          id: "dev4",
          question: "Will my website be mobile-friendly?",
          answer:
            "Yes, all websites and applications we develop are fully responsive and optimized for mobile devices.",
        },
        {
          id: "dev5",
          question: "Can you redesign my existing website?",
          answer:
            "Yes, we can redesign and modernize existing websites to improve performance, user experience, and conversions.",
        },
      ],
    },
    {
      category: "SEO & Marketing",
      questions: [
        {
          id: "seo1",
          question: "Do you provide SEO services?",
          answer:
            "Yes, we offer technical SEO, on-page SEO, keyword research, and ranking optimization.",
        },
        {
          id: "seo2",
          question: "Do you manage social media?",
          answer:
            "Yes, we handle complete social media growth and content marketing.",
        },
        {
          id: "seo3",
          question: "How long does SEO take to show results?",
          answer:
            "SEO is a long-term strategy, and noticeable results typically appear within 3 to 6 months depending on competition.",
        },
        {
          id: "seo4",
          question: "Do you provide Google Ads services?",
          answer:
            "Yes, we create and manage Google Ads campaigns to generate targeted traffic and leads.",
        },
        {
          id: "seo5",
          question: "Can you improve my website ranking?",
          answer:
            "Yes, through technical optimization, quality content, and strategic SEO practices, we help improve rankings and visibility.",
        },
      ],
    },
    {
      category: "Pricing & Support",
      questions: [
        {
          id: "price1",
          question: "What is your pricing model?",
          answer:
            "Pricing depends on project requirements, features, and complexity.",
        },
        {
          id: "price2",
          question: "Do you provide support after delivery?",
          answer:
            "Yes, we provide maintenance and support services after project completion.",
        },
        {
          id: "price3",
          question: "Do you offer monthly maintenance plans?",
          answer:
            "Yes, we offer flexible maintenance packages for websites, applications, and digital marketing services.",
        },
        {
          id: "price4",
          question: "Are there any hidden charges?",
          answer:
            "No, we maintain complete transparency in pricing and discuss all costs before project initiation.",
        },
        {
          id: "price5",
          question: "How can I get a project quotation?",
          answer:
            "You can contact us with your project requirements, and we'll provide a detailed proposal and quotation.",
        },
      ],
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="relative bg-black text-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Premium Minimal Radial Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00BFFF]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Dynamic Category Tabs Slider Area */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {faqs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setOpenFAQ(null);
              }}
              className={`px-5 py-2.5 rounded-xl border text-sm font-medium tracking-wide transition-all duration-300
                ${
                  activeTab === index
                    ? "bg-[#00BFFF] text-black border-[#00BFFF] shadow-[0_0_20px_rgba(0,191,255,0.25)]"
                    : "border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/10 text-gray-400 hover:text-white"
                }`}
            >
              {tab.category}
            </button>
          ))}
        </div>

        {/* Clean Accordion FAQ Grid Area */}
        <div className="space-y-4">
          {faqs[activeTab].questions.map((faq) => {
            const isCurrentOpen = openFAQ === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-sm
                  ${
                    isCurrentOpen
                      ? "border-[#00BFFF]/40 bg-[#00BFFF]/5 shadow-[0_0_30px_rgba(0,191,255,0.03)]"
                      : "border-white/5 bg-white/[0.01] hover:border-white/10"
                  }`}
              >
                {/* Clickable Header mapped to H2 for extreme SEO optimization */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left group gap-4"
                >
                  <h2 className={`text-base md:text-lg font-semibold tracking-wide transition-colors duration-200 ${isCurrentOpen ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                    {faq.question}
                  </h2>

                  <div className={`text-xl shrink-0 p-1.5 rounded-lg transition-all duration-300 ${isCurrentOpen ? "bg-[#00BFFF] text-black" : "text-[#00BFFF] bg-white/5 group-hover:bg-[#00BFFF]/10"}`}>
                    {isCurrentOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
                  </div>
                </button>

                {/* CSS Grid-Driven Smooth Transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isCurrentOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-7 md:leading-8 font-light tracking-wide">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 text-center bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Still Have Questions?
          </h3>
          <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto font-light leading-6">
            Our expert team is always ready to help you with your custom business websites, app architectures, SEO blueprints, and corporate digital growth needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-8 bg-[#00BFFF] hover:bg-white text-black font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#00BFFF]/10"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;