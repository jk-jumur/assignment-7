import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white py-12 px-6 md:px-12">
      <div className="container mx-auto flex flex-col items-center text-center  ">
        
        {/* Logo */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          KeenKeeper
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-200  md:text-sm   mt-3 leading-relaxed opacity-80">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Link  */}
        <div className="mt-6">
          <span className="text-2xl  text-white font-semibold tracking-wider  block mb-3 ">
            Social Links
          </span>
          <div className="flex gap-4 justify-center">
            {/* Instagram */}
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-all duration-300 shadow-sm"
              aria-label="Instagram"
            >
              <AiFillInstagram className="text-xl"/>
            </a>
            {/* Facebook */}
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-all duration-300 shadow-sm"
              aria-label="Facebook"
            >
            <FaFacebookSquare className="text-xl"/>
            </a>
            {/* X (Twitter) */}
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:opacity-90 transition-all duration-300 shadow-sm"
              aria-label="X (Twitter)"
            >
            <FaXTwitter className="text-xl" />
            </a>
          </div>
        </div>

        {/* Copy Rights And Policy Links */}
        <div className="w-full border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] md:text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className=" hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}