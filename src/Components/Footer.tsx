import Image from "next/image";
import { Logo } from "./ui/logo";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-center gap-5 py-10 my-10 border-t-2 border-base-vilolet">
      <Logo />
      <div className="flex justify-center gap-1">
        <img
          src="/twitter.png"
          alt="twitter"
          className="md:w-14 md:h-14 h-10 w-10"
        />
        <img
          src="/telegram.png"
          alt="twitter"
          className="md:w-14 md:h-14 h-10 w-10"
        />
        <img
          src="/discord.png"
          alt="twitter"
          className="md:w-14 md:h-14 h-10 w-10"
        />
        <img
          src="/dextools.png"
          alt="twitter"
          className="md:w-14 md:h-14 h-10 w-10"
        />
        <img
          src="/Coingecko.png"
          alt="twitter"
          className="md:w-14 md:h-14 h-10 w-10"
        />
        <img
          src="/image 5.png"
          alt="twitter"
          className="md:w-14 md:h-14 h-10 w-10"
        />
        <img
          src="/image 4.png"
          alt="twitter"
          className="md:w-14 md:h-14 h-10 w-10"
        />
      </div>
    </footer>
  );
};
