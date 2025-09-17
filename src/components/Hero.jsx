import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

const Hero = ({ onBookNowClick }) => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Grow Your Business with<br />
              <span className="text-primary-600">Result-Driven</span><br />
              Social Media Management
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Struggling with low engagement, no sales, and outdated content?
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
              We help local businesses, startups & established brands build a powerful online presence
              with affordable, high-impact social media packages.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-4xl mx-auto border-l-4 border-primary-500">
              <div className="flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-primary-600 mr-2" />
                <span className="text-lg font-semibold text-gray-800">
                  Stop worrying about what to post. We handle everything
                </span>
              </div>
              <p className="text-gray-600">
                Strategy, design, reels, ads, and growth hacks - all taken care of by our expert team.
              </p>
            </div>
            
            <button
              onClick={onBookNowClick}
              className="bg-primary-600 hover:bg-primary-700 text-white text-xl px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg mb-12 inline-flex items-center"
            >
              BOOK NOW - Get This Offer
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Client Retention</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">300%</h3>
              <p className="text-gray-600">Average Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;