"use client";
import React from "react";
import { useAllPosts } from "@/app/hooks/quearies";
import Image from "next/image";
import { format } from "date-fns"; // For date formatting
import { useRouter } from "next/navigation";
//import { usePost } from "@/app/context/PostProvider";

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
  startIndex,
  excludeId
}: { 
  slice: boolean;  
  numberOfCards: number; 
  startIndex: number; 
  excludeId?: string;
}) => {
  const { data: posts, isLoading, error } = useAllPosts();
  const router = useRouter();
  const handlePostClick = (post: Post) => {
    router.push(`/post/${post._id}`);
  };
  //const { setSelectedPost } = usePost();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading posts.</p>;

  const filteredPosts = posts?.filter((post: Post) => post._id !== excludeId);

  // Conditionally slice the posts if `slice` is true
  const displayedPosts = slice ? filteredPosts?.slice(startIndex, numberOfCards) : filteredPosts;
  return (
    <div className="grid grid-cols-1 bg-gray-100 dark:bg-[#181A2A] md:grid-cols-3 gap-8 md:px-28 px-8 pt-8 pb-8">
      {displayedPosts?.map((post: Post) => { 
        // Format date
        const formattedDate = post._createdAt
          ? format(new Date(post._createdAt), "dd MMMM yyyy")
          : "Unknown Date";
          console.log("Post ID:", post._id);
        // Extract preview text from body
        const extractTextFromHTML = (html: string): string => {
          const doc = new DOMParser().parseFromString(html, "text/html");
          return doc.body.textContent || "No description available.";
        };  
        const previewText = post?.body
          ? extractTextFromHTML(post.body).slice(0, 120) + "..."
          : "No description available.";

        return (
          <div key={post._id} className="space-y-4">
            {/* Image Section */}
            <div className="w-full h-[300px] overflow-hidden">
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
              <h1 className="md:text-2xl text-xl font-bold dark:text-white text-[#333333] h-12 overflow-hidden text-ellipsis whitespace-nowrap">
                {post?.title.length > 50
                  ? post?.title.slice(0, 50) + "..."
                  : post?.title || "Untitled Post"}
              </h1>
              {/* Dynamic Post Content */}
              <p className="md:text-lg dark:text-white text-[#333333] mt-2">
                {previewText}
              </p>
              {/* Read More Button */}
              <button 
              onClick={()=>{handlePostClick(post)

              
              }}
              /* onClick={() => {setSelectedPost(post)
              }}  */
              className="font-semibold cursor-pointer underline text-[#7C4EE4] md:text-lg">Read more...</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default PostCards;
