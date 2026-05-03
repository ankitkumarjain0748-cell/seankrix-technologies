import React from 'react'
import Navbar from '../../Components/Navbar';
import FaqHero from './FaqHero';
import Banner from '../Home/Banner';
import Footer from '../../Components/Footer';
import LetsCollaborate from '../../Components/LetsCollaborate';
import FaqSection from './FaqSection';
export default function Faq() {
  return (
  
    <main className='bg-black'>
      
     
      <div className="">
        
      
        <div className='relative z-20'>
          <Navbar />
          <FaqHero />
          
        </div>

        <Banner />
        <FaqSection />
       
      
        <LetsCollaborate />
        <Footer />
      
        

      </div> 
      {/* रैपर div यहाँ खत्म होता है */}

    </main>
  );
}
