import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link to="/">RealEstate</Link>
        </div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static bg-gray-800 w-full md:w-auto transition-all duration-300 ${
            isMenuOpen ? "top-16 left-0" : "top-[-300px]"
          }`}
        >
          <li className="p-2">
            <Link
              to="/"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/blog"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/about"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/project"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Project
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/team"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/contact"
              className="hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
