import { useContext } from "react";
import { Link, useResolvedPath } from "react-router-dom";
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
    <ul className={users.length ? "FriendsList user-container" : ""}>
      {user &&
        users.map((item) => (
          <div key={item._id} className="user-card">
            <Link
              to={`/${encodeURIComponent(
                user.uid
              )}/friends/${encodeURIComponent(item.uid)}`}
            >
              <li>
                <h3>{item.displayName}</h3>
                <img src={item.photoURL} alt="user photo" loading="lazy" />
              </li>
            </Link>
            {user.uid === item.uid ? (
              <></>
            ) : isFriend(user!, item.uid) ? (
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
