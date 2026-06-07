import EnrollNowPopup from "@/Components/EnrollNowPopup";
import Layout from "@/Components/Layout";
import { useState } from "react";

export const metadata = {
    title: "IT Training & Internship Programs | Seankrix Technologies",
    description:
        "Join Seankrix Technologies for MERN Stack, React Native, Python, and Java Training Programs with Live Projects, Internship Opportunities, and Industry Mentorship.",
};

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
            <section
                id="courses"
                className="relative py-24 overflow-hidden"
            >
                {/* Background Blur */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

                <div className="container mx-auto px-6 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
                            Professional IT Training Programs
                        </span>

                        <h2 className="text-4xl md:text-6xl font-bold mt-6">
                            Choose Your
                            <span className="block text-cyan-400">
                                Career Path
                            </span>
                        </h2>

                        <p className="max-w-2xl mx-auto text-gray-400 mt-6 text-lg">
                            Learn from industry experts, work on live projects,
                            build real-world applications, and become job-ready.
                        </p>
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