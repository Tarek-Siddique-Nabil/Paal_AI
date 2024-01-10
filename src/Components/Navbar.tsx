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
      className={`fixed w-full flex md:justify-between justify-center md:px-20 pt-6 ${
        progressStyle.height > "1%"
          ? "bg-[#141414]/[0.54] backdrop-blur z-[9999] md:py-5 py-2"
          : "bg-transparent"
      } `}
    >
      <Logo />
      <button
        className={`w-[150px] h-12 rounded-lg bg-base-vilolet font-clashgrotesk font-medium ${ClashGrotesk.variable} hidden md:block`}
      >
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
