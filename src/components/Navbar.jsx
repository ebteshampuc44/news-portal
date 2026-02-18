import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGithub, FaDribbble, FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="w-full bg-white text-black border-b border-gray-300">

      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 text-sm">

          {/* Social Icons */}
          <div className="flex gap-4">
            <FaFacebookF className="cursor-pointer hover:text-gray-500" />
            <FaTwitter className="cursor-pointer hover:text-gray-500" />
            <FaGithub className="cursor-pointer hover:text-gray-500" />
            <FaDribbble className="cursor-pointer hover:text-gray-500" />
            <FaYoutube className="cursor-pointer hover:text-gray-500" />
          </div>

          {/* Contact Info */}
          <div className="flex gap-6">
            <span>1826 Locust Street, Bainbridge</span>
            <span>support@templaza.com</span>
          </div>
        </div>
      </div>

      {/* Middle Logo Section */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">

        {/* Logo */}
        <h1 className="text-4xl font-serif tracking-widest">
          NEWSPAPER
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex gap-3">
            <span className="cursor-pointer hover:text-gray-500">EN</span>
            <span className="cursor-pointer hover:text-gray-500">AR</span>
          </div>

          <FiSearch className="text-xl cursor-pointer hover:text-gray-500" />
          <HiOutlineMenuAlt3 className="text-2xl cursor-pointer hover:text-gray-500" />
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto flex gap-10 py-3 px-4 text-sm tracking-wide font-medium">
          <Link to="/" className="cursor-pointer hover:text-gray-500">HOME</Link>
          <Link to="/travel" className="cursor-pointer hover:text-gray-500">TRAVEL</Link>
          <Link to="/lifestyle" className="cursor-pointer hover:text-gray-500">LIFE STYLE</Link>
          <Link to="/fashion" className="cursor-pointer hover:text-gray-500">FASHION</Link>
          <Link to="/sport" className="cursor-pointer hover:text-gray-500">SPORT</Link>
          <Link to="/food" className="cursor-pointer hover:text-gray-500">FOOD</Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;