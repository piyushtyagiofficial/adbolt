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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        {!showOptions ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today!</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Company/Brand Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors font-semibold"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your enquiry has been submitted. How would you like to proceed?
            </p>
            
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </button>
              
              <button
                onClick={handleScheduleMeeting}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors font-semibold flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Meeting
              </button>
            </div>
            
            <button
              onClick={handleClose}
              className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
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