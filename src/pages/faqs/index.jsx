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
  <title>
    FAQ | Frequently Asked Questions | Seankrix Technologies
  </title>

  <meta
    name="description"
    content="Find answers to frequently asked questions about Web Development, Mobile App Development, SEO Services, Digital Marketing, UI/UX Design, E-Commerce Solutions, and Custom Software Development at Seankrix Technologies."
  />

  <meta
    name="keywords"
    content="FAQ, Frequently Asked Questions, Web Development FAQ, Website Development Questions, Mobile App Development FAQ, SEO Services FAQ, Digital Marketing FAQ, UI UX Design FAQ, Software Development FAQ, Ecommerce Website FAQ, React JS FAQ, Next JS FAQ, MERN Stack FAQ, Seankrix Technologies FAQ"
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
    href="https://www.seankrixtechnologies.com/faq"
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:title"
    content="FAQ | Seankrix Technologies"
  />

  <meta
    property="og:description"
    content="Get answers to common questions about website development, mobile apps, SEO, digital marketing, and software development services."
  />

  <meta
    property="og:url"
    content="https://www.seankrixtechnologies.com/faq"
  />

  <meta
    property="og:image"
    content="https://www.seankrixtechnologies.com/og-image.jpg"
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
    content="Frequently asked questions about web development, mobile app development, SEO, and software solutions."
  />

  <meta
    name="twitter:image"
    content="https://www.seankrixtechnologies.com/og-image.jpg"
  />
</Head>

      <Navbar />
      <FaqHero />


      <Banner />
      <FaqSection />
    </Layout>
  );
}
