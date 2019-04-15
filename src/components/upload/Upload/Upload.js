import React from 'react';
import './Upload.scss';

const Upload = ({desc,tag,handleChange,insertPost}) => {
  return (
    <div className="upload-wrapper">
      <div className="upload-header">
        <div className="header-left"></div>
        <div className="header-center">Upload</div>
        <div className="header-right" onClick={() => insertPost(desc,tag)}>Done</div>
      </div>
      <div className="upload-content">
        <div className="content-box">
          <div className="content-btn">
            <input type="file"/>
          </div>
          <div className="content-desc">
            <textarea name="desc" value={desc} placeholder="description" onChange={handleChange}/>
          </div>
          <div className="content-tag">
            <textarea name="tag" value={tag} placeholder="tag" onChange={handleChange}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;