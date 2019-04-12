import React, { Component } from 'react';
import Main from 'components/main/Main';
import LoginContainer from 'containers/LoginContainer';
import RegContainer from 'containers/RegContainer';

class MainContainer extends Component {
  state = {currentState: ''}

  hadleLoginClick = () => {
    this.setState({
      currentState: 'login'
    })
  }

  hadleRegClick = () => {
    this.setState({
      currentState: 'register'
    })
  }

  render() {
    const { hadleLoginClick, hadleRegClick } = this;
    const { currentState } = this.state;
    return (
      <>
        {
          currentState === ''?
          <Main hadleLoginClick={hadleLoginClick} hadleRegClick={hadleRegClick}/>
        :
        <>
        {currentState === 'login'?<LoginContainer/>:<RegContainer/>}
        </>
        }
      </>
    );
  }
}

export default MainContainer;