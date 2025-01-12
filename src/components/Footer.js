import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons from React Icons

const Footer = () => (
    <footer id="footer" className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center space-x-4">
            <a href="mailto:ayomideadegbe77@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaEnvelope size={24} />
            </a>
            <a href="https://x.com/adegbe_ayomide" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={24} />
            </a>
            <a href="https://github.com/AyomideAd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ayomide-adegbe-9169571a9/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaLinkedin size={24} />
            </a>
        </div>
        <div className="text-center mt-2">
            <p className="text-sm md:text-base">© 2025 Ayomide Adegbe. All rights reserved. | Connect with me on these platforms!</p>
        </div>
    </footer>
);

export default Footer;
