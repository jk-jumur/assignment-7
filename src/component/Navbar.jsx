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
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-[5px] m-5">
        <Image
          src={LogoImg}
          alt="logo"
          width={200}
          height={200}
          className="w-auto h-auto"
        />

        <div className="flex gap-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Mylink
                key={index}
                href={item.path}
                
              >
                <Icon size={20} />
                {item.text}
              </Mylink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;