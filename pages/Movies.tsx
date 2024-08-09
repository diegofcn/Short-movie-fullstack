import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import useMovieList from "../hooks/useMovieList";

const Movies = () => {
  const { data: movies = [] } = useMovieList();

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-40 pb-20">
        <h1 className="text-green-400 text-5xl font-bold mb-8">All Movies</h1>
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl">
          Explore our extensive collection of movies across all genres. Whether
          you're in the mood for action, drama, comedy, or sci-fi, you'll find
          something to enjoy.
        </p>
      </div>
      <div className="px-6 md:px-12 pb-16">
        <MovieList title="All Movies" data={movies} />
      </div>
    </div>
  );
};

export default Movies;
