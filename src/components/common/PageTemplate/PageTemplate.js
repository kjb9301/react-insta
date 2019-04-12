import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from 'components/common/Footer';
import logo from 'images/bitmap.png';
import './PageTemplate.scss';

const PageTemplate = ({match, children}) => {
  return (
    <div className={match.path === '/'?"page-template":"page-template-L"}>
      <div className="header">
        <img src={logo}/>
      </div>
      <section>
        {children}
      </section>
      {match.path === '/'?null:<Footer/>}
    </div>
  );
};

export default withRouter(PageTemplate);