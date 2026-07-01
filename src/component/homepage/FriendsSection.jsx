import FriendCard from "../UI/FriendCard";

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  return res.json();
};

const FriendsSection = async () => {
  const friends = await friendsPromise();

  return (
   <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-[#1F2937] mb-6">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-x-3 gap-y-5  justify-items-center">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;