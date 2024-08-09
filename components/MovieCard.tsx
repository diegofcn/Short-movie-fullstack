import React from "react";
import { useRouter } from "next/router";

import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineInfo } from "react-icons/ai";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "../hooks/useInfoModal";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] rounded-2xl">
      <img
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
        "
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div
        className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-100
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
        "
      >
        <img
          className=" cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          src={data.thumbnailUrl}
          alt="thumbnail"
        />
        <div
          className="
    z-10
    bg-zinc-800
    p-4
    absolute
    w-full
    transition
    shadow-md
    rounded-b-lg
  "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              className="
        cursor-pointer 
        w-8 
        h-8 
        lg:w-10 
        lg:h-10 
        bg-white 
        rounded-full 
        flex 
        justify-center 
        items-center 
        transition 
        hover:bg-neutral-300
      "
              onClick={() => router.push(`/watch/${data?.id}`)}
            >
              <BsFillPlayCircleFill size={30} className="text-zinc-900" />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="
        cursor-pointer 
        ml-auto 
        w-8 
        h-8 
        lg:w-10 
        lg:h-10 
        border-white 
        border-2 
        rounded-full 
        flex 
        justify-center 
        items-center 
        transition 
        hover:border-neutral-300
      "
            >
              <AiOutlineInfo size={25} className="text-white" />
            </div>
          </div>

          <p className="text-white font-semibold text-lg mt-4 leading-tight tracking-wide">
            {data.title}
          </p>

          <div className="flex gap-4 text-sm text-gray-400 mt-2">
            <p>{data.year}</p>
            <p>{data.duration}</p>
            <p>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
