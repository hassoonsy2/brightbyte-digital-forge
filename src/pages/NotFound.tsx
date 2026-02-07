import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Command, Cpu, Wifi, WifiOff } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();
  const [glitchText, setGlitchText] = useState('404');
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Glitch effect for 404 text
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`AaBbCcDdEeFfGg';
    let interval: NodeJS.Timeout;
    
    const startGlitch = () => {
      let iterations = 0;
      interval = setInterval(() => {
        setGlitchText(
          '404'
            .split('')
            .map((char, index) => {
              if (index < iterations) {
                return '404'[index];
              }
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('')
        );
        
        if (iterations >= 3) {
          clearInterval(interval);
          setGlitchText('404');
        }
        
        iterations += 1/3;
      }, 50);
    };

    startGlitch();
    const glitchInterval = setInterval(startGlitch, 4000);

    // Check online status
    setIsOffline(!navigator.onLine);
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [location.pathname]);

  const helpfulLinks = [
    { name: 'Services', href: '/services', icon: Command },
    { name: 'About', href: '/about', icon: Cpu },
    { name: 'Contact', href: '/contact', icon: Wifi },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Main Content */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Radar Scan Effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-500/10"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cyan-500/10"
            animate={{ scale: [1.2, 1.8, 1.2], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Connection Status */}
          {isOffline && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm"
            >
              <WifiOff className="w-4 h-4" />
              <span>You appear to be offline</span>
            </motion.div>
          )}

          {/* 404 Display */}
          <div className="mb-8 relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full" />
            
            {/* Main 404 Text */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <h1 className="text-[150px] sm:text-[200px] font-bold leading-none tracking-tighter">
                <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  {glitchText}
                </span>
              </h1>
              
              {/* Glitch Lines */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                animate={{ 
                  x: [-2, 2, -1, 0],
                  opacity: [1, 0.8, 1, 1]
                }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              >
                <div className="absolute top-1/3 left-0 right-0 h-px bg-red-500/50" />
                <div className="absolute top-2/3 left-0 right-0 h-px bg-cyan-500/50" />
              </motion.div>
            </motion.div>

            {/* Error Code Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-black/80 border border-blue-500/30 rounded-full"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-blue-400 font-mono">ERROR_CODE: NOT_FOUND</span>
            </motion.div>
          </div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              {isOffline 
                ? "It looks like you're offline. Check your connection and try again."
                : "The page you're looking for has vanished into the digital void. It might have been moved, deleted, or never existed."
              }
            </p>
            
            {/* Requested Path */}
            {!isOffline && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-700 rounded-lg font-mono text-sm text-gray-500"
              >
                <span className="text-gray-600">Requested:</span>
                <span className="text-red-400">{location.pathname}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              asChild
              className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300"
            >
              <Link to="/">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </span>
              </Link>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-2 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Popular Destinations
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {helpfulLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-gray-600"
          >
            Error Code: 404 | Status: Lost in the Matrix | 
            <Link to="/contact" className="text-blue-500 hover:text-blue-400 ml-1">
              Report this issue →
            </Link>
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
