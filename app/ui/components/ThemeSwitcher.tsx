"use client";
import { RiMoonFill, RiSunFill } from "@remixicon/react";
import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

export default function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`w-12 h-12 border border-b-0 rounded-md hover:bg-accent-foreground stay-connected-bg-icon-box ${className}`}
    >
      <button
        className="flex justify-center items-center w-full h-full"
        onClick={toggleTheme}
        aria-label={`${
          currentTheme !== "dark"
            ? "Passer au mode sombre"
            : "Passer au mode clair"
        }`}
        // title="Profile Facebook de Joseph Itakala"
      >
        {currentTheme === "dark" ? (
          <>
            <RiSunFill />
          </>
        ) : (
          <>
            <RiMoonFill />
          </>
        )}
      </button>
    </div>
  );
}
