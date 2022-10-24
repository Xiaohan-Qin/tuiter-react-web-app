import React from "react";

const PostSummaryItem = ({ post }) => {
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div className="text-secondary">{post.topic}</div>
            <div className="fw-bold">{post.userName} <i className="bi bi-check-circle-fill"/>
              <span className="text-secondary fw-normal"> · {post.time}</span>
            </div>
            <div className="fw-bold">{post.title}</div>
            {post.tweets ? <div className="text-secondary">{post.tweets} Tweets</div> : ""}
          </div>
          <div className="col-3 col-md-2 py-2 align-self-center">
            <img src={post.image} className="img-fluid rounded-3 float-end" />
          </div>
        </div>
      </li>
  )
}

export default PostSummaryItem;