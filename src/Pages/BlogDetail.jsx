import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import Layout from "../Components/Layout";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-gray-100">
        <p className="text-lg text-gray-600">Blog not found.</p>
      </div>
    );

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-16 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Link */}
          <Link
            to="/blog"
            className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition mb-8 inline-block"
          >
            ← Back to Blog
          </Link>

          {/* Header Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl mb-10">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-80 object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Meta Info */}
          <div className="mb-3 text-gray-500 text-sm">
            {blog.category && (
              <span className="font-semibold text-blue-600">
                {blog.category}
              </span>
            )}{" "}
            • {blog.date}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-snug">
            {blog.title}
          </h1>

          {/* Content */}
          <article className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed">
            {blog.content.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </article>

          {/* Author / Credits */}
          <div className="mt-12 text-sm text-gray-500 border-t pt-6">
            ✍️ Written by{" "}
            <span className="font-semibold text-gray-700">
              Real Estate Editorial Team
            </span>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
