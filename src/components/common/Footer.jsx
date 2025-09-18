import React from 'react';
import { Github, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img 
            src="https://cdn1.site-media.eu/images/0/19276410/lmw-logo.jpg-iI6IQbNbqHJkFPpNEkIM7A.png" 
            alt="LMW Labs Logo" 
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-bold">LMW Labs</span>
        </div>
        <p className="text-gray-400 mb-6">
          Building the future with AI-powered solutions
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:contact@lmwlabs.com" className="text-gray-400 hover:text-white transition-colors">
            <Globe className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
          © 2024 LMW Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;