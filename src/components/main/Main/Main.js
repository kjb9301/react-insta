import React from 'react';
import './Main.scss';

const Main = ({hadleLoginClick,hadleRegClick}) => {
  return (
    <div className="btn">
      <div>
        <button className="login-btn" onClick={hadleLoginClick}>Login</button>
      </div>
      <div>
        <button className="reg-btn" onClick={hadleRegClick}>Register</button>
      </div>
    </div>
  );
};

export default Main;