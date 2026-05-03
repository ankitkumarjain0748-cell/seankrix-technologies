import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

// प्लेसहोल्डर इमेजेज़ (आप इन्हें अपनी इमेज से बदल सकते हैं)
const mainImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%33D%3D";
const overlappingImage = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// FAQ डेटा
const faqData = [
  {
    question: "What services does your agency offer?",
    answer: "We offer a comprehensive range of digital services, including web design and development, SEO, content marketing, social media management, and paid advertising campaigns."
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline for a project varies depending on its scope and complexity. A standard website design can take anywhere from 4 to 8 weeks, while a full digital marketing strategy may be an ongoing process."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! We love working with small businesses and startups to help them grow their online presence. We offer scalable solutions that can fit various budgets and goals."
  },
  {
    question: "Can you help with existing websites?",
    answer: "Yes, we can help improve and optimize existing websites. Whether you need a redesign, SEO improvements, or new features, our team is ready to assist."
  }
];

// Accordion आइटम के लिए अलग कॉम्पोनेंट
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-white/10 rounded-2xl p-5 transition-all duration-300">
      <button 
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-white font-medium text-lg">{item.question}</span>
        <div className="bg-[#BFF747] text-black rounded-full p-1">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen pt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-400">
          {item.answer}
        </p>
      </div>
    </div>
  );
};


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
       {/* Green Glow Effect */}
       <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-lime-500/10 blur-[150px] rounded-full -z-0" />
       <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-lime-500/10 blur-[120px] rounded-full -z-0" />


      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Images */}
        <div className="relative h-[500px] flex items-center justify-center lg:h-full">
          {/* Background Image */}
          <div className="relative w-full max-w-md h-full">
             <img 
                src={mainImage} 
                alt="Business meeting" 
                className="w-full h-full object-cover rounded-3xl"
             />
             {/* Phone Number Badge */}
             <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm p-3 rounded-full flex items-center gap-3 text-white">
                <div className="bg-[#BFF747] text-black rounded-full p-2">
                    <FaPhoneAlt />
                </div>
                <span>(30) 8855-314</span>
             </div>
          </div>

          {/* Overlapping Image */}
          <img 
            src={overlappingImage} 
            alt="Business professional"
            className="absolute -top-10 lg:-top-16 right-0 w-2/3 max-w-xs object-cover rounded-3xl border-8 border-black"
          />
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">
              <span className="text-[#BFF747] text-xl">*</span> HAVE ANY QUESTIONS?
            </p>
            <h2 className="text-4xl sm:text-5xl font-light leading-tight">
              Let us address your <br/>
              <span className="text-[#BFF747] font-bold">questions</span> today!
            </h2>
          </div>
          
          <div className="flex flex-col gap-4 mt-4">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}