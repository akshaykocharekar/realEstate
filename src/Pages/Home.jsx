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
          </div>
        </motion.div>

        {/* Sections */}
      </div>
    </Layout>
  );
};

export default Home;
