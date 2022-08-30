import { useEffect, useState } from "react";
import BucketListIdea from "../models/BucketListIdea";
import BucketListItem from "../models/BucketListItem";
import {
  addBucketListItem,
  deleteById,
  fetchBucketList,
} from "../services/bucketListService";
import Footer from "./Footer";
import HomePage from "./HomePage";
import BucketListContainer from "./BucketListContainer";

import "./Main.css";
import BucketListForm from "./BucketListForm";

const Main = () => {
  const [idea, setIdea] = useState<BucketListIdea>();
  const [items, setItems] = useState<BucketListItem[]>([]);

  const getAndSetBucketListItems = (): void => {
    fetchBucketList().then((response) => {
      setItems(response);
    });
  };

  const submitBucketListItem = (item: BucketListItem): void => {
    addBucketListItem(item).then(() => {
      getAndSetBucketListItems();
    });
  };

  const deleteBucketListItem = (id: string): void => {
    deleteById(id).then(() => {
      getAndSetBucketListItems();
    });
  };

  useEffect(() => {
    getAndSetBucketListItems();
  }, []);

  return (
    <div className="Main">
      {/* <HomePage /> */}
      <BucketListForm onAdd={submitBucketListItem} />
      <BucketListContainer items={items} onDelete={deleteBucketListItem} />
      <div className="FooterContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
