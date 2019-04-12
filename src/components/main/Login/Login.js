import React from 'react';
import './Login.scss';

const Login = ({loginInfo,handleChange,handleLoginClick}) => {
  return (
    <div className="login-form">
      <input className="email-inp" type="text" name="email" placeholder="email" value={loginInfo.email} onChange={handleChange}/>
      <input className="pwd-inp" type="password" name="pwd" placeholder="password" value={loginInfo.pwd} onChange={handleChange}/>
      <input className="login-btn" type="button" value="Login" onClick={handleLoginClick}/>
    </div>
  );
};

export default Login;