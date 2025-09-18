import React from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ scrollToSection }) => {
  return (
    <button
      onClick={() => scrollToSection('home')}
      className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-80 hover:opacity-100"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;