
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import useMovieList from "../hooks/useMovieList";

const Movies = () => {
    const {data: movies = [] } = useMovieList();
  return (
    <div>
        <Navbar />
        <div className="flex justify-center py-40">
            <img src="/images/movies.png" className="rounded-2xl h-80 shadow-2xl shadow-green-800"/>
        </div>
        <div>
            <MovieList title="All Movies" data={movies}/>
        </div>
    </div>
  )
}

export default Movies