import React from 'react';
import { Github, Twitter, Globe, Star } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn1.site-media.eu/images/0/19276410/lmw-logo.jpg-iI6IQbNbqHJkFPpNEkIM7A.png" 
                alt="LMW Labs Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-bold">LMW Labs</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building the future with AI-powered solutions. Transforming businesses through innovative technology and intelligent automation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@lmwlabs.com" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Star className="w-4 h-4" />
                  Leave a Review
                </button>
              </li>
              <li>
                <a href="mailto:feedback@lmwlabs.com" className="text-gray-400 hover:text-white transition-colors">
                  Send Feedback
                </a>
              </li>
              <li>
                <a href="mailto:support@lmwlabs.com" className="text-gray-400 hover:text-white transition-colors">
                  Get Support
                </a>
              </li>
              <li>
                <a href="mailto:partnerships@lmwlabs.com" className="text-gray-400 hover:text-white transition-colors">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 LMW Labs. All rights reserved. Built with passion for AI innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;