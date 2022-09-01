import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import BucketListIdea from "../models/BucketListIdea";
import BucketListItem from "../models/BucketListItem";
import User from "../models/User";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const fetchUser = async (uid: string): Promise<User> => {
  return (await axios.get(`${baseURL}/${encodeURIComponent(uid)}`)).data;
};

export const addNewUser = async (user: User): Promise<User> => {
  return (await axios.post(baseURL, user)).data;
};

export const addBucketListItemForTheUser = async (
  uid: string,
  item: BucketListItem
): Promise<BucketListItem> => {
  return (
    await axios.put(
      `${baseURL}/${encodeURIComponent(uid)}/bucket-list/add`,
      item
    )
  ).data;
};

export const removeBucketListItemForTheUser = async (
  uid: string,
  idea: string
): Promise<void> => {
  return (
    await axios.put(
      `${baseURL}/${encodeURIComponent(uid)}/bucket-list/remove`,
      idea
    )
  ).data;
};

export const addFriend = async (uid: string): Promise<User> => {
  return (
    await axios.put(`${baseURL}/${encodeURIComponent(uid)}/following`, uid)
  ).data;
};
