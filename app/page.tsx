import HeroSection from "./components/section/HeroSection";
import SecondFeaturedPost from "./components/section/SecondFeaturedPost";
import RecentPost from "./components/section/RecentPost";
import PostCards from "./components/section/PostCards";
import MorePostSection from "./components/section/MorePostSection";


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
