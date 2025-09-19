import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../Components/Layout";

const Home = () => {
  const heroImages = [
    "src/assests/v2.webp",
    "src/assests/IMG-20250915-WA0011.jpg",
    "src/assests/v3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const properties = [
    {
      id: 0,
      title: "Serenity Ridge Villa",
      location: "Summit, CA",
      price: "$3,600,000",
      beds: "5 Bedroom",
      baths: "4 Bath",
      size: "4,200 SQFT",
      image: "src/assests/v2.webp",
    },
    {
      id: 1,
      title: "Serenity Ridge Villa",
      location: "Summit, CA",
      price: "$3,600,000",
      beds: "5 Bedroom",
      baths: "4 Bath",
      size: "4,200 SQFT",
      image: "src/assests/v3.jpg",
    },
    {
      id: 2,
      title: "Mountain Chalet",
      location: "Aspen, CO",
      price: "$4,800,000",
      beds: "6 Bedroom",
      baths: "5 Bath",
      size: "5,300 SQFT",
      image: "src/assests/v1.jpeg",
    },
    {
      id: 3,
      title: "Vineyard Estate",
      location: "Napa, CA",
      price: "$6,000,000",
      beds: "7 Bedroom",
      baths: "6 Bath",
      size: "6,800 SQFT",
      image: "src/assests/v3.jpg",
    },
    {
      id: 4,
      title: "Coastal Retreat",
      location: "Miami, FL",
      price: "$7,200,000",
      beds: "8 Bedroom",
      baths: "7 Bath",
      size: "7,500 SQFT",
      image: "src/assests/v2.webp",
    },
    {
      id: 5,
      title: "Bayview Luxury",
      location: "San Francisco, USA",
      price: "$6,500,000",
      beds: "9 Bedroom",
      baths: "8 Bath",
      size: "9,000 SQFT",
      image: "src/assests/v3.jpg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Slide wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroImages.map((img, idx) => (
            <div key={idx} className="w-full flex-shrink-0 h-[90vh] relative">
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-3">
                  Your Reliable Ally in <br /> Worldwide Real Estate
                </h1>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg">
                  Explore Properties
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>
      {/* Property Cards */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Properties
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500">{property.location}</p>
                <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
                <p className="text-green-600 font-bold mb-3">
                  {property.price}
                </p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{property.beds}</span>
                  <span>{property.baths}</span>
                  <span>{property.size}</span>
                </div>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Latest from Our Blog
        </motion.h2>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {[
            {
              title: "5 Tips for First-Time Home Buyers",
              desc: "Buying your first property? Here’s what you need to know to avoid common mistakes.",
              link: "/blog/first-time-buyers",
            },
            {
              title: "Why Real Estate is the Best Long-Term Investment",
              desc: "Explore why properties remain the safest wealth-building tool worldwide.",
              link: "/blog/real-estate-investment",
            },
            {
              title: "5 Tips for First-Time Home Buyers",
              desc: "Buying your first property? Here’s what you need to know to avoid common mistakes.",
              link: "/blog/first-time-buyers",
            },
            {
              title: "Why Real Estate is the Best Long-Term Investment",
              desc: "Explore why properties remain the safest wealth-building tool worldwide.",
              link: "/blog/real-estate-investment",
            },
          ].map((post, idx) => (
            <motion.a
              key={idx}
              href={post.link}
              className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3 className="font-semibold text-xl mb-3">{post.title}</h3>
              <p className="text-gray-600 flex-grow">{post.desc}</p>
              <span className="text-green-600 mt-4 font-medium">
                Read More →
              </span>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/blog"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            View All Blogs
          </a>
        </div>
      </section>
      {/* FAQ + Form Side by Side */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* FAQ */}
          <div>
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
              {[
                {
                  q: "How do I buy a property?",
                  a: "You can browse listings, book a visit, and contact us for assistance throughout the process.",
                },
                {
                  q: "How do I buy a property?",
                  a: "You can browse listings, book a visit, and contact us for assistance throughout the process.",
                },
                {
                  q: "How do I buy a property?",
                  a: "You can browse listings, book a visit, and contact us for assistance throughout the process.",
                },
                {
                  q: "Do you offer rental services?",
                  a: "Yes, we connect tenants and landlords with verified rental agreements.",
                },
                {
                  q: "Can I list my property here?",
                  a: "Of course! Reach out to us and we’ll help you list your property on our platform.",
                },
              ].map((item, idx) => (
                <motion.details
                  key={idx}
                  className="border rounded-lg p-5 cursor-pointer bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <summary className="font-semibold text-lg">{item.q}</summary>
                  <p className="mt-2 text-gray-600">{item.a}</p>
                </motion.details>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <motion.h3
              className="text-2xl font-bold mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-3"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border rounded-lg p-3"
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Map */}
      <section className="w-full h-[400px]">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.085595995495!2d73.9568!3d15.2739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc71d502f5b3f%3A0x1b35e6f2f6b0d5b5!2sDamodar%20College%2C%20Margao%2C%20Goa!5e0!3m2!1sen!2sin!4v1695109200000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Home;
