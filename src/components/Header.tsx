import "./Header.css";
import image from "../to-do-list(1).png";
import imageLogo from "../bucketListLogo-unscreen(1).gif";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      {user && (
        <div className="userProfileButtonContainer">
          <Link to={`/${user?.uid}`}>
            <button className="user">User Profile</button>
          </Link>
        </div>
      )}

      <Link to={"/"}>
        <div className="logo-container">
          <h1 className="Title">
            <img
              className="logo"
              src={imageLogo}
              alt="list logo"
              loading="lazy"
            />
          </h1>
          <h1 className="logo-name">Vive</h1>
        </div>
      </Link>

      <div className="loginContainer">
        {!user ? (
          <button onClick={signInWithGoogle}>Sign In</button>
        ) : (
          <div className="innerLoginContainer">
            <button className="sign-out" onClick={signOut}>
              Sign Out
            </button>

            <img
              src={user.photoURL!}
              alt="user image"
              className="profile-img"
              loading="lazy"
            />
            <p className="displayName">{user.displayName} </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
