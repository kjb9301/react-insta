import React from 'react';
import './Register.scss';

const Register = ({regInfo,handleChange,handleRegister}) => {
  return (
    <div className="reg-form">
      <input className="nickname-inp" type="text" name="nickname" placeholder="nickname" value={regInfo.nickname} onChange={handleChange}/>
      <input className="email-inp" type="text" name="email" placeholder="email" value={regInfo.email} onChange={handleChange}/>
      <input className="pwd-inp" type="password" name="pwd" placeholder="password" value={regInfo.pwd} onChange={handleChange}/>
      <input className="reg-btn" type="button" value="Register" onClick={() => handleRegister(regInfo.nickname,regInfo.email,regInfo.pwd)}/>
    </div>
  );
};

export default Register;