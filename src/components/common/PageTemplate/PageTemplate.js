import React, { Fragment } from 'react';
import Footer from 'components/common/Footer';
import './PageTemplate.scss';

const PageTemplate = ({children}) => {
  const isStorage = sessionStorage.length !== 0 ? true : false;
  return (
    <div className="page-template">
    {
      !isStorage?
      <Fragment>
        <div className="header">
          
        </div>
        <section>
          {children}
        </section>
      </Fragment>
      :
      <Fragment>
        <section>
          {children}
        </section>
        <Footer/>
      </Fragment>
    }
    </div>
  );
};

export default PageTemplate;