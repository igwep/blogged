"use client";
import React from "react";
import Image from "next/image";
import ReadMoreBtn from "../buttons/ReadMoreBtn";
import { useLatestPost } from "@/app/hooks/quearies";
import { format } from "date-fns";
import LoadingSpinner from "../LoadingSpinner";


/* const Loader = () => (
  <div className="flex justify-center items-center w-full h-[500px]">
    <p className="text-lg text-[#181A2A] dark:text-gray-300">Loading...</p>
  </div>
); */

const SecondFeaturedPost = () => {
  const { data: latestPost, isLoading, error } = useLatestPost();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  };
  if (error) return <p className="text-red-500">Failed to load post.</p>;
  if (!latestPost) return <p className="text-gray-500">No latest post available.</p>;

  // Format date
  const formattedDate = latestPost._createdAt
    ? format(new Date(latestPost._createdAt), "dd MMMM yyyy")
    : "Unknown Date";

  // Extract preview text from body
  const extractTextFromHTML = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "No description available.";
  };
  
  const previewText = latestPost.body
    ? extractTextFromHTML(latestPost.body).slice(0, 250) + "..."
    : "No description available.";
    const previewTextMobile = latestPost.body
    ? extractTextFromHTML(latestPost.body).slice(0, 150) + "..."
    : "No description available.";

  return (
    <section className="relative w-full h-auto bg-gray-100 dark:bg-[#181A2A] flex flex-col items-center justify-center md:px-28 md:py-28 p-8">
      {/* Wrapper Container */}
      <div className="relative bg-white dark:bg-[#181A2A] md:bg-transparent w-full border flex flex-col space-y-5 border-gray-300 dark:border-gray-700 md:border-0 rounded-lg p-4 py-8">
        
        {/* Dynamic Featured Image */}
        <div className="w-full flex items-center rounded-md justify-center">
          <Image
            src={latestPost?.mainImage?.asset?.url || "/image/default.jpg"}
            alt={latestPost.title}
            width={1000}
            height={750}
            className="z-0 w-full md:h-[413.58px] h-[200px] rounded-xl object-center object-cover"
          />
        </div>
        {/* Content Container */}
        <div className="md:absolute md:-bottom-30 md:right-0 rounded-md max-w-5xl bg-white dark:bg-[#181A2A] bg-opacity-80 md:p-6 space-y-6">
          <div className="flex gap-2 items-center font-rob">
            <h3 className="text-[#333333] dark:text-white font-semibold">
              {latestPost.categories?.[0]?.title || "Uncategorized"}
            </h3>
            <span className="text-[#666666] dark:text-gray-300">{formattedDate}</span>
          </div>
          <h1 className="md:text-4xl text-3xl font-bold text-[#333333] dark:text-white">
            {latestPost.title}
          </h1>
          <p className="text-base md:block hidden text-[#333333] dark:text-white mt-4 md:w-[90%]">
            {previewText}
          </p>
          <p className="text-base block md:hidden text-[#333333] dark:text-white mt-4 md:w-[90%]">
            {previewTextMobile}
          </p>
          <ReadMoreBtn latestPost={latestPost}>
            Read more
          </ReadMoreBtn>
        </div>
      </div>
    </section>
  );
};

export default SecondFeaturedPost;
