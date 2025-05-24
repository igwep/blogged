"use client";
import Image from "next/image";
import { useFeaturedPost } from "@/app/hooks/quearies";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../LoadingSpinner";

export default function HeroSection() {
  const { data: featuredPost, isLoading, isError } = useFeaturedPost();
  const router = useRouter();

  // Debugging: Log the fetched data
  console.log("Featured Post Data:", featuredPost);

  const handlePostClick = () => {
    if (!featuredPost) {
      console.log("No featured post available");
      return;
    }
    if (!featuredPost._id) {
      console.log("Featured post is missing _id");
      return;
    }
    console.log("Navigating to:", `/post/${featuredPost._id}`);
    router.push(`/post/${featuredPost._id}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError || !featuredPost) {
    return <p className="text-white text-center">No featured post available</p>;
  }

  const extractTextFromHTML = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "No description available.";
  };

  const previewText = featuredPost?.body
    ? extractTextFromHTML(featuredPost.body).slice(0, 250) + "..."
    : "No description available.";

  return (
    <section className="relative flex py-4 flex-col md:flex-row items-center justify-between w-full h-auto md:h-[80vh] bg-[#7C4EE4] px-8 md:px-28 overflow-hidden">
      
      {/* Top Left Pattern */}
      <div className="absolute top-[-50px] left-0 w-64 h-64 md:w-[600px] md:h-60 opacity-50 pointer-events-none">
        <Image src="/svg/parttern.svg" alt="Pattern" width={900} height={700} className="w-full h-auto" />
      </div>

      {/* Bottom Right Pattern */}
      <div className="absolute bottom-[-10px] right-0 w-64 h-64 md:w-[600px] md:h-60 opacity-50 pointer-events-none">
        <Image src="/svg/pattern2.svg" alt="Pattern" width={900} height={700} className="w-full h-auto" />
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 mt-16 text-start space-y-4 md:text-left">
        <h3 className="text-lg text-white dark:text-[#181A2A] font-semibold">Featured post</h3>
        <h1 className="text-6xl font-bold text-white dark:text-[#181A2A]">{featuredPost.title}</h1>
        <p className="text-lg text-white dark:text-[#181A2A] mt-4 md:w-[80%]">
          {previewText}
        </p>

        {/* CTA Button */}
        <button
          onClick={handlePostClick}
          className="mt-6 px-8 py-3 text-lg font-semibold bg-white dark:bg-[#181A2A] text-black dark:text-white rounded-lg hover:bg-blue-700 transition"
        >
          Read more
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full z-30 md:w-1/2 mt-4 md:mt-0 flex justify-center">
        {featuredPost.mainImage?.asset?.url && (
          <Image
            src={featuredPost.mainImage.asset.url}
            alt="Featured Post Image"
            width={500}
            height={400}
            className="rounded-lg"
          />
        )}
      </div>
    </section>
  );
}
