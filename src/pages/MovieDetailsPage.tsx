import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Play, Calendar, Clock, Star } from "lucide-react";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { movies, Movie } from "../data/movies";
import { formatDate, formatRuntime } from "../utils/formatters";

export default function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchMovie = () => {
      setLoading(true);
      setTimeout(() => {
        const foundMovie = movies.find((m) => m.id === Number(id));
        if (foundMovie) {
          setMovie(foundMovie);
        }
        setLoading(false);
      }, 500);
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <div className="w-12 h-12 border-t-2 border-b-2 border-indigo-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-white bg-slate-900">
        <h1 className="mb-4 text-3xl font-bold">Movie Not Found</h1>
        <p className="mb-8 text-gray-400">
          The movie you're looking for doesn't exist or has been removed.
        </p>
        <Button variant="primary" onClick={() => navigate("/")}>
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-900"
    >
      {/* Hero Banner */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pb-16 mx-auto -mt-56">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4"
          >
            <div className="overflow-hidden shadow-2xl rounded-xl">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.isNew && <Badge type="new">New</Badge>}
              {movie.isHD && <Badge type="hd">HD</Badge>}
              {movie.isFeatured && <Badge type="featured">Featured</Badge>}
            </div>

            {/* Title */}
            <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {movie.title}
            </h1>

            <h2 className="mb-6 text-xl italic text-gray-300">
              {movie.tagline}
            </h2>

            {/* Metadata */}
            <div className="flex flex-wrap gap-6 mb-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-400" />
                <span>{formatDate(movie.releaseDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-400" />
                <span>{formatRuntime(movie.runtime)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>{movie.rating.toFixed(1)}/10</span>
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 text-sm text-gray-300 rounded-full bg-slate-800"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h3 className="mb-3 text-xl font-semibold text-white">
                Overview
              </h3>
              <p className="leading-relaxed text-gray-300">{movie.overview}</p>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                variant="primary" 
                icon={<Play className="w-5 h-5" />}
                fullWidth
              >
                Watch Now
              </Button>
              <Button 
                variant="secondary" 
                icon={<Download className="w-5 h-5" />}
                fullWidth
              >
                Download
              </Button>
            </div> */}

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={movie.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  icon={<Play className="w-5 h-5" />}
                  fullWidth
                >
                  Watch Now
                </Button>
              </a>

              <a
                href={movie.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  icon={<Download className="w-5 h-5" />}
                  fullWidth
                >
                  Download
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
