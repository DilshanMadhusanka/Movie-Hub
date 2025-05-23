import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';
import Badge from '../ui/Badge';
import { Movie } from '../../data/movies';
import { truncateText } from '../../utils/formatters';

interface MovieCardProps {
  movie: Movie;
  featured?: boolean;
}

export default function MovieCard({ movie, featured = false }: MovieCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: { 
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  if (featured) {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="relative overflow-hidden rounded-xl group"
      >
        <Link to={`/movie/${movie.id}`} className="block">
          <div className="aspect-[16/9] w-full">
            <img 
              src={movie.backdrop} 
              alt={movie.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end">
            <div className="flex flex-wrap gap-2 mb-2">
              {movie.isNew && <Badge type="new">New</Badge>}
              {movie.isHD && <Badge type="hd">HD</Badge>}
              {movie.isFeatured && <Badge type="featured">Featured</Badge>}
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{movie.title}</h3>
            <p className="text-gray-300 text-sm mb-2">{movie.genres.join(' • ')}</p>
            <p className="text-gray-400 mb-2">{truncateText(movie.overview, 120)}</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-yellow-400 text-sm font-medium">{movie.rating.toFixed(1)}</span>
                <span className="text-gray-500 text-xs ml-1">/10</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-sm">{new Date(movie.releaseDate).getFullYear()}</span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg h-full group"
    >
      <Link to={`/movie/${movie.id}`} className="block h-full">
        <div className="relative aspect-[2/3] w-full overflow-hidden">
          {movie.poster ? (
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-900">
              <Film size={48} className="text-gray-600" />
            </div>
          )}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {movie.isNew && <Badge type="new">New</Badge>}
            {movie.isHD && <Badge type="hd">HD</Badge>}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-white text-lg mb-1 group-hover:text-indigo-400 transition-colors">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-400">{new Date(movie.releaseDate).getFullYear()}</span>
            <div className="flex items-center">
              <span className="text-yellow-400 font-medium">{movie.rating.toFixed(1)}</span>
              <span className="text-gray-500 text-xs ml-1">/10</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            {truncateText(movie.overview, 80)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}