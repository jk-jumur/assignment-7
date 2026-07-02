"use client";

import useFriends from "@/component/hooks/useApps";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const StatsPage = () => {
  const { friends = [], loading } = useFriends();

  // 1. Filter and count 
  const callCount = friends.filter((friend) => friend.interaction_type === "call").length;
  const videoCount = friends.filter((friend) => friend.interaction_type === "video").length;
  const textCount = friends.filter((friend) => friend.interaction_type === "text").length;

  // 2. Chart data with colors
  const chartData = [
    { name: "Call", value: callCount, color: "#244D3F" },    
    { name: "Video", value: videoCount, color: "#4ADE80" },  
    { name: "Text", value: textCount, color: "#8b5cf6" },    
  ];

  // 3. Custom legend data (Text -> Call -> Video)
  const legendData = [
    { name: "text", value: textCount, color: "#8b5cf6" },
    { name: "call", value: callCount, color: "#244D3F" },
    { name: "video", value: videoCount, color: "#4ADE80" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <span className="loading loading-bars loading-lg bg-purple-900"></span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[85vh] px-4 py-12">
      
      {/* ─── main layout container ─── */}
      <div className="w-full max-w-md md:max-w-xl lg:max-w-3xl flex flex-col gap-y-6">
        
     
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] text-left tracking-tight">
          Friendship Analytics
        </h2>

      
        <div className="w-full bg-[#FAFAFA] rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-sm">
          
        
          <p className="text-sm font-semibold text-[#244D3F] text-left mb-6 sm:mb-10">
            By Interaction Type
          </p>

          {/* ─── Recharts Donut Chart ─── */}
          <div className="w-full h-48 sm:h-56 md:h-64 flex justify-center items-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius="65%"  
                  outerRadius="85%"
                  paddingAngle={6}     
                  cornerRadius={10}    
                  startAngle={90}      
                  endAngle={-270}     
                  dataKey="value"
                  isAnimationActive={true}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

       
          <div className="flex items-center justify-center gap-x-5 sm:gap-x-8 mt-8 w-full overflow-x-auto py-1">
            {legendData.map((item, index) => (
              <div key={index} className="flex items-center gap-x-1.5 shrink-0">
                <span 
                  className="w-2 h-2 rounded-full inline-block shrink-0" 
                  style={{ backgroundColor: item.color }}
                ></span>
                
                <span className="text-xs font-medium text-[#475569] capitalize">
                  {item.name} 
                  <span className="font-bold text-gray-800 ml-1">({item.value})</span>
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsPage;