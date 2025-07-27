import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../Components/Layout";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const whatsappURL = `https://wa.me/9119455139?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Layout>
      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 py-16">
        {/* Left Info */}

        {/* Right Form */}
        <div className="bg-gray-100 rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Get In Touch
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition-all"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-80">
        <iframe
          title="Carmona Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119162.11788234598!2d73.88775587431642!3d15.222672236613633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbc23cf7f7b65%3A0x7709fa29e3651a9!2sCarmona%2C%20Goa%20403717!5e0!3m2!1sen!2sin!4v1692099120214!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
