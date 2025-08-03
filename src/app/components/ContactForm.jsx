"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBehance, FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const objectToSubmit = {
      ...formData,
      access_key: "c179d49d-822a-4941-b409-412dfc66d1e0",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(objectToSubmit),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div
      className="min-h-screen py-8 px-6 lg:px-11"
      style={{ backgroundColor: "#f7f2f2" }}
    >
      <Link href="/">
        <h1 className="text-2xl mt-7 font-medium tracking-normal">UM.</h1>
      </Link>
      <div className="max-w-7xl mx-auto mt-20 md:mt-10 xl:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-8xl font-semibold mb-6 text-black">
              Let's Talk About Everything!
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700 inter font-semibold lg:pr-8">
              Hello there! If you'd like to ask us something, you can get in
              touch with us here. We'd love to address any and all concerns you
              may have.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/umaima.mohsin.156523"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 group overflow-hidden text-black hover:text-white relative flex items-center justify-center border border-black rounded-full transition-all duration-300"
              >
                <div className="absolute inset-0 bg-black rounded-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <FaFacebook className="w-6 h-6 relative z-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/umaima-mohsin-183747150/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 group overflow-hidden text-black hover:text-white relative flex items-center justify-center border border-black rounded-full transition-all duration-300"
              >
                <div className="absolute inset-0 bg-black rounded-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <FaLinkedin className="w-6 h-6 relative z-10" />
              </a>
              <a
                href="https://www.behance.net/umaimamohsin0418"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 group overflow-hidden text-black hover:text-white relative flex items-center justify-center border border-black rounded-full transition-all duration-300"
              >
                <div className="absolute inset-0 bg-black rounded-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <FaBehance className="w-6 h-6 relative z-10" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
            <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md mx-auto lg:max-w-none">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none text-gray-900 bg-transparent transition-colors duration-200"
                    placeholder="How should we address you?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none text-gray-900 bg-transparent transition-colors duration-200"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none text-gray-900 bg-transparent transition-colors duration-200"
                    placeholder="Your best email address?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Your Message*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none resize-none text-gray-900 bg-transparent transition-colors duration-200"
                    placeholder="What would you like to say?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-8 border-2 border-black font-medium rounded-full transition-all duration-300 relative overflow-hidden group hover:text-white"
                >
                  <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
                  <span className="relative z-10">Send Your Question</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
