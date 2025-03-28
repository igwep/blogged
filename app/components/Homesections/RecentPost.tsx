"use client"
import React from 'react'
import ViewAllBtn from '../buttons/ViewAllBtn'
import Image from 'next/image'
import ReadMoreBtn from '../buttons/ReadMoreBtn'
import {  useLatestPost } from '@/app/hooks/quearies'
import { format } from 'date-fns' // Import date formatting
import LoadingSpinner from '../LoadingSpinner'
import PostCards from './PostCards'



interface Category {
  title: string;
  slug: { current: string };
}


//  Loading Component
/* const Loader = () => (
  <div className="flex justify-center items-center w-full h-[500px]">
    <p className="text-lg text-[#181A2A] dark:text-gray-300">Loading...</p>
  </div>
); */

const RecentPost = () => {
  // Fetch all posts and latest post
 // const {  isLoading: loadingPosts, error: errorPosts } = useAllPosts();
  const { data: latestPost, isLoading: loadingLatest, error: errorLatest } = useLatestPost();


  // Format date if available
  const formattedDate = latestPost?._createdAt ? format(new Date(latestPost._createdAt), "dd MMMM yyyy") : "Unknown Date";

  // Extract first 150 characters from body as preview text
  const extractTextFromHTML = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "No description available.";
  };
  
  // Generate preview text
  const previewText = latestPost?.body
    ? extractTextFromHTML(latestPost.body).slice(0, 250) + "..."
    : "No description available.";

  

  return (
    <>
    <div className='w-full  pt-10 md:px-28 px-8 bg-gray-100 dark:bg-[#181A2A] space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='md:text-5xl text-2xl font-semibold dark:text-white'>Our Recent Post</h1>
        <ViewAllBtn>View All</ViewAllBtn>
      </div>

      {/* If loading, show the loader */}
      {(loadingLatest) &&  <div className="flex items-center justify-center ">
      <LoadingSpinner />
    </div>}

      {/* If error, display error message */}
      {(errorLatest) && (
        <p className="text-red-500 text-center">Error loading posts. Please try again.</p>
      )}

      {/* Render only when data is available */}
      {!loadingLatest &&   !errorLatest && latestPost && (
        <section className="md:flex hidden gap-4     flex-col md:flex-row items-start md:mt-24 justify-between w-full">
          {/* Image Section */}
          <div className="w-full md:w-[75%] md:h-[500px] mt-4 md:mt-0 flex">
  <Image
    src={latestPost?.mainImage?.asset?.url || "/placeholder-image.jpg"} // Fallback image
    alt={latestPost?.title || "Latest Post Image"}
    width={712}
    height={400}
    priority
    unoptimized // Ensures Next.js doesn’t block external images
    className="rounded-xl w-full h-auto"
  />
</div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-start space-y-8 md:text-left">
            {/* Date & Category */}
            <div className='flex gap-2 items-center font-rob'>
              <h3 className="text-[#333333] dark:text-white font-semibold">{latestPost?.categories?.map((cat: Category) => cat.title).join(", ") || "Uncategorized"}</h3>
              <span className='text-[#666666] dark:text-gray-300'>{formattedDate}</span>
            </div>

            {/* Dynamic Post Title */}
            <h1 className="text-4xl font-bold dark:text-white text-[#181A2A]">
              {latestPost?.title || "Untitled Post"}
            </h1>

            {/* Dynamic Post Content */}
            <p className="text-lg dark:text-white text-[#181A2A] mt-4">
              {previewText}
            </p>

            {/* CTA Button */}
            <ReadMoreBtn  latestPost={latestPost} >Read more</ReadMoreBtn>
          </div>
        </section>
      )}
   
    </div>
    {latestPost && (
  <PostCards slice={true} numberOfCards={4} startIndex={1} excludeId={latestPost._id} />
)}
    </>
  )
}

export default RecentPost
