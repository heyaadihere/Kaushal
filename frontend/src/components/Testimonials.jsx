import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-amber-600 font-semibold text-lg uppercase tracking-wide mb-4">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Real Stories, Real Transformations
          </h2>
          <p className="text-lg text-gray-600">
            Hear from couples who have strengthened their partnerships through Kaushal
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-amber-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-200"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section with Multiple Videos */}
        <div className="mt-20 space-y-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">See How Couples Transform</h3>
            <p className="text-gray-600">Watch couples share their journey with Kaushal</p>
          </div>

          {/* Main Video */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              >
                <source src="https://videos.pexels.com/video-files/3191158/3191158-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              >
                <source src="https://videos.pexels.com/video-files/7235200/7235200-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              >
                <source src="https://videos.pexels.com/video-files/5531503/5531503-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;