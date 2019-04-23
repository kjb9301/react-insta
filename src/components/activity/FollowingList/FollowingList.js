import React from 'react';
import './FollowingList.scss';
import FollowingItemContainer from 'containers/follow/FollowingItemContainer';

const FollowingList = ({followingList}) => {
  const followings = followingList.map(following => {
    return <FollowingItemContainer
              key={following.pid_follow}
              following={following}
            />
  })
  return (
    <div className="following-list-wrapper">
      {followings}
    </div>
  );
};

export default FollowingList;