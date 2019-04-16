import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Main from 'components/main/Main';

class MainContainer extends Component {

  hadleLoginClick = () => {
    const { history } = this.props;
    history.push('/login');
  }

  hadleRegClick = () => {
    const { history } = this.props;
    history.push('/register');
  }

  render() {
    console.log("MainContainer render")
    const { hadleLoginClick, hadleRegClick } = this;

    return (
      <Main hadleLoginClick={hadleLoginClick} hadleRegClick={hadleRegClick}/>
    );
  }
}

export default withRouter(MainContainer);