import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoftwareSam - Sam F-Harrison",
  description: "Designed and built by Sam F-Harrison",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
