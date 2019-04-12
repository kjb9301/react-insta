import React, { Component } from 'react';
import Register from 'components/main/Register';

import {
  PROJECT_NAME,
  SERVER_URL
} from "common/Constants";
import FireAuthUser from "api/FireAuthUser";

class RegContainer extends Component {
  constructor(props){
    super(props);

    this.userManager = new FireAuthUser(
      SERVER_URL,
      PROJECT_NAME,
    );
  }

  state = {
    nickname: '',
    email: '',
    pwd: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegClick = async (nickname,id,pw) => {
    try {
      const bodyData = {
        user: {
          id,
          user_name: nickname,
          user_type: 0
        },
        user_auth: {
          typ_login: 1,
          pw,
        }
      };

      const res = await this.userManager.signUp(bodyData);

      console.log('회원가입 응답 값', res);
    } catch (e) {
      console.log('err', e);
    }
  }

  render() {
    const { handleChange, handleRegClick } = this;
    const { nickname, email, pwd } = this.state;
    const regInfo = {nickname,email,pwd};
    return (
      <Register regInfo={regInfo} handleChange={handleChange} handleRegClick={handleRegClick}/>
    );
  }
}

export default RegContainer;