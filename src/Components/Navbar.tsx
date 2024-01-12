"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "./ui/logo";
import { ClashGrotesk } from "@/utils/font";

const Navbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const progressStyle = {
    height: `${scrollPercentage}%`,
  };
  return (
    <nav
      className={`fixed flex w-full flex-col items-center  justify-center gap-2 pt-6 transition-all duration-150 ease-linear md:flex-row md:justify-between md:gap-0 md:px-20 ${
        progressStyle.height > "1%"
          ? "z-[9999] border-b border-base-violet-light bg-[#141414]/[0.54] py-2 backdrop-blur md:py-5  "
          : "bg-transparent"
      } `}
    >
      <Logo />
      <button
        className={`${
          progressStyle.height > "1%"
            ? "hidden border border-base-vilolet md:block"
            : "bg-base-vilolet"
        } h-12 w-[150px] rounded-lg  font-clashgrotesk font-medium transition-all duration-150 ease-linear ${
          ClashGrotesk.variable
        } `}
      >
        Your Mints
      </button>
    </nav>
  );
};

export default Navbar;
