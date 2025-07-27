import React from "react";
import { motion } from "framer-motion";
import Layout from "../Components/Layout";

const Home = () => {
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
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Luxury Properties",
                  description:
                    "Explore a curated selection of high-end properties.",
                  icon: "🏡",
                },
                {
                  title: "Expert Agents",
                  description:
                    "Work with experienced agents who understand your needs.",
                  icon: "👨‍💼",
                },
                {
                  title: "Seamless Process",
                  description:
                    "Enjoy a smooth and hassle-free buying experience.",
                  icon: "⚡",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-extrabold mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-lg mb-6">
              Contact us today and let us help you find the perfect property.
            </p>
            <motion.button
              className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
