import userEvent from "@testing-library/user-event";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import BucketListItem from "../models/BucketListItem";
import User from "../models/User";
import { fetchUser, getFriendProfileDetails } from "../services/userServices";
import "./FriendProfile.css";

//user model

const FriendProfile = () => {
  const uid: string | undefined = useParams().uid;
  const friendUid: string | undefined = useParams().friendUid;
  const [friend, setFriend] = useState<User>();
  const [friendsItems, setFriendsItems] = useState<BucketListItem[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchUser(friendUid!).then((response) => {
      console.log("friend's info", response);
      setFriend(response);
      setFriendsItems(response.bucketList);
    });
  }, [user]);

  return (
    <div className="FriendProfile">
      <h2>Name: {friend?.displayName}</h2>
      <img src={friend?.photoURL} alt="photo" />
      <ul>
        {friendsItems.map((item) => {
          if (item.isPrivate === false) {
            return (
              <li>
                <p>{item.idea}</p>
                <p>{item.date}</p>
                <p>{item.consequence}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default FriendProfile;
