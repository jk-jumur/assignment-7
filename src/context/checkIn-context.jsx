"use client";

import { createContext, useState } from "react";
import { toast } from "react-toastify";

// 1. Create Context
export const CheckInContext = createContext();

// 2. Main Provider Component
const CheckInContextProvider = ({ children }) => {
  const [isCheckInOpen, setIsCheckInOpen] = useState([]);
  
  // State to store timeline data initialized with dummy data
  const [timelineData, setTimelineData] = useState([
    { id: 1, type: 'Meetup', name: 'Tom Baker', date: 'March 29, 2026' },
    { id: 2, type: 'Text', name: 'Sarah Chen', date: 'March 28, 2026' },
  ]);

  // Dynamic function to add a new check-in log to the timeline
  const handleAddCheckIn = (type) => {
    // Check if the current type has already been selected/added to the timeline
    const isAlreadySelected = timelineData.some((item) => item.type === type);

    if (isAlreadySelected) {
      // Dynamic warning toast if already selected
      toast.info(`Already selected ${type} for today!`);
      return;
    }

    // Get the most recent person's name from the timeline 
    
    const currentFriendName = timelineData.length > 0 ? timelineData[0].name : 'Emma Wilson';

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const newLog = {
      id: Date.now(),
      type: type, 
      name: currentFriendName,  
      date: formattedDate ,
    };

    // Push new data to the top of the list
    setTimelineData((prevData) => [newLog, ...prevData]);

    // Dynamic success toast notification with the person's name
    toast.success(`${type} with ${currentFriendName} successfully added!`);
  };

  const data = {
    isCheckInOpen,
    setIsCheckInOpen,
    timelineData,
    handleAddCheckIn
  };

  return (
    <CheckInContext.Provider value={data}>
      {children}
    </CheckInContext.Provider>
  );
};

export default CheckInContextProvider;