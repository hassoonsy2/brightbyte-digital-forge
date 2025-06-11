import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Temporary blog data - you can move this to a separate file later
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations and decision-making processes.',
    date: '2024-03-15',
    category: 'AI & Technology',
    readTime: '5 min read',
    image: '/blog/ai-business.jpg',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Quantum Computing: Breaking New Ground',
    excerpt: 'A deep dive into the latest developments in quantum computing and their potential impact on various industries.',
    date: '2024-03-10',
    category: 'Quantum Computing',
    readTime: '7 min read',
    image: '/blog/quantum-computing.jpg',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Digital Transformation Strategies',
    excerpt: 'Key strategies for businesses looking to undergo successful digital transformation in the modern era.',
    date: '2024-03-05',
    category: 'Digital Strategy',
    readTime: '6 min read',
    image: '/blog/digital-transformation.jpg',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    title: 'Machine Learning in Healthcare',
    excerpt: 'How machine learning is revolutionizing healthcare delivery and patient care.',
    date: '2024-02-28',
    category: 'Healthcare Tech',
    readTime: '8 min read',
    image: '/blog/ml-healthcare.jpg',
    color: 'from-red-500 to-orange-500'
  }
];

const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, updates, and expert analysis on technology and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="block group"
              >
                <Card className="overflow-hidden h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-0">
                  {/* Image Section */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-20`}></div>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=entropy&cs=tinysrgb`;
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${post.color} shadow-lg`}>
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div className="flex-grow">
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                        <span className="mr-2">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More Section (Optional) */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              <span>More articles coming soon...</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {/* Custom CSS for line clamping */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `
      }} />
    </div>
  );
};

export default Blog; 