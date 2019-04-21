import React, { Component } from 'react';
import Follow from 'components/activity/Follow';

class FollowContainer extends Component {
  state = {
    followTF: false
  }

  handleFollow = () => {
    this.setState({
      followTF: false
    })
  }

  handleFollowing = () => {
    this.setState({
      followTF: true
    })
  }

  render() {
    const { handleFollow, handleFollowing } = this;
    const { followTF } = this.state;
    return (
      <Follow
        followTF={followTF}
        handleFollowing={handleFollowing}
        handleFollow={handleFollow}
      />
    );
  }
}

export default FollowContainer;