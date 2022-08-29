import { FormEvent, useState } from "react";
import BucketListItem from "../models/BucketListItem";
import "./BucketListForm.css";

interface Props {
  onAdd: (item: BucketListItem) => void;
}

const BucketListForm = ({ onAdd }: Props) => {
  const [idea, setIdea] = useState("");
  const [date, setDate] = useState("");
  const [consequence, setConsequence] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const item: BucketListItem = { idea, date, consequence };
    onAdd(item);
    setIdea("");
    setDate("");
    setConsequence("");
  };
  return (
    <form className="BucketListForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="bucket-list-idea">Bucket List Idea</label>
      <input
        type="text"
        name="bucket-list-idea"
        id="bucket-list-idea"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="consequence">Consequences</label>
      <input
        type="text"
        name="consequence"
        id="consequence"
        value={consequence}
        onChange={(e) => setConsequence(e.target.value)}
      />
      <button className="Add">Add</button>
    </form>
  );
};

export default BucketListForm;
