import MovieListByGenre from "../components/MovieListByGenre"
import Navbar from "../components/Navbar"


const Drama = () => {
  return (
    <div>
        <Navbar />
        <div className="flex justify-center py-40">
            <img src="/images/Drama.png" className="rounded-2xl h-80 shadow-2xl shadow-green-800"/>
        </div>
        <div>
            <MovieListByGenre genre="Drama" />
        </div>
    </div>
  )
}

export default Drama