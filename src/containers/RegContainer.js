import React, { Component } from 'react';
import Register from 'components/main/Register';

class RegContainer extends Component {
  state = {
    regInfo: {
      nickname: '',
      email: '',
      pwd: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      regInfo: {
        [name]: value
      }
    })
  }

  handleRegClick = () => {

  }

  render() {
    const { handleChange, handleRegClick } = this;
    const { regInfo } = this.state;
    return (
      <Register regInfo={regInfo} handleChange={handleChange} handleRegClick={handleRegClick}/>
    );
  }
}

export default RegContainer;