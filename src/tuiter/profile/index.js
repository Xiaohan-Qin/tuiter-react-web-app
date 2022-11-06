import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import "./index.css"

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile);

  const getMonthName = (monthNum) => {
    const date = new Date();
    date.setMonth(monthNum - 1);
    return date.toLocaleString([], {month: 'long'});
  }

  const dob = profile.dateOfBirth.split("-");
  const dateJoin = profile.dateJoined.split("-");

  return (
      <div className="bg-light rounded">
        <div className="row">
          <div className="col-1 my-auto fs-4">
            <i className="bi bi-arrow-left ps-3"/>
          </div>

          <div className="col-11 ps-5">
            <h5>{profile.firstName} {profile.lastName}</h5>
            <h6 className="text-dark">{profile.tuits} Tuits</h6>
          </div>
        </div>

        <div className="position-relative">
          <img className="w-100"
               src={profile.bannerPicture}
               alt="banner_picture"/>
          <img className="position-absolute wd-profile-pic rounded-circle"
               src={profile.profilePicture}
               width={100}
               alt="profile_picture"/>
          <Link
              to="/tuiter/edit-profile"
              className="btn btn-primary rounded-pill float-end mt-2 me-2"
          >
            Edit Profile
          </Link>
        </div>
        <br/>

        <div className="mt-5 p-3">
          <h5 className="fw-bold">{profile.firstName} {profile.lastName}</h5>
          <h6 className="text-dark">{profile.handle}</h6>
          <p className="text-white">{profile.bio}</p>

          <div className="mb-2">
            <span className="me-4"><i className="bi bi-geo-alt me-2"/>{profile.location}</span>
            <span className="me-4"><i className="bi bi-balloon me-2"/>Born {getMonthName(dob[1])} {dob[2]}, {dob[0]}</span>
            <span><i className="bi bi-calendar3 me-2"/>Joined {getMonthName(dateJoin[1])} {dateJoin[0]}</span>
          </div>

          <div>
            <span className="me-4">{profile.followingCount} Following</span>
            <span>{profile.followersCount} Followers</span>
          </div>
        </div>
      </div>
  )
}

export default ProfileComponent;