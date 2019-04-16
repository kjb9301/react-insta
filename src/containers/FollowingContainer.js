import React, { Component } from 'react';
import Fetch from 'common/Fetch';
import { storageAvailable, getItem } from 'common/StorageUtils';

import FollowingList from 'components/activity/FollowingList';

class FollowingContainer extends Component {

  state = {
    followingList: []
  }

  getFollowing = async() => {
    const isStorage = storageAvailable();
    if(!isStorage) return null;
    const api = getItem('RestAPI');
    const followingData = await Fetch(api.follow_get_my);
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