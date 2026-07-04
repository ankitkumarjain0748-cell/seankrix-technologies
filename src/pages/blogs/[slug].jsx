"use client";

import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const blogData = {
  "future-of-web-development": {
    slug: "future-of-web-development",
    title: "The Future of Modern Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    category: "Web Development",
    date: "May 2026",
    isoDate: "2026-05-01",
    readTime: "5 min read",
    excerpt: "Explore the latest trends in React, Next.js, AI integration, and modern frontend development with Seankrix Technologies.",
    keywords: "Future of Web Development, Modern Web Tech, Next.js Trends, AI Web Tools, React Server Components",
    content: `
Modern web development is evolving rapidly with technologies like React, Next.js, AI tools, server components, and cloud infrastructure.

Businesses now require fast, scalable, SEO-friendly, and responsive applications to compete online.

Next.js has become one of the most powerful frameworks for building modern websites due to its speed, performance, and SEO optimization features.

AI-powered tools are also transforming development workflows by increasing productivity and improving user experience.

Developers who learn modern frontend technologies and performance optimization techniques will have massive opportunities in the future.
    `,
  },

  "seo-strategies-2026": {
    slug: "seo-strategies-2026",
    title: "Top SEO Strategies To Rank Higher in 2026",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1400&auto=format&fit=crop",
    category: "SEO",
    date: "May 2026",
    isoDate: "2026-05-15",
    readTime: "6 min read",
    excerpt: "Learn advanced SEO techniques to improve organic rankings, website traffic, and online search visibility in 2026.",
    keywords: "SEO Strategies 2026, Core Web Vitals, Rank Higher on Google, Technical SEO, Content Marketing India",
    content: `
SEO continues to evolve with Google's algorithm updates and AI-driven search experiences.

Modern SEO focuses on content quality, page speed, mobile optimization, and user experience.

Businesses should prioritize technical SEO, structured data, keyword research, and content marketing.

High-quality backlinks and optimized user engagement metrics also play a major role in search rankings.

Consistent SEO strategies can help businesses generate long-term organic traffic and leads.
    `,
  },

  "importance-of-ui-ux": {
    slug: "importance-of-ui-ux",
    title: "Why UI/UX Design Matters For Business",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1400&auto=format&fit=crop",
    category: "UI/UX Design",
    date: "May 2026",
    isoDate: "2026-05-20",
    readTime: "4 min read",
    excerpt: "Discover how a great UI/UX design improves business conversions, customer trust, and overall web user engagement.",
    keywords: "UI UX Design Business, User Experience Optimization, Website Conversion Rate, Minimal Design Trends",
    content: `
UI/UX design directly impacts how users interact with digital products and websites.

A clean and modern design improves customer trust, engagement, and conversion rates.

Good UX design ensures users can navigate smoothly and complete actions easily.

Businesses investing in user-centered design often see better customer retention and satisfaction.

Modern UI trends include minimal layouts, smooth animations, dark themes, and mobile-first design.
    `,
  },

  "website-development-company-india-seankrix-technologies": {
    slug: "website-development-company-india-seankrix-technologies",
    title: "Website Development Company in India | Why Choose Seankrix Technologies",
    image: "/blogs/why-choose-seankrix-technologies.webp",
    category: "Website Development",
    date: "June 29, 2026",
    isoDate: "2026-06-29",
    readTime: "8 min read",
    excerpt: "Looking for a trusted Website Development Company in India? Discover why businesses choose Seankrix Technologies for custom websites, eCommerce solutions, web applications, and SEO-friendly digital experiences built with modern technologies.",
    keywords: "Website Development Company in India, Custom Website Development, Business Website Development, Responsive Website Design, SEO Friendly Website, React Development Company, Next.js Development Company, Node.js Development, Laravel Development, Full Stack Development, eCommerce Website Development, Web Application Development, Software Development Company, Seankrix Technologies",
    content: `
Your website is the digital foundation of your business. It creates the first impression, builds trust, generates leads, and helps customers discover your products and services online.

At Seankrix Technologies, we develop modern, fast, secure, and SEO-friendly websites tailored to your business goals. Our solutions are designed to improve user experience, increase search engine visibility, and support long-term business growth.

## What Makes Seankrix Technologies Different?
* 100% Custom Website Development
* Responsive Mobile-First Design
* SEO-Optimized Website Structure
* Fast Loading Performance
* Secure Development Practices
* Modern Tech Stack (React, Next.js, Node.js, Laravel)
* Scalable Architecture
* Ongoing Support & Maintenance

## Our Website Development Services
* Business Website Development
* Corporate Websites
* Portfolio Websites
* Landing Pages
* eCommerce Website Development
* Custom Web Application Development

Technologies We Use For Development
* React.js & Next.js Frameworks
* Node.js & Laravel Backends
* MongoDB, MySQL & Firebase Databases
* Tailwind CSS for Responsive Layouts

## Why Technical SEO Optimization Matters
Every website we build follows modern technical SEO practices including Schema Markup, Core Web Vitals optimization, responsive layout, and clean structural URLs. These improvements help search engines understand your website and improve your chances of ranking for relevant keywords.

## Conclusion & Next Steps
Choosing the right website development partner is essential for online success. At Seankrix Technologies, we combine design, development, performance optimization, and SEO to build websites that help businesses attract customers, improve conversions, and grow online.
`
  }
};

