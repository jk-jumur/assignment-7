import Image from "next/image";
import LogoImg from '../../src/assets/images/logo.png'

import { ChartLine } from 'lucide-react';
import { RiHome2Line, RiTimeLine } from "react-icons/ri";


const Navbar = () => {

      const navItems = [
         {
             path:"/",
             text:"Home",
         },

         {
            path: "/timeline",
            text: "Timeline",
         },

         {
             path:"/stats",
             text:"Stats"
         }

      ]
    return (
        <nav className="container mx-auto p-4">
            <div className="flex justify-between">
                 <Image src={LogoImg}
                  alt="lgo-xl"
                  width={200}
                  height={200}
                  className=" text-4xl"/>
                   <div className="flex gap-3">
                       <button className="btn text-[#64748B] font-semibold "><RiHome2Line />Home</button>
                       <button className="btn text-[#64748B] font-semibold "><RiTimeLine />Timeline</button>
                       <button className="btn text-[#64748B] font-semibold ">  <ChartLine />Stats</button>
                   </div>
             </div> 
        </nav>
    );
};

export default Navbar;