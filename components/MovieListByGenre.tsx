import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  genre: string;
}

interface MovieListByGenreProps {
  genre: string;
}

const MovieListByGenre: React.FC<MovieListByGenreProps> = ({ genre }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const response = await fetch(`/api/moviesByGenre?genre=${genre}`);
      const data = await response.json();
      setMovies(data);
    };

    fetchMoviesByGenre();
  }, [genre]);

  return (
    <div className="px-6 md:px-12 mt-6 space-y-8">
      <div>
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {genre}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListByGenre;
