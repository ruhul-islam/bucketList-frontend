import BucketListIdea from "./BucketListIdea";
import Consequences from "./Consequences";

export default interface BucketListItem {
  _id?: string;
  idea: string | BucketListIdea;
  date: string;
  category: string;
  consequence: string | Consequences;
}
