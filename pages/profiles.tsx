import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import useCurrentUser from "../hooks/useCurrentUser";

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

const Profiles = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center mb-10">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8">
          <div
            onClick={() => router.push("/")}
            className="cursor-pointer group"
          >
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:border-white overflow-hidden transition duration-300 ease-in-out">
              <img
                src="/images/default-green.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white transition duration-300 ease-in-out">
              {user?.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
