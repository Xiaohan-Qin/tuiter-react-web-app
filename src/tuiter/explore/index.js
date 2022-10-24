import React from "react";

import PostSummaryList from "../post-summary-list";

import "./index.css"

const ExploreComponent = () => {
  return (
      <>
        <div className="row">
          <div className="col-11 position-relative">
            <input placeholder="Search Tuiter" className="form-control rounded-pill ps-5 mb-2" />
            <i className="bi bi-search position-absolute bottom-0 mb-3 h-50 ms-3 text-secondary"/>
          </div>

          <div className="col-1">
            <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-4 position-relative"/>
          </div>
        </div>

        <ul className="nav nav-pills mb-2">
          <li className="nav-item">
            <a href="#" className="nav-link active">For You</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Trending</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">News</a>
          </li>
        </ul>

        <div className="position-relative mb-2">
          <img
              src="https://mushucdn.b-cdn.net/Starship-Mk1-Day.webp"
              className="img-fluid mt-2 rounded-4"/>
          <div className="position-absolute bottom-0 ms-2">
            <h2 className="fw-bold text-light">SpaceX Starship</h2>
          </div>
        </div>
        <PostSummaryList />
      </>
  );
}

export default ExploreComponent;