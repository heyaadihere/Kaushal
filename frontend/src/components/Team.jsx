import React, { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/team`);
        const data = await response.json();
        if (data.success) {
          setTeamData(data.team);
        }
      } catch (error) {
        console.error('Error fetching team:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg text-gray-600">Loading team...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-amber-600 font-semibold text-lg uppercase tracking-wide mb-4">Our Team</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Experienced Professionals Shaping Marital Foundations
          </h2>
          <div className="flex items-center justify-center gap-4 text-2xl font-light text-gray-600 mb-4">
            <span>✦ Conciliators</span>
            <span>✦ Mentors</span>
            <span>✦ Resolution Specialists</span>
            <span>✦</span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Social Link */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Our Expert Team</h3>
            <p className="text-gray-600">Dedicated professionals committed to your success</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="https://videos.pexels.com/video-files/7233822/7233822-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;