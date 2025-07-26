import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white relative z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">RealEstate</Link>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menu */}
        <ul
          className={`md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out
            ${
              isMenuOpen
                ? "absolute top-[64px] left-0 w-full bg-gray-800 flex flex-col space-y-2 px-6 py-4"
                : "hidden md:flex"
            }
          `}
        >
          {[
            ["Home", "/"],
            ["Blog", "/blog"],
            ["About", "/about"],
            ["Project", "/project"],
            ["Team", "/team"],
            ["Contact", "/contact"],
          ].map(([name, path]) => (
            <li key={name}>
              <Link
                to={path}
                className="block hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
