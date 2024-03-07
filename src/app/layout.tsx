import type { Metadata } from "next";
import "./home.css";
import Navbar from "@/components/Navbar/Navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Sam F-Harrison",
  description: "Carefully crafted by me for you.",
  authors: {
    name: "Samuel Fletcher-Harrison",
    url: "https://github.com/SamFHarrison",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
