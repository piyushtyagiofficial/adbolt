import {
  Mail,
  Phone,
  Globe,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                <span className="text-accent-400">Ad</span>bolt Digital
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md">
                A new-age brand accelerator that fuses marketing intelligence with digital innovation to empower growth-ready businesses.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/adboltdigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-300"
                >
                  <InstagramIcon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/adboltdigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-300"
                >
                  <LinkedinIcon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61578928723659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-300"
                >
                  <FacebookIcon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#packages"
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Our Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                Contact Info
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-accent-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base break-all">
                    info@adboltdigital.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-accent-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    +91 95485 06975
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 text-accent-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    www.adboltdigital.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-dark-700 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-0">
                © 2025 Adbolt Digital. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
