import React from "react";

const WhoToFollowListItem = (
    {who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }}
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img src={who.avatarIcon} height={48} className="wd-icon-width rounded-circle" alt="user_avatar" />
          </div>
          <div className="col-8">
            <div className="fw-bold">{who.userName} <i className="fa-solid fa-circle-check"/></div>
            <div>@{who.handle}</div>
          </div>
          <div className="col-2 my-auto">
            <button className="btn btn-primary rounded-pill float-end">Follow</button>
          </div>
        </div>
      </li>
  );
};

export default WhoToFollowListItem;