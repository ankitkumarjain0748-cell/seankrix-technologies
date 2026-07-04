import EnrollNowPopup from "@/Components/EnrollNowPopup";
import Layout from "@/Components/Layout";
import { useState } from "react";
import Head from "next/head";



const courses = [
    {
        title: "MERN Stack Development",
        duration: "3 - 6 Months",
        icon: "🚀",
        skills: [
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "REST APIs",
            "Authentication",
            "Redux Toolkit",
            "Deployment",
        ],
    },
    {
        title: "React Native Development",
        duration: "2 - 4 Months",
        icon: "📱",
        skills: [
            "React Native",
            "Expo",
            "Firebase",
            "Push Notifications",
            "API Integration",
            "Navigation",
            "Redux",
            "App Publishing",
        ],
    },
    {
        title: "Python Development",
        duration: "3 - 6 Months",
        icon: "🐍",
        skills: [
            "Python Basics",
            "OOP",
            "Flask",
            "Django",
            "APIs",
            "Database Integration",
            "Automation",
            "Projects",
        ],
    },
    {
        title: "Java Development",
        duration: "3 - 6 Months",
        icon: "☕",
        skills: [
            "Core Java",
            "Advanced Java",
            "Spring Boot",
            "JDBC",
            "MySQL",
            "REST APIs",
            "Collections",
            "Projects",
        ],
    },
];

const benefits = [
    "Live Projects",
    "Industry Expert Mentors",
    "Internship Opportunities",
    "Resume Building",
    "Interview Preparation",
    "Certificate of Completion",
    "Career Guidance",
    "Job Assistance",
];

