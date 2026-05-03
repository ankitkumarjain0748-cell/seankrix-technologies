import React from 'react';

// React Icons से कुछ उदाहरण आइकन्स
import { FaBolt, FaSun, FaWater, FaConnectdevelop, FaRegCircle, FaAward } from 'react-icons/fa';

// पार्टनर लोगो का डेटा
const partners = [
  { icon: <FaBolt />, name: "Logoipsum" },
  { icon: <FaSun />, name: "Logoipsum" },
  { icon: <FaWater />, name: "Logoipsum" },
  { icon: <FaConnectdevelop />, name: "Logoipsum" },
  { icon: <FaRegCircle />, name: "Logoipsum" },
  { icon: <FaAward />, name: "Logoipsum" },
];

export default function Partners() {
  return (
    // सेक्शन की पैडिंग को छोटे स्क्रीन के लिए कम किया गया
    <section className="bg-black w-full flex items-center justify-center py-16 sm:py-20 px-4">
      {/* कार्ड की पैडिंग पहले से ही रेस्पॉन्सिव है (p-8 md:p-12) */}
      <div className="max-w-5xl w-full bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-12">
        {/* मुख्य ग्रिड: मोबाइल पर 1 कॉलम, टैबलेट और डेस्कटॉप पर 2 कॉलम */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center">
          
          {/* Left Column: Text Content */}
          {/* मोबाइल पर टेक्स्ट को सेंटर में और डेस्कटॉप पर लेफ्ट में किया गया */}
          <div className="text-white text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">
              <span className="text-[#BFF747] text-xl">*</span> 
              EXECUTIVE PARTNERS
            </p>
            {/* हेडिंग के फॉन्ट साइज़ को सभी स्क्रीन के लिए रेस्पॉन्सिव बनाया गया */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              100+ <span className="text-[#BFF747] font-bold">partners</span> & supporters
            </h2>
          </div>

          {/* Right Column: Logos Grid */}
          {/* लोगो ग्रिड पहले से ही रेस्पॉन्सिव है (grid-cols-2 sm:grid-cols-3) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-black rounded-xl p-4 md:flex items-center justify-center gap-2 sm:gap-3 h-16"
              >
                <span className="text-[#BFF747] text-xl">
                  {partner.icon}
                </span>
                {/* लोगो के नाम का साइज़ भी छोटे स्क्रीन के लिए एडजस्ट किया गया */}
                <span className="text-white font-semibold text-xs sm:text-sm">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}