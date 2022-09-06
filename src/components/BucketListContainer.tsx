import BucketListItem from "../models/BucketListItem";
import BucketListCard from "./BucketListCard";
import "./BucketListContainer.css";

interface Props {
  items: BucketListItem[];
  onDelete: (idea: string) => void;
  onComplete: (idea: string) => void;
  onIncomplete: (idea: string) => void;
  onPrivate: (idea: string) => void;
  onPublic: (idea: string) => void;
}

const BucketListContainer = ({
  items,
  onDelete,
  onComplete,
  onIncomplete,
  onPrivate,
  onPublic,
}: Props) => {
  return (
    <ul className="BucketListContainer">
      {items.map((item, index) => (
        <BucketListCard
          item={item}
          key={index}
          onDelete={() => onDelete(item.idea)}
          onComplete={() => onComplete(item.idea)}
          onIncomplete={() => onIncomplete(item.idea)}
          onPrivate={() => onPrivate(item.idea)}
          onPublic={() => onPublic(item.idea)}
        />
      ))}
    </ul>
  );
};

export default BucketListContainer;
