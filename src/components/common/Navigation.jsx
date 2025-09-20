import React from 'react';
import { Menu, X, ArrowLeft, Star } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection, currentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (itemId) => {
    scrollToSection(itemId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {currentPage === 'reviews' && (
              <button 
                onClick={() => scrollToSection('home')}
                className="mr-2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
            )}
            <img 
              src="https://cdn1.site-media.eu/images/0/19276410/lmw-logo.jpg-iI6IQbNbqHJkFPpNEkIM7A.png" 
              alt="LMW Labs" 
              className="h-8 w-8 object-contain cursor-pointer"
              onClick={() => scrollToSection('home')}
            />
            <span 
              className="text-xl font-bold text-gray-900 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              LMW Labs
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map(item => {
              const isActive = currentPage === 'reviews' 
                ? item.id === 'reviews' 
                : activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-medium transition-colors flex items-center gap-1 ${
                    isActive
                      ? 'text-purple-600' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map(item => {
              const isActive = currentPage === 'reviews' 
                ? item.id === 'reviews' 
                : activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2 transition-colors flex items-center gap-2 ${
                    isActive
                      ? 'text-purple-600' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;