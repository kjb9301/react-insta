import React, { Component } from 'react';
import Fetch from 'common/Fetch';
import { storageAvailable, getItem } from 'common/StorageUtils';
import FollowItem from 'components/activity/FollowItem';

class FollowItemContainer extends Component {
  doFollow = async(to_user_id) => {
    console.log(to_user_id)
    const api = getItem('RestAPI');
    const userData = getItem('userData');
    const pid_user = userData.user.pid_user;
    
    const bodyData = {
      follow: {
        pid_user: pid_user,
        to_user: to_user_id
      }
    }

    await Fetch(api.follow_do_follow,'',bodyData);
  }

  render() {
    const { follow } = this.props;
    const { doFollow } = this;
    return (
      <FollowItem follow={follow} doFollow={doFollow}/>
    );
  }
}

export default FollowItemContainer;