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
      <div className="symbol-buttons">
        <button onClick={onDelete}>X</button>
        {item.completed ? (
          <button onClick={onIncomplete}>Undo</button>
        ) : (
          <button onClick={onComplete}>✔</button>
        )}
      </div>
      <div className="card-content">
        <h2 className={completedClass}>I will {item.idea}</h2>
        <p>by {item.date}</p>
        <p>or else {item.consequence}</p>

        <div className="public-private"></div>
        {item.isPrivate ? (
          <button onClick={onPublic}>Make Public</button>
        ) : (
          <button onClick={onPrivate}>Make Private</button>
        )}
      </div>
    </li>
  );
};

export default BucketListCard;
