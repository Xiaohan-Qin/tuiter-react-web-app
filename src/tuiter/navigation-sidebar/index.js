import React from "react";

import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];

  return (
      <>
        <div className="list-group">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="list-group-item">
            <i className="bi bi-twitter"/>
          </a>
          <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active':''}`}>
            <i className="fa-solid fa-house pe-2"/>
            <span className="d-none d-xl-inline">Home</span>
          </Link>
          <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active':''}`}>
            <i className="fa-solid fa-hashtag pe-2"/>
            <span className="d-none d-xl-inline">Explore</span>
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={`list-group-item ${active === 'notifications' ? 'active':''}`}>
            <i className="fa-solid fa-bell pe-2"/>
            <span className="d-none d-xl-inline">Notifications</span>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={`list-group-item ${active === 'messages' ? 'active':''}`}>
            <i className="fa-solid fa-envelope pe-2"/>
            <span className="d-none d-xl-inline">Messages</span>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={`list-group-item ${active === 'bookmarks' ? 'active':''}`}>
            <i className="fa-solid fa-bookmark pe-2"/>
            <span className="d-none d-xl-inline">Bookmarks</span>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={`list-group-item ${active === 'lists' ? 'active':''}`}>
            <i className="fa-solid fa-list pe-2"/>
            <span className="d-none d-xl-inline">Lists</span>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={`list-group-item ${active === 'profile' ? 'active':''}`}>
            <i className="fa-solid fa-user pe-2"/>
            <span className="d-none d-xl-inline">Profile</span>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={`list-group-item ${active === 'more' ? 'active':''}`}>
            <i className="fa-solid fa-circle-info pe-2"/>
            <span className="d-none d-xl-inline">More</span>
          </a>
        </div>
        <button className="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
      </>
  );
};

export default NavigationSidebar;