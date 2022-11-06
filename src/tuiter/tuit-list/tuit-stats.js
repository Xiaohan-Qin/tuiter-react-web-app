import React from "react";

const TuitStats = ({tuit}) => {
  return(
      <div className="row">
        <div className="col">
          <i className="bi bi-chat"/>{tuit.replies}
        </div>
        <div className="col">
          <i className="bi bi-repeat"/>{tuit.retuits}
        </div>
        <div className="col">
          {tuit.liked ?
              <i className="bi bi-heart-fill text-danger"/> : <i className="bi bi-heart"/> }
          {tuit.likes}
        </div>
        <div className="col">
          <i className="bi bi-share"/>
        </div>
      </div>
  )
}

export default TuitStats;