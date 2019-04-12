import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Login from 'components/main/Login';

import {
  PROJECT_NAME,
  SERVER_URL
} from "common/Constants";
import FireAuthUser from "api/FireAuthUser";
import RestAPI from 'common/RestAPI';

class LoginContainer extends Component {
  constructor(props){
    super(props);

    this.userManager = new FireAuthUser(
      SERVER_URL,
      PROJECT_NAME,
    );
  }

  state = {
    email: '',
    pwd: '',
    isLoaded: false
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleLoginClick = async (email,pwd) => {
    try {
      const res = await this.userManager.login(email, pwd);
      console.log('로그인 응답 값', res);
      if(res.status === undefined){
        const { history } = this.props;
        history.push('/home');
      }else{
        alert("로그인에 실패하였습니다. 다시 시도하시기 바랍니다.");
      }
    } catch (err) {
      console.log('Login Error', err);
    }
  }

  // getRestAPI = async () => {
  //   const res = await RestAPI();
  //   console.log('res', res);
  //   if (!res) return null;

  //   this.setState({
  //      isLoaded: true,
  //   });
  // }

  // componentDidMount() {
  //   this.getRestAPI();
  // }
  
  render() {
    const { handleChange, handleLoginClick } = this;
    const { email,pwd,isLoaded } = this.state;
    const loginInfo = {email,pwd};
    //if (!isLoaded) return <h1>loading....</h1>

    return (
      <Login loginInfo={loginInfo} handleChange={handleChange} handleLoginClick={handleLoginClick}/>
    );
  }
}

export default withRouter(LoginContainer);