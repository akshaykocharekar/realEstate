import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import Layout from "../Components/Layout";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-lg text-gray-600">Blog not found.</p>
      </div>
    );

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/blog"
            className="text-sm text-blue-600 hover:text-blue-800 transition mb-6 inline-block"
          >
            ← Back to Blog
          </Link>

          {/* Header Image */}
          <div className="overflow-hidden rounded-2xl shadow-md mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-72 object-cover"
            />
          </div>

          {/* Meta Info */}
          <div className="mb-2 text-gray-500 text-sm">
            {blog.category && (
              <span className="font-semibold">{blog.category}</span>
            )}{" "}
            • {blog.date}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Content */}
          <article className="prose prose-lg prose-blue max-w-none text-gray-800">
            {blog.content.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </article>

          {/* Author / Credits (optional section) */}
          <div className="mt-12 text-sm text-gray-500 border-t pt-4">
            Written by{" "}
            <span className="font-semibold">Real Estate Editorial Team</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
