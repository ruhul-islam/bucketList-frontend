import BucketListItem from "../models/BucketListItem";
import BucketListCard from "./BucketListCard";
import "./BucketListContainer.css";
import "animate.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
    <div className="BucketListContainer">
      <TransitionGroup component="ul">
        {items.map((item, index) => (
          <CSSTransition
            key={index}
            classNames={{
              enterActive: "animate__animated animate__fadeIn",
              exitActive: "animate__animated animate__fadeOut",
            }}
            timeout={1000}
          >
            <BucketListCard
              item={item}
              key={index}
              onDelete={() => onDelete(item.idea)}
              onComplete={() => onComplete(item.idea)}
              onIncomplete={() => onIncomplete(item.idea)}
              onPrivate={() => onPrivate(item.idea)}
              onPublic={() => onPublic(item.idea)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default BucketListContainer;
