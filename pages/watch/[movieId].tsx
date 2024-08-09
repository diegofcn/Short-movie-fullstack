import { useRouter } from "next/router";
import React from "react";
import useMovie from "../../hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-gradient-to-b from-black to-transparent">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer hover:text-gray-400 transition"
          size={40}
        />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <div className="h-full w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${data?.videoUrl}?autoplay=1`}
          allow="autoplay"
          allowFullScreen={true}
          title={data?.title}
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;
