import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, X, Calendar, Clock, Film } from 'lucide-react';
import { CinematicButton } from './CinematicButton';

export interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  year: number;
  duration: string;
  genres: string[];
  synopsis: string;
  director: string;
  cast: string[];
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Movie Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="relative flex-none w-[260px] md:w-[290px] h-[380px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer group glass border border-white/5 bg-[#18181b]/40"
        onClick={() => setIsOpen(true)}
      >
        {/* Poster Image */}
        <div className="absolute inset-0 bg-[#000]">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover opacity-85 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
            loading="lazy"
          />
          {/* Bottom Shadow Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-95 group-hover:opacity-40 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end h-1/2 transition-transform duration-300">
          {/* Rating Tag */}
          <div className="flex items-center gap-1.5 mb-2 w-fit bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
            <span className="text-xs font-semibold text-white tracking-wider">
              {movie.rating.toFixed(1)}
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-bold font-sans text-white group-hover:text-[#d4af37] transition-colors duration-300 leading-tight tracking-wide mb-1">
            {movie.title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-white/50 mb-3 font-medium">
            <span>{movie.year}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>{movie.duration}</span>
          </div>

          {/* Quick Reveal on Hover */}
          <div className="max-h-0 overflow-hidden group-hover:max-h-[80px] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 flex flex-col justify-end">
            <p className="text-xs text-white/70 line-clamp-2 mb-3 leading-relaxed">
              {movie.synopsis}
            </p>
            <div className="flex items-center text-xs font-semibold text-[#d4af37] gap-1 group/btn">
              <span>View Details</span>
              <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cinematic Details Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#050505]/90 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl bg-[#09090b] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-[#b31217] hover:border-[#b31217] text-white transition-all duration-300 z-20 group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Backdrop Header */}
              <div className="relative h-[240px] md:h-[350px]">
                <img
                  src={movie.backdrop}
                  alt={movie.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-transparent to-transparent hidden md:block" />

                {/* Banner Content overlay */}
                <div className="absolute bottom-6 left-6 md:left-12 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {movie.genres.map((g) => (
                      <span
                        key={g}
                        className="text-[10px] uppercase font-bold tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                  <h2
                    className="text-2xl md:text-5xl font-heading font-bold text-white mb-2 leading-tight tracking-wide drop-shadow-lg"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {movie.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Details */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase font-bold text-[#d4af37] tracking-[0.2em] mb-2">
                      Synopsis
                    </h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      {movie.synopsis}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#d4af37]">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                          Release Year
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {movie.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#d4af37]">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-white/40 uppercase tracking-wider font-semibold">
                          Duration
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {movie.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <CinematicButton variant="primary" size="md">
                      <Play className="w-4 h-4 fill-current" /> Watch Trailer
                    </CinematicButton>
                  </div>
                </div>

                {/* Director & Cast Info */}
                <div className="space-y-6 md:pl-6 md:border-l border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                    <span className="text-lg font-bold text-white">{movie.rating.toFixed(1)}</span>
                    <span className="text-xs text-white/40">/ 10 Rating</span>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-white/40 tracking-[0.2em] mb-1.5">
                      Director
                    </h4>
                    <span className="text-sm font-semibold text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 inline-block">
                      {movie.director}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-white/40 tracking-[0.2em] mb-2">
                      Starring Cast
                    </h4>
                    <ul className="space-y-2">
                      {movie.cast.map((actor) => (
                        <li key={actor} className="flex items-center gap-2 text-sm text-white/80">
                          <Film className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>{actor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
