import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../src/assets/images/logo.png";

import { ChartLine } from "lucide-react";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";

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
      <div className="container mx-auto flex justify-between items-center py-[5px]">
        <Image
          src={LogoImg}
          alt="logo"
          width={200}
          height={200}
        />

        <div className="flex gap-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.path}
                className="btn text-[#64748B] font-semibold"
              >
                <Icon size={20} />
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;