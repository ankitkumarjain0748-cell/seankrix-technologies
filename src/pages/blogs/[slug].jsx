"use client";

import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import blogData from "../../json/blog.json";

export default function BlogDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [copied, setCopied] = useState(false);

  // 1. Safe lookup for the post matching the URL slug
  const blog = blogData.find((b) => b.slug === slug);

  // 2. Early exit while Next.js populates `router.query` on hydration
  if (!router.isReady) {
    return (
      <Layout>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <p className="text-gray-400">Loading article...</p>
        </div>
      </Layout>
    );
  }

  // 3. Early exit if the slug does not match any entry in blog.json
  if (!blog) {
    return (
      <Layout>
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-6">The post you are looking for does not exist or has been moved.</p>
          <Link href="/blog" className="bg-[#00BFFF] text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  // Filter out the active blog post for recommendations
  const relatedArticles = Object.values(blogData)
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  const currentUrl = `https://www.seankrixtechnologies.com/blogs/${blog.slug}`;
  const metaDescription = blog.description || blog.excerpt || blog.content.trim().slice(0, 155);
  const metaKeywords = Array.isArray(blog.keywords) 
    ? blog.keywords.join(", ") 
    : `${blog.category}, Web Development, SEO, Seankrix`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Content Parser
  const renderContent = (text) => {
    if (!text) return null;
    const lines = text.split("\n");
    const elements = [];
    let currentList = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      if (trimmedLine.startsWith("*")) {
        currentList.push(trimmedLine.replace("*", "").trim());
      } else {
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

        if (trimmedLine.startsWith("##")) {
          elements.push(
            <h2 key={`h2-${index}`} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 tracking-tight border-l-4 border-[#00BFFF] pl-4">
              {trimmedLine.replace("##", "").trim()}
            </h2>
          );
        } else {
          elements.push(
            <p key={`p-${index}`} className="text-gray-300 font-light tracking-wide text-[16px] md:text-[18px] leading-[32px] md:leading-[36px] mb-6 whitespace-pre-line">
              {trimmedLine}
            </p>
          );
        }
      }
    });

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
        <meta property="og:image" content={blog.image?.startsWith("http") ? blog.image : `https://www.seankrixtechnologies.com${blog.image}`} />
        <meta property="article:published_time" content={blog.isoDate || "2026-05-01"} />
        <meta property="article:author" content="https://www.seankrixtechnologies.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": blog.title,
              "image": blog.image?.startsWith("http") ? blog.image : `https://www.seankrixtechnologies.com${blog.image}`,
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
            <Link href="/blogs" className="hover:text-[#00BFFF] transition">Blog</Link>
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
          {blog.image && (
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] mb-12 shadow-2xl border border-white/5">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-contain object-center transition-transform duration-500 hover:scale-100"
              />
            </div>
          )}

          {/* Content Layout */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
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
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Recommended <span className="text-[#00BFFF]">Articles</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((article, index) => (
                <Link
                  key={index}
                  href={`/blogs/${article.slug}`}
                  className="block"
                >
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-5 flex flex-col md:flex-row gap-5 hover:border-[#00BFFF]/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
                    <div className="relative w-full md:w-40 h-28 overflow-hidden rounded-2xl shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="flex flex-col justify-between py-1 flex-1">
                      <div>
                        <span className="text-[#00BFFF] text-xs font-semibold uppercase tracking-wider">
                          {article.category}
                        </span>

                        <h4 className="text-lg font-bold text-white mt-1 line-clamp-2 group-hover:text-[#00BFFF] transition duration-200">
                          {article.title}
                        </h4>
                      </div>

                      <span className="text-sm text-gray-400 group-hover:text-white flex items-center gap-1 mt-3 transition">
                        Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}