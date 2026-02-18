import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaDribbble, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    {/* Logo */}
                    <h1 className="text-3xl font-serif tracking-widest text-black">
                        NEWSPAPER
                    </h1>
                    
                    {/* Contact Info */}
                    <div className="text-sm text-gray-600 text-center md:text-right">
                        <p>1826 Locust Street, Bainbridge</p>
                        <p>support@templaza.com</p>
                    </div>
                    
                    {/* Social Icons */}
                    <div className="flex gap-4 text-black">
                        <FaFacebookF className="cursor-pointer hover:text-gray-500" />
                        <FaTwitter className="cursor-pointer hover:text-gray-500" />
                        <FaGithub className="cursor-pointer hover:text-gray-500" />
                        <FaDribbble className="cursor-pointer hover:text-gray-500" />
                        <FaYoutube className="cursor-pointer hover:text-gray-500" />
                    </div>
                </div>
                
                {/* Copyright Line */}
                <div className="text-center text-sm text-gray-400 mt-8 pt-4 border-t border-gray-200">
                    <p>© {new Date().getFullYear()} NEWSPAPER. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;