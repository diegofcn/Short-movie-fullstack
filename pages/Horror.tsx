import MovieListByGenre from "../components/MovieListByGenre";
import Navbar from "../components/Navbar";

const Horror = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-40 pb-20">
        <h1 className="text-red-600 text-5xl font-bold mb-8">
          Discover Horror Movies
        </h1>
        <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl">
          Step into the world of fear and suspense. Explore the best horror
          movies that will keep you on the edge of your seat, from chilling
          classics to modern nightmares.
        </p>
      </div>
      <div className="px-6 md:px-12 pb-16">
        <MovieListByGenre genre="Horror" />
      </div>
    </div>
  );
};

export default Horror;
