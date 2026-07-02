"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
     
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="text-center z-10 max-w-md w-full">
      
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#244D3F] to-[#4ADE80] animate-bounce tracking-widest drop-shadow-md">
          404
        </h1>

     
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mt-6 tracking-tight">
          Oops! Page Not Found
        </h2>

       
        <p className="text-sm md:text-base text-gray-500 font-medium mt-3 px-4 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

      
        <div className="mt-8">
          <Link href="/">
            <button className="btn bg-linear-to-r from-[#244D3F] to-[#36735f] hover:from-[#1b3a2f] hover:to-[#244D3F] text-white border-none px-8 py-3 rounded-xl font-bold shadow-lg shadow-green-100 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider text-xs">
              Back To Home
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;