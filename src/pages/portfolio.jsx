"use client";

import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "CadmaxPro",
    description:
      "A modern real estate platform showcasing property listings, upcoming projects, services, and career opportunities. Built with a scalable MERN architecture and responsive user experience.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "https://ankit-jain-mern-portfolio.vercel.app/static/media/cadmpro.b78b155988a8c9337829.png",
    demo: "https://cadmaxpro.com",
    category: "Real Estate",
  },
  {
    title: "StackEarn",
    description:
      "A complete EdTech and referral-based earning platform where instructors can sell courses, students can learn online, and users can earn through referrals. Includes Razorpay payments, blogs, and admin management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
    image: "https://ankit-jain-mern-portfolio.vercel.app/static/media/stackearn.a801fd874d4795c22ca0.png",
    demo: "https://stackearn.com",
    category: "EdTech Platform",
  },
  {
    title: "Cadmax Atelier",
    description:
      "A full-stack MERN eCommerce and vendor booking platform supporting products, services, and vendor listings. Features secure payments, order tracking, package management, and complete admin control.",
    technologies: ["Next.js", "React.js", "Node.js", "MongoDB", "Razorpay"],
    image: "https://ankit-jain-mern-portfolio.vercel.app/static/media/cad.5971de475b9494eeff0f.png",
    demo: "https://cadmaxatelier.com/",
    category: "eCommerce Platform",
  },
];

export default function PortfolioPage() {
  return (
    <Layout>
      <Head>
        {/* 1. Technical & Rendering Basics (हमेशा सबसे ऊपर) */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00BFFF" />
        <meta name="format-detection" content="telephone=no" />

        {/* 2. Primary SEO Tags */}
        <title>Our Portfolio & Case Studies | Seankrix Technologies</title>
        <meta
          name="description"
          content="Explore web development projects, mobile app solutions, and eCommerce case studies delivered by Seankrix Technologies. See how we help brands grow online."
        />
        <meta
          name="keywords"
          content="Case Studies, Client Success Stories, Portfolio, Web Development Projects, Website Development Case Studies, Mobile App Development Projects, SEO Success Stories, Digital Marketing Results, UI UX Design Projects, E-Commerce Development Case Studies, Software Development Projects, Business Growth Strategies, Digital Transformation, IT Solutions India, Seankrix Technologies Portfolio"
        />
        <meta name="author" content="Seankrix Technologies" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.seankrixtechnologies.com/case-studies" />

        {/* Crawling & Geo-Targeting */}
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.country" content="India" />

        {/* 3. Open Graph / Facebook SEO */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seankrix Technologies" />
        <meta property="og:title" content="Our Work & Portfolio | Seankrix Technologies" />
        <meta property="og:description" content="Discover how our web development, mobile apps, SEO, and digital marketing solutions helped businesses achieve measurable growth." />
        <meta property="og:url" content="https://www.seankrixtechnologies.com/case-studies" />
        <meta property="og:image" content="https://www.seankrixtechnologies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* 4. Twitter (X) SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Portfolio & Case Studies | Seankrix Technologies" />
        <meta name="twitter:description" content="Explore successful client projects, SEO growth stories, software solutions, and digital transformation case studies." />
        <meta name="twitter:image" content="https://www.seankrixtechnologies.com/og-image.jpg" />

        {/* Favicon Link (Fixed inside Head) */}
        <link rel="icon" href="/favicon.ico" />

        {/* 5. Portfolio Collection Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": "https://www.seankrixtechnologies.com/case-studies#collection",
              "url": "https://www.seankrixtechnologies.com/case-studies",
              "name": "Seankrix Technologies Project Portfolio",
              "description": "A collection of web development, EdTech, and eCommerce projects developed by Seankrix Technologies.",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": projects.map((project, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": project.title,
                    "description": project.description,
                    "genre": project.category,
                    "url": project.demo,
                    "image": project.image
                  }
                }))
              }
            })
          }}
        />
      </Head>

      <section className="relative bg-black text-white py-24 px-4 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00BFFF]/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[#00BFFF] uppercase tracking-[4px] font-medium mb-4">
              Our Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Our Latest <span className="text-[#00BFFF]">Projects</span>
            </h1>
            <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
              Explore our latest web development, app development,
              UI/UX, SEO, and digital transformation projects built
              for startups, businesses, and enterprises worldwide.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#00BFFF]/50 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-5 left-5 bg-[#00BFFF] text-black text-sm font-semibold px-4 py-2 rounded-full">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-[#00BFFF] transition">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 leading-7 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/10 border border-white/10 text-sm px-4 py-2 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <Link
                    href={project?.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[#00BFFF] font-semibold hover:gap-5 transition-all duration-300"
                  >
                    View Project
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Build Your Next
              <span className="text-[#00BFFF]"> Digital Project?</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
              We create modern, scalable, and high-performance digital
              solutions that help businesses grow faster online.
            </p>
            <Link
              href="/contact"
              className="inline-flex mt-8 bg-[#00BFFF] hover:bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}