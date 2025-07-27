import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaPuzzlePiece, FaLeaf } from "react-icons/fa";
import Layout from "../Components/Layout";
const About = () => {
  return (
    <Layout>
      <div className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="pt-28 pb-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Designing spaces, <br />
            bringing ideas to life
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We are passionate about creating inspiring, attention-grabbing, and
            enduring spaces that represent your brand.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Get started
          </button>
        </section>
        {/* Image Section */}]{/* Our Purpose + Features Section */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-16">
            Our purpose
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full mb-4 text-blue-600">
                <FaLightbulb />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Innovative perspective
              </h3>
              <p className="text-sm text-gray-600">
                Rethinking design approaches that project a fresh take on
                tradition.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full mb-4 text-blue-600">
                <FaPuzzlePiece />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Customized solutions
              </h3>
              <p className="text-sm text-gray-600">
                Tailored designs built to align perfectly with your brand’s
                needs.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full mb-4 text-blue-600">
                <FaLeaf />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Sustainable practices
              </h3>
              <p className="text-sm text-gray-600">
                We prioritize energy efficiency and environmentally conscious
                designs.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
