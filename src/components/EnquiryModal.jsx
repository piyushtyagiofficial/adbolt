import { X, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOptions(true);
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in your social media management services. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919548506975?text=${encodedMessage}`, '_blank');
  };

  const handleScheduleMeeting = () => {
    alert('Meeting scheduling functionality would be integrated with your preferred calendar system (Calendly, etc.)');
  };

  const resetModal = () => {
    setFormData({ name: '', email: '', phone: '' });
    setShowOptions(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 lg:p-6 z-50">
      <div className="bg-dark-900 border border-dark-600 rounded-lg max-w-xs sm:max-w-md lg:max-w-lg w-full p-4 sm:p-6 lg:p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        {!showOptions ? (
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 pr-8">Get Started Today!</h2>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Company/Brand Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:py-3 border border-dark-600 bg-dark-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm sm:text-base"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:py-3 border border-dark-600 bg-dark-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:py-3 border border-dark-600 bg-dark-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm sm:text-base"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent-600 text-white py-2 sm:py-3 lg:py-4 px-4 rounded-md hover:bg-accent-700 transition-colors font-semibold text-sm sm:text-base lg:text-lg mt-4 sm:mt-6"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Thank You!</h2>
            <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base">
              Your enquiry has been submitted. How would you like to proceed?
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white py-2 sm:py-3 lg:py-4 px-4 rounded-md hover:bg-green-700 transition-colors font-semibold flex items-center justify-center text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp Now
              </button>
              
              <button
                onClick={handleScheduleMeeting}
                className="w-full bg-accent-600 text-white py-2 sm:py-3 lg:py-4 px-4 rounded-md hover:bg-accent-700 transition-colors font-semibold flex items-center justify-center text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Schedule a Meeting
              </button>
            </div>
            
            <button
              onClick={handleClose}
              className="mt-3 sm:mt-4 text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;