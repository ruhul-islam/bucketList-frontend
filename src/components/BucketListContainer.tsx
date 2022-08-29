import BucketListItem from "../models/BucketListItem";
import BucketListCard from "./BucketListCard";
import "./BucketListContainer.css";

interface Props {
  items: BucketListItem[];
  onDelete: (id: string) => void;
}

const BucketListContainer = ({ items, onDelete }: Props) => {
  return (
    <ul className="BucketListContainer">
      {items.map((item) => (
        <BucketListCard
          item={item}
          key={item._id}
          onDelete={() => onDelete(item._id!)}
        />
      ))}
    </ul>
  );
};

export default BucketListContainer;
