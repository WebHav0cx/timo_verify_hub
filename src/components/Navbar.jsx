import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-4 bg-green-500">
      <nav className="flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="text-white text-lg font-bold">Logo and Brand Name</div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <Icon icon="mingcute:menu-fill" width="24" height="24" />
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-16 bg-green-500 w-full lg:static lg:flex lg:gap-4 lg:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <li className="border-b lg:border-none">
            <Link
              to="/"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/about"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/services"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/projects"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/team"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/blog"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
