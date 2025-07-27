import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#f0f0f0] px-4 sm:px-6 pt-10 pb-6 text-center">
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-6 text-xl flex-wrap">
        <FaFacebookF className="hover:text-white cursor-pointer transition duration-200" />
        <FaTwitter className="hover:text-white cursor-pointer transition duration-200" />
        <FaInstagram className="hover:text-white cursor-pointer transition duration-200" />
        <FaYoutube className="hover:text-white cursor-pointer transition duration-200" />
        <FaPinterestP className="hover:text-white cursor-pointer transition duration-200" />
      </div>

      {/* Description */}
      <p className="max-w-xl mx-auto text-sm text-[#d4d4d4] leading-relaxed mb-6 px-2">
        At GoldenKey Realty, we connect you with the perfect home or investment.
        Our mission is to provide seamless real estate experiences with trust,
        transparency, and tailored solutions. Serving Margao and beyond since
        1998.
      </p>

      {/* Logo and Country */}
      <h1 className="text-3xl font-bold tracking-wide mb-2 text-[#f1d9a7]">
        Tulip Dwellings
      </h1>
      <p className="text-sm text-[#eae9e6] mb-6">Goa, India | ₹</p>

      {/* Footer Links */}
      <div className="flex justify-center gap-4 mb-8 text-sm text-[#e6cfa3] flex-wrap">
        {["Buy", "Rent", "Sell", "About Us", "Contact"].map((item, idx) => (
          <span
            key={idx}
            className="hover:text-white cursor-pointer transition duration-200"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[#2d2d2d] w-full mb-6"></div>

      {/* Address Row */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-sm text-[#ccc] flex-wrap gap-2 px-2">
        <p className="mx-1 font-medium">Tulip Dwellings</p>
        <span className="hidden sm:inline">|</span>
        <p className="mx-1">Station Road</p>
        <span className="hidden sm:inline">|</span>
        <p className="mx-1">Margao, Goa - 403601</p>
        <span className="hidden sm:inline">|</span>
        <p className="mx-1">Phone: +91 98765 43210</p>
      </div>

      {/* Optional Google Map Embed */}
      {/* 
      <div className="w-full h-[250px] mt-4 rounded overflow-hidden">
        <iframe
          title="Margao Goa Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61147.45689388558!2d73.91053765769625!3d15.27536543527226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfa38db9294c6b%3A0x4f5e58d02a76f937!2sMargao%2C%20Goa!5e0!3m2!1sen!2sin!4v1691512228945!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      */}
    </footer>
  );
};

export default Footer;
