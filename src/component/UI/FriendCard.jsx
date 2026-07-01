import Image from "next/image";

const FriendCard = ({ friend }) => {
  const statusConfig = {
    "on-track": {
      text: "On-Track",
      className: "bg-[#244D3F] text-white",
    },
    "overdue": {
      text: "Overdue",
      className: "bg-[#EF4444] text-white",
    },
    "almost-due": {
      text: "Almost Due",
      className: "bg-[#F2A93B] text-white",
    },
  };

  const tagColor = {
    work: "bg-[#CBFADB] text-[#244D3F]",
    family: "bg-[#DDF7E7] text-[#244D3F]",
    hobby: "bg-[#DDF7E7] text-[#244D3F]",
    travel: "bg-[#DDF7E7] text-[#244D3F]",
  };

  return (
    <div className="w-full max-w-[270px] bg-white rounded-xl shadow-sm border border-gray-100 h-64 p-6 flex flex-col items-center">

      <Image
        src={friend.picture}
        alt={friend.name}
        width={64}
        height={64}
        className="rounded-full"
      />

      <h2 className="mt-3 font-semibold text-lg">
        {friend.name}
      </h2>

      <p className="text-xs text-gray-400 mt-1">
        {friend.days_since_contact}d ago
      </p>

     <div className="flex flex-wrap justify-center gap-2 mt-3">
  {friend.tags.map((tag) => (
    <span
      key={tag}
      className={`inline-flex items-center justify-center
      h-5 px-2.5 rounded-full
      text-[10px] font-medium leading-3 uppercase
      ${tagColor[tag]}`}
    >
      {tag}
    </span>
  ))}
</div>

      
     <div className="mt-auto pt-2">
     <span
    className={`inline-flex items-center justify-center
    h-6 px-3 rounded-full
    text-[10px] font-medium leading-3
    ${statusConfig[friend.status].className}`}
  >
    {statusConfig[friend.status].text}
  </span>
</div>

    </div>
  );
};

export default FriendCard;