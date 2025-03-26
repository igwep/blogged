/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import PostCards from "../Homesections/PostCards";
import { sanityClient } from "@/app/lib/sanityClient";

interface Category {
  title: string;
  slug: { current: string };
}
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { url: string } };
  body: string;
  _createdAt: string;
  categories?: Category[];
}

const SanitySearch = ({ query }: { query: string }) => {
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Search query changed:", query);

    if (!query.trim() || query.length < 2) { // Prevent searching for single characters
      console.log("Query is too short or empty, clearing results...");
      setResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      console.log("Fetching search results for:", query);
      setLoading(true);
      setError(null);

      try {
        const sanityQuery = `*[_type == "post" && 
          lower(title) match "*${query.toLowerCase()}*"] {
             _id,  
  title, 
  slug, 
  mainImage {
    asset->{
      url
    }
  }, 
  body, 
  _createdAt,
  categories[]->{
    title,
    slug
      }
        }`;

        const data: Post[] = await sanityClient.fetch(sanityQuery);
        console.log("Fetched Search Results:", data);

        setResults(data);
      } catch (err: any) {
        console.error("Search error:", err.message);
        setError("Failed to fetch search results.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (results.length === 0) return <p>No results found for &quot;{query}&quot;</p>;

  return (
    <PostCards 
      posts={results} 
      slice={false} 
      numberOfCards={results.length} 
      startIndex={0} 
    />
  );
};

export default SanitySearch;
