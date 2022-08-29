import axios from "axios";
import BucketListIdea from "../models/BucketListIdea";
import BucketListItem from "../models/BucketListItem";

const baseURL: string = "https://api.api-ninjas.com/v1/bucketlist";
const localURL: string = process.env.REACT_APP_API_URL || "";
export const fetchBucketListIdea = async (): Promise<BucketListIdea> => {
  return axios
    .get(baseURL, {
      headers: { "X-Api-Key": "HM9OmkV1/SV/PJWXneA8eg==58pPfU9PN8ty65RU" },
    })
    .then((response) => {
      return response.data;
    });
};

export const fetchBucketList = async (): Promise<BucketListItem[]> => {
  return (await axios.get(localURL)).data;
};
