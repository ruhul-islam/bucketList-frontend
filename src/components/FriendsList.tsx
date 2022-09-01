import { useResolvedPath } from "react-router-dom";
import User from "../models/User";
import "./FriendsList.css";

//print an array of users that matches UIDs
//map method, find method

interface Props {
  users: User[];
}

const FriendsList = ({ users }: Props) => {
  return (
    <ul className="FriendsList">
      {users.map((user) => (
        <li>{user.displayName} </li>
      ))}
    </ul>
  );
};

export default FriendsList;
