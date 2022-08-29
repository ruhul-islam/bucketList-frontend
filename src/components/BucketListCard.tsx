import BucketListItem from "../models/BucketListItem";
import "./BucketListCard.css";

interface Props {
  item: BucketListItem;
}

const BucketListCard = ({ item }: Props) => {
  return (
    <li className="BucketListCard">
      <h2>{item.idea}</h2>
    </li>
  );
};

export default BucketListCard;
