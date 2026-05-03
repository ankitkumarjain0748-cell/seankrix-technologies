import React from 'react'
import Navbar from '../../Components/Navbar';
import AboutHero from './AboutHero';
import Banner from '../Home/Banner';
import Footer from '../../Components/Footer';
import OurApproach from './OurApproach';
import Whoweare from './Whoweare';
import Partners from './Partners';
import FAQ from './Faq';

export default function About() {
  return (
  
    <main className='bg-black'>
      
     
      <div className="">
        
      
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
      
        

      </div> 
      {/* रैपर div यहाँ खत्म होता है */}

    </main>
  );
}
