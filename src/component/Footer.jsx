
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
 
import {  FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white py-12 px-4 sm:px-6 md:px-12 w-full mt-auto">
      <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
        
        {/* Brand Name / Logo */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          KeenKeeper
        </h2>
        
        {/* App Description */}
        <p className="text-gray-200 text-xs md:text-sm mt-3 max-w-md md:max-w-xl leading-relaxed opacity-80 px-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="mt-8">
          <span className="text-xl md:text-2xl text-white font-semibold tracking-wider block mb-4">
            Social Links
          </span>
          <div className="flex gap-4 justify-center">
            {/* Instagram */}
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
              aria-label="Instagram"
            >
               <AiFillInstagram className="text-2xl" />
            </a>
            {/* Facebook */}
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
              aria-label="Facebook"
            >
             <FaFacebookSquare className="text-xl"/>
            </a>
            {/* X (Twitter) */}
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="text-xl" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal Policies */}
        <div className="w-full border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] md:text-xs text-gray-300">
          <p className="order-2 md:order-1">© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}