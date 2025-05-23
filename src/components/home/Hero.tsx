import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Download, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../../data/movies';
import Button from '../ui/Button';

interface HeroProps {
  movies: Movie[];
}

export default function Hero({ movies }: HeroProps) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const featuredMovies = movies.filter(movie => movie.isFeatured);
  const currentMovie = featuredMovies[currentMovieIndex];

  useEffect(() => {
    if (featuredMovies.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentMovieIndex(prev => 
        prev === featuredMovies.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.2,
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.8,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentMovie.id}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.div 
            initial={{ scale: 1 }}
            animate={{ 
              scale: 1.1,
              transition: { duration: 7, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            <img 
              src={currentMovie.backdrop} 
              alt={currentMovie.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Dynamic Gradient Overlays */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-transparent"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                {/* Movie Info */}
                <motion.div
                  custom={1}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-yellow-500 font-semibold text-lg">{currentMovie.rating.toFixed(1)}</span>
                    <span className="text-gray-400">/10</span>
                  </div>
                  <div className="h-5 w-px bg-gray-700" />
                  <span className="text-gray-300 font-medium">{currentMovie.runtime} min</span>
                  <div className="h-5 w-px bg-gray-700" />
                  <span className="text-gray-300 font-medium">{new Date(currentMovie.releaseDate).getFullYear()}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  custom={2}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-6xl md:text-8xl font-bold text-white mb-4 leading-none tracking-tight"
                >
                  {currentMovie.title}
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  custom={3}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl md:text-3xl text-indigo-300 italic mb-6 font-light"
                >
                  {currentMovie.tagline}
                </motion.p>

                {/* Genres */}
                <motion.div
                  custom={4}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {currentMovie.genres.map(genre => (
                    <span 
                      key={genre}
                      className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-indigo-500/20"
                    >
                      {genre}
                    </span>
                  ))}
                </motion.div>

                {/* Overview */}
                <motion.p
                  custom={5}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed font-light"
                >
                  {currentMovie.overview}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  custom={6}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-4"
                >
                  <Link to={`/movie/${currentMovie.id}`}>
                    <Button 
                      variant="primary" 
                      icon={<Play className="h-5 w-5" />}
                    >
                      Watch Now
                    </Button>
                  </Link>
                  <Link to={`/movie/${currentMovie.id}`}>
                    <Button 
                      variant="secondary" 
                      icon={<Download className="h-5 w-5" />}
                    >
                      Download
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      {featuredMovies.length > 1 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10"
        >
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMovieIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentMovieIndex 
                  ? 'bg-indigo-500 w-8' 
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}