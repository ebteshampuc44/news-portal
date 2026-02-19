// pages/Error.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        {/* Error Image */}
        <div className="mb-8">
          <img
            src="https://i.ibb.co.com/JFdH4BdF/Screenshot-2026-02-19-125230-removebg-preview.png"
            alt="404 Error - Page Not Found"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Error Message */}
        {/* <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p> */}

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
        >
          ← Back to Home
        </Link>

        {/* Quick Links */}
        {/* <div className="mt-12">
          <p className="text-gray-500 mb-4">You might also visit:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/travel" className="text-sm bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full transition">
              Travel
            </Link>
            <Link to="/lifestyle" className="text-sm bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full transition">
              Lifestyle
            </Link>
            <Link to="/fashion" className="text-sm bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full transition">
              Fashion
            </Link>
            <Link to="/sport" className="text-sm bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full transition">
              Sport
            </Link>
            <Link to="/food" className="text-sm bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full transition">
              Food
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Error;