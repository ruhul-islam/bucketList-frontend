import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import User from "../models/User";
import {
  fetchFriends,
  getAllUsers,
  getFriendsByDisplayName,
} from "../services/userServices";
import FriendsList from "./FriendsList";
import MyFriendsList from "./MyFriendsList";
import SearchFriendForm from "./SearchFriendForm";
import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const search: string | undefined = useParams().search;
  const uid: string | undefined = useParams().uid;
  const [users, setUsers] = useState<User[]>([]);
  const [userFriends, setUserFriends] = useState<User[]>([]);

  useEffect(() => {
    if (search) {
      getFriendsByDisplayName(search).then((response) => {
        console.log(response);
        setUsers(response);
      });
    } else if (uid) {
      setUsers([]);
    } else {
      getAllUsers().then((response) => {
        console.log(response);
        setUsers(response);
      });
    }
  }, [search, uid]);

  useEffect(() => {
    fetchFriends(user?.uid!).then((response) => {
      console.log("try", response);
      setUserFriends(response);
    });
  }, [user]);
  console.log(search);
  return (
    <div className="UserProfile">
      <div className="NestedUserProfileContainer">
        <img src={user?.photoURL!} alt="profile picture" width={200} />
        <h2>{user?.displayName}</h2>
      </div>
      <SearchFriendForm />
      <FriendsList users={users} />
      <MyFriendsList users={userFriends} />
    </div>
  );
};

export default UserProfile;
