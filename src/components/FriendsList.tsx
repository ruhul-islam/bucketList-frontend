import { useContext } from "react";
import { useResolvedPath } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import User from "../models/User";
import { addFriend, removeFriend } from "../services/userServices";
import "./FriendsList.css";

//print an array of users that matches UIDs
//map method, find method

interface Props {
  users: User[];
}

const FriendsList = ({ users }: Props) => {
  const { user, removeAFriend, addAFriend, isFriend } = useContext(AuthContext);
  console.log(user);

  return (
    <ul className="FriendsList">
      {user &&
        users.map((item) => (
          <div key={item._id}>
            <li>{item.displayName} </li>
            {isFriend(user!, item.uid) ? (
              <button onClick={() => removeAFriend(user, item.uid)}>
                REMOVE
              </button>
            ) : (
              <button onClick={() => addAFriend(user, item.uid)}>ADD</button>
            )}
          </div>
        ))}
    </ul>
  );
};

export default FriendsList;
