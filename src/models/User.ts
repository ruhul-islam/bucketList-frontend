import BucketListItem from "./BucketListItem";

export default interface User {
  _id: string;
  uid: string;
  displayName: string;
  photoURL: string;
  following?: string[];
  bucketList?: BucketListItem[];
}
