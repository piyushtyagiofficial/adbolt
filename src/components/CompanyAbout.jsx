import { Award, Heart } from 'lucide-react';
import Profile from "../assets/ceo.jfif";

const CompanyAbout = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              About Our Company
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Meet the team behind your social media success
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
                Our Story & Vision
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                Adbolt is a new-age brand accelerator that fuses marketing intelligence with digital innovation to empower growth-ready businesses. We help entrepreneurs, creators, and service professionals scale their digital presence through storytelling, strategy, and smart technology.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                From social media and content marketing to website development, SEO, and branding, Adbolt is your full-stack growth partner — delivering impact with creativity and performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white text-sm sm:text-base">Expert Team</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Certified professionals</p>
                </div>
                <div className="text-center p-3 sm:p-4">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white text-sm sm:text-base">Passion Driven</h4>
                  <p className="text-xs sm:text-sm text-gray-300">We love what we do</p>
                </div>
              </div>
            </div>
            
            <div className="text-center order-1 lg:order-2">
              <div className="bg-gradient-to-br from-dark-800 to-primary-800 border border-dark-600 rounded-xl p-6 sm:p-8 lg:p-10 max-w-md mx-auto lg:max-w-none">
                <img 
                  src={Profile} 
                  alt="Founder & CEO" 
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto mb-4 sm:mb-6 object-cover border-4 border-accent-400 shadow-lg"
                />
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">Vishal verma</h4>
                <p className="text-accent-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Founder & CEO</p>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Based in India | Serving Globally
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800 border border-dark-600 rounded-xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 lg:mb-10 text-center">Contact Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div className="p-4 sm:p-6">
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base lg:text-lg">Email</h4>
                <p className="text-accent-400 text-sm sm:text-base break-all">info@adboltdigital.com</p>
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base lg:text-lg">Phone</h4>
                <p className="text-accent-400 text-sm sm:text-base">+91 95485 06975</p>
              </div>
              <div className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base lg:text-lg">Website</h4>
                <p className="text-accent-400 text-sm sm:text-base">www.adboltdigital.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;