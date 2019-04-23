import React, { Component } from 'react';
import Fetch from 'common/Fetch';
import { getItem } from 'common/StorageUtils';

import FollowItem from 'components/activity/FollowItem';

class FollowItemContainer extends Component {

  doFollow = async(to_user_id) => {
    const api = getItem('RestAPI');
    const userData = getItem('userData');
    const pid_user = userData.user.pid_user;
    
    const bodyData = {
      follow: {
        pid_user: pid_user,
        to_user: to_user_id
      }
    }
    try{
      await Fetch(api.follow_do_follow,'',bodyData);
    }catch(err){
      console.log("doFollow Error", err);
    }
  }

  render() {
    const { follow } = this.props;
    const { doFollow } = this;
    return (
      <FollowItem
        follow={follow}
        doFollow={doFollow}
      />
    );
  }
}

export default FollowItemContainer;