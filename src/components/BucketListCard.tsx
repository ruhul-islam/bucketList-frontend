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
    <li className="BucketListCard" id={completedClass}>
      <div className="card-content">
        <button className="X" title="Delete" onClick={onDelete}>
          X
        </button>
        <h2 className={completedClass}>I will {item.idea}</h2>
        <p>by {item.date}</p>
        <p>or else {item.consequence}</p>
        <div className="Button-Container">
          {item.completed ? (
            <button onClick={onIncomplete}>Mark Incomplete</button>
          ) : (
            <button onClick={onComplete}>Mark Complete</button>
          )}
          {item.isPrivate ? (
            <button onClick={onPublic}>Make Public</button>
          ) : (
            <button onClick={onPrivate}>Make Private</button>
          )}
        </div>
      </div>
    </li>
  );
};

export default BucketListCard;
