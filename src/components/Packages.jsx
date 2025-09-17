import { Check, Star, Crown, Zap } from 'lucide-react';

const Packages = ({ onBookNowClick }) => {
  const packages = [
    {
      name: "Basic Pass",
      icon: <Zap className="w-8 h-8" />,
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
      icon: <Star className="w-8 h-8" />,
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
    <section id="packages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible packages designed to meet your business needs and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-primary-500 relative' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    pkg.popular ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.bestFor}</p>
                  <div className="text-4xl font-bold text-gray-900">
                    {pkg.price}
                    <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={onBookNowClick}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
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