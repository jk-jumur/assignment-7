import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper | Keep Your Friendships Alive",
  description:
    "KeenKeeper is a friendship management platform where you can organize your friends, remember birthdays, and strengthen meaningful relationships.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
      data-theme="light" 
      className="min-h-full flex flex-col bg-gray-100">
          <Navbar/>
        {children}
          <Footer/>
        </body>
    </html>
  );
}
