import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-4 bg-green-500">
      <nav className="flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="text-white font-bold">Logo and Brand Name</div>

        {/* Hamburger Icon */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the state
          aria-label="Toggle Menu"
        >
          <Icon icon="mingcute:menu-fill" width="24" height="24" />
        </button>

        {/* Navbar List Items and Buttons */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:gap-4 md:items-center absolute md:static bg-green-500 w-full md:w-auto left-0 top-16 md:top-0 py-4 md:py-0 z-10`}
        >
          {/* List Items */}
          <ul className="flex flex-col md:flex-row gap-4 md:gap-4 items-center md:items-center">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-white rounded hover:bg-white hover:text-black transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-white rounded hover:bg-white hover:text-black transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-4 py-2 text-white rounded hover:bg-white hover:text-black transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="block px-4 py-2 text-white rounded hover:bg-white hover:text-black transition-colors"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="block px-4 py-2 text-white rounded hover:bg-white hover:text-black transition-colors"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block px-4 py-2 text-white rounded hover:bg-white hover:text-black transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-white rounded hover:bg-white hover:text-black transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Sign In and Sign Up Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4 md:mt-0">
            <button className="rounded-sm border-[1px] border-white py-2 px-4 text-white hover:bg-white hover:text-green-500 transition-colors">
              Sign In
            </button>
            <button className="rounded-sm border-[1px] border-white py-2 px-4 text-white hover:bg-white hover:text-green-500 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
