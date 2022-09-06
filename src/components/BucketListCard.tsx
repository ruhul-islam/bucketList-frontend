import BucketListItem from "../models/BucketListItem";
import "./BucketListCard.css";

interface Props {
  item: BucketListItem;
  onDelete: () => void;
  onComplete: () => void;
  onIncomplete: () => void;
  onPrivate: () => void;
  onPublic: () => void;
}

const BucketListCard = ({
  item,
  onDelete,
  onComplete,
  onIncomplete,
  onPrivate,
  onPublic,
}: Props) => {
  let completedClass = "";
  if (item.completed) {
    completedClass = "completed";
  }
  return (
    <li className="BucketListCard">
      <h2 className={completedClass}>I will {item.idea}</h2>
      <p>by {item.date}</p>
      <p>or else {item.consequence}</p>
      <button onClick={onDelete}>X</button>
      {item.completed ? (
        <button onClick={onIncomplete}>Incomplete</button>
      ) : (
        <button onClick={onComplete}>Complete</button>
      )}
      {item.isPrivate ? (
        <button onClick={onPublic}>Public</button>
      ) : (
        <button onClick={onPrivate}>Private</button>
      )}
    </li>
  );
};

export default BucketListCard;
