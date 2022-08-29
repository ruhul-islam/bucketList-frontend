import { FormEvent, useState } from "react";
import "./BucketListForm.css";

const BucketListForm = () => {
  const [idea, setIdea] = useState("");
  const [date, setDate] = useState("");
  const [consequence, setConsequence] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };
  return (
    <form className="BucketListForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="bucket-list-idea">Bucket List Idea</label>
      <input type="text" name="bucket-list-idea" id="bucket-list-idea" />

      <label htmlFor="date">Date</label>
      <input type="date" name="date" id="date" />
      <label htmlFor="consequences">Consequences</label>
      <input type="text" name="consequences" id="consequences" />
      <button className="Add">Add</button>
    </form>
  );
};

export default BucketListForm;
