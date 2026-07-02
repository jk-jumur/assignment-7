"use client";

import Image from "next/image";
import LogoImg from "../../src/assets/images/logo.png";
import { ChartLine } from "lucide-react";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import Mylink from "./shared/Navbar/Mylink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: RiHome2Line,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: RiTimeLine,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: ChartLine,
    },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3.5">
        
        {/* Logo Section - Responsive scaling */}
        <div className="flex-shrink-0">
          <Image
            src={LogoImg}
            alt="logo"
            width={160}
            height={40}
            className="w-32 sm:w-40 md:w-44 h-auto object-contain"
            priority
          />
        </div>

        {/* Navigation Links - Responsive layouts */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Mylink
                key={index}
                href={item.path}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all"
              >
                <Icon size={18} className="sm:w-[20px] sm:h-[20px]" />
                {/* Hidden on mobile, inline on tablet and desktop */}
                <span className="hidden sm:inline">{item.text}</span>
              </Mylink>
            );
          })}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;