import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import BucketListIdea from "../models/BucketListIdea";
import BucketListItem from "../models/BucketListItem";

const { user } = useContext(AuthContext);

const ninjaURL: string = "https://api.api-ninjas.com/v1/bucketlist";
const baseURL: string = process.env.REACT_APP_API_URL || "";
export const fetchBucketListIdea = async (): Promise<BucketListIdea> => {
  return axios
    .get(ninjaURL, {
      headers: { "X-Api-Key": "HM9OmkV1/SV/PJWXneA8eg==58pPfU9PN8ty65RU" },
    })
    .then((response) => {
      return response.data;
    });
};

export const fetchBucketList = async (): Promise<BucketListItem[]> => {
  return (await axios.get(baseURL)).data;
};

export const addBucketListItem = async (
  item: BucketListItem
): Promise<BucketListItem> => {
  return (await axios.post(baseURL, item)).data;
};

export const deleteById = async (id: string): Promise<void> => {
  return (await axios.delete(`${baseURL}/user/${encodeURIComponent(id)}`)).data;
};

export const addUser = async (): Promise<void> => {
  return (await axios.post(`${baseURL}/user`, user)).data;
};
