import User from "../models/User";
import { createContext } from "react";

export interface AuthContextModel {
  user: User | null; // null when not logged in
  addAFriend: (user: User, friendUid: string) => void;
  removeAFriend: (user: User, friendUid: string) => void;
  isFriend: (user: User, friendUid: string) => boolean;
}
const defaultValue: AuthContextModel = {
  user: null,
  addAFriend: () => {},
  removeAFriend: () => {},
  isFriend: () => false,
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
