import { useState } from 'react';
import { motion } from 'framer-motion';
import { movies } from '../data/movies';
import MovieGrid from '../components/movies/MovieGrid';

export default function TVShowsPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const tvShows = movies.filter(movie => movie.category === 'tv');
  
  const allGenres = Array.from(
    new Set(tvShows.flatMap(show => show.genres))
  ).sort();

  const filteredShows = selectedGenre === 'All'
    ? tvShows
    : tvShows.filter(show => show.genres.includes(selectedGenre));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-900 pt-24"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-white">TV Shows</h1>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedGenre('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedGenre === 'All'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              All
            </button>
            {allGenres.map(genre => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedGenre === genre
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        <MovieGrid title="" movies={filteredShows} />
      </div>
    </motion.div>
  );
}