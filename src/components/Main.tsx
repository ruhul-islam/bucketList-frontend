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
  completeBucketListItemForTheUser,
  fetchUser,
  incompleteBucketListItemForTheUser,
  privateBucketListItemForTheUser,
  publicBucketListItemForTheUser,
  removeBucketListItemForTheUser,
} from "../services/userServices";
import MyFriendsList from "./MyFriendsList";

const Main = () => {
  const { user } = useContext(AuthContext);

  const [idea, setIdea] = useState<BucketListIdea>();
  const [items, setItems] = useState<BucketListItem[]>([]);

  const getAndSetBucketListItems = (): void => {
    fetchUser(user!.uid).then((response) => {
      console.log(response);
      setItems(response.bucketList!);
    });
  };

  const submitBucketListItem = (item: BucketListItem): void => {
    addBucketListItemForTheUser(user!.uid, item).then(() => {
      getAndSetBucketListItems();
    });
  };

  const deleteBucketListItem = async (idea: string) => {
    console.log("are we here");
    const response: any = await removeBucketListItemForTheUser(user!.uid, idea);

    //const result = await response.json();
    console.log(response);
    getAndSetBucketListItems();

    // removeBucketListItemForTheUser(user!.uid, idea).then(() => {
    //   console.log("hi,");
    //    ();
    // });
  };

  const completeBucketListItem = async (idea: string) => {
    console.log("are we NOT here");
    const response: any = await completeBucketListItemForTheUser(
      user!.uid,
      idea
    );

    //const result = await response.json();
    console.log(response);
    getAndSetBucketListItems();

    // removeBucketListItemForTheUser(user!.uid, idea).then(() => {
    //   console.log("hi,");
    //    ();
    // });
  };

  const incompleteBucketListItem = async (idea: string) => {
    console.log("are we NOT here");
    const response: any = await incompleteBucketListItemForTheUser(
      user!.uid,
      idea
    );

    //const result = await response.json();
    console.log(response);
    getAndSetBucketListItems();

    // removeBucketListItemForTheUser(user!.uid, idea).then(() => {
    //   console.log("hi,");
    //    ();
    // });
  };

  const privateBucketListItem = async (idea: string) => {
    console.log("are we NOT here");
    const response: any = await privateBucketListItemForTheUser(
      user!.uid,
      idea
    );

    //const result = await response.json();
    console.log(response);
    getAndSetBucketListItems();

    // removeBucketListItemForTheUser(user!.uid, idea).then(() => {
    //   console.log("hi,");
    //    ();
    // });
  };

  const publicBucketListItem = async (idea: string) => {
    console.log("are we NOT here");
    const response: any = await publicBucketListItemForTheUser(user!.uid, idea);

    //const result = await response.json();
    console.log(response);
    getAndSetBucketListItems();

    // removeBucketListItemForTheUser(user!.uid, idea).then(() => {
    //   console.log("hi,");
    //    ();
    // });
  };

  useEffect(() => {
    console.log("useeffet1");

    if (user !== null) {
      getAndSetBucketListItems();
    }
  }, [user]);

  return (
    <div className="Main">
      {user && (
        <>
          {/* <HomePage /> */}
          <BucketListForm onAdd={submitBucketListItem} />
          <BucketListContainer
            items={items}
            onDelete={deleteBucketListItem}
            onComplete={completeBucketListItem}
            onIncomplete={incompleteBucketListItem}
            onPrivate={privateBucketListItem}
            onPublic={publicBucketListItem}
          />
          {/* <MyFriendsList /> */}
          <div className="FooterContainer">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
