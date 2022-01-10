import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white py-4 md:py-6 md:mb-6 dark:bg-gray-800">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "text-2xl font-bold	transition-colors text-gray-900 hover:text-sky-500 dark:text-white"
            }
          >
            🌱 Robin De Neef
          </a>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
