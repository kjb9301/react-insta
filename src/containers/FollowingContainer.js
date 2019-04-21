import React, { Component } from 'react';
import Fetch from 'common/Fetch';
import { getItem } from 'common/StorageUtils';

import FollowingList from 'components/activity/FollowingList';

class FollowingContainer extends Component {

  state = {
    followingList: []
  }

  getFollowing = async() => {
    const api = getItem('RestAPI');
    const followingData = await Fetch(api.follow_get_my);
    const query = '?seq=0&interval=10'
    const userData = await Fetch(api.user_get_seq,query);
    
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