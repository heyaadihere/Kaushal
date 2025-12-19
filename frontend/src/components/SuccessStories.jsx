import React from 'react';
import { Quote, Heart, Calendar, MapPin } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      names: "Priya & Aditya",
      location: "Mumbai, Maharashtra",
      marriageYear: "2023",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop&q=80",
      story: "We came to Kaushal with completely different expectations about finances and career. Through the Sammati program, we discovered how to honor both our ambitions while building something together. The Partnership Accord has been our north star through every major decision.",
      package: "Sammati (5 Sessions)",
      highlight: "Created a 5-year financial roadmap together"
    },
    {
      id: 2,
      names: "Rohan & Meera",
      location: "Bangalore, Karnataka",
      marriageYear: "2022",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop&q=80",
      story: "Coming from very different family backgrounds, we struggled with how to set boundaries with extended family. The Family Integration Strategy helped us create clear, respectful boundaries while honoring our cultural roots. Two years later, we've never been happier.",
      package: "Family Integration Strategy",
      highlight: "Harmoniously merged two different family traditions"
    },
    {
      id: 3,
      names: "Ananya & Vikram",
      location: "Delhi NCR",
      marriageYear: "2024",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=600&fit=crop&q=80",
      story: "We thought we communicated well until life got stressful. The Constructive Dialogue Toolkit taught us not just how to talk, but how to truly understand each other's emotional landscape. These skills saved us during our first major life transition.",
      package: "Constructive Dialogue Toolkit",
      highlight: "Reduced conflicts by 80% in first 6 months"
    },
    {
      id: 4,
      names: "Kavya & Arjun",
      location: "Pune, Maharashtra",
      marriageYear: "2023",
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=600&fit=crop&q=80",
      story: "The Sankalp program was transformative. We went from having surface-level conversations to creating a comprehensive life blueprint. Eight sessions felt intensive, but the depth of alignment we achieved was worth every moment. We're not just married - we're true partners.",
      package: "Sankalp (8 Sessions)",
      highlight: "Built a complete 10-year partnership roadmap"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real couples, real transformations. See how Kaushal helped these partners build lasting foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80">
                <img
                  src={story.image}
                  alt={story.names}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{story.names}</h3>
                  <div className="flex items-center gap-4 text-white/90 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {story.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Married {story.marriageYear}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-amber-600 mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed italic">"{story.story}"</p>
                </div>

                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">
                      <strong>Program:</strong> {story.package}
                    </span>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <p className="text-amber-800 font-semibold">✨ {story.highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;