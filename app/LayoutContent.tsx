"use client";
import React from "react";
import SearchPage from "./components/search/SearchModal";
import { useFooterContext } from "./context/FooterProvider";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
    const { isSearchOpen } = useFooterContext(); // Get search state
  
    if (isSearchOpen) {


      return <>
      <Navbar />
      <SearchPage />
      <Footer />
      
      </> ; // Show only SearchPage when searching
    }
  
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  };
  export default LayoutContent; 