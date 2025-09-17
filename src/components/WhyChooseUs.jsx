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
    <section id="why-choose-us" className="py-16 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver results that matter to your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center p-6 bg-dark-800 border border-dark-700 rounded-lg hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-700 rounded-full mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-dark-800 to-primary-800 border border-dark-600 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What You'll Get With Every Package
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-dark-800 border border-dark-600 p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mr-4">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <span className="text-white font-medium">{benefit.title}</span>
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