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
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    category: "Web Development",
    date: "May 2026",
    description:
      "Explore the latest trends in React, Next.js, AI integration, and modern frontend development.",
  },
{
slug: "website-development-company-india-seankrix-technologies",

title: "Why Choose Seankrix Technologies for Website Development in India",

image: "/blogs/why-choose-seankrix-technologies.webp",

category: "Website Development",

date: "June 29, 2026",

description:
"Looking for a trusted Website Development Company in India? Discover why businesses choose Seankrix Technologies for custom website development, eCommerce solutions, SEO-friendly websites, React.js, Next.js, Laravel, Node.js, and full-stack web application development.",

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
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
    category: "SEO",
    date: "May 2026",
    description:
      "Learn advanced SEO techniques to improve rankings, traffic, and online visibility.",
  },

  {
    slug: "importance-of-ui-ux",
    title: "Why UI/UX Design Matters For Business",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    category: "UI/UX Design",
    date: "May 2026",
    description:
      "Discover how great UI/UX design improves conversions and customer engagement.",
  },
];

export default function BlogPage() {
  return (
    <Layout>
      <Head>
        <title>
          Blog | Web Development, SEO & Technology Insights | Seankrix Technologies
        </title>

        <meta
          name="description"
          content="Explore the latest blogs, tutorials, and insights on Web Development, React JS, Next.js, SEO, Digital Marketing, UI/UX Design, Mobile App Development, E-Commerce, and Software Development from Seankrix Technologies."
        />

        <meta
          name="keywords"
          content="Seankrix Blog, Technology Blog, Web Development Blog, React JS Tutorials, Next JS Tutorials, SEO Tips, Digital Marketing Blog, UI UX Design Blog, Mobile App Development Blog, Software Development Blog, MERN Stack Development, JavaScript Tutorials, Frontend Development, Backend Development, E-Commerce Development, Website Development Guide, Search Engine Optimization, Business Growth Strategies, Tech News, Programming Tutorials"
        />

        <meta
          name="author"
          content="Seankrix Technologies"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.seankrixtechnologies.com/blog"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.seankrixtechnologies.com/blog"
        />

        <meta
          property="og:title"
          content="Blog | Web Development, SEO & Technology Insights"
        />

        <meta
          property="og:description"
          content="Read expert articles, tutorials, and industry insights on Web Development, SEO, Digital Marketing, Mobile Apps, and Modern Technologies."
        />

        <meta
          property="og:image"
          content="https://www.seankrixtechnologies.com/og-image.jpg"
        />

        <meta
          property="og:site_name"
          content="Seankrix Technologies"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Blog | Seankrix Technologies"
        />

        <meta
          name="twitter:description"
          content="Latest articles on Web Development, React JS, Next.js, SEO, Digital Marketing, UI/UX Design, and Software Development."
        />

        <meta
          name="twitter:image"
          content="https://www.seankrixtechnologies.com/og-image.jpg"
        />

        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <section className="bg-black text-white py-24 px-4">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">

            <p className="text-[#00BFFF] uppercase tracking-[4px] mb-4">
              Our Blog
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Latest <span className="text-[#00BFFF]">Articles</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
              Explore insights, tutorials, and expert knowledge about
              web development, SEO, UI/UX, digital marketing, and technology.
            </p>
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