export default function TrainingPage() {

    const [selectedCourse, setSelectedCourse] = useState("");
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);



    return (
        <Layout>

            <Head>
                <title>
                    Best IT Training & Internship in Jaipur | MERN, React Native, Python &
                    Java | Seankrix Technologies
                </title>

                <meta
                    name="description"
                    content="Join Seankrix Technologies for MERN Stack, React Native, Python and Java Training with Live Projects, Internship, Placement Assistance, Industry Mentorship and Certification."
                />

                <meta
                    name="keywords"
                    content="IT Training Jaipur, MERN Stack Training Jaipur, React Native Training, Python Training, Java Training, Internship Jaipur, Software Training Institute Jaipur, Live Projects, Web Development Course, Seankrix Technologies"
                />

                <meta name="author" content="Seankrix Technologies" />
                <meta name="publisher" content="Seankrix Technologies" />

                <meta
                    name="robots"
                    content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
                />

                <meta name="googlebot" content="index,follow" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="theme-color" content="#00BFFF" />

                <meta httpEquiv="content-language" content="en-IN" />

                <meta name="geo.region" content="IN-RJ" />

                <meta name="geo.country" content="India" />

                <link
                    rel="canonical"
                    href="https://www.seankrixtechnologies.com/training"
                />

                <link
                    rel="alternate"
                    hrefLang="en-IN"
                    href="https://www.seankrixtechnologies.com/training"
                />

                <meta property="og:type" content="website" />

                <meta property="og:locale" content="en_IN" />

                <meta property="og:site_name" content="Seankrix Technologies" />

                <meta
                    property="og:title"
                    content="Best IT Training & Internship Programs | Seankrix Technologies"
                />

                <meta
                    property="og:description"
                    content="Learn MERN Stack, React Native, Python and Java with Live Projects, Internship, Career Guidance and Placement Assistance."
                />

                <meta
                    property="og:url"
                    content="https://www.seankrixtechnologies.com/training"
                />

                <meta
                    property="og:image"
                    content="https://www.seankrixtechnologies.com/og-training.webp"
                />

                <meta property="og:image:width" content="1200" />

                <meta property="og:image:height" content="630" />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="IT Training & Internship | Seankrix Technologies"
                />

                <meta
                    name="twitter:description"
                    content="Industry Ready Training with Internship and Placement Assistance."
                />

                <meta
                    name="twitter:image"
                    content="https://www.seankrixtechnologies.com/og-training.webp"
                />

                <link rel="icon" href="/favicon.ico" />

                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />

                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />

                <link rel="dns-prefetch" href="//fonts.googleapis.com" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "EducationalOrganization",
                            name: "Seankrix Technologies",
                            url: "https://www.seankrixtechnologies.com",
                            logo: "https://www.seankrixtechnologies.com/logo.png",
                            email: "info@seankrixtechnologies.com",
                            telephone: "+91-8824744976"
                        }),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Course",
                            name: "IT Training & Internship Programs",
                            provider: {
                                "@type": "Organization",
                                name: "Seankrix Technologies",
                                sameAs: "https://www.seankrixtechnologies.com"
                            },
                            description:
                                "Professional MERN Stack, React Native, Python and Java Training with Live Projects, Internship and Placement Assistance."
                        }),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://www.seankrixtechnologies.com"
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Training",
                                    item: "https://www.seankrixtechnologies.com/training"
                                }
                            ]
                        }),
                    }}
                />
            </Head>
            <section
                id="courses"
                className="relative py-24 overflow-hidden"
            >
                {/* Background Blur */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 relative z-10">

                    {/* Heading */}
                  <div className="text-center mb-20 max-w-5xl mx-auto">

  {/* Badge */}
  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wide uppercase">
    🚀 Industry-Oriented Training Programs
  </span>

  {/* Main Heading */}
  <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
    Best{" "}
    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
      IT Training
    </span>{" "}
    & Internship
    <br />
    Programs in{" "}
    <span className="text-cyan-400">
      Jaipur
    </span>
  </h1>

  {/* Description */}
  <p className="mt-8 text-lg md:text-xl text-gray-300 leading-8 max-w-3xl mx-auto">
    Learn{" "}
    <strong className="text-white">
      MERN Stack, React Native, Python, Java,
      Web Development
    </strong>{" "}
    and other in-demand technologies through
    <span className="text-cyan-400 font-semibold">
      {" "}Live Projects
    </span>,
    Industry Mentorship,
    Internship Opportunities,
    Career Guidance and Placement Assistance
    at <strong className="text-white">Seankrix Technologies</strong>.
  </p>

  {/* CTA Buttons */}
  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

    <button
      onClick={() => setIsEnrollOpen(true)}
      className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all duration-300"
    >
      Enroll Now →
    </button>

    <a
      href="/contact"
      className="px-8 py-4 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
    >
      Talk to an Expert
    </a>

  </div>

</div>

                    {/* Bento Grid */}
                    <div className="grid lg:grid-cols-12 gap-6">

                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className={`
            group relative overflow-hidden
            rounded-3xl border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            hover:border-cyan-500/50
            transition-all duration-500
            hover:-translate-y-2

            ${index === 0
                                        ? "lg:col-span-7"
                                        : index === 1
                                            ? "lg:col-span-5"
                                            : index === 2
                                                ? "lg:col-span-5"
                                                : "lg:col-span-7"
                                    }
          `}
                            >

                                {/* Hover Gradient */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent"></div>

                                <div className="relative z-10 p-8 md:p-10">

                                    {/* Top */}
                                    <div className="flex items-center justify-between">

                                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-3xl">
                                            {course.icon}
                                        </div>

                                        <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                                            {course.duration}
                                        </span>

                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl font-bold mt-8 mb-4">
                                        {course.title}
                                    </h3>

                                    <p className="text-gray-400 mb-8">
                                        Learn industry-standard tools, frameworks and
                                        real-world development practices through hands-on
                                        projects and expert mentorship.
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-3">

                                        {course.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="
                    px-4 py-2
                    rounded-xl
                    bg-slate-800/70
                    border border-slate-700
                    text-sm
                    text-gray-300
                  "
                                            >
                                                {skill}
                                            </span>
                                        ))}

                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-10">

                                        <span className="text-cyan-400 font-medium">
                                            Live Projects Included
                                        </span>

                                        <button
                                            onClick={() => {
                                                setSelectedCourse(course.title);
                                                setIsEnrollOpen(true);
                                            }}
                                            className="
    px-6 py-3
    rounded-xl
    bg-cyan-500
    text-black
    font-semibold
    hover:bg-white
    transition
  "
                                        >
                                            Enroll Now →
                                        </button>


                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                    <section className="mt-20">

                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold">
                                Why Choose Seankrix Technologies?
                            </h2>

                            <p className="text-gray-400 mt-4">
                                Everything you need to become industry ready.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="
          group
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-6
          text-center
          hover:border-cyan-500/50
          transition-all
          duration-300
        "
                                >
                                    <div className="text-3xl mb-4">✅</div>

                                    <h3 className="font-semibold text-lg">
                                        {benefit}
                                    </h3>
                                </div>
                            ))}

                        </div>

                    </section>



                    {/* Stats Section */}

                    <div className="text-center mt-24 mb-12">

                        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
                            Training Excellence
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-6">
                            Empowering Students With
                            <span className="block text-cyan-400">
                                Real Industry Experience
                            </span>
                        </h2>

                        <p className="max-w-3xl mx-auto text-gray-400 mt-6 text-lg leading-relaxed">
                            Our training programs are designed to bridge the gap between academic
                            learning and industry requirements through practical training, live
                            projects, expert mentorship, and career-focused guidance.
                        </p>

                    </div>

                    {/* Bottom Feature Cards */}

                    <div className="grid md:grid-cols-4 gap-5 mt-16">

                        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
                            <h4 className="text-cyan-400 text-3xl font-bold">100%</h4>
                            <p className="text-gray-400 mt-2">Practical Training</p>
                        </div>

                        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
                            <h4 className="text-cyan-400 text-3xl font-bold">50+</h4>
                            <p className="text-gray-400 mt-2">Live Projects</p>
                        </div>

                        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
                            <h4 className="text-cyan-400 text-3xl font-bold">1:1</h4>
                            <p className="text-gray-400 mt-2">Mentorship</p>
                        </div>

                        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
                            <h4 className="text-cyan-400 text-3xl font-bold">24/7</h4>
                            <p className="text-gray-400 mt-2">Support</p>
                        </div>

                    </div>


                </div>
            </section>

            <EnrollNowPopup
                isOpen={isEnrollOpen}
                setIsOpen={setIsEnrollOpen}
                selectedCourse={selectedCourse}
            />

        </Layout>
    );
}