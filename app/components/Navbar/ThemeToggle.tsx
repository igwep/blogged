"use client";
import { useTheme } from "@/app/context/ThemeToggle";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  if (!theme) return null;

  return (
    <button onClick={toggleTheme} className="w-10 h-10">
      {theme === "light" ? (
        <Image src="/svg/moon.svg" alt="Dark Mode" width={30} height={30} />
      ) : (
        <Image src="/svg/sun.svg" alt="Light Mode" width={30} height={30} />
      )}
    </button>
  );
};

export default ThemeToggle;
