import React from "react";

const TuitStats = ({tuit}) => {
  return(
      <div className="row">
        <div className="col">
          <i className="bi bi-chat pe-2"/>{tuit.replies}
        </div>
        <div className="col">
          <i className="bi bi-repeat pe-2"/>{tuit.retuits}
        </div>
        <div className="col">
          {tuit.liked ?
              <i className="bi bi-heart-fill text-danger pe-2"/> : <i className="bi bi-heart"/> }
          {tuit.likes}
        </div>
        <div className="col">
          <i className="bi bi-share"/>
        </div>
      </div>
  )
}

export default TuitStats;