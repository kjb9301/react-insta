import React from 'react';
import './Upload.scss';

const Upload = () => {
  return (
    <div className="upload-wrapper">
      <div className="upload-header">
        <div className="header-left"></div>
        <div className="header-center">Upload</div>
        <div className="header-right">Done</div>
      </div>
      <div className="upload-content">
        <div className="content-box">
          <div className="content-btn">
            <input type="file"/>
          </div>
          <div className="content-desc">
            <textarea placeholder="description"/>
          </div>
          <div className="content-tag">
            <textarea placeholder="tag"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;