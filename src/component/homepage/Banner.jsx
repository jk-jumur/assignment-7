import { Plus } from "lucide-react";

const Banner = () => {
  return (
    <div className="container mx-auto px-6 py-16 mb-6">

      {/* Heading And Subtitle */}

      <div className="text-center space-y-5 max-w-3xl mx-auto">
        <h2 className="text-[#1F2937] text-4xl font-bold">
          Friends to keep close in your life
        </h2>

        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture
          <br />
          the relationships that matter most.
        </p>

        {/* Add Friend btn */}

        <button className="btn bg-green-900 text-white mt-4">
          <Plus size={20} />
          Add a Friend
        </button>
      </div>

      {/* Banner Stats Card */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div className="bg-white shadow rounded-xl p-8 text-center">
          <h2 className="text-green-900 text-5xl font-bold">10</h2>
          <p className="text-[#64748B] mt-3">Total Friends</p>
        </div>

        <div className="bg-white shadow rounded-xl p-8 text-center">
          <h2 className="text-green-900 text-5xl font-bold">3</h2>
          <p className="text-[#64748B] mt-3">On Track</p>
        </div>

        <div className="bg-white shadow rounded-xl p-8 text-center">
          <h2 className="text-green-900 text-5xl font-bold">6</h2>
          <p className="text-[#64748B] mt-3">Need Attention</p>
        </div>

        <div className="bg-white shadow rounded-xl p-8 text-center">
          <h2 className="text-green-900 text-5xl font-bold">12</h2>
          <p className="text-[#64748B] mt-3">
            Interactions This Month
          </p>
        </div>
      </div>
              <hr className="mt-10 text-gray-200"/>
    </div>

    
  );
};

export default Banner;