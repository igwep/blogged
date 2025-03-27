"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10 p-3 rounded-full 
                  text-white bg-[#7C4EE4] border-2 border-[#7C4EE4] 
                  shadow-lg transition-all duration-300 ease-in-out 
                  hover:bg-[#5a33b1] hover:border-[#5a33b1] 
                  active:scale-90 focus:ring-2 focus:ring-[#7C4EE4] focus:ring-opacity-50 
                  ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
    >
      <Image 
        src="/svg/up-arrow-svgrepo-com.svg" 
        alt="Back to top" 
        width={24} 
        height={24} 
        className="w-6 h-6" 
      />
    </button>
  );
};

export default BackToTopButton;
