import { Check, Medal, Crown, Rocket } from 'lucide-react';

const Packages = ({ onBookNowClick }) => {
  const packages = [
    {
      name: "Basic Pass",
      icon: <Rocket className="w-8 h-8" />,
      price: "₹7,990",
      bestFor: "Small businesses",
      popular: false,
      services: [
        "Total 6 reels",
        "Total 8 posts (2 per week)",
        "Total 8 story designs per month (2 per week)",
        "Caption writing + hashtag research",
        "1 report per month with basic insights"
      ]
    },
    {
      name: "Standard Pass",
      icon: <Medal className="w-8 h-8" />,
      price: "₹11,990",
      bestFor: "Growing brands looking for consistency and engagement",
      popular: true,
      services: [
        "Total 12 posts & carousels (3/week)",
        "Total 12 stories per month (3/week)",
        "Total 10 reels",
        "Reel ideas + basic scriptwriting",
        "All posts aligned with brand guidelines",
        "1 report per month with basic insights",
        "Weekly content calendars"
      ]
    },
    {
      name: "Premium Pass",
      icon: <Crown className="w-8 h-8" />,
      price: "₹17,990",
      bestFor: "Professional branding of company",
      popular: false,
      services: [
        "Total 24 Stories",
        "Total 16 Reels",
        "20 Posts Trends related",
        "Content calendar",
        "Advanced reel editing + scripting",
        "Content strategy, Brand Building",
        "Comment, DM, and inbox management",
        "Influencer collaborations (coordination only)",
        "Ad campaign strategy + setup (According to your budget)",
        "Weekly performance + strategy calls",
        "Monthly strategy & goals roadmap",
        "All posts aligned with brand guidelines & brand tone",
        "Custom Highlight Covers"
      ]
    }
  ];

  return (
    <section id="packages" className="py-12 sm:py-16 lg:py-20 bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Choose Your Perfect Package
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Flexible packages designed to meet your business needs and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-dark-900 border border-dark-600 rounded-xl shadow-lg overflow-visible transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                pkg.popular ? 'ring-2 ring-accent-500 relative lg:scale-105 mt-6' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-accent-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 ${
                    pkg.popular ? 'bg-accent-100 text-accent-600' : 'bg-dark-700 text-gray-300'
                  }`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 px-2">{pkg.bestFor}</p>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {pkg.price}
                    <span className="text-sm sm:text-base lg:text-lg font-normal text-gray-400">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 min-h-[200px] sm:min-h-[250px]">
                  {pkg.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={onBookNowClick}
                  className={`w-full py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-accent-600 text-white hover:bg-accent-700 shadow-lg hover:shadow-xl'
                      : 'bg-dark-700 text-white hover:bg-dark-600 border border-dark-500 hover:border-dark-400'
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;