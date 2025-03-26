"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchButton from "./SearchButton";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useFooterContext } from "@/app/context/FooterProvider";


/* interface NavLink {
  label: string;
  url:string;
} */
/* const navLink: NavLink[] = [
  { label: "Blog", url: "/blog" },
  { label: "About", url: "/about" },
 
]; */

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useFooterContext();
  const pathname = usePathname();
  const router = useRouter();

  // Update URL when searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      router.push(`?query=${searchQuery}`, { scroll: false });
    }
  }, [searchQuery, router]);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
    setSearchQuery(""); // Reset search input when opening
  };

  const handleCancelSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery(""); // Clear search query
    router.push(pathname, { scroll: false }); // Reset URL
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="md:flex hidden items-center gap-3">
        <div className="flex gap-8 items-center text-lg">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update global search state
              />
              <button className="ml-2 text-gray-500 text-sm" onClick={handleCancelSearch}>
                Cancel
              </button>
            </div>
          ) : (
            <ul className="flex gap-8">
              <li>
                <Link href="/blog" className={pathname === "/blog" ? "text-[#7C4EE4]" : "hover:text-[#7C4EE4]"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className={pathname === "/about" ? "text-[#7C4EE4]" : "hover:text-[#7C4EE4]"}>
                  About
                </Link>
              </li>
            </ul>
          )}

          {!isSearchOpen && (
            <button onClick={handleSearchClick}>
              <SearchButton />
            </button>
          )}

          <a href="/contact" className="px-8 py-3 bg-[#7C4EE4] rounded-md text-white dark:text-black">
            Contact
          </a>
        </div>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <Image src="/svg/Menu.svg" alt="Menu" width={30} height={30} className="dark:invert" />
      </button>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 p-2 bg-white dark:bg-[#181A2A] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)} aria-label="Close Menu">
          <Image src="/svg/close.svg" alt="Close" width={25} height={25} className="dark:invert" />
        </button>

        <nav className="flex flex-col items-center mt-16 gap-6 text-lg">
          {isSearchOpen ? (
            <div className="w-full flex flex-col items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="mt-2 text-sm text-gray-500" onClick={handleCancelSearch}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </>
          )}

          {!isSearchOpen && (
            <button onClick={handleSearchClick}>
              <SearchButton />
            </button>
          )}

          <Link
            href="/contact"
            className="px-6 py-2 w-full bg-[#7C4EE4] text-center rounded-md text-white dark:text-black"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Links;
//import { sanityClient } from "@/app/lib/sanityClient";
//import { FetchBlogsByUrl } from "@/app/utils/FetchBlogs";
//import { uploadBlogsToSanity } from "@/app/utils/UploadBlogsToSanity";
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