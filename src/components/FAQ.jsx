import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
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
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary-600" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-primary-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Limited Slots Available – Don't Miss Out!</h3>
            <p className="text-lg mb-6">
              We work with limited clients each month to maintain quality.
            </p>
            <p className="text-xl font-semibold mb-6">
              Entry package starts at just ₹7,999/month.
            </p>
            <div className="space-y-2">
              <p className="text-lg">"Book Your Slot Today!"</p>
              <p className="text-lg">"DM us now to get started"</p>
              <p className="text-lg">"Let's grow your business online – limited slots available!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;