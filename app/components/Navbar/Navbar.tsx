import React from "react";
import Image from "next/image";
import Links from "./Links";
import Link from "next/link";


export const Navbar = () => {
  return (
    <header> {/*  Wrap in header */}
      <nav className="flex font-body justify-between items-center bg-white text-black md:px-28 px-8 py-4 dark:bg-[#181A2A] dark:text-white">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center ">
          <Image
            src="/svg/mainLogo.svg"
            alt="logo"
            width={50}
            height={50}
          />
          <span className="text-2xl font-bold dark:text-white">BlogSpot</span>
        </Link>

        {/* Links */}
        <Links />
      </nav>
    </header>
  );
};
