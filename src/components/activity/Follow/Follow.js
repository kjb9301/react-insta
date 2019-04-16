import React from 'react';
import './Follow.scss';
import FollowingContainer from 'containers/FollowingContainer';
import FollowerContainer from 'containers/FollowerContainer';

const Follow = ({followTF,handleFollowing,handleFollower}) => {
  return (
    <div className="follow-wrapper">
      <div className="follow-header">
        <div className="following-header">
          <span onClick={handleFollowing}>팔로잉</span>
        </div>
        <div className="follower-header">
          <span onClick={handleFollower}>팔로워</span>
        </div>
      </div>
      <div className="follow-content">
        {followTF?
          <FollowingContainer/>
          :
          <FollowerContainer/>
        }
      </div>
    </div>
  );
};

export default Follow;