import Banner from "@/component/homepage/Banner";
import FriendsSection from "@/component/homepage/FriendsSection";
import { Suspense } from "react";


export default function Home() {
  return (
     
    <div className="p-8">

           <Banner/>
            <Suspense
           fallback={
          <div className="flex justify-center items-center ">
            <span className="loading loading-spinner text-success"></span>
           <span className="loading loading-spinner text-warning"></span>
           <span className="loading loading-spinner text-error"></span>
          </div>
        }
      >
        <FriendsSection />
      </Suspense>  
    </div>
  );
}
