import React from 'react';
import { Link } from 'react-router-dom';
import home from 'images/home/home.png';
import activity from 'images/activity/activity.png';
import search from 'images/search/search.png';
import upload from 'images/upload/photo.png';
import profile from 'images/profile/profile.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div><Link to="/home"><img src={home}/></Link></div>
      <div><Link to="/search"><img src={search}/></Link></div>
      <div><Link to="/upload"><img src={upload}/></Link></div>
      <div><Link to="/like"><img src={activity}/></Link></div>
      <div><Link to="/profile"><img src={profile}/></Link></div>
    </div>
  );
};

export default Footer;