

import Image from "next/image";
import LogoImg from "@/assets/images/logo.png"; 
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
      <div className="container mx-auto flex justify-between items-center px-3 sm:px-6 py-3.5">
        
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src={LogoImg}
            alt="logo"
            width={160}
            height={40}
            className="w-28 sm:w-40 md:w-44 h-auto object-contain"
            priority
          />
        </div>

        {/* Navigation Links - Mobile friendly text and icons */}
        <div className="flex items-center gap-1 sm:gap-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Mylink
                key={index}
                href={item.path}
                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all"
              >
                <Icon size={16} className="sm:w-[20px]  sm:h-[20px]" />
                {/* Now visible on all devices */}
                <span>{item.text}</span>
              </Mylink>
            );
          })}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;