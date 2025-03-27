"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchAllPosts, fetchLatestPost, fetchFeaturedPost } from "../utils/FetchBlogs";


export const useAllPosts = () => {
    return useQuery({
      queryKey: ['allPosts'],
      queryFn: fetchAllPosts,
    });
  };
  
  // Hook for fetching the latest post
  export const useLatestPost = () => {
    return useQuery({
      queryKey: ['latestPost'],
      queryFn: fetchLatestPost,
    });
  };
  export const useFeaturedPost = () => {
    return useQuery({
      queryKey: ['featuredPost'],
      queryFn: fetchFeaturedPost,
      
    });
  };

