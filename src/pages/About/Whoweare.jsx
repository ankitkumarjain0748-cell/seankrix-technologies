import React from 'react';
import CountUp from 'react-countup'; // CountUp लाइब्रेरी इम्पोर्ट करें

// React Icons से ज़रूरी आइकन्स इम्पोर्ट करें
import { FaStar, FaPlay } from 'react-icons/fa';
import { FiArrowUpRight, FiThumbsUp } from 'react-icons/fi';
import { HiOutlineUserGroup, HiOutlineUserAdd } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';

// प्लेसहोल्डर इमेजेज़
const videoThumbnail = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const avatar1 = "https://randomuser.me/api/portraits/men/32.jpg";
const avatar2 = "https://randomuser.me/api/portraits/women/67.jpg";
const avatar3 = "https://randomuser.me/api/portraits/men/46.jpg";
const avatar4 = "https://randomuser.me/api/portraits/women/31.jpg";
const avatar5 = "https://randomuser.me/api/portraits/men/75.jpg";

// मुख्य कॉम्पोनेंट
export default function Whoweare() {

  // आँकड़ों का डेटा
  const stats = [
    {
      icon: <HiOutlineUserAdd className="w-8 h-8" />,
      value: "35k+",
      label: "Happy Customer Around the World"
    },
    {
      icon: <BiSupport className="w-8 h-8" />,
      value: "120+",
      label: "best client support award achieved"
    },
    {
      icon: <HiOutlineUserGroup className="w-8 h-8" />,
      value: "250+",
      label: "trusted best partners and sponsors"
    },
    {
      icon: <FiThumbsUp className="w-8 h-8" />,
      value: "5k+",
      label: "active users using our best services"
    }
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text Content & Video */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-4">
              <span className="text-[#BFF747] text-xl">*</span> WHO WE ARE
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
              Experts in <span className="text-[#BFF747] font-bold">digital</span> brand innovation
            </h1>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg">
            We specialize in transforming brands through cutting-edge digital strategies, blending creativity with technology to drive growth, enhance engagement, and deliver memorable experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            {/* Video Thumbnail */}
            <div className="relative w-40 h-28 rounded-2xl overflow-hidden flex-shrink-0">
              <img src={videoThumbnail} alt="Team collaboration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-14 h-14 bg-[#BFF747] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                  <FaPlay className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Reviews and Contact */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[#BFF747]" />)}
              </div>
              <p className="text-gray-400 font-medium">(40+ Reviews)</p>
              <div className="flex items-center -space-x-3">
                {[avatar1, avatar2, avatar3, avatar4, avatar5].map((avatar, i) => (
                   <img key={i} src={avatar} alt={`Reviewer ${i+1}`} className="w-10 h-10 rounded-full border-2 border-black object-cover"/>
                ))}
              </div>
              <a href="#contact" className="flex items-center gap-2 text-[#BFF747] font-bold mt-2 hover:underline">
                Contact Now <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Stats Cards */}
        <div className="relative mt-10 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const number = parseInt(stat.value);
              const suffix = stat.value.substring(String(number).length);

              return (
                <div 
                  key={index}
                  // सिर्फ दूसरे और तीसरे कार्ड पर ग्रेडिएंट लगाने के लिए कंडीशन
                  className={`bg-[#121212] ${ (index === 1 || index === 2) ? 'bg-[radial-gradient(ellipse_at_center,rgba(191,247,71,0.1),transparent_90%)]' : '' } p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-48 transition-transform duration-300 ${
                    index === 0 || index === 2 ? 'lg:-translate-y-8' : 'lg:translate-y-8'
                  }`}
                >
                  <div className="text-right">
                    <span className="text-[#BFF747]">{stat.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-[#BFF747] mb-2">
                      <CountUp 
                        end={number} 
                        duration={3} 
                        suffix={suffix} 
                        enableScrollSpy
                        scrollSpyDelay={200}
                      />
                    </h3>
                    <p className="text-gray-400 text-sm leading-snug">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}