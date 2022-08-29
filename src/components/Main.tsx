import { useEffect, useState } from "react";
import BucketListIdea from "../models/BucketListIdea";
import BucketListItem from "../models/BucketListItem";
import { fetchBucketList } from "../services/bucketListService";
import HomePage from "./HomePage";
import BucketListContainer from "./BucketListContainer";

import "./Main.css";

const Main = () => {
  const [idea, setIdea] = useState<BucketListIdea>();
  const [items, setItems] = useState<BucketListItem[]>([]);

  useEffect(() => {
    fetchBucketList().then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <div className="Main">
      <HomePage />
      <BucketListContainer items={items} />
    </div>
  );
};

export default Main;
