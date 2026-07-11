import React from "react";

export default function Leadership() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0d0d0d] to-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#00BFFF] text-sm font-semibold tracking-wide">
            Leadership Team
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Meet The Vision Behind{" "}
            <span className="text-[#00BFFF]">
              Seankrix Technologies
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 mt-6 text-lg leading-8">
            Our leadership combines technical expertise, innovation, and a
            client-first mindset to deliver scalable digital solutions that help
            businesses grow in today's competitive market.
          </p>
        </div>

        {/* Founder */}
        <div className="border border-white/10 rounded-3xl p-8 md:p-10 mb-8 bg-white/5 backdrop-blur-lg hover:border-[#00BFFF]/40 transition-all duration-300">

          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-[#00BFFF]" />
            <p className="uppercase tracking-widest text-[#00BFFF] text-sm font-semibold">
              Founder
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-5">
            Ankit Kumar Jain
          </h3>

          <p className="text-gray-300 leading-8 text-lg">
            Ankit Kumar Jain is the Founder of Seankrix Technologies and a
            passionate Full Stack MERN Developer with over <strong>3+ years of
            professional experience</strong> in modern web development.
            Throughout his career, he has successfully delivered multiple
            business websites, enterprise web applications, CRM systems,
            ERP solutions, eCommerce platforms, and custom software for
            startups and growing businesses.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            His expertise includes React.js, Next.js, Node.js, Express.js,
            MongoDB, MySQL, REST APIs, SEO-focused development, scalable
            architectures, and cloud deployment. He believes in building
            high-performance, secure, and user-friendly digital products that
            create measurable business value.
          </p>
        </div>

        {/* Co-Founder */}
        <div className="border border-white/10 rounded-3xl p-8 md:p-10 bg-white/5 backdrop-blur-lg hover:border-[#00BFFF]/40 transition-all duration-300">

          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-[#00BFFF]" />
            <p className="uppercase tracking-widest text-[#00BFFF] text-sm font-semibold">
              Co-Founder
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-5">
            Sejal Jain
          </h3>

          <p className="text-gray-300 leading-8 text-lg">
            Sejal is the Co-Founder of Seankrix Technologies and plays a key
            role in managing operations, client relationships, project
            coordination, and business development. With over
            <strong> 2+ years of industry experience</strong>, she helps ensure
            that every project is delivered with quality, transparency, and a
            customer-first approach.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            Her focus on communication, planning, and execution enables the
            development team to deliver projects efficiently while maintaining
            long-term client relationships and exceptional service standards.
          </p>
        </div>

      </div>
    </section>
  );
}