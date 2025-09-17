import { CheckCircle, Target, Palette, TrendingUp, Users, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Palette className="w-8 h-8 text-accent-400" />,
      title: "Professional Content Creation",
      description: "We convert your photos & clips into professional, trending content"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent-400" />,
      title: "Consistent Brand Presence",
      description: "Consistent posting that keeps your brand active & visible"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "Sales-Focused Strategy",
      description: "Sales-focused strategy, not just likes & followers"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Affordable Packages",
      description: "Affordable packages starting from just ₹7,999/month"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Industry Experience",
      description: "Trusted by cafes, gyms, clinics, salons, boutiques & SMEs"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customized strategy for your niche"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Branded, high-quality designs"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Consistent growth with tested hacks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated support team"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Content that connects, converts & sells"
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 lg:py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              We deliver results that matter to your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center p-4 sm:p-6 lg:p-8 bg-dark-800 border border-dark-700 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-dark-700 rounded-full mb-3 sm:mb-4 lg:mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">{reason.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-dark-800 to-primary-800 border border-dark-600 rounded-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                What You'll Get With Every Package
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-dark-800 border border-dark-600 p-3 sm:p-4 lg:p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-accent-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <div className="text-white text-sm sm:text-base">
                      {benefit.icon}
                    </div>
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base lg:text-lg">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;