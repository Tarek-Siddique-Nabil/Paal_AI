import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
export const metadata: Metadata = {
  title: "Paal AI",
  description: "Paal AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
