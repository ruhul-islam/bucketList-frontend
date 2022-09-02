import { useContext } from "react";
import { useResolvedPath } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import User from "../models/User";
import { addFriend } from "../services/userServices";
import "./FriendsList.css";

//print an array of users that matches UIDs
//map method, find method

interface Props {
  users: User[];
}

const FriendsList = ({ users }: Props) => {
  const { user } = useContext(AuthContext);
  const test = (myUid: string, friendUid: string) => {
    addFriend(myUid, friendUid).then((response) => {
      console.log(response, myUid);
    });
  };
  return (
    <ul className="FriendsList">
      {users.map((item) => (
        <div>
          <li>{item.displayName} </li>
          <button onClick={() => test(user?.uid!, item.uid)}>ADD</button>
        </div>
      ))}
    </ul>
  );
};

export default FriendsList;
