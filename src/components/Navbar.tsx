import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg' : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Scissors className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold text-white">Elite Cuts</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'gallery', 'booking', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-yellow-500 transition-colors duration-300 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {['home', 'about', 'services', 'gallery', 'booking', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-white hover:text-yellow-500 transition-colors duration-300 capitalize py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
