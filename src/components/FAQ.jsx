import React, { useState } from 'react';
import { Plus, Timer, Calendar, MessageCircle, TrendingUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: "Do I need to provide content?",
      answer: "No, we handle everything – strategy, design, captions, hashtags, and posting."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Yes, you can start small and upgrade anytime as your business grows."
    },
    {
      question: "Will I get sales from this?",
      answer: "Our focus is brand visibility + lead generation. With the right ad budget, we help drive actual customers to your business."
    },
    {
      question: "What if I want custom requirements?",
      answer: "We also offer custom packages tailored to your brand's needs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 px-4 sm:px-0">
              Get answers to common questions about our services
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-dark-900 border border-dark-600 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  className="w-full p-4 sm:p-6 lg:p-8 text-left flex items-center justify-between hover:bg-dark-700 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white pr-4 sm:pr-8 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <Plus
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-accent-400 transform transition-transform duration-300 ease-in-out ${
                        openIndex === index ? 'rotate-45' : 'rotate-0'
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 pt-2 sm:pt-3 lg:pt-4">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed transform transition-transform duration-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center relative">
            <div className="bg-gradient-to-br from-accent-600 via-accent-500 to-accent-700 text-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-accent-400 shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

              {/* CTA Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 sm:mb-6">
                  <Timer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
                  Limited Slots Available – Don't Miss Out!
                </h3>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-white/20">
                  <p className="text-base sm:text-lg lg:text-xl mb-2 leading-relaxed">
                    We work with limited clients each month to maintain quality.
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-200">
                    Entry package starts at just ₹7,999/month.
                  </p>
                </div>

                {/* Info Grid with Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm sm:text-base">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <p className="font-semibold">Book Your Slot Today!</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <p className="font-semibold">DM us now to get started</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 sm:col-span-1 flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <p className="font-semibold">Let's grow your business online</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
