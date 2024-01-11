import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width="213"
      height="55"
      priority
      quality={100}
    />
  );
};
