import { Award, Users, TrendingUp, Heart } from 'lucide-react';
import Profile from "../assets/ceo.jfif";

const CompanyAbout = () => {
  return (
    <section id="about" className="py-16 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Our Company
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the team behind your social media success
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Story & Vision
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Adbolt is a new-age brand accelerator that fuses marketing intelligence with digital innovation to empower growth-ready businesses. We help entrepreneurs, creators, and service professionals scale their digital presence through storytelling, strategy, and smart technology.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                From social media and content marketing to website development, SEO, and branding, Adbolt is your full-stack growth partner — delivering impact with creativity and performance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <Award className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white">Expert Team</h4>
                  <p className="text-sm text-gray-300">Certified professionals</p>
                </div>
                <div className="text-center p-4">
                  <Heart className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white">Passion Driven</h4>
                  <p className="text-sm text-gray-300">We love what we do</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-dark-800 to-primary-800 border border-dark-600 rounded-lg p-8">
                <img 
                  src={Profile} 
                  alt="Founder & CEO" 
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-accent-400 shadow-lg"
                />
                <h4 className="text-2xl font-bold text-white mb-2">Vishal verma</h4>
                <p className="text-accent-400 font-semibold mb-4">Founder & CEO</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Based in India | Serving Globally
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800 border border-dark-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <p className="text-accent-400">info@adboltdigital.com</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-white mb-2">Phone</h4>
                <p className="text-accent-400">+91 9548506975</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-white mb-2">Website</h4>
                <p className="text-accent-400">www.adboltdigital.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;