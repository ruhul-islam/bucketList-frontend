import BucketListItem from "../models/BucketListItem";
import BucketListCard from "./BucketListCard";
import "./BucketListContainer.css";

interface Props {
  items: BucketListItem[];
}

const BucketListContainer = ({ items }: Props) => {
  return (
    <ul className="BucketListContainer">
      {items.map((item) => (
        <BucketListCard item={item} key={item._id} />
      ))}
    </ul>
  );
};

export default BucketListContainer;
