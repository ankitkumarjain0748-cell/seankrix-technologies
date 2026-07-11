"use client";

import Layout from "@/Components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote / Jaipur",
    icon: <FaLaptopCode />,
    description:
      "Build modern and responsive websites using React, Next.js, and Tailwind CSS.",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },

  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    icon: <FaPaintBrush />,
    description:
      "Design modern user interfaces and smooth user experiences for websites and apps.",
    skills: ["Figma", "UI Design", "Wireframing"],
  },

  {
    title: "SEO Specialist",
    type: "Part Time",
    location: "Remote",
    icon: <FaSearch />,
    description:
      "Optimize websites and improve search rankings with modern SEO strategies.",
    skills: ["SEO", "Analytics", "Keyword Research"],
  },

  {
    title: "Digital Marketing Expert",
    type: "Full Time",
    location: "Remote",
    icon: <FaBullhorn />,
    description:
      "Manage social media campaigns, paid ads, and digital growth strategies.",
    skills: ["Marketing", "Meta Ads", "Content Strategy"],
  },
];

export default function CareersPage() {
  return (
    <Layout>

      <Head>
        {/* 1. Technical & Rendering Basics */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00BFFF" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="content-language" content="en-IN" />

        {/* 2. Primary SEO Tags */}
        <title>Careers | IT Jobs, Internships & Career Opportunities | Seankrix Technologies</title>

        <meta
          name="description"
          content="Explore exciting career opportunities at Seankrix Technologies. Apply for Web Development, Mobile App Development, UI/UX Design, SEO, Digital Marketing, React JS, Next.js, MERN Stack, and Software Development jobs and internships."
        />

        <meta
          name="keywords"
          content="Careers, IT Jobs India, Software Developer Jobs, Web Developer Jobs, React JS Developer Jobs, Next JS Developer Jobs, MERN Stack Developer Jobs, Frontend Developer Jobs, Backend Developer Jobs, Full Stack Developer Jobs, Mobile App Developer Jobs, UI UX Designer Jobs, SEO Executive Jobs, Digital Marketing Jobs, Internship Opportunities, Remote IT Jobs, Technology Careers, Software Engineering Jobs, Career Opportunities, Seankrix Technologies Careers"
        />

        <meta name="author" content="Seankrix Technologies" />
        <meta name="publisher" content="Seankrix Technologies" />

        {/* 3. Crawling & Indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* 4. Canonical & Alternate */}
        <link rel="canonical" href="https://www.seankrixtechnologies.com/careers" />
        <link rel="alternate" hrefLang="en-IN" href="https://www.seankrixtechnologies.com/careers" />

        {/* 5. Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Seankrix Technologies" />
        <meta property="og:title" content="Careers | Join Seankrix Technologies" />
        <meta property="og:description" content="Join our growing team and build your career in Web Development, Mobile Apps, UI/UX Design, SEO, Digital Marketing, and Software Development." />
        <meta property="og:url" content="https://www.seankrixtechnologies.com/careers" />
        <meta property="og:image" content="https://www.seankrixtechnologies.com/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* 6. Twitter (X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | Seankrix Technologies" />
        <meta name="twitter:description" content="Discover job openings, internships, and career opportunities at Seankrix Technologies." />
        <meta name="twitter:image" content="https://www.seankrixtechnologies.com/og-image.webp" />

        {/* 7. Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* 8. Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* 9. Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.seankrixtechnologies.com/#organization",
              "name": "Seankrix Technologies",
              "url": "https://www.seankrixtechnologies.com",
              "logo": "https://www.seankrixtechnologies.com/logo.png",
              "telephone": "+91-8824744976",
              "email": "info@seankrixtechnologies.com",
              "description": "Seankrix Technologies is a leading Website Development Company in India providing Custom Website Development, Mobile App Development, eCommerce Solutions, CRM, ERP, SEO, and UI/UX Design.",
              "sameAs": [
                "https://www.linkedin.com/in/seankrix-technologies-73b269407/",
                "https://www.instagram.com/seankrix_technologies_/",
                "https://www.facebook.com/people/Sean-Krix/pfbid021cJr9HS5BcZeYvssgDJYxMLpWUSTykWKhA22JiKeTLLda4aDz9aDdsMmcFtBTuekl/",
                "https://github.com/ankitkumarjain0748-cell"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8824744976",
                "contactType": "Customer Support",
                "availableLanguage": ["English", "Hindi"]
              }
            })
          }}
        />

        {/* 10. WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.seankrixtechnologies.com/careers#webpage",
              "url": "https://www.seankrixtechnologies.com/careers",
              "name": "Careers | IT Jobs, Internships & Career Opportunities | Seankrix Technologies",
              "description": "Explore exciting career opportunities at Seankrix Technologies. Apply for Web Development, Mobile App Development, UI/UX Design, SEO, Digital Marketing, React JS, Next.js, MERN Stack, and Software Development jobs and internships.",
              "isPartOf": {
                "@id": "https://www.seankrixtechnologies.com/#website"
              },
              "about": {
                "@id": "https://www.seankrixtechnologies.com/#organization"
              }
            })
          }}
        />

        {/* 11. BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://www.seankrixtechnologies.com/careers#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.seankrixtechnologies.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Careers",
                  "item": "https://www.seankrixtechnologies.com/careers"
                }
              ]
            })
          }}
        />

        {/* 12. Employment Agency Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EmploymentAgency",
              "@id": "https://www.seankrixtechnologies.com/careers#employmentagency",
              "name": "Seankrix Technologies",
              "url": "https://www.seankrixtechnologies.com/careers",
              "logo": "https://www.seankrixtechnologies.com/logo.png",
              "description": "Seankrix Technologies offers exciting career opportunities in IT, Web Development, Mobile Apps, UI/UX Design, SEO, Digital Marketing, and Software Development.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suraj Pole Gate",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302003",
                "addressCountry": "IN"
              },
              "telephone": "+91-8824744976",
              "email": "info@seankrixtechnologies.com",
              "hasJobPostings": [
                {
                  "@type": "JobPosting",
                  "@id": "https://www.seankrixtechnologies.com/careers#job-fullstack",
                  "title": "Full Stack MERN Developer",
                  "description": "We are looking for a skilled Full Stack MERN Developer to join our team. You will be responsible for building web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.",
                  "hiringOrganization": {
                    "@id": "https://www.seankrixtechnologies.com/#organization"
                  },
                  "jobLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Jaipur",
                      "addressRegion": "Rajasthan",
                      "addressCountry": "IN"
                    }
                  },
                  "employmentType": ["FULL_TIME", "REMOTE"],
                  "datePosted": "2026-01-15",
                  "validThrough": "2026-08-31",
                  "applicantLocationRequirements": {
                    "@type": "Country",
                    "name": "India"
                  }
                },
                {
                  "@type": "JobPosting",
                  "@id": "https://www.seankrixtechnologies.com/careers#job-react",
                  "title": "React.js / Next.js Developer",
                  "description": "We are hiring a React.js/Next.js Developer to build modern, responsive, and high-performance web applications with excellent UI/UX.",
                  "hiringOrganization": {
                    "@id": "https://www.seankrixtechnologies.com/#organization"
                  },
                  "jobLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Jaipur",
                      "addressRegion": "Rajasthan",
                      "addressCountry": "IN"
                    }
                  },
                  "employmentType": ["FULL_TIME", "REMOTE"],
                  "datePosted": "2026-01-15",
                  "validThrough": "2026-08-31",
                  "applicantLocationRequirements": {
                    "@type": "Country",
                    "name": "India"
                  }
                },
                {
                  "@type": "JobPosting",
                  "@id": "https://www.seankrixtechnologies.com/careers#job-node",
                  "title": "Node.js / Backend Developer",
                  "description": "We are looking for a Node.js Backend Developer to design and develop RESTful APIs, microservices, and scalable backend architecture.",
                  "hiringOrganization": {
                    "@id": "https://www.seankrixtechnologies.com/#organization"
                  },
                  "jobLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Jaipur",
                      "addressRegion": "Rajasthan",
                      "addressCountry": "IN"
                    }
                  },
                  "employmentType": ["FULL_TIME", "REMOTE"],
                  "datePosted": "2026-01-15",
                  "validThrough": "2026-08-31",
                  "applicantLocationRequirements": {
                    "@type": "Country",
                    "name": "India"
                  }
                },
                {
                  "@type": "JobPosting",
                  "@id": "https://www.seankrixtechnologies.com/careers#job-mobile",
                  "title": "Mobile App Developer (Flutter / React Native)",
                  "description": "We are seeking a Mobile App Developer with experience in Flutter or React Native to build cross-platform mobile applications for Android and iOS.",
                  "hiringOrganization": {
                    "@id": "https://www.seankrixtechnologies.com/#organization"
                  },
                  "jobLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Jaipur",
                      "addressRegion": "Rajasthan",
                      "addressCountry": "IN"
                    }
                  },
                  "employmentType": ["FULL_TIME", "REMOTE"],
                  "datePosted": "2026-01-15",
                  "validThrough": "2026-08-31",
                  "applicantLocationRequirements": {
                    "@type": "Country",
                    "name": "India"
                  }
                },
                {
                  "@type": "JobPosting",
                  "@id": "https://www.seankrixtechnologies.com/careers#job-uiux",
                  "title": "UI/UX Designer",
                  "description": "We are looking for a creative UI/UX Designer to design beautiful and user-friendly interfaces for web and mobile applications.",
                  "hiringOrganization": {
                    "@id": "https://www.seankrixtechnologies.com/#organization"
                  },
                  "jobLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Jaipur",
                      "addressRegion": "Rajasthan",
                      "addressCountry": "IN"
                    }
                  },
                  "employmentType": ["FULL_TIME", "REMOTE"],
                  "datePosted": "2026-01-15",
                  "validThrough": "2026-08-31",
                  "applicantLocationRequirements": {
                    "@type": "Country",
                    "name": "India"
                  }
                },
                {
                  "@type": "JobPosting",
                  "@id": "https://www.seankrixtechnologies.com/careers#job-intern",
                  "title": "Web Development Intern",
                  "description": "We are offering a Web Development Internship for fresh graduates and students to learn and work on real-world projects with React.js, Next.js, and Node.js.",
                  "hiringOrganization": {
                    "@id": "https://www.seankrixtechnologies.com/#organization"
                  },
                  "jobLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Jaipur",
                      "addressRegion": "Rajasthan",
                      "addressCountry": "IN"
                    }
                  },
                  "employmentType": ["INTERN"],
                  "datePosted": "2026-01-15",
                  "validThrough": "2026-08-31",
                  "applicantLocationRequirements": {
                    "@type": "Country",
                    "name": "India"
                  }
                }
              ]
            })
          }}
        />
      </Head>


      <section className="relative bg-black text-white py-24 px-4 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00BFFF]/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">

            <p className="text-[#00BFFF] uppercase tracking-[4px] mb-4">
              Careers
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Join Our <span className="text-[#00BFFF]">Creative Team</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
              Build your future with Seankrix Technologies and work on
              modern digital products, websites, apps, and marketing solutions.
            </p>
          </div>

          {/* Jobs */}
          <div className="grid md:grid-cols-2 gap-8">

            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:border-[#00BFFF]/40 transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#00BFFF]/10 text-[#00BFFF] flex items-center justify-center text-3xl mb-6">
                  {job.icon}
                </div>

                {/* Job Title */}
                <h2 className="text-3xl font-bold mb-3">
                  {job.title}
                </h2>

                {/* Info */}
                <div className="flex gap-4 flex-wrap mb-5">

                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    {job.type}
                  </span>

                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    {job.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-8 mb-6">
                  {job.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#00BFFF]/10 border border-[#00BFFF]/20 text-[#00BFFF] px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#00BFFF] hover:bg-white text-black px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 text-center">

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Don’t See The Right Role?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
              We’re always looking for talented developers, designers,
              marketers, and creative thinkers.
            </p>

            <Link
              href="/contact"
              className="inline-flex mt-8 bg-[#00BFFF] hover:bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Send Your Resume
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}