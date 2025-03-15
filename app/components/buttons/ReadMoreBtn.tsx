import React from "react";

interface ReadMoreBtnProps {
  children: React.ReactNode;
}

const ReadMoreBtn: React.FC<ReadMoreBtnProps> = ({ children }) => {
  return (
    <button className=" px-8 py-3 font-semibold  dark:bg-[#181A2A] text-[#7C4EE4] rounded-lg border-2 border-[#7C4EE4]">
      {children}
    </button>
  );
};

export default ReadMoreBtn;
