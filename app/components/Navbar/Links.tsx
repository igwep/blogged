"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchButton from "./SearchButton";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="md:flex hidden items-center gap-3">
        <div className="flex gap-8 items-center text-lg">
          <span>Blog</span>
          <span>
            <Link href="/about">About</Link>
          </span>
          <SearchButton /> {/* Search Icon */}
          <button className="px-8 py-3 bg-[#7C4EE4] rounded-md text-white dark:text-black">
            Contact
          </button>
        </div>
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <Image
          src="/svg/menu.svg" // Change this to your burger menu icon
          alt="Menu"
          width={30}
          height={30}
          className="dark:invert"
        />
      </button>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 p-2 bg-white dark:bg-black shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <Image
            src="/svg/close.svg" // Change this to your close icon
            alt="Close"
            width={25}
            height={25}
            className="dark:invert"
          />
        </button>

        {/* Mobile Menu Items */}
        <nav className="flex flex-col items-center mt-16 gap-6 text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <button
            className="px-6 py-2 w-full bg-[#7C4EE4] rounded-md text-white dark:text-black"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </button>
          <SearchButton />
          <ThemeToggle />
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Links;
