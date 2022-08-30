import { FormEvent, useEffect, useState } from "react";
import BucketListIdea from "../models/BucketListIdea";
import BucketListItem from "../models/BucketListItem";
import { fetchBucketListIdea } from "../services/bucketListService";
import "./BucketListForm.css";

interface Props {
  onAdd: (item: BucketListItem) => void;
}
let consequences: string[] = [
  "Go bowling by myself",
  "Go to a children's movie in the theater by myself",
  "Watch Shrek in French",
  "Scroll through your ex's entire Instagram",
  "Find the most embarrassing picture of yourself and post it",
  "Drink an entire monster energy drink",
  "Wear your shoes on the wrong feet for 3 hours",
  "Get rickrolled on 0.5 speed",
  "confess my darkest secret to my worst enemy",
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
    };
    onAdd(item);
    setIdea("");
    setDate("");
  };

  return (
    <form className="BucketListForm" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="bucket-list-idea">Bucket List Idea</label>
        <input
          type="text"
          name="bucket-list-idea"
          id="bucket-list-idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <button onClick={generateIdea} type="button" id="bucket-list-idea">
          Inspire me
        </button>
      </div>

      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="Add">Add</button>
    </form>
  );
};

export default BucketListForm;
