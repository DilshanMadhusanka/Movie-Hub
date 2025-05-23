import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../../data/movies';
import MovieCard from './MovieCard';

interface FeaturedMoviesProps {
  movies: Movie[];
}

export default function FeaturedMovies({ movies }: FeaturedMoviesProps) {
  const featuredMovies = movies.filter(movie => movie.isFeatured).slice(0, 3);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Featured Movies
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/movies" 
              className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span className="font-medium">View All</span>
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featuredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} featured={true} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}