import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PROJECT_NAME, SERVER_URL } from "common/Constants";
import FireAuthUser from "api/FireAuthUser";

import Register from 'components/main/Register';

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

  handleRegister = async (nickname,id,pw) => {
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
      if(res.status === undefined){
        alert("회원가입 되었습니다.");
        const { history } = this.props;
        history.push('/login');
      }else{
        alert("회원가입에 실패하였습니다. 다시 시도해 주시기 바랍니다.");
      }
    } catch (err) {
      console.log('handleRegister Error', err);
    }
  }

  render() {
    const { handleChange, handleRegister } = this;
    const { nickname, email, pwd } = this.state;
    const regInfo = {nickname,email,pwd};
    return (
      <Register
        regInfo={regInfo}
        handleChange={handleChange}
        handleRegister={handleRegister}
      />
    );
  }
}

export default withRouter(RegContainer);