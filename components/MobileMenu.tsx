import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-zinc-900 w-56 absolute top-8 left-0 py-5 flex-col border border-gray-700 rounded-lg shadow-lg flex">
      <div className="flex flex-col gap-4">
        <div className="px-4 py-2 text-center text-white hover:text-gray-300 transition-colors duration-200 ease-in-out hover:underline">
          Home
        </div>
        <div className="px-4 py-2 text-center text-white hover:text-gray-300 transition-colors duration-200 ease-in-out hover:underline">
          Movies
        </div>
        <div className="px-4 py-2 text-center text-white hover:text-gray-300 transition-colors duration-200 ease-in-out hover:underline">
          Watchlist
        </div>
        <div className="px-4 py-2 text-center text-white hover:text-gray-300 transition-colors duration-200 ease-in-out hover:underline">
          Drama
        </div>
        <div className="px-4 py-2 text-center text-white hover:text-gray-300 transition-colors duration-200 ease-in-out hover:underline">
          Horror
        </div>
        <div className="px-4 py-2 text-center text-white hover:text-gray-300 transition-colors duration-200 ease-in-out hover:underline">
          Sci-Fi
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
