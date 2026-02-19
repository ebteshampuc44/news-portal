// Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGithub, FaDribbble, FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setShowSearchInput(false);
    }
  };

  return (
    <div className="w-full bg-white text-black border-b border-gray-300 relative">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden sm:block border-b border-gray-200">
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
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 sm:py-6 px-4">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-widest">
          NEWSPAPER
        </h1>

        {/* Right Side - Desktop */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {/* Search */}
          <div className="relative">
            {showSearchInput ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search news..."
                  className="border border-gray-300 rounded-l px-3 py-1 text-sm focus:outline-none focus:border-red-600 w-48"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-3 py-1 rounded-r hover:bg-red-700"
                >
                  Go
                </button>
                <button
                  type="button"
                  onClick={() => setShowSearchInput(false)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  <IoCloseOutline className="text-xl" />
                </button>
              </form>
            ) : (
              <FiSearch
                className="text-xl cursor-pointer hover:text-gray-500"
                onClick={() => setShowSearchInput(true)}
              />
            )}
          </div>

          <HiOutlineMenuAlt3
            className="text-2xl cursor-pointer hover:text-gray-500"
            onClick={toggleMenu}
          />
        </div>

        {/* Right Side - Mobile */}
        <div className="flex sm:hidden items-center gap-4">
          <FiSearch
            className="text-lg cursor-pointer hover:text-gray-500"
            onClick={() => setShowSearchInput(true)}
          />
          <HiOutlineMenuAlt3
            className="text-2xl cursor-pointer hover:text-gray-500"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Bottom Menu - Desktop */}
      <div className="hidden sm:block border-t border-gray-300">
        <div className="max-w-7xl mx-auto flex gap-10 py-3 px-4 text-sm tracking-wide font-medium">
          <Link to="/" className="cursor-pointer hover:text-gray-500">HOME</Link>
          <Link to="/travel" className="cursor-pointer hover:text-gray-500">TRAVEL</Link>
          <Link to="/lifestyle" className="cursor-pointer hover:text-gray-500">LIFE STYLE</Link>
          <Link to="/fashion" className="cursor-pointer hover:text-gray-500">FASHION</Link>
          <Link to="/sport" className="cursor-pointer hover:text-gray-500">SPORT</Link>
          <Link to="/food" className="cursor-pointer hover:text-gray-500">FOOD</Link>
          <Link to="/movie-media" className="cursor-pointer hover:text-gray-500">MOVIE & MEDIA</Link>
        </div>
      </div>

      {/* Mobile Search Modal */}
      {showSearchInput && (
        <div className="sm:hidden fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white w-11/12 max-w-md rounded-lg p-4">
            <form onSubmit={handleSearch} className="flex flex-col gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-600"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowSearchInput(false);
                    setSearchQuery("");
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 sm:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <IoCloseOutline
            className="text-3xl cursor-pointer hover:text-gray-500"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Menu Content */}
        <div className="px-6 py-4">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-4 mb-6">
            <Link
              to="/"
              className="text-lg font-medium hover:text-gray-500 border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              to="/travel"
              className="text-lg font-medium hover:text-gray-500 border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              TRAVEL
            </Link>
            <Link
              to="/lifestyle"
              className="text-lg font-medium hover:text-gray-500 border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              LIFE STYLE
            </Link>
            <Link
              to="/fashion"
              className="text-lg font-medium hover:text-gray-500 border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              FASHION
            </Link>
            <Link
              to="/sport"
              className="text-lg font-medium hover:text-gray-500 border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              SPORT
            </Link>
            <Link
              to="/food"
              className="text-lg font-medium hover:text-gray-500 border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              FOOD
            </Link>
            <Link
              to="/movie-media"
              className="text-lg font-medium hover:text-gray-500 border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              MOVIE & MEDIA
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div className="mb-6 space-y-2 text-sm text-gray-600">
            <p>1826 Locust Street, Bainbridge</p>
            <p>support@templaza.com</p>
          </div>

          {/* Mobile Social Icons */}
          <div className="flex gap-4">
            <FaFacebookF className="cursor-pointer hover:text-gray-500 text-lg" />
            <FaTwitter className="cursor-pointer hover:text-gray-500 text-lg" />
            <FaGithub className="cursor-pointer hover:text-gray-500 text-lg" />
            <FaDribbble className="cursor-pointer hover:text-gray-500 text-lg" />
            <FaYoutube className="cursor-pointer hover:text-gray-500 text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;