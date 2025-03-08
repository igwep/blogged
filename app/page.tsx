import HeroSection from "./components/section/HeroSection";
import SecondFeaturedPost from "./components/section/SecondFeaturedPost";
import RecentPost from "./components/section/RecentPost";

export default function Home() {
  return (
   <div className="font-body">
    <HeroSection />
    <SecondFeaturedPost />
    <RecentPost />
   </div>
  );
}
