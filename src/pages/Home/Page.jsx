import React from "react";
import Head from "next/head";

import Hero from "./Hero";
import Banner from "./Banner";
import AboutAgency from "./AboutAgency";
import OurServices from "./OurServices";
import JoinAgency from "./JoinAgency";
import Expertise from "./Expertise";
import Whychosse from "./Whychosse";
import FeaturesSection from "./FeaturesSection";

import Layout from "@/Components/Layout";

function Page() {
  return (
    <>
    <Head>
  {/* 1. Technical & Rendering Basics (सबसे ऊपर होना चाहिए) */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#00BFFF" />
  <meta name="format-detection" content="telephone=no" />

  {/* 2. Primary SEO Tags */}
  <title>Website Development Company in India | Seankrix Technologies</title>
  <meta
    name="description"
    content="Seankrix Technologies is a leading Website Development Company in India providing Custom Website Development, Mobile App Development, eCommerce Solutions, CRM, ERP, SEO, and UI/UX Design."
  />
  <meta 
    name="keywords" 
    content="Website Development Company India, Best Web Development Company, Custom Website Development, Website Design Company, Business Website Development, Responsive Website Design, React JS Development, Next.js Development, Node.js Development, Laravel Development, MERN Stack Development, Mobile App Development, Android App Development, iOS App Development, Flutter App Development, CRM Development, ERP Development, Software Development Company, Custom Software Development, SEO Company India, Digital Marketing Company, UI UX Design, Ecommerce Website Development" 
  />
  
  {/* Canonical Link (केवल एक बार) */}
  <link rel="canonical" href="https://www.seankrixtechnologies.com/" />

  {/* Crawling & Geo-Targeting */}
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow" />
  <meta httpEquiv="content-language" content="en-IN" />
  <meta name="geo.region" content="IN-RJ" />
  <meta name="geo.country" content="India" />
  <meta name="author" content="Seankrix Technologies" />
  <meta name="publisher" content="Seankrix Technologies" />

  {/* 3. Open Graph / Facebook SEO */}
  <meta property="og:locale" content="en_IN" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Seankrix Technologies" />
  <meta property="og:title" content="Website Development Company in India | Seankrix Technologies" />
  <meta property="og:description" content="Professional Website Development, Mobile Apps, CRM, ERP, SEO & Software Development Services." />
  <meta property="og:url" content="https://www.seankrixtechnologies.com" />
  <meta property="og:image" content="https://www.seankrixtechnologies.com/og-image.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* 4. Twitter (X) SEO */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Website Development Company in India | Seankrix Technologies" />
  <meta name="twitter:description" content="Professional Website Development, Mobile App Development, SEO & Software Solutions." />
  <meta name="twitter:image" content="https://www.seankrixtechnologies.com/og-image.webp" />

  {/* 5. Icons & Fonts Performance */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.json" />
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />

  {/* 6. Optimized Combined Schema Markup (JSON-LD) */}
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://seankrixtechnologies.com/#organization",
        "name": "Seankrix Technologies",
        "url": "https://seankrixtechnologies.com",
        "logo": "https://seankrixtechnologies.com/logo.png",
        "image": "https://seankrixtechnologies.com/logo.png",
        "email": "info@seankrixtechnologies.com",
        "telephone": "+91-8824744976",
        "description":
          "Seankrix Technologies is a leading Website Development Company in India offering website development, mobile app development, SEO, UI/UX, CRM, ERP, cloud solutions, and custom software development.",
        "sameAs": [
          "https://www.linkedin.com/in/seankrix-technologies-73b269407/",
          "https://www.instagram.com/seankrix_technologies_/",
          "https://www.facebook.com/people/Sean-Krix/pfbid021cJr9HS5BcZeYvssgDJYxMLpWUSTykWKhA22JiKeTLLda4aDz9aDdsMmcFtBTuekl/",
          "https://github.com/ankitkumarjain0748-cell"
        ]
      },

      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://seankrixtechnologies.com/#website",
        "url": "https://seankrixtechnologies.com",
        "name": "Seankrix Technologies",
        "publisher": {
          "@id": "https://seankrixtechnologies.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://seankrixtechnologies.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },

      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://seankrixtechnologies.com/#localbusiness",
        "name": "Seankrix Technologies",
        "url": "https://seankrixtechnologies.com",
        "image": "https://seankrixtechnologies.com/logo.png",
        "telephone": "+91-8824744976",
        "email": "info@seankrixtechnologies.com",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "areaServed": "India"
      },

      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Seankrix Technologies",
        "url": "https://seankrixtechnologies.com",
        "provider": {
          "@id": "https://seankrixtechnologies.com/#organization"
        },
        "serviceType": [
          "Website Development",
          "Web Application Development",
          "Mobile App Development",
          "Ecommerce Development",
          "SEO Optimization",
          "UI UX Design",
          "Cloud Solutions",
          "CRM Development",
          "ERP Development",
          "Software Development"
        ]
      },

      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Seankrix Technologies provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide website development, mobile app development, ecommerce solutions, SEO, UI/UX design, CRM, ERP, cloud solutions, and custom software development."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build custom business websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We develop custom, SEO-friendly, responsive business websites tailored to your business goals."
            }
          },
          {
            "@type": "Question",
            "name": "Which technologies do you use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with React.js, Next.js, Node.js, NestJS, Laravel, TypeScript, MongoDB, MySQL, PostgreSQL, AWS, and modern web technologies."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide SEO services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide technical SEO, on-page SEO, performance optimization, and SEO-friendly website development."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Seankrix Technologies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact us through our website, email info@seankrixtechnologies.com, or call +91 88247 44976."
            }
          }
        ]
      }
    ])
  }}
/>
</Head>

      <Layout>
        <Hero />

        <Banner />

        <AboutAgency />

        <OurServices />

        <Whychosse />

        <FeaturesSection />

        <Expertise />

        <JoinAgency />
      </Layout>
    </>
  );
}

export default Page;