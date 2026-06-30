"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Mylink = ({href,children, className = ""}) => {
     const pathname = usePathname();
     console.log(pathname, href, "pathname");
    return (
        <Link
         href={href} 
         className={` btn  text-[#64748B]  font-semibold border-none
         ${className} ${pathname === href ? "bg-green-900 text-white" : ""}`}>
             {children}
        </Link>
    );
};

export default Mylink;