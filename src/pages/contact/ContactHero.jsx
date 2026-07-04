import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function ContactHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/page-header-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      {/* Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        data-aos="fade-up"
      >
        {/* Badge */}
        <span className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold uppercase tracking-widest">
          📩 Let's Build Something Amazing
        </span>

        {/* H1 */}
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
          Contact{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Seankrix Technologies
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
          Looking for a trusted partner for
          <strong className="text-white">
            {" "}Website Development
          </strong>,
          <strong className="text-white">
            {" "}Mobile App Development
          </strong>,
          <strong className="text-white">
            {" "}Custom Software
          </strong>,
          <strong className="text-white">
            {" "}ERP
          </strong>,
          <strong className="text-white">
            {" "}CRM
          </strong>,
          <strong className="text-white">
            {" "}SEO
          </strong>{" "}
          or
          <strong className="text-white">
            {" "}Digital Marketing
          </strong>
          ? Our experts are ready to help your business grow.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            href="#contact-form"
            className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-white transition duration-300"
          >
            Get Free Consultation
          </Link>

          <Link
            href="/services"
            className="px-8 py-4 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300"
          >
            Explore Services
          </Link>

        </div>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mt-12 flex justify-center items-center gap-3 text-sm text-gray-300"
        >
          <Link
            href="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <span>/</span>

          <span
            className="text-white font-medium"
            aria-current="page"
          >
            Contact Us
          </span>
        </nav>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </section>
  );
}