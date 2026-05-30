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
        <title>
          Seankrix Technologies | Web Development, Mobile App Development & Digital Solutions
        </title>

        <meta
          name="description"
          content="Seankrix Technologies is a leading IT company providing Web Development, Mobile App Development, E-Commerce Solutions, UI/UX Design, SEO, Digital Marketing, Custom Software Development, and Cloud Solutions for startups and businesses worldwide."
        />

      <meta
  name="keywords"
  content="Seankrix Technologies, IT Company India, Software Development Company, Web Development Company, Web Development Company India, Website Development Services, Custom Website Development, Responsive Website Design, Business Website Development, Startup Website Development, Affordable Website Development, Website Maintenance Services, Website Redesign Services, E-Commerce Website Development, Ecommerce Website Development, React JS Development, React JS Development Company, Next JS Development, Next JS Development Company, MERN Stack Development, MERN Stack Developer, Node JS Development, Full Stack Development, Frontend Development, Backend Development, Mobile App Development, Mobile App Development Company, Android App Development, iOS App Development, Flutter App Development, Cross Platform App Development, UI UX Design Services, SEO Services, SEO Services India, Search Engine Optimization, Local SEO Services, Digital Marketing Services, Digital Marketing Agency India, Social Media Marketing, Custom Software Development, CRM Development, ERP Development, SaaS Development, API Development, Cloud Solutions, Enterprise Software Development, Startup IT Solutions, Best Web Development Company India"
/>

        <meta name="author" content="Seankrix Technologies" />
        <meta name="publisher" content="Seankrix Technologies" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.seankrixtechnologies.com/"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Seankrix Technologies | Web Development, Mobile App Development & Digital Solutions"
        />

        <meta
          property="og:description"
          content="Professional Web Development, Mobile App Development, SEO, Digital Marketing, UI/UX Design, E-Commerce, and Custom Software Solutions for businesses."
        />

        <meta
          property="og:url"
          content="https://www.seankrixtechnologies.com/"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seankrix Technologies" />

        <meta
          property="og:image"
          content="https://www.seankrixtechnologies.com/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Seankrix Technologies - Web Development & Digital Solutions"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Seankrix Technologies | Web Development & Digital Solutions"
        />

        <meta
          name="twitter:description"
          content="Grow your business with Web Development, Mobile Apps, SEO, Digital Marketing, and Custom Software Solutions."
        />

        <meta
          name="twitter:image"
          content="https://www.seankrixtechnologies.com/og-image.jpg"
        />

        {/* Mobile SEO */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="theme-color"
          content="#00BFFF"
        />

        <meta
          name="format-detection"
          content="telephone=no"
        />

        <meta charSet="UTF-8" />
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