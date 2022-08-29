import "./Header.css";
import image from "../to-do-list(1).png";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="Header">
      <h1 className="Title">
        <img src={image} alt="list logo" />
        BucketList
      </h1>

      {!user ? (
        <button className="headerButton" onClick={signInWithGoogle}>
          Sign In
        </button>
      ) : (
        <div>
          <button onClick={signOut}>Sign Out</button>
          <p>{user.displayName}</p>
          <img src={user.photoURL!} alt="user image" className="profile-img" />
        </div>
      )}
    </header>
  );
};

export default Header;
