import React from 'react';
import './FollowItem.scss';

const FollowItem = ({follow,doFollow}) => {
  console.log(follow)
  return (
    <div className="follow-box">
      <div className="follow-left">
        <div className="follow-img"></div>
      </div>
      <div className="follow-center">
        <div className="follow-user">
          <span>{follow.user_name}</span>
        </div>
      </div>
      <div className="follow-right">
        <div className="follow-btn">
          <button onClick={() => doFollow(follow.pid_user)}>팔로우</button>
        </div>
      </div>
    </div>
  );
};

export default FollowItem;