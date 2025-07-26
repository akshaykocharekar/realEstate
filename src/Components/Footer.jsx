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
    <footer className="bg-[#1b1b1b] text-[#f7f5f1] px-6 pt-10 pb-6 text-center">
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-6 text-xl flex-wrap">
        <FaFacebookF className="hover:text-white cursor-pointer" />
        <FaTwitter className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
        <FaYoutube className="hover:text-white cursor-pointer" />
        <FaPinterestP className="hover:text-white cursor-pointer" />
      </div>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-sm text-[#e6e3df] leading-relaxed mb-6">
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
        <span className="hover:text-white cursor-pointer">Buy</span>
        <span className="hover:text-white cursor-pointer">Rent</span>
        <span className="hover:text-white cursor-pointer">Sell</span>
        <span className="hover:text-white cursor-pointer">About Us</span>
        <span className="hover:text-white cursor-pointer">Contact</span>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e8e7e5] w-full mb-6"></div>

      {/* Address Row */}
      <div className="flex flex-col sm:flex-row justify-center mb-4 text-sm text-[#f1f0ee] flex-wrap px-4">
        <p className="mx-2 font-medium">Tulip Dwellings</p>
        <p className="mx-2">| Station Road</p>
        <p className="mx-2">| Margao, Goa - 403601</p>
        <p className="mx-2">| Phone: +91 98765 43210</p>
      </div>

      {/* Google Map Embed - Full Width, No Margin
      <div className="w-full h-[250px] mt-4">
        <iframe
          title="Margao Goa Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61147.45689388558!2d73.91053765769625!3d15.27536543527226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfa38db9294c6b%3A0x4f5e58d02a76f937!2sMargao%2C%20Goa!5e0!3m2!1sen!2sin!4v1691512228945!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </footer>
  );
};

export default Footer;
