"use client";

import { useParams } from "next/navigation";
import { useAllPosts } from "@/app/hooks/quearies";
import { useState, useEffect, useRef } from "react";
import { useFooterContext } from "@/app/context/FooterProvider";
import MorePostSection from "@/app/components/Homesections/MorePostSection";
import PostCards from "@/app/components/Homesections/PostCards";

interface Category {
  title: string;
  slug: { current: string };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  body: string;
  _createdAt: string;
  categories?: Category[];
}

const PostPage = () => {
  const { id } = useParams() as { id: string };
  const { data: posts, isLoading } = useAllPosts();
  const { footerHeight, setFooterHeight } = useFooterContext(); //  Get footer height from context
  const [scrollProgress, setScrollProgress] = useState(0);

  
  
  const footerRef = useRef<HTMLDivElement | null>(null);
/* no longer footer height but the more post height */
  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, [setFooterHeight]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollableHeight = docHeight - windowHeight - footerHeight;
      const progress = Math.min((scrollTop / scrollableHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerHeight]);
  
  console.log("Footer Height:", footerHeight);
  console.log("Current Post ID:", id);

  if (isLoading) return <p>Loading...</p>;

  const post = posts?.find((p: Post) => p._id === id);

  if (!post) return <p className="text-red-500">Post not found</p>;

  // Format the publish date
  const formattedDate = new Date(post._createdAt).toLocaleDateString();

  // Handle scroll progress
  

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-[#181A2A] z-50">
        <div
          className="h-1 bg-blue-500 transition-all"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Post Content */}
      <div className="md:px-28 px-8 bg-gray-100 dark:bg-[#181A2A]  space-y-6 pt-8">
        <h1 className="md:text-5xl text-3xl  font-body font-semibold  text-[#333333] text-center dark:text-gray-300">{post.title}</h1>

        {/* Categories and Publish Date */}
        <div className="mt-2 text-gray-500 font-body dark:text-gray-300 text-sm flex gap-5">
          {post.categories && post.categories.length > 0 && (
            <span className="ml-4 font-semibold dark:text-gray-300 text-[#666666] uppercase">
              {post.categories.map((cat: Category) => cat.title).join(", ")}
            </span>
          )}
          <span>{formattedDate}</span>
        </div>

        {/* Render Post Content as HTML */}
        <div
          className="mt-4 text-lg font-body leading-relaxed text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
     <div ref={footerRef}>
     <MorePostSection/>
     <PostCards slice={true} numberOfCards={3} startIndex={0} excludeId={id}/>
     </div>

    </div>
  );
};

export default PostPage;
