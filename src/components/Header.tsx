import "./Header.css";
import image from "../to-do-list(1).png";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <h1 className="Title">
        <img src={image} alt="list logo" />
        BucketList
      </h1>
      <div className="loginContainer">
        {!user ? (
          <button className="headerButton" onClick={signInWithGoogle}>
            Sign In
          </button>
        ) : (
          <div>
            <button onClick={signOut}>Sign Out</button>
            <p className="displayName">{user.displayName}</p>
            <img
              src={user.photoURL!}
              alt="user image"
              className="profile-img"
            />
          </div>
        )}
      </div>
      <div>
        <Link to={`/${user?.uid}`}>
          <button>User Profile</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
