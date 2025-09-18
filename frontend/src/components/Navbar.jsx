import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { scrollToId } from "../utils/scrollTo";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScroll = (path, id) => {
    if (window.location.pathname !== path) {
      navigate(path); // navigate to target page
      // Wait for DOM to render
      setTimeout(() => scrollToId(id), 100);
    } else {
      scrollToId(id);
    }
  };

  return (
    <header className=" fixed top-0 w-full flex items-center justify-between px-28 py-4 bg-white/30 backdrop-blur-md shadow-lg z-50">
      {/* Left Section */}
      <div>
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <img src="/logo.svg" alt="MindCare Logo" className="w-6 h-6 invert" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">MindCare Campus</h1>
          </div>
        </Link>
      </div>

      {/* Right Section */}
      <nav className="flex items-center space-x-6 text-xl font-medium">
        <button
          className="text-gray-700 hover:text-blue-600"
          onClick={() => handleScroll("/", "features")}
        >
          Features
        </button>

        <button
          className="text-gray-700 hover:text-blue-600"
          onClick={() => handleScroll("/", "about-us")}
        >
          About
        </button>

        <button
          className="text-gray-700 hover:text-blue-600"
          onClick={() => handleScroll("/", "contact")}
        >
          Contact
        </button>
        <Link
          to="/signup"
          className="text-gray-700 hover:text-blue-600"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="text-gray-700 hover:text-blue-600"
        >
          Log In
        </Link>
        <Link
          to="/profile"
          className="text-gray-700 hover:text-blue-600"
        >
          Profile
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
