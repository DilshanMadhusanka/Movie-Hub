import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import FeaturedMovies from '../components/movies/FeaturedMovies';
import MovieGrid from '../components/movies/MovieGrid';
import { movies } from '../data/movies';

export default function HomePage() {
  const newMovies = movies.filter(movie => movie.isNew);
  const moviesList = movies.filter(movie => movie.category === 'movie');
  const tvShows = movies.filter(movie => movie.category === 'tv');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero movies={movies} />
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-950">
        <FeaturedMovies movies={movies} />
        <MovieGrid title="New Releases" movies={newMovies} />
        <MovieGrid title="Popular Movies" movies={moviesList} />
        <MovieGrid title="Trending TV Shows" movies={tvShows} />
      </div>
    </motion.div>
  );
}