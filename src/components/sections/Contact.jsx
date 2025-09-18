import React from 'react';
import { Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can create custom AI-integrated solutions that drive your business forward.
        </p>
        <a 
          href="mailto:contact@lmwlabs.com"
          className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
        >
          <Globe className="w-5 h-5" />
          Let's Start Building
        </a>
      </div>
    </section>
  );
};

export default Contact;