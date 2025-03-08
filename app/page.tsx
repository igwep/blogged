import HeroSection from "./components/Navbar/HeroSection";
import SecondFeaturedPost from "./components/Navbar/SecondFeaturedPost";

export default function Home() {
  return (
   <div className="font-body">
    <HeroSection />
    <SecondFeaturedPost />
   </div>
  );
}
