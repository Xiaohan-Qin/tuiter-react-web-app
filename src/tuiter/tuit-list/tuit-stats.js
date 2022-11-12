import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  return(
      <div className="row">
        <div className="col">
          <i className="bi bi-chat pe-2"/>{tuit.replies}
        </div>
        <div className="col">
          <i className="bi bi-repeat pe-2"/>{tuit.retuits}
        </div>
        <div className="col">
          {/*{tuit.liked ?*/}
          {/*    <i className="bi bi-heart-fill text-danger pe-2"/> : <i className="bi bi-heart pe-2"/> }*/}
          {/*{tuit.likes}*/}
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
          }))} className="bi bi-heart-fill me-2 text-danger"/>
          {tuit.likes}
        </div>
        <div className="col">
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1
          }))} className="bi bi-hand-thumbs-down me-2"/>
          {tuit.dislikes}
        </div>
        <div className="col">
          <i className="bi bi-share"/>
        </div>
      </div>
  )
}

export default TuitStats;