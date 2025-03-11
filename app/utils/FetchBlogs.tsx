export const getBlogId = async (blogUrl: string): Promise<string | null> => {
    const API_KEY = "AIzaSyCQJenwf_gfqbn3dxpIrApIamHOLZWp4VQ"; // Replace with your actual Google API Key
    const API_URL = `https://www.googleapis.com/blogger/v3/blogs/byurl?url=${blogUrl}&key=${API_KEY}`;
  
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
  
      if (data.id) {
        console.log("Blog ID:", data.id);
        return data.id;
      } else {
        console.log("Blog ID not found.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching Blog ID:", error);
      return null;
    }
  };
  
  export const FetchBlogsByUrl = async (blogUrl: string) => {
    const API_KEY = "AIzaSyCQJenwf_gfqbn3dxpIrApIamHOLZWp4VQ";
    const blogId = await getBlogId(blogUrl);
  
    if (!blogId) return [];
  
    const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}`;
  
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
  
      if (!data.items) {
        console.log("No blog posts found.");
        return [];
      }
  
      return data.items.map((post: any) => {
        // Extract first image URL from content
        const imgMatch = post.content.match(/<img.*?src="(.*?)"/);
        const imageUrl = imgMatch ? imgMatch[1] : null;
  
        return {
          title: post.title,
          slug: post.id, // Google Blogger ID
          content: post.content,
          publishedAt: post.published,
          imageUrl, // Store extracted image URL
        };
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  };
  
  