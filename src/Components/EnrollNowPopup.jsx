"use client";

import React, { useState, useRef } from "react";
import { FiX, FiBookOpen, FiPhone, FiMail, FiUser } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function EnrollNowPopup({
  isOpen,
  setIsOpen,
  selectedCourse = "",
}) {
  const form = useRef();

  const [success, setSuccess] = useState(false);
const [course, setCourse] = useState(selectedCourse);
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      form.current.reset();

      setTimeout(() => {
        setSuccess(false);
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      alert("Failed to submit form.");
    }
  };

  return (
    <>
      {/* Button */}

     

      {/* Popup */}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#050505] shadow-[0_0_80px_rgba(0,191,255,0.15)]">

            {/* Close Button */}

            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 z-20 text-white text-2xl"
            >
              <FiX />
            </button>

            <div className="grid lg:grid-cols-5">

              {/* Left Side */}

              <div className="lg:col-span-2 bg-gradient-to-br from-cyan-600 to-blue-700 p-10">

                <h2 className="text-3xl font-bold text-white">
                  Start Your IT Career
                </h2>

                <p className="mt-4 text-white/90">
                  Join our industry-focused training programs and gain
                  real-world experience through live projects and internships.
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3 text-white">
                    ✅ Live Projects
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    ✅ Internship Opportunity
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    ✅ Industry Mentors
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    ✅ Certificate
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    ✅ Job Assistance
                  </div>

                </div>

                <div className="mt-10 rounded-xl bg-white/10 p-5 backdrop-blur-md">
                  <p className="font-semibold text-white">
                    📞 +91 8824744976
                  </p>

                  <p className="mt-2 text-white">
                    📧 info@seankrixtechnologies.com
                  </p>
                </div>
              </div>

              {/* Right Side */}

              <div className="lg:col-span-3 p-8 lg:p-10">

                <h3 className="mb-6 text-2xl font-bold text-white">
                  Enrollment Form
                </h3>

                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="space-y-5"
                >

                  <div className="grid md:grid-cols-2 gap-4">

                    <div className="relative">
                      <FiUser className="absolute left-4 top-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white"
                      />
                    </div>

                    <div className="relative">
                      <FiPhone className="absolute left-4 top-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white"
                      />
                    </div>

                  </div>

                  <div className="relative">
                    <FiMail className="absolute left-4 top-4 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white"
                    />
                  </div>

                  <input
                    type="text"
                    name="college"
                    placeholder="College / Qualification"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white"
                  />

                  <div className="relative">
                    <FiBookOpen className="absolute left-4 top-4 text-gray-400" />

                 <select
  name="course"
  value={course}
  onChange={(e) => setCourse(e.target.value)}
  required
  className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white"
>
  <option value="">Select Course</option>
  <option value="MERN Stack Development">
    MERN Stack Development
  </option>
  <option value="React Native Development">
    React Native Development
  </option>
  <option value="Python Development">
    Python Development
  </option>
  <option value="Java Development">
    Java Development
  </option>
</select>
                  </div>

                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Tell us about your goals..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-black hover:scale-[1.02] transition"
                  >
                    Submit Enrollment 🚀
                  </button>

                </form>

                {success && (
                  <div className="mt-5 rounded-xl bg-green-500/20 border border-green-500 p-4 text-green-400">
                    ✅ Enrollment Submitted Successfully!
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
