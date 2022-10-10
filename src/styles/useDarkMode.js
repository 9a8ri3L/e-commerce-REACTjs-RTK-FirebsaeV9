import { useState } from "react";


export default function useDarkMode() {
  const lsTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(lsTheme ? lsTheme : "dark");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return { theme, setTheme, toggleTheme };
}
