import React from 'react';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ReviewsPage from './components/pages/ReviewsPage';
import useScrollSpy from './hooks/useScrollSpy';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const activeSection = useScrollSpy(['home', 'about', 'projects', 'contact']);

  // Check if URL has reviews parameter
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('page') === 'reviews') {
      setCurrentPage('reviews');
    }
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'reviews') {
      setCurrentPage('reviews');
      window.history.pushState({}, '', '?page=reviews');
      return;
    }
    
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.history.pushState({}, '', '/');
      // Small delay to allow page change
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goHome = () => {
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
  };

  if (currentPage === 'reviews') {
    return (
      <div className="min-h-screen">
        <ReviewsPage goHome={goHome} scrollToSection={scrollToSection} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        currentPage={currentPage}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
      <ScrollToTop scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;