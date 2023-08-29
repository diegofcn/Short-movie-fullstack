import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import useFavorites from "../hooks/useFavorites";

const Watchlist = () => {
    const {data: favorites = [] } = useFavorites();
  return (
    
    <div>
      <Navbar />
      <div className="flex justify-center py-40">
            <img src="/images/Watchlist.png" className="rounded-2xl h-80 shadow-2xl shadow-green-800"/>
        </div>
      <div>
        <MovieList title="My List" data={favorites}/>
      </div>
        
    </div>
  )
}

export default Watchlist