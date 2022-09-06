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

export const fetchFriends = async (uid: string): Promise<User[]> => {
  return (await axios.get(`${baseURL}/friends/${encodeURIComponent(uid)}`))
    .data;
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
): Promise<string> => {
  return (
    await axios.put(
      `${baseURL}/${encodeURIComponent(uid)}/bucket-list/remove`,
      { idea: idea }
    )
  ).data;
};

export const completeBucketListItemForTheUser = async (
  uid: string,
  idea: string
): Promise<string> => {
  return (
    await axios.put(
      `${baseURL}/${encodeURIComponent(uid)}/bucket-list/complete`,
      { idea: idea }
    )
  ).data;
};

export const incompleteBucketListItemForTheUser = async (
  uid: string,
  idea: string
): Promise<string> => {
  return (
    await axios.put(
      `${baseURL}/${encodeURIComponent(uid)}/bucket-list/incomplete`,
      { idea: idea }
    )
  ).data;
};

export const privateBucketListItemForTheUser = async (
  uid: string,
  idea: string
): Promise<string> => {
  return (
    await axios.put(
      `${baseURL}/${encodeURIComponent(uid)}/bucket-list/private`,
      { idea: idea }
    )
  ).data;
};

export const publicBucketListItemForTheUser = async (
  uid: string,
  idea: string
): Promise<string> => {
  return (
    await axios.put(
      `${baseURL}/${encodeURIComponent(uid)}/bucket-list/public`,
      { idea: idea }
    )
  ).data;
};

export const addFriend = async (
  myUid: string,
  friendUid: string
): Promise<User> => {
  return (
    await axios.put(`${baseURL}/${encodeURIComponent(myUid)}/following`, {
      uid: friendUid,
    })
  ).data;
};

export const removeFriend = async (
  myUid: string,
  friendUid: string
): Promise<User> => {
  return (
    await axios.put(
      `${baseURL}/${encodeURIComponent(myUid)}/following/${encodeURIComponent(
        friendUid
      )}`,
      {
        uid: friendUid,
      }
    )
  ).data;
};

export const getFriendsByDisplayName = async (
  search: string
): Promise<User[]> => {
  return (await axios.get(`${baseURL}/search/${encodeURIComponent(search)}`))
    .data;
};

export const getAllUsers = async (): Promise<User[]> => {
  return (await axios.get(`${baseURL}/allUsers`)).data;
};
