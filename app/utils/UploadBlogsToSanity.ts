import { sanityClient } from "../lib/sanityClient";
import { FetchBlogsByUrl } from "./FetchBlogs";

// Updated function to call the API route for image uploading
export const uploadImageToSanity = async (imageUrl: string): Promise<string | null> => {
    try {
      const res = await fetch("/api/uploadImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl }),
      });
      const text = await res.text(); // Get raw text response for debugging
      console.log("Raw API response:", text);
      // Then try parsing JSON if not empty
      if (!text) return null;
      const data = JSON.parse(text);
      if (res.ok) {
        return data.assetId;
      } else {
        console.error("API error:", data.error);
        return null;
      }
    } catch (error) {
      console.error("Error calling upload API:", error);
      return null;
    }
  };
  

export const uploadBlogsToSanity = async (blogUrl: string) => {
  const blogs = await FetchBlogsByUrl(blogUrl);

  if (blogs.length === 0) {
    console.log("No blogs to upload.");
    return;
  }

  for (const blog of blogs) {
    try {
      let imageAssetId = null;
      if (blog.imageUrl) {
        imageAssetId = await uploadImageToSanity(blog.imageUrl);
      }

      await sanityClient.createIfNotExists({
        _type: "post",
        _id: blog.slug, // Using the Blogger post ID as a unique ID
        title: blog.title,
        slug: { current: blog.slug },
        body: blog.content,
        publishedAt: blog.publishedAt,
        mainImage: imageAssetId
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageAssetId,
              },
            }
          : null,
      });

      console.log(`Uploaded: ${blog.title}`);
    } catch (error) {
      console.error(`Error uploading ${blog.title}:`, error);
    }
  }
};
