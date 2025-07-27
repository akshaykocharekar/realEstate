import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blogs", path: "/blog" },
    { label: "FAQs", path: "/faqs" },
    { label: "Help", path: "/help" },
  ];

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full animate-pulse" />
          <span>Logo Ipsum</span>
        </div>

        {/* Desktop Nav (Hidden on mobile) */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-2 shadow-inner">
            {navItems.map(({ label, path }) => (
              <Link
                to={path}
                key={label}
                className="px-4 py-2 rounded-full hover:bg-white transition text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Contact us
          </Link>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden pr-2">
          <motion.button
            key={isMenuOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl text-gray-800"
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-62 bg-white shadow-xl z-50 px-6 pt-8 pb-6 flex flex-col justify-between"
          >
            {/* Close Button on Top Right */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-gray-600 hover:text-gray-900"
              >
                <IoClose />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col items-center space-y-4 mt-4">
              {navItems.map(({ label, path }, index) => (
                <React.Fragment key={label}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={path}
                      className="text-lg font-medium text-gray-800 hover:text-indigo-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                  {index !== navItems.length - 1 && (
                    <hr className="border-t border-gray-200 w-2/3 mx-auto" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mt-10 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-xl text-gray-500 hover:text-pink-500 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="text-xl text-gray-500 hover:text-blue-500 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-xl text-gray-500 hover:text-blue-700 transition" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
