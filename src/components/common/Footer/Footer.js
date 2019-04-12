import React from 'react';
import { Link } from 'react-router-dom';
import home from 'images/home.png';

const Footer = () => {
  return (
    <div>
      <Link><img src={home}/></Link>
      <Link><img src={home}/></Link>
      <Link><img src={home}/></Link>
      <Link><img src={home}/></Link>
      <Link><img src={home}/></Link>
    </div>
  );
};

export default Footer;