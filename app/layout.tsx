import type { Metadata } from "next";
import { bitcount } from "./ui/fonts";
import './globals.css';

export const metadata: Metadata = {
  title: "Cleidy Gil | Portfolio",
  description:
    "Portfolio website of Cleidy Gil, a software developer specializing in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bitcount.className}  bg-white dark:bg-black text-black dark:text-white transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
