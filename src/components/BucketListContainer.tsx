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
      {items.map((item, index) => (
        <BucketListCard
          item={item}
          key={index}
          onDelete={() => onDelete(index.toString())}
        />
      ))}
    </ul>
  );
};

export default BucketListContainer;
