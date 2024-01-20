import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./home.css";
import Navbar from "@/components/Navbar/Navbar";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
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
    <html lang="en" className={lato.className}>
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
