import MovieListByGenre from "../components/MovieListByGenre";
import Navbar from "../components/Navbar";

const Drama = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-40 pb-20">
        <h1 className="text-yellow-400 text-5xl font-bold mb-8">
          Explore Drama Movies
        </h1>
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl">
          Dive into the emotional and gripping world of drama. Discover powerful
          stories, compelling characters, and unforgettable experiences in the
          best drama movies.
        </p>
      </div>
      <div className="px-6 md:px-12 pb-16">
        <MovieListByGenre genre="Drama" />
      </div>
    </div>
  );
};

export default Drama;
