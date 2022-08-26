import { useEffect, useState } from "react";
import BucketListIdea from "../models/BucketListIdea";
import { fetchBucketList } from "../services/bucketListService";

import "./Main.css";

const Main = () => {
  const [idea, setIdea] = useState<BucketListIdea | undefined>();

  useEffect(() => {
    fetchBucketList().then((response) => {
      console.log(response.item);
    });
  });
  return <div className="Main"></div>;
};

export default Main;
