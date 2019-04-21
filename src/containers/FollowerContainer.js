import React, { Component } from 'react';
import Fetch from 'common/Fetch';
import { getItem } from 'common/StorageUtils';
import FollowList from 'components/activity/FollowList';

class FollowerContainer extends Component {

  state = {
    followList: []
  }

  getUser = async () => {
    const api = getItem('RestAPI');
    const userData = getItem('userData');
		const pid_user = userData.user.pid_user;
    const query = "?seq=0&interval=10";
    const allUser = await Fetch(api.user_get_seq,query);
    const userList = allUser.filter(user => user.pid_user !== pid_user);
    //const followingData = await Fetch(api.follow_get_my);
    const followList = userList.filter(user => user.pid_user)

    this.setState({
      followList: followList
    })
  }

  componentDidMount(){
    this.getUser();
  }

  render() {
    const { followList } = this.state;
    console.log(followList)
    return (
      <FollowList followList={followList}/>
    );
  }
}

export default FollowerContainer;