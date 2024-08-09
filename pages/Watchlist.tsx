import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import useFavorites from "../hooks/useFavorites";

const Watchlist = () => {
  const { data: favorites = [] } = useFavorites();

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-40 pb-20">
        <h1 className="text-green-400 text-5xl font-bold mb-8">My Watchlist</h1>
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl">
          Browse your curated list of movies you've saved to watch later. Your
          favorite picks, all in one place.
        </p>
      </div>
      <div className="px-6 md:px-12 pb-16">
        <MovieList title="My List" data={favorites} />
      </div>
    </div>
  );
};

export default Watchlist;
