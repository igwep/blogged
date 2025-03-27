"use client";

import { useFooterContext } from "@/app/context/FooterProvider";
import SanitySearch from "./SanitySearch";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const SearchPage = () => {
  const { isSearchOpen, searchQuery, setIsSearchOpen } = useFooterContext();
  const pathname = usePathname(); // Get current path
  const prevPath = useRef(pathname); // Store previous path

  // Close modal only when the path actually changes
  useEffect(() => {
    if (prevPath.current !== pathname) {
      setIsSearchOpen(false);
    }
    prevPath.current = pathname; // Update previous path
  }, [pathname]);

  if (!isSearchOpen) return null; // Don't render if search is closed

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white md:px-28 px-8">
    <h1 className="text-2xl font-bold mb-4">Search Results for: &quot;{searchQuery}&quot;</h1>

    {searchQuery.trim() === "" ? (
      <p className="text-gray-500 dark:text-gray-400">Start typing to search for posts...</p>
    ) : (
      <SanitySearch query={searchQuery} />
    )}
  </div>
  );
};

export default SearchPage;
