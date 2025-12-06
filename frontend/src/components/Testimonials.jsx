import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/testimonials`);
        if (response.data.success) {
          setTestimonials(response.data.testimonials);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-br from-white to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg text-gray-600">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white to-amber-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-amber-600 font-semibold text-lg uppercase tracking-wide mb-4">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Couples Say About Kaushal
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from couples who transformed their partnerships through our programs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100"
            >
              <Quote className="w-10 h-10 text-amber-600 mb-4" />
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.feedback}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Images */}
        <div className="mt-20 space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Hear From Our Couples</h3>
            <p className="text-gray-600 text-lg">Real testimonials from couples who transformed their partnerships</p>
          </div>

          {/* Main Image */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop&q=80"
                alt="Happy couple testimonial"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?w=800&h=600&fit=crop&q=80"
                alt="Couple success story"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop&q=80"
                alt="Happy partnership"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;