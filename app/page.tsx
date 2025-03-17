import HeroSection from "./components/Homesections/HeroSection";
import SecondFeaturedPost from "./components/Homesections/SecondFeaturedPost";
import RecentPost from "./components/Homesections/RecentPost";
import PostCards from "./components/Homesections/PostCards";
import MorePostSection from "./components/Homesections/MorePostSection";


export default function Home() {
  return (
   <div className="font-body">
    <HeroSection />
    <SecondFeaturedPost />
    <RecentPost />
    <PostCards slice={true} numberOfCards={4} startIndex={1}/>
    <MorePostSection />
    <PostCards slice={true} numberOfCards={10} startIndex={4}/>

   </div>
  );
}
