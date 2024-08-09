import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white text-black rounded-md py-2 md:py-3 px-4 md:px-6 flex items-center text-sm md:text-lg font-semibold shadow-md hover:bg-neutral-300 transition duration-300 ease-in-out"
    >
      <BsFillPlayFill size={20} className="mr-2" />
      Play
    </button>
  );
};

export default PlayButton;
