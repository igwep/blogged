import React from "react";

interface CardProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const AboutCard: React.FC<CardProps> = ({ number, title, description, isActive = false }) => {
  return (
    <>
    <div
      className={`p-8 rounded-lg transition-all font-body duration-300 space-y-4 ${
        isActive ? "bg-[#7C4EE4] text-white shadow-lg" : "bg-gray-100 text-[#666666]"}`}
    >
      <h2 className={`text-7xl font-bold ${isActive ? "text-white" : "text-[#666666]"}`}>{number}</h2>
      <h3 className={`text-2xl font-semibold ${isActive ? "text-[#F7F6FE]" : "text-[#7C4EE4]"}`}>{title}</h3>
      <p className="text-sm mt-2 ">{description}</p>
    </div>
    </>
  );
};

export default AboutCard;