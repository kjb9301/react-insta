import React from 'react';
import './FollowList.scss';
import FollowItemContainer from 'containers/FollowItemContainer';

const FollowList = ({followList}) => {
  console.log(followList)
  const follows = followList.map(follow => {
    return (
      <FollowItemContainer key={follow.pid_user} follow={follow}/>
    )
  })
  return (
    <div className="follow-list-wrapper">
      {follows}
    </div>
  );
};

export default FollowList;