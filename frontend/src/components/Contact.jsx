import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91-9873333620',
      href: 'tel:+919873333620'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'connect@thekaushal.in',
      href: 'mailto:connect@thekaushal.in'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Vasant Kunj, New Delhi, India',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Sat: 9AM - 7PM',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-amber-400 font-semibold text-lg uppercase tracking-wide mb-4">Get In Touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your Partnership Foundation?
          </h2>
          <p className="text-lg text-gray-300">
            Book your free 15-minute clarity call and take the first step towards a harmonious partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Tell us about your partnership journey and what you're looking for..."
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <Icon className="w-8 h-8 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-gray-400 text-sm">{info.content}</p>
                  </a>
                );
              })}
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&h=800&fit=crop&q=80"
                alt="Happy couple"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Additional CTA */}
            <div className="bg-amber-600/20 backdrop-blur-md rounded-xl p-6 border border-amber-500/30">
              <h4 className="text-white font-bold text-xl mb-2">Prefer a Quick Call?</h4>
              <p className="text-gray-300 mb-4">Speak directly with our team now.</p>
              <a href="tel:+919873333620">
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;