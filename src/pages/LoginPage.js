import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import LoginContainer from 'containers/LoginContainer';

const LoginPage = () => {
  console.log("LoginPage")
  return (
    <PageTemplate>
      <LoginContainer/>
    </PageTemplate>
  );
};

export default LoginPage;