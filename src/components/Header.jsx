import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.avif';

const Header = ({ onBookNowClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-dark-900 shadow-lg border-b border-dark-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToTop}
          >
            <img src={logo} alt="logo" className="w-32 h-12 sm:w-36 sm:h-14 lg:w-40 lg:h-16 object-contain" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#packages" className="text-gray-300 hover:text-accent-400 transition-colors font-medium">Packages</a>
            <a href="#why-choose-us" className="text-gray-300 hover:text-accent-400 transition-colors font-medium">Why Choose Us</a>
            <a href="#faq" className="text-gray-300 hover:text-accent-400 transition-colors font-medium">FAQ</a>
            <a href="#about" className="text-gray-300 hover:text-accent-400 transition-colors font-medium">About</a>
          </nav>

          <button
            onClick={onBookNowClick}
            className="hidden lg:block bg-accent-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg hover:bg-accent-700 transition-colors shadow-lg font-semibold text-sm sm:text-base"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-dark-700">
            <div className="flex flex-col space-y-3">
              <a href="#packages" className="text-gray-300 hover:text-accent-400 transition-colors py-2 px-2 font-medium">Packages</a>
              <a href="#why-choose-us" className="text-gray-300 hover:text-accent-400 transition-colors py-2 px-2 font-medium">Why Choose Us</a>
              <a href="#faq" className="text-gray-300 hover:text-accent-400 transition-colors py-2 px-2 font-medium">FAQ</a>
              <a href="#about" className="text-gray-300 hover:text-accent-400 transition-colors py-2 px-2 font-medium">About</a>
              <button
                onClick={onBookNowClick}
                className="bg-accent-600 text-white px-6 py-3 rounded-lg hover:bg-accent-700 transition-colors text-left shadow-lg font-semibold mt-2"
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