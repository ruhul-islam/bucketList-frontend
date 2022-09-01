import { useContext, useEffect, useState } from "react";
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
import AuthContext from "../context/AuthContext";
import {
  addBucketListItemForTheUser,
  fetchUser,
  removeBucketListItemForTheUser,
} from "../services/userServices";

const Main = () => {
  const { user } = useContext(AuthContext);

  const [idea, setIdea] = useState<BucketListIdea>();
  const [items, setItems] = useState<BucketListItem[]>([]);

  const getAndSetBucketListItems = (): void => {
    fetchUser(user!.uid).then((response) => {
      setItems(response.bucketList!);
    });
  };

  const submitBucketListItem = (item: BucketListItem): void => {
    addBucketListItemForTheUser(user!.uid, item).then(() => {
      getAndSetBucketListItems();
    });
  };

  const deleteBucketListItem = (idea: string): void => {
    removeBucketListItemForTheUser(user!.uid, idea).then(() => {
      getAndSetBucketListItems();
    });
  };

  useEffect(() => {
    if (user) {
      getAndSetBucketListItems();
    }
    console.log(user?.uid);
  }, []);

  return (
    <div className="Main">
      {user && (
        <>
          {/* <HomePage /> */}
          <BucketListForm onAdd={submitBucketListItem} />
          <BucketListContainer items={items} onDelete={deleteBucketListItem} />
          <div className="FooterContainer">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
