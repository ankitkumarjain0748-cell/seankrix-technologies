import React from 'react';
import Hero from './Hero';
import Navbar from '../../Components/Navbar';
import Banner from './Banner';
import AboutAgency from './AboutAgency';
import OurServices from './OurServices';
import JoinAgency from './JoinAgency';
import Expertise from './Expertise';
import Testimonials from './Testimonials';
import Footer from '../../Components/Footer';
import LetsCollaborate from '../../Components/LetsCollaborate';
import Whychosse from './Whychosse';
import FeaturesSection from './FeaturesSection'

function Page() {
    return (


        <main className='bg-black'>


            <div className="">


                <div className='relative z-20'>
                    <Navbar />
                    <Hero />
                </div>

                <Banner />
                <AboutAgency />
                <OurServices />
                <Whychosse />
                <FeaturesSection
                />
                <Expertise />
                <JoinAgency />
                <Testimonials />
                <LetsCollaborate />
                <Footer />



            </div>

        </main>
    );
}

export default Page;