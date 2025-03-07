import React from "react";
import Image from "next/image";
import Links from "./Links";


export const Navbar = () => {
  return (
    <header> {/* ✅ Wrap in header */}
      <nav className="flex font-body justify-between items-center bg-white text-black px-28 py-4 dark:bg-black dark:text-white">
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
