import HeroSection from "./components/section/HeroSection";
import SecondFeaturedPost from "./components/section/SecondFeaturedPost";

export default function Home() {
  return (
   <div className="font-body">
    <HeroSection />
    <SecondFeaturedPost />
   </div>
  );
}
