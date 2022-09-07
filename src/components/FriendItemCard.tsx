import BucketListItem from "../models/BucketListItem";
import "./FriendItemCard.css";

interface Props {
  item: BucketListItem;
}
const FriendItemCard = ({ item }: Props) => {
  return (
    <li className="FriendItemCard">
      <p>{item.idea}</p>
      <p>{item.date}</p>
      <p>{item.consequence}</p>
    </li>
  );
};

export default FriendItemCard;
