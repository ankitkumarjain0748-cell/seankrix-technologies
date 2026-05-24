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
          Web Development Services | SEANKRIX Technologies
        </title>

        <meta
          name="description"
          content="Professional website development services for businesses. Fast, responsive and SEO-friendly solutions."
        />

        <meta
          name="keywords"
          content="Website Development, SEO Services, Next.js Development, MERN Stack Developer"
        />

        <meta
          property="og:title"
          content="SEANKRIX Technologies"
        />

        <meta
          property="og:description"
          content="Professional website development services for businesses."
        />

        <meta
          property="og:url"
          content="https://seankrixtechnologies.com"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://seankrixtechnologies.com/og-image.jpg"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="robots"
          content="index, follow"
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