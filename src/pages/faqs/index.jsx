import React from 'react'
import Navbar from '../../Components/Navbar';
import FaqHero from './FaqHero';
import Banner from '../Home/Banner';
import Footer from '../../Components/Footer';
import LetsCollaborate from '../../Components/LetsCollaborate';
import FaqSection from './FaqSection';
import WhatsAppButton from '@/Components/WhatsAppButton';
import Layout from '@/Components/Layout';
import Head from 'next/head';
export default function Index() {
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
        <title>FAQ | Web Development, Mobile App, SEO & Software Questions | Seankrix Technologies</title>

        <meta
          name="description"
          content="Explore frequently asked questions about Website Development, Mobile App Development, ERP, CRM, E-commerce Development, SEO, Digital Marketing, UI/UX Design and Custom Software Development services offered by Seankrix Technologies."
        />

        <meta
          name="keywords"
          content="FAQ, Web Development FAQ, Website Development Questions, Mobile App Development FAQ, SEO FAQ, Digital Marketing FAQ, Software Development FAQ, ERP Development FAQ, CRM Development FAQ, Ecommerce Development FAQ, React Development FAQ, Next.js FAQ, MERN Stack FAQ, Seankrix Technologies"
        />

        <meta name="author" content="Seankrix Technologies" />
        <meta name="publisher" content="Seankrix Technologies" />

        {/* 3. Crawling & Indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* 4. Canonical & Alternate */}
        <link rel="canonical" href="https://www.seankrixtechnologies.com/faq" />
        <link rel="alternate" hrefLang="en-IN" href="https://www.seankrixtechnologies.com/faq" />

        {/* 5. Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Seankrix Technologies" />
        <meta property="og:title" content="FAQ | Seankrix Technologies" />
        <meta property="og:description" content="Find answers to common questions about Website Development, Mobile App Development, SEO, Digital Marketing, ERP, CRM and Software Development." />
        <meta property="og:url" content="https://www.seankrixtechnologies.com/faq" />
        <meta property="og:image" content="https://www.seankrixtechnologies.com/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* 6. Twitter (X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Seankrix Technologies" />
        <meta name="twitter:description" content="Frequently asked questions about Website Development, Mobile Apps, SEO, Digital Marketing and Software Development." />
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
              ]
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
              "@id": "https://www.seankrixtechnologies.com/faq#webpage",
              "url": "https://www.seankrixtechnologies.com/faq",
              "name": "FAQ | Web Development, Mobile App, SEO & Software Questions | Seankrix Technologies",
              "description": "Explore frequently asked questions about Website Development, Mobile App Development, ERP, CRM, E-commerce Development, SEO, Digital Marketing, UI/UX Design and Custom Software Development services offered by Seankrix Technologies.",
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
              "@id": "https://www.seankrixtechnologies.com/faq#breadcrumb",
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
                  "name": "FAQ",
                  "item": "https://www.seankrixtechnologies.com/faq"
                }
              ]
            })
          }}
        />

        {/* 12. FAQ Schema with Real Questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://www.seankrixtechnologies.com/faq#faqpage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Seankrix Technologies offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Seankrix Technologies offers Website Development, Mobile App Development (Android & iOS), E-commerce Development, CRM Development, ERP Development, SEO Services, Digital Marketing, UI/UX Design, and Custom Software Development."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which technologies do you use for web development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use modern technologies including React.js, Next.js, Node.js, NestJS, Express.js, Laravel, MongoDB, MySQL, PostgreSQL, AWS, and Docker for building scalable web applications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you develop custom mobile apps?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we build custom mobile apps for both Android and iOS platforms using Flutter, React Native, and native technologies. We develop apps for startups, businesses, and enterprises."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the cost of developing a website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of website development depends on various factors like project complexity, features, design requirements, and technology stack. We provide custom quotes after understanding your specific needs. Contact us for a free consultation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to build a website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timeline for website development varies from 2-12 weeks depending on the project scope. A basic business website takes 2-4 weeks, while complex custom applications may take 8-12 weeks. We follow agile methodology for faster delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide SEO and digital marketing services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide comprehensive SEO services including Technical SEO, On-page SEO, Off-page SEO, Local SEO, E-commerce SEO, and Content Marketing. We also offer PPC, Social Media Marketing, and Email Marketing services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between CRM and ERP?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CRM (Customer Relationship Management) focuses on managing customer interactions, sales, and support. ERP (Enterprise Resource Planning) integrates and manages all core business processes like finance, HR, inventory, and supply chain. Both can be integrated for complete business automation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer website maintenance services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer ongoing website maintenance services including security updates, performance optimization, content updates, bug fixes, backups, and 24/7 monitoring. We have flexible maintenance plans to suit different needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I contact Seankrix Technologies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact us via email at info@seankrixtechnologies.com, call us at +91-8824744976, or fill out the contact form on our website. We typically respond within 24 hours."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Seankrix Technologies located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Seankrix Technologies is based in Jaipur, Rajasthan, India. We serve clients globally including India, USA, UK, Canada, Australia, and UAE. We work with clients remotely and provide on-site services when needed."
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <Navbar />
      <FaqHero />
      <Banner />
      <FaqSection />
    </Layout>
  );
}
