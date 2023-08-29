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
    <div className="px-4 md:px-12 mt-4 space-y-8">
        <div>
            <p className="text-white text-md md:text-xl lg:text-2xl font-sans py-8 font-bold mb-4">
                {genre}
            </p>
            <div className="grid grid-cols-4 gap-2">
                {movies.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default MovieListByGenre;
