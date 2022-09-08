import BucketListItem from "../models/BucketListItem";
import "./BucketListCard.css";
import React from "react";
import CountdownTimer from "./CountdownTimer";

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

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;

  let TODAY_DATE = new Date();
  let IDEA_DEADLINE_DATE = new Date(item.date);
  IDEA_DEADLINE_DATE.setHours(43, 0, 0, 0);

  console.log(IDEA_DEADLINE_DATE, IDEA_DEADLINE_DATE.getTime());
  let days = (TODAY_DATE: any, IDEA_DEADLINE_DATE: any): number => {
    let difference = IDEA_DEADLINE_DATE.getTime() - TODAY_DATE.getTime();
    // let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return difference;
  };
  let IDEA_DEADLINE_DATE_IN_MS = days(TODAY_DATE, IDEA_DEADLINE_DATE);
  const NOW_IN_MS = new Date().getTime();

  console.log(NOW_IN_MS, "dsfhevieqruhviuvhqeriuv");

  const dateTimeAfterThreeDays =
    NOW_IN_MS + IDEA_DEADLINE_DATE_IN_MS + 18000000;

  return (
    <li className="BucketListCard" id={completedClass}>
      <div className="symbol-buttons">
        <button onClick={onDelete} id={completedClass}>
          X
        </button>
        {item.completed ? (
          <button onClick={onIncomplete} id={completedClass}>
            Undo
          </button>
        ) : (
          <button onClick={onComplete} id={completedClass}>
            ✔
          </button>
        )}
      </div>
      <div className="card-content">
        <p>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </p>
        <h2 className={completedClass}>
          I will {item.idea.charAt(0).toLowerCase() + item.idea.slice(1)}
        </h2>
        <p>By {item.date}...</p>
        <p>...or else {item.consequence}</p>

        <div className="public-private"></div>
        {item.isPrivate ? (
          <button onClick={onPublic} id={completedClass}>
            Make Public
          </button>
        ) : (
          <button onClick={onPrivate} id={completedClass}>
            Make Private
          </button>
        )}
      </div>
    </li>
  );
};

export default BucketListCard;
