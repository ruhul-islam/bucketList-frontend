import BucketListItem from "./BucketListItem";

export default interface User {
  email: string;
  _id?: string;
  uid: string;
  displayName: string;
  photoURL: string;
  following: string[];
  bucketList: BucketListItem[];
}
