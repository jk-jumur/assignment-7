import { useEffect, useState } from "react";

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const res = await fetch('/friends.json');
        const data = await res.json();
        
        setTimeout(() => {
          setFriends(data);
          setLoading(false);
        }, 3500);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { friends, loading }; 
};

export default useFriends;