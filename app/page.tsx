import HeroSection from "./components/Homesections/HeroSection";
import SecondFeaturedPost from "./components/Homesections/SecondFeaturedPost";
import RecentPost from "./components/Homesections/RecentPost";
import PostCards from "./components/Homesections/PostCards";
import MorePostSection from "./components/Homesections/MorePostSection";



export default function Home() {
    
  return (
   <div className="font-body dark:bg-[#181A2A] bg-gray-100 ">
    <HeroSection />
    <SecondFeaturedPost />
    <RecentPost />
    
    <MorePostSection />
    <PostCards slice={true} numberOfCards={10} startIndex={4}/>

   </div>
  );
}
