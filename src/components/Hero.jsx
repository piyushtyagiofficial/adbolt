import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

const Hero = ({ onBookNowClick }) => {
  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Grow Your Business with<br className="hidden sm:block" />
              <span className="text-accent-400">Result-Driven</span><br className="hidden sm:block" />
              Social Media Management
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed px-4 sm:px-0">
              Struggling with low engagement, no sales, and outdated content?
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              We help local businesses, startups & established brands build a powerful online presence
              with affordable, high-impact social media packages.
            </p>
            
            <div className="bg-dark-800 border border-dark-700 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mb-6 sm:mb-8 lg:mb-10 max-w-5xl mx-auto border-l-4 border-accent-500 mx-4 sm:mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400 mb-2 sm:mb-0 sm:mr-2" />
                <span className="text-base sm:text-lg font-semibold text-white text-center sm:text-left">
                  Stop worrying about what to post. We handle everything
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
                Strategy, design, reels, ads, and growth hacks - all taken care of by our expert team.
              </p>
            </div>
            
            <button
              onClick={onBookNowClick}
              className="bg-accent-600 hover:bg-accent-700 text-white text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg mb-8 sm:mb-12 lg:mb-16 inline-flex items-center justify-center flex-wrap gap-2"
            >
              <span>BOOK NOW - Get This Offer</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            <div className="text-center bg-dark-800 border border-dark-700 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-accent-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">200+</h3>
              <p className="text-sm sm:text-base text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center bg-dark-800 border border-dark-700 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">95%</h3>
              <p className="text-sm sm:text-base text-gray-300">Client Retention</p>
            </div>
            <div className="text-center bg-dark-800 border border-dark-700 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">300%</h3>
              <p className="text-sm sm:text-base text-gray-300">Average Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;