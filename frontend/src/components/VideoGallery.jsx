import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Couple's First Session Experience",
      thumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
      videoUrl: "https://cdn.pixabay.com/video/2021/03/28/69146-533267675_large.mp4"
    },
    {
      id: 2,
      title: "Financial Planning Workshop",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      videoUrl: "https://cdn.pixabay.com/video/2022/07/11/123513-729570018_large.mp4"
    },
    {
      id: 3,
      title: "Communication Skills Training",
      thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
      videoUrl: "https://cdn.pixabay.com/video/2021/05/01/73344-546206318_large.mp4"
    },
    {
      id: 4,
      title: "Partnership Accord Signing",
      thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      videoUrl: "https://cdn.pixabay.com/video/2022/12/12/143339-780252932_large.mp4"
    },
    {
      id: 5,
      title: "Family Integration Session",
      thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
      videoUrl: "https://cdn.pixabay.com/video/2019/02/16/21687-318196013_large.mp4"
    },
    {
      id: 6,
      title: "Success Story: Rohan & Amrita",
      thumbnail: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      videoUrl: "https://cdn.pixabay.com/video/2023/07/25/173332-850134632_large.mp4"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Gallery</h2>
          <p className="text-xl text-gray-600">Watch real couples share their transformation journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedVideo(null)}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <video
                autoPlay
                controls
                className="w-full rounded-xl shadow-2xl"
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
              </video>
              <h3 className="text-white text-2xl font-bold mt-6 text-center">{selectedVideo.title}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;