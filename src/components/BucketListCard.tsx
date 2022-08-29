import BucketListItem from "../models/BucketListItem";
import "./BucketListCard.css";

interface Props {
  item: BucketListItem;
  onDelete: () => void;
}

const BucketListCard = ({ item, onDelete }: Props) => {
  return (
    <li className="BucketListCard">
      <h2>I will {item.idea}</h2>
      <p>by {item.date}</p>
      <p>or else {item.consequence}</p>
      <button onClick={onDelete}>X</button>
    </li>
  );
};

export default BucketListCard;
