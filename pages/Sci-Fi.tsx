import MovieListByGenre from "../components/MovieListByGenre";
import Navbar from "../components/Navbar";

const SciFi = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-40 pb-20">
        <h1 className="text-cyan-400 text-5xl font-bold mb-8">
          Explore Sci-Fi Movies
        </h1>
        <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl">
          Dive into a world of futuristic adventures, space explorations, and
          technological marvels. Discover the best science fiction movies right
          here.
        </p>
      </div>
      <div className="px-6 md:px-12 pb-16">
        <MovieListByGenre genre="Sci-Fi" />
      </div>
    </div>
  );
};

export default SciFi;
