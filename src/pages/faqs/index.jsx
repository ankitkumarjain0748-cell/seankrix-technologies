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
  {/* Primary SEO */}
  <title>
    FAQ | Web Development, Mobile App, SEO & Software Questions | Seankrix Technologies
  </title>

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

  <meta
    name="robots"
    content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
  />

  <meta name="googlebot" content="index,follow" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  <meta
    httpEquiv="content-language"
    content="en-IN"
  />

  <meta
    name="theme-color"
    content="#00BFFF"
  />

  <meta
    name="format-detection"
    content="telephone=no"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://www.seankrixtechnologies.com/faq"
  />

  <link
    rel="alternate"
    hrefLang="en-IN"
    href="https://www.seankrixtechnologies.com/faq"
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:locale"
    content="en_IN"
  />

  <meta
    property="og:site_name"
    content="Seankrix Technologies"
  />

  <meta
    property="og:title"
    content="FAQ | Seankrix Technologies"
  />

  <meta
    property="og:description"
    content="Find answers to common questions about Website Development, Mobile App Development, SEO, Digital Marketing, ERP, CRM and Software Development."
  />

  <meta
    property="og:url"
    content="https://www.seankrixtechnologies.com/faq"
  />

  <meta
    property="og:image"
    content="https://www.seankrixtechnologies.com/og-image.webp"
  />

  <meta
    property="og:image:width"
    content="1200"
  />

  <meta
    property="og:image:height"
    content="630"
  />

  {/* Twitter */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="FAQ | Seankrix Technologies"
  />

  <meta
    name="twitter:description"
    content="Frequently asked questions about Website Development, Mobile Apps, SEO, Digital Marketing and Software Development."
  />

  <meta
    name="twitter:image"
    content="https://www.seankrixtechnologies.com/og-image.webp"
  />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />

  {/* Organization Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Seankrix Technologies",
        "url": "https://www.seankrixtechnologies.com",
        "logo": "https://www.seankrixtechnologies.com/logo.png",
        "telephone": "+91-8824744976",
        "email": "info@seankrixtechnologies.com"
      }),
    }}
  />

  {/* FAQ Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
      }),
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
