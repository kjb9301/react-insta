import React, { Component } from 'react';
import Fetch from 'common/Fetch';
import { getItem } from 'common/StorageUtils';
import FollowingItem from 'components/activity/FollowingItem';

class FollowingItemContainer extends Component {
  deleteFollow = async(follow_id) => {
    const api = getItem('RestAPI');
    const userData = getItem('userData');
    const pid_user = userData.user.pid_user;
    
    const bodyData = {
      follow: {
        pid_user: pid_user,
        pid_follow: follow_id
      }
    }
    try{
      await Fetch(api.follow_delete,'',bodyData);
      alert("팔로우 취소되었습니다.");
    }catch(err){
      console.log("deleteFollow error", err);
    }
  }
  
  render() {
    const { following } = this.props;
    const { deleteFollow } = this;
    return (
      <FollowingItem following={following} deleteFollow={deleteFollow}/>
    );
  }
}

export default FollowingItemContainer;