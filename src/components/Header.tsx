import "./Header.css";
import image from "../to-do-list(1).png";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { addNewUser, fetchUser } from "../services/userServices";
import { User } from "firebase/auth";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const uid: string | undefined = useParams().uid;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      fetchUser(user.uid).then((response) => {
        if (response === null) {
          addNewUser({
            uid: user.uid,
            displayName: user.displayName!,
            photoURL: user.photoURL!,
          });
        }
      });
    }
  }, [user]);
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
