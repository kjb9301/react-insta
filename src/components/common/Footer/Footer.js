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
      <div><Link to="/home"><img src={home} alt="home"/></Link></div>
      <div><Link to="/search"><img src={search} alt="search"/></Link></div>
      <div><Link to="/upload"><img src={upload} alt="upload"/></Link></div>
      <div><Link to="/activity"><img src={activity} alt="activity"/></Link></div>
      <div><Link to="/profile"><img src={profile} alt="profile"/></Link></div>
    </div>
  );
};

export default Footer;