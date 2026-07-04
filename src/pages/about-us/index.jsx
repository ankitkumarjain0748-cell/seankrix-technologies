import React from 'react'
import Navbar from '../../Components/Navbar';
import AboutHero from './AboutHero';
import Banner from '../Home/Banner';
import Footer from '../../Components/Footer';
import OurApproach from './OurApproach';
import Whoweare from './Whoweare';
import Partners from './Partners';
import FAQ from './Faq';
import WhatsAppButton from '@/Components/WhatsAppButton';
import Head from 'next/head';
import Layout from '@/Components/Layout';

export default function Index() {
  return (

    <Layout>
      <Head>
        {/* 1. Technical & Rendering Basics (हमेशा टॉप पर) */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00BFFF" />
        <meta name="format-detection" content="telephone=no" />

        {/* 2. Primary SEO Tags */}
        <title>About Seankrix Technologies | Web & Software Development Company</title>
        <meta
          name="description"
          content="Learn about Seankrix Technologies, a leading web development, mobile app development, SEO, and custom software company helping businesses grow with innovative digital solutions."
        />
        <meta
          name="keywords"
          content="About Seankrix Technologies, Web Development Company India, Software Development Company India, Mobile App Development Company, IT Company India, Custom Software Development, Digital Solutions Company, SEO Services Company, Digital Marketing Agency India, UI UX Design Services, React JS Development Company, Next JS Development Company, MERN Stack Development Company, Startup IT Solutions, Enterprise Software Development"
        />
        <meta name="author" content="Seankrix Technologies" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.seankrixtechnologies.com/about-us" />

        {/* Crawling & Geo-Targeting */}
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.country" content="India" />

        {/* 3. Open Graph / Facebook SEO */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seankrix Technologies" />
        <meta property="og:title" content="About Seankrix Technologies | Digital Innovation Partner" />
        <meta property="og:description" content="Discover Seankrix Technologies and our mission to deliver innovative web, mobile, software, and digital marketing solutions." />
        <meta property="og:url" content="https://www.seankrixtechnologies.com/about-us" />
        <meta property="og:image" content="https://www.seankrixtechnologies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* 4. Twitter (X) SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Seankrix Technologies | Web & Software Experts" />
        <meta name="twitter:description" content="Learn about our expertise in web development, mobile apps, SEO, digital marketing, and custom software solutions." />
        <meta name="twitter:image" content="https://www.seankrixtechnologies.com/og-image.jpg" />

        {/* 5. Dedicated AboutPage Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "@id": "https://www.seankrixtechnologies.com/about-us#about",
              "url": "https://www.seankrixtechnologies.com/about-us",
              "name": "About Seankrix Technologies",
              "description": "Learn about Seankrix Technologies, our mission, vision, and expertise in providing cutting-edge IT and software solutions.",
              "mainEntity": {
                "@type": "Organization",
                "name": "Seankrix Technologies",
                "url": "https://www.seankrixtechnologies.com",
                "logo": "https://www.seankrixtechnologies.com/logo.png"
              }
            })
          }}
        />
      </Head>
      <section className="bg-black text-white py-20 px-4 sm:px-8">
        <AboutHero />


        <Banner />
        <OurApproach />
        <Whoweare />
        <Partners />
        <FAQ />


        

      </section>

    </Layout>
  );
}
