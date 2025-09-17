import { ArrowRight } from 'lucide-react';
import bg from '../assets/hero-bg.jpg';
const Hero = ({ onBookNowClick }) => {
  return (
    <section className="h-screen relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bg})`
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-dark-800/70 to-primary-900/80"></div>
      
      {/* Professional Circular Network Background */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-10 w-96 h-96 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-80 h-80 border border-white/25 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 border border-white/10 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow"></div>
        
        {/* Network connecting lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="white" opacity="0.1">
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)"/>
          <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="white" strokeWidth="1" opacity="0.1">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/>
          </line>
          <line x1="60%" y1="30%" x2="90%" y2="70%" stroke="white" strokeWidth="1" opacity="0.1">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" begin="1s"/>
          </line>
          <line x1="20%" y1="80%" x2="80%" y2="40%" stroke="white" strokeWidth="1" opacity="0.1">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" begin="2s"/>
          </line>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-16 sm:pt-20 lg:pt-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight animate-fade-in-up">
              Grow Your Business with<br className="hidden sm:block" />
              <span className="text-accent-400 animate-pulse"> Result-Driven </span><br className="hidden sm:block" />
              Social Media Management
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 max-w-5xl mx-auto leading-relaxed px-4 sm:px-0 animate-fade-in-up delay-200">
              Struggling with low engagement, no sales, and outdated content?
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 animate-fade-in-up delay-400">
              We help local businesses, startups & established brands build a powerful online presence
              with affordable, high-impact social media packages.
            </p>
            
            <div className="relative bg-white/5 backdrop-blur-md border border-white/20 p-3 sm:p-4 lg:p-6 rounded-xl shadow-2xl mb-4 sm:mb-6 lg:mb-8 max-w-5xl mx-auto border-l-4 border-accent-500 mx-4 sm:mx-auto animate-fade-in-up delay-600 transition-all duration-500 hover:border-accent-500/70 group cursor-pointer hover:shadow-[0_0_30px_rgba(239,68,68,0.4),0_0_60px_rgba(239,68,68,0.2)]">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-xl pointer-events-none"></div>
              
              {/* Outer glow effect behind border */}
              <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-accent-500/30 via-accent-600/20 to-accent-500/30 blur-sm pointer-events-none -z-10"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-2 sm:mb-3">
                  <span className="text-sm sm:text-base font-semibold text-white text-center sm:text-left">
                    Stop worrying about what to post. We handle everything
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">
                  Strategy, design, reels, ads, and growth hacks - all taken care of by our expert team.
                </p>
              </div>
            </div>
            
            <button
              onClick={onBookNowClick}
              className="bg-accent-600 hover:bg-accent-700 text-white text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg mb-6 sm:mb-8 lg:mb-12 inline-flex items-center justify-center flex-wrap gap-2 animate-fade-in-up delay-800"
            >
              <span>BOOK NOW - Get This Offer</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-x" />
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-bounce-x {
          animation: bounce-x 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;