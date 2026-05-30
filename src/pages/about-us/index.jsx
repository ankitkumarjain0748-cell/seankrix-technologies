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

export default function Index() {
  return (

    <main className='bg-black'>
      <Head>
        <title>
          About Seankrix Technologies | Web Development & Software Development Company
        </title>

        <meta
          name="description"
          content="Learn about Seankrix Technologies, a leading web development, mobile app development, SEO, digital marketing, UI/UX design, and custom software development company helping businesses grow with innovative digital solutions."
        />

        <meta
          name="keywords"
          content="About Seankrix Technologies, Web Development Company India, Software Development Company India, Mobile App Development Company, IT Company India, Custom Software Development, Digital Solutions Company, SEO Services Company, Digital Marketing Agency India, UI UX Design Services, React JS Development Company, Next JS Development Company, MERN Stack Development Company, Startup IT Solutions, Enterprise Software Development"
        />

        <meta name="author" content="Seankrix Technologies" />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.seankrixtechnologies.com/about-us"
        />

        <meta
          property="og:title"
          content="About Seankrix Technologies | Digital Innovation Partner"
        />

        <meta
          property="og:description"
          content="Discover Seankrix Technologies and our mission to deliver innovative web, mobile, software, and digital marketing solutions."
        />

        <meta
          property="og:url"
          content="https://www.seankrixtechnologies.com/about-us"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://www.seankrixtechnologies.com/og-image.jpg"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="About Seankrix Technologies"
        />

        <meta
          name="twitter:description"
          content="Learn about our expertise in web development, mobile apps, SEO, digital marketing, and custom software solutions."
        />
      </Head>
      <div className='relative z-20'>
        <Navbar />
        <AboutHero />

      </div>

      <Banner />
      <OurApproach />
      <Whoweare />
      <Partners />
      <FAQ />


      <Footer />

      <WhatsAppButton />



    </main>
  );
}
