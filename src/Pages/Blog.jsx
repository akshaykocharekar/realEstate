import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import Layout from "../Components/Layout";

const Blog = () => {
  return (
    <Layout>
      <div className="bg-[#f5f7fa] text-gray-900 min-h-screen pt-8 pb-24">
        {/* Heading Section */}
        <section className="max-w-6xl mx-auto px-6 text-center mt-18 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Explore Our <span className="text-blue-600">Blog Categories</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and stories for travelers, adventurers, and gear
            lovers.
          </p>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {blog.category || "Category"}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-400 mb-1">{blog.date}</p>
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-700 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-sm font-semibold text-blue-600 hover:underline transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
