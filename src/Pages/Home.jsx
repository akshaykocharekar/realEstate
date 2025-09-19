import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../Components/Layout";

// Import images
import heroImage1 from "../assests/v2.webp";
import heroImage2 from "../assests/IMG-20250915-WA0012.jpg";
import heroImage3 from "../assests/v3.jpg";
import propertyImage1 from "../assests/v2.webp";
import propertyImage2 from "../assests/v3.jpg";
import propertyImage3 from "../assests/v1.jpeg";

const Home = () => {
  const heroImages = [heroImage1, heroImage2, heroImage3];

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
      image: propertyImage1,
    },
    {
      id: 1,
      title: "Serenity Ridge Villa",
      location: "Summit, CA",
      price: "$3,600,000",
      beds: "5 Bedroom",
      baths: "4 Bath",
      size: "4,200 SQFT",
      image: propertyImage2,
    },
    {
      id: 2,
      title: "Mountain Chalet",
      location: "Aspen, CO",
      price: "$4,800,000",
      beds: "6 Bedroom",
      baths: "5 Bath",
      size: "5,300 SQFT",
      image: propertyImage3,
    },
    {
      id: 3,
      title: "Vineyard Estate",
      location: "Napa, CA",
      price: "$6,000,000",
      beds: "7 Bedroom",
      baths: "6 Bath",
      size: "6,800 SQFT",
      image: propertyImage2,
    },
    {
      id: 4,
      title: "Coastal Retreat",
      location: "Miami, FL",
      price: "$7,200,000",
      beds: "8 Bedroom",
      baths: "7 Bath",
      size: "7,500 SQFT",
      image: propertyImage1,
    },
    {
      id: 5,
      title: "Bayview Luxury",
      location: "San Francisco, USA",
      price: "$6,500,000",
      beds: "9 Bedroom",
      baths: "8 Bath",
      size: "9,000 SQFT",
      image: propertyImage2,
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
    </Layout>
  );
};

export default Home;
