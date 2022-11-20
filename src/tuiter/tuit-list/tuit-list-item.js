import React from "react";
import {useDispatch} from "react-redux";

import {deleteTuitThunk} from "../../services/tuits-thunks";

import TuitStats from "./tuit-stats";

import "../index.css";

const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img className="float-end rounded-circle custom-image" src={tuit.image} width={50} height={50} alt="user_avatar"/>
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