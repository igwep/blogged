"use client";
import React from "react";
import { useAllPosts } from "@/app/hooks/quearies";
import Image from "next/image";
import { format } from "date-fns"; // For date formatting
import ReadMoreBtn from "../buttons/ReadMoreBtn";

const PostCards = () => {
  const { data: posts, isLoading, error } = useAllPosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading posts.</p>;

  return (
    <div className="grid grid-cols-1 bg-gray-100 md:grid-cols-3 gap-8 px-28 pt-8">
      {posts?.slice(0, 3).map((post: any) => { // ✅ Limit to 3 posts
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
                width={400} // Fixed width
                height={250} // Fixed height
                className="w-full h-full object-cover rounded-lg" // Ensures all images fit uniformly
              />
            </div>

            {/* Text Content */}
            <div className="text-start space-y-3">
              {/* Date & Category */}
              <div className="flex gap-2 items-center font-rob">
                <h3 className="text-[#333333] dark:text-white font-semibold">
                  {post?.categories?.map((cat: any) => cat.title).join(", ") ||
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
              <ReadMoreBtn>Read more</ReadMoreBtn>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCards;
