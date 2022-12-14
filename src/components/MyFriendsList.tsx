import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import User from "../models/User";
import { fetchUser } from "../services/userServices";
import "./MyFriendsList.css";

interface Props {
  users: User[];
}
const MyFriendsList = ({ users }: Props) => {
  const { user, isFriend, removeAFriend } = useContext(AuthContext);

  return (
    <div className="MyFriendsList">
      <>
        <h2>My Friends</h2>
        {user?.following ? (
          <>
            {user &&
              users.map((item) => (
                <div key={item._id} className="friend-card">
                  <Link
                    to={`/${encodeURIComponent(
                      user.uid
                    )}/friends/${encodeURIComponent(item.uid)}`}
                  >
                    <li>
                      <h3>{item.displayName}</h3>
                      <img
                        src={item.photoURL}
                        alt="user photo"
                        loading="lazy"
                      />
                    </li>
                  </Link>
                  {user.uid === item.uid ? (
                    <></>
                  ) : (
                    isFriend(user!, item.uid) && (
                      <button onClick={() => removeAFriend(user, item.uid)}>
                        REMOVE
                      </button>
                    )
                  )}
                </div>
              ))}
          </>
        ) : (
          <p>No Friends Added Yet </p>
        )}
      </>
    </div>
  );
};

export default MyFriendsList;
