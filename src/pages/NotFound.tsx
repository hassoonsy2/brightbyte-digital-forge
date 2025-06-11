import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20 bg-gray-50 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-blue-200 rounded-full animate-pulse delay-75"></div>
              <div className="absolute inset-8 bg-blue-300 rounded-full animate-pulse delay-150"></div>
              <div className="absolute inset-12 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-bold text-blue-600">404</span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void.
            Let's get you back on track.
          </p>

          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-gray-600 mb-4">
              You can try these helpful links:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/services"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                Our Services
              </Link>
              <Link 
                to="/blog"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                Blog
              </Link>
              <Link 
                to="/about"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                About Us
              </Link>
              <Link 
                to="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
