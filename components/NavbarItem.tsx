import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <Link href={label == "Home" ? "/" : label}>
      <div className="text-gray-200 cursor-pointer hover:text-white transition hover:underline hover:underline-offset-4">
        {label}
      </div>
    </Link>
  );
};

export default NavbarItem;
