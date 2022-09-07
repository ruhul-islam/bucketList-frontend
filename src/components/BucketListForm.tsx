import { FormEvent, useEffect, useState } from "react";
import BucketListIdea from "../models/BucketListIdea";
import BucketListItem from "../models/BucketListItem";
import { fetchBucketListIdea } from "../services/bucketListService";
import "./BucketListForm.css";

interface Props {
  onAdd: (item: BucketListItem) => void;
}
let consequences: string[] = [
  "go bowling by myself",
  "go to a children's movie in the theater by myself",
  "watch Shrek in French",
  "scroll through my ex's entire Instagram",
  "find the most embarrassing picture of myself and post it on social media",
  "drink an entire monster energy drink",
  "wear my shoes on the wrong feet for 3 hours",
  "get rickrolled on 0.5 speed",
  "confess my darkest secret to my worst enemy",
  "stand in line at Starbucks but don't move when it's my turn",
];

const BucketListForm = ({ onAdd }: Props) => {
  const [idea, setIdea] = useState("");
  const [date, setDate] = useState("");

  let generateIdea = () => {
    fetchBucketListIdea().then((response) => {
      setIdea(response.item);
    });
  };

  useEffect(() => {
    generateIdea();
  }, []);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const random: number = Math.floor(Math.random() * consequences.length);
    const item: BucketListItem = {
      idea,
      date,
      consequence: consequences[random],
      completed: false,
      isPrivate: false,
    };
    onAdd(item);
    setIdea("");
    setDate("");
  };

  return (
    <form className="BucketListForm" onSubmit={(e) => handleSubmit(e)}>
      <label className="bucket-list-form-title" htmlFor="bucket-list-idea">
        Bucket List Idea
      </label>
      <div className="text-area-and-inspo-button">
        <textarea
          className="idea-form"
          name="bucket-list-idea"
          id="bucket-list-idea"
          rows={5}
          cols={30}
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          required
        ></textarea>
        <button
          className="inspire-button"
          onClick={generateIdea}
          type="button"
          id="bucket-list-idea"
        >
          Inspire me
        </button>
      </div>
      <label className="complete-by-input-title" htmlFor="date">
        Complete By:{" "}
      </label>
      <div className="complete-by-input-and-button">
        <input
          type="date"
          name="date"
          id="date"
          className="dateArea"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          min={new Date().toISOString().split("T")[0]}
        />

        <button className="Add">Add</button>
      </div>
    </form>
  );
};

export default BucketListForm;
