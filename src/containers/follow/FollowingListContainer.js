import React, { Component } from 'react';
import Fetch from 'common/Fetch';
import { getItem } from 'common/StorageUtils';

import FollowingList from 'components/activity/FollowingList';

class FollowingListContainer extends Component {

  state = {
    followingList: []
  }

  getFollowing = async() => {
    const api = getItem('RestAPI');
    try{
      const followingData = await Fetch(api.follow_get_my);
      this.setState({
        followingList: followingData
      })
    }catch(err){
      console.log("getFollowing Error", err);
    }
  }

  componentDidMount(){
    this.getFollowing();
  }

  render() {
    const { followingList } = this.state;
    return (
      <FollowingList
        followingList={followingList}
      />
    );
  }
}

export default FollowingListContainer;