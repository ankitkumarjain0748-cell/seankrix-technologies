import React, { useRef, useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// Info cards ka data
const contactInfo = [
  {
    icon: <FiPhone />,
    title: "Phone Number",
    detail: "(309) 8855–314",
    href: "tel:3098855314"
  },
  {
    icon: <FiMail />,
    title: "Email Address",
    detail: "info@domainname.com",
    href: "mailto:info@domainname.com"
  },
  {
    icon: <FiMapPin />,
    title: "Address",
    detail: "123 Creative Lane, London, SW1A 1AA, United Kingdom",
    href: "#"
  }
];

// Reusable input component
const FormInput = ({ type = 'text', placeholder, className = '', name, onChange, value }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required
    className={`w-full bg-black/30 border border-white/10 rounded-lg px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BFF747]/50 ${className}`}
  />
);

export default function ContactForm() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // Input change handler (with validation)
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // only numbers + max 10 digits
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // validate function
  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone must be exactly 10 digits";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) return;

    emailjs.sendForm(
      "service_hr26t09",     // 👉 EmailJS service ID
      "template_1cb5srg",    // 👉 EmailJS template ID
      form.current,
      "XO5HvlkA8WNZlkTyB"    // 👉 EmailJS public key
    ).then(
      () => {
        setIsSubmitted(true);   // ✅ show popup
        form.current.reset();
        setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
        setErrors({});
      },
      (error) => {
        console.error("❌ Failed to send message:", error.text);
      }
    );
  };

  return (
    <section className="relative bg-black text-white py-24 px-6 sm:px-8 font overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vh] bg-lime-900/20 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Info */}
        <div className="flex flex-col gap-8" data-aos="fade-right">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Get in <span className="text-[#BFF747]">touch</span> with us
            </h1>
            <p className="text-gray-400 mt-4 max-w-lg">
              We'd love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.
            </p>
          </div>
          
          <div className="w-full space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.slice(0, 2).map((item) => (
                <a 
                  key={item.title} 
                  href={item.href} 
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group"
                >
                  <div className="text-4xl text-[#BFF747] mb-5">{item.icon}</div>
                  <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors">{item.detail}</p>
                </a>
              ))}
            </div>
            
            <a 
              href={contactInfo[2].href} 
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex items-center text-left gap-6 group"
            >
              <div className="text-3xl text-[#BFF747] flex-shrink-0">{contactInfo[2].icon}</div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">{contactInfo[2].title}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">
                  {contactInfo[2].detail}
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 sm:p-10 rounded-3xl" data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <FormInput name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <FormInput name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <FormInput type="tel" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <FormInput type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black/30 border border-white/10 rounded-lg px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BFF747]/50"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#BFF747] text-black font-bold text-lg py-4 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Submit Message
            </button>
          </form>
        </div>

      </div>

      {/* ✅ Popup Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl text-center max-w-sm">
            <h3 className="text-xl font-semibold text-green-600">✅ Message Sent Successfully!</h3>
            <p className="mt-2 text-gray-700">We will get back to you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-[#BFF747] text-black px-4 py-2 rounded-lg hover:bg-opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
