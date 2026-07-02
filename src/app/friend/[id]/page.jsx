import CheckInToggolButton from "@/component/qucikCheckIn/CheckInToggolButton";
import Image from "next/image";

import { PiArchiveBold } from "react-icons/pi";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  return res.json();
};

const FriendsDetailPage = async ({ params }) => {
  const { id } = await params;
  const friends = await friendsPromise();
  
  const friend = friends.find((f) => f.id === Number(id));

  if (!friend) {
    return <div className="text-center py-10 font-semibold text-gray-500">Friend not found!</div>;
  }

  const statusConfig = {
    "on-track": { text: "On-Track", className: "bg-[#244D3F] text-white" },
    "overdue": { text: "Overdue", className: "bg-[#EF4444] text-white" },
    "almost-due": { text: "Almost Due", className: "bg-[#F2A93B] text-white" },
  };

  const tagColor = {
    work: "bg-[#CBFADB] text-[#244D3F]",
    family: "bg-[#DDF7E7] text-[#244D3F]",
    hobby: "bg-[#DDF7E7] text-[#244D3F]",
    travel: "bg-[#DDF7E7] text-[#244D3F]",
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-10 font-sans">
      <div className="container mx-auto">
        
        {/* Main Grid Layout: 1 column on mobile, 3 columns on tablet and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* --- Left Column: Profile Card & Action Buttons --- */}
          {/* Takes full width on mobile, 1 column on tablet/desktop */}
          <div className="flex flex-col gap-4 w-full col-span-1">
            
            {/* Profile Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-md w-full">
              
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden relative mb-4 ring-4 ring-gray-50">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Name */}
              <h2 className="font-bold text-2xl text-gray-800 tracking-tight">{friend.name}</h2>
              
              {/* Status & Tags Container */}
              <div className="flex flex-col items-center gap-2.5 mt-3 w-full">
                {/* Status Badge */}
                <span className={`px-4 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${statusConfig[friend.status]?.className}`}>
                  {statusConfig[friend.status]?.text}
                </span>
    
                {/* Tags Badge */}
                <div className="flex flex-row flex-wrap justify-center gap-1.5 w-full mt-1">
                  {friend.tags?.map((tag) => (
                    <span 
                      key={tag} 
                      className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${tagColor[tag] || "bg-gray-100 text-gray-600"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 text-center relative px-4 w-full">
                {/* Giant quotation mark styling */}
                <span className="absolute -top-3 left-0 text-6xl text-gray-200/80 font-serif select-none leading-none pointer-events-none">
                  “
                </span>
                <p className="text-[#64748B] italic text-base md:text-lg font-medium leading-relaxed relative z-10 px-4">
                  {friend.bio || "Former colleague, great mentor"}
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-4 break-all">
                  Preferred: <span className="lowercase font-medium">{friend.email}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-2">
              <button className="w-full h-12 bg-white hover:bg-gray-50 active:scale-[0.99] border border-gray-100 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm">
                <RiNotificationSnoozeLine className="text-lg text-gray-500" /> Snooze 2 Weeks
              </button>
              <button className="w-full h-12 bg-white hover:bg-gray-50 active:scale-[0.99] border border-gray-100 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm">
                <PiArchiveBold className="text-lg text-gray-500" /> Archive
              </button>
              <button className="w-full h-12 bg-white hover:bg-red-50/30 active:scale-[0.99] border border-gray-100 hover:border-red-100 rounded-xl text-[15px] font-semibold text-red-500 flex items-center justify-center gap-2 transition-all duration-200 shadow-sm">
                <RiDeleteBinLine className="text-lg" /> Delete
              </button>
            </div>
          </div>

          {/* --- Right Column: Content Section --- */}
          {/* Takes 1 column on mobile, spans 2 columns on tablet/desktop */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6 w-full">
            
            {/* 3 Main Stats Boxes */}
            {/* 1 column on mobile, automatically splits into 3 columns from small screens (sm) up */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col items-center justify-center min-h-[120px] shadow-sm">
                <span className="block text-3xl font-bold text-[#244D3F] tracking-tight">{friend.days_since_contact || 62}</span>
                <span className="text-xs md:text-[14px] font-bold text-[#64748B]  tracking-wider mt-2 text-center">Days Since Contact</span>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col items-center justify-center min-h-[120px] shadow-sm">
                <span className="block text-3xl font-bold text-[#244D3F] tracking-tight">30</span>
                <span className="text-xs md:text-[14px] font-bold text-[#64748B]  tracking-wider mt-2 text-center">Goal (Days)</span>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col items-center justify-center min-h-[120px] shadow-sm">
                <span className="block text-xl font-bold text-[#244D3F] tracking-tight">Feb 27, 2026</span>
                <span className="text-xs md:text-[14px] font-bold text-[#64748B]  tracking-wider mt-3 text-center">Next Due</span>
              </div>
            </div>

            {/* Relationship Goal Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-row justify-between items-center shadow-sm w-full">
              <div>
                <h4 className="text-lg md:text-[20px] font-bold text-[#244D3F] tracking-wide">Relationship Goal</h4>
                <p className="text-xs md:text-sm text-[#64748B] mt-1.5 font-medium">
                  Connect every <span className="font-bold text-gray-900">30 days</span>
                </p>
              </div>
              <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-500 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-sm">
                Edit
              </button>
            </div>

            {/* Quick Check-In Section */}
            <div className="w-full">
              <CheckInToggolButton />
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailPage;