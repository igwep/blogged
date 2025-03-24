"use client";

import React, { useState } from "react";
import Link from "next/link";
import SearchButton from "./SearchButton";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { usePathname } from "next/navigation";
//import { sanityClient } from "@/app/lib/sanityClient";
//import { FetchBlogsByUrl } from "@/app/utils/FetchBlogs";
//import { uploadBlogsToSanity } from "@/app/utils/UploadBlogsToSanity";

interface NavLink {
  label: string;
  url:string;
}
const navLink: NavLink[] = [
  { label: "Blog", url: "/blog" },
  { label: "About", url: "/about" },
 
];

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);
 // const [isActive, setIsActive] = useState<string>('')
 const pathname = usePathname();
  /* const [navLink, setNavLinks] = useState<NavLink[]>([]); */

   /*  useEffect(()=>{
      const fetchNav = async () =>{
        const data = await sanityClient.fetch(`*[_type == "navigation"][0] { links }`);
        setNavLinks(data?.links || [])
      }
      fetchNav();
    
    },[]) */

  /* useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await FetchBlogsByUrl("https://developers.googleblog.com/en/");
      console.log("Fetched Blogs:", blogs); // Should now appear in console
    };

    fetchBlogs();
  }, []); */

  /* const handleUploadBlogs = async () => {
    
    try {
      await uploadBlogsToSanity("https://developers.googleblog.com/en/");
      console.log("Upload process completed.");
    } catch (error) {
      console.error("Error during upload:", error);
    }
    
  }; */

  return (
    <>
      {/* Desktop Navigation */}
      <div className="md:flex hidden items-center gap-3">
        <div className="flex gap-8 items-center text-lg">
         <ul className="flex gap-8">
         {navLink?.map((link: NavLink) => (
      <li key={link.url}>
        <a
          href={link.url}
         // onClick={() => setIsActive(link.url)}
          className={pathname === link.url ? 'text-[#7C4EE4]' : 'hover:text-[#7C4EE4]'}
        >
          {link.label}
        </a>
      </li>
    ))}
         </ul>
          <SearchButton /> {/* Search Icon */}
          <a href="/contact"
          /* onClick={handleUploadBlogs} */
          /* onClick={() => uploadBlogsToSanity("https://developers.googleblog.com/en/")} */
          className="px-8 py-3 bg-[#7C4EE4] rounded-md text-white dark:text-black">
            Contact
          </a>
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
        className={`fixed top-0 right-0 h-full w-64 p-2 bg-white dark:bg-[#181A2A] shadow-lg transform ${
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
          <Link href="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/contact"
            className="px-6 py-2 w-full bg-[#7C4EE4] text-center rounded-md text-white dark:text-black"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
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
