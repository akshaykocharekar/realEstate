import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import Layout from "../Components/Layout";

const Blog = () => {
  return (
    <Layout>
      <div className="bg-[#f9f9f9] text-gray-800">
        {/* Hero Section 
        <section className="relative h-[70vh] w-full overflow-hidden mb-20">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D"
            alt="Nature Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <p className="text-sm uppercase tracking-wider text-blue-300 mb-3">
              Adventure | Mar 2025
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Conquer the Wild: <br className="md:hidden" />
              Exploring terrains and conquering nature
            </h1>
            <p className="max-w-2xl text-gray-200 text-base md:text-lg">
              Discover breathtaking locations, survival guides, and gear reviews
              curated for modern explorers.
            </p>
          </div>
        </section>*/}

        {/* Category Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Explore Our Blog Categories
            </h2>
            <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Dive into the most exciting reads handpicked for adventurers,
              travelers, and gear lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="relative bg-white border border-gray-200 rounded-3xl shadow-md group overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {blog.category || "Category"}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-1">{blog.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {blog.description}
                  </p>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-block text-sm text-blue-600 font-semibold hover:underline transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
