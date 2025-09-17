import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.avif';

const Header = ({ onBookNowClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-dark-900 shadow-lg border-b border-dark-700 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToTop}
          >
            <img src={logo} alt="logo" className="w-20 h-10 object-contain" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#packages" className="text-gray-300 hover:text-accent-400 transition-colors">Packages</a>
            <a href="#why-choose-us" className="text-gray-300 hover:text-accent-400 transition-colors">Why Choose Us</a>
            <a href="#faq" className="text-gray-300 hover:text-accent-400 transition-colors">FAQ</a>
            <a href="#about" className="text-gray-300 hover:text-accent-400 transition-colors">About</a>
          </nav>

          <button
            onClick={onBookNowClick}
            className="hidden md:block bg-accent-600 text-white px-6 py-2 rounded-lg hover:bg-accent-700 transition-colors shadow-lg"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-dark-700">
            <div className="flex flex-col space-y-4">
              <a href="#packages" className="text-gray-300 hover:text-accent-400 transition-colors">Packages</a>
              <a href="#why-choose-us" className="text-gray-300 hover:text-accent-400 transition-colors">Why Choose Us</a>
              <a href="#faq" className="text-gray-300 hover:text-accent-400 transition-colors">FAQ</a>
              <a href="#about" className="text-gray-300 hover:text-accent-400 transition-colors">About</a>
              <button
                onClick={onBookNowClick}
                className="bg-accent-600 text-white px-6 py-2 rounded-lg hover:bg-accent-700 transition-colors text-left shadow-lg"
              >
                Book Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;