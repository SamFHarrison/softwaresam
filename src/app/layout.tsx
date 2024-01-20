import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./home.css";

const lato = Lato({ weight: ["400", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam F-Harrison",
  description: "Carefully crafted by me for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
