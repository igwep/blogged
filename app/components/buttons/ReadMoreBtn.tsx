"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface ReadMoreBtnProps {
  children: React.ReactNode;
  latestPost: Post; // Add latestPost to props
}

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

const ReadMoreBtn: React.FC<ReadMoreBtnProps> = ({ children, latestPost }) => {
const router = useRouter();

  const handlePostClick = () => {
    router.push(`/post/${latestPost.slug.current}`); // Use slug instead of _id for SEO-friendly URL
  };

  return (
    <button
      className="px-8 py-3 font-semibold dark:bg-[#181A2A] cursor-pointer text-[#7C4EE4] rounded-lg border-2 border-[#7C4EE4]"
      onClick={handlePostClick} // Ensure onClick is added
    >
      {children}
    </button>
  );
};

export default ReadMoreBtn;
