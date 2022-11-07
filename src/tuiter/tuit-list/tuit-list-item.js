import React from "react";
import {useDispatch} from "react-redux";

import {deleteTuit} from "../reducers/tuits-reducer";

import TuitStats from "./tuit-stats";

const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img className="float-end rounded-circle" src={tuit.image} width={50} alt="user_avatar"/>
          </div>

          <div className="col-10">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}/>
            <div className="fw-bolder">
              {tuit.userName} <i className="bi bi-patch-check-fill text-primary px-2"/>
              <span className="fw-normal">{tuit.handle} · {tuit.time}</span>
            </div>

            <div className="mb-3 pe-2">{tuit.tuit}</div>

            <TuitStats tuit={tuit}/>
          </div>

        </div>
      </li>
  )
}

export default TuitItem;