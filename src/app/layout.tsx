import type { Metadata } from "next";
import "./home.css";
import "./global.css";
import Navbar from "@/components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-ds",
});

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
    <html
      lang="en"
      className={`${GeistSans.className} ${dancingScript.variable}`}
    >
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
