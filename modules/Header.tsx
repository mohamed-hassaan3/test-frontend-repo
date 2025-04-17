import Search from "@/components/ui/Search";
import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLanguageOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between border-b border-gray-400">
      <section className="flex items-center gap-6 p-4">
        <Image src={"./gh_small_logo.svg"} width={50} height={50} alt="logo" />
        <Search />
      </section>
      <section className="flex items-center gap-2">
        <DarkThemeToggle />
        <FaUser className="text-gray-400" />
        <FaLocationDot className="text-gray-400" />
        <IoLanguageOutline className="text-gray-400" />
        <div className="mr-2 p-2 text-gray-400">
          <Image src="./Avatar.svg" width={30} height={30} alt="avatar" />
        </div>
      </section>
    </header>
  );
};

export default Header;
