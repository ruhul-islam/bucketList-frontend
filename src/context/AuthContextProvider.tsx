import { ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import {
  addFriend,
  addNewUser,
  fetchUser,
  removeFriend,
} from "../services/userServices";
import User from "../models/User";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const getAndSetUser = (uid: string): void => {
    fetchUser(uid).then((response) => setUser(response));
  };

  const addAFriend = (user: User, friendUid: string) => {
    addFriend(user.uid, friendUid).then(() => {
      getAndSetUser(user.uid);
    });
  };
  const removeAFriend = (user: User, friendUid: string) => {
    removeFriend(user.uid, friendUid).then(() => {
      getAndSetUser(user.uid);
    });
  };
  const isFriend = (user: User, friendUid: string): boolean => {
    if (user.following.length > 0) {
      return user!.following.some((item) => item === friendUid);
    } else {
      return false;
    }
  };
  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      // setUser(newUser);
      if (newUser) {
        fetchUser(newUser.uid).then((response) => {
          if (response === null) {
            const newPerson = {
              email: newUser.email!,
              uid: newUser.uid,
              displayName: newUser.displayName!,
              photoURL: newUser.photoURL!,
              following: [],
              bucketList: [],
            };
            addNewUser(newPerson);
            setUser(newPerson);
          } else {
            setUser(response);
          }
        });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, addAFriend, removeAFriend, isFriend }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
