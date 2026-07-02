"use client";

import CheckInContextProvider from "@/context/checkIn-context";
import { ToastContainer } from "react-toastify";




const Providers = ({ children }) => {
  return (
    <CheckInContextProvider>
      {children}
 
      <ToastContainer/>
      
    </CheckInContextProvider>
  );
};

export default Providers;