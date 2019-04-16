import React from 'react';
import './Profile.scss'

const Profile = ({handleLogout}) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <div className="header-left">
          <span onClick={handleLogout}>LogOut</span>
        </div>
        <div className="header-center">Profile</div>
        <div className="header-right">Done</div>
      </div>
      <div className="profile-content">
        <div className="content-box">
          <div className="content-top">
            <div className="content-img"></div>
          </div>
          <div className="content-bottom">
            <div className="content-btn">
              <button>+Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;