import localFont from "next/font/local";

export const ClashGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/ClashGrotesk-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Semibold.otf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
});
