import BucketListItem from "../models/BucketListItem";
import "./BucketListCard.css";

interface Props {
  item: BucketListItem;
  onDelete: () => void;
}

const BucketListCard = ({ item, onDelete }: Props) => {
  return (
    <li className="BucketListCard">
      <div className="card-content">
        <button className="x" onClick={onDelete}>
          X
        </button>
        <h2>I will {item.idea}</h2>
        <p>by {item.date}</p>
        <p>or else {item.consequence}</p>
      </div>
    </li>
  );
};

export default BucketListCard;
