import { createContext } from "react";
import User from "../models/User";
// import Gif from "../models/Gif";

interface FriendsContextModel {
  friends: User[];
  addFavorite: (gif: Gif) => void;
  removeFavorite: (id: string, uid: string) => void;
  isFav: (id: string) => boolean;
}

const defaultValues: FriendsContextModel = {
  friends: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFav: () => false,
};

const FriendsContext = createContext(defaultValues);

export default FriendsContext;
