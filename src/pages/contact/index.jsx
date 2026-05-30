// Home.jsx (The Final Solution)

import React from 'react';

import Navbar from '../../Components/Navbar';
import Banner from '../Home/Banner';

import Footer from '../../Components/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import WhatsAppButton from '@/Components/WhatsAppButton';
import Layout from '@/Components/Layout';
import Head from 'next/head';


export default function Index() {
  return (

    <Layout>
      <Head>
  <title>
    Contact Us | Seankrix Technologies
  </title>

  <meta
    name="description"
    content="Contact Seankrix Technologies for Web Development, Mobile App Development, SEO, Digital Marketing, UI/UX Design, E-Commerce Solutions, and Custom Software Development services. Get a free consultation today."
  />

  <meta
    name="keywords"
    content="Contact Seankrix Technologies, Contact Web Development Company, Contact Software Development Company, Contact Mobile App Development Company, Contact SEO Agency India, Website Development Consultation, Custom Software Development Services, IT Company Contact, Web Development Services India, Mobile App Development Services, Digital Marketing Services, SEO Services India"
  />

  <link
    rel="canonical"
    href="https://www.seankrixtechnologies.com/contact-us"
  />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Contact Us | Seankrix Technologies" />
  <meta
    property="og:description"
    content="Get in touch with Seankrix Technologies for professional web development, mobile app development, SEO, digital marketing and software development services."
  />
  <meta
    property="og:url"
    content="https://www.seankrixtechnologies.com/contact-us"
  />
  <meta
    property="og:image"
    content="https://www.seankrixtechnologies.com/og-image.jpg"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Contact Us | Seankrix Technologies"
  />
  <meta
    name="twitter:description"
    content="Contact Seankrix Technologies and discuss your next website, mobile app, SEO or software development project."
  />

  <meta name="robots" content="index, follow" />
</Head>

      <ContactHero />
      <Banner />
      <ContactInfo />
    </Layout>


  );
}