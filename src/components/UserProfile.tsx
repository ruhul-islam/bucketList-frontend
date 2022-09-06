import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import User from "../models/User";
import { getFriendsByDisplayName } from "../services/userServices";
import FriendsList from "./FriendsList";
import SearchFriendForm from "./SearchFriendForm";
import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const search: string | undefined = useParams().search;
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (search) {
      getFriendsByDisplayName(search).then((response) => {
        console.log(response);
        setUsers(response);
      });
    }
  }, [search]);

  return (
    <div className="UserProfile">
      <h2>{user?.displayName}</h2>
      <p>{user?.email} </p>
      <img src={user?.photoURL!} alt="profile picture" width={200} />
      <SearchFriendForm />
      <FriendsList users={users} />
    </div>
  );
};

export default UserProfile;
