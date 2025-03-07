"use client"
import { useEffect, useState } from "react"
import Image from "next/image"


 const ThemeToggle = () => {          
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }

    },[])
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      };
      return (
        <button onClick={toggleTheme} className="w-10 h-10">
        {theme === "light" ? (
          <Image src="/svg/moon.svg" alt="Dark Mode" width={30} height={30} />
        ) : (
          <Image src="/svg/sun.svg" alt="Light Mode" width={30} height={30} />
        )}
      </button>

      )



          }

 export default ThemeToggle;