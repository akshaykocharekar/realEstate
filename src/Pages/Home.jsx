import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../Components/Layout";

const Home = () => {
  const sections = [
    { title: "Blog", description: "Read our latest articles.", link: "/blog" },
    { title: "About", description: "Learn more about us.", link: "/about" },
    {
      title: "Projects",
      description: "Explore our projects.",
      link: "/project",
    },
    { title: "Team", description: "Meet our amazing team.", link: "/team" },
    {
      title: "Contact",
      description: "Get in touch with us.",
      link: "/contact",
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <motion.div
          className="bg-cover bg-center h-screen flex items-center justify-center text-center relative"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?luxury-real-estate')",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative text-white px-6">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Find Your Dream Property
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Discover luxury homes, apartments, and commercial spaces tailored
              to your needs.
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link
                to="/contact"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="container mx-auto py-16 space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className="h-48 md:h-64 md:w-1/2 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://source.unsplash.com/800x600/?${section.title}')`,
                }}
              ></div>
              <div className="p-8 md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <Link
                  to={section.link}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
