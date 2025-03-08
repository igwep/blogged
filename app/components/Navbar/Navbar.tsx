import React from "react";
import Image from "next/image";
import Links from "./Links";


export const Navbar = () => {
  return (
    <header> {/* ✅ Wrap in header */}
      <nav className="flex font-body justify-between items-center bg-white text-black md:px-28 px-8 py-4 dark:bg-[#181A2A] dark:text-white">
        {/* Logo */}
        <div>
          <Image
            src="/svg/logo.svg"
            alt="logo"
            width={160}
            height={100}
            className="dark:hidden block"
          />
          <Image
            src="/svg/whiteLogo.svg"
            alt="logo"
            width={160}
            height={100}
            className="dark:block hidden"
          />
        </div>

        {/* Links */}
        <Links />
      </nav>
    </header>
  );
};
