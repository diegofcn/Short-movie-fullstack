import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import MovieList from "../components/MovieList";
import useMovieList from "../hooks/useMovieList";
import useFavorites from "../hooks/useFavorites";
import InfoModal from "../components/InfoModal";
import useInfoModal from "../hooks/useInfoModal";
import MovieListByGenre from "../components/MovieListByGenre";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pb-12">
        <Billboard />
      </div>
      <div className="px-6 md:px-12 pb-16 space-y-12">
        <MovieList title="My List" data={favorites} />
        <MovieListByGenre genre="Horror" />
        <MovieListByGenre genre="Sci-Fi" />
        <MovieListByGenre genre="Drama" />
      </div>
    </div>
  );
}
