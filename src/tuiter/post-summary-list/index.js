import React from "react";
import {useSelector} from "react-redux";

import PostSummaryItem from "./post-summary-item";
// import postsArray from "../data/tuits.json";

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuits);
  return (
      <ul className="list-group">
        {postsArray.map(post => <PostSummaryItem key={post._id} post={post} />)}
      </ul>
  )
}

export default PostSummaryList;