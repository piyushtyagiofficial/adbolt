import { CheckCircle, Target, Palette, TrendingUp, Users, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Palette className="w-8 h-8 text-primary-600" />,
      title: "Professional Content Creation",
      description: "We convert your photos & clips into professional, trending content"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent-500" />,
      title: "Consistent Brand Presence",
      description: "Consistent posting that keeps your brand active & visible"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Sales-Focused Strategy",
      description: "Sales-focused strategy, not just likes & followers"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "Affordable Packages",
      description: "Affordable packages starting from just ₹7,999/month"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
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
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver results that matter to your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What You'll Get With Every Package
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <div className="text-primary-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <span className="text-gray-800 font-medium">{benefit.title}</span>
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