import React, { Component } from 'react';
import Fetch from 'common/Fetch';
import { getItem } from 'common/StorageUtils';

import FollowList from 'components/activity/FollowList';

class FollowListContainer extends Component {

  state = {
    followList: []
  }

  getUser = async () => {
    const api = getItem('RestAPI');
    const userData = getItem('userData');
		const pid_user = userData.user.pid_user;
    const query = "?seq=0&interval=10";
    try{
      let userList = await Fetch(api.user_get_seq,query);
      userList = userList.filter(user => user.pid_user !== pid_user);
      const followingData = await Fetch(api.follow_get_my);
      let followList = [];
      for(let i=0; i<followingData.length; i++){
        const id = followingData[i].to_user;
        followList = userList.filter(user => (user.pid_user !== id))
      }

      this.setState({
        followList: followList
      })
    }catch(err){
      console.log("getUser Error", err);
    }
  }

  componentDidMount(){
    this.getUser();
  }

  render() {
    const { followList } = this.state;
    return (
      <FollowList
        followList={followList}
      />
    );
  }
}

export default FollowListContainer;