import React, { Component } from 'react';
import Login from 'components/main/Login';

class LoginContainer extends Component {
  state = {
    loginInfo: {
      email: '',
      pwd: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      loginInfo: {
        [name]: value
      }
    })
  }

  handleLoginClick = () => {

  }
  
  render() {
    const { handleChange, handleLoginClick } = this;
    const { loginInfo } = this.state;

    return (
      <Login loginInfo={loginInfo} handleChange={handleChange} handleLoginClick={handleLoginClick}/>
    );
  }
}

export default LoginContainer;