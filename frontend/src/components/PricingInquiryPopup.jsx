import React, { useState } from 'react';
import { X, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const PricingInquiryPopup = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I would like to know more about your pricing and packages.'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'Pricing Inquiry'
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Inquiry Sent Successfully!",
          description: "We'll send you detailed pricing information shortly at " + formData.email,
        });
        setFormData({ name: '', email: '', phone: '', message: 'I would like to know more about your pricing and packages.' });
        onClose();
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Error submitting form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-2xl max-w-lg w-full mx-4 overflow-hidden shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 text-center text-white">
          <Mail className="w-12 h-12 mx-auto mb-3" />
          <h3 className="text-2xl font-bold">Request Pricing Information</h3>
          <p className="text-white/90 text-sm mt-2">Fill in your details and we'll send you complete pricing details</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="popup-name" className="block text-gray-700 mb-2 font-medium text-sm">
              Full Name *
            </label>
            <Input
              id="popup-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label htmlFor="popup-email" className="block text-gray-700 mb-2 font-medium text-sm">
              Email Address *
            </label>
            <Input
              id="popup-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="popup-phone" className="block text-gray-700 mb-2 font-medium text-sm">
              Phone Number *
            </label>
            <Input
              id="popup-phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          
          <div>
            <label htmlFor="popup-message" className="block text-gray-700 mb-2 font-medium text-sm">
              Your Message
            </label>
            <Textarea
              id="popup-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full"
              placeholder="Any specific questions about our packages?"
            />
          </div>

          <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
            <p className="text-xs text-gray-600">
              <strong>Note:</strong> Pricing information will be sent to <span className="text-amber-700 font-semibold">connect@thekaushal.in</span> and your provided email.
            </p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 group"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PricingInquiryPopup;
