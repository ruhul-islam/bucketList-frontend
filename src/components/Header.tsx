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
      <div>
        <Link to={`/${user?.uid}`}>
          <button className="user">User Profile</button>
        </Link>
      </div>
      <h1 className="Title">
        <img className="logo" src={image} alt="list logo" />
      </h1>

      <div className="loginContainer">
        {!user ? (
          <button onClick={signInWithGoogle}>Sign In</button>
        ) : (
          <div>
            <button className="sign-out" onClick={signOut}>
              Sign Out
            </button>

            <img
              src={user.photoURL!}
              alt="user image"
              className="profile-img"
            />
            <p className="displayName">{user.displayName} </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
