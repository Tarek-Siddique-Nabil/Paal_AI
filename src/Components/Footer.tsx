import { Logo } from "./ui/logo";
import { footerIcon } from "@/constant/footerIcon";

export const Footer = () => {
  return (
    <footer className="my-10 flex flex-col items-center justify-center gap-5 border-t-2 border-base-vilolet py-10 md:flex-row">
      <Logo />
      <div className="flex justify-center gap-1">
        {footerIcon.map((icon, index) => (
          <a key={index} href={icon.link} target="_blank">
            <img
              src={icon.image}
              alt="twitter"
              className={`${
                index > 2 && "scale-[80%]"
              } h-10 w-10  md:h-14 md:w-14`}
            />{" "}
          </a>
        ))}
      </div>
    </footer>
  );
};
