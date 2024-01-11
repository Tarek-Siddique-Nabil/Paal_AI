import Image from "next/image";
import { Logo } from "./ui/logo";
import { footerIcon } from "@/constant/footerIcon";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-center gap-5 py-10 my-10 border-t-2 border-base-vilolet">
      <Logo />
      <div className="flex justify-center gap-1">
        {footerIcon.map((icon, index) => (
          <a key={index} href={icon.link} target="_blank">
            <img
              src={icon.image}
              alt="twitter"
              className="md:w-14 md:h-14 h-10 w-10"
            />{" "}
          </a>
        ))}
      </div>
    </footer>
  );
};
