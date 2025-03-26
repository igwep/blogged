/* "use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface Category {
    title: string;
    slug: { current: string };
  }
  interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage?: {
      asset: { url: string };
    };
    body: string;
    _createdAt: string;
    categories?: Category[];
  }
interface PostContextType {
    selectedPost: Post | null;
    setSelectedPost: (post: Post | null) => void;
}
const PostContext = createContext<PostContextType | undefined>(undefined);

// Provider component
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook for using context
export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
}; */
"use client";

import { createContext, useState, useContext } from "react";

// Define context type
interface FooterContextType {
  footerHeight: number;
  setFooterHeight: (height: number) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Create context with default values
const FooterContext = createContext<FooterContextType | undefined>(undefined);

// Custom hook for easier usage
export const useFooterContext = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooterContext must be used within a FooterProvider");
  }
  return context;
};

// Provider component
export const FooterProvider = ({ children }: { children: React.ReactNode }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FooterContext.Provider
      value={{
        footerHeight,
        setFooterHeight,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </FooterContext.Provider>
  );
};
