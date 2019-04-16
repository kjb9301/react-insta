import React, { Component } from 'react';
import Follow from 'components/activity/Follow';

class FollowContainer extends Component {
  state = {
    followTF: true
  }

  handleFollowing = () => {
    this.setState({
      followTF: true
    })
  }

  handleFollower = () => {
    this.setState({
      followTF: false
    })
  }

  render() {
    const { handleFollowing, handleFollower } = this;
    const { followTF } = this.state;
    return (
      <Follow
        followTF={followTF}
        handleFollowing={handleFollowing}
        handleFollower={handleFollower}
      />
    );
  }
}

export default FollowContainer;