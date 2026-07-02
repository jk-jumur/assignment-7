"use client";

import { useContext, useState } from "react";
import { CheckInContext } from "@/context/checkIn-context";
import Image from "next/image";

// Local image imports
import callIcon from "@/assets/images/call.png";
import textIcon from "@/assets/images/text.png";
import videoIcon from "@/assets/images/video.png";
import meetupIcon from "@/assets/images/text.png"; 





const TimelinePage = () => {
  const { timelineData } = useContext(CheckInContext);
  const [filterType, setFilterType] = useState("All");

  //  object to dynamically set images and titles
  const activityDetails = {
    Call: {
      imgSrc: callIcon,
      title: "Call",
    },
    Text: {
      imgSrc: textIcon,
      title: "Text",
    },
    Video: {
      imgSrc: videoIcon,
      title: "Video",
    },
    "Video Call": {
      imgSrc: videoIcon,
      title: "Video",
    },
    Meetup: {
      imgSrc: meetupIcon, 
      title: "Meetup",
    }
  };

  // Dropdown Filter Logic
  const filteredTimeline = (timelineData || []).filter((item) => {
    if (filterType === "All") return true;
    if (filterType === "Video") {
      return item.type === "Video" || item.type === "Video Call";
    }
    return item.type === filterType;
  });

  return (
    <div className="w-full container mx-auto px-4 sm:px-6 py-8">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-[28px] font-bold text-gray-900 mb-4">Timeline</h2>
        
        {/* Filter Dropdown */}
        <div className="w-full max-w-[200px]">
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-500 shadow-sm focus:outline-none focus:border-gray-300 cursor-pointer font-medium"
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
            <option value="Meetup">Meetup</option>
          </select>
        </div>
      </div>

      {/* Timeline Card List */}
      <div className="space-y-3">
        {filteredTimeline.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
            <p className="text-gray-400 font-medium">No check-ins found.</p>
          </div>
        ) : (
          filteredTimeline.map((item) => {
            const details = activityDetails[item.type] || activityDetails.Meetup;

            return (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {/* Image Box - Removed background, border, and shadow as requested */}
                <div className="w-12 h-12 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={details.imgSrc}
                    alt={details.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>

                {/* Text Section: Color Modification */}
                <div className="flex-1">
                  <p className="text-sm font-semibold">
                    {/* Title text is green */}
                    <span className="text-[#244D3F] font-bold">{details.title}</span>{" "}

                    {/* The friend name part is gray */}
                    <span className="text-gray-500 font-normal">with {item.name}</span>
                  </p>

                  {/* Date text is gray */}
                  <p className="text-xs text-gray-400 mt-1 font-medium">
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TimelinePage;