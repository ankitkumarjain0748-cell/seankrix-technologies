import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [openContentFAQ, setOpenContentFAQ] = useState(null); // This state isn't explicitly used for content, consider merging or refining if content categories are dynamic.

  const faqs = [
    {
      category: 'General Information',
      questions: [
        {
          id: 'general1',
          question: 'What types of projects do you specialize in?',
          answer: 'We specialize in a wide range of projects, from residential to commercial, including new constructions, renovations, and extensions.',
        },
        {
          id: 'general2',
          question: 'How do I start a project with your company?',
          answer: 'Starting a project is easy! Contact us through our website, email, or phone. We\'ll schedule an initial consultation to discuss your needs and ideas.',
        },
        {
          id: 'general3',
          question: 'Do you offer a free, no obligation quotation?',
          answer: 'Yes, we offer free, no-obligation quotations. Simply contact us to discuss your project.',
        },
        {
          id: 'general4',
          question: 'What services do you offer?',
          answer: 'We offer a comprehensive range of services including architectural design, project management, and construction.',
        },
      ],
    },
    {
      category: 'Content Creation', // Changed to match your right sidebar link
      questions: [
        {
          id: 'content1',
          question: 'What kind of content do you create?',
          answer: 'We create various types of content, including articles, blog posts, website copy, social media content, and marketing materials.',
        },
        {
          id: 'content2',
          question: 'How do you ensure content quality?',
          answer: 'Our content goes through a rigorous review process, including fact-checking, editing, and proofreading by experienced professionals.',
        },
        {
          id: 'content3',
          question: 'Can you adapt to different brand voices?',
          answer: 'Absolutely. We work closely with clients to understand their brand guidelines and adapt our writing style to match their unique voice and tone.',
        },
      ],
    },
    {
      category: 'Project Management', // Changed to match your right sidebar link
      questions: [
        {
          id: 'project1',
          question: 'How do you ensure a project stays on budget?',
          answer: 'We maintain strict budget tracking and communicate regularly with clients to avoid cost overruns. Our project managers provide transparent financial updates.',
        },
        {
          id: 'project2',
          question: 'What project management methodologies do you use?',
          answer: 'We primarily use Agile and Waterfall methodologies, adapting our approach to suit the project\'s specific needs and client preferences.',
        },
        {
          id: 'project3',
          question: 'How do you handle project changes or scope creep?',
          answer: 'We have a structured change management process. All changes are documented, reviewed, and approved by the client to ensure alignment and manage expectations.',
        },
      ],
    },
    {
      category: 'Pricing & Payments', // Added a new category for the right sidebar link
      questions: [
        {
          id: 'pricing1',
          question: 'What is your pricing model?',
          answer: 'Our pricing model varies depending on the project scope and complexity. We offer fixed-price contracts, hourly rates, and retainer options.',
        },
        {
          id: 'pricing2',
          question: 'Do you require an upfront deposit?',
          answer: 'Yes, an upfront deposit is typically required to commence work, with subsequent payments linked to project milestones.',
        },
        {
          id: 'pricing3',
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods, including bank transfers, credit cards, and online payment platforms for your convenience.',
        },
      ],
    },
  ];

  const handleToggleFAQ = (id, category) => {
    // A single state can manage all open FAQs if IDs are unique across categories
    // For simplicity and to match original intent, let's keep it somewhat separate if needed
    // However, a single 'openId' state would be more robust if all IDs are unique globally.
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Re-evaluating the `openContentFAQ` state:
  // Since all FAQs are within the same structure, a single `openFAQ` state,
  // where `openFAQ` holds the `id` of the currently open question, is sufficient
  // if all `id`s across all categories are unique.
  // I've adjusted `handleToggleFAQ` to be generic.

  return (
    <div className="min-h-screen bg-[black] text-white p-4 md:p-8 lg:p-12 font-sans">
      <style>
        {`
        /* Custom scrollbar hiding for Firefox */
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        /* Custom scrollbar hiding for Webkit browsers (Chrome, Safari, Opera) */
        .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }
        `}
      </style>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Section (Scrollable on MD screens and above) */}
        {/* Added overflow-y-auto and scrollbar-hide */}
        <div className="flex-1 md:pr-8 md:overflow-y-auto md:max-h-[calc(100vh-64px)] scrollbar-hide">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-10">
              {/* Conditional rendering for green "Information" word */}
              <h2 className="text-6xl font-bold mb-6">
                <span style={{ color: '#8FFF00' }}>
                  {section.category.split(' ').slice(0, -1).join(' ')}{' '}
                </span>
                <span className="text-white">
                  {section.category.split(' ').pop()}
                </span>
              </h2>
              {section.questions.map((faq, index) => (
                <div key={index} className="mb-4 bg-[#1A1A1A] rounded-lg p-5">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggleFAQ(faq.id, section.category)} // Simplified toggle handler
                  >
                    <p className="text-2xl font-medium">{faq.question}</p>
                    <span className="text-xl">
                      {openFAQ === faq.id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          style={{ color: '#8FFF00' }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          style={{ color: '#8FFF00' }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </span>
                  </div>
                  {openFAQ === faq.id && ( // Check against the single openFAQ state
                    <p className="mt-3 text-xl text-gray-400">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Section (Fixed on MD screens and above) */}
        <div className="md:w-80 lg:w-96 md:flex-shrink-0 md:sticky md:top-8 md:self-start">
          <div className="bg-[#1A1A1A] rounded-2xl shadow-2xl p-5  mb-6">

            <ul className=" text-xl ">
              {faqs.map((section) => (
                <li key={section.category}>
                  <a
                    href={`#${section.category.replace(/\s/g, '-')}`} // Link to sections
                    className="flex justify-between border-b border-gray-100 border-opacity-20 pt-8 pb-8 items-center text-gray-300 hover:text-[#8FFF00]"
                  >
                    {section.category}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
              {/* Original hardcoded list, replaced with dynamic mapping */}
            </ul>
          </div>

          <div className="bg-[#1A1A1A] rounded-lg p-5 text-center justify-center">
            <div className="mb-4 justify-center">
              <span className="text-3xl text-[#BFF747] justify-center text-center" role="img" aria-label="exclamation mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none"><path d="M19.7854 54.2444L2.64258 58.5301L6.92829 45.6729V7.10151C6.92829 5.96487 7.37982 4.87478 8.18355 4.07105C8.98728 3.26733 10.0774 2.8158 11.214 2.8158H54.0711C55.2078 2.8158 56.2979 3.26733 57.1016 4.07105C57.9053 4.87478 58.3569 5.96487 58.3569 7.10151V49.9587C58.3569 51.0953 57.9053 52.1854 57.1016 52.9891C56.2979 53.7928 55.2078 54.2444 54.0711 54.2444H19.7854Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.6426 13.5301V26.3872" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.6429 41.3872C33.8263 41.3872 34.7857 40.4278 34.7857 39.2444C34.7857 38.0609 33.8263 37.1015 32.6429 37.1015C31.4594 37.1015 30.5 38.0609 30.5 39.2444C30.5 40.4278 31.4594 41.3872 32.6429 41.3872Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </span>
            </div>
            <p className="text-3xl font-bold mb-2" style={{ color: '#8FFF00' }}>
              You have different questions?
            </p>
            <p className="text-white text-xl mb-4">
              Our team will answer all your questions. we ensure a quick response.
            </p>
            <button className="bg-[#8FFF00] text-black py-3 px-6 rounded-full font-bold flex items-center justify-center mx-auto hover:bg-opacity-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (30) 8655-314
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;