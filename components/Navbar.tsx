import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
        px-4
        md:px-16
        py-4
        flex
        flex-row
        items-center
        transition
        duration-500
        ${
          showBackground
            ? "bg-gradient-to-r from-black to-zinc-900 bg-opacity-80 shadow-lg"
            : ""
        }
        `}
      >
        <img className="h-8 lg:h-14" src="/images/logo.png" alt="logo" />
        <div
          className="
            flex-row
            ml-8
            gap-8
            hidden
            lg:flex
            uppercase
            tracking-wide
            "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Movies" />
          <NavbarItem label="Watchlist" />
          <NavbarItem label="Drama" />
          <NavbarItem label="Horror" />
          <NavbarItem label="Sci-Fi" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-gray-300 transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-6 items-center">
          <div className="text-gray-300 hover:text-gray-400 cursor-pointer transition">
            <BsSearch size={20} />
          </div>
          <div className="text-gray-300 hover:text-gray-400 cursor-pointer transition">
            <BsBell size={20} />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-gray-500">
              <img src="/images/default-green.png" alt="User Avatar" />
            </div>
            <BsChevronDown
              className={`text-gray-300 transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
