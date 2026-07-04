"use client";

import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogs = [
  {
    slug: "future-of-web-development",
    title: "The Future of Modern Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    category: "Web Development",
    date: "May 2026",
    description: "Explore the latest trends in React, Next.js, AI integration, and modern frontend development.",
  },
  {
    slug: "website-development-company-india-seankrix-technologies",
    title: "Why Choose Seankrix Technologies for Website Development in India",
    image: "/blogs/why-choose-seankrix-technologies.webp",
    category: "Website Development",
    date: "June 29, 2026",
    description: "Looking for a trusted Website Development Company in India? Discover why businesses choose Seankrix Technologies for custom website development, eCommerce solutions, SEO-friendly websites, React.js, Next.js, Laravel, Node.js, and full-stack web application development.",
    keywords: [
      "Website Development Company",
      "Website Development Company India",
      "Custom Website Development",
      "Business Website Development",
      "Professional Website Design",
      "SEO Friendly Website",
      "Responsive Website Development",
      "React JS Development",
      "Next.js Development",
      "Laravel Development",
      "Node.js Development",
      "Full Stack Development",
      "Ecommerce Website Development",
      "Software Development Company",
      "Seankrix Technologies"
    ],
    author: "Seankrix Technologies",
    readTime: "8 min read"
  },
  {
    slug: "seo-strategies-2026",
    title: "Top SEO Strategies To Rank Higher in 2026",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
    category: "SEO",
    date: "May 2026",
    description: "Learn advanced SEO techniques to improve rankings, traffic, and online visibility.",
  },
  {
    slug: "importance-of-ui-ux",
    title: "Why UI/UX Design Matters For Business",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    category: "UI/UX Design",
    date: "May 2026",
    description: "Discover how great UI/UX design improves conversions and customer engagement.",
  },
];

export default function BlogPage() {
  return (
    <Layout>
      <Head>
        {/* 1. Technical & Rendering Basics (हमेशा सबसे ऊपर) */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00BFFF" />
        <meta name="format-detection" content="telephone=no" />

        {/* 2. Primary SEO Tags */}
        <title>Blog | Web Development, SEO & Technology Insights | Seankrix Technologies</title>
        <meta
          name="description"
          content="Explore the latest blogs, tutorials, and insights on Web Development, React JS, Next.js, SEO, Digital Marketing, UI/UX Design, Mobile App Development, E-Commerce, and Software Development from Seankrix Technologies."
        />
        <meta
          name="keywords"
          content="Seankrix Blog, Technology Blog, Web Development Blog, React JS Tutorials, Next JS Tutorials, SEO Tips, Digital Marketing Blog, UI UX Design Blog, Mobile App Development Blog, Software Development Blog, MERN Stack Development, JavaScript Tutorials, Frontend Development, Backend Development, E-Commerce Development, Website Development Guide, Search Engine Optimization, Business Growth Strategies, Tech News, Programming Tutorials"
        />
        <meta name="author" content="Seankrix Technologies" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.seankrixtechnologies.com/blog" />

        {/* Crawling & Geo-Targeting */}
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.country" content="India" />

        {/* 3. Open Graph / Facebook SEO */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seankrix Technologies" />
        <meta property="og:title" content="Blog | Web Development, SEO & Technology Insights" />
        <meta property="og:description" content="Read expert articles, tutorials, and industry insights on Web Development, SEO, Digital Marketing, Mobile Apps, and Modern Technologies." />
        <meta property="og:url" content="https://www.seankrixtechnologies.com/blog" />
        <meta property="og:image" content="https://www.seankrixtechnologies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* 4. Twitter (X) SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Seankrix Technologies" />
        <meta name="twitter:description" content="Latest articles on Web Development, React JS, Next.js, SEO, Digital Marketing, UI/UX Design, and Software Development." />
        <meta name="twitter:image" content="https://www.seankrixtechnologies.com/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />

        {/* 5. Blog Collection Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": "https://www.seankrixtechnologies.com/blog#collection",
              "url": "https://www.seankrixtechnologies.com/blog",
              "name": "Seankrix Technologies Insights Blog",
              "description": "Expert articles and tutorials about web development, SEO, UI/UX design, and IT solutions.",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": blogs.map((blog, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "BlogPosting",
                    "headline": blog.title,
                    "description": blog.description,
                    "url": `https://www.seankrixtechnologies.com/blogs/${blog.slug}`,
                    "image": blog.image.startsWith("http") ? blog.image : `https://www.seankrixtechnologies.com${blog.image}`,
                    "datePublished": blog.date.includes(",") ? new Date(blog.date).toISOString().split('T')[0] : "2026-05-01",
                    "author": {
                      "@type": "Organization",
                      "name": "Seankrix Technologies"
                    }
                  }
                }))
              }
            })
          }}
        />
      </Head>

      <section className="bg-black text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
        <div className="text-center mb-24 max-w-5xl mx-auto px-4">

  {/* Badge */}
  <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
    📚 Knowledge Hub
  </span>

  {/* SEO H1 */}
  <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
    Latest
    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
      {" "}Technology Insights
    </span>
    <br />
    & Expert Articles
  </h1>

  {/* Description */}
  <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-8 text-gray-300">
    Stay updated with the latest insights from
    <strong className="text-white">
      {" "}Seankrix Technologies
    </strong>
    {" "}on
    <span className="text-cyan-400 font-semibold">
      {" "}Website Development
    </span>,
    Mobile App Development,
    SEO,
    Digital Marketing,
    UI/UX Design,
    AI,
    Cloud Computing,
    ERP,
    CRM,
    E-commerce Development
    and modern software technologies to help your business grow online.
  </p>

  {/* CTA */}
  <div className="mt-10 flex flex-wrap justify-center gap-4">

    <a
      href="/services"
      className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-white"
    >
      Explore Our Services
    </a>

    <a
      href="/contact-us"
      className="rounded-full border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
    >
      Get Free Consultation
    </a>

  </div>

</div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-[#00BFFF]/40 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="w-full h-[260px] object-cover hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-5 left-5 bg-[#00BFFF] text-black px-4 py-2 rounded-full text-sm font-semibold">
                    {blog.category}
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-gray-400 text-sm mb-3">
                    {blog.date}
                  </p>
                  <h2 className="text-2xl font-bold mb-4 leading-snug hover:text-[#00BFFF] transition">
                    {blog.title}
                  </h2>
                  <p className="text-gray-400 leading-8 mb-6">
                    {blog.description}
                  </p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-3 text-[#00BFFF] font-semibold hover:gap-5 transition-all duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}