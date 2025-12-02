import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, Share2, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blog post and related posts
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Fetch main blog post
        const postResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/${slug}`);
        const postData = await postResponse.json();
        
        if (postData.success) {
          setPost(postData.blog);
          
          // Fetch related posts
          const relatedResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/related/${slug}?limit=3`);
          const relatedData = await relatedResponse.json();
          
          if (relatedData.success) {
            setRelatedPosts(relatedData.blogs);
          }
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogData();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading article...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/blogs">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <Link to="/blogs" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 group transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Blog</span>
              </Link>
              
              <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full mb-4">
                <Tag className="w-4 h-4" />
                <span className="text-sm font-semibold">{post.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">By {post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Share Button */}
            <div className="flex justify-end mb-8">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:border-amber-600 hover:text-amber-600 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="font-medium">Share Article</span>
              </button>
            </div>

            {/* Excerpt */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-600 p-8 rounded-r-xl mb-12">
              <p className="text-xl text-gray-800 leading-relaxed font-medium italic">
                {post.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6" style={{ whiteSpace: 'pre-line' }}>
                {post.content}
              </div>
            </div>

            {/* Author Card */}
            <div className="mt-16 p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  K
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Written by {post.author}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expert insights from the Kaushal team, dedicated to helping couples build stronger, more intentional partnerships through pre-marital counseling and guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-12">
                <div className="w-1 h-8 bg-amber-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Related Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <div className="flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-amber-600" />
                          <span className="text-xs font-semibold text-gray-700">{relatedPost.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{relatedPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-amber-600 font-semibold group-hover:gap-2 gap-1 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apply These Insights to Your Relationship
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to take the next step? Let's create a personalized plan for your partnership journey.
            </p>
            <Link to="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
                Schedule Your Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;