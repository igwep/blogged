"use client";
import React from "react";
import { useAllPosts } from "@/app/hooks/quearies";
import Image from "next/image";
import { format } from "date-fns"; // For date formatting

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
const PostCards = ({ 
  slice, 
  numberOfCards, 
  startIndex 
}: { 
  slice: boolean;  
  numberOfCards: number; 
  startIndex: number; 
}) => {
  const { data: posts, isLoading, error } = useAllPosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading posts.</p>;

  // Conditionally slice the posts if `slice` is true
  const displayedPosts = slice ? posts?.slice(startIndex, numberOfCards) : posts;

  return (
    <div className="grid grid-cols-1 bg-gray-100 dark:bg-[#181A2A] md:grid-cols-3 gap-8 px-28 pt-8 pb-8">
      {displayedPosts?.map((post: Post) => { 
        // Format date
        const formattedDate = post._createdAt
          ? format(new Date(post._createdAt), "dd MMMM yyyy")
          : "Unknown Date";

        // Extract preview text from body
        const extractTextFromHTML = (html: string): string => {
          const doc = new DOMParser().parseFromString(html, "text/html");
          return doc.body.textContent || "No description available.";
        };  
        const previewText = post?.body
          ? extractTextFromHTML(post.body).slice(0, 200) + "..."
          : "No description available.";

        return (
          <div key={post._id} className="space-y-4">
            {/* Image Section */}
            <div className="w-full h-[250px] overflow-hidden">
              <Image
                src={post?.mainImage?.asset?.url || "/placeholder-image.jpg"}
                alt={post?.title || "Post Image"}
                width={400} 
                height={250} 
                className="w-full h-full object-cover rounded-xl" 
              />
            </div>
            {/* Text Content */}
            <div className="text-start space-y-3">
              {/* Date & Category */}
              <div className="flex gap-2 items-center font-rob">
                <h3 className="text-[#333333] dark:text-white font-semibold">
                  {post?.categories?.map((cat: Category) => cat.title).join(", ") ||
                    "Uncategorized"}
                </h3>
                <span className="text-[#666666] dark:text-gray-300">
                  {formattedDate}
                </span>
              </div>
              {/* Dynamic Post Title */}
              <h1 className="text-2xl font-bold dark:text-white text-[#181A2A] h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                {post?.title.length > 50
                  ? post?.title.slice(0, 50) + "..."
                  : post?.title || "Untitled Post"}
              </h1>
              {/* Dynamic Post Content */}
              <p className="text-lg dark:text-white text-[#181A2A] mt-2">
                {previewText}
              </p>
              {/* Read More Button */}
              <button className="font-semibold underline text-[#7C4EE4] text-lg">Read more...</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default PostCards;
