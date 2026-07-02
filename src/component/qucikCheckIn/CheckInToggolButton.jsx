"use client";

import { useContext } from 'react';
import { CheckInContext } from "@/context/checkIn-context";
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraBold } from 'react-icons/pi';
import { TbPhoneCall } from 'react-icons/tb';

const CheckInToggleButton = () => {
  const { handleAddCheckIn } = useContext(CheckInContext);

  const buttons = [
    { id: 'Call', label: 'Call', icon: <TbPhoneCall /> },
    { id: 'Text', label: 'Text', icon: <MdOutlineTextsms /> },
    { id: 'Video', label: 'Video', icon: <PiVideoCameraBold /> },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md">
      <h4 className="text-[20px] font-bold text-[#244D3F] tracking-wider mb-4">Quick Check-In</h4>
      
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {buttons.map((btn) => {
          return (
            <button
              key={btn.id}
              onClick={() => handleAddCheckIn(btn.id)}
              className="flex flex-col items-center justify-center py-5 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl shadow-md group transition-all duration-300 hover:bg-[#244D3F] hover:text-white hover:border-[#244D3F]"
            >
              {/* Icon scales up slightly and text turns white on hover */}
              <span className="text-xl mb-1.5 transition-transform duration-300 group-hover:scale-110">
                {btn.icon}
              </span>
              
              <span className="text-xs font-semibold">
                {btn.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CheckInToggleButton;