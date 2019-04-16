import React, { Component } from 'react';
import FollowingList from 'components/activity/FollowingList';

import Fetch from 'common/Fetch';
import { storageAvailable, getItem } from 'common/StorageUtils';

class FollowingContainer extends Component {

  state = {
    followingList: []
  }

  getFollowing = async() => {
    const api = getItem('RestAPI');
    const followingData = await Fetch(api.follow_get_my);
    console.log(followingData)
    this.setState({
      followingList: followingData
    })
  }

  componentDidMount(){
    this.getFollowing();
  }

  render() {
    const { followingList } = this.state;
    return (
      <FollowingList followingList={followingList}/>
    );
  }
}

export default FollowingContainer;