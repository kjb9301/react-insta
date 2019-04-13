import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Profile from 'components/profile/Profile';

class ProfileContainer extends Component {
  handleLogout = () => {
    console.log(sessionStorage)
    sessionStorage.clear();
    console.log(sessionStorage)
    const { history } = this.props;
    alert("로그아웃 되었습니다.");
    history.push('/');
  }

  render() {
    const { handleLogout } = this;
    return (
      <Profile handleLogout={handleLogout}/>
    );
  }
}

export default withRouter(ProfileContainer);