export default function BlogDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [copied, setCopied] = useState(false);

  if (!slug || !blogData[slug]) {
    return null;
  }

  const blog = blogData[slug];

  const relatedArticles = Object.values(blogData)
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  const currentUrl = `https://www.seankrixtechnologies.com/blogs/${blog.slug}`;
  const metaDescription = blog.excerpt || blog.content.trim().slice(0, 155);
  const metaKeywords = blog.keywords || `${blog.category}, Web Development, SEO, Seankrix`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Advanced Line-by-Line Content Parser (Fixes rendering mixups)
  const renderContent = (text) => {
    const lines = text.split("\n");
    const elements = [];
    let currentList = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (!trimmedLine) return;

      // Check if it's a list item
      if (trimmedLine.startsWith("*")) {
        currentList.push(trimmedLine.replace("*", "").trim());
      } else {
        // If we were collecting list items, flush them into a <ul> first
        if (currentList.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="space-y-3.5 my-6 pl-1 list-none">
              {currentList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 text-[16px] md:text-[18px] leading-7">
                  <span className="text-[#00BFFF] font-bold select-none mt-[2px]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
          currentList = [];
        }

        // Handle Headings (##)
        if (trimmedLine.startsWith("##")) {
          elements.push(
            <h2 key={`h2-${index}`} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 tracking-tight border-l-4 border-[#00BFFF] pl-4">
              {trimmedLine.replace("##", "").trim()}
            </h2>
          );
        } 
        // Handle Regular Text (Paragraphs or clean heading lines)
        else {
          elements.push(
            <p key={`p-${index}`} className="text-gray-300 font-light tracking-wide text-[16px] md:text-[18px] leading-[32px] md:leading-[36px] mb-6 whitespace-pre-line">
              {trimmedLine}
            </p>
          );
        }
      }
    });

    // Final check if list elements remain at the end of content
    if (currentList.length > 0) {
      elements.push(
        <ul key="ul-final" className="space-y-3.5 my-6 pl-1 list-none">
          {currentList.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300 text-[16px] md:text-[18px] leading-7">
              <span className="text-[#00BFFF] font-bold select-none mt-[2px]">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{blog.title} | Seankrix Technologies</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content="Seankrix Technologies" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.country" content="India" />
        <link rel="canonical" href={currentUrl} />
        
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={`${blog.title} | Seankrix Technologies`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={blog.image.startsWith("http") ? blog.image : `https://www.seankrixtechnologies.com${blog.image}`} />
        <meta property="article:published_time" content={blog.isoDate || "2026-05-01"} />
        <meta property="article:author" content="https://www.seankrixtechnologies.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": blog.title,
              "image": blog.image.startsWith("http") ? blog.image : `https://www.seankrixtechnologies.com${blog.image}`,
              "datePublished": blog.isoDate || "2026-05-01",
              "description": metaDescription,
              "author": { "@type": "Organization", "name": "Seankrix Technologies", "url": "https://www.seankrixtechnologies.com" }
            })
          }}
        />
      </Head>

      <section className="bg-black text-white py-16 md:py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00BFFF]/5 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#00BFFF] transition">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#00BFFF] transition">Blog</Link>
            <span>/</span>
            <span className="text-gray-400 truncate max-w-xs">{blog.title}</span>
          </nav>

          {/* Title Header */}
          <div className="mb-10">
            <span className="bg-[#00BFFF]/10 text-[#00BFFF] border border-[#00BFFF]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight tracking-tight max-w-5xl">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-400 mt-6 text-sm border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#00BFFF]/20 text-[#00BFFF] flex items-center justify-center font-bold text-xs">S</span>
                <span>By Seankrix Desk</span>
              </div>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span className="text-[#00BFFF] font-medium">{blog.readTime || "6 min read"}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] mb-12 shadow-2xl border border-white/5">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content Layout */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Minimalist Article Space */}
            <div className="lg:col-span-2 space-y-6">
              <article className="max-w-none text-gray-300 antialiased selection:bg-[#00BFFF]/30">
                {renderContent(blog.content)}
              </article>

              {/* Social Share Group */}
              <div className="border-t border-b border-white/10 py-6 my-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm font-semibold text-gray-400">Enjoyed reading? Share this article:</span>
                <div className="flex flex-wrap items-center gap-3">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#0077b5]/10 hover:bg-[#0077b5] text-white text-xs font-semibold rounded-xl transition-all duration-300">LinkedIn</a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/10 hover:bg-white hover:text-black text-white text-xs font-semibold rounded-xl transition-all duration-300">Twitter (X)</a>
                  <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + " - " + currentUrl)}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#25D366]/10 hover:bg-[#25D366] text-white text-xs font-semibold rounded-xl transition-all duration-300">WhatsApp</a>
                  <button onClick={copyToClipboard} className="px-4 py-2 bg-white/5 hover:bg-[#00BFFF] hover:text-black text-white text-xs font-semibold rounded-xl transition-all duration-300">
                    {copied ? "Copied! ✓" : "Copy Link"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side Strategy Panel */}
            <div className="space-y-8 sticky top-24">
              <div className="bg-gradient-to-br from-[#00BFFF]/20 via-black to-black border border-[#00BFFF]/30 rounded-[32px] p-8 text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00BFFF]/10 blur-xl rounded-full"></div>
                <h3 className="text-2xl font-bold mb-3">Want a Custom Solution?</h3>
                <p className="text-gray-400 text-sm leading-6 mb-6">
                  Build fast, enterprise-grade, SEO-friendly websites with India's trusted development agency.
                </p>
                <Link href="/contact" className="block bg-[#00BFFF] hover:bg-white text-black font-semibold text-sm py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#00BFFF]/20">
                  Book A Free Strategy Call
                </Link>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-[32px] p-6">
                <h4 className="text-lg font-bold mb-4 border-b border-white/10 pb-3">More Insights</h4>
                <div className="space-y-4">
                  {Object.values(blogData).slice(0, 3).map((item, i) => (
                    <Link key={i} href={`/blogs/${item.slug}`} className="group block">
                      <p className="text-xs text-[#00BFFF] font-medium mb-1">{item.category}</p>
                      <p className="text-sm text-gray-300 group-hover:text-white font-medium line-clamp-2 transition duration-200">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Section */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Recommended <span className="text-[#00BFFF]">Articles</span></h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((article, index) => (
                <div key={index} className="bg-white/[0.02] border border-white/5 rounded-3xl p-5 flex flex-col md:flex-row gap-5 hover:border-[#00BFFF]/30 transition duration-300 group">
                  <div className="relative w-full md:w-40 h-28 overflow-hidden rounded-2xl shrink-0">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <span className="text-[#00BFFF] text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                      <h4 className="text-lg font-bold text-white mt-1 line-clamp-2 group-hover:text-[#00BFFF] transition duration-200">{article.title}</h4>
                    </div>
                    <Link href={`/blogs/${article.slug}`} className="text-sm text-gray-400 group-hover:text-white flex items-center gap-1 mt-3 transition">
                      Read Article <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}