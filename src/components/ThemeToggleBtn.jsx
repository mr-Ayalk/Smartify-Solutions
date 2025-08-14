import { Moon, Sun } from "lucide-react";
import React, { useEffect } from "react";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <button>
        {theme === "dark" ? (
          <Sun
            onClick={() => setTheme("light")}
            className="size-8 p-1.5 border border-gray-500 rounded-full text-white"
          />
        ) : (
          <Moon
            onClick={() => setTheme("dark")}
            className="size-8 p-1.5 border border-gray-500 rounded-full "
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
