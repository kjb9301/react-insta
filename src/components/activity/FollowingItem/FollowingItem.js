import React from 'react';
import './FollowingItem.scss';

const FollowingItem = ({following}) => {
  return (
    <div className="following-box">
      <div className="following-left">
        <div className="following-img"></div>
      </div>
      <div className="following-center">
        <div className="following-user">
          <span>{following.to_user}</span>
        </div>
      </div>
      <div className="following-right">
        <div className="following-btn">
          <button>팔로잉</button>
        </div>
      </div>
    </div>
  );
};

export default FollowingItem;